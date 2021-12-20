const serverVars = {
    drip: {
      addSubscriberApiUrl: process.env.REACT_APP_BASE_API_URL + "/drip/subscriber/add",
      getSubscriberApiUrl: process.env.REACT_APP_BASE_API_URL + "/drip/subscriber/get",  
    },
  };
  
  const localVars = {
    drip: {
      addSubscriberApiUrl: process.env.REACT_APP_BASE_API_URL + "/drip/subscriber/add",
      getSubscriberApiUrl: process.env.REACT_APP_BASE_API_URL + "/drip/subscriber/get", 
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
