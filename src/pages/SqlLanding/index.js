import React, { Component } from "react";
//Import Components
import Section from "./Section";
import Features from "./Features";
import SmallFeatures from "./SmallFeatures";
import About from "./About";
import { Helmet } from "react-helmet";
class Index extends Component {
  componentDidMount() {
    document.body.classList = "";
    window.addEventListener("scroll", this.scrollNavigation, true);
    document.title = "Explain Code App SQL | English to SQL"
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
        <title>Explain Code App SQL | English to SQL</title>
        <meta name="description" content="Generate complex SQL queries the easy way. Explain Code App helps you write complex SQL queries with plain English wording." />
        <meta name="keywords" content="plain language, plain english, explain code app, plain language SQL query, explain code app sql, explain code query" />
        <meta name="twitter:title" content="Explain Code App Tools | Code Explanation Tools" />
        <meta name="twitter:image:alt" content="Explain Code App SQL | English to SQL" />
        <meta property="og:title" content="Explain Code App SQL | English to SQL" />
        <meta property="og:description" content="Generate complex SQL queries the easy way. Explain Code App helps you write complex SQL queries with plain English wording." />
      </Helmet>
        <Section />

        {/* <Partners /> */}

        <section className="section overflow-hidden">
          <Features />

          <SmallFeatures />

          {/* <Services /> */}

          <About />
        </section>

       
        {/* <section className="section">

          <Faq />
        </section>
        <div className="position-relative">
          <div className="shape overflow-hidden text-light">
            <svg
              viewBox="0 0 2880 250"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M720 125L2160 0H2880V250H0V125H720Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
        </div>

        <AppStore /> */}
      </React.Fragment>
    );
  }
}

export default Index;
