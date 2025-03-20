import React from 'react';
import ReactDOM from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import { AuthProvider } from '@shared/hooks/useAuth';

// Load shared assets if needed
import '@shared/assets/styles/common.css';

const root = ReactDOM.createRoot(document.getElementById('root')!);

const domain = process.env.REACT_APP_AUTH0_DOMAIN || 'auth.bazaar.it';
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID || 'buzvq3JLo9qwHqQusnlkqWkldLKMQjAu';
const audience = process.env.REACT_APP_AUTH0_AUDIENCE || 'https://api.bazaar.it';

// Add debug logging in development
if (process.env.NODE_ENV !== 'production') {
  console.log('Environment Check:', {
    nodeEnv: process.env.NODE_ENV,
    domain,
    clientId,
    audience
  });
}

root.render(
  <React.StrictMode>
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: process.env.NODE_ENV === 'production'
          ? 'https://marketplace.bazaar.it/callback'
          : 'http://localhost:3002/callback',
        audience: audience,
        scope: "openid profile email offline_access",
        response_mode: "query"
      }}
      cacheLocation="localstorage"
      useRefreshTokens={true}
      useRefreshTokensFallback={true}
    >
      <AuthProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </AuthProvider>
    </Auth0Provider>
  </React.StrictMode>
); 