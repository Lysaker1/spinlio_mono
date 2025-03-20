#!/bin/bash

# Install root dependencies
echo "Installing root dependencies..."
npm install

# Install design app dependencies
echo "Installing design app dependencies..."
cd src/apps/design
npm install
cd ../../..

# Install marketplace app dependencies
echo "Installing marketplace app dependencies..."
cd src/apps/marketplace
npm install
cd ../../..

# Install API dependencies
echo "Installing API dependencies..."
cd src/api
npm install
cd ../..

echo "Setup complete! You can now run 'npm start' to start the development servers." 