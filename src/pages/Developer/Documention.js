import React, { Component } from "react";
import { Container, Row } from "reactstrap";

//import image
//import integration from '../../assets/images/integration/1.png';

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
                  What Explain Code App will support
                </h4>
                <p className="text">
                We have decided to start out supporting Node JS, Python, Go, and SQL. Once we have an established a strong community around our initial languages, we will rapidly grow and support new languages for all developers. 
                </p>
                <p className="text"> If you can code using at least 1 of these 4 languages, then you'll be able to easily build your first database driven web application in just a few minutes.</p>
                <ul className="list-unstyled text-muted">
                  <li className="mb-0">
                    <span className="text-primary h5 me-2">
                      <i className="uil uil-check-circle align-middle"></i>
                    </span>
                    NodeJS
                  </li>
                  <li className="mb-0">
                    <span className="text-primary h5 me-2">
                      <i className="uil uil-check-circle align-middle"></i>
                    </span>
                    Python
                  </li>
                  <li className="mb-0">
                    <span className="text-primary h5 me-2">
                      <i className="uil uil-check-circle align-middle"></i>
                    </span>
                    Go (Golang)
                  </li>
                  <li className="mb-0">
                    <span className="text-primary h5 me-2">
                      <i className="uil uil-check-circle align-middle"></i>
                    </span>
                    SQL (Structured Query Language)
                  </li>
                </ul>
                <div className="mt-4">
                  <a href="#emailAddress" className="btn btn-primary">
                    Join Waitlist
                  </a>
                </div>
              </div>
            </div>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}
