#!/bin/bash

# Navigate to project root
cd "$(dirname "$0")"

echo "Finding all files with @frontend imports..."

# Use TypeScript path aliases to solve this problem more elegantly
cat << EOF > src/apps/design/tsconfig.paths.json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@frontend/*": ["../../frontend/*", "src/*", "../../shared/*"],
      "@/*": ["src/*"],
      "@shared/*": ["../../shared/*"]
    }
  }
}
EOF

# Update main tsconfig to include paths
cat << 'EOF' > src/apps/design/update-tsconfig.js
const fs = require('fs');
const path = require('path');

// Read the current tsconfig
const tsconfigPath = path.join(__dirname, 'tsconfig.json');
const tsconfig = JSON.parse(fs.readFileSync(tsconfigPath, 'utf8'));

// Read paths config
const pathsConfig = JSON.parse(fs.readFileSync(path.join(__dirname, 'tsconfig.paths.json'), 'utf8'));

// Merge the paths config into the main tsconfig
tsconfig.compilerOptions = {
  ...tsconfig.compilerOptions,
  ...pathsConfig.compilerOptions,
};

// Write the updated config back
fs.writeFileSync(tsconfigPath, JSON.stringify(tsconfig, null, 2), 'utf8');

console.log('tsconfig.json updated with path mappings');
EOF

# Run the update script
node src/apps/design/update-tsconfig.js

# Remove the temporary files
rm src/apps/design/update-tsconfig.js

echo "Added path aliases to tsconfig.json to handle @frontend imports"
echo "This allows TypeScript to resolve @frontend/* imports to multiple locations:"
echo "1. ../../frontend/* (original code)"
echo "2. src/* (local code)"
echo "3. ../../shared/* (shared code)"
echo ""
echo "You may need to restart your TypeScript server for changes to take effect" 