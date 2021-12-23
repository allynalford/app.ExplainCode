const serverVars = {
    drip: {
      addSubscriberApiUrl: process.env.REACT_APP_BASE_API_URL + "/drip/subscriber/add",
      getSubscriberApiUrl: process.env.REACT_APP_BASE_API_URL + "/drip/subscriber/get",   
    },
    gtp3: {
      post_ExplainFunction_PromptApiUrl: process.env.REACT_APP_BASE_API_URL + "/tool/function/explain",
      post_Summary_Prompt: process.env.REACT_APP_BASE_API_URL + "/tool/summary", 
    },
    waitlistText: "Early Access"
  };
  
  const localVars = {
    drip: {
      addSubscriberApiUrl: process.env.REACT_APP_BASE_API_URL + "/drip/subscriber/add",
      getSubscriberApiUrl: process.env.REACT_APP_BASE_API_URL + "/drip/subscriber/get", 
      post_ExplainFunction_PromptApiUrl: process.env.REACT_APP_BASE_API_URL + "/tool/function/explain",
      post_Summary_Prompt: process.env.REACT_APP_BASE_API_URL + "/tool/summary", 
    },
    gtp3: {
      post_ExplainFunction_PromptApiUrl: process.env.REACT_APP_BASE_API_URL + "/tool/function/explain",
      post_Summary_Prompt: process.env.REACT_APP_BASE_API_URL + "/tool/summary", 
    },
    waitlistText: "Get Early Access"
  };

  export const WAITLIST_TEXT = (process.env.NODE_ENV === 'production' ? serverVars.waitlistText : localVars.waitlistText)
  
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

  export function getGTP3() {
    if (process.env.NODE_ENV === 'production') {
      return serverVars.gtp3;
    };
    return localVars.gtp3;
  };
