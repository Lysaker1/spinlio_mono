#!/bin/bash

# Exit on any error
set -e

echo "Deploying design app to Heroku..."

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

# Copy shared folder to design app
echo "Copying shared folder to design app..."
rm -rf src/apps/design/shared
cp -r src/shared src/apps/design/

# Add shared folder to git
git add src/apps/design/shared
git commit -m "Add shared folder to design app for deployment (temporary)" --no-verify

# Create a branch just for the design app
echo "Creating design-heroku-branch..."
git subtree split --prefix=src/apps/design -b design-heroku-branch

# Push to Heroku
echo "Pushing to Heroku..."
git push heroku-design design-heroku-branch:main -f

# Remove the shared folder from design app
echo "Cleaning up - removing shared folder from design app..."
rm -rf src/apps/design/shared
git add src/apps/design
git commit -m "Remove shared folder from design app after deployment" --no-verify

echo "Deployment completed!" 