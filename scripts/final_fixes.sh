#!/bin/bash

echo "==== BAZAAR MONOREPO FINAL FIXES ===="
echo "This script will fix the remaining import issues and dashboard references."

# Set paths
DESIGN_APP="src/apps/design"
MARKETPLACE_APP="src/apps/marketplace"
SHARED_DIR="src/shared"

# Fix ErrorBoundary imports to use the correct path
echo "Fixing ErrorBoundary imports..."
find "$DESIGN_APP" "$MARKETPLACE_APP" -type f -name "*.tsx" -o -name "*.ts" | xargs grep -l "@shared/components/ErrorBoundary/ErrorBoundary" | while read file; do
  echo "Updating ErrorBoundary import in $file"
  sed -i '' 's|@shared/components/ErrorBoundary/ErrorBoundary|@shared/components/ErrorBoundary|g' "$file"
done

# Fix AuthenticatedFeature imports to use Auth
echo "Fixing AuthenticatedFeature imports..."
find "$DESIGN_APP" "$MARKETPLACE_APP" -type f -name "*.tsx" -o -name "*.ts" | xargs grep -l "@shared/components/AuthenticatedFeature/AuthenticatedFeature" | while read file; do
  echo "Updating AuthenticatedFeature import in $file"
  sed -i '' 's|@shared/components/AuthenticatedFeature/AuthenticatedFeature|@shared/components/Auth/AuthenticatedFeature|g' "$file"
done

# Move PREFAB_COMPONENTS to shared directory if it's still needed
echo "Checking for PREFAB_COMPONENTS references..."
if grep -q "PREFAB_COMPONENTS" "$DESIGN_APP/src/components/ConfiguratorPage/components/Sidebar/Sections/Components.tsx"; then
  echo "Moving PREFAB_COMPONENTS to shared directory..."
  # Create directory if it doesn't exist
  mkdir -p "$SHARED_DIR/components/Marketplace/data"
  
  # Check if the source file exists
  SOURCE_FILE="src/frontend/components/dashboard/pages/Marketplace/data/prefabComponents.ts"
  if [ -f "$SOURCE_FILE" ]; then
    cp "$SOURCE_FILE" "$SHARED_DIR/components/Marketplace/data/"
    # Update import in the components file
    sed -i '' 's|@frontend/components/dashboard/pages/Marketplace/data/prefabComponents|@shared/components/Marketplace/data/prefabComponents|g' "$DESIGN_APP/src/components/ConfiguratorPage/components/Sidebar/Sections/Components.tsx"
  else
    echo "⚠️  Warning: Source file $SOURCE_FILE not found."
    echo "You may need to manually create this file in the shared directory."
  fi
fi

# Move UploadModal to shared directory if it's needed
echo "Checking for UploadModal references..."
if grep -q "UploadModal" "$DESIGN_APP/src/components/ConfiguratorPage/components/Sidebar/Sidebar.tsx"; then
  echo "Fixing UploadModal imports..."
  # Ensure the directory structure exists
  mkdir -p "$SHARED_DIR/components/Uploads/components/UploadModal"
  
  # Check if the source file exists
  SOURCE_DIR="src/frontend/components/dashboard/pages/Uploads/components/UploadModal"
  if [ -d "$SOURCE_DIR" ]; then
    cp -r "$SOURCE_DIR" "$SHARED_DIR/components/Uploads/components/"
    # Update import path
    sed -i '' 's|@shared/components/dashboard/pages/Uploads/components/UploadModal/UploadModal|@shared/components/Uploads/components/UploadModal/UploadModal|g' "$DESIGN_APP/src/components/ConfiguratorPage/components/Sidebar/Sidebar.tsx"
  else
    echo "⚠️  Warning: Source directory $SOURCE_DIR not found."
    echo "You may need to manually create this component in the shared directory."
  fi
fi

# Create stubbed dashboard routes if needed
echo "Checking for dashboard routes reference in App.tsx..."
if grep -q "import('../dashboard/routes/DashboardRoutes')" "$DESIGN_APP/src/components/App/App.tsx"; then
  echo "Creating stub for dashboard routes..."
  mkdir -p "$DESIGN_APP/src/components/dashboard/routes"
  
  # Create a stub for DashboardRoutes if it doesn't exist
  if [ ! -f "$DESIGN_APP/src/components/dashboard/routes/DashboardRoutes.tsx" ]; then
    cat > "$DESIGN_APP/src/components/dashboard/routes/DashboardRoutes.tsx" << 'EOF'
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

const DashboardRoutes = () => {
  return (
    <Routes>
      <Route path="designs" element={<div>My Designs</div>} />
      <Route path="marketplace/prefabs" element={<div>Prefabs Marketplace</div>} />
      <Route path="marketplace/components" element={<div>Components Marketplace</div>} />
      <Route path="*" element={<Navigate to="/dashboard/designs" replace />} />
    </Routes>
  );
};

export default DashboardRoutes;
EOF
  fi
fi

echo "==== FINAL FIXES COMPLETED ===="
echo "You should run the verification script again to check for any remaining issues." 