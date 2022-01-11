import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Badge,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import { useAuth0 } from '@auth0/auth0-react';
import { Helmet } from "react-helmet";
import { getPricing, getUser, getBilling, YEARLY_PRICES } from '../../../common/config';
import MainSideBar from '../../../components/Layout/sidebar';
import ProfileHeader from '../../../components/Layout/ProfileHeader';
import classnames from "classnames";
import SingleColumn from '../../../components/SingleColumn';
const endpoint = require('../../../common/endpoint');
function PagePayments({ history }) {

  const { user } = useAuth0();
  const { email } = user;
  const { userglobaluuid, tier } = user[process.env.REACT_APP_AUTH0_USER_METADATA];
  const [toggleActive, setToggleActive] = useState(false);
  const [userProfile, setUserProfile] = useState({});
  const [loading, setLoading] = useState(false);
  const [sessionId, setSessionId] = useState('');


  useEffect(() => {
    try {
      document.title = "Explain Code App - Dashboard";
      if (document.getElementById('top-menu') !== null) {
        document.getElementById('top-menu').classList.add('nav-light');
      }

      const search = window.location.search;
      const session_id = new URLSearchParams(search).get("session_id");
      setSessionId(session_id);
      window.addEventListener('scroll', scrollNavigation, true);

      endpoint.postIAM(getUser().getUserApiUrl, {email, userglobaluuid}).then((res) => {
        setUserProfile(res.data.user);
       
        if(YEARLY_PRICES.includes(res.data.user.price)){
          //If they have a yearly plan, show the yearly plans
          setToggleActive(true);
        }
      }).catch((err) => {
        console.error(err);
      });

    } catch (e) {
      console.error(e);
    }

    return () => {
      window.removeEventListener("scroll", scrollNavigation, true);
    };
  }, []);

  useEffect(() => {
  
    return () => {
      
    };
  }, [userProfile]);

  useEffect(() => {
  
    return () => {
      
    };
  }, [loading]);

  const addSubscription = (priceId, customer_email) => {
    try {

      setLoading(true);

      if(userProfile.subscriptionActive){
        //Manage Subscription
        const returnUrl = window.location.href;
        const customerId = userProfile.stripeCustomerId;
        endpoint.postIAM(getBilling().manageApiUrl, {customerId, returnUrl, priceId}).then((res) => {
         if(res.data.error === false){
          if(typeof res.data.session !== "undefined"){
            window.location = res.data.session.url;
          }
         }else{
          console.error(res.data.message);
         }
        }).catch((err) => {
          console.error(err);
        });
      }else{
        //Create a new Subscription
        const returnBaseUrl = window.location.origin;
      
        endpoint.postIAM(getBilling().checkoutApiUrl, {customer_email, priceId, returnBaseUrl}).then((res) => {
          if(typeof res.data.session !== "undefined"){
            window.location = res.data.session.url;
          }
        }).catch((err) => {
          console.error(err);
        });
      }
    } catch (e) {
      console.error(e);
    }
  };

  const scrollNavigation = () => {
    try {
      var doc = document.documentElement;
      var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
      if (top > 80) {
        document.getElementById("topnav").classList.add("nav-sticky");
      } else {
        document.getElementById("topnav").classList.remove("nav-sticky");
      }
    } catch (e) {
      console.error(e);
    }
  };



  return (
    <React.Fragment>
      <Helmet>
        <title>Explain Code App - Subscriptions Dashboard</title>
        <meta name="description" content={'Subscriptions Dashboard'} />
        <meta
          name="keywords"
          content="Nodejs, Go, golang, SQL, Python, liquid, code, programming code, code translator, explain code, understand code, programming, javascript, java, GPT-3, code explainer, code review, code examples, code documentation, bad code examples, software examples, example code"
        />
        <meta
          name="twitter:title"
          content="Explain Code App Subscriptions Dashboard"
        />
        <meta
          name="twitter:image:alt"
          content="Explain Code App: Subscriptions Dashboard"
        />
        <meta
          property="og:title"
          content="Explain Code App - Subscriptions Dashboard"
        />
        <meta
          property="og:description"
          content="Explain Code App Subscriptions Dashboard."
        />
      </Helmet>
      <section className="bg-profile d-table w-100 bg-primary">
        <Container>
          <Row>
            <Col lg="12">
              <ProfileHeader />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="section mt-60" id="maincontent">
        <Container className="mt-lg-3">
          <Row>
            <Col lg="3" md="6" xs="12" className="d-lg-block d-none">
              <MainSideBar userglobaluuid={userglobaluuid} />
            </Col>
            <Col lg="9" xs={12}>
              <div className="row justify-content-center">
                <div className="col-12">
                  <div className="section-title text-center mb-4 pb-2">
                    <h1 className="title mb-4">Subscription</h1>
                    {(sessionId !== '' ? <p>Thanks for your subscription, {user.name}</p>:"")}
                    <p className="para-desc mx-auto text mb-0">
                      Please email sales@tenablylabs.com if you need more seats!
                    </p>
                  </div>
                </div>
              </div>

              <div className="row">
                <h2 className="title mb-4">Upgrade Your Plan</h2>
                <div className="text-center">
                  <Nav
                    pills
                    className="rounded-pill justify-content-center d-inline-block border py-1 px-2"
                  >
                    <NavItem className="d-inline-block">
                      <NavLink
                        className={classnames(
                          { active: toggleActive === false },
                          'px-3',
                          'rounded-pill',
                          'monthly',
                        )}
                        onClick={() => {
                          setToggleActive(!toggleActive);
                        }}
                      >
                        Monthly
                      </NavLink>
                    </NavItem>{' '}
                    <NavItem className="d-inline-block">
                      <NavLink
                        className={classnames(
                          { active: toggleActive === true },
                          'px-3',
                          'rounded-pill',
                          'yearly',
                        )}
                        onClick={() => {
                          setToggleActive(!toggleActive);
                        }}
                      >
                        Yearly{' '}
                        {/* <Badge className="rounded-pill bg-success">
                          15% Off{' '}
                        </Badge> */}
                      </NavLink>
                    </NavItem>
                  </Nav>
                </div>

                {getPricing().map((price, key) => {
                  if(price.active === true){
                     return (
                      <div className="col-lg-4 col-md-6 mt-4 pt-2" key={key}>
                          <div className="card pricing-rates business-rate border-0 p-4 rounded-md shadow">
                           {(loading === true ? <SingleColumn />: <div className="card-body p-0">
                             <span className="py-2 px-4 d-inline-block bg-soft-primary h6 mb-0 text-primary rounded-lg">
                               {price.header}
                             </span>
                              {(userProfile.product === price.product | price.header === "Pro" ? 
                              <Badge style={{marginLeft: '10px'}} className={(userProfile.product === price.product ? 'rounded-pill bg-success' : 'rounded-pill bg-warning')}>
                               {(userProfile.product === price.product ? 'Subscribed' : (price.header === "Pro" ? 'Best' : ""))}
                              </Badge> : "")}
                            {(typeof price.custom !== "undefined" ? <h2 className="fw-bold mb-0 mt-3">
                               Custom
                             </h2> : <h2 className="fw-bold mb-0 mt-3">
                               {(tier === "earlyaccess" ? (toggleActive ? price.price.yearlyEarly : price.price.monthly) : (toggleActive ? price.price.yearly : price.price.monthly))}
                               {(tier === "earlyaccess" ? <span style={{textDecoration: 'line-through', fontSize: '18px'}}>{(toggleActive ? price.price.yearly : price.price.monthly)}</span>: "")}
                             </h2>)}
                             {(typeof price.custom !== "undefined" ? "" : <p className="text">Per {toggleActive ? 'Year' : 'Month'}</p>)}
                             
     
                             <p className="text">{price.subheader}</p>
     
                             <ul className="list-unstyled pt-3 border-top">
                               {price.features.map((feature, subkey) => (
                                 <li className="h6 text mb-0" key={subkey}>
                                 <span className="text-primary h5 me-2">
                                   <i className="uil uil-check-circle align-middle"></i>
                                 </span>
                                 {feature}
                               </li>
                                ))}
                             </ul>
     
                             <div className="mt-4 d-grid">
                               {(typeof price.custom === "undefined" ? 
                               
                               <Link onClick={e =>{
                                 const priceId =  (tier === "earlyaccess" ? (toggleActive ? price.price.yearlyEarlyId : price.price.monthId) : (toggleActive ? price.price.yearId : price.price.monthId));
                                 setLoading(true);
                                 addSubscription(priceId, email);
                               }}  to="#" className={(userProfile.product === price.product ? `btn btn-success` : `btn btn-primary`)} style={{fontWeight:(userProfile.product === price.product ?  'bold' : 'normal')}}>
                               {(userProfile.product === price.product ? <span><span style={{color: '#B50000'}}>*</span>&nbsp;Manage</span> : (userProfile.subscriptionActive === true ? 'Manage' : price.buttonText))}
                               </Link>: <a className="btn btn-primary" href={price.link} alt="Email Tenably Labs">{price.buttonText}</a>)}
                               <p className="text mt-3 mb-0">
                                 *No credit card required
                               </p>
                             </div>
                           </div>)}
                         </div>
                       </div>
                      )
                  }
                })}
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
}

export default PagePayments;
