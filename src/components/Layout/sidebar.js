/*jshint esversion: 8 */
import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
//Import Icons
import FeatherIcon from 'feather-icons-react';
import { getWidgets, getPrompts} from '../../pages/Pages/Account/config';
import dateFormat from 'dateformat';
import { getCompletions, getTier } from '../../common/config';
import { Event } from '../../common/gaUtils.js';
var Swal = require('sweetalert2');
const endpoint = require('../../common/endpoint');
function MainSideBar(props) {

    const { logout } = useAuth0();
    const { user } = useAuth0();
    const { tier } = user[process.env.REACT_APP_AUTH0_USER_METADATA];
    const [completionsMax, setCompletionsMax] = useState(0);
    const [completionsColor, setCompletionsColor] = useState('black');
    const [completionsThisMonth, setCompletionsThisMonth] = useState(0);
    const monthStamp = dateFormat(new Date(), "yyyy-mm");

  useEffect(() => {

    return () => {

    };
  }, []);


  useEffect(() => {

    const t = getTier(tier);

    if(completionsMax === 0){
      setCompletionsMax((t.explanations === 0 ? 'Unlimited' : t.explanations));
    }

    if(t.explanations !== 0 && completionsThisMonth >= t.explanations){
      setCompletionsColor('red');
    }else if(completionsColor !== 'black'){
      setCompletionsColor('black');
    }

    return () => {

    };
  }, [completionsThisMonth, tier, completionsColor, completionsMax]);

  useEffect(() => {
    if(typeof props.userglobaluuid !== "undefined"){
      getUserCompletionCount(props.userglobaluuid);
    }

    if(typeof props.completionsThisMonth !== "undefined"){
      setCompletionsThisMonth(props.completionsThisMonth);
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
              <h5 className="mb-0">{completionsThisMonth}/{completionsMax}</h5>
              <h6 className="text mb-0">Explanations</h6>
            </div>
          </div>
        </div>
        <div className="widget mt-4">
          <h5 className="widget-title">Tools:</h5>
          <nav id="toolmenu" title="Tool Menu">
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
                    to={(widget.active === false ? "#" : widget.link)}
                    onClick={e =>{
                      if(widget.active === false){

                        e.preventDefault();

                        Swal.fire({
                          title: `${widget.title} coming soon`,
                          text: `${widget.title} hasn't released yet. But will be coming soon.`,
                          icon: 'info',
                          confirmButtonText: 'Ok',
                        });
                      }
                      Event('Tool', 'Click', widget.tool);

                      window._dcq.push(
                        [
                          "track", `Tool Click: ${widget.tool}`,
                          { key: widget.tool }
                        ]
                      );
                    }}
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
          </nav>
        </div>
        
        <div className="widget mt-4">
        <h5 className="widget-title">Utility:</h5>
        <nav id="toolmenu" title="Utility Menu">
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
          </nav>
        </div>
      </div>
    </React.Fragment>
  );
}

export default MainSideBar;
