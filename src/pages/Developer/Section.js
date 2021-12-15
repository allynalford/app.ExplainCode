import React, { Component } from "react";
import { Container, Row, Col , Button, Form, FormGroup} from "reactstrap";
//Import Icons
import FeatherIcon from "feather-icons-react";
//import Images
import bgimg from "../../assets/images/digital/about.png";
import { Event } from '../../common/gaUtils.js';
import axios from "axios";
var dateFormat = require('dateformat');
export default class index extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleSubmit(event) {
    event.preventDefault();
    const client = require('drip-nodejs')(
      {
        token: process.env.REACT_APP_DRIP,
        accountId: process.env.REACT_APP_DRIP_ID
      }
    );

    const payload = {
      subscribers: [{
        email: this.state.email,
        custom_fields: {
          waitlist: "true",
          waitlist_date_time: dateFormat(new Date(), "isoUtcDateTime")
        }
      }]
    };
    
    client.createUpdateSubscriber(payload)
      .then((response) => {
        // Handle `response.body`
      })
      .catch((error) => {
        // Handle errors
      });
 
}


  async updateSlackChannel() {

   
    Event("Waitlist", "New Waitlist User", this.state.email)

    //process.env.REACT_APP_SLACK_CONTACTUS_WEBHOOK
    let res = await axios.post(process.env.REACT_APP_SLACK_CONTACTUS_WEBHOOK, JSON.stringify({
        "text": `Name: ${this.state.name} \n Email Address: ${this.state.email}`,
    }), {
        withCredentials: false,
        transformRequest: [(data, headers) => {
            delete headers.post["Content-Type"]
            return data
        }]
    })

    if (res.status === 200) {
        //clear state so text boxes clear
        this.setState({ name: '', email: '', subject: '', comments: '', update: true })
    } else {
        alert("There was an error.  Please try again later.")
    }
}


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
