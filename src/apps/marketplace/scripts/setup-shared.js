const fs = require('fs');
const path = require('path');

const sourceRoot = path.resolve(__dirname, '../../../shared');
const targetRoot = path.resolve(__dirname, '../src/shared');

function ensureDirectoryExists(dirPath) {
  if (!fs.existsSync(dirPath)) {
    console.log(`Creating directory: ${dirPath}`);
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

function copyDirectory(source, target) {
  ensureDirectoryExists(target);
  const entries = fs.readdirSync(source, { withFileTypes: true });

  for (const entry of entries) {
    const sourcePath = path.join(source, entry.name);
    const targetPath = path.join(target, entry.name);

    if (entry.isDirectory()) {
      copyDirectory(sourcePath, targetPath);
    } else {
      // Skip backup or system files
      if (entry.name.startsWith('.') || entry.name.endsWith('.bak')) {
        continue;
      }
      
      console.log(`Copying file: ${path.relative(sourceRoot, sourcePath)} to ${path.relative(targetRoot, targetPath)}`);
      fs.copyFileSync(sourcePath, targetPath);
    }
  }
}

// Create the target directory if it doesn't exist
ensureDirectoryExists(targetRoot);

// Copy these specific directories from shared
const directoriesToCopy = [
  'assets',
  'components',
  'config',
  'constants',
  'hooks',
  'services',
  'types',
  'utils'
];

for (const dir of directoriesToCopy) {
  const sourceDir = path.join(sourceRoot, dir);
  const targetDir = path.join(targetRoot, dir);
  
  if (fs.existsSync(sourceDir)) {
    console.log(`Copying directory: ${dir}`);
    copyDirectory(sourceDir, targetDir);
  } else {
    console.log(`Warning: Directory not found: ${sourceDir}`);
  }
}

console.log('Done! Shared files have been copied to marketplace app.'); 