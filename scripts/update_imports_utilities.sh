#!/bin/bash

echo "==== UPDATING IMPORT PATHS FOR UTILITIES ===="
echo "This script will update import paths in the design app to reference utilities from the shared directory."

# Define paths
DESIGN_APP="src/apps/design"
MARKETPLACE_APP="src/apps/marketplace"
SHARED_DIR="src/shared"

# Array of directories to process
UTILITY_DIRS=("services" "types" "utils" "hooks" "constants" "config")

# Update imports in the design app
echo "Updating imports in design app..."

for DIR in "${UTILITY_DIRS[@]}"; do
  echo "Processing $DIR imports..."
  
  # Find all files with imports referencing local $DIR
  grep -r --include="*.tsx" --include="*.ts" "from '[\.\/]*${DIR}" "$DESIGN_APP" | cut -d: -f1 | sort | uniq > /tmp/files_to_update.txt
  
  # For each file, update the imports
  while read -r FILE; do
    echo "Updating imports in $FILE"
    
    # Replace relative imports with shared imports
    # This handles patterns like:
    # import X from './services/Y'
    # import X from '../services/Y'
    # import X from 'services/Y'
    sed -i '' "s|from ['\"]\(\.\./\)*${DIR}/|from '@shared/${DIR}/|g" "$FILE"
    sed -i '' "s|from ['\"]\./${DIR}/|from '@shared/${DIR}/|g" "$FILE"
    sed -i '' "s|from ['\"]\([^@\.]\)${DIR}/|from '@shared/${DIR}/|g" "$FILE"
  done < /tmp/files_to_update.txt
done

# Check marketplace app for any imports that should use shared utilities
echo "Checking marketplace app for imports that could use shared utilities..."

for DIR in "${UTILITY_DIRS[@]}"; do
  echo "Processing $DIR imports in marketplace app..."
  
  # Find all files with imports referencing design app utilities
  grep -r --include="*.tsx" --include="*.ts" "from '@/[\.\/]*${DIR}" "$MARKETPLACE_APP" | cut -d: -f1 | sort | uniq > /tmp/marketplace_files.txt
  
  # For each file, update the imports
  while read -r FILE; do
    echo "Updating imports in $FILE"
    
    # Replace design app imports with shared imports
    sed -i '' "s|from '@/${DIR}/|from '@shared/${DIR}/|g" "$FILE"
  done < /tmp/marketplace_files.txt
done

echo ""
echo "==== IMPORT PATHS UPDATED SUCCESSFULLY ===="
echo "You should now check for any import errors in both apps."
echo "Some imports may need manual adjustment if they had special relative paths." 