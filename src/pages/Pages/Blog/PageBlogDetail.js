// React Basic and Bootstrap
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Alert, Form, FormGroup, Label, Button, Input, Card, CardBody} from 'reactstrap';
import Helmet from "react-helmet";
import _ from 'lodash';
//Import components
import "react-notion/src/styles.css";
import "prismjs/themes/prism-tomorrow.css"; // only needed for code highlighting
import { NotionRenderer } from "react-notion";
import { initGA, PageView} from '../../../common/gaUtils.js';
import FormLoader from "../../../components/FormLoader";
//Import components
import PageBreadcrumb from "../../../components/Shared/PageBreadcrumb";
import PageSearchSidebar from "../../../components/Shared/PageSearchSidebar";

import blog01 from '../../../assets/images/blog/01.jpg';
import blog07 from '../../../assets/images/blog/07.jpg';
import blog08 from '../../../assets/images/blog/08.jpg';

var endpoint = require('../../../common/endpoint');

class PageBlogDetail extends Component {

    constructor(props, {match}) {
        super(props);
        const params = {id: window.location.pathname.split("/")[3]};
        this.state = {
            blockMap : [],
            loading: true,
            pageId: params.id,
            title: "",
            description: "",
            keyword: "",
            tags: "",
            pathItems : [
                //id must required
                { id : 1, name : "Tenably", link : "/" },
                { id : 2, name : "Blog", link : "/blog" },
                { id : 3, name : "Page", link : `/blog/page/${params.id}` }
            ],
            successMsg : false
        }
        this.handleSubmit = this.handleSubmit.bind(this);

        function checkIfValidUUID(str) {
            // Regular expression to check if string is a valid UUID
            const regexExp = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/gi;
          
            return regexExp.test(str);
          }

        const loadBlog = async(event) => {
            //Check if pageId is a GUID or SLUG
            let id = this.state.pageId;

            //Check
            if(checkIfValidUUID(this.state.pageId) === false){
                //Look up the id from the API if pageId is a SLUG
                const tableResp = await endpoint._getExternal(`${process.env.REACT_APP_NOTION_API}/table/${process.env.REACT_APP_NOTION_TABLE_ID}`);
                //Grab the id from the array
                id = _.find(tableResp.data, ['URL', this.state.pageId]).id;
            }

            //Call the API to get the page data
            const resp = await endpoint._getExternal(`${process.env.REACT_APP_NOTION_API}/page/${id}`);

            //Check if we found a blog post
            if(typeof resp.data !== "undefined"){
                this.state.blockMap = resp.data;
                this.state.keywords = (typeof resp.data[id].value.properties["@LCc"] !== "undefined" ? resp.data[id].value.properties["@LCc"][0].toString() : "");
                this.state.loading = false;
                this.state.description = (typeof resp.data[id].value.properties["idY\\"] !== "undefined" ? resp.data[id].value.properties["idY\\"][0][0].toString() : "");
                this.state.title = resp.data[id].value.properties["title"][0].toString();
                this.state.tags = (typeof resp.data[id].value.properties["NsLy"] !== "undefined" ? resp.data[id].value.properties["NsLy"].toString().split(',') : []);
                //Force an update since we are updating the state directly
                this.forceUpdate();
                //this.setState({blockMap: resp.data, keyword: resp.data[this.state.pageId].value.properties["@LCc"][0].toString() , loading: false});
            }else{
                //send them back to the list of blog post
            }
        }

        loadBlog();
    }

    handleSubmit(event) {
        event.preventDefault();
        this.setState({successMsg : true});
    }

    componentDidMount() {
        document.body.classList = "";
        initGA();
        PageView();
        document.title = "Tenably - Web Accessibility Blog";
        window.addEventListener("scroll", this.scrollNavigation, true);


    }

     // Make sure to remove the DOM listener when the component is unmounted.
     componentWillUnmount() {
        window.removeEventListener("scroll",this.scrollNavigation, true);
     }

     shouldComponentUpdate(nextProps, nextState) {
        //console.log('DomainViewControls shouldComponentUpdate lifecycle');
        if(nextState.blockMap !== this.state.blockMap){
          return true;
        }else if(nextState.keywords !== this.state.keywords){
            return true;
          }else{
            return false;
        };
      };
    scrollNavigation = () => {
        var doc = document.documentElement;
        var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
        if (top > 80) {
            document.getElementById('topnav').classList.add('nav-sticky');
        }
        else {
            document.getElementById('topnav').classList.remove('nav-sticky');
        }
    }

