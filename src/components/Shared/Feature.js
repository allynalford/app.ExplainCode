// React Basic and Bootstrap
import React, { Component } from "react";
import { Row, Col } from "reactstrap";

class Feature extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <Row>
          {this.props.featureArray.map((feat, i) => {
            return (
              <Col md={4} xs={12} key={i} name="featurebox">
                <div
                  className={
                    this.props.isCenter
                      ? "features text-center"
                      : "features mt-5"
                  }
                >
                  <div className="image position-relative d-inline-block">
                      {(typeof feat.dataicon !== "undefined" ? <span class="iconify" data-icon={feat.dataicon} data-width="48" data-height="48"></span> : <i className={feat.icon} ></i>)}
                    
                  </div>
                  <div className="content mt-4">
                    <h3>{feat.title}</h3>
                    <p className="text mb-0">{feat.description}</p>
                  </div>
                </div>
              </Col>
            );
          })}
        </Row>
      </React.Fragment>
    );
  }
}

export default Feature;
