import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Alert,
  Form,
  Input,
  Button,
  Label,
  CardBody,
  Card,
} from "reactstrap";

//Import Icons
import FeatherIcon from "feather-icons-react";
import Ionicon from 'react-ionicons';
//Import Images
import { useAuth0 } from '@auth0/auth0-react';
import { getWidgets, getPrompts } from './config';

import ProfileHeader from "../../../components/Layout/ProfileHeader";

function PageProfileEdit({history}) {
  
  const { user, logout } = useAuth0();
  const { name, picture, email } = user;
 
  const user_metadata = user[process.env.REACT_APP_AUTH0_USER_METADATA];
  const userglobaluuid = user_metadata.userglobaluuid;
  const [successMsg, setSuccessMsg] = useState(false);
  const [profileUpdated, setProfileUpdated] = useState(false);
  const [firstName, setFirstName] = useState((typeof name !== "undefined" ? name.split(' ')[0] : ""));
  const [lastName, setLastName] = useState((typeof name !== "undefined" ? name.split(' ')[1] : ""));
  const [emailAddress, setEmailAddress] = useState(email);
  const [userMetadata, setUserMetadata] = useState(user_metadata);
  const [occupation, setOccupation] = useState(user_metadata.occupation);
  const [description, setDescription] = useState(user_metadata.description);
  const [fieldChanged, setFieldChanged] = useState(false);
  const [loading, setLoading] = useState(false);
  //const [user, setUser] = useState();




  useEffect(() => {
    document.body.classList = "";
    document.getElementById("top-menu").classList.add("nav-light");
    window.addEventListener("scroll", scrollNavigation, true);

    return () => {
      window.removeEventListener("scroll", scrollNavigation, true);
    };
  }, [name, picture, email, user]);

  const scrollNavigation = () => {
    var doc = document.documentElement;
    var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    if (top > 80) {
      document.getElementById("topnav").classList.add("nav-sticky");
    } else {
      document.getElementById("topnav").classList.remove("nav-sticky");
    }
  };

  const handleSubmit = (event) =>{
    event.preventDefault();
    setSuccessMsg(true);
  }


  const handleSubmit3 = (event) =>{
    event.preventDefault();
    setSuccessMsg(true);
  }




  return (
    <React.Fragment>
      <ProfileHeader />

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
                  <h5 className="widget-title">Tools:</h5>
                  <ul
                    className="list-unstyled sidebar-nav mb-0"
                    id="navmenu-nav"
                  >
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
                  <ul
                    className="list-unstyled sidebar-nav mb-0"
                    id="navmenu-nav"
                  >
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

                <div className="widget mt-4 pt-2">
                  <h5 className="widget-title">Section :</h5>
                </div>
              </div>
            </Col>

            <Col lg="9" xs="12">
              <Alert
                color="primary"
                isOpen={profileUpdated}
                toggle={() => {
                  setProfileUpdated(!profileUpdated);
                }}
              >
                Profile successfully updated.
              </Alert>
              <Card className="border-0 rounded shadow">
                <CardBody>
                  <h5 className="text-md-start text-center">
                    Personal Detail :
                  </h5>

                  <div className="mt-3 text-md-start text-center d-sm-flex">
                    <img
                      src={picture}
                      className="avatar float-md-left avatar-medium rounded-circle shadow me-md-4"
                      alt=""
                    />
                    {/* <div className="mt-md-4 mt-3 mt-sm-0">
                        <Link to="#" className="btn btn-primary mt-2">
                          {" "}
                          Change Picture{" "}
                        </Link>{" "}
                        <Link
                          to="#"
                          className="btn btn-outline-primary mt-2 ms-2"
                        >
                          Delete
                        </Link>
                      </div> */}
                  </div>
                  <Form onSubmit={handleSubmit}>
                    <Row className="mt-4">
                      <Col md="6">
                        <div className="mb-3">
                          <Label className="form-label">First Name</Label>
                          <div className="form-icon position-relative">
                            <i>
                              <FeatherIcon
                                icon="user"
                                className="fea icon-sm icons"
                              />
                            </i>
                          </div>
                          <Input
                            name="firstname"
                            id="firstname"
                            type="text"
                            value={firstName}
                            onChange={(e) => {
                              setFirstName(e.target.value);
                            }}
                            className="form-control ps-5"
                            placeholder="First Name :"
                            disabled={loading}
                          />
                        </div>
                      </Col>
                      <Col md="6">
                        <div className="mb-3">
                          <Label className="form-label">Last Name</Label>
                          <div className="form-icon position-relative">
                            <i>
                              <FeatherIcon
                                icon="user-check"
                                className="fea icon-sm icons"
                              />
                            </i>
                          </div>
                          <Input
                            name="lastname"
                            id="lastname"
                            type="text"
                            value={lastName}
                            onChange={(e) => {
                              setLastName(e.target.value);
                            }}
                            className="form-control ps-5"
                            placeholder="Last Name :"
                            disabled={loading}
                          />
                        </div>
                      </Col>
                      <Col md="6">
                        <div className="mb-3">
                          <Label className="form-label">Your Email</Label>
                          <div className="form-icon position-relative">
                            <i>
                              <FeatherIcon
                                icon="mail"
                                className="fea icon-sm icons"
                              />
                            </i>
                          </div>
                          <Input
                            name="email"
                            id="email"
                            type="email"
                            value={emailAddress}
                            disabled={true}
                            onClick={(e) => {
                              setEmailAddress(e.target.value);
                            }}
                            className="form-control ps-5"
                            placeholder="Your email :"
                          />
                        </div>
                      </Col>
                      <Col md="6">
                        <div className="mb-3">
                          <Label className="form-label">Occupation</Label>
                          <div className="form-icon position-relative">
                            <i>
                              <FeatherIcon
                                icon="bookmark"
                                className="fea icon-sm icons"
                              />
                            </i>
                          </div>
                          <Input
                            name="occupation"
                            id="occupation"
                            type="text"
                            value={occupation}
                            onChange={(e) => {
                              let meta = user_metadata;
                              meta[e.target.name] = e.target.value;
                              setUserMetadata(meta);
                              setOccupation(e.target.value);
                            }}
                            className="form-control ps-5"
                            placeholder="Occupation :"
                            disabled={loading}
                          />
                        </div>
                      </Col>
                      <Col md="6">
                        <div className="mb-3">
                          <Label className="form-label">Twitter</Label>
                          <div className="form-icon position-relative">
                            <i>
                              <FeatherIcon
                                icon="twitter"
                                className="fea icon-sm icons"
                              />
                            </i>
                          </div>
                          <Input
                            name="twitter"
                            id="twitter"
                            type="text"
                            value={user_metadata.twitter}
                            onChange={(e) => {
                              let meta = user_metadata;
                              meta[e.target.name] = e.target.value;
                              setUserMetadata(meta);
                            }}
                            className="form-control ps-5"
                            placeholder="Twitter Handle :"
                            disabled={loading}
                          />
                        </div>
                      </Col>
                      <Col md="6">
                        <div className="mb-3">
                          <Label className="form-label">Instagram</Label>
                          <div className="form-icon position-relative">
                            <i>
                              <FeatherIcon
                                icon="instagram"
                                className="fea icon-sm icons"
                              />
                            </i>
                          </div>
                          <Input
                            name="instagram"
                            id="instagram"
                            type="text"
                            value={user_metadata.instagram}
                            onChange={(e) => {
                              let meta = user_metadata;
                              meta[e.target.name] = e.target.value;
                              setUserMetadata(meta);
                            }}
                            className="form-control ps-5"
                            placeholder="Instagram Handle :"
                            disabled={loading}
                          />
                        </div>
                      </Col>
                      <Col md="6">
                        <div className="mb-3">
                          <Label className="form-label">LinkedIn</Label>
                          <div className="form-icon position-relative">
                            <i>
                              <FeatherIcon
                                icon="linkedin"
                                className="fea icon-sm icons"
                              />
                            </i>
                          </div>
                          <Input
                            name="linkedin"
                            id="linkedin"
                            type="text"
                            value={user_metadata.linkedin}
                            onChange={(e) => {
                              let meta = user_metadata;
                              meta[e.target.name] = e.target.value;
                              setUserMetadata(meta);
                            }}
                            className="form-control ps-5"
                            placeholder="LinkedIn Profile Name :"
                            disabled={loading}
                          />
                        </div>
                      </Col>
                      <Col md="12">
                        <div className="mb-3">
                          <Label className="form-label">Description</Label>
                          <div className="form-icon position-relative">
                            <i>
                              <FeatherIcon
                                icon="message-circle"
                                className="fea icon-sm icons"
                              />
                            </i>
                          </div>
                          <textarea
                            name="description"
                            id="description"
                            rows="4"
                            value={description}
                            onChange={(e) => {
                              let meta = user_metadata;
                              meta[e.target.name] = e.target.value;
                              setUserMetadata(meta);
                              setDescription(e.target.value);
                            }}
                            className="form-control ps-5"
                            placeholder="Description :"
                            disabled={loading}
                          ></textarea>
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col sm="12">
                        <Button
                          id="submit"
                          name="send"
                          className="btn btn-primary"
                          value="Save Changes"
                          disabled={loading}
                          onClick={(e) => {
                            if (fieldChanged === true) {
                              console.log(fieldChanged);
                            }
                            setProfileUpdated(true);
                          }}
                        >
                          Ask Question
                          {loading === true ? (
                            <Ionicon
                              style={{ marginLeft: '5px' }}
                              color="#ffffff"
                              icon="ios-analytics-outline"
                              beat={loading}
                            />
                          ) : (
                            ''
                          )}
                        </Button>
                      </Col>
                    </Row>
                  </Form>

                  <Row>
                    <Col md="6" className="mt-4 pt-2">
                      <h5>Change password :</h5>
                      <Alert
                        color="primary"
                        isOpen={successMsg}
                        toggle={() => {
                          setSuccessMsg(!successMsg);
                        }}
                      >
                        Password Updated.
                      </Alert>
                      <Form onSubmit={handleSubmit3}>
                        <Row className="mt-4">
                          <Col lg="12">
                            <div className="mb-3">
                              <Label className="form-label">
                                Old password :
                              </Label>
                              <div className="form-icon position-relative">
                                <i>
                                  <FeatherIcon
                                    icon="lock"
                                    className="fea icon-sm icons"
                                  />
                                </i>
                              </div>
                              <Input
                                type="password"
                                className="form-control ps-5"
                                placeholder="Old password"
                                required
                              />
                            </div>
                          </Col>

                          <Col lg="12">
                            <div className="mb-3">
                              <Label className="form-label">
                                New password :
                              </Label>
                              <div className="form-icon position-relative">
                                <i>
                                  <FeatherIcon
                                    icon="lock"
                                    className="fea icon-sm icons"
                                  />
                                </i>
                              </div>
                              <Input
                                type="password"
                                className="form-control ps-5"
                                placeholder="New password"
                                required
                              />
                            </div>
                          </Col>

                          <Col lg="12">
                            <div className="mb-3">
                              <Label className="form-label">
                                Re-type New password :
                              </Label>
                              <div className="form-icon position-relative">
                                <i>
                                  <FeatherIcon
                                    icon="lock"
                                    className="fea icon-sm icons"
                                  />
                                </i>
                              </div>
                              <Input
                                type="password"
                                className="form-control ps-5"
                                placeholder="Re-type New password"
                                required
                              />
                            </div>
                          </Col>

                          <Col lg="12" className="mt-2 mb-0">
                            <Button color="primary">Save password</Button>
                          </Col>
                        </Row>
                      </Form>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
              <div className="rounded shadow mt-4">
                <div className="p-4 border-bottom">
                  <h5 className="mb-0">Account Notifications :</h5>
                </div>

                <div className="p-4">
                  <div className="d-flex justify-content-between pb-4">
                    <h6 className="mb-0">When someone mentions me</h6>
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="customSwitch1"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="customSwitch1"
                      ></label>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between py-4 border-top">
                    <h6 className="mb-0">When someone follows me</h6>
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="customSwitch2"
                        defaultChecked
                      />
                      <label
                        className="form-check-label"
                        htmlFor="customSwitch2"
                      ></label>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between py-4 border-top">
                    <h6 className="mb-0">When shares my activity</h6>
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="customSwitch3"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="customSwitch3"
                      ></label>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between py-4 border-top">
                    <h6 className="mb-0">When someone messages me</h6>
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="customSwitch4"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="customSwitch4"
                      ></label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rounded shadow mt-4">
                <div className="p-4 border-bottom">
                  <h5 className="mb-0">Marketing Notifications :</h5>
                </div>

                <div className="p-4">
                  <div className="d-flex justify-content-between pb-4">
                    <h6 className="mb-0">There is a sale or promotion</h6>
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="customSwitch5"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="customSwitch5"
                      ></label>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between py-4 border-top">
                    <h6 className="mb-0">Company news</h6>
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="customSwitch6"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="customSwitch6"
                      ></label>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between py-4 border-top">
                    <h6 className="mb-0">Weekly jobs</h6>
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="customSwitch7"
                        defaultChecked
                      />
                      <label
                        className="form-check-label"
                        htmlFor="customSwitch7"
                      ></label>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between py-4 border-top">
                    <h6 className="mb-0">Unsubscribe News</h6>
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="customSwitch8"
                        defaultChecked
                      />
                      <label
                        className="form-check-label"
                        htmlFor="customSwitch8"
                      ></label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rounded shadow mt-4">
                <div className="p-4 border-bottom">
                  <h5 className="mb-0 text-danger">Delete Account :</h5>
                </div>

                <div className="p-4">
                  <h6 className="mb-0">
                    Do you want to delete the account? Please press below
                    "Delete" button
                  </h6>
                  <div className="mt-4">
                    <button className="btn btn-danger">Delete Account</button>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default PageProfileEdit;

