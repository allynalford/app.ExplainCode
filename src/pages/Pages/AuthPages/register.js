import React, { Component } from 'react';
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  Label,
  Button,
} from 'reactstrap';
import { Helmet } from "react-helmet";
import { Link } from 'react-router-dom';
import { AvForm, AvField, AvInput, AvGroup } from 'availity-reactstrap-validation';
import LoginLink from '../../../components/login-link';
//Import Icons
import FeatherIcon from 'feather-icons-react';
import { PageView, initGA, Event } from '../../../common/gaUtils.js';
import { getUser } from '../../../common/config';
import auth from '../../../common/initAuth0';
const endpoint = require('../../../common/endpoint');
const uuid = require("uuid");
var passwordValidator = require('password-validator');
var validator = require('email-validator');
var Swal = require('sweetalert2');
class register extends Component {
  constructor(props) {
    super(props);
    this.schema = new passwordValidator();
    this.schema
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
    this.state = {
      activeTab: '1',
      registered: false,
      terms: false,
      email: '',
      firstname: 'Team',
      lastname: 'Member',
      invitecode: '',
      wd: '',
      wdcon: '',
      submitstatus: false,
      website: '',
      inputsstatus: false,
      loading: false
    };
    this.Toast = this.Toast.bind(this);
    this.SwalToast = this.SwalToast.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    document.body.classList = '';
    window.addEventListener('scroll', this.scrollNavigation, true);
    initGA();
    PageView();
    document.title = 'Explain Code App Registration';
    const search = this.props.location.search;
    const invitecode = new URLSearchParams(search).get("invitecode");
    this.setState({ invitecode });
  }

  // Make sure to remove the DOM listener when the component is unmounted.
  componentWillUnmount() {
    window.removeEventListener('scroll', this.scrollNavigation, true);
  }

