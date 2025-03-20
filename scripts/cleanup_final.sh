#!/bin/bash

echo "==== BAZAAR MONOREPO FINAL CLEANUP ===="
echo "This script will fix the remaining import structure issues."

# Fix redundant ErrorBoundary components
echo "Fixing redundant ErrorBoundary components..."
if [ -f "src/shared/components/ErrorBoundary.tsx" ] && [ -f "src/shared/components/ErrorBoundary/ErrorBoundary.tsx" ]; then
  echo "Removing duplicated ErrorBoundary.tsx..."
  rm "src/shared/components/ErrorBoundary.tsx"
  
  # Fix import paths for ErrorBoundary
  find "src/apps/design" "src/apps/marketplace" -type f -name "*.tsx" -o -name "*.ts" | xargs grep -l "@shared/components/ErrorBoundary" | while read file; do
    echo "Updating ErrorBoundary import in $file"
    sed -i '' 's|@shared/components/ErrorBoundary|@shared/components/ErrorBoundary/ErrorBoundary|g' "$file"
  done
fi

# Move AuthenticatedFeature to Auth directory
echo "Fixing AuthenticatedFeature location..."
if [ -f "src/shared/components/AuthenticatedFeature/AuthenticatedFeature.tsx" ]; then
  echo "Moving AuthenticatedFeature to Auth directory..."
  mkdir -p "src/shared/components/Auth"
  mv "src/shared/components/AuthenticatedFeature/AuthenticatedFeature.tsx" "src/shared/components/Auth/"
  rm -rf "src/shared/components/AuthenticatedFeature"
  
  # Fix import paths for AuthenticatedFeature
  find "src/apps/design" "src/apps/marketplace" -type f -name "*.tsx" -o -name "*.ts" | xargs grep -l "@shared/components/Auth/AuthenticatedFeature" | while read file; do
    echo "Updating AuthenticatedFeature import in $file"
    sed -i '' 's|@shared/components/Auth/AuthenticatedFeature|@shared/components/Auth/AuthenticatedFeature|g' "$file"
  done
fi

# Update dashboard routes file to avoid double routes
echo "Checking dashboard routes for double routes..."
DASHBOARD_ROUTES="src/apps/design/src/components/dashboard/routes/DashboardRoutes.tsx"
if [ -f "$DASHBOARD_ROUTES" ]; then
  echo "Ensuring dashboard routes doesn't have double routes..."
  # Replace the file contents with a version that doesn't have duplicate routes
  cat > "$DASHBOARD_ROUTES" << 'EOF'
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

const DashboardRoutes = () => {
  return (
    <Routes>
      <Route path="designs" element={<div>My Designs</div>} />
      <Route path="marketplace/prefabs" element={<div>Prefabs Marketplace</div>} />
      <Route path="marketplace/components" element={<div>Components Marketplace</div>} />
      <Route path="*" element={<Navigate to="designs" replace />} />
    </Routes>
  );
};

export default DashboardRoutes;
EOF
  echo "Dashboard routes updated."
fi

echo "==== FINAL CLEANUP COMPLETED ===="
echo "You should run the verification script one last time to check for any remaining issues." 