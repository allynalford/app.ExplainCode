import React from 'react';
import AuthButton from './authentication-button';
import { useAuth0 } from '@auth0/auth0-react';
const config = require("../common/config.js");
const WaitlistButton = (props) => {
const { isAuthenticated } = useAuth0();

if(isAuthenticated){
    return (
        <div className="buy-button">
           <AuthButton />
        </div>
      );
}else{
    return (
        <div className="buy-button">
          <a href={window.location.origin + '/#emailAddress'} className="btn btn-pills btn-primary">
          {config.WAITLIST_TEXT + " "}
          </a>
          &nbsp;
          {props.auth !== false ? <AuthButton /> : ''}
        </div>
      );
}
};

export default WaitlistButton;