  Toast = Swal.mixin({
    toast: true,
    position: 'center',
    showConfirmButton: false,
    timer: 6500,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer);
      toast.addEventListener('mouseleave', Swal.resumeTimer);
    },
  });

  SwalToast(title, text, icon) {
    this.Toast.fire({
      icon,
      title,
      text,
    });
  }

  handleSubmit = async (event) => {
    // Form submission logic
    event.preventDefault();
    this.setState({loading: true});

    Event('REGISTER', 'New Registration', 'NEW_REGISTRATION');

    let validated = true;

    const req = {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      email: this.state.email,
      invitecode: this.state.invitecode,
      id: uuid.v4(),
      wd: this.state.wd,
      timezone: 'EST',
      terms: this.state.terms,
      connection: process.env.REACT_APP_AUTH0_CONNECTION,
    };

    //Check terms
    if (this.state.terms === false) {
      validated = false;
      Swal.fire({
        title: 'Terms and Conditions',
        text: 'Please accept Terms and Conditions',
        icon: 'error',
        confirmButtonText: 'Ok',
      });
      this.setState({loading: false});
    }

    //Check Email
    if (validator.validate(req.email) === false) {
      validated = false;
      Swal.fire({
        title: 'Invalid Email Address!',
        text: 'Please provide a valid email address',
        icon: 'error',
        confirmButtonText: 'Ok',
      });
      this.setState({loading: false});
    }

    //Check if email exists already
    const userCheck = await endpoint.postIAM(getUser().checkUserApiUrl, {email: req.email});
    if (userCheck.data.exists === true) {
      validated = false;
      Swal.fire({
        title: 'Email already exists!',
        text: 'Please login or use forgot password to reset your password.',
        icon: 'error',
        confirmButtonText: 'Ok',
      });
      this.setState({loading: false});
    }

    //We are not checking for these values anymore

    //check first name
    if (req.firstname.length === 0) {
      validated = false;
      Swal.fire({
        title: 'Invalid First Name!',
        text: 'Please provide a First Name',
        icon: 'error',
        confirmButtonText: 'Ok',
      });
      this.setState({loading: false});
    }

    //check last name
    if (req.lastname.length === 0) {
      validated = false;
      Swal.fire({
        title: 'Invalid Last Name!',
        text: 'Please provide a Last Name',
        icon: 'error',
        confirmButtonText: 'Ok',
      });
      this.setState({loading: false});
    }

    //check passwords
    if (
      (req.wd.length === 0) |
      (this.state.wdcon.length === 0) |
      (this.schema.validate(req.wd) === false)
    ) {
      validated = false;
      Swal.fire({
        title: 'Invalid Password!',
        text: 'Please provide a password. Minimum length 8. Must have at least 1 uppercase letter. Must have at least 1 digit.',
        icon: 'error',
        confirmButtonText: 'Ok',
      });
      this.setState({loading: false});
    }

    //check passwords
    if (req.wd !== this.state.wdcon) {
      validated = false;
      Swal.fire({
        title: "Password's don't match!",
        text: 'Please confirm password',
        icon: 'error',
        confirmButtonText: 'Ok',
      });
      this.setState({loading: false});
    }

     //We are live so no need for invite code
    //check invite code name
    // if (req.invitecode === null) {
    //   validated = false;
    //   Swal.fire({
    //     title: 'No Invitation Code!',
    //     text: 'Please provide an Invite Code',
    //     icon: 'error',
    //     confirmButtonText: 'Ok',
    //   });
    // }

    // if (req.invitecode !== null && req.invitecode.length !== 36) {
    //   validated = false;
    //   Swal.fire({
    //     title: 'Invalid Invitation Code!',
    //     text: 'Please provide a valid Invite Code',
    //     icon: 'error',
    //     confirmButtonText: 'Ok',
    //   });
    // }

    //If all went well
    if (validated) {
      this.setState({ submitstatus: true });
      

      await auth.signup(req.email, req.wd, {
        firstname: req.firstname,
        lastname: req.lastname,
        id: req.id,
        invitecode: req.invitecode,
        name: `${req.firstname} ${req.lastname}`,
      });

      window._dcq.push(
        [
          "track", `New Registration`,
          { key: req.email }
        ]
      );
      
      //this.setState({loading: false});
    }
  };
  render() {
    return (
      <React.Fragment>
      <Helmet>
        <title>Explain Code App Registration</title>
        <meta name="description" content="Code Explanation Tools Registration, helping you to learn programming concepts and improve your coding skills by making it easy to understand code by breaking it down into lines and chunks. It helps you in understanding code concept and functionalities as it shows you line by line explanation of code" />
        <meta name="keywords" content="Registration, Nodejs, Go, golang, SQL, Python, liquid, code, programming code, code translator, explain code, understand code, programming, javascript, java, GPT-3, code explainer, code review, code examples, code documentation, bad code examples, software examples, example code" />
        <meta name="twitter:title" content="Explain Code App Registration" />
        <meta name="twitter:image:alt" content="Explain Code App Registration" />
        <meta property="og:title" content="Explain Code App Registration" />
        <meta property="og:description" content="Code Explanation Tools Registration, helping you to learn programming concepts and improve your coding skills by making it easy to understand code by breaking it down into lines and chunks. It helps you in understanding code concept and functionalities as it shows you line by line explanation of code" />
      </Helmet>
        <div className="back-to-home rounded d-none d-sm-block">
          <Link
            to="/"
            className="btn btn-icon btn-primary"
          >
            <i>
              <FeatherIcon icon="home" className="icons" />
            </i>
          </Link>
        </div>

        <section className="bg-home bg-circle-gradiant d-flex align-items-center">
          <div className="bg-overlay bg-overlay-white"></div>
          <Container>
            <Row className="justify-content-center">
              <Col lg={5} md={8}>
                <Card className="login-page bg-white shadow rounded border-0">
                  <CardBody>
                    <h4 className="card-title text-center">Signup</h4>
                    <AvForm className="login-form mt-4" onSubmit={this.handleSubmit}>
                      <Row>
                        <Col md={12}>
                          <div className="mb-3">
                            <Label className="form-label">
                              Your Email <span className="text-danger">*</span>
                            </Label>

                            <AvField
                              type="text"
                              className="form-control pl-5"
                              name="email"
                              id="email"
                              placeholder="Enter Email"
                              required
                              onChange={(e) =>
                                this.setState({ email: e.target.value })
                              }
                              errorMessage=""
                              validate={{
                                required: {
                                  value: true,
                                  errorMessage: 'Please enter your email',
                                },
                                pattern: {
                                  value:
                                    '^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$',
                                  errorMessage: 'E-Mail is not valid!',
                                },
                              }}
                            />
                          </div>
                        </Col>
                        <Col md={12}>
                          <div className="mb-3">
                            <Label className="form-label">
                              Password <span className="text-danger">*</span>
                            </Label>
                            <AvField
                              type="password"
                              className="form-control pl-5"
                              name="wd"
                              id="wd"
                              placeholder="Enter password"
                              required
                              onChange={(e) =>
                                this.setState({ wd: e.target.value })
                              }
                              errorMessage=""
                              validate={{
                                required: {
                                  value: true,
                                  errorMessage: 'Please enter Password',
                                },
                                minLength: {
                                  value: 6,
                                  errorMessage:
                                    'Your password must be between 6 and 16 characters',
                                },
                                maxLength: {
                                  value: 16,
                                  errorMessage:
                                    'Your password must be between 6 and 16 characters',
                                },
                              }}
                            />
                          </div>
                        </Col>
                        <Col md={12}>
                          <div className="mb-3">
                            <Label className="form-label">
                              Password <span className="text-danger">*</span>
                            </Label>
                            <AvField
                              type="password"
                              className="form-control pl-5"
                              name="confirmpassword"
                              id="confirmpassword"
                              placeholder="Confirm Password"
                              required
                              onChange={(e) =>
                                this.setState({ wdcon: e.target.value })
                              }
                              errorMessage=""
                              validate={{
                                required: {
                                  value: true,
                                  errorMessage: 'Please confirm Password',
                                },
                                minLength: {
                                  value: 6,
                                  errorMessage:
                                    'Your password must be between 6 and 16 characters',
                                },
                                maxLength: {
                                  value: 16,
                                  errorMessage:
                                    'Your password must be between 6 and 16 characters',
                                },
                              }}
                            />
                          </div>
                        </Col>
                        <Col md={12}>
                          <div className="mb-3">
                            <div className="form-check">
                              <AvGroup check>
                                <Label check>
                                  <AvInput type="checkbox" name="terms" trueValue="false"
                                    onChange={e => this.setState({ terms: e.target.value })}
                                    falseValue="true" /> I Accept <Link to="/terms-of-service" style={{ fontWeight: '500', color: '#1f3a93' }} target="_new">Terms And Conditions</Link>
                                </Label>
                              </AvGroup>
                            </div>
                          </div>
                        </Col>
                        <Col lg={12} className="mb-0">
                          <div className="d-grid">
                            <Button disabled={this.state.loading} color="primary">Register</Button>
                          </div>
                        </Col>
                        <Col xs={12} className="text-center">
                          <p className="mb-0 mt-3">
                            <small className="text-dark me-2">
                              Already have an account ?
                            </small>{' '}
                            <LoginLink />
                          </p>
                        </Col>
                      </Row>
                    </AvForm>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default register;
