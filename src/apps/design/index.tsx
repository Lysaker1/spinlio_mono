import React from 'react';
import ReactDOM from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './components/App';
import { apiUrl } from '@shared/config/api';
import { UserProvider } from '@shared/hooks/useUser';
import { AuthProvider } from '@shared/hooks/useAuth';
import '@mantine/core/styles.css';
import './index.css';
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
      domain={process.env.REACT_APP_AUTH0_DOMAIN || "auth.bazaar.it"}
      clientId={process.env.REACT_APP_AUTH0_CLIENT_ID || "buzvq3JLo9qwHqQusnlkqWkldLKMQjAu"}
      authorizationParams={{
        redirect_uri: process.env.NODE_ENV === 'production'
          ? 'https://design.bazaar.it/callback'
          : 'http://localhost:3002/callback',
        audience: process.env.NODE_ENV === 'production'
          ? 'https://api.bazaar.it'
          : 'http://localhost:3003',
        scope: "openid profile email offline_access",
        response_mode: "query"
      }}
      cacheLocation="localstorage"
      useRefreshTokens={true}
      useRefreshTokensFallback={true}
      onRedirectCallback={(appState, user) => {
        console.log('Auth0 redirect callback executed');
        
        // Store token in localStorage for XHR uploads
        if (user) {
          try {
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
      <AuthProvider>
        <UserProvider>
          <App />
        </UserProvider>
      </AuthProvider>
    </Auth0Provider>
  </React.StrictMode>
);
