import React, { Component } from 'react';
import Quick from './Quick';
import Section from './Section';
import KeyFeatures from './KeyFeatures';
import Documention from './Documention';
import { PageView, initGA } from '../../common/gaUtils.js';
import { Helmet } from "react-helmet";
export default class index extends Component {
  componentDidMount() {
    document.body.classList = '';
    window.addEventListener('scroll', this.scrollNavigation, true);
    initGA();
    PageView();
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
          <title>Explain Code App - Explanations for your code</title>
          <meta name="description"
            content="The Explain Code App uses GPT-3 to automatically learn from open source code repositories, understand unfamiliar programming constructs and explain difficult code in plain english." />
          <meta name="keywords"
            content="Nodejs, Go, golang, SQL, Python, liquid, code, programming code, code translator, explain code, understand code, programming, javascript, java, GPT-3, code explainer, code review, code examples, code documentation, bad code examples, software examples, example code" />
          <meta name="twitter:title"
            content="Explain Code App lets you blast through code with easy-to-understand explanations" />
          <meta name="twitter:image:alt" content="Explain Code App: a new way to read and understand code" />
          <meta property="og:title" content="Explain Code App - Explanations for your code" />
          <meta property="og:description" content="The Explain Code App uses GPT-3 to automatically learn from open source code repositories, understand unfamiliar programming constructs and explain difficult code in plain english." />
        </Helmet>
        <div id="maincontent">
          {/* Section */}
          <Section />

          {/* Partner 
            <Partners />
            */}
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
            <KeyFeatures />
            <Quick />
            <Documention />
            {/* <LandrickTeam /> */}
          </section>
        </div>
      </React.Fragment>
    );
  }
}
