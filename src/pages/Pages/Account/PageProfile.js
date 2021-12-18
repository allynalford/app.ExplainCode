import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
} from "reactstrap";

//Import Icons
import FeatherIcon from "feather-icons-react";

//Import Images
import imgbg from "../../../assets/images/account/bg.png";

import { useAuth0 } from '@auth0/auth0-react';
import { getWidgets } from './config';

import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-golang";
import "ace-builds/src-noconflict/mode-mysql";
import "ace-builds/src-noconflict/mode-markdown";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-terminal";

function PageProfile({history}) {
 
  const { user, logout } = useAuth0();
  const { name, picture, email } = user;


  useEffect(() => {
    document.body.classList = "";
    document.getElementById("top-menu").classList.add("nav-light");
    window.addEventListener("scroll", scrollNavigation, true);
    console.log({ name, picture, email })

    return () => {
      console.log("cleaned up");
      window.removeEventListener("scroll", scrollNavigation, true);
    };
  }, [name, picture, email]);

  const scrollNavigation = () => {
    var doc = document.documentElement;
    var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    if (top > 80) {
      document.getElementById("topnav").classList.add("nav-sticky");
    } else {
      document.getElementById("topnav").classList.remove("nav-sticky");
    }
  };


  function onChange(newValue) {
    console.log("change", newValue);
  }


  return (
    <React.Fragment>
      <section
        className="bg-profile d-table w-100 bg-primary"
        style={{ background: `url(${imgbg}) center center` }}
      >
        <Container>
          <Row>
            <Col lg="12">
              <Card
                className="public-profile border-0 rounded shadow"
                style={{ zIndex: '1' }}
              >
                <CardBody>
                  <Row className="align-items-center">
                    <Col lg="2" md="3" className="text-md-start text-center">
                      <img
                        src={picture}
                        className="avatar avatar-large rounded-circle shadow d-block mx-auto"
                        alt=""
                      />
                    </Col>

                    <Col lg="10" md="9">
                      <Row className="align-items-end">
                        <Col
                          md="7"
                          className="text-md-start text-center mt-4 mt-sm-0"
                        >
                          <h3 className="title mb-0">{name}</h3>
                          <small className="text-muted h6 me-2">{email}</small>
                        </Col>
                        <Col md="5" className="text-md-end text-center">
                          <ul className="list-unstyled social-icon social mb-0 mt-4">
                            <li className="list-inline-item">
                              <Link to="#" className="rounded">
                                <i className="uil uil-user-plus align-middle"></i>
                              </Link>
                            </li>
                            <li className="list-inline-item">
                              <Link to="#" className="rounded">
                                <i className="uil uil-comment align-middle"></i>
                              </Link>
                            </li>
                            <li className="list-inline-item">
                              <Link to="#" className="rounded">
                                <i className="uil uil-bell align-middle"></i>
                              </Link>
                            </li>
                            <li className="list-inline-item">
                              <Link to="/page-profile-edit" className="rounded">
                                <i className="uil uil-cog align-middle"></i>
                              </Link>
                            </li>
                          </ul>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="section mt-60">
        <Container className="mt-lg-3">
          <Row>
            <Col lg="3" md="6" xs="12" className="d-lg-block d-none">
              <div className="sidebar sticky-bar p-4 rounded shadow">
                <div className="widget">
                  <h5 className="widget-title">Section :</h5>
                  <div className="row mt-4">
                    <div className="col-6 text-center">
                      <FeatherIcon
                        icon="user-plus"
                        className="fea icon-ex-md text-primary mb-1"
                      />
                      <h5 className="mb-0">2588</h5>
                      <p className="text-muted mb-0">Data</p>
                    </div>

                    <div className="col-6 text-center">
                      <FeatherIcon
                        icon="users"
                        className="fea icon-ex-md text-primary mb-1"
                      />
                      <h5 className="mb-0">454</h5>
                      <p className="text-muted mb-0">Data</p>
                    </div>
                  </div>
                </div>
                <div className="widget mt-4 pt-2">
                  <h5 className="widget-title">Section :</h5>
                  <div className="progress-box mt-4">
                    <h6 className="title text-muted">Progress</h6>
                    {/* <Progress
                    value={50}
                    color="primary"
                    barClassName="position-relative"
                  >
                    <div className="progress-value d-block text-muted h6">
                      24 / 48
                    </div>
                  </Progress> */}
                  </div>
                </div>

                <div className="widget mt-4">
                  <ul
                    className="list-unstyled sidebar-nav mb-0"
                    id="navmenu-nav"
                  >
                    {getWidgets(window.location.path).map((widget, key) => (
                      <li className={widget.className} key={key}>
                        {(widget.title === "Logout" ? 
                        <Link
                        onClick={() =>
                          logout({
                            returnTo: window.location.origin,
                          })
                        }
                          to={"#"}
                          className="navbar-link d-flex rounded shadow align-items-center py-2 px-4"
                        >
                          <span className="h4 mb-0">
                            <i className={widget.icon}></i>
                          </span>
                          <h6 className="mb-0 ms-2">{widget.title}</h6>
                        </Link> : <Link
                          to={widget.link}
                          className="navbar-link d-flex rounded shadow align-items-center py-2 px-4"
                        >
                          <span className="h4 mb-0">
                            <i className={widget.icon}></i>
                          </span>
                          <h6 className="mb-0 ms-2">{widget.title}</h6>
                        </Link>)}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="widget mt-4 pt-2">
                  <h5 className="widget-title">Section :</h5>
                  {/* <ul className="list-unstyled social-icon mb-0 mt-4">
                    <li className="list-inline-item">
                      <Link to="#" className="rounded">
                        <i>
                          <FeatherIcon
                            icon="facebook"
                            className="fea icon-sm fea-social"
                          />
                        </i>
                      </Link>
                    </li>{' '}
                    <li className="list-inline-item">
                      <Link to="#" className="rounded">
                        <i>
                          <FeatherIcon
                            icon="instagram"
                            className="fea icon-sm fea-social"
                          />
                        </i>
                      </Link>
                    </li>{' '}
                    <li className="list-inline-item">
                      <Link to="#" className="rounded">
                        <i>
                          <FeatherIcon
                            icon="twitter"
                            className="fea icon-sm fea-social"
                          />
                        </i>
                      </Link>
                    </li>{' '}
                    <li className="list-inline-item">
                      <Link to="#" className="rounded">
                        <i>
                          <FeatherIcon
                            icon="linkedin"
                            className="fea icon-sm fea-social"
                          />
                        </i>
                      </Link>
                    </li>{' '}
                    <li className="list-inline-item">
                      <Link to="#" className="rounded">
                        <i>
                          <FeatherIcon
                            icon="github"
                            className="fea icon-sm fea-social"
                          />
                        </i>
                      </Link>
                    </li>{' '}
                    <li className="list-inline-item">
                      <Link to="#" className="rounded">
                        <i>
                          <FeatherIcon
                            icon="youtube"
                            className="fea icon-sm fea-social"
                          />
                        </i>
                      </Link>
                    </li>{' '}
                    <li className="list-inline-item">
                      <Link to="#" className="rounded">
                        <i>
                          <FeatherIcon
                            icon="gitlab"
                            className="fea icon-sm fea-social"
                          />
                        </i>
                      </Link>
                    </li>
                  </ul> */}
                </div>
              </div>
            </Col>

            <Col lg="9" md="7" xs="12">
              <div className="border-bottom pb-4">
                <h2>Dashboard</h2>
                <p className="text mb-0">
                  Explain what this process does here
                </p>
              </div>

              <div className="border-bottom pb-4">
                <AceEditor
                  style={{width: "auto"}}
                  placeholder="Placeholder Text"
                  mode="javascript"
                  theme="terminal"
                  name="editor"
                  onChange={onChange}
                  fontSize={14}
                  showPrintMargin={true}
                  showGutter={true}
                  highlightActiveLine={true}
                  value={`function onLoad(editor) {
  console.log("i've loaded");
}`}
                  setOptions={{
                    enableBasicAutocompletion: false,
                    enableLiveAutocompletion: false,
                    enableSnippets: true,
                    showLineNumbers: true,
                    tabSize: 2,
                  }}
                />
              </div>

              <h5 className="mt-4 mb-0">Results :</h5>
              <div className="border-bottom pb-4">
                <AceEditor
                  style={{width: "auto"}}
                  placeholder="Placeholder Text"
                  mode="html"
                  theme="terminal"
                  name="editor-results"
                  onChange={onChange}
                  fontSize={14}
                  showPrintMargin={true}
                  showGutter={false}
                  highlightActiveLine={true}
                  value={`1. Test \n2. Test`}
                  setOptions={{
                    enableBasicAutocompletion: false,
                    enableLiveAutocompletion: false,
                    enableSnippets: false,
                    showLineNumbers: false,
                    tabSize: 2,
                  }}
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default PageProfile;

