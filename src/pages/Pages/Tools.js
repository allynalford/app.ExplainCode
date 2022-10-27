// React Basic and Bootstrap
import React, { Component } from 'react';
import { Container, Row, Col} from 'reactstrap';
import { Helmet } from "react-helmet";
//Import components
import PageBreadcrumb from "../../components/Shared/PageBreadcrumb";
import SectionTitle from "../../components/Shared/SectionTitle";
import Feature from "../../components/Shared/Feature";

//Import Images
import img1 from "../../assets/images/client/01.jpg";
import img2 from "../../assets/images/client/02.jpg";
import img3 from "../../assets/images/client/03.jpg";
import img4 from "../../assets/images/client/04.jpg";
import img5 from "../../assets/images/client/05.jpg";
import img6 from "../../assets/images/client/06.jpg";


import work1 from "../../assets/images/work/1.jpg";
import work2 from "../../assets/images/work/2.jpg";
import work3 from "../../assets/images/work/3.jpg";
import work4 from "../../assets/images/work/4.jpg";

import WaitlistButtonSolo from '../../components/waitlist-button-solo';

class PageServices extends Component {

    constructor(props) {
        super(props);
        this.state = {
            pathItems : [
                //id must required
                { id : 1, name : "Explain Code", link : "/" },
                { id : 2, name : "Tools" },
            ],
            reviews : [
                { id : 1, img : img1, name : "Thomas Israel", post : "C.E.O", desc : "It seems that only fragments of the original text remain in the Lorem Ipsum texts used today.", rating : 5 },
                { id : 2, img : img2, name : "Barbara McIntosh", post : "M.D", desc : "One disadvantage of Lorum Ipsum is that in Latin certain letters appear more frequently than others.", rating : 4 },
                { id : 3, img : img3, name : "Carl Oliver", post : "P.A", desc : "The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century.", rating : 3 },
                { id : 4, img : img4, name : "Christa Smith", post : "Manager", desc : "According to most sources, Lorum Ipsum can be traced back to a text composed by Cicero.", rating : 5 },
                { id : 5, img : img5, name : "Dean Tolle", post : "Developer", desc : "There is now an abundance of readable dummy texts. These are usually used when a text is required.", rating : 5 },
                { id : 6, img : img6, name : "ill Webb", post : "Designer", desc : "Thus, Lorem Ipsum has only limited suitability as a visual filler for German texts.", rating : 4 },
            ],
            features : [
                { id : 1, icon : 'uil uil-list-ul h1 text-primary', title : "Line by Line Explanations", description : "Learn to code by breaking it down into lines and chunks. Explain Code gives you line by line explanation of code. It helps you in learning programming concepts and improves your coding skills." },
                { id : 2, icon : 'uil uil-document-layout-left h1 text-primary', title : "Code Summarization", description : "Save yourself time and energy, reduce the time to understand code by summarizing it all into one. Now you don't need to read long code to understand it. Allowing you to save time understanding Javascript, Python, Go Lang or SQL code in a short amount of time using this explainer tool." },
                { id : 3, icon : 'uil uil-comment-edit h1 text-primary', title : "Code Comments", description : "Save time and effort explaining unfamiliar code. Just enter your function or code snippet to get Javadoc or DocString formatted comments for your Javascript, NodeJS, Python, React, Golang or SQL code. Code Explain eliminates the need for developers to manual conceptual overviews and descriptions. " },
                { id : 4, icon : 'uil uil-code-branch h1 text-primary', title : "Class Breakdown", description : "Understanding the purpose of a class can be difficult. But not anymore, Break down classes to help you gain an in depth knowledge of what the class is intended to do, what they call and more." },
                { id : 5, icon : 'uil uil-comment-question h1 text-primary', title : "Open Questions", description : "Don’t know what a block of code does? Paste your code into the editor and ask an open question about it. It’s that simple!. The built in AI understands code like never before. You can learn how to code an app with this code tool that teaches you how to code with the right questions." },
                { id : 6, icon : 'uil uil-brackets-curly h1 text-primary', title : "Explain Function", description : "Our tool provides you an explanation for your function. This will help you to better understand how the code works and what results it produces." },
                { id : 7, icon : 'uil uil-arrow h1 text-primary', title : "English to SQL", description : "The Explain Code App allows you to convert text-to-sql by describing your query in plain English. You can select, update or delete table records all from the plain English description of your SQL statement. You'll get an SQL statement for what you describe." },
                { id : 8, icon : 'uil uil-angle-double-right h1 text-primary', title : "JavaScript to Python", description : "Explain Code App translates JavaScript to Python code. This tool allows you to convert your python source code into JavaScript code. Use it on your own JavaScript to learn Python or use it on existing Python code to compare it against the JavaScript. Explain Code App's JS to Python converter is able to translate virtually any JavaScript code  to Python." },
                { id : 9, icon : 'uil uil-bug h1 text-primary', title : "Python Bug Fixer", description : " Fixing bugs in your Python code can be difficult and time consuming. Rapidly understand where your code contains bugs with our Python Bug Fixer. Let us help you quickly discover bugs, identify the root cause, and fix them all before they become a real problem." },
            ],
            languages : [
                { id : 1, lang: true, dataicon:"logos:javascript", icon : 'uil uil-list-ul h1 text-primary', title : "NodeJS (JavaScript)", description : "JavaScript is everywhere. Some of the world's most visited websites and apps are built with JavaScript, and an increasing number of developers are using JavaScript frameworks to build the web applications of the future. Discover how to build JavaScript web applications with React, JSX and NodeJS." },
                { id : 2, lang: true, dataicon:"logos:python", icon : 'uil uil-document-layout-left h1 text-primary', title : "Python", description : "Python is a general purpose language, which means that it can be used to create a variety of different programs and isn't specialized for any specific problems. One of Python’s design philosophies is to make code easy to read, which makes Python an ideal choice for small and large-scale projects." },
                { id : 3, lang: true, dataicon:"grommet-icons:golang", icon : 'uil uil-comment-edit h1 text-primary', title : "GO (Golang)", description : "Go is a general-purpose programming language created by Google engineers, who modeled it after the C programming language. Go is designed to create dependable and efficient software that runs on single and multi-core processors, computer clusters, the cloud, and more." },
                { id : 4, lang: true, dataicon:"vscode-icons:file-type-sql", icon : 'uil uil-list-ul h1 text-primary', title : "SQL (Structured Query Language)", description : "It is the language used by databases in a universal way. It is widely used because it's easy to learn. Most programming languages incorporate modules that allow interaction with SQL databases, which enormously expands their capabilities and usages." },
                { id : 5, lang: true, dataicon:"logos:lua", icon : 'uil uil-comment-edit h1 text-primary', title : "Lua", description : "Lua is a powerful, efficient, lightweight, embeddable scripting language. It supports procedural programming, object-oriented programming, functional programming, data-driven programming, and data description. Lua combines simple procedural syntax with powerful data description constructs based on associative arrays and extensible semantics." },
                { id : 6, lang: true, dataicon:"vscode-icons:file-type-light-solidity", icon : 'uil uil-document-layout-left h1 text-primary', title : "Solidity - Coming soon", description : "Web3, NFT's and blockchain are the future. The Solidity programming language was influenced by C++ as well as JavaScript and its syntax is similar to the latter. It's a high level programming language designed to be written directly on the Ethereum Virtual Machine." },
                
            ],
            works : [
                { imgUrl : work1, title : "Shifting Perspective", subtitle : "Studio", author : "Calvin Carlo", date : "13th August, 2019" },
                { imgUrl : work2, title : "Colors Magazine", subtitle : "Web Design", author : "Calvin Carlo", date : "13th August, 2019" },
                { imgUrl : work3, title : "Spa Cosmetics", subtitle : "Developing", author : "Calvin Carlo", date : "13th August, 2019" },
                { imgUrl : work4, title : "Riser Coffee", subtitle : "Branding", author : "Calvin Carlo", date : "13th August, 2019" },
            ]
        }
    }

