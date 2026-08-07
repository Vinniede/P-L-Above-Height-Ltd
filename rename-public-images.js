const fs = require("fs");
const path = require("path");
const projectRoot = process.cwd();
const imagesRoot = path.join(projectRoot, "public", "images");
const sourceExtensions = [".ts", ".tsx", ".js", ".jsx"];

const normalizeName = (name) => {
  return name
    .replace(/&/g, "and")
    .replace(/\s+/g, "-")
    .replace(/[^a-zA-Z0-9._-]+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-+|-+$/g, "");
};

const walk = (dir) => {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) return walk(fullPath);
    return [fullPath];
  });
};

const walkSources = (dir) => {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (["node_modules", ".git", ".next"].includes(entry.name)) return [];
      return walkSources(fullPath);
    }
    return sourceExtensions.includes(path.extname(fullPath)) ? [fullPath] : [];
  });
};

const oldToNew = [];
for (const filePath of walk(imagesRoot)) {
  const rel = path.relative(imagesRoot, filePath);
  const dir = path.dirname(rel);
  const base = path.basename(rel);
  const safeBase = normalizeName(base);
  if (safeBase !== base) {
    const targetRel = path.join(dir, safeBase);
    const targetPath = path.join(imagesRoot, targetRel);
    if (fs.existsSync(targetPath)) {
      console.error("Collision detected:", targetPath);
      process.exit(1);
    }
    fs.mkdirSync(path.dirname(targetPath), { recursive: true });
    fs.renameSync(filePath, targetPath);
    oldToNew.push({
      old: "/images/" + rel.replace(/\\/g, "/"),
      encodedOld: "/images/" + encodeURI(rel.replace(/\\/g, "/")),
      newPath: "/images/" + targetRel.replace(/\\/g, "/"),
    });
    console.log("RENAMED", rel, "->", targetRel);
  }
}

const sourceFiles = walkSources(projectRoot);
let updatedFiles = 0;
for (const sourceFile of sourceFiles) {
  let content = fs.readFileSync(sourceFile, "utf8");
  let updated = content;
  for (const { old, encodedOld, newPath } of oldToNew) {
    updated = updated.split(old).join(newPath);
    updated = updated.split(encodedOld).join(newPath);
  }
  if (updated !== content) {
    fs.writeFileSync(sourceFile, updated, "utf8");
    updatedFiles += 1;
    console.log("UPDATED", sourceFile);
  }
}

console.log(
  "Done. Renamed",
  oldToNew.length,
  "files and updated",
  updatedFiles,
  "source files.",
);
