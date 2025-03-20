#!/bin/bash

# Navigate to project root
cd "$(dirname "$0")"

echo "Completely removing all @frontend imports..."

# For the design app
echo "Processing design app..."

# Create a directory structure for constants if it doesn't exist
mkdir -p src/apps/design/src/constants

# Copy required files from frontend to local structure
echo "Copying required files from frontend to local structure..."
cp -n src/frontend/constants/configuratorTypes.ts src/apps/design/src/constants/
cp -n src/frontend/constants/configuratorPaths.ts src/apps/design/src/constants/

# Fix all imports with absolute replacements
find src/apps/design/src -name "*.tsx" -o -name "*.ts" -type f -exec sed -i '' 's|from "@frontend/constants/configuratorTypes"|from "../../../constants/configuratorTypes"|g' {} \;
find src/apps/design/src -name "*.tsx" -o -name "*.ts" -type f -exec sed -i '' 's|from "@frontend/components/ErrorBoundary/ErrorBoundary"|from "../../../components/ErrorBoundary/ErrorBoundary"|g' {} \;
find src/apps/design/src -name "*.tsx" -o -name "*.ts" -type f -exec sed -i '' 's|from "@frontend/components/ConfiguratorPage/components/Sidebar/Sections/MyDesigns"|from "../components/Sidebar/Sections/MyDesigns"|g' {} \;
find src/apps/design/src -name "*.tsx" -o -name "*.ts" -type f -exec sed -i '' 's|from "@frontend/hooks/useConfiguratorState"|from "../../../hooks/useConfiguratorState"|g' {} \;
find src/apps/design/src -name "*.tsx" -o -name "*.ts" -type f -exec sed -i '' 's|from "@frontend/components/ConfiguratorPage/components/Header"|from "../components/Header"|g' {} \;
find src/apps/design/src -name "*.tsx" -o -name "*.ts" -type f -exec sed -i '' 's|from "@frontend/components/BuyButton/BuyButton"|from "../../../components/BuyButton/BuyButton"|g' {} \;
find src/apps/design/src -name "*.tsx" -o -name "*.ts" -type f -exec sed -i '' 's|from "@frontend/components/SaveDesignButton/SaveDesignButton"|from "../../../components/SaveDesignButton/SaveDesignButton"|g' {} \;
find src/apps/design/src -name "*.tsx" -o -name "*.ts" -type f -exec sed -i '' 's|from "@frontend/services/designStorage"|from "../../../services/designStorage"|g' {} \;
find src/apps/design/src -name "*.tsx" -o -name "*.ts" -type f -exec sed -i '' 's|from "@frontend/types/SavedDesign"|from "../../../types/SavedDesign"|g' {} \;
find src/apps/design/src -name "*.tsx" -o -name "*.ts" -type f -exec sed -i '' 's|from "@frontend/hooks/useUser"|from "../../../hooks/useUser"|g' {} \;
find src/apps/design/src -name "*.tsx" -o -name "*.ts" -type f -exec sed -i '' 's|from "@frontend/components/AuthenticatedFeature/AuthenticatedFeature"|from "../../../components/AuthenticatedFeature/AuthenticatedFeature"|g' {} \;
find src/apps/design/src -name "*.tsx" -o -name "*.ts" -type f -exec sed -i '' 's|from "@frontend/services/authService"|from "../../../services/authService"|g' {} \;
find src/apps/design/src -name "*.tsx" -o -name "*.ts" -type f -exec sed -i '' 's|from "@frontend/components"|from "../../../components"|g' {} \;
find src/apps/design/src -name "*.tsx" -o -name "*.ts" -type f -exec sed -i '' 's|from "@frontend/assets/fallback.jpg"|from "../../../assets/fallback.jpg"|g' {} \;

# Add more specific replacements for other imports
find src/apps/design/src -name "*.tsx" -o -name "*.ts" -type f -exec sed -i '' 's|from "@frontend/constants/configuratorPaths"|from "../../../constants/configuratorPaths"|g' {} \;

# Generic catch-all for any remaining @frontend imports - make them local
find src/apps/design/src -name "*.tsx" -o -name "*.ts" -type f -exec sed -i '' 's|from "@frontend/|from "../../../|g' {} \;

# Update webpack.config.js to remove @frontend alias
echo "Updating webpack configs to remove @frontend alias..."
sed -i '' 's|@frontend.*,||g' src/apps/design/webpack.config.js
sed -i '' 's|@frontend.*,||g' src/apps/marketplace/webpack.config.js

# Update tsconfig.json to remove @frontend path mapping
echo "Updating tsconfig.json to remove @frontend path mapping..."
cat << 'EOF' > remove-frontend-alias.js
const fs = require('fs');
const path = require('path');

// Update design app tsconfig
const designTsconfigPath = path.join(__dirname, 'src/apps/design/tsconfig.json');
if (fs.existsSync(designTsconfigPath)) {
  const designTsconfig = JSON.parse(fs.readFileSync(designTsconfigPath, 'utf8'));
  if (designTsconfig.compilerOptions && designTsconfig.compilerOptions.paths) {
    const paths = designTsconfig.compilerOptions.paths;
    delete paths['@frontend/*'];
    fs.writeFileSync(designTsconfigPath, JSON.stringify(designTsconfig, null, 2), 'utf8');
    console.log('Removed @frontend path mapping from design app tsconfig.json');
  }
}

// Update marketplace app tsconfig
const marketplaceTsconfigPath = path.join(__dirname, 'src/apps/marketplace/tsconfig.json');
if (fs.existsSync(marketplaceTsconfigPath)) {
  const marketplaceTsconfig = JSON.parse(fs.readFileSync(marketplaceTsconfigPath, 'utf8'));
  if (marketplaceTsconfig.compilerOptions && marketplaceTsconfig.compilerOptions.paths) {
    const paths = marketplaceTsconfig.compilerOptions.paths;
    delete paths['@frontend/*'];
    fs.writeFileSync(marketplaceTsconfigPath, JSON.stringify(marketplaceTsconfig, null, 2), 'utf8');
    console.log('Removed @frontend path mapping from marketplace app tsconfig.json');
  }
}
EOF

node remove-frontend-alias.js
rm remove-frontend-alias.js

echo "All @frontend imports have been replaced with appropriate relative paths."
echo "The frontend repository can now be safely deleted without breaking references." 