      scrollNavigation = () => {
          var doc = document.documentElement;
          var top = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);
          if(top > 80)
          {
               document.getElementById('topnav').classList.add('nav-sticky');
          }
          else
          {
            document.getElementById('topnav').classList.remove('nav-sticky');
          }
      }


    componentDidMount() {
        window.addEventListener("scroll", this.scrollNavigation, true);
    }

     // Make sure to remove the DOM listener when the component is unmounted.
     componentWillUnmount() {
        window.removeEventListener("scroll", this.scrollNavigation, true);
     }

    render() {

        return (
            <React.Fragment>
      <Helmet>
        <title>Code Explanation Tools | Python | JavaScript to Python | English to SQL</title>
        <meta name="description" content="Code Explanation Tools helps you to learn programming concepts and improve your coding skills by making it easy to understand code by breaking it down into lines and chunks. It helps you in understanding code concept and functionalities as it shows you line by line explanation of code" />
        <meta name="keywords" content="Lua, lua programming, lua explanation, explain code, explain source code, line by line explanation of code, python debugger, python bug solver, python root cause analysis, sql editor, line by line sql explanation, save sql code, explain code app, plain English to SQL code generator, sql code from plain English" />
        <meta name="twitter:title" content="Explain Code App Tools | Code Explanation Tools" />
        <meta name="twitter:image:alt" content="Code Explanation Tools" />
        <meta property="og:title" content="Code Explanation Tools | Python | JavaScript to Python | English to SQL" />
        <meta property="og:description" content="Code Explanation Tools helps you to learn programming concepts and improve your coding skills by making it easy to understand code by breaking it down into lines and chunks. It helps you in understanding code concept and functionalities as it shows you line by line explanation of code" />
      </Helmet>
                {/* breadcrumb */}
                <PageBreadcrumb
                    title="Code Explanation Tools"
                    pathItems = {this.state.pathItems}
                />
                <div className="position-relative">
                    <div className="shape overflow-hidden text-white">
                        <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
                        </svg>
                    </div>
                </div>

                <section className="section">
                <Container className="mt-100 mt-60">
                        {/* Render Section Title */}
                        <SectionTitle title="Improve Your Coding Skills" desc="These code explanation tools is all you need to learn programming concepts, understand code and master functionalities. It shows you line by line explanation of code as an overlay to the lines in your editor and help you to understand any piece of code. It makes learning JavaScript, SQL and other coding concepts fun, easy and quick!" />

                        {/* clients slider 
                        <ReviewsSlider reviews={this.state.reviews} colClass="mt-4"/>
                        */}
                    </Container>
                    <Container>
                        {/* feature box */}
                        <Feature featureArray={this.state.features}/>
                        <div style={{marginTop: '15px'}}>
                          <WaitlistButtonSolo />
                        </div>
                    </Container>
                    
                    <Container className="mt-100 mt-60">
                        {/* Render Section Title */}
                        <SectionTitle title="What Explain Code App will support" desc="We have decided to start out supporting Node JS, Python, Go, and SQL. Once we have an established a strong community around our initial languages, we will rapidly grow and support new languages for all developers." />

                        {/* clients slider 
                        <ReviewsSlider reviews={this.state.reviews} colClass="mt-4"/>
                        */}
                    </Container>
                    <Container>
                        {/* feature box */}
                        <Feature featureArray={this.state.languages}/>
                        <div style={{marginTop: '15px'}}>
                          <WaitlistButtonSolo />
                        </div>
                    </Container>
                </section>

                <section className="section bg-light">
                    {/* <Container>
                    
                    <SectionTitle title="Our Latest Projects" desc="that can provide everything you need to generate awareness, drive traffic, connect." />

                        <Row>
                            {
                                this.state.works.map((work, key) =>
                                    <Col key={key} md={6} xs={12} className="mt-4 pt-2">
                                        <Card className="work-container work-modern position-relative overflow-hidden shadow rounded border-0">
                                            <CardBody className=" p-0">
                                                <img src={work.imgUrl} className="img-fluid rounded" alt="work"/>
                                                <div className="overlay-work bg-dark"></div>
                                                <div className="content">
                                                    <Link to="page-work-detail" className="title text-white d-block fw-bold">{work.title}</Link>
                                                    <small className="text-light">{work.subtitle}</small>
                                                </div>
                                                <div className="client">
                                                    <small className="text-light user d-block"><i className="mdi mdi-account"></i> {work.author}</small>
                                                    <small className="text-light date"><i className="mdi mdi-calendar-check"></i> {work.date}</small>
                                                </div>
                                            </CardBody>
                                        </Card>
                                    </Col>
                                )
                            }
                        </Row>
                    </Container> */}

                    <Container className="mt-100 mt-60">
                        <Row className="justify-content-center">
                            <Col xs="12" className="text-center">
                                <div className="section-title">
                                    <h3 className="title mb-4">Get Started Today</h3>
                                    <p className="text para-desc mx-auto">Start a 7-day free trial today without a credit card. Our new Explain Code application is a revolutionary way to learn how to write code and make suggestions that will help.</p>
                                    {/* <div className="mt-4">
                                        <Link to="#" className="btn btn-primary mt-2 me-2">Get Started Now</Link>{" "}
                                        <Link to="#" className="btn btn-outline-primary mt-2">Free Trial</Link>
                                    </div> */}
                                </div>
                                <WaitlistButtonSolo />
                            </Col>
                        </Row>
                    </Container>
                </section>
            </React.Fragment>
        );
    }
}
export default PageServices;
