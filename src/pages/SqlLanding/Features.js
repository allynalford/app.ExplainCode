import React, { Component } from "react";
import { Container, Row, Col, Card, CardBody } from "reactstrap";
import { Link } from "react-router-dom";

//Import Icons
import FeatherIcon from "feather-icons-react";
import { Icon } from '@iconify/react';
class Features extends Component {
  render() {
    return (
      <React.Fragment>
        <Container>
          <Row>
            <Col lg={4} md={6} xs={12}>
              <Card className="border-0 text features feature-clean rounded">
                <div className="icons text-primary text-center mx-auto">
                  <Icon icon="ant-design:console-sql-outlined" width={'60px'} height={'55px'} color="black"/>
                </div>

                <CardBody className="p-0 content mt-4">
                  <h4>Describe Your SQL</h4>
                  <p className="text" style={{fontSize: '18px'}}>
                  By describing what you want to accomplish, Explain Code App gives you the SQL queries to accomplish it.
                  </p>

                  <Link to="/register" className="text-primary">
                  Prepare SQL queries with ease{" "}
                    <i>
                      <FeatherIcon
                        icon="chevron-right"
                        className="fea icon-sm"
                      />
                    </i>
                  </Link>
                </CardBody>
              </Card>
            </Col>

            <Col lg={4} md={6} xs={12} className="mt-4 mt-sm-0 pt-4 pt-sm-0">
              <Card className="border-0 text features feature-clean rounded">
                <div className="icons text-primary text-center mx-auto">
                <Icon icon="fluent:draw-text-20-filled" width={'60px'} height={'55px'} color="black"/>
                </div>

                <CardBody className="p-0 content mt-4">
                  <h4>Text-to-Code</h4>
                  <p className="text" style={{fontSize: '18px'}}>
                  Provide a database schema along with a query and Explain Code App returns SQL code you can use in your project.
                  </p>

                  <Link to="/register" className="text-primary">
                   Build a database schema{" "}
                    <i>
                      <FeatherIcon
                        icon="chevron-right"
                        className="fea icon-sm"
                      />
                    </i>
                  </Link>
                </CardBody>
              </Card>
            </Col>

            <Col lg={4} md={6} xs={12} className="mt-4 mt-lg-0 pt-4 pt-lg-0">
              <Card className="border-0 text features feature-clean rounded">
                <div className="icons text-primary text-center mx-auto">
                  <Icon icon="subway:write" width={'60px'} height={'55px'} color="black" aria-label="Multiple Types of SQL Statements"/>
                </div>

                <CardBody className="p-0 content mt-4">
                  <h4>Multiple Types</h4>
                  <p className="text" style={{fontSize: '18px'}}>
                    Explain Code App creates select statements, update statements and delete statements from plain English text. 
                  </p>

                  <Link to="#" className="text-primary">
                  Get SQL code from plain text{" "}
                    <i>
                      <FeatherIcon
                        icon="chevron-right"
                        className="fea icon-sm"
                      />
                    </i>
                  </Link>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default Features;
