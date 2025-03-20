# Bazaar Monorepo

This repository contains a monorepo for the Bazaar platform, including:

- **Design App**: 3D configurator app for designing prefabs (at `src/apps/design`)
- **Marketplace App**: Dashboard and marketplace for managing and purchasing prefabs (at `src/apps/marketplace`)
- **API Server**: Backend API for both apps (at `src/api`)
- **Shared Code**: Shared components, hooks, services, and utilities (at `src/shared`)

## Project Structure

```
├── src/
│   ├── apps/
│   │   ├── design/              # 3D configurator app
│   │   └── marketplace/         # Dashboard and marketplace app
│   ├── api/                     # Backend API server 
│   └── shared/                  # Shared code (components, hooks, services)
├── server.js                    # Main server for production
└── package.json                 # Root package.json for the monorepo
```

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Set up environment variables:

Copy the `.env.template` file to `.env.development` in each app directory and update with your own values.

3. Start the development server:

```bash
# Start all apps (design on port 3002, marketplace on port 3004, API on port 3003)
npm run start:new

# Or start individual apps
npm run start:design
npm run start:marketplace
npm run start:api

# To run the old configuration
npm run start:old
```

## Deploying

### Deploy to Heroku

```bash
# Deploy all apps
npm run deploy

# Deploy individual apps
npm run deploy:api
npm run deploy:design
npm run deploy:marketplace
```

### Deploy to Vercel

The marketplace app can be deployed to Vercel:

1. Connect your repository to Vercel
2. Set the root directory to `src/apps/marketplace`
3. Configure environment variables in the Vercel dashboard

## Testing

```bash
# Run all tests
npm test

# Run tests for specific apps
npm run test:design
npm run test:marketplace
npm run test:api
```

## Architecture

- The monorepo uses npm workspaces to manage dependencies
- Shared code is available via the `@shared` path alias
- Each app is independently deployable but can share code and components
- Authentication is handled via Auth0 and is shared across all apps 