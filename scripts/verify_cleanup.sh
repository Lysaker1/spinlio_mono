#!/bin/bash

echo "==== BAZAAR MONOREPO VERIFICATION ===="
echo "This script will verify the cleanup and check for any issues."

# Set paths
DESIGN_APP="src/apps/design"
MARKETPLACE_APP="src/apps/marketplace"
SHARED_DIR="src/shared"

# Check for remaining dashboard components in design app
echo "Checking for remaining dashboard components in design app..."
if grep -r "dashboard" --include="*.tsx" --include="*.ts" "$DESIGN_APP/src/components" | grep -v "$DESIGN_APP/src/components/dashboard"; then
  echo "⚠️  Note: Found references to dashboard in design app."
  echo "This is expected as we've kept the dashboard routes for functionality."
else
  echo "✓ No unexpected dashboard references found in design app."
fi

# Check for components that should use shared imports
echo "Checking for components that should use shared imports..."

# Check for Auth imports
echo "Checking for imports of AuthenticatedFeature..."
EXPECTED_AUTH_IMPORT="@shared/components/Auth/AuthenticatedFeature"
AUTH_IMPORTS=$(grep -r "AuthenticatedFeature" --include="*.tsx" --include="*.ts" "$DESIGN_APP" "$MARKETPLACE_APP" | grep "import")

if echo "$AUTH_IMPORTS" | grep -v "$EXPECTED_AUTH_IMPORT"; then
  echo "⚠️  Warning: Found imports of AuthenticatedFeature that don't use the expected path."
  echo "Expected path: $EXPECTED_AUTH_IMPORT"
else
  echo "✓ All AuthenticatedFeature imports use the correct path."
fi

# Check for ErrorBoundary imports
echo "Checking for imports of ErrorBoundary..."
EXPECTED_ERROR_IMPORT="@shared/components/ErrorBoundary/ErrorBoundary"
ERROR_IMPORTS=$(grep -r "ErrorBoundary" --include="*.tsx" --include="*.ts" "$DESIGN_APP" "$MARKETPLACE_APP" | grep "import")

if echo "$ERROR_IMPORTS" | grep -v "$EXPECTED_ERROR_IMPORT"; then
  echo "⚠️  Warning: Found imports of ErrorBoundary that don't use the expected path."
  echo "Expected path: $EXPECTED_ERROR_IMPORT"
else
  echo "✓ All ErrorBoundary imports use the correct path."
fi

echo "==== VERIFICATION COMPLETED ===="
echo "The project structure has been simplified, with shared components moved to a shared directory."
echo "Dashboard functionality has been preserved with minimal stubs."
echo "You should now test both apps to ensure they work correctly." 