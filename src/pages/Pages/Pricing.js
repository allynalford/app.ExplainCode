// React Basic and Bootstrap
import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane
} from "reactstrap";
import classnames from "classnames";
import { Helmet } from "react-helmet";
//Import components
import PageBreadcrumb from "../../components/Shared/PageBreadcrumb";
import Pricing from "../../components/Shared/PricingBox";
import { getPricing } from '../../common/config';

class PagePricing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pathItems: [
        //id must required
        { id: 1, name: "Explain Code App", link: "/" },
        { id: 2, name: "Pricing" },
      ],
      pricing: [
        {
          id: 1,
          title: "Free",
          price: 0,
          duration: "mo",
          buttonText: "Buy Now",
          btnLink: "",
          features: [
            { title: "Full Access" },
            { title: "Enhanced Security" },
            { title: "Source Files" },
            { title: "1 Domain Free" },
          ],
        },
        {
          id: 2,
          title: "Starter",
          price: 39,
          duration: "mo",
          buttonText: "Get Started",
          btnLink: "",
          isActive: true,
          features: [
            { title: "Full Access" },
            { title: "Source Files" },
            { title: "Free Appointments" },
            { title: "Free Installment" },
            { title: "Enhanced Security" },
          ],
        },
        {
          id: 3,
          title: "Pro",
          price: 59,
          duration: "mo",
          buttonText: "Try It Now",
          btnLink: "",
          features: [
            { title: "Full Access" },
            { title: "Enhanced Security" },
            { title: "Source Files" },
            { title: "1 Domain Free" },
          ],
        },
      ],
      activeTab: "1",
    };
    this.toggleTab = this.toggleTab.bind(this);
  }

  componentDidMount() {
    window.addEventListener("scroll", this.scrollNavigation, true);
    document.title = "Explain Code App Pricing"
  }
  // Make sure to remove the DOM listener when the component is unmounted.
  componentWillUnmount() {
    window.removeEventListener("scroll", this.scrollNavigation, true);
  }

  toggleTab(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab,
      });
    }
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
        <title>Explain Code App Pricing</title>
        <meta name="description" content="Code Explanation Tools pricing, helping you to learn programming concepts and improve your coding skills by making it easy to understand code by breaking it down into lines and chunks. It helps you in understanding code concept and functionalities as it shows you line by line explanation of code" />
        <meta name="keywords" content="pricing, Nodejs, Go, golang, SQL, Python, liquid, code, programming code, code translator, explain code, understand code, programming, javascript, java, GPT-3, code explainer, code review, code examples, code documentation, bad code examples, software examples, example code" />
        <meta name="twitter:title" content="Explain Code App Pricing" />
        <meta name="twitter:image:alt" content="Explain Code App Pricing" />
        <meta property="og:title" content="Explain Code App Pricing" />
        <meta property="og:description" content="Code Explanation Tools pricing, helping you to learn programming concepts and improve your coding skills by making it easy to understand code by breaking it down into lines and chunks. It helps you in understanding code concept and functionalities as it shows you line by line explanation of code" />
      </Helmet>
        {/* breadcrumb */}
        <PageBreadcrumb title="Pricing" pathItems={this.state.pathItems} />


        <section className="section">

          <Container className="mt-100 mt-60">

            <Row className="align-items-center">
              <Col xs="12" className="mt-4 pt-2">
                <div className="text-center">
                  <Nav
                    pills
                    className="rounded-pill justify-content-center d-inline-block border py-1 px-2"
                  >
                    <NavItem className="d-inline-block">
                      <NavLink
                        className={classnames(
                          { active: this.state.activeTab === "1" },
                          "px-3",
                          "rounded-pill",
                          "monthly"
                        )}
                        onClick={() => {
                          this.toggleTab("1");
                        }}
                      >
                        Monthly
                      </NavLink>
                    </NavItem>{" "}
                    <NavItem className="d-inline-block">
                      <NavLink
                        className={classnames(
                          { active: this.state.activeTab === "2" },
                          "px-3",
                          "rounded-pill",
                          "yearly"
                        )}
                        onClick={() => {
                          this.toggleTab("2");
                        }}
                      >
                        Yearly{" "}
                      </NavLink>
                    </NavItem>
                  </Nav>
                </div>

                <TabContent activeTab={this.state.activeTab}>
                  <TabPane tabId="1">
                    <Row>
                      {/* pricing */}
                      <Pricing pricings={getPricing()} yearly={false}/>
                    </Row>
                  </TabPane>

                  <TabPane tabId="2">
                    <Row>
                      {/* pricing */}
                      <Pricing pricings={getPricing()} yearly={true}/>
                    </Row>
                  </TabPane>
                </TabContent>
              </Col>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}
export default PagePricing;
