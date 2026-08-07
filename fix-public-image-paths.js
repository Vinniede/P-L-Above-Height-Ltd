const fs = require('fs');
const path = require('path');

const projectRoot = process.cwd();
const publicImagesRoot = path.join(projectRoot, 'public', 'images');
const sourceExtensions = new Set(['.ts', '.tsx', '.js', '.jsx']);
const tempSuffix = '.fiximagecase.tmp';

const safeSegment = (segment) =>
  segment
    .replace(/&/g, 'and')
    .replace(/\s+/g, '-')
    .replace(/[^a-zA-Z0-9._-]+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-+|-+$/g, '')
    .toLowerCase();

const safeRelative = (rel) =>
  rel
    .split(/[/\\]+/)
    .filter(Boolean)
    .map((segment) => safeSegment(segment))
    .join('/');

const walkFiles = (dir) =>
  fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) return walkFiles(full);
    return [full];
  });

const walkSourceFiles = (dir) =>
  fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (['node_modules', '.git', '.next'].includes(entry.name)) return [];
      return walkSourceFiles(full);
    }
    return sourceExtensions.has(path.extname(full)) ? [full] : [];
  });

const imageFiles = walkFiles(publicImagesRoot);
const fileMoves = imageFiles
  .map((filePath) => {
    const rel = path.relative(publicImagesRoot, filePath).replace(/\\/g, '/');
    const safeRel = safeRelative(rel);
    return safeRel !== rel ? { oldRel: rel, newRel: safeRel } : null;
  })
  .filter(Boolean);

const walkDirs = (dir) =>
  fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) return [full, ...walkDirs(full)];
    return [];
  });

const dirMoves = walkDirs(publicImagesRoot)
  .map((dirPath) => {
    const rel = path.relative(publicImagesRoot, dirPath).replace(/\\/g, '/');
    const safeRel = safeRelative(rel);
    return safeRel !== rel ? { oldRel: rel, newRel: safeRel } : null;
  })
  .filter(Boolean)
  .sort((a, b) => b.oldRel.split('/').length - a.oldRel.split('/').length);

const renameWithTemp = (from, to) => {
  if (from === to) return null;
  if (!fs.existsSync(from)) {
    throw new Error(`Source does not exist: ${from}`);
  }
  const temp = from + tempSuffix;
  if (fs.existsSync(temp)) fs.unlinkSync(temp);
  fs.renameSync(from, temp);
  return { temp, to };
};

const pendingRenames = [];
for (const { oldRel, newRel } of dirMoves) {
  const from = path.join(publicImagesRoot, oldRel);
  const to = path.join(publicImagesRoot, newRel);
  pendingRenames.push(renameWithTemp(from, to));
  console.log('DIR_RENAME', oldRel, '->', newRel);
}

for (const { oldRel, newRel } of fileMoves.sort((a, b) => b.oldRel.length - a.oldRel.length)) {
  const from = path.join(publicImagesRoot, oldRel);
  const to = path.join(publicImagesRoot, newRel);
  pendingRenames.push(renameWithTemp(from, to));
  console.log('FILE_RENAME', oldRel, '->', newRel);
}

for (const item of pendingRenames.filter(Boolean)) {
  const { temp, to } = item;
  const dir = path.dirname(to);
  fs.mkdirSync(dir, { recursive: true });
  if (fs.existsSync(to)) {
    throw new Error(`Destination path already exists: ${to}`);
  }
  fs.renameSync(temp, to);
}

if (pendingRenames.length === 0) {
  console.log('No public image paths required renaming.');
} else {
  const moves = [...dirMoves, ...fileMoves].map(({ oldRel, newRel }) => ({
    oldUrl: '/images/' + oldRel,
    newUrl: '/images/' + newRel,
  }));
  const sourceFiles = walkSourceFiles(projectRoot);
  let updatedSources = 0;
  for (const sourceFile of sourceFiles) {
    const content = fs.readFileSync(sourceFile, 'utf8');
    let updated = content;
    for (const { oldUrl, newUrl } of moves) {
      updated = updated.split(oldUrl).join(newUrl);
      updated = updated.split(encodeURI(oldUrl)).join(newUrl);
    }
    if (updated !== content) {
      fs.writeFileSync(sourceFile, updated, 'utf8');
      updatedSources += 1;
      console.log('UPDATED_SOURCE', sourceFile);
    }
  }
  console.log(`Updated ${updatedSources} source files to normalized image paths.`);
}

console.log('Done.');
