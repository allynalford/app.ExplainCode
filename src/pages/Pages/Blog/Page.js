import React, { Component } from 'react';
import { Container, Row, Col, Pagination, PaginationItem, PaginationLink, Card, CardBody } from 'reactstrap';
import { Link } from "react-router-dom";

import "react-notion/src/styles.css";
import "prismjs/themes/prism-tomorrow.css"; // only needed for code highlighting
import { NotionRenderer } from "react-notion";
import { initGA, PageView} from '../../../../../common/gaUtils.js';
//Import components
import PageBreadcrumb from "../../../components/Shared/PageBreadcrumb";


var endpoint = require('../../../../../common/endpoint');


class PageBlogList extends Component {
    constructor(props, { match }) {
        super(props);
        console.log(props);
        const params = {id: 'e146a307-9f72-4179-8b3b-25c986873da6'};
        this.state={
            blockMap : [],
            pageId: params.id,
            pathItems : [
                //id must required
                { id : 1, name : "Tenably", link : "/" },
                { id : 2, name : "Blog", link : "/blog" },
                { id : 3, name : "Page", link : `/blog/page/${params.id}` }
            ],
        }
    }

    componentDidMount() {
        document.body.classList = "";
        initGA();
        PageView();
        document.title = "Tenably - Web Accessibility Blog";
        window.addEventListener("scroll", this.scrollNavigation, true);

        const loadBlog = async(event) => {
            const resp = await endpoint._getExternal(`https://notion-api.tenably.workers.dev/v1/page/${this.state.pageId}`);
        
            console.log(resp);

            if(typeof resp.data !== "undefined"){
                this.setState({blockMap: resp.data});
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
        return (
          <React.Fragment>
            {/* breadcrumb */}
            <PageBreadcrumb
              title="Blog Listing"
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

            <section className="section">
              <Container>
                <div style={{ maxWidth: 768 }}>
                  <NotionRenderer blockMap={this.state.blockMap} />
                </div>
              </Container>
            </section>
          </React.Fragment>
        );
    }
}

export default PageBlogList;