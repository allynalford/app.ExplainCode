import React, { Component } from 'react';
import {
  Container,
  Col,
  Row,
  TabContent,
  Nav,
  NavItem,
  TabPane,
  NavLink,
  Button,
} from 'reactstrap';
import classnames from 'classnames';
import { highlight, languages } from 'prismjs/components/prism-core';

import 'prismjs/components/prism-bash';
import 'prismjs/components/prism-markup-templating';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-markup';
import 'prismjs/components/prism-php';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-json';
import 'prismjs/components/prism-liquid';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-scss';
import 'prismjs/themes/prism.css';
import './styles.css';

export default class Quick extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: '1',
      codeLanguage: languages.js,
      codeLanguageID: 'js',
      NodeJsExplanation: false,
      PythonExplanation: false,
      SQLExplanation: false,
      LiquidExplanation: false,
    };
    this.toggleTab = this.toggleTab.bind(this);
    this.hightlightWithLineNumbers = this.hightlightWithLineNumbers.bind(this);
    this.WithoutLineNumbers = this.WithoutLineNumbers.bind(this);
    this.toggleExplanation = this.toggleExplanation.bind(this);
  }

  componentDidMount() { }

  shouldComponentUpdate(nextProps, nextState) {
    //console.log('Instance shouldComponentUpdate lifecycle');
    if (nextState !== this.state) {
      return true;
    } else {
      return false;
    }
  }

  componentDidUpdate(prevProps, prevState) { }

  toggleTab(tab) {
    this.setState({
      NodeJsExplanation: false,
      PythonExplanation: false,
      SQLExplanation: false,
      LiquidExplanation: false,
    });
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab,
      });
    }
  }

  toggleExplanation(name) {
    switch (name) {
      case 'nodejs':
        if (this.state.NodeJsExplanation !== true) {
          this.setState({
            NodeJsExplanation: true,
          });
        } else {
          this.setState({
            NodeJsExplanation: false,
          });
        }
        break;
      case 'python':
        if (this.state.PythonExplanation !== true) {
          this.setState({
            PythonExplanation: true,
          });
        } else {
          this.setState({
            PythonExplanation: false,
          });
        }
        break;
      case 'SQL':
        if (this.state.SQLExplanation !== true) {
          this.setState({
            SQLExplanation: true,
          });
        } else {
          this.setState({
            SQLExplanation: false,
          });
        }
        break;
      case 'liquid':
        if (this.state.LiquidExplanation !== true) {
          this.setState({
            LiquidExplanation: true,
          });
        } else {
          this.setState({
            LiquidExplanation: false,
          });
        }
        break;
      default:
        console.log(`Sorry, we are out of ${name}.`);
    }
  }

  hightlightWithLineNumbers = (input, language) => {
    highlight(input, language)
      .split('\n')
      .map((line, i) => `<span class='editorLineNumber'>${i + 1}</span>${line}`)
      .join('\n');
  };

  WithLineNumbers = (input, language) => {
    const Prism = require('prismjs');
    Prism.highlight(input, language)
      .split('\n')
      .map((line, i) => `<span class='editorLineNumber'>${i + 1}</span>${line}`)
      .join('\n');
  };

  WithoutLineNumbers = (input, language) => {
    const Prism = require('prismjs');
    return Prism.highlight(input, Prism.languages.javascript, 'javascript');
  };

  render() {
    return (
      <React.Fragment>
        <Container className="mt-100 mt-60">
          <Row className="row justify-content-center">
            <Col xs={12}>
              <div className="section-title text-center mb-4 pb-2">
                <h2 className="text-primary">How Explain Code App works</h2>
                <h3 className="title mb-4">Let's dive in!</h3>
                <p className="para-desc mx-auto text mb-0">
                  Explain Code app uses GPT-3 (ai) to explain your the code you provide. <br />Check out some samples
                </p>
              </div>
            </Col>
          </Row>

          <Row className="justify-content-center">
            <Col lg={8} mg={10} className="mt-4 pt-2">
              <div className="bg-dark bg-white-dark p-4 rounded shadow">
                <Row>
                  <Col lg={12}>
                    <Nav className="nav-pills nav-tabs nav-justified flex-column flex-sm-row rounded bg-soft-light">
                      <NavItem className="hover-border">
                        <NavLink
                          // className="nav-link nav-link-alt rounded active"
                          className={classnames(
                            { active: this.state.activeTab === '1' },
                            'rounded nav-link-alt',
                          )}
                          onClick={() => {
                            this.toggleTab('1');
                          }}
                        >
                          <div className="text-center">
                            <h4 className="title font-weight-normal mb-0">
                              NodeJS
                            </h4>
                          </div>
                        </NavLink>
                      </NavItem>

                      <NavItem className="hover-border">
                        <NavLink
                          // className="nav-link nav-link-alt rounded active"
                          className={classnames(
                            { active: this.state.activeTab === '2' },
                            'rounded nav-link-alt',
                          )}
                          onClick={() => {
                            this.toggleTab('2');
                          }}
                        >
                          <div className="text-center">
                            <h4 className="title font-weight-normal mb-0">
                              Python
                            </h4>
                          </div>
                        </NavLink>
                      </NavItem>

                      <NavItem className="hover-border">
                        <NavLink
                          // className="nav-link nav-link-alt rounded active"
                          className={classnames(
                            { active: this.state.activeTab === '3' },
                            'rounded nav-link-alt',
                          )}
                          onClick={() => {
                            this.toggleTab('3');
                          }}
                        >
                          <div className="text-center">
                            <h5 className="title font-weight-normal mb-0">
                              SQL
                            </h5>
                          </div>
                        </NavLink>
                      </NavItem>

                      {/* <NavItem className="hover-border">
                        <NavLink
                          className={classnames(
                            { active: this.state.activeTab === '4' },
                            'rounded nav-link-alt',
                          )}
                          onClick={() => {
                            this.toggleTab('4');
                          }}
                        >
                          <div className="text-center">
                            <h5 className="title font-weight-normal mb-0">
                              Liquid
                            </h5>
                          </div>
                        </NavLink>
                      </NavItem> */}
                    </Nav>
                  </Col>
                </Row>

                <Row>
                  <Col xs={12}>
                    <TabContent activeTab={this.state.activeTab}>
                      <TabPane tabId="1" className="fade show">
                        <pre className="text fw-bold mb-0">
                          <code className="language-javascript">
                            {
                              "var http = require('http');\nhttp.createServer(function (req, res) {\n    res.writeHead(200, {'Content-Type': 'text/plain'});\n    res.end('Hello Node.js World!');\n}).listen(8080);"
                            }
                          </code>
                        </pre>
                        <Button
                          name="nodejs"
                          onClick={(e) => this.toggleExplanation(e.target.name)}
                          className="btn btn-primary"
                          style={{marginTop: "10px"}}
                        >
                          Explain NodeJS Code
                        </Button>
                      </TabPane>

                      <TabPane className="fade show" tabId="2">
                        {/* {Prism.highlight("import time\n\ndef countdown(time_sec):\n    while time_sec:\n        mins, secs = divmod(time_sec, 60)\n        timeformat = '{:02d}:{:02d}'.format(mins, secs)\n        print(timeformat, end='\\r')\n        time.sleep(1)\n        time_sec -= 1\n\n    print(\"stop\")\n\ncountdown(5)", Prism.languages.python, 'python')}     */}
                        <pre className="text fw-bold mb-0">
                          <code className="language-python">
                            {
                              "import time\n\ndef countdown(time_sec):\n    while time_sec:\n        mins, secs = divmod(time_sec, 60)\n        timeformat = '{:02d}:{:02d}'.format(mins, secs)\n        print(timeformat, end='\\r')\n        time.sleep(1)\n        time_sec -= 1\n\n    print(\"stop\")\n\ncountdown(5)"
                            }
                          </code>
                        </pre>
                        <Button
                          name="python"
                          onClick={(e) => this.toggleExplanation(e.target.name)}
                          className="btn btn-primary"
                          style={{marginTop: "10px"}}
                        >
                          Explain Python Code
                        </Button>
                      </TabPane>

                      <TabPane className="fade show" tabId="3">
                        <pre className="text fw-bold mb-0">
                          <code className="language-plsql">
                            {
                              'DELETE FROM STATS\nWHERE MONTH = 7\nOR ID IN (SELECT ID FROM STATION\nWHERE LONG_W < 90);\n\nDELETE FROM STATION WHERE LONG_W < 90;\n\nCOMMIT WORK;'
                            }
                          </code>
                        </pre>
                        <Button
                          name="SQL"
                          onClick={(e) => this.toggleExplanation(e.target.name)}
                          className="btn btn-primary"
                          style={{marginTop: "10px"}}
                        >
                          Explain SQL Code
                        </Button>
                      </TabPane>

                      <TabPane className="fade show" tabId="4">
                        <p className="text-muted fw-bold mb-0">
                          coming soon ...
                        </p>
                      </TabPane>
                    </TabContent>
                  </Col>
                </Row>
              </div>

              {this.state.NodeJsExplanation === true ? (
                <div>
                  <ul className="list-unstyled text mb-0 mt-3">
                    <h5>NodeJS Code Explanation</h5>
                    <li className="list-item me-lg-5 me-4">
                      <span className="text-success h5 me-2">
                        <i className="uil uil-check-circle align-middle"></i>
                      </span>
                      The http module is required.
                    </li>
                    <li className="list-item me-lg-5 me-4">
                      <span className="text-success h5 me-2">
                        <i className="uil uil-check-circle align-middle"></i>
                      </span>
                      The http module is used to create a server.
                    </li>
                    <li className="list-item me-lg-5 me-4">
                      <span className="text-success h5 me-2">
                        <i className="uil uil-check-circle align-middle"></i>
                      </span>
                      The server is created and a callback function is passed to
                      it.
                    </li>
                    <li className="list-item me-lg-5 me-4">
                      <span className="text-success h5 me-2">
                        <i className="uil uil-check-circle align-middle"></i>
                      </span>
                      The callback function is executed when a request is
                      received.
                    </li>
                    <li className="list-item me-lg-5 me-4">
                      <span className="text-success h5 me-2">
                        <i className="uil uil-check-circle align-middle"></i>
                      </span>
                      The callback function sends a response to the client.
                    </li>
                    <li className="list-item me-lg-5 me-4">
                      <span className="text-success h5 me-2">
                        <i className="uil uil-check-circle align-middle"></i>
                      </span>
                      The response is sent as a plain text.
                    </li>
                    <li className="list-item me-lg-5 me-4">
                      <span className="text-success h5 me-2">
                        <i className="uil uil-check-circle align-middle"></i>
                      </span>
                      The server listens on port 8080.
                    </li>
                    <li className="list-item me-lg-5 me-4">
                      <span className="text-success h5 me-2">
                        <i className="uil uil-check-circle align-middle"></i>
                      </span>
                      The server is started.
                    </li>
                  </ul>
                </div>
              ) : (
                ''
              )}

              {this.state.PythonExplanation === true ? (
                <div>
                  <ul className="list-unstyled text mb-0 mt-4">
                    <h5>Python Code Explanation</h5>
                    <li className="list-item me-lg-5 me-4">
                      <span className="text-success h5 me-2">
                        <i className="uil uil-check-circle align-middle"></i>
                      </span>
                      Countdown is a function that takes one argument, time_sec.
                    </li>
                    <li className="list-item me-lg-5 me-4">
                      <span className="text-success h5 me-2">
                        <i className="uil uil-check-circle align-middle"></i>
                      </span>
                      Countdown starts a while loop that will run as long as
                      time_sec is greater than 0.
                    </li>
                    <li className="list-item me-lg-5 me-4">
                      <span className="text-success h5 me-2">
                        <i className="uil uil-check-circle align-middle"></i>
                      </span>
                      The while loop will divide time_sec by 60, store the
                      quotient in mins and the remainder in secs.
                    </li>
                    <li className="list-item me-lg-5 me-4">
                      <span className="text-success h5 me-2">
                        <i className="uil uil-check-circle align-middle"></i>
                      </span>
                      The timeformat variable is a string that formats mins and
                      secs so that it displays mins followed by a colon followed
                      by secs.
                    </li>
                    <li className="list-item me-lg-5 me-4">
                      <span className="text-success h5 me-2">
                        <i className="uil uil-check-circle align-middle"></i>
                      </span>
                      The print() function displays the formatted string
                      followed by \r which will ensure that the same line is
                      overwritten.
                    </li>
                    <li className="list-item me-lg-5 me-4">
                      <span className="text-success h5 me-2">
                        <i className="uil uil-check-circle align-middle"></i>
                      </span>
                      The time.sleep(1) function call will sleep (pause) the
                      program for 1 second before the next iteration of the
                      loop.
                    </li>
                    <li className="list-item me-lg-5 me-4">
                      <span className="text-success h5 me-2">
                        <i className="uil uil-check-circle align-middle"></i>
                      </span>
                      The time_sec variable is decremented by 1 before the next
                      iteration of the loop.
                    </li>
                    <li className="list-item me-lg-5 me-4">
                      <span className="text-success h5 me-2">
                        <i className="uil uil-check-circle align-middle"></i>
                      </span>
                      When time_sec equals 0, the while loop ends and the
                      print("stop") function call displays "stop" on the screen.
                    </li>
                  </ul>
                </div>
              ) : (
                ''
              )}

              {this.state.SQLExplanation === true ? (
                <div>
                  <ul className="list-unstyled text mb-0 mt-4">
                    <h5>SQL Code Explanation</h5>
                    <li className="list-item me-lg-5 me-4">
                      <span className="text-success h5 me-2">
                        <i className="uil uil-check-circle align-middle"></i>
                      </span>
                      The first line of the code is deleting all rows from the
                      table STATS that have a month value of 7 or have an ID
                      within STATION with longitude value less than 90.
                    </li>
                    <li className="list-item me-lg-5 me-4">
                      <span className="text-success h5 me-2">
                        <i className="uil uil-check-circle align-middle"></i>
                      </span>
                      The second line of the code is deleting all rows from the
                      table STATION that have a longitude value less than 90.
                    </li>
                    <li className="list-item me-lg-5 me-4">
                      <span className="text-success h5 me-2">
                        <i className="uil uil-check-circle align-middle"></i>
                      </span>
                      The third line of the code is committing the changes to
                      the database.
                    </li>
                    <li className="list-item me-lg-5 me-4">
                      <span className="text-success h5 me-2">
                        <i className="uil uil-check-circle align-middle"></i>
                      </span>
                      Finally, we commit the changes to the database.
                    </li>
                  </ul>
                </div>
              ) : (
                ''
              )}
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}
