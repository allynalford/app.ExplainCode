import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  Button
} from "reactstrap";
import Select from 'react-select';
//Import Icons
import FeatherIcon from "feather-icons-react";

//Import Images
import imgbg from "../../../assets/images/account/bg.png";

import { useAuth0 } from '@auth0/auth0-react';
import { getWidgets, getPrompts } from './config';
import { getGTP3 } from '../../../common/config';

import Ionicon from 'react-ionicons';
//import { Icon, InlineIcon  } from '@iconify/react';
//import onRunPromptIcon from '@iconify/icons-emojione-monotone/confused-face';
//'@iconify/icons-emojione-monotone/chart-increasing'
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-golang";
import "ace-builds/src-noconflict/mode-mysql";
import "ace-builds/src-noconflict/mode-markdown";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-terminal";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/theme-tomorrow";
import "ace-builds/src-noconflict/theme-kuroir";
import "ace-builds/src-noconflict/theme-solarized_dark";
import "ace-builds/src-noconflict/theme-solarized_light";
import './loader.css';
const endpoint = require('../../../common/endpoint');


function PageProfile({history}) {
 
  const { user, logout } = useAuth0();
  const { name, picture, email } = user;
  const userglobaluuid = user[process.env.REACT_APP_AUTH0_USER_METADATA].userglobaluuid;
  const [theme, setTheme] = useState("terminal");
  const [mode, setMode] = useState("javascript");
  const [tool, setTool] = useState("Line By Line");
  const [prompt, setPrompt] = useState("Line By Line");
  const [code, setCode] = useState("");
  const [promptResponse, setPromptResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const themes = [
    { label: 'Solarized Light', value: 'solarized_light' },
    { label: 'Solarized Dark', value: 'solarized_dark' },
    { label: 'Terminal', value: 'terminal' },
    { label: 'Kuroir', value: 'kuroir' },
    { label: 'GitHub', value: 'github' },
    { label: 'Monokai', value: 'monokai' }
  ];

  const modes = [
    { label: 'All Languages', value: 'markdown' },
    { label: 'NodeJS (Javascript)', value: 'javascript' },
    { label: 'Python', value: 'python' },
    { label: 'Go (Golang)', value: 'golang' },
    { label: 'SQL (Structured Query Language)', value: 'mysql' }
  ];

  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      borderBottom: '2px dotted green',
      color: state.isSelected ? 'yellow' : 'black',
      //backgroundColor: state.isSelected ? 'green' : 'white'
    }),
    control: (provided) => ({
      ...provided,
      marginTop: "5%",
    }),
    width: '100%',
    fontWeight: 'bold'
  }

  function useQuery() {
    const { search } = useLocation();

    return React.useMemo(() => new URLSearchParams(search), [search]);
  }

  let query = useQuery();


  useEffect(() => {
    try {
      document.body.classList = '';
      document.getElementById('top-menu').classList.add('nav-light');
      window.addEventListener('scroll', scrollNavigation, true);
    } catch (e) {
      console.log(e);
    }

    return () => {
      console.log("cleaned up");
      window.removeEventListener("scroll", scrollNavigation, true);
    };
  }, []);

  useEffect(() => {
  
    const toolParam = query.get("tool");
    
    if(toolParam !== null && toolParam !== tool){
      setTool(toolParam.replace("-", " "));
      setPrompt(toolParam);
    }

    return () => {
      console.log("cleaned up");
    };
  }, [query, tool]);

  const scrollNavigation = () => {
    var doc = document.documentElement;
    var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    if (top > 80) {
      document.getElementById("topnav").classList.add("nav-sticky");
    } else {
      document.getElementById("topnav").classList.remove("nav-sticky");
    }
  };


  function onChange(newValue) {
    console.log("change", newValue);
    setCode(newValue);
  }

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const onRunPrompt = async () => {
    console.log(prompt);
    setLoading(true);
    switch (prompt) {
      case 'Line-By-Line':
        //getGTP3
        setLoading(false);
        break;
      case 'Summarize':
        const resp = await endpoint.postIAM(getGTP3().post_Summary_Prompt, {code, lang: mode, userglobaluuid});
        console.log(resp.data);
        const text = resp.data.explanation.choices[0].text;
        setPromptResponse(text);
        setLoading(false);
        break;
      case 'Explain-Function':
        console.log('Mangoes and papayas are $2.79 a pound.');
        // expected output: "Mangoes and papayas are $2.79 a pound."
        setLoading(false);
        break;
      case 'Class-Breakdown':
        console.log('Mangoes and papayas are $2.79 a pound.');
        // expected output: "Mangoes and papayas are $2.79 a pound."
        setLoading(false);
        break;
      default:
        console.log(`Sorry, we are out of ${prompt}.`);
        setLoading(false);
    }
  }


  return (
    <React.Fragment>
      <section
        className="bg-profile d-table w-100 bg-primary"
        style={{ background: `url(${imgbg}) center center` }}
      >
        <Container>
          <Row>
            <Col lg="12">
              <Card
                className="public-profile border-0 rounded shadow"
                style={{ zIndex: '1' }}
              >
                <CardBody>
                  <Row className="align-items-center">
                    <Col lg="2" md="3" className="text-md-start text-center">
                      <img
                        src={picture}
                        className="avatar avatar-large rounded-circle shadow d-block mx-auto"
                        alt=""
                      />
                    </Col>

                    <Col lg="10" md="9">
                      <Row className="align-items-end">
                        <Col
                          md="7"
                          className="text-md-start text-center mt-4 mt-sm-0"
                        >
                          <h3 className="title mb-0">{name}</h3>
                          <small className="text-muted h6 me-2">{email}</small>
                        </Col>
                        <Col md="5" className="text-md-end text-center">
                          <ul className="list-unstyled social-icon social mb-0 mt-4">
                            <li className="list-inline-item">
                              <Link to="#" className="rounded">
                                <i className="uil uil-user-plus align-middle"></i>
                              </Link>
                            </li>
                            <li className="list-inline-item">
                              <Link to="#" className="rounded">
                                <i className="uil uil-comment align-middle"></i>
                              </Link>
                            </li>
                            <li className="list-inline-item">
                              <Link to="#" className="rounded">
                                <i className="uil uil-bell align-middle"></i>
                              </Link>
                            </li>
                            <li className="list-inline-item">
                              <Link to="/page-profile-edit" className="rounded">
                                <i className="uil uil-cog align-middle"></i>
                              </Link>
                            </li>
                          </ul>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="section mt-60">
        <Container className="mt-lg-3">
          <Row>
            <Col lg="3" md="6" xs="12" className="d-lg-block d-none">
              <div className="sidebar sticky-bar p-4 rounded shadow">
                <div className="widget mb-4 pb-4 border-bottom">
                  <h5 className="widget-title">Stats :</h5>
                  <div className="row mt-4">
                    {/* <div className="col-6 text-center">
                      <FeatherIcon
                        icon="youtube"
                        className="fea icon-ex-md text-primary mb-1"
                      />
                      <h5 className="mb-0">60</h5>
                      <p className="text-muted mb-0">Credits</p>
                    </div> */}

                    <div className="col-6 text-center">
                      <FeatherIcon
                        icon="activity"
                        className="fea icon-ex-md text-primary mb-1"
                      />
                      <h5 className="mb-0">10/60</h5>
                      <p className="text-muted mb-0">Executions</p>
                    </div>
                  </div>
                </div>
                <div className="widget mb-4 pb-4 border-bottom">
                  <h5 className="widget-title">Language</h5>
                  <div className="mt-4 mb-0">
                    <Select
                      aria-label="Select an Language"
                      className="form-select form-control"
                      theme={(theme) => ({
                        ...theme,
                        borderRadius: 0,
                        fontSize: '18px',
                        fontWeight: 'bold',
                        // colors: {
                        //     ...theme.colors,
                        //     text: 'black',
                        //     primary25: '#009FD4',
                        //     primary: '#009FD4',
                        // },
                      })}
                      styles={customStyles}
                      id="modes-select"
                      options={modes}
                      selectValue={'javascript'}
                      onChange={(opt) => {
                        setMode(opt.value);
                      }}
                    ></Select>
                  </div>
                </div>
                <div className="widget mt-4">
                  <h5 className="widget-title">Tools:</h5>
                  <ul
                    className="list-unstyled sidebar-nav mb-0"
                    id="navmenu-nav"
                  >
                    {getPrompts(window.location.path).map((widget, key) => (
                      <li className={widget.className} key={key}>
                        {widget.title === 'Logout' ? (
                          <Link
                            onClick={() =>
                              logout({
                                returnTo: window.location.origin,
                              })
                            }
                            to={'#'}
                            className="navbar-link d-flex rounded shadow align-items-center py-2 px-4"
                          >
                            <span className="h4 mb-0">
                              <i className={widget.icon}></i>
                            </span>
                            <h6 className="mb-0 ms-2">{widget.title}</h6>
                          </Link>
                        ) : (
                          <Link
                            to={widget.link}
                            className="navbar-link d-flex rounded shadow align-items-center py-2 px-4"
                          >
                            <span className="h4 mb-0">
                              <i className={widget.icon}></i>
                            </span>
                            <h6 className="mb-0 ms-2">{widget.title}</h6>
                          </Link>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="widget mb-4 pb-4 border-bottom">
                  <h5 className="widget-title">Theme</h5>
                  <div className="mt-4 mb-0">
                    <Select
                      aria-label="Select an Theme"
                      className="form-select form-control"
                      theme={(theme) => ({
                        ...theme,
                        borderRadius: 0,
                        fontSize: '18px',
                        fontWeight: 'bold',
                        // colors: {
                        //     ...theme.colors,
                        //     text: 'black',
                        //     primary25: '#009FD4',
                        //     primary: '#009FD4',
                        // },
                      })}
                      styles={customStyles}
                      id="themes"
                      options={themes}
                      onChange={(opt) => {
                        setTheme(opt.value);
                      }}
                    ></Select>
                  </div>
                </div>

                <div className="widget mt-4">
                  <ul
                    className="list-unstyled sidebar-nav mb-0"
                    id="navmenu-nav"
                  >
                    {getWidgets(window.location.path).map((widget, key) => (
                      <li className={widget.className} key={key}>
                        {widget.title === 'Logout' ? (
                          <Link
                            onClick={() =>
                              logout({
                                returnTo: window.location.origin,
                              })
                            }
                            to={'#'}
                            className="navbar-link d-flex rounded shadow align-items-center py-2 px-4"
                          >
                            <span className="h4 mb-0">
                              <i className={widget.icon}></i>
                            </span>
                            <h6 className="mb-0 ms-2">{widget.title}</h6>
                          </Link>
                        ) : (
                          <Link
                            to={widget.link}
                            className="navbar-link d-flex rounded shadow align-items-center py-2 px-4"
                          >
                            <span className="h4 mb-0">
                              <i className={widget.icon}></i>
                            </span>
                            <h6 className="mb-0 ms-2">{widget.title}</h6>
                          </Link>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Col>

            <Col lg="9" md="7" xs="12">
              <div className="border-bottom pb-4">
                <h2>{tool}</h2>
                <p className="text mb-0">Explain what this process does here</p>
                <ul>
                  <li>
                    Language:{' '}
                    {mode === 'mysql' ? 'SQL' : capitalizeFirstLetter(mode)}
                  </li>
                </ul>
              </div>

              <div className="border-bottom pb-4">
                <AceEditor
                  readOnly={loading}
                  style={{ width: 'auto' }}
                  placeholder="Placeholder Text"
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
                {/* <Icon style={{marginLeft: '5px'}} color={"#ffffff"} size="lg" icon={spiderIconMon}/> */}
                <Button
                  style={{ marginTop: '5px' }}
                  disabled={loading}
                  onClick={onRunPrompt}
                  className="btn btn-pills btn-primary"
                >
                  Explain
                  {loading === true ? (
                    <Ionicon
                      style={{ marginLeft: '5px' }}
                      color="#ffffff"
                      icon="ios-analytics-outline"
                      beat={loading}
                    />
                  ):''}
                </Button>
              </div>

              <h5 className="mt-4 mb-0">Results :</h5>
              {loading === true ? <div class="loader">Loading Explanation</div> : ''}
              <div className="border-bottom pb-4" style={{position: 'relative'}}>
                <AceEditor
                  style={{ width: 'auto' }}
                  placeholder="Placeholder Text"
                  mode="html"
                  theme={theme}
                  name="editor-results"
                  onChange={onChange}
                  fontSize={14}
                  showPrintMargin={true}
                  showGutter={false}
                  highlightActiveLine={true}
                  value={promptResponse}
                  setOptions={{
                    enableBasicAutocompletion: false,
                    enableLiveAutocompletion: false,
                    enableSnippets: false,
                    showLineNumbers: false,
                    tabSize: 2,
                  }}
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default PageProfile;

