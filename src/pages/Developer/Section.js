import React, { Component } from "react";
import { Container, Row, Col , Button, Form, FormGroup} from "reactstrap";
import { Link } from "react-router-dom";
//Import Icons
import FeatherIcon from "feather-icons-react";
//import Images
import bgimg from "../../assets/images/digital/about.png";

export default class index extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="bg-half bg-light d-table w-100">
          <Container>
            <Row className="align-items-center">
              <Col md={6} xs={12}>
                <div className="title-heading">
                  <span className="badge rounded-pill bg-soft-primary">
                    Beta
                  </span>
                  <h1 className="fw-bold mt-2 mb-3">
                    Understand code <br /> like never before.
                  </h1>
                  <p className="para-desc text">
                  Blast through the code with easy-to-understand explanations.
                  </p>
                  <div className="subcribe-form mt-4 pt-2">
                          <Form className="ms-0">
                            <FormGroup>
                              <input
                                type="text"
                                id="course"
                                name="emailaddress"
                                className="rounded"
                                placeholder="Enter your Email Address"
                              />
                              <Button className="btn btn-primary" type="submit">
                              Join the Waitlist{" "}
                                <i>
                                  <FeatherIcon
                                    icon="user-plus"
                                    className="fea icon-sm"
                                  />
                                </i>
                              </Button>
                            </FormGroup>
                          </Form>
                        </div>
                  {/* <div className="mt-4 pt-2">
                    <Link
                      to="#"
                      className="btn btn-outline-primary"
                    >
                      Join the Waitlist
                    </Link>
                  </div> */}
                  {/* <p className="text-muted mb-0 mt-3">Current Version: v3.1</p> */}
                </div>
              </Col>

              <div className="col-md-6 mt-4 pt-2 mt-sm-0 pt-sm-0">
                <img src={bgimg} className="img-fluid d-block mx-auto" alt="Let Explain Code App teach you how to create code with ease and excitement!" />
              </div>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}
