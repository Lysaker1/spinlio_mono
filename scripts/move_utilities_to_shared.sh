#!/bin/bash

echo "==== MOVING COMMON UTILITIES TO SHARED DIRECTORY ===="
echo "This script will move services, types, utils, and hooks from the design app to the shared directory."

# Define paths
DESIGN_APP="src/apps/design/src"
SHARED_DIR="src/shared"

# Make sure shared directories exist
mkdir -p "$SHARED_DIR/services"
mkdir -p "$SHARED_DIR/types"
mkdir -p "$SHARED_DIR/utils"
mkdir -p "$SHARED_DIR/hooks"
mkdir -p "$SHARED_DIR/constants"
mkdir -p "$SHARED_DIR/config"

# Check if the design app has these directories
if [ -d "$DESIGN_APP/services" ]; then
  echo "Moving services from design app to shared..."
  cp -r "$DESIGN_APP/services/"* "$SHARED_DIR/services/"
  echo "✓ Services moved to shared directory"
fi

if [ -d "$DESIGN_APP/types" ]; then
  echo "Moving types from design app to shared..."
  cp -r "$DESIGN_APP/types/"* "$SHARED_DIR/types/"
  echo "✓ Types moved to shared directory"
fi

if [ -d "$DESIGN_APP/utils" ]; then
  echo "Moving utils from design app to shared..."
  cp -r "$DESIGN_APP/utils/"* "$SHARED_DIR/utils/"
  echo "✓ Utils moved to shared directory"
fi

if [ -d "$DESIGN_APP/hooks" ]; then
  echo "Moving hooks from design app to shared..."
  cp -r "$DESIGN_APP/hooks/"* "$SHARED_DIR/hooks/"
  echo "✓ Hooks moved to shared directory"
fi

if [ -d "$DESIGN_APP/constants" ]; then
  echo "Moving constants from design app to shared..."
  cp -r "$DESIGN_APP/constants/"* "$SHARED_DIR/constants/"
  echo "✓ Constants moved to shared directory"
fi

if [ -d "$DESIGN_APP/config" ] && [ ! -d "$DESIGN_APP/config/configuratorConfig" ]; then
  echo "Moving config from design app to shared..."
  # Note: We're being careful with config as it might have app-specific settings
  cp -r "$DESIGN_APP/config/"* "$SHARED_DIR/config/"
  echo "✓ Config moved to shared directory"
fi

echo ""
echo "==== UTILITIES MOVED SUCCESSFULLY ===="
echo "You should now update imports in the design app to reference these utilities from the shared directory."
echo "To update import paths, run the update-imports-utilities script." 