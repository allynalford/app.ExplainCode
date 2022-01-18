/*jshint esversion: 8 */
import React, { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Alert,
  Label,
  InputGroup,
  InputGroupAddon,
  Input
} from "reactstrap";
import Select from 'react-select';
import copy from 'copy-to-clipboard';
//Import Images
import { useAuth0 } from '@auth0/auth0-react';
import { themes, sqlTypes } from './config';
import { getGTP3, getCompletions, getTier, getUser } from '../../../common/config';
import { updateRating } from '../../../common/slack';
import ReactStars from "react-rating-stars-component";
import Ionicon from 'react-ionicons';
import { Helmet } from "react-helmet";
import MainSideBar from '../../../components/Layout/sidebar';
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-mysql";
import "ace-builds/src-noconflict/mode-markdown";
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
var ace = require('ace-builds');
// use ace.require to get internal modules
ace.config.set("themePath","../static/js");
ace.config.set("basePath","../static/js");
ace.config.set("modePath","../static/js");
//const dateFormat = require('dateformat');

function EnglishToSql(props, {history}) {
 
  const { user } = useAuth0();
  const { email } = user;
  const { userglobaluuid,  theme:UserTheme} = user[process.env.REACT_APP_AUTH0_USER_METADATA];
  const [userProfile, setUserProfile] = useState({});
  const exampleDataSet = "Employee: id, name, department_id\n"+
                         "Department: id, name, address\n" +
                         "Salary_Payments: id, employee_id, amount, date";
  //const exampleDescription = "update all employees salaries in the department named test by 1,000";
  const exampleDescription = "get all employees in the department named test with a salary amount greater then 1000";                       
  const cachedDataSet = (sessionStorage.getItem('cachedDataSet') === null ? exampleDataSet : sessionStorage.getItem('cachedDataSet'));
  const cachedDescription = (sessionStorage.getItem('cachedDescription') === null ? exampleDescription : sessionStorage.getItem('cachedDescription'));
  const defaultSqlType =  _.find(sqlTypes, ['value', 'SELECT']);
  const cachedSqlType = (sessionStorage.getItem('cachedSqlType') === null ? defaultSqlType : sessionStorage.getItem('cachedSqlType'));
  const temp = 0.02;
  const suggestions = 1;

  
  const [maxExplanations, setMaxExplanations] = useState(0);
  const monthStamp = dateFormat(new Date(), "yyyy-mm");
  const [theme, setTheme] = useState(UserTheme);

  const [type, setType] = useState(cachedSqlType.value);
  const [dataSet, setDataSet] = useState(cachedDataSet);
  const [description, setDescription] = useState(cachedDescription);
  const [generatedSQL, setGeneratedSQL] = useState("");
  const [rating, setRating] = useState(0);
  const [ratingMessage, setRatingMessage] = useState("");
  const [ratingSuccess, setRatingSuccess] = useState(false);

  const [promptResponse, setPromptResponse] = useState("");

  const [toolObj, setToolObj] = useState({tips:[]});
  const [loading, setLoading] = useState(false);
  const [completionId, setCompletionId] = useState("");
  const [completionsThisMonth, setCompletionsThisMonth] = useState(0);
  const [ratingSuccessColor, setRatingSuccessColor] = useState("primary");
  const [ratingSuccessMsg, setRatingSuccessMsg] = useState("");
  const [ratingStatus, setRatingStatus]  = useState(false);
  const [copied, setCopied] = useState(false);
  const [isMessage, setIsMessage] = useState(false);
  const [message, setMessage] = useState("");
  const [messageColor, setMessageColor] = useState("info");
  const [themeOption, setThemeOption] = useState({});

 

  //Subscription
  const [hasPlan, setHasPlan] = useState(false);
  const [isTrial, setIsTrial] = useState(false);
  const [systemEnabled, setSystemEnabled] = useState((process.env.REACT_APP_SYSTEM_ACCESS_OPEN === "false" ? false : true));
  const [daysRemaining, setDaysRemaining] = useState(undefined);
  const [tier, setTier] = useState(undefined);




  useEffect(() => {
    try {
      document.title = "Explain Code App - English to SQL";
      if(document.getElementById('top-menu') !== null){
        document.getElementById('top-menu').classList.add('nav-light');
      }

      document.querySelector('#editor > textarea').setAttribute('aria-label', 'Generated SQL');
     
       
      window.addEventListener('scroll', scrollNavigation, true);

      endpoint.postIAM(getUser().getUserApiUrl, {email, userglobaluuid}).then((res) => {
        setUserProfile(res.data.user);

        //console.log(res.data.user);

        const user = res.data.user;
        setTier(res.data.user.tier);
        const tier = getTier(res.data.user.tier);

        //console.log(tier);

        //If they are on a free trial
        if(user.tier === "trial" | user.tier === "earlyaccess"){
          //Check length remains
          var diffDays = parseInt((new Date() - new Date(user.creationDateTime)) / (1000 * 60 * 60 * 24));
          const daysLeft = (tier.days - diffDays);
          
          setIsTrial(true);

          if(diffDays <= tier.days){
            setSystemEnabled(true);
            setMaxExplanations(tier.explanations);
          }else{
            setMaxExplanations(0);
          }

          setDaysRemaining(daysLeft);

        }else if(user.tier === "free"){
          setSystemEnabled(true);
          setMaxExplanations(tier.explanations);
        }else{

          setMaxExplanations(tier.explanations);

          if(user.subscriptionActive === true | user.subscriptionActive === "active"){
            setHasPlan(true);
            setSystemEnabled(true);
          }
        }

      }).catch((err) => {
        console.error(err);
      });

      var cachedSettings = sessionStorage.getItem('cachedSettings');

      console.log(JSON.parse(cachedSettings))

      if(typeof cachedSettings !== "undefined" && cachedSettings !== null){
        cachedSettings = JSON.parse(cachedSettings);
        setTheme(cachedSettings.theme);
        const themeOption = _.find(themes, ['value', cachedSettings.theme]);
        setThemeOption(themeOption);
      }else{
        setTheme(UserTheme);
        const themeOption = _.find(themes, ['value', UserTheme]);
        setThemeOption(themeOption);
      }

    } catch (e) {
      console.error(e);
    }

    return () => {
      window.removeEventListener("scroll", scrollNavigation, true);
      sessionStorage.removeItem('cachedDescription');
      sessionStorage.removeItem('cachedDataSet');
      sessionStorage.removeItem('cachedSqlType');
    };
  }, []);

  useEffect(() => {
  
    return () => {

    };
  }, [ completionsThisMonth, maxExplanations ]);

  useEffect(() => {
   
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
      let cachedSettings = sessionStorage.getItem('cachedSettings');
      cachedSettings = JSON.parse(cachedSettings);
      cachedSettings.theme = theme;
      sessionStorage.setItem('cachedSettings', JSON.stringify(cachedSettings));
    }
    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [theme]);







  useEffect(() => {

    //console.log('code', question);
    if(typeof dataSet !== "undefined" && dataSet !== null){
     
      sessionStorage.setItem('cachedDataSet', dataSet);
    }
    return () => {
    };
  }, [dataSet]);

  useEffect(() => {

    //console.log('code', question);
    if(typeof description !== "undefined" && description !== null){
     
      sessionStorage.setItem('cachedDescription', description);
    }
    return () => {
    };
  }, [description]);

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


  function onDatSetChange(newValue) {
    setDataSet(newValue);
    sessionStorage.setItem('cachedDataSet', newValue);
  }

  function onDescriptionChange(newValue) {
    setDescription(newValue);
    sessionStorage.setItem('cachedDescription', newValue);
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
    //console.log({completionsThisMonth, maxExplanations})
   
    if(maxExplanations !== 0 && completionsThisMonth >= maxExplanations){

      window._dcq.push(
        [
          "track", `No Explanations Remain`,
          { key: prompt }
        ]
      );

      Swal.fire({
        title: 'No Explanations Remain',
        html: `No explanations remaining. Please upgrade your subscription to generate more explanations` +
        '<br /><a href="/subscriptions">View Subscriptions</a> ',
        icon: 'error',
        confirmButtonText: 'View Subscriptions',
        denyButtonText: `Cancel`,
        confirmButtonAriaLabel: 'View Subscriptions',
        showCloseButton: true,
        showCancelButton: true,
        focusConfirm: false,
        cancelButtonText:'Cancel',
        cancelButtonAriaLabel: 'Cancel'
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          window.location = '/subscriptions';
        } else{
          setLoading(false);
        }
      })
    }else if(systemEnabled === false){

      window._dcq.push(
        [
          "track", `Subscription Needed`,
          { key: prompt }
        ]
      );

      Swal.fire({
        title: 'Subscription Needed',
        html:
        `${(isTrial === true ? "Your trial period has come to an end. <br /> Add a subscription to continue using Explain Code App" : "You'll need a plan to generate an explanation.")}<br />` +
        '<a href="/subscriptions">View Subscriptions</a> ',
        icon: 'info',
        confirmButtonText: 'View Subscriptions',
        denyButtonText: `Cancel`,
        confirmButtonAriaLabel: 'View Subscriptions',
        showCloseButton: true,
        showCancelButton: true,
        focusConfirm: false,
        cancelButtonText:'Cancel',
        cancelButtonAriaLabel: 'Cancel'
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          window.location = '/subscriptions';
        }else{
          setLoading(false);
        }
      })

    }else{
      setRating(0)
      setRatingMessage('');
      setCompletionId("");

      window._dcq.push(
        [
          "track", `Explanation Request`,
          { key: prompt }
        ]
      );


      let resp, text;
      resp = await endpoint.postIAM(getGTP3().post_EnglishToSql_Prompt, {type, temp, suggestions, dataSet, desc: description,userglobaluuid});
     
      if(typeof resp.data === "undefined"){
        console.error(resp.data)
        setIsMessage(true)
        setMessage("We could not generate SQL.");
        setMessageColor('danger');
        setInterval(function () {
          setIsMessage(false);
        }, 3500);

        setLoading(false);
      }else if(resp.data.error === true){
        console.error(resp.data);
        setIsMessage(true)
        setMessage("We could not generate SQL.");
        setMessageColor('danger');
        setInterval(function () {
          setIsMessage(false);
        }, 3500);


        setLoading(false);
      }else{
              
      text = type + resp.data.explanation.choices[0].text;


      if(type === "SELECT"){
        text = text.replace(/FROM/i, '\nFROM');
      }else if(type === "UPDATE"){
        text = text.replace(/SET/i, "\nSET");
        text = text.replace(/WHERE/i, '\nWHERE');
      }else if(type === "DELETE"){
        text = text.replace(/FROM/i, '\nFROM');
        //text = text.replace(/WHERE/i, '\nWHERE');
      }
      
      
      

        setGeneratedSQL(text);
        setCompletionId(resp.data.explanation.id);
        getUserCompletionCount(userglobaluuid);
        setPromptResponse(text);
        setIsMessage(true)
        setMessage("SQL Generated.");
        setMessageColor('info');
        setInterval(function () {
          setIsMessage(false);
        }, 3500);
        setLoading(false);
      }

    };
    
  };


  return (
    <React.Fragment>
      <Helmet>
        <title>Explain Code App -  Dashboard</title>
        <meta
          name="description"
          content={toolObj.desc}
        />
        <meta
          name="keywords"
          content="Tool Dashboard, Nodejs, Go, golang, SQL, Python, liquid, code, programming code, code translator, explain code, understand code, programming, javascript, java, GPT-3, code explainer, code review, code examples, code documentation, bad code examples, software examples, example code"
        />
        <meta name="twitter:title" content="Explain Code App Tool Dashboard" />
        <meta name="twitter:image:alt" content="Explain Code App: Tool Dashboard" />
        <meta property="og:title" content="Explain Code App - Tool Dashboard" />
        <meta property="og:description" content="Explain Code App Tool Dashboard." />
      </Helmet>
      {/* <ProfileHeader /> */}
      <section className="section mt-60">
        <Container className="mt-lg-3">
          <Row>
            <Col lg="3" md="6" xs="12" className="d-lg-block d-none">
            <MainSideBar userglobaluuid={userglobaluuid} daysRemaining={daysRemaining} tier={tier}/>
            </Col>

            <Col lg="9" md="7" xs="12" id="maincontent">
              <div className="border-bottom pb-4">
                <Row>
                  <Col md="6">
                    <div className="mt-4 mb-0">
                      <h2>English to SQL</h2>
                      {/* <p className="text mb-0">
                       Translate natural language to SQL queries
                      </p> */}
                    </div>
                  </Col>
                  <Col md="6">
                    <Row>
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
                            })}
                            id="themes"
                            options={themes}
                            value={themeOption}
                            onChange={(opt) => {
                              setTheme(opt.value);
                              setThemeOption(opt);
                              let current = sessionStorage.getItem('cachedSettings');
                              current = JSON.parse(current);
                              console.log(current);
                              if(current !== null){
                                //localStorage.removeItem('cachedSettings');
                                sessionStorage.setItem('cachedSettings', JSON.stringify({mode:current.mode, theme: opt.value}));
                              }else{
                                sessionStorage.setItem('cachedSettings', JSON.stringify({mode:'mysql', theme: opt.value}));
                              }

                              
                            }}
                          ></Select>
                        </div>
                      </Col>
                    </Row>
                  </Col>
                  <Col md="12">
                    <Row>
                    <Col md="12">
                      <p className="text mb-0" style={{fontWeight: 'bold'}}>List tables and columns in the following format</p>
                      <pre>
                      table1: col1, col2, col3<br />
                      table2: col1, col2, col3
                      </pre>
                      </Col>
                      <Col md="6">
                        <div className="mt-4 mb-0">
                          <label htmlFor="dataset" style={{ fontWeight: 'bold' }}>
                            Tell us about your dataset:
                          </label><br />
                          <textarea
                            aria-label="Enter Question about code snippet"
                            rows={5}
                            cols={50}
                            type="textarea"
                            name="dataset"
                            id="dataset"
                            value={dataSet}
                            onChange={(e) => {
                              setDataSet(e.target.value);
                              localStorage.setItem('cachedDataSet', e.target.value);
                            }}
                          />

                        </div>
                      </Col>
                      <Col md="6">
                        <div className="mt-4 mb-0">
                          <label htmlFor="description" style={{ fontWeight: 'bold' }}>
                           Describe what you'd like to do:
                          </label><br />
                          <textarea
                            aria-label="Describe what you'd like to do"
                            rows={5}
                            cols={50}
                            type="textarea"
                            name="description"
                            id="description"
                            value={description}
                            onChange={(e) => {
                              setDescription(e.target.value);
                              localStorage.setItem('cachedDataSet', e.target.value);
                            }}
                          />
                        </div>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </div>
              <div className="border-bottom pb-4">
                <div>
                  <InputGroup>
                  <Input
                        aria-label={'Select an Language'}
                        aria-required={'true'}
                        className="form-control"
                        id="modes-select"
                        onChange={(opt) => {
                          setType(opt.target.value);
                          sessionStorage.setItem('cachedSqlType', {value: opt.target.value, label: opt.target.label});
                        }}
                        type='select'
                        value={type}
                        disabled={loading}
                      >
                       
                        {sqlTypes.map(option => (
                          <option key={option.value} value={option.value}>{option.label}</option>
                        ))}
                      </Input>
                  <InputGroupAddon addonType='prepend'>
                    <div className='input-group-text'>
                      <Button
                        style={{ marginTop: '5px', backgroundColor: '#008000' }}
                        disabled={(loading === true | typeof description === "undefined" | typeof dataSet === "undefined" ? true : false)}
                        onClick={e => {
                          onRunPrompt();
                        }}
                        className="btn btn-pills btn-primary"
                      >
                        Generate
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
                        disabled={(loading === true | typeof generatedSQL === "undefined" ? true : false)}
                        onClick={(e) => {
                          copy(generatedSQL);
                          setIsMessage(true)
                          setMessage("SQL copied to clipboard.");
                          setMessageColor('info');
                          setInterval(function () {
                            setIsMessage(false);
                          }, 3500);
                        }}
                        className="btn btn-pills btn-secondary"
                      >
                        Copy SQL
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
                        disabled={(loading === true | typeof generatedSQL === "undefined" ? true : false)}
                        onClick={(e) => {
                          setGeneratedSQL("");
                          //setDescription("");
                          //setDataSet("")
                        }}
                        className="btn btn-pills btn-danger"
                      >
                        Reset
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

                <Alert
                  color={messageColor}
                  isOpen={isMessage}
                  toggle={() => {
                    setIsMessage(false);
                  }}
                >
                  {message}
                </Alert>
              </div>
              <div className="border-bottom pb-4">
                <label htmlFor="editor" style={{fontSize: '18px', fontWeight: 'bold'}}>Generated SQL</label>
                    
                <AceEditor
                  id="editor"
                  title="Generated SQL"
                  aria-label="Generated SQL"
                  readOnly={loading}
                  style={{ width: 'auto' }}
                  placeholder="SQL will be generated here"
                  mode={'mysql'}
                  theme={theme}
                  name="editor"
                  fontSize={16}
                  showPrintMargin={false}
                  showGutter={true}
                  highlightActiveLine={true}
                  value={generatedSQL}
                  setOptions={{
                    useWorker:true,
                    enableBasicAutocompletion: true,
                    enableLiveAutocompletion: false,
                    enableSnippets: true,
                    showLineNumbers: true,
                    tabSize: 2,
                  }}
                />
               
                 
              </div>
              {completionId !== '' ? (
              <div
                className="border-bottom pb-4"
                style={{ position: 'relative' }}
              >

                
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
              
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default EnglishToSql;

