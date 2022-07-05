import React, { Component } from 'react';
import { Col, Container, Row } from 'reactstrap';
import { Helmet } from 'react-helmet';
import jsToPython from "../../../assets/images/js_to_python.png";
import WaitlistButtonSolo from '../../../components/waitlist-button-solo';
import jsToPythonExp1 from "../../../assets/images/js_to_python_exp1.jpg";
import jsToPythonExp2 from "../../../assets/images/js_to_python_exp2.jpg";
import jsToPythonExp2_1 from "../../../assets/images/js_to_python_exp2_1.jpg";
import jsToPythonExp2_2 from "../../../assets/images/js_to_python_exp2_2.jpg";

export default class JavascriptToPython extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    document.body.classList = '';
    window.addEventListener('scroll', this.scrollNavigation, true);
  }
  // Make sure to remove the DOM listener when the component is unmounted.
  componentWillUnmount() {
    window.removeEventListener('scroll', this.scrollNavigation, true);
  }

  scrollNavigation = () => {
    var doc = document.documentElement;
    var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    if (top > 80) {
      document.getElementById('topnav').classList.add('nav-sticky');
    } else {
      document.getElementById('topnav').classList.remove('nav-sticky');
    }
  };
  render() {
    return (
      <React.Fragment>
        <Helmet>
          <title>Converting JS to Python</title>
          <meta
            name="description"
            content="It allows you to convert your Python source code into JavaScript code, so you can compare it against the JavaScript and see how the two languages work."
          />
          <meta
            name="keywords"
            content="JS to Python converter, Code App, JavaScript, Python, syntax, ECMAScript,Javascript,Javascript Code,Javascript Code Snippets,Javascript programming,Translate JavaScript to Python code"
          />
          <meta
            name="twitter:title"
            content="Converting JS to Python"
          />
          <meta name="twitter:image:alt" content="Converting JS to Python" />
          <meta
            property="og:title"
            content="Converting JS to Python"
          />
          <meta
            property="og:description"
            content="It allows you to convert your Python source code into JavaScript code, so you can compare it against the JavaScript and see how the two languages work."
          />
        </Helmet>
        <section className="bg-half">
          <Container>
            <Row className="justify-content-center">
              <Col lg={8} md={10}>
                <div className="section-title">
                  <div className="text-center">
                    <h1 className="title">
                      Convert Javascript to Python
                    </h1>
                    <img
                      src={jsToPython}
                      className="img-fluid rounded-md shadow-md"
                      alt="JS to Python"
                    />
                  </div>
                  <p className="text mt-4">
                    Explain Code App's JS to Python converter is the best tool
                    for converting JavaScript to Python code. It is able to
                    translate virtually any JavaScript code to Python, making it
                    the perfect tool for learning Python or for comparing
                    existing Python code against the JavaScript. It allows you
                    to convert your Python source code into JavaScript code, so
                    you can compare it against the JavaScript and see how the
                    two languages work.
                  </p>
                  <p className="text mt-4">
                    If you're looking to learn Python, there's no better way
                    than to use a tool that can convert your existing JavaScript
                    code to Python. This way, you can see how the two languages
                    compare and contrast, and learn Python in a way that's
                    familiar to you..
                  </p>
                  <div style={{marginTop: '15px'}}>
                          <WaitlistButtonSolo />
                        </div>
                  <h2 className="my-4">
                    Switching between JavaScript AND Python
                  </h2>
                  <p className="text">
                    JavaScript and Python are both versatile programming
                    languages that can be used for a variety of purposes.
                    However, they have different syntaxes and approaches to
                    programming. Switching between the two can be beneficial to
                    learn, as it can help you to better understand the strengths
                    and weaknesses of each language.
                  </p>
                  <div className="text-center">
                    <h3 className="title">
                      Javascript Code Snippet To Convert
                    </h3>
                    <img
                      src={jsToPythonExp1}
                      className="img-fluid rounded-md shadow-md"
                      alt="Javascript Snippet to covert to Python"
                    />
                  </div>
                  <p>
                  You can enter any JavaScript code you want in the "Code Snippet" box, and it will be converted into Python code.
                  </p>
                  <div className="text-center">
                    <h3 className="title">
                      Get Python Code
                    </h3>
                    <img
                      src={jsToPythonExp2}
                      className="img-fluid rounded-md shadow-md"
                      alt="Converted Python Code Snippet"
                    />
                  </div>
                  <p>
                  Enter your JavaScript code in the "Code Snippet" box to be converted into Python code.
                  </p>
                  <h2 className="my-4">JavaScript syntax and Python syntax</h2>
                  <p className="text mt-4">
                    JavaScript and Python are both programming languages, but
                    they have different syntax. In JavaScript, syntax is defined
                    by the ECMAScript language specification. In Python, syntax
                    is defined by the Python language specification.
                  </p>
                  <p className="text mt-4">
                    JavaScript syntax is mostly based on the C programming
                    language, while Python syntax is based on the English
                    language. This can make Python code more readable than
                    JavaScript code.
                  </p>
                  <p className="text mt-4">
                    JavaScript has a more relaxed syntax than Python. For
                    example, in JavaScript, you do not need to put a semicolon
                    after every statement, and you can use either single or
                    double quotes for strings. In Python, you must use proper
                    indentation for code blocks, and you must use single quotes
                    for strings.
                  </p>
                  <p className="text mt-4">
                  Overall, the syntax of JavaScript is more flexible and forgiving than the syntax of Python. However, the syntax of Python is more consistent.
                  </p>
                  <div className="text-center">
                    <h3 className="title">
                    Javascript Fetch request to covert to Python
                    </h3>
                    <img
                      src={jsToPythonExp2_1}
                      className="img-fluid rounded-md shadow-md"
                      alt="Javascript Fetch request Snippet to covert to Python"
                    />
                  </div>
                  <p>
                  This is an example of a JavaScript HTTP POST request using fetch. This JavaScript code snippet will be converted to Python.
                  </p>
                  <div className="text-center">
                    <h3 className="title">
                    Javascript Fetch request converted to Python
                    </h3>
                    <img
                      src={jsToPythonExp2_2}
                      className="img-fluid rounded-md shadow-md"
                      alt="Javascript Fetch request to covert to Python"
                    />
                  </div>
                  <p>
                  The above Python code has been converted from the JavaScript code snippet. It imports the requests library to make an HTTP POST request.
                  </p>
                  <div style={{marginTop: '15px'}}>
                          <WaitlistButtonSolo />
                        </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}
