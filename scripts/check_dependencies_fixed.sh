#!/bin/bash

echo "==== CHECKING FOR DEPENDENCIES ON DESIGN APP UTILITIES (FIXED VERSION) ===="
echo "This script will check if any files still reference the design app's utilities, excluding the special types case."
echo ""

# Define paths
DESIGN_APP="src/apps/design"
MARKETPLACE_APP="src/apps/marketplace"
SHARED_DIR="src/shared"

# Directories to check
UTILITY_DIRS=("services" "utils" "hooks" "constants" "config")

# Check for import patterns that reference design app utilities
echo "Checking for references to design app utilities..."
for DIR in "${UTILITY_DIRS[@]}"; do
  echo ""
  echo "Checking for dependencies on design app $DIR..."
  
  # Common import patterns
  PATTERNS=(
    "from ['\"]$DESIGN_APP/src/$DIR"
    "from ['\"]@/$DIR"
    "from ['\"]\.\.$DIR"
    "from ['\"]\.\./\.\.$DIR"
    "from ['\"]\.\./\.\./\.\.$DIR"
    "from ['\"]\./$DIR"
    "import.*from ['\"]\w*$DIR"
  )
  
  FOUND_DEPENDENCIES=false
  
  for PATTERN in "${PATTERNS[@]}"; do
    # Find files that still reference design app utilities
    RESULTS=$(grep -r --include="*.tsx" --include="*.ts" "$PATTERN" "$DESIGN_APP" "$MARKETPLACE_APP" | grep -v "node_modules" | grep -v "scripts")
    
    if [ ! -z "$RESULTS" ]; then
      FOUND_DEPENDENCIES=true
      echo "Found references to $DIR with pattern: $PATTERN"
      echo "$RESULTS" | head -n 10
      COUNT=$(echo "$RESULTS" | wc -l | xargs)
      if [ "$COUNT" -gt 10 ]; then
        echo "... and $(($COUNT - 10)) more"
      fi
    fi
  done
  
  if [ "$FOUND_DEPENDENCIES" = false ]; then
    echo "✓ No dependencies found on design app $DIR. Safe to remove!"
  else
    echo "⚠️ Found dependencies on design app $DIR. Fix these imports before removing!"
  fi
done

# Special check for parameter panel types
echo ""
echo "Checking special case for ParameterPanel types..."
TYPES_DIR="$DESIGN_APP/src/components/ConfiguratorPage/components/ParameterPanel/types"
if [ -d "$TYPES_DIR" ]; then
  if [ -f "$TYPES_DIR/index.ts" ] && grep -q "export.*from '@shared/types" "$TYPES_DIR/index.ts"; then
    echo "✓ ParameterPanel types are properly redirected to shared! This is expected."
  else
    echo "⚠️ WARNING: ParameterPanel types are not properly redirected to shared."
  fi
else
  echo "⚠️ WARNING: ParameterPanel types directory not found."
fi

echo ""
echo "==== DEPENDENCY CHECK COMPLETED (FIXED VERSION) ===="
echo "If all checks passed, you can safely remove duplicated files except for the special types case." 