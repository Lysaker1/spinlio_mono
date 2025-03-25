import React from 'react';
import ReactDOM from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import { createAuth0Client } from '@auth0/auth0-spa-js';
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

// Setup window.auth0Client manually for XHR support
(async () => {
  if (!window.auth0Client) {
    try {
      window.auth0Client = await createAuth0Client({
        domain,
        clientId: clientId,
        audience,
        cacheLocation: 'localstorage',
        useRefreshTokens: true
      });
      console.log('✅ window.auth0Client initialized');
    } catch (err) {
      console.error('❌ Failed to initialize window.auth0Client:', err);
    }
  }
})();

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

        // Store token in localStorage for XHR uploads immediately after authentication
        if (user) {
          try {
            // Store the Auth0 user ID in localStorage for easier access
            if (user.sub) {
              console.log('Storing auth0_user_id in localStorage:', user.sub);
              localStorage.setItem('auth0Id', user.sub);
              localStorage.setItem('userId', user.sub);
            }
            
            // @ts-ignore - Access the getTokenSilently method from auth0 client instance
            if (window.auth0Client) {
              window.auth0Client.getTokenSilently().then((token: string) => {
                console.log('Storing auth0_access_token in localStorage');
                localStorage.setItem('auth0_access_token', token);
              }).catch((err: Error) => {
                console.error('Error getting auth token:', err);
              });
            }
          } catch (err) {
            console.error('Could not retrieve authentication token:', err);
          }
        }
      }}
    >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Auth0Provider>
  </React.StrictMode>
);