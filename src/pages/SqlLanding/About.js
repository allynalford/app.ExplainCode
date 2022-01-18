import React, { Component } from 'react';
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
import { Link } from 'react-router-dom';

//Import Icons
import FeatherIcon from 'feather-icons-react';

//Import Images
import app from '../../assets/images/EnglishToSql_generated.png';

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
    };
    this.togglemodal.bind(this);
  }

  togglemodal = () => {
    this.setState((prevState) => ({
      modal: !prevState.modal,
    }));
  };
  render() {
    return (
      <React.Fragment>
        <Container className="mt-100 mt-60">
          <Row className="align-items-center">
            <Col
              lg={6}
              md={{ size: 6, order: 1 }}
              xs={{ size: 12, order: 2 }}
              className="mt-4 mt-sm-0 pt-2 pt-sm-0"
            >
              <Link to="#" onClick={this.togglemodal} alt="View Generated SQL">
                <img src={app} className="img-fluid" alt="Simplify your SQL" />
              </Link>
              
            </Col>

            <Col lg={6} md={{ size: 6, order: 2 }} xs={{ size: 12, order: 2 }}>
              <div className="section-title">
                <h3 className="title mb-4">English to SQL</h3>
                <p className="text" style={{fontSize: '18px'}}>
                  Generate SQL from plain English with the Explain Code App.
                  Select, Update or delete table records all from the plain
                  English description of your SQL statement.
                </p>
                <Link to="/register" className="btn btn-primary">
                  Simplify your SQL{' '}
                  <i>
                    <FeatherIcon icon="arrow-right" className="fea icon-sm" />
                  </i>
                </Link>
              </div>
            </Col>
          </Row>
          <Modal
            isOpen={this.state.modal}
            role="dialog"
            autoFocus={true}
            centered={true}
            style={{maxWidth: '900px', width: '880px'}}
          >
            <ModalHeader toggle={this.togglemodal}>Generate SQL</ModalHeader>
            <ModalBody>
              <img src={app} alt="Simplify your SQL" />
            </ModalBody>
            <ModalFooter>
              <Button color="secondary" onClick={this.togglemodal}>
                Close
              </Button>
            </ModalFooter>
          </Modal>
        </Container>
      </React.Fragment>
    );
  }
}

export default About;
