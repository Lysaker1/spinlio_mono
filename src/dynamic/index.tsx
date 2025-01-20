import React from 'react';
import ReactDOM from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './components/App';
import '../shared/styles/global.css';
import { apiUrl } from './config/api';

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
  environment: process.env.NODE_ENV
});

root.render(
  <React.StrictMode>
    <Auth0Provider
      domain="auth.spinlio.com"
      clientId="buzvq3JLo9qwHqQusnlkqWkldLKMQjAu"
      authorizationParams={{
        redirect_uri: `${window.location.protocol}//${window.location.host}`,
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
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
