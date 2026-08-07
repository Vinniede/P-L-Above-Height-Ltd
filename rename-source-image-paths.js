const fs = require('fs');
const path = require('path');
const root = process.cwd();
const publicRoot = path.join(root, 'public');
const imageRoot = path.join(publicRoot, 'images');
const sourceExt = new Set(['.ts', '.tsx', '.js', '.jsx']);

const walk = (dir) => {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (['node_modules', '.git', '.next'].includes(entry.name)) return [];
      return walk(full);
    }
    return sourceExt.has(path.extname(full)) ? [full] : [];
  });
};

const walkFiles = (dir) => {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) return walkFiles(full);
    return [full];
  });
};

const normalizeReference = (ref) => {
  try {
    return decodeURIComponent(ref);
  } catch {
    return ref;
  }
};

const safeize = (rel) => {
  return rel
    .split('/')
    .map((segment) =>
      segment
        .replace(/&/g, 'and')
        .replace(/\s+/g, '-')
        .replace(/[^a-zA-Z0-9._-]+/g, '-')
        .replace(/-+/g, '-')
        .replace(/^-+|-+$/g, '')
        .toLowerCase()
    )
    .join('/');
};

const imageFiles = walkFiles(imageRoot).map((file) => {
  const rel = path.relative(imageRoot, file).replace(/\\/g, '/');
  return { rel, safe: safeize(rel) };
});
const imageMap = new Map();
for (const { rel, safe } of imageFiles) {
  imageMap.set(safe, '/images/' + safe);
}

const sourceFiles = walk(root);
let updateCount = 0;
let changedFiles = 0;
for (const sourceFile of sourceFiles) {
  const text = fs.readFileSync(sourceFile, 'utf8');
  let updated = text;
  const regex = /(["'])(\/images\/(?:[^"'\\]+))(\1)/g;
  updated = updated.replace(regex, (match, quote, imagePath) => {
    const normalized = normalizeReference(imagePath);
    const safe = safeize(normalized.replace(/^\/images\//, ''));
    const mapped = imageMap.get(safe);
    if (mapped && mapped !== imagePath) {
      updateCount++;
      return `${quote}${mapped}${quote}`;
    }
    return match;
  });
  if (updated !== text) {
    fs.writeFileSync(sourceFile, updated, 'utf8');
    changedFiles++;
    console.log('UPDATED', sourceFile);
  }
}
console.log('DONE', changedFiles, 'files updated,', updateCount, 'replacements made.');
