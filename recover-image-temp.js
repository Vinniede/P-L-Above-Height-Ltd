const fs = require('fs');
const path = require('path');
const root = process.cwd();
const imagesRoot = path.join(root, 'public', 'images');

const items = [];
const walk = (dir) => {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(full);
      if (entry.name.endsWith('.fiximagecase.tmp')) {
        items.push(full);
      }
    } else if (entry.name.endsWith('.fiximagecase.tmp')) {
      items.push(full);
    }
  }
};

walk(imagesRoot);
if (!items.length) {
  console.log('No .fiximagecase.tmp items found.');
  process.exit(0);
}

items.sort((a, b) => b.length - a.length);
for (const item of items) {
  const target = item.replace(/\.fiximagecase\.tmp$/, '');
  if (fs.existsSync(target)) {
    console.error('Target exists, cannot recover:', target);
    process.exit(1);
  }
  fs.renameSync(item, target);
  console.log('RECOVERED', item, '->', target);
}
console.log('Recovery complete.');
