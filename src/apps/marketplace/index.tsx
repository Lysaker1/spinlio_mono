import React from 'react';
import ReactDOM from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
// Make sure CSS is loaded
import './index.css';
import '@mantine/core/styles.css';

// Load shared assets if needed
import '@shared/assets/styles/common.css';

const root = ReactDOM.createRoot(document.getElementById('root')!);

// Use environment variables with fallbacks
const domain = process.env.REACT_APP_AUTH0_DOMAIN || 'auth.bazaar.it';
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID || 'buzvq3JLo9qwHqQusnlkqWkldLKMQjAu';
const audience = process.env.REACT_APP_AUTH0_AUDIENCE || 'http://localhost:3003';

// Add debug logging in development
if (process.env.NODE_ENV !== 'production') {
  console.log('Auth0 Environment Check:', {
    nodeEnv: process.env.NODE_ENV,
    domain,
    clientId,
    audience,
    origin: window.location.origin,
    callbackUrl: `${window.location.origin}/callback`
  });
}

// Calculate the callback URL based on environment
const callbackUrl = process.env.NODE_ENV === 'production'
  ? 'https://marketplace.bazaar.it/callback'
  : `${window.location.origin}/callback`;

root.render(
  <React.StrictMode>
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: callbackUrl,
        audience: audience,
        scope: "openid profile email",
        prompt: "login", // Force login prompt
        response_mode: "query", // Ensure consistent response format
      }}
      cacheLocation="localstorage"
      useRefreshTokens={true}
      useRefreshTokensFallback={true}
      onRedirectCallback={(appState, user) => {
        console.log('Auth0 redirect callback executed', { 
          hasAppState: !!appState,
          hasUser: !!user,
          currentUrl: window.location.href
        });
      }}
    >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Auth0Provider>
  </React.StrictMode>
); 