import React, { Component } from "react";
import { Card, CardBody, Col, Container, Row } from "reactstrap";
import { Link } from 'react-router-dom';
import FeatherIcon from "feather-icons-react";
export default class KeyFeatures extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyfeatures: [
        {
          id: 1,
          icon: "uil uil-line-spacing d-block rounded h3 mb-0",
          hoverIcon: "uil uil-line-spacing text-primary full-img",
          title: "Explained Line By Line",
          text: "Learn to code by breaking it down into lines and chunks. Explain Code gives you line by line explanation of code. It helps you in learning programming concepts and improves your coding skills."
        },
        {
          id: 2,
          icon: "uil uil-document-layout-left d-block rounded h3 mb-0",
          hoverIcon: "uil uil-document-layout-left text-primary full-img",
          title: "Code Summarization",
          text: "Reduce the time to understand code by summarizing it into one containing code and description. Now you don't need to read long code to understand it."
        },
        {
          id: 3,
          icon: "uil uil-code-branch d-block rounded h3 mb-0",
          hoverIcon: "uil uil-code-branch text-primary full-img",
          title: "Class Breakdown",
          text: "Understanding the purpose of a class can be difficult. But not anymore, Break down classes to help you gain an in depth knowledge of what the class is intended to do, what they call and more."
        },
        {
          id: 4,
          icon: "uil  uil-comment-question d-block rounded h3 mb-0",
          hoverIcon: "uil  uil-comment-question text-primary full-img",
          title: "Open Questions",
          text: "Don’t know what a block of code does? Paste your code into the editor and ask an open question about it. It’s that simple!. The built in AI understands code like never before."
        },
      ],
    };
  }
  render() {
    return (
      <React.Fragment>
        <Container>
          <Row>
            <Col xs={12}>
              <div className="section-title mb-4 pb-2">
                <h4 className="title mb-4">First Release Features</h4>
                <p className="para-desc text mb-0">
                Explain Code makes code easy to understand. With Explain Code, you can quickly save time on code that's difficult to digest. We empower developers to go from I don't understand the code to this is how it works in under five minutes!</p>
              </div>
            </Col>
          </Row>
          <Row className=" align-items-center">
            {this.state.keyfeatures.map((keyfeatures, key) => (
              <Col lg={3} md={6} className="mt-4 pt-2" key={key}>
                <Card className="border-0 features feature-clean course-feature p-4 overflow-hidden shadow">
                  <div className="icons text-primary text-center">
                    <i className={keyfeatures.icon}></i>
                  </div>
                  <CardBody className="p-0 mt-4">
                    <Link to="/explain-code-tools" alt={keyfeatures.title} className="title h5 text-dark">
                      {keyfeatures.title}
                    </Link>
                    <p className="text mt-2">
                    {keyfeatures.text}
                  </p>
                    {/* <a href="#emailAddress" className="text-primary read-more">
                    {config.WAITLIST_TEXT + " "} <i className="mdi mdi-chevron-right"></i>
                    </a> */}
                    <i className={keyfeatures.hoverIcon}></i>
                  </CardBody>
                </Card>
              </Col>
            ))}
          </Row>
          <div style={{marginTop: '10px'}}>
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
        </Container>
      </React.Fragment>
    );
  }
}
