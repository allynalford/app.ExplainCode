import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";


//Import Images
import bg from "../../assets/images/digital/home-bg.png";
import seo from "../../assets/images/EnglishToSql_v2.png";

class Section extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <React.Fragment>
        <section
          className="bg-half-260 d-table w-100"
          style={{ background: `url(${bg}) center center` }}
          id="home"
        >
          <Container>
            <Row className="align-items-center">
              <Col lg={6} md={6}>
                <div className="title-heading mt-4">
                  <h1 className="heading mb-3">
                  Build Your <span className="text-primary">SQL</span> Queries Faster than Ever
                  </h1>
                  <p className="para-desc text">
                  Explain Code App is the new app that allows you to specify your query in plain 
                  language and let Explain Code App generate the matching SQL code.
                  </p>
                  <div className="watch-video mt-4 pt-2">
                    <Link
                      to="/register"
                      className="btn btn-pills btn-primary mb-2 me-1"
                    >
                      Get Started
                    </Link>
                  </div>
                </div>
              </Col>
              <Col lg={6} md={6} className="mt-4 pt-2 mt-sm-0 pt-sm-0">
                <a href="#example">
                 <img src={seo} className="img-fluid" alt="English to SQL | Text to SQL Code" />
                </a>
              </Col>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default Section;
