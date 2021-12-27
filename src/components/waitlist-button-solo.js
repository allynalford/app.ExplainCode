import React from 'react';
import AuthButton from './authentication-button';
import { useAuth0 } from '@auth0/auth0-react';
const config = require("../common/config.js");
const WaitlistButtonSolo = (props) => {
const { isAuthenticated } = useAuth0();

  if (!isAuthenticated) {
    return (
      <div className="buy-button">
        <a href="#emailAddress" className="btn btn-pills btn-primary">
          {config.WAITLIST_TEXT + " "}
        </a>
      </div>
    );
  }else{
    return ""
  }
};

export default WaitlistButtonSolo;
