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
  auth0Domain: "auth.spinlio.com",
  auth0DomainFallback: "dev-jxcml1qpmbgabh6v.us.auth0.com", // Keeping for reference
  auth0ClientId: "buzvq3JLo9qwHqQusnlkqWkldLKMQjAu"
});

root.render(
  <React.StrictMode>
    <Auth0Provider
      domain="auth.spinlio.com"
      clientId="buzvq3JLo9qwHqQusnlkqWkldLKMQjAu"
      authorizationParams={{
        redirect_uri: window.location.origin,
        audience: apiUrl,
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
