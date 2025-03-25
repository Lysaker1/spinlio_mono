const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const baseShared = path.resolve(__dirname, '../../../shared');
const marketplaceShared = path.resolve(__dirname, '../src/shared');

function getAllFiles(dirPath, root = dirPath) {
  let files = [];
  for (const file of fs.readdirSync(dirPath)) {
    const fullPath = path.join(dirPath, file);
    let stat;
    try {
      stat = fs.statSync(fullPath);
    } catch (err) {
      console.warn(`⚠️  Skipping broken path: ${fullPath}`);
      continue;
    }
    if (stat.isDirectory()) {
      files = files.concat(getAllFiles(fullPath, root));
    } else if (stat.isFile()) {
      files.push(path.relative(root, fullPath));
    }
  }
  return files;
}

function hashFile(filePath) {
  const buffer = fs.readFileSync(filePath);
  return crypto.createHash('sha256').update(buffer).digest('hex');
}

function compareSharedFiles() {
  const baseFiles = getAllFiles(baseShared);
  const marketplaceFiles = getAllFiles(marketplaceShared);

  const allFiles = new Set([...baseFiles, ...marketplaceFiles]);

  console.log('🔍 Comparing shared files between:\n-', baseShared, '\n-', marketplaceShared, '\n');

  let different = 0;
  let missing = 0;

  for (const relativePath of allFiles) {
    const basePath = path.join(baseShared, relativePath);
    const marketPath = path.join(marketplaceShared, relativePath);

    const baseExists = fs.existsSync(basePath);
    const marketExists = fs.existsSync(marketPath);

    if (!baseExists) {
      console.log(`❌ Missing in src/shared: ${relativePath}`);
      missing++;
    } else if (!marketExists) {
      console.log(`❌ Missing in marketplace/shared: ${relativePath}`);
      missing++;
    } else {
      const baseHash = hashFile(basePath);
      const marketHash = hashFile(marketPath);
      if (baseHash !== marketHash) {
        console.log(`⚠️  Differs: ${relativePath}`);
        different++;
      }
    }
  }

  console.log(`\n✅ Done. ${different} different files, ${missing} missing files.`);
}

compareSharedFiles(); 