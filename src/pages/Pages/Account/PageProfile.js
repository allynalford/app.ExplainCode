/*jshint esversion: 8 */
import React, { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Alert,
  Label,
  CardBody,
  Card,
  CardHeader,
  CardFooter,
  InputGroup,
  InputGroupAddon,
  Input
} from "reactstrap";
import Select from 'react-select';
import copy from 'copy-to-clipboard';
//Import Images
import { useAuth0 } from '@auth0/auth0-react';
import { modes, themes, getPrompts, TOOLS} from './config';
import { getGTP3, getCompletions, getSnippets, getTier, getUser } from '../../../common/config';
import { updateRating } from '../../../common/slack';
import ReactStars from "react-rating-stars-component";
import Ionicon from 'react-ionicons';
import { Helmet } from "react-helmet";
import FormLoader from '../../../components/FormLoader';
import MainSideBar from '../../../components/Layout/sidebar';
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
var Swal = require('sweetalert2');
//const dateFormat = require('dateformat');

function PageProfile({history}) {
 
  const { user } = useAuth0();
  const { email } = user;
  const { userglobaluuid, mode:UserMode, theme:UserTheme, tier} = user[process.env.REACT_APP_AUTH0_USER_METADATA];
  const [userProfile, setUserProfile] = useState({});
  const cachedCode = (sessionStorage.getItem('cachedCode') === null ? undefined : sessionStorage.getItem('cachedCode'));
  const cachedQuestion = (sessionStorage.getItem('cachedQuestion') === null ? undefined : sessionStorage.getItem('cachedQuestion'));
  const [codeMaxLength, setCodeMaxLength] = useState(500);
  const [maxExplanations, setMaxExplanations] = useState(0);
  const monthStamp = dateFormat(new Date(), "yyyy-mm");
  const [theme, setTheme] = useState(undefined);
  const [mode, setMode] = useState(undefined);
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
  const [tools] = useState(TOOLS);
  const [toolObj, setToolObj] = useState({tips:[]});
  const [loading, setLoading] = useState(false);
  const [completionId, setCompletionId] = useState("");
  const [completionsThisMonth, setCompletionsThisMonth] = useState(0);
  const [ratingSuccessColor, setRatingSuccessColor] = useState("primary");
  const [ratingSuccessMsg, setRatingSuccessMsg] = useState("");
  const [ratingStatus, setRatingStatus]  = useState(false);
  const [copied, setCopied] = useState(false);
  const [copiedSnippet, setCopiedSnippet] = useState(false);
  const [snippetMessage, setSnippetMessage] = useState("");
  const [snippetMessageColor, setSnippetMessageColor] = useState("info");
  const [themeOption, setThemeOption] = useState({});
  const [modeOption, setModeOption] = useState({});
  const [snippetuuid, setSnippetuuid] = useState(undefined);

  //Subscription
  const [hasPlan, setHasPlan] = useState(false);
  const [isTrial, setIsTrial] = useState(false);
  const [systemEnabled, setSystemEnabled] = useState(false);



  useEffect(() => {
    try {
      document.title = "Explain Code App - Dashboard";
      if(document.getElementById('top-menu') !== null){
        document.getElementById('top-menu').classList.add('nav-light');
      }
      
      window.addEventListener('scroll', scrollNavigation, true);

      endpoint.postIAM(getUser().getUserApiUrl, {email, userglobaluuid}).then((res) => {
        setUserProfile(res.data.user);
        console.log(res.data)
        console.log(getTier(res.data.user.tier));
        const user = res.data.user;
        const tier = getTier(res.data.user.tier);

        //If they are on a free trial
        if(user.tier === "trial" | user.tier === "earlyaccess"){
          //Check length remains
          var diffDays = parseInt((new Date() - new Date(user.creationDateTime)) / (1000 * 60 * 60 * 24));

          console.log(diffDays);

          if(diffDays <= tier.days){
            setIsTrial(true);
            setSystemEnabled(true);
            setMaxExplanations(tier.explanations);
          }else{
            setMaxExplanations(0);
          }
        }else{

          setMaxExplanations(tier.explanations);

          if(user.subscriptionActive === true){
            setHasPlan(true);
            setSystemEnabled(true);
          }
        }


        
        setCodeMaxLength(tier.codelength);
        
        console.log(user);

      }).catch((err) => {
        console.error(err);
      });

      var cachedSettings = sessionStorage.getItem('cachedSettings');

      if(typeof cachedSettings !== "undefined" && cachedSettings !== null){
        cachedSettings = JSON.parse(cachedSettings);
        setMode(cachedSettings.mode);
        setTheme(cachedSettings.theme);
      }else{
        setMode(UserMode);
        setTheme(UserTheme);
      }
      const prompts = getPrompts(window.location);
      const toolObj = _.find(prompts, ['tool', prompt]);
      setToolObj(toolObj);
     

    } catch (e) {
      console.error(e);
    }

    return () => {
      window.removeEventListener("scroll", scrollNavigation, true);
      sessionStorage.removeItem('cachedCode');
      sessionStorage.removeItem('cachedQuestion');
      //localStorage.removeItem('cachedSettings');
    };
  }, [email, prompt, userglobaluuid]);

  useEffect(() => {
  
    return () => {

    };
  }, [ completionsThisMonth, maxExplanations, codeMaxLength ]);

  useEffect(() => {
  

    console.log(systemEnabled);

    return () => {

    };
  }, [ systemEnabled ]);


  useEffect(() => {
    if (typeof userglobaluuid !== "undefined") {
      getUserCompletionCount(userglobaluuid);
    return () => {

    }
  }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ userglobaluuid ]);

  useEffect(() => {
    if (typeof mode !== 'undefined') {
      const themeOption = _.find(themes, ['value', theme]);
      setThemeOption(themeOption);
      const modeOption = _.find(modes, ['value', mode]);
      setModeOption(modeOption);
      const cachedSettings = {
        mode,
        theme,
      };
      sessionStorage.setItem('cachedSettings', JSON.stringify(cachedSettings));
    }
    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mode, theme]);


  useEffect(() => {
    
    const toolParam = new URLSearchParams(window.location.search).get("tool");
    
    if(toolParam !== null && toolParam !== tool){

      const isItemInSet = tools.has(toolParam);
      const prompts = getPrompts(window.location);
     
      if(!isItemInSet){
        window.history.replaceState(
          null,
          null,
          `/dashboard?tool=Summarize`
        );
        setTool('Summarize');
        setPrompt('Summarize');
        const toolObj = _.find(prompts, ['tool', 'Summarize']);
        setToolObj(toolObj);
      }else{
        setTool(toolParam.replace("-", " "));
        setPrompt(toolParam);
        const toolObj = _.find(prompts, ['tool', toolParam]);
        setToolObj(toolObj);
      }
    }
    var cachedSettings = sessionStorage.getItem('cachedSettings');
    if(typeof cachedSettings !== "undefined" && cachedSettings !== null){
      cachedSettings = JSON.parse(cachedSettings);
      setMode(cachedSettings.mode);
      setTheme(cachedSettings.theme);
    }

    return () => {
    };
  },[tool, tools]);


  useEffect(() => {

    //console.log('code',code);
    if(typeof code !== "undefined" && code !== null){
      //console.log('storing code');

      sessionStorage.setItem('cachedCode', code);

     // console.log('reading code', localStorage.getItem('cachedCode'))
      setCodeLength(code.length);
      if(code.length >= codeMaxLength){
        console.log({length: code.length, codeMaxLength});
        setCodeLengthColor('red');
      }else{
        setCodeLengthColor('black');
      }
    }
    return () => {
    };
  }, [ code ]);

  useEffect(() => {

    //console.log('code', question);
    if(typeof question !== "undefined" && question !== null){
     
      sessionStorage.setItem('cachedQuestion', question);
    }
    return () => {
    };
  }, [question]);

  const scrollNavigation = () => {
    try{
      var doc = document.documentElement;
      var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
      if (top > 80) {
        document.getElementById("topnav").classList.add("nav-sticky");
      } else {
        document.getElementById("topnav").classList.remove("nav-sticky");
      }
    }catch(e){
      console.error(e);
    }
  };


  function onChange(newValue) {
    setCode(newValue);
    sessionStorage.setItem('cachedCode', newValue);
  }

  function capitalizeFirstLetter(string) {
    try{
      return string.charAt(0).toUpperCase() + string.slice(1);
    }catch(e){
      return string;
    }
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
    console.log(systemEnabled);

    Swal.fire({
      title: 'Email already exists!',
      text: 'Please login or use forgot password to reset your password.',
      icon: 'error',
      confirmButtonText: 'Ok',
    });

    // setCopiedSnippet(true);
    // setSnippetMessage(`Code Snippet length of ${codeLength} is greater than ${codeMaxLength}`);
    // setSnippetMessageColor('danger')
    // setInterval(function () {
    //   setCopiedSnippet(false);
    // }, 15500);

    if(systemEnabled === false){

    }else{
      setRating(0)
      setRatingMessage('');
      setCompletionId("");
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
        case 'Code-Comment':
          resp = await endpoint.postIAM(getGTP3().post_javadoc_comment_Prompt, {code, lang: mode, userglobaluuid, type: 'code'});
          text = resp.data.explanation.choices[0].text;
          const startText = text.indexOf('/**');
          const stopText = text.lastIndexOf('*/') + 2;
          const comment = text.substring(startText, stopText);
          if(comment !== "") text = comment;
          setCompletionId(resp.data.explanation.id);
          break;
        case 'Class-Breakdown':
          break;
        default:
          console.log(`Sorry, we are out of ${prompt}.`);
      }
      getUserCompletionCount(userglobaluuid);
      setPromptResponse(text);
      

    };

    setLoading(false);
  };


  return (
    <React.Fragment>
      <Helmet>
        <title>Explain Code App - Tool Dashboard</title>
        <meta
          name="description"
          content={toolObj.desc}
        />
        <meta
          name="keywords"
          content="Nodejs, Go, golang, SQL, Python, liquid, code, programming code, code translator, explain code, understand code, programming, javascript, java, GPT-3, code explainer, code review, code examples, code documentation, bad code examples, software examples, example code"
        />
        <meta name="twitter:title" content="Explain Code App dashboard" />
        <meta name="twitter:image:alt" content="Explain Code App: dashboard" />
        <meta property="og:title" content="Explain Code App - Dashboard" />
        <meta property="og:description" content="Explain Code App dashboard." />
      </Helmet>
      {/* <ProfileHeader /> */}
      <section className="section mt-60">
        <Container className="mt-lg-3">
          <Row>
            <Col lg="3" md="6" xs="12" className="d-lg-block d-none">
            <MainSideBar userglobaluuid={userglobaluuid} />
            </Col>

            <Col lg="9" md="7" xs="12" id="maincontent">
              <div className="border-bottom pb-4">
                <Row>
                  <Col md="6">
                    <div className="mt-4 mb-0">
                      <h2>{toolObj.title}</h2>
                      <p className="text mb-0">
                       {toolObj.desc}
                      </p>
                      <ul>
                        <li>
                          Language:{' '}
                          {mode === 'mysql'
                            ? 'SQL'
                            : capitalizeFirstLetter(mode)}
                        </li>
                        <li>Theme: {theme}</li>
                        <li>Tips:
                          <ul>
                          {toolObj.tips.map((tip, key) => (
                            <li key={key}>{tip}</li>
                          ))}
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </Col>
                  <Col md="6">
                    <Row>
                      {/* <Col md="12">
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
                              setModeOption(opt);
                              localStorage.setItem('cachedSettings', {mode: opt.value, theme});
                            }}
                          ></Select>
                        </div>
                      </Col> */}
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
                              localStorage.setItem('cachedSettings', {mode, theme: opt.value});
                            }}
                          ></Select>
                        </div>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </div>

              <div className="border-bottom pb-4">
                <label htmlFor="editor">Enter your code snippet</label>
                    
                <AceEditor
                  id="editor"
                  title="Enter your code snippet"
                  aria-label="YEnter your code snippet"
                  readOnly={loading}
                  style={{ width: 'auto' }}
                  placeholder="Enter your code snippet"
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
               
                {prompt !== 'Open-Questions' ? (
                  <div>
                    <Label for="modes-select">Code Snippet Language</Label>
                    <InputGroup>
                      <Input
                        aria-label={'Select an Language'}
                        aria-required={'true'}
                        className="form-control"
                        id="modes-select"
                        onChange={(opt) => {
                          setMode(opt.target.value);
                          var selectedOption = _.find(modes, ['value', opt.target.value]);
                          setModeOption(selectedOption);
                          localStorage.setItem('cachedSettings', {mode: opt.target.value, theme});
                        }}
                        type='select'
                        value={mode}
                        disabled={loading}
                      >
                       
                        {modes.map(option => (
                          <option key={option.value} value={option.value}>{option.label}</option>
                        ))}
                      </Input>
                      <InputGroupAddon addonType='prepend'>
                          <div className='input-group-text'>
                          <Button
                      style={{ marginTop: '5px', backgroundColor: '#008000' }}
                      disabled={(loading === true | typeof code === "undefined" ? true : false)}
                      onClick={ e =>{
                        if(codeLength > codeMaxLength){
                          setCopiedSnippet(true);
                          setSnippetMessage(`Code Snippet length of ${codeLength} is greater than ${codeMaxLength}`);
                          setSnippetMessageColor('danger')
                          setInterval(function () {
                            setCopiedSnippet(false);
                          }, 15500);
                        }else{
                          onRunPrompt();
                        }
                      }}
                      className="btn btn-pills btn-primary"
                    >
                      Explain Snippet
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
                      onClick={e =>{
                        setLoading(true);
                        if(typeof snippetuuid !== "undefined"){
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
                        }else{
                          
                          //run save
                          endpoint.postIAM(getSnippets().saveSnippet, {
                            userglobaluuid,
                            lang: mode,
                            snippet: code
                          }).then((res) => {
                            if (res.data.success === true) {
                              setSnippetuuid(res.data.snippetuuid);
                              setLoading(false);
                            } else {
                              console.log(res);
                              setLoading(false);
                            }
                          })
                          .catch((err) => {
                            console.error(err);
                            setLoading(false);
                          });
                        }
                      }}
                      className="btn btn-pills btn-info"
                    >
                      {(typeof snippetuuid !== "undefined" ? "Update Snippet" : "Save Snippet")}
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
                        setSnippetMessage("Code Snippet copied to clipboard.");
                        setSnippetMessageColor('info');
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
                          </div>
                        </InputGroupAddon>
                    </InputGroup>
                    {/* <Button
                      style={{ marginTop: '5px', backgroundColor: '#008000' }}
                      disabled={(loading === true | typeof code === "undefined" ? true : false)}
                      onClick={onRunPrompt}
                      className="btn btn-pills btn-primary"
                    >
                      Explain Snippet
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
                    </Button> */}

                    {/* <Button
                      style={{ marginTop: '5px', marginLeft: '10px' }}
                      disabled={(loading === true | typeof code === "undefined" ? true : false)}
                      onClick={e =>{
                        setLoading(true);
                        if(typeof snippetuuid !== "undefined"){
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
                        }else{
                          
                          //run save
                          endpoint.postIAM(getSnippets().saveSnippet, {
                            userglobaluuid,
                            lang: mode,
                            snippet: code
                          }).then((res) => {
                            if (res.data.success === true) {
                              setSnippetuuid(res.data.snippetuuid);
                              setLoading(false);
                            } else {
                              console.log(res);
                              setLoading(false);
                            }
                          })
                          .catch((err) => {
                            console.error(err);
                            setLoading(false);
                          });
                        }
                      }}
                      className="btn btn-pills btn-info"
                    >
                      {(typeof snippetuuid !== "undefined" ? "Update Snippet" : "Save Snippet")}
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
                    </Button> */}
                  </div>
                ) : (
                  ''
                )}
                <p style={{ color: codeLengthColor, fontWeight: 'bold' }}>
                  {codeLength} / {codeMaxLength}
                </p>
                <Alert
                    color={snippetMessageColor}
                    isOpen={copiedSnippet}
                    toggle={() => {
                      setCopiedSnippet(false);
                    }}
                  >
                    {snippetMessage}
                  </Alert>
              </div>
              {prompt === 'Open-Questions' ? (
                <div className="border-bottom pb-4">
                  <div style={{ marginTop: '5px' }}>
                    <label htmlFor="question" style={{ fontWeight: 'bold' }}>
                      Enter Question:
                    </label><br />
                    <textarea
                      aria-label="Enter Question about code snippet"
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
                    <Label for="modes-select">Code Snippet Language</Label>
                    <InputGroup>
                      <Input
                        aria-label={'Select an Language'}
                        aria-required={'true'}
                        className="form-control"
                        id="modes-select"
                        onChange={(opt) => {
                          setMode(opt.target.value);
                          var selectedOption = _.find(modes, ['value', opt.target.value]);
                          setModeOption(selectedOption);
                          localStorage.setItem('cachedSettings', {mode: opt.target.value, theme});
                        }}
                        type='select'
                        value={mode}
                        disabled={loading}
                      >
                       
                        {modes.map(option => (
                          <option key={option.value} value={option.value}>{option.label}</option>
                        ))}
                      </Input>
                      <InputGroupAddon addonType='prepend'>
                          <div className='input-group-text'>
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
                    <Button
                      style={{ marginTop: '5px', marginLeft: '10px' }}
                      disabled={(loading === true | typeof code === "undefined" ? true : false)}
                      onClick={e =>{
                        setLoading(true);
                        if(typeof snippetuuid !== "undefined"){
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
                        }else{
                          
                          //run save
                          endpoint.postIAM(getSnippets().saveSnippet, {
                            userglobaluuid,
                            lang: mode,
                            snippet: code
                          }).then((res) => {
                            if (res.data.success === true) {
                              setSnippetuuid(res.data.snippetuuid);
                              setLoading(false);
                            } else {
                              console.log(res);
                              setLoading(false);
                            }
                          })
                          .catch((err) => {
                            console.error(err);
                            setLoading(false);
                          });
                        }
                      }}
                      className="btn btn-pills btn-info"
                    >
                      {(typeof snippetuuid !== "undefined" ? "Update Snippet" : "Save Snippet")}
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
                        setSnippetMessage("Code Snippet copied to clipboard.");
                        setSnippetMessageColor('info');
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
                          </div>
                        </InputGroupAddon>
                    </InputGroup>

                  </div>


                </div>
              ) : (
                ''
              )}
              <h5 className="mt-4 mb-0">Explanation:</h5>
              <div
                className="border-bottom pb-4"
                style={{ position: 'relative' }}
              >
                
                <Card>
                  <CardHeader>
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
                    style={{ marginTop: '5px', marginBottom: '5px' }}
                    disabled={
                      (loading === true) | (completionId === '') ? true : false
                    }
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
                  </CardHeader>
                  <CardBody>
                    {(loading === true ? <FormLoader /> : <AceEditor
                  aria-label="Explanation of code"
                  style={{ width: 'auto' }}
                  placeholder="Explanation will appear here"
                  mode="html"
                  theme={theme}
                  name="editor-results"
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
                />)}
                  
                  </CardBody>
                  <CardFooter>
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
                            updateRating(email, completionId, rating, ratingMessage);
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
                    </label><br />
                    <textarea
                      aria-label="Enter feedback about explanation"
                      rows={3}
                      cols={90}
                      type="textarea"
                      name="ratingfeedback"
                      id="ratingfeedback"
                      onChange={(e) => {
                        setRatingMessage(e.target.value);
                      }}
                    /><br />
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
                              setRatingSuccessMsg(
                                'Thank you for your feedback.',
                              );
                              updateRating(email, completionId, rating, ratingMessage);
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
                      {ratingStatus === true
                        ? 'Sending Feedback'
                        : 'Send Feedback'}
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
                  </CardFooter>
                </Card>
              </div>
              
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default PageProfile;

