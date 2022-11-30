import React, { Component } from "react";
import { Container, Row, Col , InputGroupAddon, Input, InputGroup} from "reactstrap";
import { Link } from 'react-router-dom';
//Import Icons
import FeatherIcon from "feather-icons-react";
//import Images
//import bgimg from "../../assets/images/digital/about.png";
import bgimg from "../../assets/images/undraw/undraw_dev_productivity_umsq.png";
import { Event,  initGA, PageView} from '../../common/gaUtils.js';
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
      inputsstatus: false,
      refby: undefined,
      alertOpen: false,
      alertColor: 'success',
      alertMessage: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateSlackChannel = this.updateSlackChannel.bind(this);
    this.Toast = this.Toast.bind(this);
    this.SwalToast = this.SwalToast.bind(this);
    this.toggleAlert = this.toggleAlert.bind(this);
  };

  componentDidMount() {

    const search = window.location.search;
    const refby = new URLSearchParams(search).get("ref");
    this.setState({ refby });
    initGA();
    PageView();
  }

  // Make sure to remove the DOM listener when the component is unmounted.
  componentWillUnmount() {
    
  }

  Toast = Swal.mixin({
    toast: true,
    position: 'center',
    showConfirmButton: false,
    timer: 6500,
    timerProgressBar: true,
    didOpen: (toast) => {
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


  toggleAlert(){
    this.setState({alertOpen: !this.state.alertOpen});
  }

  async handleSubmit(event) {
    event.preventDefault();
    this.setState({inputsstatus: true});
    var validator = require("email-validator");
    var emailValid = validator.validate(this.state.email); 

    if(emailValid !== true){
      console.log("Invalid Email Address");
      //this.SwalToast("Error","Invalid Email Address", 'error');
      this.setState({inputsstatus: false, alertMessage: "Invalid Email Address", alertOpen: true, alertColor: 'warning'});
      

      
    }else{
        try {
          const check = await endpoint.postIAM(
            config.getDrip().getSubscriberApiUrl,
            { email: this.state.email },
          );
          if (check.data.exists === false) {
            const addUser = await endpoint.postIAM(
              config.getDrip().addSubscriberApiUrl,
              { email: this.state.email, refby: this.state.refby },
            );

           
            if (addUser.data.success === true) {
              Event('Waitlist', 'New Waitlist User Drip', 'drip added');
              // this.SwalToast(
              //   "You've Joined",
              //   'Thank You for Joining Early Access',
              //   'info',
              // );
              
              await this.updateSlackChannel();
              window._dcq = window._dcq || [];
              window._dcq.push(['track', 'Waitlist Signup', { }]);
              this.setState({ inputsstatus: false,  alertMessage: "You've Joined, Thank You for Joining Early Access", alertOpen: true, alertColor: 'success'});
            } else {
              //this.SwalToast('Error', "error adding user", 'error');
              this.setState({inputsstatus: false, alertMessage: "Error: could not join beta access", alertOpen: true, alertColor: 'danger'});
            }

          } else {
            //this.SwalToast('Error', 'User already Exists', 'error');
            this.setState({inputsstatus: false, alertMessage: "User already Exists", alertOpen: true, alertColor: 'warning'});
            //this.setState({inputsstatus: false});
          }
        } catch (e) {
          console.error('Add User', e);
          this.setState({inputsstatus: false, alertMessage: e.message, alertOpen: true, alertColor: 'danger'});
        }
      
    }
}


  async updateSlackChannel() {

   
    Event("Waitlist", "New Waitlist User Slack", "Slack Channel")

    //process.env.REACT_APP_SLACK_CONTACTUS_WEBHOOK
    let res = await axios.post(process.env.REACT_APP_SLACK_WAITLIST_WEBHOOK, JSON.stringify({
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
                  Blast through code with easy-to-understand code explanations, code summarization, class breakdowns and more.
                  </p>
                  <div className="subcribe-form mt-4 pt-2">
                  <h3 className="fw-bold mt-2 mb-3">
                    Start your 3 Day free trial.
                  </h3>
                    <InputGroup>
                      
                      <InputGroupAddon addonType="append">
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
                      </InputGroupAddon>
                    </InputGroup>
                    <p className="para-desc text">
                      * No Credit Card Required to get started.
                     </p>
                     <div>
                     <a href="https://www.producthunt.com/posts/explain-code-app?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-explain&#0045;code&#0045;app" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=369229&theme=light" alt="Explain&#0032;Code&#0032;App - Make&#0032;any&#0032;code&#0032;easy&#0032;to&#0032;understand&#0044;&#0032;instantly&#0046; | Product Hunt" style={{width: "250px", height: "54px"}} width="250" height="54" /></a>
                     </div>
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
