import ReactGA from "react-ga";
import { useTrackingCode } from "react-hubspot-tracking-code-hook";

const { setPathPageView, setIdentity, setTrackEvent, setTrackPageView } = useTrackingCode();
/**
 * initGA - init Google Analyitics
 */
export const initGA = () => {
    ReactGA.initialize(process.env.REACT_APP_GA, { testMode: (process.env.REACT_APP_STAGE === "dev" ? true : false) });
    
};
/**
 * PageView - window.location.hash.replace('#','')
 */
export const PageView = () => {
    const path = window.location.hash.replace('#','');

    //Need to start striping UUID's out of the path

    //console.log(path)
    ReactGA.pageview(path);
    setPathPageView(path);
};
/**
 * setUserIdentity - HubSpot Track a Identity | HubSpot setIdentity
 * @param {string} i 
 */
export const setUserIdentity = (user) => {
    const id = (user[process.env.REACT_APP_AUTH0_METADATA].hubSpotContactId !== undefined ? user[process.env.REACT_APP_AUTH0_METADATA].hubSpotContactId : user.email)
    setIdentity(id);
};

/**
 * setTrackPV - HubSpot Track a Page View | HubSpot setTrackPageView
 * @param {string} i 
 */
export const setTrackPV= (i) => {
    setTrackPageView(i);
};

/**
 * Event - Add custom tracking event. Track in HubSpot and Google Analyitics
 * @param {string} category 
 * @param {string} action 
 * @param {string} label 
 * @param {string} value 
 */
export const Event = (category, action, label, value) => {
    ReactGA.event({
      category: category,
      action,
      label,
      value
    });
    //HubSpot tracking
    setTrackEvent({ eventId: action, value })
  };


  export const ModalView = (v) => {
    ReactGA.modalview(v);
};

export const Timing = (category, variable, value, label) => {
    ReactGA.timing({
        category: category,
        variable,
        value, // in milliseconds
        label
    });
};