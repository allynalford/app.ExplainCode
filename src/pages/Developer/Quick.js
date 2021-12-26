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
      "const fs = require('fs');\n \nvar jsonData = '{\"persons\":[{\"name\":\"John\",\"city\":\"New York\"},{\"name\":\"Phil\",\"city\":\"Ohio\"}]}';\n \n\nvar jsonObj = JSON.parse(jsonData);\nconsole.log(jsonObj);\n \nvar jsonContent = JSON.stringify(jsonObj);\nconsole.log(jsonContent);\n \nfs.writeFile(\"output.json\", jsonContent, 'utf8', function (err) {\n    if (err) {\n        console.log(\"An error occured while writing JSON Object to File.\");\n        return console.log(err);\n    }\n \n    console.log(\"JSON file has been saved.\");\n});",
      languages.js,
    )
      .split('\n')
      .map(
        (line, i) =>
          `<span class='editorLineNumber'>${i + 1}</span>${line}<br />`,
      )
      .join('\n');
    var PythonCode = highlight(
      "import math\n\n\ndef isPerfectSquare(x):\n\ts = int(math.sqrt(x))\n\treturn s*s == x\n\n\ndef isFibonacci(n):\n\n\t# n is Fibinacci if one of 5*n*n + 4 or 5*n*n - 4 or both\n\t# is a perferct square\n\treturn isPerfectSquare(5*n*n + 4) or isPerfectSquare(5*n*n - 4)\n\t\n\nfor i in range(1,11):\n\tif (isFibonacci(i) == True):\n\t\tprint i,\"is a Fibonacci Number\"\n\telse:\n\t\tprint i,\"is a not Fibonacci Number \"",
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
          <Row>
            <Col xs={12}>
              <div className="section-title mb-4 pb-2">
                <h2 className="title mb-4">Your Code, Your Content</h2>
                <p className="para-desc text mb-0">
                We aim to never claim copyright over explanations, since the explanations belong to their authors. We do not store or log your code, and we will never use your code as training data.</p>
              </div>
            </Col>
          </Row>
            <Col xs={12}>
              <div className="section-title text-center mb-4 pb-2">
                <h2 className="text-primary">How Explain Code App Works</h2>
                <h3 className="title mb-4">Let's dive in!</h3>
                <p className="para-desc mx-auto text mb-0">
                Check out some samples of Explain Code app using GPT-3 (ai) to explain your code.
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
                          NodeJS Open Question
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
                  <h5>NodeJS Code GPT-3 Question: can you explain this code to me please?</h5>
                  <div style={{fontSize: "1.25rem"}}>
                   <ul className="list-unstyled text mb-0 mt-4">
                    <li className="list-item me-lg-5 me-4">
                      <span className="text-success h5 me-2">
                        <i className="uil uil-brackets-curly align-middle"></i>
                      </span>
                      {`var jsonData = '{"persons":[{"name":"John","city":"New York"},{"name":"Phil","city":"Ohio"}]}';`}
                    </li>
                    <li className="list-item me-lg-5 me-4">
                      <span className="text-success h5 me-2">
                        <i className="uil uil-brackets-curly align-middle"></i>
                      </span>
                      {`This code assigns the string value '{"persons":[{"name":"John","city":"New York"},{"name":"Phil","city":"Ohio"}]}' to the variable jsonData.`}
                    </li>
                    <li className="list-item me-lg-5 me-4">
                      <span className="text-success h5 me-2">
                        <i className="uil uil-brackets-curly align-middle"></i>
                      </span>
                      {`var jsonObj = JSON.parse(jsonData);`}
                    </li>
                    <li className="list-item me-lg-5 me-4">
                      <span className="text-success h5 me-2">
                        <i className="uil uil-brackets-curly align-middle"></i>
                      </span>
                      {`This code parses the JSON string in jsonData and assigns it to the variable jsonObj.`}
                    </li>
                    <li className="list-item me-lg-5 me-4">
                      <span className="text-success h5 me-2">
                        <i className="uil uil-brackets-curly align-middle"></i>
                      </span>
                      {`console.log(jsonObj);`}
                    </li>
                    <li className="list-item me-lg-5 me-4">
                      <span className="text-success h5 me-2">
                        <i className="uil uil-brackets-curly align-middle"></i>
                      </span>
                      {`This line prints the contents of the variable jsonObj to the console. In this case, the object stored in jsonObj contains two key-value pairs, 'name' and 'city', with the values 'John' and 'New York' respectively.`}
                    </li>
                    <li className="list-item me-lg-5 me-4">
                      <span className="text-success h5 me-2">
                        <i className="uil uil-brackets-curly align-middle"></i>
                      </span>
                      {`var jsonContent = JSON.stringify(jsonObj);`}
                    </li>
                    <li className="list-item me-lg-5 me-4">
                      <span className="text-success h5 me-2">
                        <i className="uil uil-brackets-curly align-middle"></i>
                      </span>
                      {`This code converts the object in jsonObj to a JSON string and assigns it to the variable jsonContent.`}
                    </li>
                    <li className="list-item me-lg-5 me-4">
                      <span className="text-success h5 me-2">
                        <i className="uil uil-brackets-curly align-middle"></i>
                      </span>
                      {`console.log(jsonContent);`}
                    </li>
                    <li className="list-item me-lg-5 me-4">
                      <span className="text-success h5 me-2">
                        <i className="uil uil-brackets-curly align-middle"></i>
                      </span>
                      {`This line prints the contents of the variable jsonContent to the console. In this case, the string value '{"persons":[{"name":"John","city":"New York"},{"name":"Phil","city":"Ohio"}]}' is printed.`}
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
                  <ul className="list-unstyled text mb-0 mt-3">
                    <li className="list-item me-lg-5 me-4" style={{marginTop: '7px'}}>
                      <span className="text-success h5 me-2">
                        <i className="uil uil-brackets-curly align-middle"></i>
                      </span>
                      The code imports the math library.
                    </li>
                    <li className="list-item me-lg-5 me-4" style={{marginTop: '7px'}}>
                      <span className="text-success h5 me-2">
                        <i className="uil uil-brackets-curly align-middle"></i>
                      </span>
                      The code defines a function called isPerfectSquare. This function takes an input of x, and calculates the square root of x. The function then returns whether or not x*x is equal to x.
                    </li>
                    <li className="list-item me-lg-5 me-4" style={{marginTop: '7px'}}>
                      <span className="text-success h5 me-2">
                        <i className="uil uil-brackets-curly align-middle"></i>
                      </span>
                      The code defines a function called isFibonacci. This function takes an input of n, and checks to see if one of the two equations 5*n*n + 4 or 5*n*n - 4 is a perfect square. If it is, then the function returns True.
                    </li>
                    <li className="list-item me-lg-5 me-4" style={{marginTop: '7px'}}>
                      <span className="text-success h5 me-2">
                        <i className="uil uil-brackets-curly align-middle"></i>
                      </span>
                      The code runs a loop from 1 to 11, and checks to see if each number is a Fibonacci number. If it is, the code prints the number out. If it is not, the code prints the number out followed by "is not a Fibonacci number".
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
                        <i className="uil uil-brackets-curly align-middle"></i>
                      </span>
                      First, we delete all the rows from the STATS table that
                      have a month value of 7 or have an ID within the table
                      STATION with longitude value less than 90.
                    </li>
                    <li className="list-item me-lg-5 me-4">
                      <span className="text-success h5 me-2">
                        <i className="uil uil-brackets-curly align-middle"></i>
                      </span>
                      Next, we delete all the rows from the STATION table that
                      have a longitude value less than 90.
                    </li>
                    <li className="list-item me-lg-5 me-4">
                      <span className="text-success h5 me-2">
                        <i className="uil uil-brackets-curly align-middle"></i>
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
                        <i className="uil uil-brackets-curly align-middle"></i>
                      </span>
                      Get the http.Response object from the http.Get call.
                    </li>
                    <li className="list-item me-lg-5 me-4">
                      <span className="text-success h5 me-2">
                        <i className="uil uil-brackets-curly align-middle"></i>
                      </span>
                      Check if there was an error in the http.Get call.
                    </li>
                    <li className="list-item me-lg-5 me-4">
                      <span className="text-success h5 me-2">
                        <i className="uil uil-brackets-curly align-middle"></i>
                      </span>
                      Defer the closing of the http.Response Body.
                    </li>
                    <li className="list-item me-lg-5 me-4">
                      <span className="text-success h5 me-2">
                        <i className="uil uil-brackets-curly align-middle"></i>
                      </span>
                      Print the response status.
                    </li>
                    <li className="list-item me-lg-5 me-4">
                      <span className="text-success h5 me-2">
                        <i className="uil uil-brackets-curly align-middle"></i>
                      </span>
                      Create a new Scanner for the http.Response Body.
                    </li>
                    <li className="list-item me-lg-5 me-4">
                      <span className="text-success h5 me-2">
                        <i className="uil uil-brackets-curly align-middle"></i>
                      </span>
                      Loop through the scanner and print the first 5 lines.
                    </li>
                    <li className="list-item me-lg-5 me-4">
                      <span className="text-success h5 me-2">
                        <i className="uil uil-brackets-curly align-middle"></i>
                      </span>
                      Check for errors from the scanner.
                    </li>
                    <li className="list-item me-lg-5 me-4">
                      <span className="text-success h5 me-2">
                        <i className="uil uil-brackets-curly align-middle"></i>
                      </span>
                      The http.Response Body is closed.
                    </li>
                  </ul>
                </div>
                 </div>
              ) : (
                ''
              )}
              <br />
              <h4>Get advance notice before we launch</h4>
              <p className="text">
                Sign Up to the private beta and receive an early access invite code. Get advance notice before we launch to the general public in early 2022. Our new Explain Code application is a revolutionary way to learn how to write code and make suggestions that will help
                </p>
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
