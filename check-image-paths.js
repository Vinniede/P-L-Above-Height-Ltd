const fs = require('fs');
const path = require('path');
const projectRoot = process.cwd();
const publicRoot = path.join(projectRoot, 'public');
const sourceExt = ['.tsx', '.ts', '.js', '.jsx'];

const walk = (dir) => {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (['node_modules', '.git', '.next'].includes(entry.name)) return [];
      return walk(full);
    }
    return sourceExt.includes(path.extname(full)) ? [full] : [];
  });
};

const sourceFiles = walk(projectRoot);
const refRegex = /(["'])(\/images\/[^"]*?)(["'])/g;
const missing = [];
for (const file of sourceFiles) {
  const text = fs.readFileSync(file, 'utf8');
  let m;
  while ((m = refRegex.exec(text)) !== null) {
    const url = m[2];
    const decoded = decodeURIComponent(url);
    const candidatePaths = [decoded, url];
    const exists = candidatePaths.some((p) => fs.existsSync(path.join(publicRoot, p)));
    if (!exists) {
      missing.push({ file, url, decoded, line: text.substring(0, m.index).split('\n').length });
    }
  }
}
if (missing.length === 0) {
  console.log('No missing /images references found.');
  process.exit(0);
}
console.log('Missing image references:');
for (const item of missing) {
  console.log(`${item.file}:${item.line} -> ${item.url} (decoded: ${item.decoded})`);
}
process.exit(1);
