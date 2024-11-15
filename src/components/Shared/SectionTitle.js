import React, { Component } from "react";
import { Row, Col } from "reactstrap";

class SectionTitle extends Component {
  render() {
    return (
      <React.Fragment>
        <Row className="justify-content-center">
          <Col xs="12" className={this.props.isLeft ? "" : "text-center"}>
            <div className="section-title mb-4 pb-2" name="maintitle">
              <h2 className="title mb-4" name="sectiontitle">
                {" "}
                {this.props.title}{" "}
              </h2>
              <p
                className={
                  this.props.isLeft
                    ? "text para-desc mb-0"
                    : "text para-desc mx-auto mb-0"
                }
                name="sectiondesc"
              >
                
                {this.props.desc}
              </p>
            </div>
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default SectionTitle;
