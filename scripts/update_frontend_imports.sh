#!/bin/bash
echo "Starting import update from @frontend to @shared"

# Define directories to search
DESIGN_APP="src/apps/design"
MARKETPLACE_APP="src/apps/marketplace"
SHARED_DIR="src/shared"

# Find all TypeScript and JavaScript files and replace @frontend with @shared
echo "Updating @frontend imports in $DESIGN_APP..."
find $DESIGN_APP -type f -name "*.ts*" -exec sed -i '' 's|@frontend/|@shared/|g' {} \;
find $DESIGN_APP -type f -name "*.js*" -exec sed -i '' 's|@frontend/|@shared/|g' {} \;

echo "Updating @frontend imports in $MARKETPLACE_APP..."
find $MARKETPLACE_APP -type f -name "*.ts*" -exec sed -i '' 's|@frontend/|@shared/|g' {} \;
find $MARKETPLACE_APP -type f -name "*.js*" -exec sed -i '' 's|@frontend/|@shared/|g' {} \;

echo "Updating @frontend imports in $SHARED_DIR..."
find $SHARED_DIR -type f -name "*.ts*" -exec sed -i '' 's|@frontend/|@shared/|g' {} \;
find $SHARED_DIR -type f -name "*.js*" -exec sed -i '' 's|@frontend/|@shared/|g' {} \;

echo "Import paths updated!" 