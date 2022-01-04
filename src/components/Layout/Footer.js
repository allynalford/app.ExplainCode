import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col} from "reactstrap";
import logoIcon from "../../assets/images/coding.png"
//Import Icons
import FeatherIcon from "feather-icons-react";

// import images
class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      grid1: [
       //    { title: "How Explaining Code Helps Developers", link: "/how-explaining-the-code-helps-developers" },
      //   { title: "About us", link: "/page-aboutus" },
      //   { title: "Services", link: "/page-services" },
      //   { title: "Team", link: "/page-team" },
      //   { title: "Pricing", link: "/page-pricing" },
      //   { title: "Project", link: "/page-work" },
      //   { title: "Careers", link: "/page-jobs" },
      //   { title: "Blog", link: "/page-blog" },
      //   { title: "Login", link: "/page-cover-login" },
      ],
      grid2: [
         {title: 'Explanation Tools', link: "/explain-code-tools"},
         { title: "History & Road Map", link: "/explain-code-history" },
         { title: "Explaining Code Helps", link: "/how-explaining-the-code-helps-developers" },
         { title: "Terms of Services", link: "/terms-of-service" },
         { title: "Contact Us", link: "/contact-us" },
        // { title: "Privacy Policy", link: "/page-privacy" },
        // { title: "Documentation", link: "/documentation" },
        // { title: "Changelog", link: "/changelog" },
        // { title: "Components", link: "/components" },
      ],
    };
  }

  render() {
    return (
      <React.Fragment>
        <footer className={this.props.isLight ? "footer bg-light" : "footer"}>
          <Container>
            <Row>
              <Col
                lg="4"
                xs="12"
                className="mb-0 mb-md-4 pb-0 pb-md-2"
                name="footercolumn"
              >
                <Link to="#" className="logo-footer" style={{color: "#0d97ff"}}>
                  <img
                    src={logoIcon}
                    height="48"
                    alt="Explain Code App"
                  />Explain Code App
                </Link>
                <p className={this.props.isLight ? "mt-4 text-muted" : "mt-4"}>
                 Use GPT-3 to understand unfamiliar code. Accelerate the rate of getting up to speed with new code.
                </p>
                <ul className={this.props.isLight ? "list-unstyled social-icon social mb-0 m t-4" : "list-unstyled social-icon foot-social-icon mb-0 mt-4"}>
                  {/* <li className="list-inline-item me-1">
                    <Link to="" className="rounded">
                      <FeatherIcon
                        icon="facebook"
                        className="fea icon-sm fea-social"
                      />
                    </Link>
                  </li> */}
                  {/* <li className="list-inline-item me-1">
                    <Link to="" className="rounded">
                      <FeatherIcon
                        icon="instagram"
                        className="fea icon-sm fea-social"
                      />
                    </Link>
                  </li> */}
                  <li className="list-inline-item me-1">
                    <a href="https://www.twitter.com/ExplainCodeApp" target={"_new"} className="rounded" title="Explain Code App Twitter">
                      <FeatherIcon
                        icon="twitter"
                        className="fea icon-sm fea-social"
                        alt="Explain Code App Twitter"
                      />
                    </a>
                  </li>
                  {/* <li className="list-inline-item me-1">
                    <a href="https://discord.gg/GxnJ4Q9A" title="Explain Code App Discord" className="rounded">
                      <FeatherIcon
                        icon="linkedin"
                        className="fea icon-sm fea-social"
                      />
                    </a>
                  </li> */}
                </ul>
              </Col>

              <Col
                lg="2"
                md="4"
                xs="12"
                className="mt-4 mt-sm-0 pt-2 pt-sm-0"
                name="footercolumn"
              >
                {this.state.grid1.length !== 0 ? <h5
                  className={
                    this.props.isLight
                      ? "text-dark footer-head"
                      : "text-light footer-head"
                  }
                >
                  Company
                </h5>: ""}
                
                <ul className="list-unstyled footer-list mt-4">
                  {this.state.grid1.map((grid, key) => (
                    <li key={key}>
                      <Link
                        to={grid.link}
                        className={
                          this.props.isLight ? "text-muted" : "text-foot"
                        }
                      >
                        <i className="mdi mdi-chevron-right me-1"></i>{" "}
                        {grid.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </Col>

              <Col
                lg="3"
                md="4"
                xs="12"
                className="mt-4 mt-sm-0 pt-2 pt-sm-0"
                name="footercolumn"
              >
                {this.state.grid2.length !== 0 ? <h3
                  className={
                    this.props.isLight
                      ? "text-dark footer-head"
                      : "text-light footer-head"
                  }
                >
                  Useful Links
                </h3>: ""}
                
                <ul className="list-unstyled footer-list mt-4">
                  {this.state.grid2.map((grid, key) => (
                    <li key={key}>
                      <Link
                        to={grid.link}
                        className={
                          this.props.isLight ? "text-muted" : "text-foot"
                        }
                      >
                        <i className="mdi mdi-chevron-right me-1"></i>
                        {grid.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </Col>

              {/* <Col
                lg="3"
                md="4"
                xs="12"
                className="mt-4 mt-sm-0 pt-2 pt-sm-0"
                name="footercolumn"
              >
                <h5
                  className={
                    this.props.isLight
                      ? "text-dark footer-head"
                      : "text-light footer-head"
                  }
                >
                  Newsletter
                </h5>
                <p className="mt-4">
                  Sign up and receive the latest tips via email.
                </p>
                <Form>
                  <Row>
                    <Col lg="12">
                      <div
                        className={
                          this.props.isLight
                            ? "foot-subscribe mb-3 foot-white"
                            : "foot-subscribe mb-3"
                        }
                      >
                        <Label
                          className={this.props.isLight ? "form-label text-muted" : "form-label"}
                        >
                          Write your email{" "}
                          <span className="text-danger">*</span>
                        </Label>
                        <div className="form-icon position-relative">
                          <FeatherIcon
                            icon="mail"
                            className="fea icon-sm icons"
                          />
                        </div>
                        <Input
                          type="email"
                          name="email"
                          id="emailsubscribe"
                          className={
                            this.props.isLight
                              ? "ps-5 rounded bg-light border"
                              : "ps-5 rounded"
                          }
                          placeholder="Your email : "
                          required
                        />
                      </div>
                    </Col>
                    <Col lg="12">
                      <div className="d-grid">
                        <Input
                          type="submit"
                          id="submitsubscribefooter"
                          name="send"
                          className="btn btn-primary"
                          readOnly
                          value="Subscribe"
                        />
                      </div>
                    </Col>
                  </Row>
                </Form>
              </Col> */}
            </Row>
          </Container>
        </footer>
        <footer className="footer footer-bar">
          <Container className="text-center">
            <Row className="align-items-center">
              <Col sm="6">
                <div className="text-sm-start">
                  <p className="mb-0">
                    Made by the Team @ Tenably Labs, Inc. {/*Develop by{" "}
                     <i className="mdi mdi-heart text-danger"></i>{" "}
                    <a
                      href="https://themesbrand.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-reset"
                    >
                      Themesbrand
                    </a>
                    . */}
                  </p>
                </div>
              </Col>

              {/* <Col sm="6" className="mt-4 mt-sm-0 pt-2 pt-sm-0">
                <ul className="list-unstyled text-sm-end mb-0">
                  <li className="list-inline-item me-1">
                    <Link to="">
                      <img
                        src={americanEx}
                        className="avatar avatar-ex-sm"
                        title="American Express"
                        alt=""
                      />
                    </Link>
                  </li>
                  <li className="list-inline-item me-1">
                    <Link to="">
                      <img
                        src={discover}
                        className="avatar avatar-ex-sm"
                        title="Discover"
                        alt=""
                      />
                    </Link>
                  </li>
                  <li className="list-inline-item me-1">
                    <Link to="">
                      <img
                        src={masterCard}
                        className="avatar avatar-ex-sm"
                        title="Master Card"
                        alt=""
                      />
                    </Link>
                  </li>
                  <li className="list-inline-item me-1">
                    <Link to="">
                      <img
                        src={paypal}
                        className="avatar avatar-ex-sm"
                        title="Paypal"
                        alt=""
                      />
                    </Link>
                  </li>
                  <li className="list-inline-item me-1">
                    <Link to="">
                      <img
                        src={visa}
                        className="avatar avatar-ex-sm"
                        title="Visa"
                        alt=""
                      />
                    </Link>
                  </li>
                </ul>
              </Col> */}
            </Row>
          </Container>
        </footer>
      </React.Fragment>
    );
  }
}

export default Footer;
