/*jshint esversion: 8 */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Button,
  Alert,
  Label
} from "reactstrap";
import Select from 'react-select';
//Import Icons
import FeatherIcon from "feather-icons-react";
import copy from 'copy-to-clipboard';
//Import Images
import ProfileHeader from "../../../components/Layout/ProfileHeader";
import { useAuth0 } from '@auth0/auth0-react';
import { getWidgets, getPrompts , modes, themes} from './config';
import { getGTP3, getCompletions } from '../../../common/config';
import ReactStars from "react-rating-stars-component";
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
import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/theme-terminal";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/theme-tomorrow";
import "ace-builds/src-noconflict/theme-kuroir";
import "ace-builds/src-noconflict/theme-solarized_dark";
import "ace-builds/src-noconflict/theme-solarized_light";

import './loader.css';
import dateFormat from 'dateformat';
const endpoint = require('../../../common/endpoint');
const _ = require('lodash');
//const dateFormat = require('dateformat');

function PageProfile({history}) {
 
  const { user, logout } = useAuth0();
  const [userglobaluuid, setUserglobaluuid] = useState("");
  const cachedCode = (localStorage.getItem('cachedCode') === null ? undefined : localStorage.getItem('cachedCode'));
  const cachedQuestion = (localStorage.getItem('cachedQuestion') === null ? undefined : localStorage.getItem('cachedQuestion'));
  const codeMaxLength = 2000;
  const monthStamp = dateFormat(new Date(), "yyyy-mm");
  const [user_metadata, setUserMetaData] = useState(undefined);
  const [theme, setTheme] = useState("terminal");
  const [mode, setMode] = useState("javascript");
  const [tool, setTool] = useState("Line By Line");
  const [prompt, setPrompt] = useState("Line-By-Line");
  const [code, setCode] = useState(cachedCode);
  const [question, setQuestion] = useState(cachedQuestion);
  const [rating, setRating] = useState(0);
  const [ratingMessage, setRatingMessage] = useState("");
  const [ratingSuccess, setRatingSuccess] = useState(false);
  const [codeLength, setCodeLength] = useState(0);
  const [codeLengthColor, setCodeLengthColor] = useState('black');
  const [promptResponse, setPromptResponse] = useState("");
  const [tools] = useState(new Set(['Line-By-Line', 'Summarize', 'Class-Breakdown','Open-Questions','Explain-Function']));
  const [loading, setLoading] = useState(false);
  const [completionId, setCompletionId] = useState("");
  const [completionsThisMonth, setCompletionsThisMonth] = useState(0);
  const [ratingSuccessColor, setRatingSuccessColor] = useState("primary");
  const [ratingSuccessMsg, setRatingSuccessMsg] = useState("");
  const [ratingStatus, setRatingStatus]  = useState(false);
  const [copied, setCopied] = useState(false);
  const [themeOption, setThemeOption] = useState({});
  const [modeOption, setModeOption] = useState({});



  // function useQuery() {
  //   const { search } = useLocation();

  //   return React.useMemo(() => new URLSearchParams(search), [search]);
  // }

  // function switchTool(toolParam) {
    
  //   console.log(toolParam)

  //   if(toolParam !== null && toolParam !== tool){

  //     const isItemInSet = tools.has(toolParam);

  //     console.log(isItemInSet)
     
  //     if(!isItemInSet){
  //       window.history.replaceState(
  //         null,
  //         null,
  //         `/dashboard?tool=Summarize`,
  //       );
  //       setTool('Summarize');
  //       setPrompt('Summarize');
  //     }else{
  //       console.log(`/dashboard?tool=${toolParam}`)
  //       window.history.replaceState(
  //         null,
  //         null,
  //         `/dashboard?tool=${toolParam}`,
  //       );
  //       setTool(toolParam.replace("-", " "));
  //       setPrompt(toolParam);
  //     }
  //   }
  // }

  //let query = useQuery();


  useEffect(() => {
    try {
      if(document.getElementById('top-menu') !== null){
        document.getElementById('top-menu').classList.add('nav-light');
      }
      
      window.addEventListener('scroll', scrollNavigation, true);


    } catch (e) {
      console.error(e);
    }

    return () => {
      window.removeEventListener("scroll", scrollNavigation, true);
      localStorage.removeItem('cachedCode');
      localStorage.removeItem('cachedQuestion');
    };
  }, []);

  useEffect(() => {
    if (typeof user[process.env.REACT_APP_AUTH0_USER_METADATA] !== "undefined") {
      setUserMetaData(user[process.env.REACT_APP_AUTH0_USER_METADATA]);
    }
    return () => {

    };
  }, [ user ]);

  useEffect(() => {
    if (typeof user_metadata !== "undefined") {
      setUserglobaluuid(user_metadata.userglobaluuid);
      getUserCompletionCount(user_metadata.userglobaluuid);
      const themeOption = _.find(themes, ['value', user_metadata.theme]);
      setThemeOption(themeOption);
      const modeOption = _.find(modes, ['value', user_metadata.mode]);
      setModeOption(modeOption);
    }
    return () => {

    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ user_metadata]);


  useEffect(() => {
    
    const toolParam = new URLSearchParams(window.location.search).get("tool");
    
    if(toolParam !== null && toolParam !== tool){

      const isItemInSet = tools.has(toolParam);
     
      if(!isItemInSet){
        window.history.replaceState(
          null,
          null,
          `/dashboard?tool=Summarize`
        );
        setTool('Summarize');
        setPrompt('Summarize');
      }else{
        setTool(toolParam.replace("-", " "));
        setPrompt(toolParam);
      }
    }

    return () => {
    };
  },[tool, tools]);


  useEffect(() => {

    //console.log('code',code);
    if(typeof code !== "undefined" && code !== null){
      //console.log('storing code');

      localStorage.setItem('cachedCode', code);

     // console.log('reading code', localStorage.getItem('cachedCode'))
      setCodeLength(code.length);
      if(code.length >= codeMaxLength){
        setCodeLengthColor('red');
      }else{
        setCodeLengthColor('black');
      }
    }
    return () => {
    };
  }, [code]);

  useEffect(() => {

    //console.log('code', question);
    if(typeof question !== "undefined" && question !== null){
     
      localStorage.setItem('cachedQuestion', question);
    }
    return () => {
    };
  }, [question]);

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
    setCode(newValue);
    localStorage.setItem('cachedCode', newValue);
  }

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

   // eslint-disable-next-line react-hooks/exhaustive-deps
   async function getUserCompletionCount(userglobaluuid){
    //Grab the count of executions for this month
    endpoint.postIAM(getCompletions().userCompletionCount, {userglobaluuid, monthStamp}).then((res) => {
      setCompletionsThisMonth(res.data.count);
    }).catch((err) => {
      console.error(err);
    });
  }

  const onRunPrompt = async () => {
    setLoading(true);
    let resp, text;
    switch (prompt) {
      case 'Line-By-Line':
        resp = await endpoint.postIAM(getGTP3().post_Line_Prompt, {code, lang: mode, userglobaluuid});
        text = resp.data.explanation.choices[0].text;
        setCompletionId(resp.data.explanation.id);
        break;
      case 'Summarize':
        resp = await endpoint.postIAM(getGTP3().post_Summary_Prompt, {code, lang: mode, userglobaluuid});
        text = resp.data.explanation.choices[0].text;
        setCompletionId(resp.data.explanation.id);
        break;
      case 'Explain-Function':
        resp = await endpoint.postIAM(getGTP3().post_ExplainFunction_Prompt, {code, lang: mode, userglobaluuid});
        text = resp.data.explanation.choices[0].text;
        setCompletionId(resp.data.explanation.id);
        break;
      case 'Open-Questions':
        resp = await endpoint.postIAM(getGTP3().post_Freeform_Prompt, {code, lang: mode, question, userglobaluuid});
        text = resp.data.explanation.choices[0].text;
        setCompletionId(resp.data.explanation.id);
        break;
      case 'Class-Breakdown':
        break;
      default:
        console.log(`Sorry, we are out of ${prompt}.`);
    }
    getUserCompletionCount(userglobaluuid);
    setPromptResponse(text);
    setLoading(false);
  };


  return (
    <React.Fragment>
      <ProfileHeader />
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
                      <h5 className="mb-0">{completionsThisMonth}/100</h5>
                      <p className="text-muted mb-0">Executions</p>
                    </div>
                  </div>
                </div>
                <div className="widget mt-4">
                  <h5 className="widget-title">Tools:</h5>
                  <ul
                    className="list-unstyled sidebar-nav mb-0"
                    id="navmenu-nav"
                  >
                    {getPrompts(window.location).map((widget, key) => (
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
                            id={widget.tool}
                            name={widget.tool}
                            to={widget.link}
                            //onClick={e => {switchTool(widget.tool)}}
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

                <div className="widget mt-4">
                  <ul
                    className="list-unstyled sidebar-nav mb-0"
                    id="navmenu-nav"
                  >
                    {getWidgets(window.location).map((widget, key) => (
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
                <Row>
                  <Col md="6">
                  <div className="mt-4 mb-0">
                  <h2>{tool}</h2>
                <p className="text mb-0">Explain what this process does here</p>
                <ul>
                  <li>
                    Language:{' '}
                    {mode === 'mysql' ? 'SQL' : capitalizeFirstLetter(mode)}
                  </li>
                  <li>
                    Theme: {theme}
                  </li>
                </ul>
                  </div>
                  </Col>
                  <Col md="6">
                   <Row>
                     <Col md="12">
                     <div className="mt-4 mb-0">
                    <Label>Language</Label>
                    <Select
                      aria-label="Select an Language"
                      className="form-control"
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
                      id="modes-select"
                      options={modes}
                      value={modeOption}
                      selectValue={'javascript'}
                      onChange={(opt) => {
                        setMode(opt.value);
                        setModeOption(opt)
                      }}
                    ></Select>
                  </div>
                     </Col>
                     <Col md="12">
                     <div className="mt-4 mb-0">
                    <Label>Theme</Label>
                    <Select
                      aria-label="Select an Theme"
                      className="form-control"
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
                      id="themes"
                      options={themes}
                      value={themeOption}
                      onChange={(opt) => {
                        setTheme(opt.value);
                        setThemeOption(opt);
                      }}
                    ></Select>
                  </div>
                     </Col>
                   </Row>
                  </Col>
                </Row>
              </div>

              <div className="border-bottom pb-4">
                <AceEditor
                  readOnly={loading}
                  style={{ width: 'auto' }}
                  placeholder="Enter your code"
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
                {/* <Button
                  onClick={(e) => {
                    window.history.replaceState(
                      null,
                      null,
                      `/dashboard?tool=somethingODD`,
                    );
                  }}
                >
                  Test
                </Button> */}
                {prompt !== 'Open-Questions' ? (
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
                    ) : (
                      ''
                    )}
                  </Button>
                ) : (
                  ''
                )}
                <p style={{ color: codeLengthColor, fontWeight: 'bold' }}>
                  {codeLength} / 1000
                </p>
              </div>
              {prompt === 'Open-Questions' ? (
                <div className="border-bottom pb-4">
                  <div style={{ marginTop: '5px' }}>
                    <label htmlFor="question" style={{ fontWeight: 'bold' }}>
                      Enter Question:
                    </label>
                    <textarea
                      rows={5}
                      cols={90}
                      type="textarea"
                      name="question"
                      id="question"
                      onChange={(e) => {
                        setQuestion(e.target.value);
                        localStorage.setItem('cachedQuestion', e.target.value);
                      }}
                    />
                  </div>
                  <Button
                    style={{ marginTop: '5px' }}
                    disabled={loading}
                    onClick={onRunPrompt}
                    className="btn btn-pills btn-primary"
                  >
                    Ask Question
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
                </div>
              ) : (
                ''
              )}
              <h5 className="mt-4 mb-0">Results:</h5>
              {loading === true ? (
                <div className="loader">Loading Explanation</div>
              ) : (
                ''
              )}

              
              <div
                className="border-bottom pb-4"
                style={{ position: 'relative' }}
              >
                <div>
                <Alert
                    color={'info'}
                    isOpen={copied}
                    toggle={() => {
                      setCopied(false);
                    }}
                  >
                    Explanation copied to clipboard.
                  </Alert>
                  <Button
                    size="sm"
                    style={{ marginTop: '5px' }}
                    disabled={(loading === true | completionId === '' ? true : false)}
                    onClick={(e) => {
                      copy(promptResponse);
                      setCopied(true);
                      setInterval(function () {
                        setCopied(false);
                    }, 3500);
                    }}
                    className="btn btn-pills btn-secondary"
                  >
                    Copy Explanation
                  </Button>
                </div>
                <AceEditor
                  style={{ width: 'auto' }}
                  placeholder="Explanation will appear here"
                  mode="html"
                  theme={theme}
                  name="editor-results"
                  onChange={onChange}
                  fontSize={14}
                  showPrintMargin={true}
                  showGutter={false}
                  wrapEnabled={true}
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
              {completionId !== '' ? (
                <div>
                  <Alert
                    color={ratingSuccessColor}
                    isOpen={ratingSuccess}
                    toggle={() => {
                      setRatingSuccess(!ratingSuccess);
                    }}
                  >
                    {ratingSuccessMsg}
                  </Alert>
                  <ReactStars
                    count={5}
                    value={rating}
                    color="black"
                    a11y={true}
                    onChange={(rating) => {
                      setRating(rating);
                      setRatingStatus(true);
                      //const url = getCompletions().updateCompletionRating;
                      endpoint
                        .postIAM(getCompletions().updateCompletionRating, {
                          userglobaluuid,
                          completionid: completionId,
                          rating,
                          feedback: ratingMessage,
                        })
                        .then((res) => {
                          if (res.data.success === true) {
                            setCompletionsThisMonth(res.data.count);
                            setRatingSuccessColor('success');
                            setRatingSuccessMsg('Thank you for your rating.');
                          } else {
                            setRatingSuccessColor('danger');
                            setRatingSuccessMsg(
                              'Error: Could not record your rating',
                            );
                          }

                          setRatingSuccess(true);
                          setRatingStatus(false);
                          setInterval(function () {
                            setRatingSuccess(false);
                        }, 5000);
                        })
                        .catch((err) => {
                          console.error(err);
                          setRatingSuccessColor('danger');
                            setRatingSuccessMsg(
                              'Error: Could not record your rating',
                            );
                          setRatingSuccess(true);
                          setRatingStatus(false);
                          setInterval(function () {
                            setRatingSuccess(false);
                        }, 5000);
                        });
                    }}
                    size={34}
                    isHalf={true}
                    emptyIcon={<i className="far fa-star"></i>}
                    halfIcon={<i className="fa fa-star-half-alt"></i>}
                    fullIcon={<i className="fa fa-star"></i>}
                    activeColor="#ffd700"
                  />
                  <p>How would you rate the results?</p>
                  <div style={{ marginTop: '5px' }}>
                    <label
                      htmlFor="ratingfeedback"
                      style={{ fontWeight: 'bold' }}
                    >
                      Any Feedback?
                    </label>
                    <textarea
                      rows={3}
                      cols={90}
                      type="textarea"
                      name="ratingfeedback"
                      id="ratingfeedback"
                      onChange={(e) => {
                        setRatingMessage(e.target.value);
                      }}
                    />
                    <Button
                      size="sm"
                      className="btn btn-pills btn-primary"
                      style={{ marginTop: '5px' }}
                      disabled={ratingStatus}
                       onClick={(e) => {
                        setRatingStatus(true);
                        endpoint
                          .postIAM(getCompletions().updateCompletionRating, {
                            userglobaluuid,
                            completionid: completionId,
                            rating,
                            feedback: ratingMessage,
                          })
                          .then((res) => {
                            if (res.data.success === true) {
                              setCompletionsThisMonth(res.data.count);
                              setRatingSuccessColor('success');
                              setRatingSuccessMsg('Thank you for your feedback.');
                            } else {
                              setRatingSuccessColor('danger');
                              setRatingSuccessMsg(
                                'Error: Could not record your rating',
                              );
                            }

                            setRatingSuccess(true);
                            setRatingStatus(false);
                            setInterval(function () {
                              setRatingSuccess(false);
                          }, 5000);
                          })
                          .catch((err) => {
                            console.error(err);
                            setRatingSuccessColor('danger');
                            setRatingSuccessMsg(
                              'Error: Could not record your rating',
                            );
                            setRatingStatus(false);
                            setRatingSuccess(true);
                            setInterval(function () {
                              setRatingSuccess(false);
                          }, 5000);
                          });
                      }}
                    >
                      {(ratingStatus === true ? "Updating Feedback" : "Save Feedback")}
                    {ratingStatus === true ? (
                      <Ionicon
                        style={{ marginLeft: '5px' }}
                        color="#ffffff"
                        icon="ios-analytics-outline"
                        beat={ratingStatus}
                      />
                    ) : (
                      ''
                    )}
                    </Button>
                  </div>
                </div>
              ) : (
                ''
              )}
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default PageProfile;

