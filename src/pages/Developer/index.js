import React, { Component } from 'react';
import { Container } from 'reactstrap';
import Section from './Section';
import KeyFeatures from './KeyFeatures';
import Documentation from './Documentation';
import { PageView, initGA } from '../../common/gaUtils.js';
import { Helmet } from "react-helmet";
import Feature from "../../components/Shared/Feature";

export default class index extends Component {

  constructor(props) {
    super(props);
    this.state = {
        languages : [
            { id : 1, lang: true, dataicon:"logos:javascript", icon : 'uil uil-list-ul h1 text-primary', title : "NodeJS (JavaScript)", description : "JavaScript is everywhere. Some of the world's most visited websites and apps are built with JavaScript, and an increasing number of developers are using JavaScript frameworks to build the web applications of the future. Discover how to build JavaScript web applications with React, JSX and NodeJS." },
            { id : 2, lang: true, dataicon:"logos:python", icon : 'uil uil-document-layout-left h1 text-primary', title : "Python", description : "Python is a general purpose language, which means that it can be used to create a variety of different programs and isn't specialized for any specific problems. One of Python’s design philosophies is to make code easy to read, which makes Python an ideal choice for small and large-scale projects." },
            { id : 3, lang: true, dataicon:"grommet-icons:golang", icon : 'uil uil-comment-edit h1 text-primary', title : "GO (Golang)", description : "Go is a general-purpose programming language created by Google engineers, who modeled it after the C programming language. Go is designed to create dependable and efficient software that runs on single and multi-core processors, computer clusters, the cloud, and more." },
            { id : 4, lang: true, dataicon:"vscode-icons:file-type-sql", icon : 'uil uil-list-ul h1 text-primary', title : "SQL (Structured Query Language)", description : "It is the language used by databases in a universal way. It is widely used because it's easy to learn. Most programming languages incorporate modules that allow interaction with SQL databases, which enormously expands their capabilities and usages." },
            { id : 5, lang: true, dataicon:"logos:lua", icon : 'uil uil-comment-edit h1 text-primary', title : "Lua", description : "Lua is a powerful, efficient, lightweight, embeddable scripting language. It supports procedural programming, object-oriented programming, functional programming, data-driven programming, and data description. Lua combines simple procedural syntax with powerful data description constructs based on associative arrays and extensible semantics." },
            { id : 6, lang: true, dataicon:"vscode-icons:file-type-light-solidity", icon : 'uil uil-document-layout-left h1 text-primary', title : "Solidity - Coming soon", description : "Web3, NFT's and blockchain are the future. The Solidity programming language was influenced by C++ as well as JavaScript and its syntax is similar to the latter. It's a high level programming language designed to be written directly on the Ethereum Virtual Machine." },
        ],
    }
}

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
          <title>Explain Code App: Online Code Explainer</title>
          <meta name="description"
            content="The Explain Code App uses GPT-3 to automatically learn from open source code repositories, understand unfamiliar programming constructs and explain difficult code in plain english." />
          <meta name="keywords"
            content="code explainer online, code explainer tool, explain code line by line, python code explainer,explanation tool app, code explanation, code explainer, explain code, explanation tool, code understanding tools, explain javascript, python code bug tools" />
          <meta name="twitter:title"
            content="Explain Code App lets you blast through code with easy-to-understand explanations" />
          <meta name="twitter:image:alt" content="Explain Code App: a new way to read and understand code" />
          <meta property="og:title" content="Explain Code App: Online Code Explainer" />
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
            {/* <Quick /> */}
            <Documentation />
          </section>
          <section className="section">
            <Container>
              {/* feature box */}
              <Feature featureArray={this.state.languages} />

            </Container>
          </section>
        </div>
      </React.Fragment>
    );
  }
}
