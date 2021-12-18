import React from 'react';
import AuthButton from './authentication-button';
import { useAuth0 } from '@auth0/auth0-react';

const WaitlistButton = () => {
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
          <a href="#emailAddress" className="btn btn-pills btn-primary">
            Join Waitlist
          </a>
          &nbsp;
          <AuthButton />
        </div>
      );
}
};

export default WaitlistButton;