import React from 'react';
import { Link } from 'react-router-dom';
import FeatherIcon from "feather-icons-react";
import { useAuth0 } from '@auth0/auth0-react';
//const config = require("../common/config.js");
const WaitlistButtonSolo = (props) => {
  const { isAuthenticated } = useAuth0();

  if (!isAuthenticated) {
    return (
      <div className="buy-button">
        {/* <a href="#emailAddress" className="btn btn-pills btn-primary">
          {config.WAITLIST_TEXT + " "}
        </a> */}
        <Link to="/register" className="btn btn-primary" type="submit">
          Join Explain Code App&nbsp;
          <i>
            <FeatherIcon
              icon="user-plus"
              className="fea icon-sm"
              alt={'Join Explain Code App'}
            />
          </i>
        </Link>
      </div>
    );
  } else {
    return ""
  }
};

export default WaitlistButtonSolo;
