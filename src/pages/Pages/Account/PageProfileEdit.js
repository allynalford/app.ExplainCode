/*jshint esversion: 6 */
import React, { useEffect, useState } from 'react';
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
} from 'reactstrap';
import Select from 'react-select';
//Import Icons
import FeatherIcon from 'feather-icons-react';
import Ionicon from 'react-ionicons';
//Import Images
import { useAuth0 } from '@auth0/auth0-react';
import { Helmet } from "react-helmet";
import { modes, themes } from './config';
import { getAuth0 } from '../../../common/config';
import MainSideBar from '../../../components/Layout/sidebar';
import ProfileHeader from '../../../components/Layout/ProfileHeader';
const endpoint = require('../../../common/endpoint');
const _ = require('lodash');


function PageProfileEdit({ history }) {
  const { user } = useAuth0();
  const { name, picture, email, sub, family_name, given_name } = user;

  const [userglobaluuid, setUserglobaluuid] = useState('');
  const [user_metadata, setUserMetadata] = useState({occupation: '', twitter: '', instagram: '', linkedin: ''});
  const [successMsg, setSuccessMsg] = useState(false);
  const [profileUpdated, setProfileUpdated] = useState(false);
  const [firstName, setFirstName] = useState(given_name);
  const [lastName, setLastName] = useState(family_name);
  const [blocked] = useState(false);
  const [emailAddress, setEmailAddress] = useState(email);
  //const [fieldChanged, setFieldChanged] = useState(false);
  const [loading, setLoading] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [alertColor, setAlertColor] = useState('primary');
  const [themeOption, setThemeOption] = useState({});
  const [modeOption, setModeOption] = useState({});
  //const [user, setUser] = useState();

  useEffect(() => {
    document.title = "Explain Code App - Settings";
    document.body.classList = '';
    document.getElementById('top-menu').classList.add('nav-light');
    window.addEventListener('scroll', scrollNavigation, true);

    return () => {
      window.removeEventListener('scroll', scrollNavigation, true);
    };
  }, []);

  useEffect(() => {
    if (typeof user !== 'undefined') {
      setUserMetadata(user[process.env.REACT_APP_AUTH0_USER_METADATA]);
       setUserglobaluuid(
         user[process.env.REACT_APP_AUTH0_USER_METADATA].userglobaluuid
       );
    }
    return () => {};
  }, [user]);

  useEffect(() => {
    if (typeof user_metadata !== 'undefined') {
      const themeOption = _.find(themes, ['value', user_metadata.theme]);
      setThemeOption(themeOption);
      const modeOption = _.find(modes, ['value', user_metadata.mode]);
      setModeOption(modeOption);
    }
    return () => {};
  }, [user_metadata]);

  useEffect(() => {
    return () => {};
  }, [name, picture, email]);

  const scrollNavigation = () => {
    var doc = document.documentElement;
    var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    if (top > 80) {
      document.getElementById('topnav').classList.add('nav-sticky');
    } else {
      document.getElementById('topnav').classList.remove('nav-sticky');
    }
  };



  const handleSubmit3 = (event) => {
    event.preventDefault();
    setSuccessMsg(true);
  };

  return (
    <React.Fragment>
      <Helmet>
        <title>Explain Code App - Settings</title>
        <meta name="description" content="Explain Code App Settings." />
        <meta name="keywords" content="Nodejs, Go, golang, SQL, Python, liquid, code, programming code, code translator, explain code, understand code, programming, javascript, java, GPT-3, code explainer, code review, code examples, code documentation, bad code examples, software examples, example code" />
        <meta name="twitter:title" content="Explain Code App Settings" />
        <meta name="twitter:image:alt" content="Explain Code App: Settings" />
        <meta property="og:title" content="Explain Code App - Settings" />
        <meta property="og:description" content="Explain Code App Settings." />
      </Helmet>
      {/* <ProfileHeader /> */}

      <section className="section mt-60">
        <Container className="mt-lg-3">
          <Row>
            <Col lg="3" md="6" xs="12" className="d-lg-block d-none">
             <MainSideBar userglobaluuid={userglobaluuid} />
            </Col>

            <Col lg="9" xs="12">
              <Alert
                color={alertColor}
                isOpen={profileUpdated}
                toggle={() => {
                  setProfileUpdated(!profileUpdated);
                }}
              >
                {alertMessage}
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
                  <Form>
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
                              //setFieldChanged(true);
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
                              //setFieldChanged(true);
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
                              //setFieldChanged(true);
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
                            value={(typeof user_metadata.occupation !== "undefined" ? user_metadata.occupation : "")}
                            onChange={(e) => {
                              let meta = user_metadata;
                              meta[e.target.name] = e.target.value;
                              setUserMetadata(meta);
                              //setFieldChanged(true);
                            }}
                            className="form-control ps-5"
                            placeholder="Occupation :"
                            disabled={loading}
                          />
                        </div>
                      </Col>
                      <Col md="6">
                        <div className="mb-3">
                          <Label className="form-label">Language</Label>
                          <div className="form-icon position-relative">
                            <i>
                              <FeatherIcon
                                icon="linkedin"
                                className="fea icon-sm icons"
                              />
                            </i>
                          </div>
                          <Select
                      aria-label="Select an Language"
                      className="form-control"
                      theme={(theme) => ({
                        ...theme,
                        borderRadius: 0,
                        fontSize: '18px',
                        fontWeight: 'bold',
                        // colors: {
                        //     ...theme.colors,
                        //     text: 'black',
                        //     primary25: '#009FD4',
                        //     primary: '#009FD4',
                        // },
                      })}
                      id="modes-select"
                      options={modes}
                      value={modeOption}
                      selectValue={'javascript'}
                      onChange={(opt) => {
                        let meta = user_metadata;
                        meta['mode'] = opt.value;
                        setUserMetadata(meta);
                        setModeOption(opt);
                      }}
                    ></Select>
                        </div>
                      </Col>
                      <Col md="6">
                        <div className="mb-3">
                          <Label className="form-label">Theme</Label>
                          <div className="form-icon position-relative">
                            <i>
                              <FeatherIcon
                                icon="linkedin"
                                className="fea icon-sm icons"
                              />
                            </i>
                          </div>
                          <Select
                      aria-label="Select an Theme"
                      className="form-control"
                      theme={(theme) => ({
                        ...theme,
                        borderRadius: 0,
                        fontSize: '18px',
                        fontWeight: 'bold',
                        // colors: {
                        //     ...theme.colors,
                        //     text: 'black',
                        //     primary25: '#009FD4',
                        //     primary: '#009FD4',
                        // },
                      })}
                      id="themes"
                      options={themes}
                      value={themeOption}
                      onChange={(opt) => {
                        let meta = user_metadata;
                        meta['theme'] = opt.value;
                        setUserMetadata(meta);
                        setThemeOption(opt);
                      }}
                    ></Select>
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
                            value={(typeof user_metadata.twitter !== "undefined" ? user_metadata.twitter : "")}
                            onChange={(e) => {
                              let meta = user_metadata;
                              meta[e.target.name] = e.target.value;
                              setUserMetadata(meta);
                              //setFieldChanged(true);
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
                            value={(typeof user_metadata.instagram !== "undefined" ? user_metadata.instagram : "")}
                            onChange={(e) => {
                              let meta = user_metadata;
                              meta[e.target.name] = e.target.value;
                              setUserMetadata(meta);
                              //setFieldChanged(true);
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
                            value={(typeof user_metadata.linkedin !== "undefined" ? user_metadata.linkedin : "")}
                            onChange={(e) => {
                              let meta = user_metadata;
                              meta[e.target.name] = e.target.value;
                              setUserMetadata(meta);
                              //setFieldChanged(true);
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
                            value={user_metadata.description}
                            onChange={(e) => {
                              let meta = user_metadata;
                              meta[e.target.name] = e.target.value;
                              setUserMetadata(meta);
                              //setFieldChanged(true);
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
                          id="updateprofile"
                          name="updateprofile"
                          className="btn btn-primary"
                          value="Save Changes"
                          disabled={loading}
                          onClick={(e) => {
                            e.preventDefault();
                            setLoading(true);
                            //if (fieldChanged === true) {
                              //console.log(fieldChanged);
                            //}
                            //Call the service
                            endpoint
                              .postIAM(getAuth0().updateProfile, {
                                id: sub,
                                email,
                                firstname: firstName,
                                lastname: lastName,
                                blocked,
                                user_metadata,
                              })
                              .then((res) => {
                               
                                if (res.data.success === true) {
                                  setAlertColor('primary');
                                  setAlertMessage(
                                    'Profile Successfully updated.',
                                  );
                                } else {
                                  setAlertColor('primary');
                                  setAlertMessage(res.data.message);
                                }

                                setLoading(false);
                              })
                              .catch((err) => {
                                setAlertColor('danger');
                                setAlertMessage(err.message);
                                setLoading(false);
                              });

                            setProfileUpdated(true);
                          }}
                        >
                          Save Changes
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
}

export default PageProfileEdit;
