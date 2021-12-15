const serverVars = {
    drip: {
      addSubscriberApiUrl: process.env.REACT_APP_BASE_API_URL + "/drip/add/subscriber",   
    },
  };
  
  const localVars = {
    drip: {
      //addSubscriberApiUrl: "http://localhost:3000/dev/drip/add/subscriber",   
      addSubscriberApiUrl: process.env.REACT_APP_BASE_API_URL + "/drip/add/subscriber",
        
    },
  };
  
  export function getConfiguration() {
    if (process.env.NODE_ENV === 'production') {
      return serverVars;
    };
    return localVars;
  };
  export function getDrip() {
    if (process.env.NODE_ENV === 'production') {
      return serverVars.drip;
    };
    return localVars.drip;
  };
