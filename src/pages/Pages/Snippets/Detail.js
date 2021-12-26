// React Basic and Bootstrap
import React, { useEffect, useState } from 'react';
import { Link, useParams } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Alert,
  Button,
  Card,
  CardBody,
} from "reactstrap";
import { useAuth0 } from '@auth0/auth0-react';
import copy from 'copy-to-clipboard';
import Ionicon from 'react-ionicons';
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-golang";
import "ace-builds/src-noconflict/mode-mysql";
import "ace-builds/src-noconflict/mode-markdown";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/theme-terminal";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/theme-tomorrow";
import "ace-builds/src-noconflict/theme-kuroir";
import "ace-builds/src-noconflict/theme-solarized_dark";
import "ace-builds/src-noconflict/theme-solarized_light";
//import MainSideBar from '../../../components/Layout/sidebar';
import { getSnippets } from '../../../common/config';
//Import Icons

//Import components
import PageBreadcrumb from "../../../components/Shared/PageBreadcrumb";
import PageSearchSidebar from "../../../components/Shared/PageSearchSidebar";

// import images
import blog01 from "../../../assets/images/blog/01.jpg";
import blog03 from "../../../assets/images/blog/03.jpg";
import blog04 from "../../../assets/images/blog/04.jpg";
import blog07 from "../../../assets/images/blog/07.jpg";
import blog08 from "../../../assets/images/blog/08.jpg";

// Client Images
import client1 from "../../../assets/images/client/01.jpg";
import client2 from "../../../assets/images/client/02.jpg";
import client3 from "../../../assets/images/client/03.jpg";
import client4 from "../../../assets/images/client/04.jpg";
import dateFormat from 'dateformat';
//import SectionTitle from '../../../components/Shared/SectionTitle';
const endpoint = require('../../../common/endpoint');
const _ = require('lodash');


