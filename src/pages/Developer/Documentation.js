import React, { Component } from "react";
import { Container, Row } from "reactstrap";
import { Link } from 'react-router-dom';
import FeatherIcon from "feather-icons-react";


export default class Documention extends Component {
  render() {
    return (
      <React.Fragment>
        <Container className="mt-100 mt-60">
          <Row className="align-items-center">
            {/* <Col lg={5} md={6} className="order-1 order-md-2">
              <img src={integration} className="img-fluid" alt="" />
            </Col> */}

            <div className="col-lg-7 col-md-6 order-2 order-md-1 mt-4 mt-sm-0 pt-2 pt-sm-0">
              <div className="section-title me-lg-5">
                <h4 className="title mb-4">
                  What Explain Code App supports
                </h4>
                <p className="text">
                We have decided to start out supporting Node JS, Python, Go, and SQL. Once we have an established a strong community around our initial languages, we will rapidly grow and support new languages for all developers. 
                </p>
                <p className="text"> If you can code using at least 1 of 3 of these languages, then you'll be able to easily build your first database driven web application in just a few minutes.</p>
                <ul className="list-unstyled text">
                  <li className="mb-0">
                    <span className="text-primary h5 me-2">
                      <i className="uil uil-check-circle align-middle"></i>
                    </span>
                    Easily explain JavaScript code
                  </li>
                  <li className="mb-0">
                    <span className="text-primary h5 me-2">
                      <i className="uil uil-check-circle align-middle"></i>
                    </span>
                    Summarize Python code
                  </li>
                  <li className="mb-0">
                    <span className="text-primary h5 me-2">
                      <i className="uil uil-check-circle align-middle"></i>
                    </span>
                    Go (Golang) code line-by-line
                  </li>
                  <li className="mb-0">
                    <span className="text-primary h5 me-2">
                      <i className="uil uil-check-circle align-middle"></i>
                    </span>
                    Review SQL (Structured Query Language) code
                  </li>
                </ul>

                <div className="mt-4">
                  {/* <a href="#emailAddress" className="btn btn-primary">
                  {config.WAITLIST_TEXT}
                  </a> */}
                      <Link to="/register" className="btn btn-primary" type="submit">
                        Join Explain Code App&nbsp;
                          <i>
                            <FeatherIcon
                              icon="user-plus"
                              className="fea icon-sm"
                              alt={'Join Explain Code App'}
                            />
                          </i>
                        </Link>
                </div>
              </div>
            </div>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}
