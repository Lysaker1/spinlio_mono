#!/bin/bash

echo "==== BAZAAR MONOREPO RESTRUCTURE SCRIPT ===="
echo "This script will help reorganize the codebase to follow proper monorepo structure."
echo ""

# Paths
DESIGN_APP="src/apps/design"
MARKETPLACE_APP="src/apps/marketplace"
SHARED_DIR="src/shared"
FRONTEND_DIR="src/frontend"

# Create necessary directories
mkdir -p $SHARED_DIR/components
mkdir -p $SHARED_DIR/hooks
mkdir -p $SHARED_DIR/services
mkdir -p $SHARED_DIR/utils
mkdir -p $SHARED_DIR/types
mkdir -p $SHARED_DIR/assets
mkdir -p $SHARED_DIR/constants

# Step 1: Remove dashboard from design app
echo "Step 1: Removing dashboard from design app..."
rm -rf $DESIGN_APP/src/components/components/dashboard

# Step 2: Clean up the nested components structure in design app
echo "Step 2: Cleaning up nested components in design app..."
mkdir -p $DESIGN_APP/src/components_tmp

# Move components from nested structure to tmp location
for COMPONENT_DIR in $DESIGN_APP/src/components/components/*; do
  if [ -d "$COMPONENT_DIR" ]; then
    COMPONENT_NAME=$(basename "$COMPONENT_DIR")
    echo "Processing component: $COMPONENT_NAME"
    
    # Skip if it's a dashboard component
    if [ "$COMPONENT_NAME" == "dashboard" ]; then
      continue
    fi
    
    # Move to tmp location
    cp -r "$COMPONENT_DIR" "$DESIGN_APP/src/components_tmp/"
  fi
done

# Clean up the double nested directory
rm -rf $DESIGN_APP/src/components/components

# Move components back to proper location
for COMPONENT_DIR in $DESIGN_APP/src/components_tmp/*; do
  if [ -d "$COMPONENT_DIR" ]; then
    COMPONENT_NAME=$(basename "$COMPONENT_DIR")
    
    # Check if component already exists in the destination
    if [ -d "$DESIGN_APP/src/components/$COMPONENT_NAME" ]; then
      echo "Component $COMPONENT_NAME already exists, comparing..."
      
      # You could add file comparison here if needed
      # For now, we'll skip duplicates
      echo "Skipping duplicate component: $COMPONENT_NAME"
    else
      echo "Moving $COMPONENT_NAME to components directory"
      cp -r "$COMPONENT_DIR" "$DESIGN_APP/src/components/"
    fi
  fi
done

# Remove temporary directory
rm -rf $DESIGN_APP/src/components_tmp

# Step 3: Move shared components to shared directory if not already there
echo "Step 3: Moving common components to shared directory..."

# Define components that should be in shared
SHARED_COMPONENTS=("Auth" "ErrorBoundary" "Button")

for COMPONENT in "${SHARED_COMPONENTS[@]}"; do
  # Check if component exists in design app
  if [ -d "$DESIGN_APP/src/components/$COMPONENT" ]; then
    # Check if it's already in shared
    if [ ! -d "$SHARED_DIR/components/$COMPONENT" ]; then
      echo "Moving $COMPONENT to shared directory"
      cp -r "$DESIGN_APP/src/components/$COMPONENT" "$SHARED_DIR/components/"
    fi
  fi
done

# Step 4: Move hooks to shared directory
echo "Step 4: Moving shared hooks to shared directory..."
cp -r $FRONTEND_DIR/hooks/* $SHARED_DIR/hooks/

# Step 5: Move services to shared directory
echo "Step 5: Moving services to shared directory..."
cp -r $FRONTEND_DIR/services/* $SHARED_DIR/services/

# Step 6: Move utils to shared directory
echo "Step 6: Moving utils to shared directory..."
cp -r $FRONTEND_DIR/utils/* $SHARED_DIR/utils/

# Step 7: Move constants to shared directory
echo "Step 7: Moving constants to shared directory..."
cp -r $FRONTEND_DIR/constants/* $SHARED_DIR/constants/

# Step 8: Move types to shared directory
echo "Step 8: Moving types to shared directory..."
cp -r $FRONTEND_DIR/types/* $SHARED_DIR/types/

# Step 9: Move assets to shared directory
echo "Step 9: Moving assets to shared directory..."
cp -r $FRONTEND_DIR/assets/* $SHARED_DIR/assets/

echo "==== RESTRUCTURING COMPLETED ===="
echo "Next steps:"
echo "1. Check for any import path issues in both apps"
echo "2. Test both apps to ensure they still work"
echo "3. Remove duplicated components once everything is verified"
echo "4. Update imports in both apps to use components from shared directory" 