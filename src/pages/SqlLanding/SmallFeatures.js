import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from 'reactstrap';
import { Link } from "react-router-dom";


//Import Components
//import SectionTitleLeft from "../../components/Shared/SectionTitleLeft";

//Import Images
import about from "../../assets/images/EnglishToSql_DataSet_Desc1.PNG";

class SmallFeatures extends Component {
  constructor(props) {
    super(props);
    this.state = {
      featuresSmall: [
        { title: "SELECT SQL Query" },
        { title: "UPDATE SQL Statement" },
        { title: "DELETE SQL Statement" },
      ],
      isOpen: false,
    };
    this.openModal = this.openModal.bind(this);
  }


  openModal = () => {
    this.setState((prevState) => ({
      isOpen: !prevState.isOpen,
    }));
  };

  render() {
    return (
      <React.Fragment>
        <Container className="mt-100 mt-60">
          <Row className="align-items-center">
            <Col md={6}>
            <Link id="example" to="#" onClick={this.openModal} alt="View Generated SQL">
              <img src={about} className="img" alt="Use Explain Code App to write SQL" />
             </Link>
            </Col>

            {/* <Col md={6} className="mt-4 mt-sm-0 pt-2 pt-sm-0">
              <div className="section-title">
                <SectionTitleLeft
                  title="English to SQL"
                  desc="Generate SQL from plain English with the Explain Code App. Select, Update or delete table records all from the plain English description of your SQL statement."
                  features={[]}
                  class=""
                />
                <div className="mt-4 pt-2">
                  <Link to="/register" className="btn btn-primary m-1">
                  Simplify your SQL <i className="uil uil-angle-right-b"></i>
                  </Link>
                </div>
              </div>
            </Col> */}
          </Row>
          <Modal
            isOpen={this.state.isOpen}
            role="dialog"
            autoFocus={true}
            centered={true}
            style={{maxWidth: '800px', width: '800px'}}
          >
            <ModalHeader toggle={this.openModal}>Tell us about your Dataset</ModalHeader>
            <ModalBody>
              <img src={about} alt="Provide a database schema along with a query" />
            </ModalBody>
            <ModalFooter>
              <Button color="secondary" onClick={this.openModal}>
                Close
              </Button>
            </ModalFooter>
          </Modal>
        </Container>
      </React.Fragment>
    );
  }
}

export default SmallFeatures;
