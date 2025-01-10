import React from 'react';
import ReactDOM from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './components/App';
import '../shared/styles/global.css';

const root = ReactDOM.createRoot(document.getElementById('root')!);

root.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-jxcml1qpmbgabh6v.us.auth0.com"
      clientId="buzvq3JLo9qwHqQusnlkqWkldLKMQjAu"
      authorizationParams={{
        redirect_uri: window.location.origin,
        audience: process.env.NODE_ENV === 'production' 
          ? "https://api.spinlio.com"
          : "http://localhost:3003",
        scope: "openid profile email",
        response_mode: "query"
      }}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
