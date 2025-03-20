# Bazaar Application Run Guide

This document explains how to run both the old monolithic application structure and the new microservices-based architecture.

## Prerequisites

- Node.js 18.x
- npm 10.x

## Installing Dependencies

First, install root-level dependencies:

```bash
# From project root
npm install
```

Then install dependencies for each subpackage:

```bash
# Install design app dependencies
cd src/apps/design
npm install

# Install marketplace app dependencies
cd ../../marketplace
npm install

# Install API dependencies
cd ../../api
npm install

# Return to root
cd ../../..
```

## Running the Applications

### Original (Legacy) Application

To run the original monolithic application:

```bash
# Start the original frontend
npm run start:old

# In another terminal, start the original API
cd src/api
npm run dev
```

The application will be available at:
- Frontend: http://localhost:3001
- API: http://localhost:3003

### New Application Structure

The new application structure consists of separate apps for different functions:

1. **Design App**: For creating and managing designs
2. **Marketplace App**: For browsing and purchasing products
3. **API**: Shared backend for both applications

You can start each component individually:

```bash
# Start the design app
npm run start:design

# Start the marketplace app
npm run start:marketplace

# Start the API
npm run start:api
```

Or you can start all components at once:

```bash
# Start all applications in parallel
npm run start:new
```

The applications will be available at:
- Design App: http://localhost:3001
- Marketplace App: http://localhost:3002
- API: http://localhost:3003

### Development Portal (Optional)

We've also added a development portal that provides links to all applications:

```bash
# Start the development portal
npm run start:server-new
```

The portal will be available at http://localhost:3000

## Environment Variables

Each application has its own environment files:

- Root: `.env`, `.env.development`, `.env.production`
- Design App: `src/apps/design/.env.development`
- Marketplace App: `src/apps/marketplace/.env.development`
- API: `src/api/.env.development`, `src/api/.env.production`

Make sure these are configured correctly before running the applications.

## Troubleshooting

### TypeScript Errors

If you encounter TypeScript errors related to missing types, install the required type definitions:

```bash
npm install @types/node @types/react @types/react-dom @types/jest --save-dev
```

### API Type Errors

If you see errors in the API about mismatched types for Express, make sure all packages are using the same version:

```bash
npm uninstall @types/express --save-dev
npm install @types/express@4.17.21 --save-dev
```

### Port Conflicts

If a port is already in use, you can modify the port in the corresponding package's scripts or environment variables.

## Building for Production

To build all applications for production:

```bash
# Build the new applications
npm run build:new

# Or build the original frontend
npm run build:frontend
```

## Deployment

Deployment scripts are available for both the original and new application structures:

```bash
# Deploy original application
npm run deploy

# Deploy new application components separately
npm run deploy:api
# Add deployment scripts for design and marketplace when ready
``` 