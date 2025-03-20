#!/bin/bash

echo "==== FIXING REMAINING DEPENDENCIES ON DESIGN APP UTILITIES ===="
echo "This script will fix any remaining references to design app utilities."

# Define paths
DESIGN_APP="src/apps/design"
MARKETPLACE_APP="src/apps/marketplace"
SHARED_DIR="src/shared"

# Create a directory for any local types that might be needed
mkdir -p "$DESIGN_APP/src/components/ConfiguratorPage/components/ParameterPanel/types"

# Check if the ParameterDefinition type exists in the shared directory
if [ ! -f "$SHARED_DIR/types/ParameterDefinition.ts" ]; then
  echo "Creating shared ParameterDefinition type..."
  # Extract the type from a parameter definitions file
  grep -A 50 "export interface ParameterDefinition" "$DESIGN_APP/src/components/ConfiguratorPage/components/ParameterPanel/types.ts" > "$SHARED_DIR/types/ParameterDefinition.ts"
else
  echo "Shared ParameterDefinition type already exists."
fi

# Create a local reference to the shared type
cat > "$DESIGN_APP/src/components/ConfiguratorPage/components/ParameterPanel/types/index.ts" << EOF
// Re-export ParameterDefinition from shared
export { ParameterDefinition } from '@shared/types/ParameterDefinition';
EOF

echo "Created local reference to shared ParameterDefinition type."

# Update parameter definition files to use the new path
echo "Updating parameter definition imports..."
find "$DESIGN_APP/src/components/ConfiguratorPage/components/ParameterPanel" -name "parameterDefinitions*.ts" | while read file; do
  sed -i '' "s|import { ParameterDefinition } from './types';|import { ParameterDefinition } from './types';|" "$file"
done

# Fix marketplace app references
echo "Checking marketplace app references..."

# Pedro component utilities
PEDRO_DIR="$MARKETPLACE_APP/src/components/dashboard/pages/Pedro"

if [ -d "$PEDRO_DIR" ]; then
  echo "Fixing Pedro component dependencies..."
  
  # Create necessary shared directories for Pedro-specific utilities
  mkdir -p "$SHARED_DIR/components/Pedro/utils/analyzers"
  mkdir -p "$SHARED_DIR/components/Pedro/hooks"
  mkdir -p "$SHARED_DIR/components/Pedro/constants"
  
  # Move any existing utility files to shared
  if [ -f "$PEDRO_DIR/utils/analyzers/AnalyzerFactory.ts" ]; then
    echo "Moving AnalyzerFactory to shared..."
    cp -r "$PEDRO_DIR/utils/analyzers/" "$SHARED_DIR/components/Pedro/utils/analyzers/"
    # Update import in Pedro.tsx
    sed -i '' "s|import { AnalyzerFactory } from './utils/analyzers/AnalyzerFactory';|import { AnalyzerFactory } from '@shared/components/Pedro/utils/analyzers/AnalyzerFactory';|" "$PEDRO_DIR/Pedro.tsx"
  fi
  
  # Move hooks
  if [ -d "$PEDRO_DIR/hooks" ]; then
    echo "Moving Pedro hooks to shared..."
    cp -r "$PEDRO_DIR/hooks/" "$SHARED_DIR/components/Pedro/hooks/"
    # Update imports in Pedro.tsx
    sed -i '' "s|import useModelLoader from './hooks/useModelLoader';|import useModelLoader from '@shared/components/Pedro/hooks/useModelLoader';|" "$PEDRO_DIR/Pedro.tsx"
    sed -i '' "s|import useSnapPoints from './hooks/useSnapPoints';|import useSnapPoints from '@shared/components/Pedro/hooks/useSnapPoints';|" "$PEDRO_DIR/Pedro.tsx"
    sed -i '' "s|import { useComponentOptions } from './hooks/useComponentOptions';|import { useComponentOptions } from '@shared/components/Pedro/hooks/useComponentOptions';|" "$PEDRO_DIR/Pedro.tsx"
    sed -i '' "s|import { useComponentIntegration } from './hooks/useComponentIntegration';|import { useComponentIntegration } from '@shared/components/Pedro/hooks/useComponentIntegration';|" "$PEDRO_DIR/Pedro.tsx"
  fi
  
  # Move constants
  if [ -f "$PEDRO_DIR/constants/SnapPointConfigurations.ts" ]; then
    echo "Moving SnapPointConfigurations to shared..."
    cp -r "$PEDRO_DIR/constants/" "$SHARED_DIR/components/Pedro/constants/"
    # Update import in Pedro.tsx
    sed -i '' "s|import { AttachmentPointType } from './constants/SnapPointConfigurations';|import { AttachmentPointType } from '@shared/components/Pedro/constants/SnapPointConfigurations';|" "$PEDRO_DIR/Pedro.tsx"
  fi
fi

echo ""
echo "==== DEPENDENCY FIXING COMPLETED ===="
echo "You should now run the dependency check script again to verify all issues are fixed." 