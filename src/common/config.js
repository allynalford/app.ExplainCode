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
      post_javadoc_comment_Prompt: process.env.REACT_APP_BASE_API_URL + '/tool/javadoc/comment'
    },
    auth0:{
      updateProfile: process.env.REACT_APP_BASE_API_URL + "/profile/update",
      profileAuth: process.env.REACT_APP_BASE_API_URL + "/profile/auth",
    },
    completions:{
      updateCompletionRating: process.env.REACT_APP_BASE_API_URL + '/completions/rating/update',
      userCompletionCount: process.env.REACT_APP_BASE_API_URL + '/completions/user/count'
    },
    snippets:{
      saveSnippet: process.env.REACT_APP_BASE_API_URL + '/snippet/save',
      getSnippets: process.env.REACT_APP_BASE_API_URL + '/snippets/user/',
      getSnippet: process.env.REACT_APP_BASE_API_URL + '/snippet/',
      getSnippetsCount: process.env.REACT_APP_BASE_API_URL + '/snippet/user/count/',
      updateSnippet: process.env.REACT_APP_BASE_API_URL + '/snippet/update',
      deleteSnippet: process.env.REACT_APP_BASE_API_URL + '/snippet/delete/',
      snippetsPagination: process.env.REACT_APP_BASE_API_URL + '/snippets/user/pagination',
    },
    tiers: {
      free: {
        codelength: 500,
        snippets: 15,
        projects: 1,
        explanations: 35,
      },
      trial: {
        codelength: 1500,
        snippets: 50,
        projects: 1,
        explanations: 35,
        days: 7
      },
      earlyaccess: {
        codelength: 1500,
        snippets: 0,
        projects: 0,
        explanations: 0,
        days: 14
      },
      pro: {
        codelength: 1500,
        snippets: 0,
        projects: 0,
        explanations: 0,
      },
    },
    waitlistText: "Early Access"
  };
  
  const localVars = {
    drip: {
      addSubscriberApiUrl:
        process.env.REACT_APP_BASE_API_URL + '/drip/subscriber/add',
      getSubscriberApiUrl:
        process.env.REACT_APP_BASE_API_URL + '/drip/subscriber/get',
    },
    gtp3: {
      post_ExplainFunction_Prompt:
        process.env.REACT_APP_BASE_API_URL + '/tool/function/explain',
      post_Summary_Prompt: process.env.REACT_APP_BASE_API_URL + '/tool/summary',
      post_Line_Prompt: process.env.REACT_APP_BASE_API_URL + '/tool/linebyline',
      post_Freeform_Prompt:
        process.env.REACT_APP_BASE_API_URL + '/tool/freeform',
      post_javadoc_comment_Prompt:
        process.env.REACT_APP_BASE_API_URL + '/tool/javadoc/comment',
    },
    auth0: {
      updateProfile: process.env.REACT_APP_BASE_API_URL + '/profile/update',
      profileAuth: process.env.REACT_APP_BASE_API_URL + '/profile/auth',
    },
    completions: {
      updateCompletionRating:
        process.env.REACT_APP_BASE_API_URL + '/completions/rating/update',
      userCompletionCount:
        process.env.REACT_APP_BASE_API_URL + '/completions/user/count',
    },
    snippets: {
      saveSnippet: process.env.REACT_APP_BASE_API_URL + '/snippet/save',
      getSnippets: process.env.REACT_APP_BASE_API_URL + '/snippets/user/',
      getSnippet: process.env.REACT_APP_BASE_API_URL + '/snippet/',
      getSnippetsCount:
        process.env.REACT_APP_BASE_API_URL + '/snippet/user/count/',
      updateSnippet: process.env.REACT_APP_BASE_API_URL + '/snippet/update',
      deleteSnippet: process.env.REACT_APP_BASE_API_URL + '/snippet/delete/',
      snippetsPagination:
        process.env.REACT_APP_BASE_API_URL + '/snippets/user/pagination',
    },
    tiers: {
      free: {
        codelength: 500,
        snippets: 15,
        projects: 1,
        explanations: 35,
      },
      trial: {
        codelength: 1500,
        snippets: 50,
        projects: 1,
        explanations: 35,
        days: 7
      },
      earlyaccess: {
        codelength: 1500,
        snippets: 0,
        projects: 0,
        explanations: 0,
        days: 14
      },
      pro: {
        codelength: 1500,
        snippets: 0,
        projects: 0,
        explanations: 0,
      },
    },
    waitlistText: 'Get Early Access',
  };

  export const WAITLIST_TEXT = (process.env.NODE_ENV === 'production' ? serverVars.waitlistText : localVars.waitlistText);
  //export const SAVE_SNIPPET_ENABLED = process.env.REACT_APP_SAVE_SNIPPET_ENABLED;
  //export const SAVE_EXPLANATION_ENABLED = process.env.REACT_APP_SAVE_EXPLANATION_ENABLED;
  
  export function getConfiguration() {
    if (process.env.NODE_ENV === 'production') {
      return serverVars;
    }
    return localVars;
  }
  export function getDrip() {
    if (process.env.NODE_ENV === 'production') {
      return serverVars.drip;
    }
    return localVars.drip;
  }

  export function getGTP3() {
    if (process.env.NODE_ENV === 'production') {
      return serverVars.gtp3;
    }
    return localVars.gtp3;
  }

  
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

  export function getSnippets() {
    if (process.env.NODE_ENV === 'production') {
      return serverVars.snippets;
    }
    return localVars.snippets;
  }

  export function getTier(tier) {
    if (process.env.NODE_ENV === 'production') {
      return serverVars.tiers[tier];
    }
    return localVars.tiers[tier];
  }
