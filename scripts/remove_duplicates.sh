#!/bin/bash

echo "==== REMOVING DUPLICATED UTILITY FILES ===="
echo "This script will backup and remove utility files from the design app that have been moved to shared."
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
UTILITY_DIRS=("services" "types" "utils" "hooks" "constants" "config")

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

echo ""
echo "==== DUPLICATE REMOVAL COMPLETED ===="
echo "All duplicated files have been backed up to $BACKUP_DIR"
echo "You should now run tests to ensure your changes haven't broken anything." 