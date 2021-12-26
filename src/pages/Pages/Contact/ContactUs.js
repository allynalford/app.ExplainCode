// React Basic and Bootstrap
import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Alert,
  Form,
  Input,
  Label,
  Card,
  CardBody,
} from "reactstrap";
import { Helmet } from "react-helmet";
//Import Icons
import FeatherIcon from "feather-icons-react";
const slack = require('../../../common/slack');

class ContactUs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Contactvisible: false,
      name: '',
      email: '',
      subject: '',
      message: '',
      successMsg: '',
      successMsgColor: 'success'
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.sendMail.bind(this);
    this.callNumber.bind(this);
  }

  async handleSubmit(event) {
    event.preventDefault();
    this.setState({ Contactvisible: false });

    if(this.state.email !== ""){
      const {email, name, subject, message} = this.state;
      const send = await slack.contactUs(email, name, subject, message);
      console.log(send);
      if(send.success === true){
        this.setState({Contactvisible: true, successMsg: 'Message sent Successfully.', successMsgColor: 'success'});
      }else{
        this.setState({Contactvisible: true, successMsg: 'Error: Message not sent.', successMsgColor: 'danger'});
      }
    }
  }

  componentDidMount() {
    document.getElementById("topnav").classList.add("bg-white");
    window.addEventListener("scroll", this.scrollNavigation, true);
  }
  // Make sure to remove the DOM listener when the component is unmounted.
  componentWillUnmount() {
    window.removeEventListener("scroll", this.scrollNavigation, true);
  }

  scrollNavigation = () => {
    var doc = document.documentElement;
    var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    if (top > 80) {
      document.getElementById("topnav").classList.add("nav-sticky");
    } else {
      document.getElementById("topnav").classList.remove("nav-sticky");
    }
  };

  sendMail() {
    window.location.href = "mailto:ExplainCodeApp@TenablyLabs.com";
  }

  callNumber() {
    window.location.href = "tel:+17862245007";
  }

  render() {
    return (
      <React.Fragment>
        <Helmet>
        <title>Contact Explain Code App</title>
        <meta
          name="description"
          content={"Contact Explain Code App Team at Tenably Labs"}
        />
        <meta
          name="keywords"
          content="contact, us, contact us, Nodejs, Go, golang, SQL, Python, liquid, code, programming code, code translator, explain code, understand code, programming, javascript, java, GPT-3, code explainer, code review, code examples, code documentation, bad code examples, software examples, example code"
        />
        <meta name="twitter:title" content="Contact Explain Code App" />
        <meta name="twitter:image:alt" content="CContact Explain Code App Team at Tenably Labs" />
        <meta property="og:title" content="Contact Explain Code App" />
        <meta property="og:description" content="Contact Explain Code App Team at Tenably Labs" />
      </Helmet>
        <section className="section pt-5 mt-4">
          <Container className="mt-100 mt-60">
            <Row className="align-items-center">
              <Col
                lg={5}
                md={{ size: 6, order: 1 }}
                xs={{ order: 2 }}
                className="mt-4 mt-sm-0 pt-2 pt-sm-0"
              >
                <Card className="custom-form rounded shadow border-0">
                  <CardBody>
                    <div id="message"></div>
                    <Alert
                      color={this.state.successMsgColor}
                      isOpen={this.state.Contactvisible}
                      toggle={() => {
                        this.setState({
                          Contactvisible: !this.state.Contactvisible,
                        });
                      }}
                    >
                      {this.state.successMsg}
                    </Alert>
                    <Form
                      method="post"
                      onSubmit={this.handleSubmit}
                      name="contact-form"
                      id="contact-form"
                    >
                      <Row>
                        <Col lg={6}>
                          <div className="mb-3">
                            <Label for="name" className="form-label">
                              Your Name <span className="text-danger">*</span>
                            </Label>
                            <div className="form-icon position-relative">
                              <i>
                                <FeatherIcon
                                  icon="user"
                                  className="fea icon-sm icons"
                                />
                              </i>
                            </div>
                            <Input
                              aria-label="Enter your name"
                              name="name"
                              id="name"
                              type="text"
                              className="form-control ps-5"
                              placeholder="First Name :"
                              onChange={ e => {
                                this.setState({name: e.target.value})
                              }}
                              required
                            />
                          </div>
                        </Col>
                        <Col lg={6}>
                          <div className="mb-3">
                            <Label for="email" className="form-label">
                              Your Email <span className="text-danger">*</span>
                            </Label>
                            <div className="form-icon position-relative">
                              <i>
                                <FeatherIcon
                                  icon="mail"
                                  className="fea icon-sm icons"
                                />
                              </i>
                            </div>
                            <Input
                              aria-label="Enter your email address"
                              name="email"
                              id="email"
                              type="email"
                              className="form-control ps-5"
                              placeholder="Your email :"
                              onChange={ e => {
                                this.setState({email: e.target.value})
                              }}
                              required
                            />
                          </div>
                        </Col>
                        <Col md={12}>
                          <div className="mb-3">
                            <Label for="subject" className="form-label">Subject</Label>
                            <div className="form-icon position-relative">
                              <i>
                                <FeatherIcon
                                  icon="book"
                                  className="fea icon-sm icons"
                                />
                              </i>
                            </div>
                            <Input
                              aria-label="Enter subject of your message"
                              name="subject"
                              id="subject"
                              className="form-control ps-5"
                              placeholder="Your subject :"
                              onChange={ e => {
                                this.setState({subject: e.target.value})
                              }}
                              required
                            />
                          </div>
                        </Col>
                        <Col lg={12}>
                          <div className="mb-3">
                            <Label for="comments" className="form-label">Message</Label>
                            <div className="form-icon position-relative">
                              <i>
                                <FeatherIcon
                                  icon="message-circle"
                                  className="fea icon-sm icons"
                                />
                              </i>
                            </div>
                            <textarea
                              aria-label="Enter message for Explain Code App Team"
                              name="comments"
                              id="comments"
                              rows="4"
                              className="form-control ps-5"
                              placeholder="Your Message :"
                              onChange={ e => {
                                this.setState({message: e.target.value})
                              }}
                            ></textarea>
                          </div>
                        </Col>
                      </Row>
                      <Row>
                        <Col sm="12" className="text-center">
                          <div className="d-grid">
                            <input
                              type="submit"
                              id="submit"
                              name="send"
                              className="submitBnt btn btn-primary btn-block"
                              value="Send Message"
                              aria-label="Send Message to Explain Code App Team"
                            />
                          </div>
                          <div id="simple-msg"></div>
                        </Col>
                      </Row>
                    </Form>
                  </CardBody>
                </Card>
              </Col>

              <Col lg={7} md={{ size: 6, order: 2 }} xs={{ order: 1 }}>
                <div className="title-heading ms-lg-4">
                  <h1 className="mb-4">Contact Details</h1>
                  {/* <p className="text-muted">
                    Start working with{" "}
                    <span className="text-primary fw-bold">
                      Landrick
                    </span>{" "}
                    that can provide everything you need to generate awareness,
                    drive traffic, connect.
                  </p> */}
                  <div className="d-flex contact-detail align-items-center mt-3">
                    <div className="icon">
                      <i>
                        <FeatherIcon
                          icon="mail"
                          className="fea icon-m-md text-dark me-3"
                        />
                      </i>
                    </div>
                    <div className="flex-1 content">
                      <h2 className="title fw-bold mb-0">Email</h2>
                      <Link
                        to="#"
                        onClick={this.sendMail}
                        className="text-primary "
                      >
                        ExplainCodeApp@tenablylabs.com
                      </Link>
                    </div>
                  </div>
                  <div className="d-flex contact-detail align-items-center mt-3">
                    <div className="icon">
                      <i>
                        <FeatherIcon
                          icon="twitter"
                          className="fea icon-m-md text-dark me-3"
                        />
                      </i>
                    </div>
                    <div className="flex-1 content">
                      <h2 className="title fw-bold mb-0">Twitter</h2>
                      <a
                        target="_new"
                        href="https://www.twitter.com/explaincodeapp"
                        onClick={this.sendMail}
                        className="text-primary"
                      >
                        @ExplainCodeApp
                      </a>
                    </div>
                  </div>

                  <div className="d-flex contact-detail align-items-center mt-3">
                    <div className="icon">
                      <i>
                        <FeatherIcon
                          icon="phone"
                          className="fea icon-m-md text-dark me-3"
                        />
                      </i>
                    </div>
                    <div className="flex-1 content">
                      <h2 className="title fw-bold mb-0">Phone</h2>
                      <Link
                        to="#"
                        onClick={this.callNumber}
                        className="text-primary "
                      >
                        +1 786-224-5007
                      </Link>
                    </div>
                  </div>

                  {/* <div className="d-flex contact-detail align-items-center mt-3">
                    <div className="icon">
                      <i>
                        <FeatherIcon
                          icon="map-pin"
                          className="fea icon-m-md text-dark me-3"
                        />
                      </i>
                    </div>
                    <div className="flex-1 content">
                      <h6 className="title fw-bold mb-0">Location</h6>
                      <Link to="#" className="video-play-icon  text-primary">
                        View on Google map
                      </Link>
                    </div>
                  </div> */}
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default ContactUs;