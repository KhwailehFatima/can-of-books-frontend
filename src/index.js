import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Auth0Provider
        domain="dev-3k4xz2si.us.auth0.com"
        clientId="O24cxeGJkf3KyBWiJTLOXqt2xkYiOoRp"
        redirectUri={window.location.origin}
    >
      <App />
    </Auth0Provider>,
  </React.StrictMode>
);