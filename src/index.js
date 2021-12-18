import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";
//import { Auth0Provider } from "./auth/react-auth0-spa";
import Auth0ProviderWithHistory from './auth/auth0-provider-with-history';




const app = (
  <BrowserRouter>
      <Auth0ProviderWithHistory>
      <App />
    </Auth0ProviderWithHistory>
     {/* <Auth0Provider       
      domain={process.env.REACT_APP_AUTH0_DOMAIN}
      connection={process.env.REACT_APP_AUTH0_CONNECTION}
      client_id={process.env.REACT_APP_AUTH0_CLIENTID}
      overrides={{
        __tenant: process.env.REACT_APP_AUTH0_TENANT,
        __token_issuer: process.env.REACT_APP_AUTH0_DOMAIN,
      }}
      redirectUri={window.location.origin}>
      <App />
    </Auth0Provider> */}
  </BrowserRouter>
);

ReactDOM.render(app, document.getElementById("root"));
serviceWorker.unregister();
