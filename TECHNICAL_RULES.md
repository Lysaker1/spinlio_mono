# PREFAB Technical Guidelines

## TypeScript and React Architecture

### Component Lazy Loading
- Use React.lazy() for route-based code splitting to improve initial load time
- Components requiring lazy loading must have a default export (not named export)
- Always wrap lazy-loaded components in a Suspense component with a fallback UI
- Avoid lazy loading small components that are frequently used

### TypeScript Configuration
- React components using TypeScript generics must follow the correct type pattern
- For components that might return a Promise (async components), ensure the return type is properly handled
- AuthCallback and similar auth components often return React.ReactNode or Promise<React.ReactNode> and require special consideration
- Fix for components with Promise returns: modify type definition or update the import method

### Path Aliases
- The project uses path aliases like `@shared/*` which must be configured in both:
  - tsconfig.json (for TypeScript compiler)
  - babel.config.js (for runtime transpilation)
- When adding new path aliases, update both files

## Project Structure

### Monorepo Organization
- Keep shared code in `/src/shared/` directory
- App-specific code should stay in its respective app directory
- Cross-app dependencies should be carefully managed via the shared directory

### Module Boundaries
- Don't directly import from one app to another (e.g., don't import from design app in marketplace app)
- Use the shared directory as the boundary between apps

## Authentication Flow

### Auth0 Integration
- Auth0 requires specific callback handling in the app
- The callback route must use a component that can handle the Auth0 response
- SimpleAuthCallback in App.tsx is a workaround for TypeScript compatibility issues
- Store redirect paths in localStorage before authentication redirects

### Common Auth Errors
- TypeScript errors with Auth0 components are often related to component return type conflicts
- 'AuthCallback cannot be used as a JSX component' usually indicates:
  1. Type inconsistency between React.FC return type and actual component
  2. Issues with lazy loading of authentication components
  3. Incompatibility between Auth0 package version and TypeScript version
  
## Environment Variables

### Sensitive Data Management
- Never commit .env files with real credentials
- Keep .env.example files updated with all required variables
- All environment variables should be documented in README.md

### Accessing Environment Variables
- In React apps, all environment variables must be prefixed with REACT_APP_
- In Node.js (API), environment variables are accessed directly

## Error Handling

### Error Boundaries
- Every major route should be wrapped in an ErrorBoundary component
- Provide meaningful fallback UIs for error states
- Log errors properly for debugging purposes

### TypeScript Errors
- "BigInt is not assignable to type ReactNode" often appears with async components
- Fix by ensuring component is not returning a Promise or by handling the Promise explicitly

## Build and Deployment

### Webpack Configuration
- Each app has its own webpack configuration
- Shared dependencies may need special handling in webpack.config.js
- Use environment variables to switch between development and production settings

### Performance Optimization
- Use code splitting via dynamic imports
- Optimize Three.js and 3D assets carefully
- Consider implementing bundle analysis to identify large dependencies

## Common Gotchas

### React Router Navigation
- Use Navigate component for redirects within JSX
- Use navigate() from useNavigate() hook for programmatic navigation
- Don't mix browser APIs (window.location) with React Router unless necessary

### State Management
- Auth state is handled by Auth0 provider
- Configuration state is handled per configurator
- Consider centralizing more state if cross-component communication increases

### Module Resolution
- When TypeScript cannot find modules, check:
  1. Path aliases in tsconfig.json and babel.config.js
  2. Module exists in package.json dependencies
  3. Import statement path correctness
  
### 3D Rendering
- Three.js and React Three Fiber have specific performance considerations
- Large 3D models should be optimized before import
- Consider implementing progressive loading for complex scenes

## Code Quality

### Linting
- TypeScript errors should be fixed before deployment
- Common linting errors include:
  1. Missing return types for functions
  2. Incorrect component typing
  3. Unused variables or imports
  
### Testing
- Add unit tests for critical business logic
- Consider integration tests for key user flows
- Test authentication flows thoroughly 