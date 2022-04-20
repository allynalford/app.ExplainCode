import React, { Component } from 'react';
import { Container, Row, Col, Card, CardBody } from 'reactstrap';
import Helmet from "react-helmet";
import { initGA, PageView} from '../../../common/gaUtils.js';
//Import components
import PageBreadcrumb from "../../../components/Shared/PageBreadcrumb";
import FormLoader from "../../../components/FormLoader";
// import images

var endpoint = require('../../../common/endpoint');


class PageBlogList extends Component {
    constructor(props) {
        super(props);
        this.state={
            blockMap : [],
            loading: true,
            pathItems : [
                //id must required
                { id : 1, name : "Explain Code", link : "/" },
                { id : 2, name : "Blog", link : "/blog" }
            ]
        }
    }

    componentDidMount() {
        document.body.classList = "";
        initGA();
        PageView();
        document.title = "Explain Code Blog";
        window.addEventListener("scroll", this.scrollNavigation, true);

        const loadBlog = async() => {
            const resp = await endpoint._getExternal(`${process.env.REACT_APP_NOTION_API}/table/${process.env.REACT_APP_NOTION_TABLE_ID}`);
            //console.log(resp);

            if(typeof resp.data !== "undefined"){
                let data = resp.data;
                data.sort(function compare(a, b) {
                    var dateA = new Date(a.date);
                    var dateB = new Date(b.date);
                    return dateA - dateB;
                  });
                this.setState({blockMap: data, loading: false});
            }
        }

        loadBlog();
    }
  
