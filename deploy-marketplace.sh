#!/bin/bash

# Exit on any error
set -e

echo "Deploying marketplace app to Heroku..."

# Check if on the correct branch
CURRENT_BRANCH=$(git branch --show-current)
if [ "$CURRENT_BRANCH" != "fix/new-system" ]; then
  echo "Warning: You are not on the fix/new-system branch."
  read -p "Continue? (y/n) " -n 1 -r
  echo
  if [[ ! $REPLY =~ ^[Yy]$ ]]; then
    exit 1
  fi
fi

# Copy shared folder to marketplace app
echo "Copying shared folder to marketplace app..."
rm -rf src/apps/marketplace/shared
cp -r src/shared src/apps/marketplace/

# Check webpack.config.js for proper shared folder references
echo "Updating webpack.config.js for shared folder..."
sed -i '' 's|path.resolve(currentPath, '\''src/shared/assets'\'')|path.resolve(currentPath, '\''shared/assets'\'')|g' src/apps/marketplace/webpack.config.js
sed -i '' 's|@shared'\'': path.resolve(currentPath, '\''src/shared'\'')|@shared'\'': path.resolve(currentPath, '\''shared'\'')|g' src/apps/marketplace/webpack.config.js

# Add everything to git
git add src/apps/marketplace/shared src/apps/marketplace/webpack.config.js
git commit -m "Add shared folder to marketplace app for deployment (temporary)"

# Create a branch just for the marketplace app
echo "Creating marketplace-heroku-branch..."
git subtree split --prefix=src/apps/marketplace -b marketplace-heroku-branch

# Push to Heroku
echo "Pushing to Heroku..."
git push heroku-marketplace marketplace-heroku-branch:main -f

# Remove the shared folder from marketplace app
echo "Cleaning up - removing shared folder from marketplace app..."
rm -rf src/apps/marketplace/shared
git checkout -- src/apps/marketplace/webpack.config.js
git add src/apps/marketplace
git commit -m "Remove shared folder from marketplace app after deployment"

echo "Deployment completed!" 