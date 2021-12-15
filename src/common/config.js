const serverVars = {
    billing: {
        subscribeApiUrl: process.env.REACT_APP_BASE_API_URL + "/billing/subscribe",
        
    },
    hosting:{
        createHostApiUrl: process.env.REACT_APP_BASE_API_URL + "/hosted/zone",
        companyDomainsApiUrl: process.env.REACT_APP_BASE_API_URL + "/hosted/domains",
        listDomainsApiUrl: process.env.REACT_APP_BASE_API_URL + "/hosted/custom",
        attachDomainsApiUrl: process.env.REACT_APP_BASE_API_URL + "/hosted/associate",
        detachDomainsApiUrl: process.env.REACT_APP_BASE_API_URL + "/hosted/disassociate",
        deleteDomainsApiUrl: process.env.REACT_APP_BASE_API_URL + "/hosted/zone/delete",
        checkDomainApiUrl: process.env.REACT_APP_BASE_API_URL + "/hosted/checkassociation"
    },
    attachmentstatus:["PENDING_VERIFICATION","PENDING_DEPLOYMENT","CREATING","REQUESTING_CERTIFICATE"]
  };
  
  const localVars = {
    billing: {
        subscribeApiUrl: process.env.REACT_APP_BASE_API_URL + "/billing/subscribe",
        
    },
    hosting:{
        createHostApiUrl: process.env.REACT_APP_BASE_API_URL + "/hosted/zone",
        companyDomainsApiUrl: process.env.REACT_APP_BASE_API_URL + "/hosted/domains",
        listDomainsApiUrl: process.env.REACT_APP_BASE_API_URL + "/hosted/custom",
        attachDomainsApiUrl: process.env.REACT_APP_BASE_API_URL + "/hosted/associate",
        detachDomainsApiUrl: process.env.REACT_APP_BASE_API_URL + "/hosted/disassociate",
        deleteDomainsApiUrl: process.env.REACT_APP_BASE_API_URL + "/hosted/zone/delete",
        checkDomainApiUrl: process.env.REACT_APP_BASE_API_URL + "/hosted/checkassociation"
    },
    attachmentstatus:["PENDING_VERIFICATION","PENDING_DEPLOYMENT","CREATING","REQUESTING_CERTIFICATE"]
  };
  
  export function getConfiguration() {
    if (process.env.NODE_ENV === 'production') {
      return serverVars;
    };
    return localVars;
  };
  export function getBilling() {
    if (process.env.NODE_ENV === 'production') {
      return serverVars.billing;
    };
    return localVars.billing;
  };
  export function getHosting() {
    if (process.env.NODE_ENV === 'production') {
      return serverVars.hosting;
    };
    return localVars.hosting;
  };

  export function getAssociateStatus() {
    if (process.env.NODE_ENV === 'production') {
      return serverVars.attachmentstatus;
    };
    return localVars.attachmentstatus;
  };