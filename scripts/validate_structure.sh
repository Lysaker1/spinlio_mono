#!/bin/bash

echo "==== VALIDATING PROJECT STRUCTURE ===="
echo "This script checks if the project structure follows the monorepo best practices."

# Define paths
DESIGN_APP="src/apps/design/src"
MARKETPLACE_APP="src/apps/marketplace/src"
SHARED_DIR="src/shared"

# Check shared directories
echo "Checking shared directories..."
SHARED_DIRS=("services" "types" "utils" "hooks" "constants" "components" "config")

for DIR in "${SHARED_DIRS[@]}"; do
  if [ -d "$SHARED_DIR/$DIR" ]; then
    echo "✓ $DIR exists in shared directory"
    
    # Count files to ensure they're not empty
    FILE_COUNT=$(find "$SHARED_DIR/$DIR" -type f | wc -l | xargs)
    if [ "$FILE_COUNT" -gt 0 ]; then
      echo "  - Contains $FILE_COUNT files"
    else
      echo "  ⚠️  WARNING: Directory is empty"
    fi
  else
    echo "✗ $DIR missing from shared directory"
  fi
done

# Check for leftover utility directories in design app
echo ""
echo "Checking for leftover utility directories in design app..."
LEFTOVER_DIRS=()

for DIR in "${SHARED_DIRS[@]}"; do
  # Skip components as they can be app-specific
  if [ "$DIR" = "components" ]; then
    continue
  fi
  
  if [ -d "$DESIGN_APP/$DIR" ]; then
    echo "⚠️  WARNING: $DIR still exists in design app"
    LEFTOVER_DIRS+=("$DIR")
    
    # Check if files in design app also exist in shared
    echo "  Checking for duplicated files..."
    find "$DESIGN_APP/$DIR" -type f -name "*.ts" -o -name "*.tsx" | while read FILE; do
      FILENAME=$(basename "$FILE")
      if [ -f "$SHARED_DIR/$DIR/$FILENAME" ]; then
        echo "    - $FILENAME exists in both design app and shared"
      fi
    done
  else
    echo "✓ $DIR properly moved to shared"
  fi
done

# Check tsconfig.json and webpack.config.js for path mappings
echo ""
echo "Checking configuration files for proper path mappings..."

if grep -q "'@shared" "src/apps/design/tsconfig.json" || grep -q "\"@shared" "src/apps/design/tsconfig.json"; then
  echo "✓ Found @shared path mapping in design app tsconfig.json"
else
  echo "⚠️  WARNING: No @shared path mapping found in design app tsconfig.json"
fi

if grep -q "@shared" "src/apps/design/webpack.config.js"; then
  echo "✓ Found @shared path mapping in design app webpack.config.js"
else
  echo "⚠️  WARNING: No @shared path mapping found in design app webpack.config.js"
fi

if grep -q "'@shared" "src/apps/marketplace/tsconfig.json" || grep -q "\"@shared" "src/apps/marketplace/tsconfig.json"; then
  echo "✓ Found @shared path mapping in marketplace app tsconfig.json"
else
  echo "⚠️  WARNING: No @shared path mapping found in marketplace app tsconfig.json"
fi

if grep -q "@shared" "src/apps/marketplace/webpack.config.js"; then
  echo "✓ Found @shared path mapping in marketplace app webpack.config.js"
else
  echo "⚠️  WARNING: No @shared path mapping found in marketplace app webpack.config.js"
fi

echo ""
echo "==== VALIDATION COMPLETED ===="
if [ ${#LEFTOVER_DIRS[@]} -eq 0 ]; then
  echo "✅ All utilities appear to be properly moved to shared!"
else
  echo "⚠️  Found ${#LEFTOVER_DIRS[@]} directories that should be reviewed:"
  for DIR in "${LEFTOVER_DIRS[@]}"; do
    echo "  - $DIR"
  done
  echo "You may want to check if these contain app-specific code that should remain in the design app."
fi 