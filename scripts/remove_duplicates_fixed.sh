#!/bin/bash

echo "==== REMOVING DUPLICATED UTILITY FILES (FIXED VERSION) ===="
echo "This script will backup and remove utility files from the design app that have been moved to shared."
echo "It will skip the parameter panel types directory."
echo "WARNING: Make sure you've tested the updated imports before running this script!"
echo ""

# Confirm before proceeding
read -p "Are you sure you want to remove duplicated files from the design app? (y/n) " -n 1 -r
echo
if [[ ! $REPLY =~ ^[Yy]$ ]]; then
  echo "Operation cancelled."
  exit 1
fi

# Define paths
DESIGN_APP="src/apps/design/src"
SHARED_DIR="src/shared"
BACKUP_DIR="src/apps/design/src/backup_$(date +%Y%m%d_%H%M%S)"

# Create backup directory
mkdir -p "$BACKUP_DIR"
echo "Created backup directory: $BACKUP_DIR"

# Directories to process
UTILITY_DIRS=("services" "utils" "hooks" "constants" "config")

# Skip these paths
SKIP_PATHS=(
  "$DESIGN_APP/components/ConfiguratorPage/components/ParameterPanel/types"
)

# Helper function to check if a path should be skipped
should_skip() {
  local path=$1
  
  for skip_path in "${SKIP_PATHS[@]}"; do
    if [[ "$path" == *"$skip_path"* ]]; then
      return 0 # True, should skip
    fi
  done
  
  return 1 # False, should not skip
}

# Back up and remove duplicated files
for DIR in "${UTILITY_DIRS[@]}"; do
  if [ -d "$DESIGN_APP/$DIR" ]; then
    echo "Processing $DIR..."
    
    # Create backup directory for this utility
    mkdir -p "$BACKUP_DIR/$DIR"
    
    # Copy to backup
    cp -r "$DESIGN_APP/$DIR" "$BACKUP_DIR/"
    echo "  ✓ Backed up $DIR to $BACKUP_DIR/$DIR"
    
    # Find all files that also exist in shared
    find "$DESIGN_APP/$DIR" -type f | while read FILE; do
      # Check if this file should be skipped
      if should_skip "$FILE"; then
        echo "  ! Skipping file in excluded path: $FILE"
        continue
      fi
      
      FILENAME=$(basename "$FILE")
      RELATIVE_PATH=${FILE#$DESIGN_APP/$DIR/}
      
      if [ -f "$SHARED_DIR/$DIR/$FILENAME" ]; then
        # Remove the file from design app
        echo "  - Removing duplicated file: $FILENAME"
        rm "$FILE"
      else
        echo "  ! Keeping unique file: $FILENAME"
      fi
    done
    
    # Check if directory is now empty
    if [ -z "$(ls -A "$DESIGN_APP/$DIR")" ]; then
      echo "  - Directory is now empty, removing $DIR"
      rmdir "$DESIGN_APP/$DIR"
    else
      echo "  ! Directory still contains unique files, keeping $DIR"
    fi
  fi
done

# Also handle the types directory separately
if [ -d "$DESIGN_APP/types" ]; then
  echo "Processing types directory..."
  
  # Create backup directory for types
  mkdir -p "$BACKUP_DIR/types"
  
  # Copy to backup
  cp -r "$DESIGN_APP/types" "$BACKUP_DIR/"
  echo "  ✓ Backed up types to $BACKUP_DIR/types"
  
  # Find all files in types directory, excluding the parameter panel types
  find "$DESIGN_APP/types" -type f | while read FILE; do
    # Check if this file should be skipped
    if should_skip "$FILE"; then
      echo "  ! Skipping file in excluded path: $FILE"
      continue
    fi
    
    FILENAME=$(basename "$FILE")
    
    if [ -f "$SHARED_DIR/types/$FILENAME" ]; then
      # Remove the file from design app
      echo "  - Removing duplicated file: $FILENAME"
      rm "$FILE"
    else
      echo "  ! Keeping unique file: $FILENAME"
    fi
  done
  
  # Check if directory is now empty
  if [ -z "$(ls -A "$DESIGN_APP/types")" ]; then
    echo "  - Types directory is now empty, removing it"
    rmdir "$DESIGN_APP/types"
  else
    echo "  ! Types directory still contains unique files, keeping it"
  fi
fi

echo ""
echo "==== DUPLICATE REMOVAL COMPLETED (FIXED VERSION) ===="
echo "All duplicated files have been backed up to $BACKUP_DIR"
echo "You should now run tests to ensure your changes haven't broken anything." 