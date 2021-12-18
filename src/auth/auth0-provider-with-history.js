import React from 'react';
import { useHistory } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';
const Auth0ProviderWithHistory = ({ children, ...initOptions}) => {
  const domain = process.env.REACT_APP_AUTH0_DOMAIN;
  const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

  const history = useHistory();
  

  const onRedirectCallback = (appState) => {

    if (
      window.location.search.includes("code=") > 0 &&
      window.location.search.includes("state=") > 0
    ) {
      var uri = window.location.toString();
        //remove the parameters from the URL
      if (uri.indexOf("?") > 0) {
        history.push(appState?.returnTo || "/dashboard");
      }
        
      history.push(appState?.returnTo || window.location.pathname);
      
    }
    
    history.push(appState?.returnTo || window.location.pathname);
    
  };

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={window.location.origin}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  );
};

export default Auth0ProviderWithHistory;