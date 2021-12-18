import React from 'react';
import { useHistory } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';

const Auth0ProviderWithHistory = ({ children }) => {

  const history = useHistory();

  const onRedirectCallback = (appState) => {
    history.push(appState?.returnTo || window.location.pathname);
  };

  return (
    <Auth0Provider
      domain={process.env.REACT_APP_AUTH0_DOMAIN}
      connection={process.env.REACT_APP_AUTH0_CONNECTION}
      client_id={process.env.REACT_APP_AUTH0_CLIENTID}
      overrides={{
        __tenant: process.env.REACT_APP_AUTH0_TENANT,
        __token_issuer: process.env.REACT_APP_AUTH0_DOMAIN,
      }}
      redirectUri={window.location.origin}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  );
};

export default Auth0ProviderWithHistory;