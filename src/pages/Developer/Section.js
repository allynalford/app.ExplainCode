import React, { Component } from "react";
import { Container, Row, Col , Button, InputGroupAddon, Input, InputGroup} from "reactstrap";
//Import Icons
import FeatherIcon from "feather-icons-react";
//import Images
import bgimg from "../../assets/images/digital/about.png";
import { Event } from '../../common/gaUtils.js';
import axios from "axios";
const requestPromise = require('request-promise');
const endpoint = require("../../common/endpoint.js");
const config = require("../../common/config.js");
var Swal = require("sweetalert2");
export default class index extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      inputsstatus: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateSlackChannel = this.updateSlackChannel.bind(this);
    this.Toast = this.Toast.bind(this);
    this.SwalToast = this.SwalToast.bind(this);
  }

  Toast = Swal.mixin({
    toast: true,
    position: 'center',
    showConfirmButton: false,
    timer: 6500,
    timerProgressBar: true,
    onOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
});

      SwalToast(title, text, icon) {
        this.Toast.fire({
          icon,
          title,
          text
        });
      };


  request(requestOptions, callback) {
    if (callback) {
      return requestPromise(requestOptions).then((response) => {
        const { body } = response;
        callback(null, response, body);
      }).catch((error) => {
        callback(error, null, null);
      });
    }
    return requestPromise(requestOptions);
  }
  async handleSubmit(event) {
    event.preventDefault();
    this.setState({inputsstatus: true});
    var validator = require("email-validator");
    var emailValid = validator.validate(this.state.email); 

    if(emailValid !== true){
      console.log("Invalid Email Address");
      this.SwalToast("Error","Invalid Email Address", 'error');
      this.setState({inputsstatus: false});
    }else{
      try{
        console.log("NODE_ENV", process.env.NODE_ENV);
        const addUser = await endpoint._post(config.getDrip().addSubscriberApiUrl, {email: this.state.email});
        console.log("Add User", addUser);
        this.SwalToast("You've Joined","Thank You for Joining", 'info');
      }catch(e){
        console.error("Add User", e);
      }
     
      Event("Waitlist", "New Waitlist User", this.state.email);

      if (process.env.REACT_APP_STAGE === 'production') {
        this.updateSlackChannel();
      };

      
      this.setState({inputsstatus: false});
    }
}


  async updateSlackChannel() {

   
    Event("Waitlist", "New Waitlist User", this.state.email)

    //process.env.REACT_APP_SLACK_CONTACTUS_WEBHOOK
    let res = await axios.post(process.env.REACT_APP_SLACK_CONTACTUS_WEBHOOK, JSON.stringify({
        "text": `Email Address: ${this.state.email}`,
    }), {
        withCredentials: false,
        transformRequest: [(data, headers) => {
            delete headers.post["Content-Type"]
            return data
        }]
    })

    if (res.status === 200) {
        //clear state so text boxes clear
        this.setState({ email: ''});
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
                  Blast through code with easy-to-understand explanations.
                  </p>
                  <div className="subcribe-form mt-4 pt-2">
                    <InputGroup>
                      <Input
                        aria-label="Email Address to join waitlist"
                        type="email"
                        name="emailAddress"
                        id="emailAddress"
                        onChange={e => this.setState({ email: e.target.value })}
                        value={this.state.email}
                        disabled={this.state.inputsstatus}
                        placeholder="Enter your Email Address"
                        requiredtxt="A Valid Email Address is required"
                        required
                      />
                      <InputGroupAddon addonType="append">
                        <Button disabled={this.state.inputsstatus} onClick={this.handleSubmit} className="btn btn-primary" type="submit">
                          Join the Waitlist{" "}
                          <i>
                            <FeatherIcon
                              icon="user-plus"
                              className="fea icon-sm"
                              alt="Join Waitlist"
                            />
                          </i>
                        </Button>
                      </InputGroupAddon>
                    </InputGroup>
                          {/* <Form className="ms-0">
                            <FormGroup>
                              <Input
                                type="text"
                                id="course"
                                name="emailaddress"
                                onChange={ e => this.setState({email: e.target.value})}
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
                          </Form> */}
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
