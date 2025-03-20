#!/bin/bash

echo "==== BAZAAR MONOREPO IMPORT UPDATER ===="
echo "This script will update import statements to use shared components."
echo ""

# Paths
DESIGN_APP="src/apps/design"
MARKETPLACE_APP="src/apps/marketplace"
SHARED_DIR="src/shared"

# Components that have been moved to shared
SHARED_COMPONENTS=("Auth" "ErrorBoundary")

# Update imports in design app
echo "Updating imports in design app..."
for COMPONENT in "${SHARED_COMPONENTS[@]}"; do
  # Find files that import from the local component
  grep -r --include="*.tsx" --include="*.ts" "from '.*components/${COMPONENT}" $DESIGN_APP | cut -d: -f1 | sort | uniq > /tmp/files_to_update.txt
  
  # Replace imports with shared imports
  while read -r FILE; do
    echo "Updating imports in $FILE"
    sed -i '' "s/from ['\"]\(.*\)components\/${COMPONENT}['\"]$/from '@shared\/components\/${COMPONENT}'/g" "$FILE"
  done < /tmp/files_to_update.txt
done

# Update imports in marketplace app
echo "Updating imports in marketplace app..."
for COMPONENT in "${SHARED_COMPONENTS[@]}"; do
  # Find files that import from the local component
  grep -r --include="*.tsx" --include="*.ts" "from '.*components/${COMPONENT}" $MARKETPLACE_APP | cut -d: -f1 | sort | uniq > /tmp/files_to_update.txt
  
  # Replace imports with shared imports
  while read -r FILE; do
    echo "Updating imports in $FILE"
    sed -i '' "s/from ['\"]\(.*\)components\/${COMPONENT}['\"]$/from '@shared\/components\/${COMPONENT}'/g" "$FILE"
  done < /tmp/files_to_update.txt
done

echo "==== IMPORT UPDATES COMPLETED ===="
echo "Note: You may need to manually check and fix some imports." 