    render() {
        function renderHeaderFragment(state) {
            return (
              <React.Fragment>
                <Helmet>
                <meta property="og:url" content="https://www.tenably.app/blog" />
                <meta property="og:title" content={this.state.title} />
                  <meta
                    name="description"
                    content={this.state.description}
                  />
                 
                
                  <meta
                    property="og:description"
                    content={this.state.description}
                  />
                    <meta name="keywords" 
                    content={state.keywords} />
       
                </Helmet>
              </React.Fragment>
            );
          }
        return (
          <React.Fragment>
              <Helmet>
                <meta property="og:url" content={`https://www.tenably.app/blog/${this.state.pageId}`} />
                <meta property="og:title" content={this.state.title} />
                  <meta
                    name="description"
                    content={this.state.description}
                  />
                  <meta
                    property="og:description"
                    content={this.state.description}
                  />
                    <meta name="keywords" 
                    content={this.state.keywords} />
       
                </Helmet>
            {/* breadcrumb */}
            <PageBreadcrumb pathItems={this.state.pathItems}>
              <h1> {this.state.title} </h1>
              {/* <ul className="list-unstyled mt-4">
                <li className="list-inline-item h6 user text-muted mr-2">
                  <i className="mdi mdi-account"></i> Calvin Carlo
                </li>
                <li className="list-inline-item h6 date text-muted">
                  <i className="mdi mdi-calendar-check"></i> 13th August, 2019
                </li>
              </ul> */}
            </PageBreadcrumb>
            <div className="position-relative">
              <div className="shape overflow-hidden text-white">
                <svg
                  viewBox="0 0 2880 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
            </div>
            {this.state.loading === true ? (
              <section className="section">
                <Container>
                  <Row className="justify-content-center">
                    <Col lg={12} xs={12}>
                      <FormLoader />
                    </Col>
                  </Row>
                </Container>
              </section>
            ) : (
            <section className="section">
              <Container>
                <Row>
                  <Col lg="8" md="6">
                    <Card className="blog blog-detail border-0 shadow rounded">
                      <CardBody className="content">
                        <div style={{ maxWidth: 768 }}>
                          <NotionRenderer blockMap={this.state.blockMap} />
                        </div>
                      </CardBody>
                    </Card>

                    {/* <Card className="shadow rounded border-0 mt-4">
                      <CardBody>
                        <h5 className="card-title mb-0">Leave A Comment :</h5>
                        <Alert
                          color="primary"
                          isOpen={this.state.successMsg}
                          toggle={() => {
                            this.setState({
                              successMsg: !this.state.successMsg,
                            });
                          }}
                        >
                          Data sended successfully.
                        </Alert>
                        <Form onSubmit={this.handleSubmit} className="mt-3">
                          <Row>
                            <Col md="12">
                              <FormGroup className="position-relative">
                                <Label>Your Comment</Label>
                                <textarea
                                  id="message"
                                  placeholder="Your Comment"
                                  rows="5"
                                  name="message"
                                  className="form-control pl-5"
                                  required
                                ></textarea>
                              </FormGroup>
                            </Col>

                            <Col md="6">
                              <FormGroup className="position-relative">
                                <Label>
                                  Name <span className="text-danger">*</span>
                                </Label>
                                <Input
                                  id="name"
                                  name="name"
                                  type="text"
                                  placeholder="Name"
                                  className="form-control pl-5"
                                  required
                                />
                              </FormGroup>
                            </Col>

                            <Col md="6">
                              <FormGroup className="position-relative">
                                <Label>
                                  Your Email{" "}
                                  <span className="text-danger">*</span>
                                </Label>
                                <Input
                                  id="email"
                                  type="email"
                                  placeholder="Email"
                                  name="email"
                                  className="form-control pl-5"
                                  required
                                />
                              </FormGroup>
                            </Col>

                            <Col md="12">
                              <div className="send">
                                <Button
                                  type="submit"
                                  className="btn btn-primary w-100"
                                >
                                  Send Message
                                </Button>
                              </div>
                            </Col>
                          </Row>
                        </Form>
                      </CardBody>
                    </Card> */}
                  </Col>

                  {/* sidebar */}
                  <Col
                    lg={4}
                    xs={12}
                    md={6}
                    className="mt-4 mt-sm-0 pt-2 pt-sm-0"
                  >
                    <PageSearchSidebar
                      tags={this.state.tags}
                      blog01={blog01}
                      blog07={blog07}
                      blog08={blog08}
                    />
                  </Col>
                </Row>
              </Container>
            </section>)}
          </React.Fragment>
        );
    }
}
export default PageBlogDetail;
