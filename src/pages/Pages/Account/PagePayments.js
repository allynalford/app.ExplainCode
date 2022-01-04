import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Row,
  Col
} from "reactstrap";
import { useAuth0 } from '@auth0/auth0-react';
import { Helmet } from "react-helmet";
import MainSideBar from '../../../components/Layout/sidebar';
import ProfileHeader from '../../../components/Layout/ProfileHeader';
import Toggle from 'react-bootstrap-toggle';

function PagePayments({ history }) {

  const { user } = useAuth0();
  const { email } = user;
  const { userglobaluuid } = user[process.env.REACT_APP_AUTH0_USER_METADATA];
  const [toggleActive, setToggleActive] = useState(false);

  useEffect(() => {
    try {
      document.title = "Explain Code App - Dashboard";
      if (document.getElementById('top-menu') !== null) {
        document.getElementById('top-menu').classList.add('nav-light');
      }

      window.addEventListener('scroll', scrollNavigation, true);


    } catch (e) {
      console.error(e);
    }

    return () => {
      window.removeEventListener("scroll", scrollNavigation, true);
    };
  }, []);

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
                    <p className="para-desc mx-auto text mb-0">
                      You currently have 1 seat in your plan. Add more seats to
                      your plan below. Please email help@tenablylabs.com if you
                      need more than 20 seats!
                    </p>
                  </div>
                </div>
              </div>
             
              <div className="row">
                <h2>Upgrade Your Plan
                  <Toggle
                  style={{marginLeft: '10px'}}
                  active={toggleActive}
                  onClick={(e) => {
                    setToggleActive(!toggleActive)
                  }}
                  on={<h5>Yearly</h5>}
                  off={<h5>Monthly</h5>}
                  size="xs"
                  onstyle='success'
                  offstyle="info"
                /></h2>
                
                <div className="col-lg-4 col-md-6 mt-4 pt-2">
                  <div className="card pricing-rates business-rate border-0 p-4 rounded-md shadow">
                    <div className="card-body p-0">
                      <span className="py-2 px-4 d-inline-block bg-soft-primary h6 mb-0 text-primary rounded-lg">
                        Starter
                      </span>
                      <h2 className="fw-bold mb-0 mt-3">$12.00</h2>
                      <p className="text">Per Month</p>

                      <p className="text">Perfect for getting started.</p>

                      <ul className="list-unstyled pt-3 border-top">
                        <li className="h6 text mb-0">
                          <span className="text-primary h5 me-2">
                            <i className="uil uil-check-circle align-middle"></i>
                          </span>
                          Full Access to all Tools
                        </li>
                        <li className="h6 text mb-0">
                          <span className="text-primary h5 me-2">
                            <i className="uil uil-check-circle align-middle"></i>
                          </span>
                          500 Character Snippets
                        </li>
                        <li className="h6 text mb-0">
                          <span className="text-primary h5 me-2">
                            <i className="uil uil-check-circle align-middle"></i>
                          </span>
                          35 Explanations
                        </li>
                        <li className="h6 text mb-0">
                          <span className="text-primary h5 me-2">
                            <i className="uil uil-check-circle align-middle"></i>
                          </span>
                          35 Saved Snippets
                        </li>
                        <li className="h6 text mb-0">
                          <span className="text-primary h5 me-2">
                            <i className="uil uil-check-circle align-middle"></i>
                          </span>
                          1 Project
                        </li>
                      </ul>

                      <div className="mt-4 d-grid">
                        <Link to="#" className="btn btn-primary">
                          Buy Now
                        </Link>
                        <p className="text mt-3 mb-0">
                          *No credit card required
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 mt-4 pt-2">
                  <div className="card pricing-rates business-rate border-0 p-4 rounded-md shadow">
                    <div className="ribbon ribbon-right ribbon-warning overflow-hidden">
                      <span className="text-center d-block shadow small h6">
                        Best
                      </span>
                    </div>
                    <div className="card-body p-0">
                      <span className="py-2 px-4 d-inline-block bg-soft-primary h6 mb-0 text-primary rounded-lg">
                        Pro
                      </span>
                      <h2 className="fw-bold mb-0 mt-3">$26.00</h2>
                      <p className="text">Per Month</p>

                      <p className="text">
                        Better for growing large code base.
                      </p>

                      <ul className="list-unstyled pt-3 border-top">
                        <li className="h6 text mb-0">
                          <span className="text-primary h5 me-2">
                            <i className="uil uil-check-circle align-middle"></i>
                          </span>
                          Full Access to all Tools
                        </li>
                        <li className="h6 text mb-0">
                          <span className="text-primary h5 me-2">
                            <i className="uil uil-check-circle align-middle"></i>
                          </span>
                          1,500 Character Code Snippets
                        </li>
                        <li className="h6 text mb-0">
                          <span className="text-primary h5 me-2">
                            <i className="uil uil-check-circle align-middle"></i>
                          </span>
                          Unlimited Explanations
                        </li>
                        <li className="h6 text mb-0">
                          <span className="text-primary h5 me-2">
                            <i className="uil uil-check-circle align-middle"></i>
                          </span>
                          Unlimited Saved Snippets
                        </li>
                        <li className="h6 text mb-0">
                          <span className="text-primary h5 me-2">
                            <i className="uil uil-check-circle align-middle"></i>
                          </span>
                          Unlimited Projects
                        </li>
                      </ul>

                      <div className="mt-4 d-grid">
                        <Link to="#" className="btn btn-primary">
                          Buy Now
                        </Link>
                        <p className="text mt-3 mb-0">
                          *No credit card required
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 mt-4 pt-2">
                  <div className="card pricing-rates business-rate border-0 p-4 rounded-md shadow">
                    <div className="card-body p-0">
                      <span className="py-2 px-4 d-inline-block bg-soft-primary h6 mb-0 text-primary rounded-lg">
                        Teams
                      </span>
                      <h2 className="fw-bold mb-0 mt-3">Custom</h2>
                      <p className="text">&nbsp;</p>

                      <p className="text">
                        Great for Startups, Schools and Enterprise.
                      </p>

                      <ul className="list-unstyled pt-3 border-top">
                        <li className="h6 text-muted mb-0">
                          <span className="text-primary h5 me-2">
                            <i className="uil uil-check-circle align-middle"></i>
                          </span>
                          Full Access
                        </li>
                        <li className="h6 text-muted mb-0">
                          <span className="text-primary h5 me-2">
                            <i className="uil uil-check-circle align-middle"></i>
                          </span>
                          Enhanced Security
                        </li>
                        <li className="h6 text-muted mb-0">
                          <span className="text-primary h5 me-2">
                            <i className="uil uil-check-circle align-middle"></i>
                          </span>
                          Source Files
                        </li>
                        <li className="h6 text-muted mb-0">
                          <span className="text-primary h5 me-2">
                            <i className="uil uil-check-circle align-middle"></i>
                          </span>
                          1 Domain Free
                        </li>
                        <li className="h6 text-muted mb-0">
                          <span className="text-primary h5 me-2">
                            <i className="uil uil-check-circle align-middle"></i>
                          </span>
                          Enhanced Security
                        </li>
                      </ul>

                      <div className="mt-4 d-grid">
                        <Link to="#" className="btn btn-primary">
                          Upgrade
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
}

export default PagePayments;
