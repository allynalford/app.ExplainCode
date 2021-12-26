/*jshint esversion: 8 */
import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
//Import Icons
import FeatherIcon from 'feather-icons-react';
import { getWidgets, getPrompts} from '../../pages/Pages/Account/config';
import dateFormat from 'dateformat';
import { getCompletions } from '../../common/config';

const endpoint = require('../../common/endpoint');
function MainSideBar(props) {

    const { logout } = useAuth0();
    const [completionsThisMonth, setCompletionsThisMonth] = useState(0);
    const monthStamp = dateFormat(new Date(), "yyyy-mm");

  useEffect(() => {

    return () => {

    };
  }, []);

  useEffect(() => {
    if(typeof props.userglobaluuid !== "undefined"){
      getUserCompletionCount(props.userglobaluuid);
    }
   return () => {

    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props]);

  async function getUserCompletionCount(userglobaluuid){
    //Grab the count of executions for this month
    endpoint.postIAM(getCompletions().userCompletionCount, {userglobaluuid, monthStamp}).then((res) => {
      setCompletionsThisMonth(res.data.count);
    }).catch((err) => {
      console.error(err);
    });
  }


  return (
    <React.Fragment>
      <div className="sidebar sticky-bar p-4 rounded shadow">
        <div className="widget mb-4 pb-4 border-bottom">
          <h5 className="widget-title">Stats :</h5>
          <div className="row mt-4">
            <div className="col-6 text-center">
              <FeatherIcon
                icon="activity"
                className="fea icon-ex-md text-primary mb-1"
              />
              <h5 className="mb-0">{completionsThisMonth}/100</h5>
              <h6 className="text mb-0">Executions</h6>
            </div>
          </div>
        </div>
        <div className="widget mt-4">
          <h5 className="widget-title">Tools:</h5>
          <ul className="list-unstyled sidebar-nav mb-0" id="navmenu-nav">
            {getPrompts(window.location).map((widget, key) => (
              <li className={widget.className} key={key}>
                {widget.title === 'Logout' ? (
                  <Link
                    onClick={() =>
                      logout({
                        returnTo: window.location.origin,
                      })
                    }
                    to={'#'}
                    className="navbar-link d-flex rounded shadow align-items-center py-2 px-4"
                  >
                    <span className="h4 mb-0">
                      <i className={widget.icon}></i>
                    </span>
                    <h6 className="mb-0 ms-2">{widget.title}</h6>
                  </Link>
                ) : (
                  <Link
                    id={widget.tool}
                    name={widget.tool}
                    to={widget.link}
                    //onClick={e => {switchTool(widget.tool)}}
                    className="navbar-link d-flex rounded shadow align-items-center py-2 px-4"
                  >
                    <span className="h4 mb-0">
                      <i className={widget.icon}></i>
                    </span>
                    <h6 className="mb-0 ms-2">{widget.title}</h6>
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
        
        <div className="widget mt-4">
        <h5 className="widget-title">Utility:</h5>
          <ul className="list-unstyled sidebar-nav mb-0" id="navmenu-nav">
            {getWidgets(window.location).map((widget, key) => (
              <li className={widget.className} key={key}>
                {widget.title === 'Logout' ? (
                  <Link
                    onClick={() =>
                      logout({
                        returnTo: window.location.origin,
                      })
                    }
                    to={'#'}
                    className="navbar-link d-flex rounded shadow align-items-center py-2 px-4"
                  >
                    <span className="h4 mb-0">
                      <i className={widget.icon}></i>
                    </span>
                    <h6 className="mb-0 ms-2">{widget.title}</h6>
                  </Link>
                ) : (
                  <Link
                    to={widget.link}
                    className="navbar-link d-flex rounded shadow align-items-center py-2 px-4"
                  >
                    <span className="h4 mb-0">
                      <i className={widget.icon}></i>
                    </span>
                    <h6 className="mb-0 ms-2">{widget.title}</h6>
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
}

export default MainSideBar;
