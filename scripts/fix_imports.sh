#!/bin/bash

echo "==== BAZAAR MONOREPO IMPORT FIXER ===="
echo "This script will fix the remaining import issues."
echo ""

# Paths
DESIGN_APP="src/apps/design"
MARKETPLACE_APP="src/apps/marketplace"
SHARED_DIR="src/shared"

# Fix local imports of ErrorBoundary in design app
echo "Fixing local imports of ErrorBoundary in design app..."
# Find files that import ErrorBoundary locally
grep -r --include="*.tsx" --include="*.ts" "import ErrorBoundary from .*components/ErrorBoundary/ErrorBoundary" $DESIGN_APP | cut -d: -f1 | sort | uniq > /tmp/files_to_update.txt

# Update imports to use shared ErrorBoundary
while read -r FILE; do
  echo "Updating ErrorBoundary import in $FILE"
  sed -i '' "s|import ErrorBoundary from '.*components/ErrorBoundary/ErrorBoundary'|import ErrorBoundary from '@shared/components/ErrorBoundary/ErrorBoundary'|g" "$FILE"
done < /tmp/files_to_update.txt

# Fix local imports of AuthenticatedFeature in design app
echo "Fixing local imports of AuthenticatedFeature in design app..."
# Find files that import AuthenticatedFeature locally
grep -r --include="*.tsx" --include="*.ts" "import { AuthenticatedFeature } from '.*components/AuthenticatedFeature/AuthenticatedFeature'" $DESIGN_APP | cut -d: -f1 | sort | uniq > /tmp/files_to_update.txt

# Update imports to use shared AuthenticatedFeature
while read -r FILE; do
  echo "Updating AuthenticatedFeature import in $FILE"
  # First move the AuthenticatedFeature component to shared if it doesn't exist
  if [ ! -d "$SHARED_DIR/components/AuthenticatedFeature" ]; then
    mkdir -p "$SHARED_DIR/components/AuthenticatedFeature"
    cp -r "$DESIGN_APP/src/components/AuthenticatedFeature/AuthenticatedFeature.tsx" "$SHARED_DIR/components/AuthenticatedFeature/"
  fi
  
  sed -i '' "s|import { AuthenticatedFeature } from '.*components/AuthenticatedFeature/AuthenticatedFeature'|import { AuthenticatedFeature } from '@shared/components/AuthenticatedFeature/AuthenticatedFeature'|g" "$FILE"
done < /tmp/files_to_update.txt

# Fix local imports in marketplace app (same process)
echo "Fixing local imports in marketplace app..."
# ErrorBoundary
grep -r --include="*.tsx" --include="*.ts" "import ErrorBoundary from .*components/ErrorBoundary/ErrorBoundary" $MARKETPLACE_APP | cut -d: -f1 | sort | uniq > /tmp/files_to_update.txt

while read -r FILE; do
  echo "Updating ErrorBoundary import in $FILE"
  sed -i '' "s|import ErrorBoundary from '.*components/ErrorBoundary/ErrorBoundary'|import ErrorBoundary from '@shared/components/ErrorBoundary/ErrorBoundary'|g" "$FILE"
done < /tmp/files_to_update.txt

# AuthenticatedFeature
grep -r --include="*.tsx" --include="*.ts" "import { AuthenticatedFeature } from '.*components/AuthenticatedFeature/AuthenticatedFeature'" $MARKETPLACE_APP | cut -d: -f1 | sort | uniq > /tmp/files_to_update.txt

while read -r FILE; do
  echo "Updating AuthenticatedFeature import in $FILE"
  sed -i '' "s|import { AuthenticatedFeature } from '.*components/AuthenticatedFeature/AuthenticatedFeature'|import { AuthenticatedFeature } from '@shared/components/AuthenticatedFeature/AuthenticatedFeature'|g" "$FILE"
done < /tmp/files_to_update.txt

# Fix @frontend imports that reference dashboard
echo "Fixing @frontend imports that reference dashboard..."
grep -r --include="*.tsx" --include="*.ts" "import.*from '@frontend/components/dashboard" $DESIGN_APP | cut -d: -f1 | sort | uniq > /tmp/files_to_update.txt

while read -r FILE; do
  echo "Updating dashboard import in $FILE"
  sed -i '' "s|from '@frontend/components/dashboard|from '@shared/components/dashboard|g" "$FILE"
done < /tmp/files_to_update.txt

echo "==== IMPORT FIXES COMPLETED ===="
echo "You should run the verification script again to check for any remaining issues." 