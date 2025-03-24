#!/usr/bin/env node

/**
 * Smart copy-shared script for the Prefab monorepo
 * 
 * This script copies files from the main shared folder to the app's shared folder,
 * preserving important local changes and cleaning up unneeded files.
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Define paths
const rootDir = path.resolve(__dirname, '../../../..');
const sourceSharedDir = path.join(rootDir, 'src/shared');
const targetSharedDir = path.join(rootDir, 'src/apps/marketplace/src/shared');
const backupDir = path.join(rootDir, 'tmp-backup');

// Files to preserve (skip during copy)
const PRESERVED_FILES = [
  'hooks/useUser.tsx',       // Already customized
  'services/modelService.ts', // Contains our S3 upload improvements
  'utils/s3Client.ts',       // Contains file upload fixes
];

// Files to clean up (these shouldn't be in the target dir)
const CLEANUP_FILES = [
  'index.js',
  'index.ts',
  'package.json',
  'shared',
  'node_modules',
];

// Create backup directory
if (!fs.existsSync(backupDir)) {
  fs.mkdirSync(backupDir, { recursive: true });
}

// 1. Backup preserved files
console.log('Backing up preserved files...');
for (const file of PRESERVED_FILES) {
  const sourcePath = path.join(targetSharedDir, file);
  const backupPath = path.join(backupDir, path.basename(file));
  
  if (fs.existsSync(sourcePath)) {
    console.log(`Backing up: ${file}`);
    fs.copyFileSync(sourcePath, backupPath);
  }
}

// 2. Remove and recreate the shared directory to ensure a clean state
console.log('Recreating shared directory...');
try {
  // Completely remove the target shared directory if it exists
  if (fs.existsSync(targetSharedDir)) {
    execSync(`rm -rf "${targetSharedDir}"`);
  }
  
  // Create fresh shared directory
  fs.mkdirSync(targetSharedDir, { recursive: true });
  
  // Copy from source to target
  execSync(`cp -R "${sourceSharedDir}/"* "${targetSharedDir}/"`);
} catch (error) {
  console.error('Error during directory operations:', error.message);
  process.exit(1);
}

// 3. Clean up any remaining problematic files that might have been copied
console.log('Cleaning up problematic files...');
try {
  // Remove any symlinks
  execSync(`find "${targetSharedDir}" -type l -delete`);
  
  // Remove specific files that shouldn't be there
  for (const file of CLEANUP_FILES) {
    const targetPath = path.join(targetSharedDir, file);
    if (fs.existsSync(targetPath)) {
      console.log(`Removing: ${file}`);
      execSync(`rm -rf "${targetPath}"`);
    }
  }
} catch (error) {
  console.error('Error during cleanup:', error.message);
}

// 4. Restore preserved files
console.log('Restoring preserved files...');
for (const file of PRESERVED_FILES) {
  const backupPath = path.join(backupDir, path.basename(file));
  const targetPath = path.join(targetSharedDir, file);
  
  // Make sure the directory exists
  fs.mkdirSync(path.dirname(targetPath), { recursive: true });
  
  if (fs.existsSync(backupPath)) {
    console.log(`Restoring: ${file}`);
    fs.copyFileSync(backupPath, targetPath);
  }
}

console.log('Smart copy completed successfully!'); 