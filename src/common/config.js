const serverVars = {
    drip: {
      addSubscriberApiUrl: process.env.REACT_APP_BASE_API_URL + "/drip/subscriber/add",
      getSubscriberApiUrl: process.env.REACT_APP_BASE_API_URL + "/drip/subscriber/get",   
    },
    gtp3: {
      post_ExplainFunction_PromptApiUrl: process.env.REACT_APP_BASE_API_URL + "/tool/function/explain",
      post_Summary_Prompt: process.env.REACT_APP_BASE_API_URL + "/tool/summary", 
      post_Line_Prompt: process.env.REACT_APP_BASE_API_URL + "/tool/linebyline",
      post_Freeform_Prompt: process.env.REACT_APP_BASE_API_URL + "/tool/freeform",
    },
    auth0:{
      updateProfile: process.env.REACT_APP_BASE_API_URL + "/profile/update",
      profileAuth: process.env.REACT_APP_BASE_API_URL + "/profile/auth",
    },
    completions:{
      updateCompletionRating: process.env.REACT_APP_BASE_API_URL + '/completions/rating/update',
      userCompletionCount: process.env.REACT_APP_BASE_API_URL + '/completions/user/count'
    },
    waitlistText: "Early Access"
  };
  
  const localVars = {
    drip: {
      addSubscriberApiUrl: process.env.REACT_APP_BASE_API_URL + "/drip/subscriber/add",
      getSubscriberApiUrl: process.env.REACT_APP_BASE_API_URL + "/drip/subscriber/get", 
    },
    gtp3: {
      post_ExplainFunction_Prompt: process.env.REACT_APP_BASE_API_URL + "/tool/function/explain",
      post_Summary_Prompt: process.env.REACT_APP_BASE_API_URL + "/tool/summary", 
      post_Line_Prompt: process.env.REACT_APP_BASE_API_URL + "/tool/linebyline",
      post_Freeform_Prompt: process.env.REACT_APP_BASE_API_URL + "/tool/freeform",
    },
    auth0:{
      updateProfile: process.env.REACT_APP_BASE_API_URL + "/profile/update",
      profileAuth: process.env.REACT_APP_BASE_API_URL + "/profile/auth",
    },
    completions:{
      updateCompletionRating: process.env.REACT_APP_BASE_API_URL + '/completions/rating/update',
      userCompletionCount: process.env.REACT_APP_BASE_API_URL + '/completions/user/count'
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

  
  export function getAuth0() {
    if (process.env.NODE_ENV === 'production') {
      return serverVars.auth0;
    }
    return localVars.auth0;
  }

  export function getCompletions() {
    if (process.env.NODE_ENV === 'production') {
      return serverVars.completions;
    }
    return localVars.completions;
  }