    // Make sure to remove the DOM listener when the component is unmounted.
    componentWillUnmount() {
        window.removeEventListener("scroll", this.scrollNavigation, true);
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

   
    
    render() {

        function renderHeaderFragment() {
            return (
              <React.Fragment>
                <Helmet>
                <meta property="og:url" content="https://www.explaincode.app/blog" />
                <meta property="og:title" content="Explain Code Blog" />
                <meta name="description"
            content="Explain Code Blog. Use GPT-3 to automatically learn from open source code repositories, understand unfamiliar programming constructs and explain difficult code in plain english." />
          <meta name="keywords"
            content="Explain Code Blog, Blog, Explain Code, Nodejs, Go, golang, SQL, Python, liquid, code, programming code, code translator, explain code, understand code, programming, javascript, java, GPT-3, code explainer, code review, code examples, code documentation, bad code examples, software examples, example code" />
          <meta name="twitter:title"
            content="Explain Code Blog, blast through code with easy-to-understand explanations" />
          <meta name="twitter:image:alt" content="Explain Code Blog: a new way to read and understand code" />
          <meta property="og:title" content="Explain Code Blog - Explanations for your code" />
          <meta property="og:description" content="Explain Code Blog, use GPT-3 to automatically learn from open source code repositories, understand unfamiliar programming constructs and explain difficult code in plain english." />

       
                </Helmet>
              </React.Fragment>
            );
          }

        return (
          <React.Fragment>
            {renderHeaderFragment()}
            {/* breadcrumb */}
            <PageBreadcrumb
              title="Explain Code Blog"
              pathItems={this.state.pathItems}
            />

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
            {this.state.loading === true ? (
              <section className="section">
                <Container>
                  <Row className="justify-content-center">
                    <Col lg={12} xs={12}>
                      <FormLoader />
                    </Col>
                  </Row>
                </Container>
              </section>
            ) : (
              <section className="section">
                <Container>
                  <Row>
                    {this.state.blockMap.map((blog, key) =>
                      key % 2 === 0 ? (
                        <Col lg={6} xs={12} key={key} className="mb-4 pb-2">
                          <Card className="blog rounded border-0 shadow overflow-hidden">
                            <Row className="align-items-center no-gutters">
                              <Col md={6}>
                                <img
                                  src={blog.Image}
                                  className="img-fluid"
                                  alt={blog.Name}
                                  height="600"
                                  width={"800"}
                                />
                                <div className="overlay bg-dark"></div>
                                <div className="author">
                                  <small className="text-light user d-block">
                                    <i className="mdi mdi-account"></i>
                                    {blog.Author}
                                  </small>
                                  <small className="text-light date">
                                    <i className="mdi mdi-calendar-check"></i>
                                    {blog.Date}
                                  </small>
                                </div>
                              </Col>

                              <Col md={6}>
                                <CardBody className="content">
                                  <h2>
                                    <a
                                      href={(typeof blog.URL !== "undefined" ? `/blog/page/${blog.URL}` : `/blog/page/${blog.id}`)}
                                      className="card-title title text-dark"
                                      alt={blog.Name}
                                    >
                                      {blog.Name}
                                    </a>
                                  </h2>
                                  <p className="text mb-0">{blog.desc}</p>
                                  <div className="post-meta d-flex justify-content-between mt-3">
                                    {/* <ul className="list-unstyled mb-0">
                                      <li className="list-inline-item mr-2 mb-0">
                                        <Link
                                          to="#"
                                          className="text-muted like"
                                        >
                                          <i className="mdi mdi-heart-outline mr-1"></i>
                                          {blog.like}
                                        </Link>
                                      </li>
                                      <li className="list-inline-item ml-1">
                                        <Link
                                          to="#"
                                          className="text-muted comments"
                                        >
                                          <i className="mdi mdi-comment-outline mr-1"></i>
                                          {blog.comment}
                                        </Link>
                                      </li>
                                    </ul> */}
                                    <a
                                      href={(typeof blog.URL !== "undefined" ? `/blog/page/${blog.URL}` : `/blog/page/${blog.id}`)}
                                      className="text readmore"
                                      alt={"read " + blog.Name}
                                    >
                                      Read Post{" "}
                                      <i className="mdi mdi-chevron-right"></i>
                                    </a>
                                  </div>
                                </CardBody>
                              </Col>
                            </Row>
                          </Card>
                        </Col>
                      ) : (
                        <Col lg={6} xs={12} key={key} className="mb-4 pb-2">
                          <Card className="blog rounded border-0 shadow overflow-hidden">
                            <Row className="align-items-center no-gutters">
                              <Col md={{ size: 6, order: 1 }} xs={{ order: 2 }}>
                                <CardBody className="content">
                                  <h2>
                                    <a
                                      href={(typeof blog.URL !== "undefined" ? `/blog/page/${blog.URL}` : `/blog/page/${blog.id}`)}
                                      className="card-title title text-dark"
                                    >
                                      {blog.Name}
                                    </a>
                                  </h2>
                                  <p className="text mb-0">{blog.desc}</p>
                                  <div className="post-meta d-flex justify-content-between mt-3">
                                    {/* <ul className="list-unstyled mb-0">
                                      <li className="list-inline-item mr-2 mb-0">
                                        <Link to="#" className="text like">
                                          <i className="mdi mdi-heart-outline mr-1"></i>
                                          {blog.like}
                                        </Link>
                                      </li>
                                      <li className="list-inline-item ml-1">
                                        <Link to="#" className="text comments">
                                          <i className="mdi mdi-comment-outline mr-1"></i>
                                          {blog.comment}
                                        </Link>
                                      </li>
                                    </ul> */}
                                    <a
                                      href={(typeof blog.URL !== "undefined" ? `/blog/page/${blog.URL}` : `/blog/page/${blog.id}`)}
                                      className="text readmore"
                                      alt={"read " + blog.Name}
                                    >
                                      Read Post{" "}
                                      <i className="mdi mdi-chevron-right"></i>
                                    </a>
                                  </div>
                                </CardBody>
                              </Col>

                              <Col md={{ size: 6, order: 2 }} xs={{ order: 1 }}>
                                <img
                                  src={blog.Image}
                                  className="img-fluid"
                                  alt={blog.Name}
                                  height="600"
                                  width={"800"}
                                />
                                <div className="overlay bg-dark"></div>
                                <div className="author">
                                  <small className="text-light user d-block">
                                    <i className="mdi mdi-account"></i>{" "}
                                    {blog.Author}
                                  </small>
                                  <small className="text-light date">
                                    <i className="mdi mdi-calendar-check"></i>{" "}
                                    {blog.Date}
                                  </small>
                                </div>
                              </Col>
                            </Row>
                          </Card>
                        </Col>
                      )
                    )}

                    {/* <Col xs={12}>
                      <Pagination listClassName="justify-content-center mb-0">
                        <PaginationItem>
                          <PaginationLink href="#" aria-label="Previous">
                            Prev
                          </PaginationLink>
                        </PaginationItem>
                        <PaginationItem active>
                          <PaginationLink href="#">1</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                          <PaginationLink href="#">2</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                          <PaginationLink href="#">3</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                          <PaginationLink href="#" aria-label="Next">
                            Next
                          </PaginationLink>
                        </PaginationItem>
                      </Pagination>
                    </Col> */}
                  </Row>
                </Container>
              </section>
            )}
          </React.Fragment>
        );
    }
}

export default PageBlogList;