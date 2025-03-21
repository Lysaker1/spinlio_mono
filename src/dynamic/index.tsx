import React from 'react';
import ReactDOM from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './components/App';
import '../shared/styles/global.css';
import { apiUrl } from './config/api';
import { UserProvider } from '@shared/hooks/useUser';
import { AuthProvider } from '@shared/hooks/useAuth';
import '@mantine/core/styles.css';
import '../index.css';
// Import font definitions with fallbacks
import './assets/fonts/fonts.css';

const root = ReactDOM.createRoot(document.getElementById('root')!);

// Add debug logging
console.log('Environment Check:', {
  nodeEnv: process.env.NODE_ENV,
  apiUrl,
  auth0Domain: process.env.REACT_APP_AUTH0_DOMAIN,
  auth0ClientId: process.env.REACT_APP_AUTH0_CLIENT_ID,
  auth0Audience: process.env.REACT_APP_AUTH0_AUDIENCE
});

// Add before the Auth0Provider
console.log('Auth0 Config:', {
  redirectUri: window.location.origin,
  currentUrl: window.location.href,
  environment: process.env.NODE_ENV,
  clientId: process.env.REACT_APP_AUTH0_CLIENT_ID || "buzvq3JLo9qwHqQusnlkqWkldLKMQjAu"
});

root.render(
  <React.StrictMode>
    <Auth0Provider
      domain="auth.spinlio.com"
      clientId={process.env.REACT_APP_AUTH0_CLIENT_ID || "buzvq3JLo9qwHqQusnlkqWkldLKMQjAu"}
      authorizationParams={{
        redirect_uri: process.env.NODE_ENV === 'production'
          ? 'https://design.spinlio.com/callback'
          : 'http://localhost:3001/callback',
        audience: process.env.NODE_ENV === 'production'
          ? 'https://api.spinlio.com'
          : 'http://localhost:3003',
        scope: "openid profile email offline_access",
        response_mode: "query"
      }}
      cacheLocation="localstorage"
      useRefreshTokens={true}
      useRefreshTokensFallback={true}
    >
      <AuthProvider>
        <UserProvider>
          <App />
        </UserProvider>
      </AuthProvider>
    </Auth0Provider>
  </React.StrictMode>
);
