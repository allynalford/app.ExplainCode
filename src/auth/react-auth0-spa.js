// src/react-auth0-spa.js
import React, { useState, useEffect, useContext } from "react";
import createAuth0Client from "@auth0/auth0-spa-js";
import { useHistory } from 'react-router-dom';

export const Auth0Context = React.createContext();
export const Auth0Consumer = Auth0Context.Consumer;
export const useAuth0 = () => useContext(Auth0Context);

export const Auth0Provider = ({
  children,
  ...initOptions
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState();
  const [user, setUser] = useState();
  const [auth0Client, setAuth0] = useState();
  const [loading, setLoading] = useState(true);
  const [popupOpen, setPopupOpen] = useState(false);
  const history = useHistory();

  useEffect(() => {
    const initAuth0 = async () => {

      
      const auth0FromHook = await createAuth0Client(initOptions);

      setAuth0(auth0FromHook);

      if (
        window.location.search.includes("code=") &&
        window.location.search.includes("state=")
      ) {
        //console.log("code")
        const { appState } = await auth0FromHook.handleRedirectCallback();
        //remove the parameters from the URL
        var uri = window.location.toString();
        if (uri.indexOf("?") > 0) {
          var clean_uri = uri.substring(0, uri.indexOf("?"));
          window.history.replaceState({}, document.title, clean_uri);
        }
        onRedirectCallback(appState);
      }

      const isAuthenticated = await auth0FromHook.isAuthenticated();

      setIsAuthenticated(isAuthenticated);

      if (isAuthenticated) {
        const user = await auth0FromHook.getUser();
        setUser(user);
      }

      setLoading(false);
    };

    const initAuthService = async () => {

      const auth0FromHook = await createAuth0Client(initOptions);
      auth0FromHook.loginWithRedirect();

      setLoading(false);
    };

    

    if (window.location.href.includes("id_token=") &&
      window.location.href.includes("access_token=")) {
      initAuthService();
      //console.log("token")
    } else {
      //console.log("pure Init")
      initAuth0();
    };
    
    // eslint-disable-next-line
  }, []);

  const onRedirectCallback = (appState) => {
    history.push(appState?.returnTo || window.location.pathname);
  };

  const loginWithPopup = async (params = {}) => {
    setPopupOpen(true);
    try {
      await auth0Client.loginWithPopup(params);
    } catch (error) {
      console.error(error);
    } finally {
      setPopupOpen(false);
    }
    const user = await auth0Client.getUser();
    setUser(user);
    setIsAuthenticated(true);
  };

  const handleRedirectCallback = async () => {
    setLoading(true);
    await auth0Client.handleRedirectCallback();
    const user = await auth0Client.getUser();
    setLoading(false);
    setIsAuthenticated(true);
    setUser(user);
  };

//   const removeParam = (parameter) =>
// {
//   var url=document.location.href;
//   var urlparts= url.split('?');

//  if (urlparts.length>=2)
//  {
//   var urlBase=urlparts.shift(); 
//   var queryString=urlparts.join("?"); 

//   var prefix = encodeURIComponent(parameter)+'=';
//   var pars = queryString.split(/[&;]/g);
//   for (var i= pars.length; i-->0;)               
//       if (pars[i].lastIndexOf(prefix, 0)!==-1)   
//           pars.splice(i, 1);
//   url = urlBase+'?'+pars.join('&');
//   window.history.pushState('',document.title,url); // added this line to push the new url directly to url bar .

// }
// return url;
// }
  return (
    <Auth0Context.Provider
      value={{
        isAuthenticated,
        user,
        loading,
        popupOpen,
        loginWithPopup,
        handleRedirectCallback,
        onRedirectCallback,
        getIdTokenClaims: (...p) => auth0Client.getIdTokenClaims(...p),
        loginWithRedirect: (...p) => auth0Client.loginWithRedirect(...p),
        getTokenSilently: (...p) => auth0Client.getTokenSilently(...p),
        getTokenWithPopup: (...p) => auth0Client.getTokenWithPopup(...p),
        logout: (...p) => auth0Client.logout(...p),
      }}
    >
      {children}
    </Auth0Context.Provider>
  );
};
