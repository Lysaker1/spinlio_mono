const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const { execSync } = require('child_process');

const baseShared = path.resolve(__dirname, '../../../shared');
const marketplaceShared = path.resolve(__dirname, '../src/shared');

function getAllFiles(dirPath, root = dirPath) {
  let files = [];
  for (const file of fs.readdirSync(dirPath)) {
    const fullPath = path.join(dirPath, file);
  
    try {
      const stat = fs.statSync(fullPath);
      if (stat.isDirectory()) {
        files = [...files, ...getAllFiles(fullPath, root)];
      } else {
        files.push(path.relative(root, fullPath));
      }
    } catch (error) {
      console.warn(`⚠️ Skipping unreadable file or folder: ${fullPath}`);
    }
  }
  return files;
}

function hashFile(filePath) {
  try {
    const buffer = fs.readFileSync(filePath);
    return crypto.createHash('sha256').update(buffer).digest('hex');
  } catch (error) {
    console.error(`Could not hash file: ${filePath}`, error.message);
    return '';
  }
}

function getFileSize(filePath) {
  try {
    const stats = fs.statSync(filePath);
    return stats.size;
  } catch (error) {
    return 0;
  }
}

function ensureDirectoryExists(filePath) {
  const dirname = path.dirname(filePath);
  if (fs.existsSync(dirname)) {
    return true;
  }
  ensureDirectoryExists(dirname);
  fs.mkdirSync(dirname);
}

function syncFiles(mode = 'report') {
  const baseFiles = getAllFiles(baseShared);
  const marketplaceFiles = getAllFiles(marketplaceShared);

  const allFiles = new Set([...baseFiles, ...marketplaceFiles]);

  console.log('🔄 Syncing shared files');
  console.log('Mode:', mode === 'report' ? 'Reporting only' : 'Copying newer/larger files');
  console.log('Base shared:', baseShared);
  console.log('Marketplace shared:', marketplaceShared);
  console.log();

  let copyToBase = 0;
  let copyToMarketplace = 0;
  let identical = 0;
  let actions = [];

  for (const relativePath of allFiles) {
    const basePath = path.join(baseShared, relativePath);
    const marketPath = path.join(marketplaceShared, relativePath);

    const baseExists = fs.existsSync(basePath);
    const marketExists = fs.existsSync(marketPath);

    // Both exist, compare them
    if (baseExists && marketExists) {
      const baseHash = hashFile(basePath);
      const marketHash = hashFile(marketPath);
      
      if (baseHash === marketHash) {
        identical++;
        continue;
      }

      // Different files, decide which to keep
      const baseSize = getFileSize(basePath);
      const marketSize = getFileSize(marketPath);
      const baseModified = fs.statSync(basePath).mtime.getTime();
      const marketModified = fs.statSync(marketPath).mtime.getTime();

      // Use the newer file, or if same timestamp, use the larger file
      if (marketModified > baseModified || (marketModified === baseModified && marketSize > baseSize)) {
        actions.push({
          from: marketPath,
          to: basePath,
          size: marketSize,
          reason: 'newer or larger'
        });
        copyToBase++;
      } else {
        actions.push({
          from: basePath,
          to: marketPath,
          size: baseSize,
          reason: 'newer or larger'
        });
        copyToMarketplace++;
      }
    }
    // Only in base, copy to marketplace
    else if (baseExists) {
      actions.push({
        from: basePath,
        to: marketPath,
        size: getFileSize(basePath),
        reason: 'missing in marketplace'
      });
      copyToMarketplace++;
    }
    // Only in marketplace, copy to base
    else if (marketExists) {
      actions.push({
        from: marketPath,
        to: basePath,
        size: getFileSize(marketPath),
        reason: 'missing in base'
      });
      copyToBase++;
    }
  }

  // Report or perform the actions
  console.log(`Files to copy to base: ${copyToBase}`);
  console.log(`Files to copy to marketplace: ${copyToMarketplace}`);
  console.log(`Identical files: ${identical}`);
  console.log();

  if (mode === 'report') {
    console.log('Actions that would be taken (use --sync to perform):');
    for (const action of actions) {
      console.log(`- Copy ${path.relative(process.cwd(), action.from)} → ${path.relative(process.cwd(), action.to)} (${action.reason})`);
    }
  } else if (mode === 'sync') {
    console.log('Performing sync actions:');
    for (const action of actions) {
      try {
        ensureDirectoryExists(action.to);
        fs.copyFileSync(action.from, action.to);
        console.log(`✅ Copied ${path.relative(process.cwd(), action.from)} → ${path.relative(process.cwd(), action.to)}`);
      } catch (error) {
        console.error(`❌ Failed to copy ${path.relative(process.cwd(), action.from)}: ${error.message}`);
      }
    }
  }

  console.log('\n✅ Sync report complete!');
}

// Process command-line arguments
const args = process.argv.slice(2);
const mode = args.includes('--sync') ? 'sync' : 'report';

syncFiles(mode); 