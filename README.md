# bazaar Platform

> **DEVELOPMENT BRANCH** - This is the marketplace development branch for active development.

Welcome to the bazaar Platform monorepo.

A modern web application for 3D design configurators and marketplace functionality.

## Project Overview

bazaar is a monorepo containing multiple applications:

1. **Design App**: A 3D configurator application allowing users to customize various products (furniture, etc.) with real-time visual feedback
2. **Marketplace App**: A platform for users to browse, purchase, and manage designs
3. **API**: Backend services supporting both applications

## Tech Stack

### Frontend
- React 18
- TypeScript
- React Router for navigation
- React Error Boundary for error handling
- Auth0 for authentication
- Three.js and React Three Fiber for 3D rendering
- Mantine UI and Tailwind CSS for styling
- Webpack for bundling

### Backend
- Node.js with Express
- TypeScript
- Supabase for database
- AWS S3 for file storage
- Auth0 for authentication
- Stripe for payments

## Project Structure

```
/
├── src/
│   ├── api/                  # Backend API service
│   ├── apps/                 # Frontend applications
│   │   ├── design/           # 3D configurator app
│   │   └── marketplace/      # Marketplace app
│   └── shared/               # Shared code between apps
└── package.json              # Root package.json for workspace setup
```

## Setup Instructions

### Prerequisites
- Node.js 18.x
- npm 10.x



3. Set up environment variables:
   - Copy example environment files to create your own configurations:
     ```
     cp src/api/.env.example src/api/.env.development
     cp src/apps/design/.env.example src/apps/design/.env.development
     cp src/apps/marketplace/.env.example src/apps/marketplace/.env.development
     ```
   - Edit the `.env.development` files with your specific configuration

### Running the Applications

#### Design App
```
npm run dev:design
```

#### Marketplace App
```
npm run dev:marketplace
```

#### API
```
npm run dev:api
```

### Building for Production

#### Design App
```
npm run build:design
```

#### Marketplace App
```
npm run build:marketplace
```

#### API
```
npm run build:api
```

## Deployment

### Environment Variables

**Important**: All `.env.*` files are excluded from Git to prevent accidental exposure of sensitive data.

The following environment variables are required for each application:

#### API
- `PORT`: The port for the API server
- `DATABASE_URL`: Supabase database URL
- `SUPABASE_KEY`: Supabase API key
- `AUTH0_*`: Auth0 settings
- `STRIPE_*`: Stripe payment settings
- `AWS_*`: AWS credentials

#### Design App
- `REACT_APP_API_URL`: URL to the backend API
- `REACT_APP_AUTH0_*`: Auth0 settings
- `REACT_APP_SUPABASE_*`: Supabase settings

#### Marketplace App
- `REACT_APP_API_URL`: URL to the backend API
- `REACT_APP_AUTH0_*`: Auth0 settings
- `REACT_APP_SUPABASE_*`: Supabase settings

## Development Guidelines

### Code Structure

- Each app maintains its own package.json and dependencies
- Shared code is in the `/src/shared` directory
- Use TypeScript for type safety

### Authentication Flow

The application uses Auth0 for authentication:
1. User initiates login
2. Auth0 redirects to callback URL
3. Application processes the auth token
4. User is redirected to the intended destination 