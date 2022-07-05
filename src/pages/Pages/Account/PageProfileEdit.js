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
import { Event,  initGA, PageView} from '../../../common/gaUtils.js';
const endpoint = require('../../../common/endpoint');
const _ = require('lodash');
var Swal = require('sweetalert2');
var passwordValidator = require('password-validator');
function PageProfileEdit({ history }) {
  const { user } = useAuth0();
  const { name, picture, email, sub, family_name, given_name } = user;
  const { userglobaluuid, twitter:tweet, instagram:insta, occupation:occpt, description:desc } = user[process.env.REACT_APP_AUTH0_USER_METADATA];
  //const [userglobaluuid, setUserglobaluuid] = useState('');
  const [user_metadata, setUserMetadata] = useState(user[process.env.REACT_APP_AUTH0_USER_METADATA]);
  const [twitter, setTwitter] = useState(tweet);
  const [instagram, setInstagram] = useState(insta);
  const [linkedin, setLinkedin] = useState(insta);
  const [occupation, setOccupation] = useState(occpt);
  const [description, setDescription] = useState(desc);
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

  const [newPassword, setNewPassword] = useState('');
  const [newPasswordCon, setNewPasswordCon] = useState('');

  const schema = new passwordValidator();
  schema
    .is()
    .min(8) // Minimum length 8
    .is()
    .max(100) // Maximum length 100
    .has()
    .uppercase() // Must have uppercase letters
    .has()
    .lowercase() // Must have lowercase letters
    .has()
    .digits() // Must have digits
    .has()
    .not()
    .spaces() // Should not have spaces
    .is()
    .not()
    .oneOf(['Passw0rd', 'Password123']);



  useEffect(() => {
    document.title = "Explain Code App - Settings";
    document.body.classList = '';
    initGA();
    PageView();
    try{
      document.getElementById('top-menu').classList.add('nav-light');
    }catch(e){
      console.error(e);
    }
    window.addEventListener('scroll', scrollNavigation, true);

    return () => {
      window.removeEventListener('scroll', scrollNavigation, true);
    };
  }, []);

  // useEffect(() => {
  //   if (typeof user !== 'undefined') {
  //     setUserMetadata(user[process.env.REACT_APP_AUTH0_USER_METADATA]);
  //     // setUserglobaluuid(
  //     //   user[process.env.REACT_APP_AUTH0_USER_METADATA].userglobaluuid,
  //     // );
  //   }
  //   return () => {};
  // }, [user]);

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

      <section className="section mt-60" id="maincontent">
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
                          <Label for="firstname" className="form-label">First Name</Label>
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
                          <Label for="lastname" className="form-label">Last Name</Label>
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
                          <Label for="email" className="form-label">Your Email</Label>
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
                          <Label for="occupation" className="form-label">Occupation</Label>
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
                              setOccupation(e.target.value)
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
                          <Label for="modes-select" className="form-label">Language</Label>
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
                          <Label for="themes" className="form-label">Theme</Label>
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
                          <Label id="twitter" className="form-label">Twitter</Label>
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
                            value={twitter}
                            onChange={(e) => {
                              let meta = user_metadata;
                              meta[e.target.name] = e.target.value;
                              setUserMetadata(meta);
                              setTwitter(e.target.value);
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
                          <Label for="instagram" className="form-label">Instagram</Label>
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
                            value={instagram}
                            onChange={(e) => {
                              let meta = user_metadata;
                              meta[e.target.name] = e.target.value;
                              setUserMetadata(meta);
                              setInstagram(e.target.value);
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
                          <Label for="linkedin" className="form-label">LinkedIn</Label>
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
                            value={linkedin}
                            onChange={(e) => {
                              let meta = user_metadata;
                              meta[e.target.name] = e.target.value;
                              setUserMetadata(meta);
                              setLinkedin(e.target.value);
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
                          <Label for="description" className="form-label">Description</Label>
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
                              }).then((res) => {
                               
                                if (res.data.success === true) {
                                  Event('Settings', 'Profile Update', 'User Profile');
                                  setAlertColor('primary');
                                  setAlertMessage(
                                    'Profile Successfully updated.',
                                  );
                                  let cachedSettings = {};

                                  if (typeof user_metadata.mode !== 'undefined') cachedSettings.mode = user_metadata.mode;
                                  if (typeof user_metadata.theme !== 'undefined') cachedSettings.theme = user_metadata.theme;
                                  

                                  sessionStorage.setItem('cachedSettings', JSON.stringify(cachedSettings));
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
                          {/* <Col lg="12">
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
                          </Col> */}

                          <Col lg="12">
                            <div className="mb-3">
                              <Label for="newPassword" className="form-label">
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
                                id="newPassword"
                                name="newPassword"
                                type="password"
                                className="form-control ps-5"
                                placeholder="New password"
                                required
                                onChange={e=>{
                                  setNewPassword(e.target.value);
                                }}
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
                                id="newPasswordCon"
                                name="newPasswordCon"
                                type="password"
                                className="form-control ps-5"
                                placeholder="Re-type New password"
                                required
                                onChange={e=>{
                                  setNewPasswordCon(e.target.value);
                                }}
                              />
                            </div>
                          </Col>
                          <Col lg="12" className="mt-2 mb-0">
                            <Button 
                            disabled={loading}
                            onClick={e =>{
                              e.preventDefault();

                              if (
                                (newPassword.length === 0) |
                                (newPasswordCon.length === 0) |
                                (schema.validate(newPassword) === false)
                              ) {
                                Swal.fire({
                                  title: 'Invalid Password!',
                                  text: 'Minimum length 8. \nMust have at least 1 uppercase letter. \nMust have at least 1 digit.',
                                  icon: 'error',
                                  confirmButtonText: 'Ok',
                                });
                              }else if(newPassword !== newPasswordCon){
                                Swal.fire({
                                  title: "Password's don't match",
                                  text: 'Please confirm your new password',
                                  icon: 'error',
                                  confirmButtonText: 'Ok',
                                });
                              }else{
                                endpoint.postIAM(getAuth0().changeUserAuth, {id: user.sub, value: newPassword}).then((res) => {
                                  if(res.data.success === true){
                                    Swal.fire({
                                      title: 'Password Update Successful',
                                      text: 'Your password has been successfully updated.',
                                      icon: 'success',
                                      confirmButtonText: 'Ok',
                                    });
                                  }else{
                                    Swal.fire({
                                      title: "Password Error",
                                      text: res.data.message,
                                      icon: 'error',
                                      confirmButtonText: 'Ok',
                                    });
                                  }

                              }).catch((err) => {
                                console.error(err);
                              });
                              }

                              

                            }}
                            color="primary" aria-label='Change your Password'>Change Password</Button>
                          </Col>
                        </Row>
                      </Form>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
              {/* <div className="rounded shadow mt-4">
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
              </div> */}
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
}

export default PageProfileEdit;
