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
import parse from "html-react-parser";
import 'prismjs/components/prism-bash';
import 'prismjs/components/prism-markup-templating';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-markup';
import 'prismjs/components/prism-php';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-json';
import 'prismjs/components/prism-python';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-sql';
import 'prismjs/components/prism-go';
import 'prismjs/components/prism-scss';
import 'prismjs/themes/prism.css';
import './styles.css';

const config = require("../../common/config.js");
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
      GoExplanation: false,
      NodeJsCode: '',
      PythonCode: '',
      SqlCode: '',
      GoCode: '',
    };
    this.toggleTab = this.toggleTab.bind(this);
    this.hightlightWithLineNumbers = this.hightlightWithLineNumbers.bind(this);
    this.WithoutLineNumbers = this.WithoutLineNumbers.bind(this);
    this.toggleExplanation = this.toggleExplanation.bind(this);
  }

  componentDidMount() {
    this.hightlightWithLineNumbers();
  }

  shouldComponentUpdate(nextProps, nextState) {
    //console.log('Instance shouldComponentUpdate lifecycle');
    if (nextState !== this.state) {
      return true;
    } else {
      return false;
    }
  }

  componentDidUpdate(prevProps, prevState) {}

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
      case 'go':
        if (this.state.GoExplanation !== true) {
          this.setState({
            GoExplanation: true,
          });
        } else {
          this.setState({
            GoExplanation: false,
          });
        }
        break;
      default:
        console.log(`Sorry, we are out of ${name}.`);
    }
  }

  hightlightWithLineNumbers = (input, language, codeType) => {
    var NodeJsCode = highlight(
      "var http = require('http');\nhttp.createServer(function (req, res) {\n    res.writeHead(200, {'Content-Type': 'text/plain'});\n    res.end('Hello Node.js World!');\n}).listen(8080);",
      languages.js,
    )
      .split('\n')
      .map(
        (line, i) =>
          `<span class='editorLineNumber'>${i + 1}</span>${line}<br />`,
      )
      .join('\n');
    var PythonCode = highlight(
      "import time\n\ndef countdown(time_sec):\n    while time_sec:\n        mins, secs = divmod(time_sec, 60)\n        timeformat = '{:02d}:{:02d}'.format(mins, secs)\n        print(timeformat, end='\\r')\n        time.sleep(1)\n        time_sec -= 1\n\n    print(\"stop\")\n\ncountdown(5)",
      languages.python,
    )
      .split('\n')
      .map(
        (line, i) =>
          `<span class='editorLineNumber'>${i + 1}</span>${line}<br />`,
      )
      .join('\n');
    var SqlCode = highlight(
      'DELETE FROM STATS\nWHERE MONTH = 7\nOR ID IN (SELECT ID FROM STATION\nWHERE LONG_W < 90);\n\nDELETE FROM STATION WHERE LONG_W < 90;\n\nCOMMIT WORK;',
      languages.sql,
    )
      .split('\n')
      .map(
        (line, i) =>
          `<span class='editorLineNumber'>${i + 1}</span>${line}<br />`,
      )
      .join('\n');

    var GoCode = highlight(
      "package main\n\nimport (\n    \"bufio\"\n    \"fmt\"\n    \"net/http\"\n)\n\nfunc main() {\n\n    resp, err := http.Get(\"http://gobyexample.com\")\n    if err != nil {\n        panic(err)\n    }\n    defer resp.Body.Close()\n\n    fmt.Println(\"Response status:\", resp.Status)\n\n    scanner := bufio.NewScanner(resp.Body)\n    for i := 0; scanner.Scan() && i < 5; i++ {\n        fmt.Println(scanner.Text())\n    }\n\n    if err := scanner.Err(); err != nil {\n        panic(err)\n    }\n}",
      languages.go,
    )
      .split('\n')
      .map(
        (line, i) =>
          `<span class='editorLineNumber'>${i + 1}</span>${line}<br />`,
      )
      .join('\n');
    this.setState({
      NodeJsCode: parse(NodeJsCode),
      PythonCode: parse(PythonCode),
      SqlCode: parse(SqlCode),
      GoCode: parse(GoCode)
    });
  };

  WithLineNumbers = (input, language) => {
    const Prism = require('prismjs');
    Prism.highlight(input, language)
      .split('\n')
      .map(
        (line, i) =>
          `<span class='editorLineNumber'>${i + 1}</span>${line}<br />`,
      )
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
                <h2 className="text-primary">How Explain Code App Works</h2>
                <h3 className="title mb-4">Let's dive in!</h3>
                <p className="para-desc mx-auto text mb-0">
                  Explain Code app uses GPT-3 (ai) to explain your the code. <br />
                  Check out some samples
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

                      <NavItem className="hover-border">
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
                              GO
                            </h5>
                          </div>
                        </NavLink>
                      </NavItem>
                    </Nav>
                  </Col>
                </Row>

                <Row>
                  <Col xs={12}>
                    <TabContent activeTab={this.state.activeTab}>
                      <TabPane tabId="1" className="fade show">
                        <div className="text fw-bold mb-0">
                          <div className="container__editor editor">
                            {this.state.NodeJsCode}
                          </div>
                        </div>
                        <Button
                          name="nodejs"
                          onClick={(e) => this.toggleExplanation(e.target.name)}
                          className="btn btn-primary"
                          style={{ marginTop: '10px' }}
                        >
                          Explain NodeJS Code
                        </Button>
                      </TabPane>
                      <TabPane className="fade show" tabId="2">
                        {/* {Prism.highlight("import time\n\ndef countdown(time_sec):\n    while time_sec:\n        mins, secs = divmod(time_sec, 60)\n        timeformat = '{:02d}:{:02d}'.format(mins, secs)\n        print(timeformat, end='\\r')\n        time.sleep(1)\n        time_sec -= 1\n\n    print(\"stop\")\n\ncountdown(5)", Prism.languages.python, 'python')}     */}
                        <div className="text fw-bold mb-0">
                          <div className="container__editor editor">
                            {this.state.PythonCode}
                          </div>
                        </div>
                        <Button
                          name="python"
                          onClick={(e) => this.toggleExplanation(e.target.name)}
                          className="btn btn-primary"
                          style={{ marginTop: '10px' }}
                        >
                          Explain Python Code
                        </Button>
                      </TabPane>

                      <TabPane className="fade show" tabId="3">
                        <div className="text fw-bold mb-0">
                          <div className="container__editor editor">
                            {this.state.SqlCode}
                          </div>
                        </div>
                        <Button
                          name="SQL"
                          onClick={(e) => this.toggleExplanation(e.target.name)}
                          className="btn btn-primary"
                          style={{ marginTop: '10px' }}
                        >
                          Explain SQL Code
                        </Button>
                      </TabPane>

                      <TabPane className="fade show" tabId="4">
                        <div className="text fw-bold mb-0">
                          <div className="container__editor editor">
                            {this.state.GoCode}
                          </div>
                        </div>
                        <Button
                          name="go"
                          onClick={(e) => this.toggleExplanation(e.target.name)}
                          className="btn btn-primary"
                          style={{ marginTop: '10px' }}
                        >
                          Explain GO Code
                        </Button>
                      </TabPane>
                      </TabContent>
                  </Col>
                </Row>
              </div>

              {this.state.NodeJsExplanation === true ? (
                <div>
                  <h5>NodeJS Code GPT-3 Explanation</h5>
                  <div style={{fontSize: "1.25rem"}}>
                  <ul className="list-unstyled text mb-0 mt-3">
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
                </div>
              ) : (
                ''
              )}

              {this.state.PythonExplanation === true ? (
                <div>
                  <h5>Python Code GPT-3 Explanation</h5>
                  <div style={{fontSize: "1.25rem"}}>
                  <ul className="list-unstyled text mb-0 mt-4">
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
                </div>
              ) : (
                ''
              )}

              {this.state.SQLExplanation === true ? (
                <div>
                  <h5>SQL Code GPT-3 Explanation</h5>
                  <div style={{fontSize: "1.25rem"}}>
                  <ul className="list-unstyled text mb-0 mt-4">
                    <li className="list-item me-lg-5 me-4">
                      <span className="text-success h5 me-2">
                        <i className="uil uil-check-circle align-middle"></i>
                      </span>
                      First, we delete all the rows from the STATS table that
                      have a month value of 7 or have an ID within the table
                      STATION with longitude value less than 90.
                    </li>
                    <li className="list-item me-lg-5 me-4">
                      <span className="text-success h5 me-2">
                        <i className="uil uil-check-circle align-middle"></i>
                      </span>
                      Next, we delete all the rows from the STATION table that
                      have a longitude value less than 90.
                    </li>
                    <li className="list-item me-lg-5 me-4">
                      <span className="text-success h5 me-2">
                        <i className="uil uil-check-circle align-middle"></i>
                      </span>
                      Finally, we commit the changes to the database.
                    </li>
                  </ul>
                </div>
                  </div>
              ) : (
                ''
              )}
               {this.state.GoExplanation === true ? (
                 <div>
                   <h5>GO Code GPT-3 Explanation</h5>
                <div style={{fontSize: "1.25rem"}}>
                  <ul className="list-unstyled text mb-0 mt-4">
                    <li className="list-item me-lg-5 me-4">
                      <span className="text-success h5 me-2">
                        <i className="uil uil-check-circle align-middle"></i>
                      </span>
                      Get the http.Response object from the http.Get call.
                    </li>
                    <li className="list-item me-lg-5 me-4">
                      <span className="text-success h5 me-2">
                        <i className="uil uil-check-circle align-middle"></i>
                      </span>
                      Check if there was an error in the http.Get call.
                    </li>
                    <li className="list-item me-lg-5 me-4">
                      <span className="text-success h5 me-2">
                        <i className="uil uil-check-circle align-middle"></i>
                      </span>
                      Defer the closing of the http.Response Body.
                    </li>
                    <li className="list-item me-lg-5 me-4">
                      <span className="text-success h5 me-2">
                        <i className="uil uil-check-circle align-middle"></i>
                      </span>
                      Print the response status.
                    </li>
                    <li className="list-item me-lg-5 me-4">
                      <span className="text-success h5 me-2">
                        <i className="uil uil-check-circle align-middle"></i>
                      </span>
                      Create a new Scanner for the http.Response Body.
                    </li>
                    <li className="list-item me-lg-5 me-4">
                      <span className="text-success h5 me-2">
                        <i className="uil uil-check-circle align-middle"></i>
                      </span>
                      Loop through the scanner and print the first 5 lines.
                    </li>
                    <li className="list-item me-lg-5 me-4">
                      <span className="text-success h5 me-2">
                        <i className="uil uil-check-circle align-middle"></i>
                      </span>
                      Check for errors from the scanner.
                    </li>
                    <li className="list-item me-lg-5 me-4">
                      <span className="text-success h5 me-2">
                        <i className="uil uil-check-circle align-middle"></i>
                      </span>
                      The http.Response Body is closed.
                    </li>
                  </ul>
                </div>
                 </div>
              ) : (
                ''
              )}
              <div className="buy-button" style={{ marginTop: '15px' }}>
                <a href="#emailAddress" className="btn btn-pills btn-primary">
                {config.WAITLIST_TEXT}
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}
