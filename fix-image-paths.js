const fs = require('fs');
const path = require('path');
const root = path.resolve(__dirname);
const project = root;
const publicImagesDir = path.join(project, 'public', 'images');
const walk = dir => {
  let results = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) results = results.concat(walk(full));
    else results.push(full);
  }
  return results;
};
const files = walk(publicImagesDir);
const renamed = [];
for (const file of files) {
  const rel = path.relative(publicImagesDir, file);
  const dir = path.dirname(rel);
  const base = path.basename(rel);
  const safe = base.replace(/&/g, 'and').replace(/\s+/g, '-');
  if (safe !== base) {
    const newRel = path.join(dir, safe);
    const newPath = path.join(publicImagesDir, newRel);
    if (fs.existsSync(newPath)) {
      console.error('Collision:', newPath, 'already exists');
      process.exit(1);
    }
    fs.renameSync(file, newPath);
    renamed.push({ old: '/images/' + rel.replace(/\\/g, '/'), new: '/images/' + newRel.replace(/\\/g, '/') });
    console.log('RENAMED', rel, '->', newRel);
  }
}
if (renamed.length === 0) {
  console.log('No files renamed');
  process.exit(0);
}
const srcExtensions = ['.tsx', '.ts', '.js', '.jsx'];
const walkSrc = dir => {
  let results = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name === 'node_modules' || entry.name === '.git' || entry.name === '.next') continue;
      results = results.concat(walkSrc(full));
    } else if (srcExtensions.includes(path.extname(full))) {
      results.push(full);
    }
  }
  return results;
};
const sources = walkSrc(project);
for (const source of sources) {
  let content = fs.readFileSync(source, 'utf8');
  let updated = content;
  for (const { old, new: n } of renamed) {
    const escapedOld = old.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    updated = updated.replace(new RegExp(escapedOld, 'g'), n);
  }
  if (updated !== content) {
    fs.writeFileSync(source, updated, 'utf8');
    console.log('UPDATED', source);
  }
}
console.log('Done');