function Detail(props, { history }) {

  const { user } = useAuth0();
  //const { name } = user;
  const { userglobaluuid, mode, theme} = user[process.env.REACT_APP_AUTH0_USER_METADATA];
  const { snippetuuid } = useParams();
  const cachedSnippet = (localStorage.getItem('cachedSnippet') === null ? undefined : localStorage.getItem('cachedSnippet'));
  const codeMaxLength = 2000;
  //const monthStamp = dateFormat(new Date(), "yyyy-mm");
  const [loading, setLoading] = useState(false);
  const [copiedSnippet, setCopiedSnippet] = useState(false);
  const [codeLength, setCodeLength] = useState(0);
  const [codeLengthColor, setCodeLengthColor] = useState('black');
  const [code, setCode] = useState(cachedSnippet);
  const [snippetUUID, setSnippetUUID] = useState(snippetuuid);
  const [snippetTitle, setSnippetTitle] = useState("");
  const [snippetExplanation, setSnippetExplanation] = useState("");
  const [creationDateTime, setCreationDateTime] = useState(new Date());


  const state = {
    pathItems: [
      //id must required
      { id: 1, name: "Dashboard", link: "/dashboard" },
      { id: 2, name: "Snippets", link: "/snippets" },
      { id: 3, name: "Snippet Title Here", link: "#" },
    ],
    comments: [
      {
        id: 1,
        image: client1,
        name: "Lorenzo Peterson",
        date: "15th August, 2019",
        time: "01:25 pm",
        desc:
          "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour",
      },
      {
        id: 2,
        image: client2,
        name: "Tammy Camacho",
        date: "16th August, 2019",
        time: "02:05 pm",
        desc:
          "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour",
      },
      {
        id: 3,
        image: client3,
        name: "Tammy Camacho",
        date: "17th August, 2019",
        time: "04:03 pm",
        desc:
          "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour",
        replies: [
          {
            id: 1,
            image: client4,
            name: "Calvin Camacho",
            date: "18th August, 2019",
            time: "05:55 pm",
            desc:
              "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour",
          },
        ],
      },
    ],
    blogs: [
      {
        id: 1,
        image: blog03,
        title: "Smartest Applications for Business",
        like: "33",
        comment: "08",
        autor: "Calvin Carlo",
        date: "13th August, 2019",
      },
      {
        id: 2,
        image: blog04,
        title: "Design your apps in your own way",
        like: "33",
        comment: "08",
        autor: "Calvin Carlo",
        date: "13th August, 2019",
      },
    ],
    successMsg: false,
  };


  useEffect(() => {
    document.title = 'Explain Code App - Snippet ' + snippetTitle;
    try {
      document.body.classList = '';
      document.getElementById('top-menu').classList.add('nav-light');
      document.querySelector('textarea').setAttribute('aria-label', 'Your Code Snippet');
    } catch (e) {
      console.error(e);
    }
    window.addEventListener('scroll', scrollNavigation, true);

    return () => {
      window.removeEventListener('scroll', scrollNavigation, true);
    };
  }, []);

  useEffect(() => {
    if (typeof userglobaluuid !== 'undefined' && typeof code === "undefined") {
      LoadSnippet();
   }
    return () => {};
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userglobaluuid, code]);

  useEffect(() => {

    return () => {};
  }, [snippetUUID]);

  useEffect(() => {

    return () => {};
  }, );

  const scrollNavigation = () => {
    var doc = document.documentElement;
    var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    if (top > 80) {
      document.getElementById('topnav').classList.add('nav-sticky');
    } else {
      document.getElementById('topnav').classList.remove('nav-sticky');
    }
  };

  function onChange(newValue) {
    setCode(newValue);
    localStorage.setItem('cachedSnippet', newValue);
  }

  function LoadSnippet() {
  //   {
  //     "snippet": "class India():\r\n\tdef capital(self):\r\n\t\tprint(\"New Delhi is the capital of India.\")\r\n\r\n\tdef language(self):\r\n\t\tprint(\"Hindi is the most widely spoken language of India.\")\r\n\r\n\tdef type(self):\r\n\t\tprint(\"India is a developing country.\")\r\n\r\nclass USA():\r\n\tdef capital(self):\r\n\t\tprint(\"Washington, D.C. is the capital of USA.\")\r\n\r\n\tdef language(self):\r\n\t\tprint(\"English is the primary language of USA.\")\r\n\r\n\tdef type(self):\r\n\t\tprint(\"USA is a developed country.\")\r\n\r\nobj_ind = India()\r\nobj_usa = USA()\r\nfor country in (obj_ind, obj_usa):\r\n\tcountry.capital()\r\n\tcountry.language()\r\n\tcountry.type()\r\n",
  //     "creationDateTime": "2021-12-25T18:04:16Z",
  //     "snippetuuid": "0e2df643-471b-47cf-85e5-14153f2a5869",
  //     "userglobaluuid": "7be3b9a1-a78a-44e6-a92f-423678de9500",
  //     "monthStamp": "2021-12",
  //     "dateStamp": "2021-12-25",
  //     "lang": "javascript",
  //     "title": "New javascript snippet 2021-12-25"
  // }
    endpoint.getIAM(`${getSnippets().getSnippet}${userglobaluuid}/${snippetUUID}`).then((res) => {
      const snippet = res.data.snippet.snippet;
      const length = snippet.length;
      const color = (length >= codeMaxLength ? 'red' : 'black');
      const title = res.data.snippet.title;
      const exp = res.data.snippet.explanation;
      const dt = res.data.snippet.creationDateTime;
      setSnippetTitle(title);
      setSnippetExplanation(exp);
      setCreationDateTime(dt);
      setCodeLength(length);
      setCodeLengthColor(color);
      setCode(snippet);
    }).catch((err) => {
      console.error(err);
    });



    //setCode(newValue);
    //localStorage.setItem('cachedSnippet', newValue);
  }

  // async function getUserCompletionCount(userglobaluuid){
  //   //Grab the count of executions for this month
  //   endpoint.postIAM(getCompletions().userCompletionCount, {userglobaluuid, monthStamp}).then((res) => {
      
  //   }).catch((err) => {
  //     console.error(err);
  //   });
  // }



  

    return (
      <React.Fragment>
        {/* breadcrumb */}
        <PageBreadcrumb pathItems={state.pathItems}>
          <h1> {snippetTitle} </h1>
          <ul className="list-unstyled mt-4">
            {/* <li className="list-inline-item h6 user text-muted me-2">
              <i className="mdi mdi-account"></i> {name}
            </li> */}
            <li className="list-inline-item h6 date text">
              <i className="mdi mdi-calendar-check"></i>{dateFormat(creationDateTime, 'dddd, mmmm d, yyyy h:MM TT Z')}
            </li>
          </ul>
        </PageBreadcrumb>
        <div className="form-icon position-relative">
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
        <section className="section">
          <Container>
            <Row>
              <Col lg="8" md="6">
                <Card className="blog blog-detail border-0 shadow rounded">
                <div className="border-bottom pb-4">
                <label htmlFor="editor">Your code snippet</label>
                <AceEditor
                  id="editor"
                  title="Your code snippet"
                  aria-label="Your code snippet"
                  readOnly={loading}
                  style={{ width: 'auto' }}
                  placeholder="Loading your code snippet"
                  mode={mode}
                  theme={theme}
                  name="editor"
                  onChange={onChange}
                  fontSize={14}
                  showPrintMargin={true}
                  showGutter={true}
                  highlightActiveLine={true}
                  value={code}
                  setOptions={{
                    enableBasicAutocompletion: false,
                    enableLiveAutocompletion: false,
                    enableSnippets: true,
                    showLineNumbers: true,
                    tabSize: 2,
                  }}
                />
                <Row>
                <Col md="8">
                    <Button
                      style={{ marginTop: '5px', marginLeft: '10px' }}
                      disabled={(loading === true | typeof code === "undefined" ? true : false)}
                      onClick={e =>{
                        console.log('save:', code);
                        setLoading(true);
                         //run update
                         endpoint.postIAM(getSnippets().updateSnippet, {
                          userglobaluuid,
                          snippetuuid,
                          fields: [{name: 'snippet', value: code}]
                        }).then((res) => {
                          if (res.data.success === true) {
                           
                            setLoading(false);
                          } else {
                           
                            setLoading(false);
                          }
                        })
                        .catch((err) => {
                          console.error(err);
                          setLoading(false);
                        });
                      }}
                      className="btn btn-pills btn-info"
                    >
                      Update Snippet
                      {loading === true ? (
                        <Ionicon
                          style={{ marginLeft: '5px' }}
                          color="#ffffff"
                          icon="ios-analytics-outline"
                          beat={loading}
                        />
                      ) : (
                        ''
                      )}
                    </Button>
                    <Button
                      style={{ marginTop: '5px', marginLeft: '10px' }}
                      disabled={(loading === true | typeof code === "undefined" ? true : false)}
                      onClick={(e) => {
                        copy(code);
                        setCopiedSnippet(true);
                        setInterval(function () {
                          setCopiedSnippet(false);
                        }, 3500);
                      }}
                      className="btn btn-pills btn-secondary"
                    >
                      Copy Snippet
                      {loading === true ? (
                        <Ionicon
                          style={{ marginLeft: '5px' }}
                          color="#ffffff"
                          icon="ios-analytics-outline"
                          beat={loading}
                        />
                      ) : (
                        ''
                      )}
                    </Button>
                  </Col>
                  <Col md="4">
                  <p style={{ color: codeLengthColor, fontWeight: 'bold' }}>
                  {codeLength} / 1000
                   </p>
                  </Col>
                </Row>
                <Alert
                    color={'info'}
                    isOpen={copiedSnippet}
                    toggle={() => {
                      setCopiedSnippet(false);
                    }}
                  >
                    Code Snippet copied to clipboard.
                  </Alert>
              </div>
                  <CardBody className="content">
                    <h6>
                      <i className="mdi mdi-tag text-primary me-1"></i>
                      <Link to={`/snippet/${snippetUUID}`} className="text-primary">
                       {snippetTitle}
                      </Link>
                      {/* ,{" "}
                      <Link to="#" className="text-primary">
                        Application
                      </Link> */}
                    </h6>
                    <p className="text mt-3">
                      {snippetExplanation}
                    </p>
                    <blockquote className="blockquote mt-3 p-3">
                      <p className="text-muted mb-0 fst-italic">
                        {snippetExplanation}
                      </p>
                    </blockquote>

                    <div className="post-meta mt-3">
                    <h6><i className="mdi mdi-calendar-check"></i>{dateFormat(creationDateTime, 'dddd, mmmm d, yyyy h:MM TT Z')}</h6>
                    
                      {/* <ul className="list-unstyled mb-0">
                        <li className="list-inline-item me-2">
                          <Link to="#" className="text-muted like">
                            <i className="uil uil-heart me-1"></i>33
                          </Link>
                        </li>
                        <li className="list-inline-item">
                          <Link to="#" className="text-muted comments">
                            <i className="uil uil-comment me-1"></i>08
                          </Link>
                        </li>
                      </ul> */}
                    </div>
                  </CardBody>
                </Card>

                {/* comments 
                <CommentsBox comments={state.comments} />
*/}
                {/* <Card className="shadow rounded border-0 mt-4">
                  <CardBody>
                    <h5 className="card-title mb-0">Leave A Comment :</h5>
                    <Alert
                      color="primary"
                      isOpen={state.successMsg}
                      toggle={() => {
                        this.setState({ successMsg: !state.successMsg });
                      }}
                    >
                      Data sended successfully.
                    </Alert>
                    <Form className="mt-3">
                      <Row>
                        <Col md="12">
                          <div className="mb-3">
                            <Label className="form-label">Your Comment</Label>
                            <div className="form-icon position-relative">
                              <i>
                                <FeatherIcon
                                  icon="message-circle"
                                  className="fea icon-sm icons"
                                />
                              </i>
                            </div>
                            <textarea
                              id="message"
                              placeholder="Your Comment"
                              rows="5"
                              name="message"
                              className="form-control ps-5"
                              required
                            ></textarea>
                          </div>
                        </Col>

                        <Col md="6">
                          <div className="mb-3">
                            <Label className="form-label">
                              Name <span className="text-danger">*</span>
                            </Label>
                            <div className="form-icon position-relative">
                              <i>
                                <FeatherIcon
                                  icon="user"
                                  className="fea icon-sm icons"
                                />
                              </i>
                            </div>
                            <Input
                              id="name"
                              name="name"
                              type="text"
                              placeholder="Name"
                              className="form-control ps-5"
                              required
                            />
                          </div>
                        </Col>

                        <Col md="6">
                          <div className="mb-3">
                            <Label className="form-label">
                              Your Email <span className="text-danger">*</span>
                            </Label>
                            <div className="form-icon position-relative">
                              <i>
                                <FeatherIcon
                                  icon="mail"
                                  className="fea icon-sm icons"
                                />
                              </i>
                            </div>
                            <Input
                              id="email"
                              type="email"
                              placeholder="Email"
                              name="email"
                              className="form-control ps-5"
                              required
                            />
                          </div>
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

                {/* <Card className="shadow rounded border-0 mt-4">
                  <CardBody>
                    <h5 className="card-title mb-0">Related Posts :</h5>

                    <Row>
                      {state.blogs.map((blog, key) => (
                        <Col lg="6" className="mt-4 pt-2" key={key} name="blog">
                          <Card className="blog rounded border-0 shadow">
                            <div className="form-icon position-relative">
                              <CardImg
                                top
                                src={blog.image}
                                className="rounded-top"
                                alt=""
                              />
                              <div className="overlay rounded-top bg-dark"></div>
                            </div>
                            <CardBody className="content">
                              <h5>
                                <Link
                                  to="#"
                                  className="card-title title text-dark"
                                >
                                  {blog.title}
                                </Link>
                              </h5>
                              <div className="post-meta d-flex justify-content-between mt-3">
                                <ul className="list-unstyled mb-0">
                                  <li className="list-inline-item me-2  mb-0">
                                    <Link to="#" className="text-muted like">
                                      <i className="uil uil-heart me-1"></i>
                                      {blog.like}
                                    </Link>
                                  </li>
                                  <li className="list-inline-item">
                                    <Link
                                      to="#"
                                      className="text-muted comments"
                                    >
                                      <i className="uil uil-comment me-1"></i>
                                      {blog.comment}
                                    </Link>
                                  </li>
                                </ul>
                                <Link
                                  to="/page-blog-detail"
                                  className="text-muted readmore"
                                >
                                  Read More{" "}
                                  <i className="uil uil-angle-right-b align-middle"></i>
                                </Link>
                              </div>
                            </CardBody>
                            <div className="author">
                              <small className="text-light user d-block">
                                <i className="uil uil-user"></i> {blog.autor}
                              </small>
                              <small className="text-light date">
                                <i className="uil uil-calendar-alt"></i>{" "}
                                {blog.date}
                              </small>
                            </div>
                          </Card>
                        </Col>
                      ))}
                    </Row>
                  </CardBody>
                </Card> */}

                 </Col>

              {/* sidebar */}
              <Col lg={4} xs={12} md={6} className="mt-4 mt-sm-0 pt-2 pt-sm-0">
                <PageSearchSidebar
                  blog01={blog01}
                  blog07={blog07}
                  blog08={blog08}
                />
              </Col>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
}
export default Detail;
