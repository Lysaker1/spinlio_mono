#!/bin/bash

echo "==== FIXING PARAMETER TYPES ===="
echo "This script will fix the imports of ParameterDefinition type in parameter definition files."

# Define paths
DESIGN_APP="src/apps/design"
PARAM_PANEL_DIR="$DESIGN_APP/src/components/ConfiguratorPage/components/ParameterPanel"
SHARED_DIR="src/shared"

# Check if the types.ts file exists
if [ -f "$PARAM_PANEL_DIR/types.ts" ]; then
  echo "Found types.ts file. Creating a backup..."
  cp "$PARAM_PANEL_DIR/types.ts" "$PARAM_PANEL_DIR/types.ts.bak"
  
  # Move all types to shared directory
  echo "Moving all types to shared directory..."
  cat "$PARAM_PANEL_DIR/types.ts" > "$SHARED_DIR/types/ParameterPanelTypes.ts"
  
  # Create a local types/index.ts file that re-exports from shared
  mkdir -p "$PARAM_PANEL_DIR/types"
  echo "// Re-export all parameter panel types from shared" > "$PARAM_PANEL_DIR/types/index.ts"
  echo "export * from '@shared/types/ParameterPanelTypes';" >> "$PARAM_PANEL_DIR/types/index.ts"
  
  echo "Created new types/index.ts that re-exports from shared."
  
  # Update imports in all parameter definition files
  echo "Updating imports in parameter definition files..."
  for FILE in "$PARAM_PANEL_DIR"/parameterDefinitions*.ts; do
    echo "Updating $FILE..."
    
    # First, check if the file imports from './types'
    if grep -q "import.*from './types'" "$FILE"; then
      # Keep the import path the same, since we've created a types/index.ts file
      echo "File already uses the correct import path."
    else
      # Update the import path
      sed -i '' "s|import.*ParameterDefinition.*|import { ParameterDefinition } from './types';|" "$FILE"
      echo "Updated import in $FILE"
    fi
  done
fi

# Additional fix for the test file
TEST_FILE="$PARAM_PANEL_DIR/__tests__/generateNewParameterDefinitions.test.ts"
if [ -f "$TEST_FILE" ]; then
  echo "Updating test file..."
  # Replace the hardcoded import in the test file string template
  sed -i '' "s|const fileContent = \`import { ParameterDefinition } from './types';|const fileContent = \`import { ParameterDefinition } from './types';|" "$TEST_FILE"
fi

echo ""
echo "==== PARAMETER TYPES FIXING COMPLETED ===="
echo "You should now run the dependency check script again to verify all issues are fixed." 