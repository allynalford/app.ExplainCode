import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Row,
  Col
} from "reactstrap";
import { Helmet } from "react-helmet";
import blog1 from "../../../assets/images/blog/bg1.jpg";
import { PageView, initGA} from '../../../common/gaUtils';

export default class PageBlogDetailTwo extends Component {
  componentDidMount() {
    document.body.classList = "";
    document.getElementById("top-menu").classList.add("nav-light");
    window.addEventListener("scroll", this.scrollNavigation, true);
        initGA();
    PageView();
    document.title = "How Explaining Code Helps Developers";
  }
  // Make sure to remove the DOM listener when the component is unmounted.
  componentWillUnmount() {
    window.removeEventListener("scroll", this.scrollNavigation, true);
  }

  scrollNavigation = () => {
    var doc = document.documentElement;
    var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    if (top > 80) {
      document.getElementById("topnav").classList.add("nav-sticky");
    } else {
      document.getElementById("topnav").classList.remove("nav-sticky");
    }
  };
  render() {
    return (
      <React.Fragment>
        <Helmet>
          <title>How Explaining Code Helps Developers</title>
          <meta name="description"
            content="The Explain Code App uses GPT-3 to automatically learn from open source code repositories, understand unfamiliar programming constructs and explain difficult code in plain english." />
          <meta name="keywords"
            content="Nodejs, Go, golang, SQL, Python, liquid, code, programming code, explain code, explaincode, explain complex code, explain complex code of any programming language, open source code explained, open source code learning, gpt3 explained" />
          <meta name="twitter:title" content="How Explaining Code Helps Developers" />
          <meta name="twitter:image:alt" content="Explain Code App: How Explaining Code Helps Developers" />
          <meta property="og:title" content="How Explaining Code Helps Developer" />
          <meta property="og:description" content="Explain Code App gives you a fast and efficient way to understand code. You no longer need to spend hours or days understanding code. With Explain Code App in just five minutes, you can easily understand any given piece of code." />
        </Helmet>
        <section
          className="bg-half d-table w-100"
          // style={{ background: `url(${bgimg}) center center` }}
        >
          <div className="bg-overlay"></div>
          <Container>
            <Row className="justify-content-center">
              <Col lg={12} className="text-center">
                <div className="page-next-level">
                  <h3 className="title text-white title-dark">
                    {' '}
                    What is Explain Code, and how does it work?{' '}
                  </h3>
                  <div className="page-next">
                    <nav aria-label="breadcrumb" className="d-inline-block">
                      <ul className="breadcrumb bg-white rounded shadow mb-0">
                        <li className="breadcrumb-item">
                          <Link to="/">Explain Code</Link>
                        </li>
                        <li className="breadcrumb-item">
                          <Link to="#">Blog</Link>
                        </li>
                        <li
                          className="breadcrumb-item active"
                          aria-current="page"
                        >
                          How Explaining code helps developers
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
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
        <section className="section">
          <Container>
            <Row className="justify-content-center">
              <Col lg={10}>
                <Row>
                  <div className="col-md-10">
                    <h1 className="mt-4">How Explaining Code Helps Developers</h1>
                    <p className="text">
                      If you are a developer, you know how difficult it is to
                      understand and work with existing code. This is really
                      true when fixing bugs or modifying existing code. Fixing
                      bugs and modifying existing code can take a lot of time if
                      the code is hard to understand. That's where Explain Code
                      steps in.
                    </p>
                    <p className="text">We are working with a revolutionary AI that we are deploying in the form of an easy to use web tool which understands existing code and makes it easy for you to modify and fix it. Now you can finally be productive!</p>
                    <img
                      src={blog1}
                      className="img-fluid rounded-md shadow"
                      alt="Explain NodeJS, Python, Solidity, Golang and SQL languages in plain english"
                    />
                    <h2 className="mt-4">What is Explain Code?</h2>

                    <p className="text">
                      Explain Code is for developers who need to understand code
                      in a very short amount of time. Easy-to-understand code
                      will help you develop faster and use your time more
                      effectively. We'll take any given piece of code — even
                      complex JavaScript objects that are hard to understand —
                      and quickly break it down into simple parts. Then, explain
                      what each part does and, best of all, how those parts work
                      together.
                    </p>
                    <h3>Imagine having a friend who could explain any code in just 5 minutes. That person would quickly become your best friend.</h3>
                    <p className="text">
                      With Explain Code, you can quickly save time on code
                      that's difficult to digest. We empower developers to go
                      from I don't understand the code to this is how it works
                      in under five minutes!
                    </p>
                    <p className="text">Explain Code is an instrumental tool for developers who need to understand code in a very short amount of time.</p>
                    <h2 className="mt-4">Here's how we make code easy to understand</h2>
                    <p className="text">
                      We take all the pain out of looking at others' code!
                      Explain Code makes code easy. We empower developers to go
                      from I don't understand the code to this is how it works
                      in under five minutes!
                    </p>
                    <p className="text">
                      Say you're working on a new project and you have to dig
                      through 100 lines of code to make a small change to it.
                      What would you do?
                    </p>
                    <p className="text">
                      You could spend hours reading the code line-by-line, or
                      you could use CodeExplain.{' '}
                    </p>

                    <h3 className="mt-4">How do you save time on code that's hard to digest?</h3>
                    <p className="text">
                      Code is hard. Describing code and explaining it to other
                      developers is even harder. The problem isn't just that
                      code is unreadable, it's that it's often hard to
                      understand at all. You might know what a line of code does
                      but not why it's there in the first place. Or you might
                      know what a line of code is supposed to do, but not how it
                      does it. You could spend hours and hours staring at the
                      same line of code, trying to figure out what in the world
                      it actually means. Tailoring your code for your team can
                      help them understand what you're doing, but often that's
                      easier said than done. So, how do you save time on code
                      that's hard to digest?
                    </p>
                    <h3 className="mt-4">
                      You can create summaries for your code for easier reading
                      experience in the future
                    </h3>
                    <p className="text">
                      No one wants to read thousands of lines of code, so we've
                      created a tool that automatically creates summaries for
                      your code, in minutes!
                    </p>
                    <p className="text">
                      CodeExplain automatically creates summaries for your code,
                      in minutes! It does this by giving each variable, function
                      and class a description that can be easily understood.
                      This allows you to quickly understand the flow of your
                      program, without having to read through thousands of lines
                      of code.
                    </p>
                    <h3 className="mt-4">
                      What if I told you that you could get the gist of a code
                      in minutes?
                    </h3>
                    <p className="text">
                      Explain Code is designed to be used by everyone in a
                      software project. If a developer needs to explain some
                      code to his teammates, he can use Explain Code to quickly
                      create an easy-to-read summary of it. If a designer wants
                      to know more about the project she's working on, she can
                      use Explain Code to get the gist of what everything does.
                    </p>

                    <ul className="list-unstyled d-flex justify-content-between mt-4">
                      <li className="list-inline-item user me-2">
                        <Link to="/" className="text-muted">
                          <i className="uil uil-user text-dark"></i> Explain Code App Team</Link>
                      </li>
                      <li className="list-inline-item date text-muted">
                        <i className="uil uil-calendar-alt text-dark"></i> 21st
                        December, 2021
                      </li>
                    </ul>
                  </div>
                </Row>
              </Col>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}
