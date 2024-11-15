import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Form, Input, Card, CardBody } from "reactstrap";

//Import Icons
import FeatherIcon from 'feather-icons-react';

class PageSearchSidebar extends Component {
    render() {
        return (
            <React.Fragment>
                    
                        <Card className="border-0 sidebar sticky-bar rounded shadow">
                            <CardBody>
                                
                                {/* <div className="widget mb-4 pb-2">
                                    <h4 className="widget-title">Search</h4>
                                    <div id="search2" className="widget-search mt-4 mb-0">
                                        <Form role="search" method="get" id="searchform" className="searchform">
                                            <div>
                                                <Input type="text" className="border rounded" name="s" id="s" placeholder="Search Keywords..."/>
                                                <Input type="submit" id="searchsubmit" value="Search"/>
                                            </div>
                                        </Form>
                                    </div>
                                </div> */}
                               
                                {/* <div className="widget mb-4 pb-2">
                                    <h4 className="widget-title">Catagories</h4>
                                    <ul className="list-unstyled mt-4 mb-0 blog-catagories">
                                        <li><Link to="#">Finance</Link> <span className="float-right">13</span></li>
                                        <li><Link to="#">Business</Link> <span className="float-right">09</span></li>
                                        <li><Link to="#">Blog</Link> <span className="float-right">18</span></li>
                                        <li><Link to="#">Corporate</Link> <span className="float-right">20</span></li>
                                        <li><Link to="#">Investment</Link> <span className="float-right">22</span></li>
                                    </ul>
                                </div> */}
                               
                                {/* <div className="widget mb-4 pb-2">
                                    <h3 className="widget-title">Recent Post</h3>
                                    <div className="mt-4">
                                        <div className="clearfix post-recent">
                                            <div className="post-recent-thumb float-left"> <Link to="#"> <img alt="img" src={this.props.blog07} className="img-fluid rounded"/></Link></div>
                                            <div className="post-recent-content float-left"><Link to="#">Consultant Business</Link><span className="text-muted mt-2">15th June, 2019</span></div>
                                        </div>
                                        <div className="clearfix post-recent">
                                            <div className="post-recent-thumb float-left"> <Link to="#"> <img alt="img" src={this.props.blog08} className="img-fluid rounded"/></Link></div>
                                            <div className="post-recent-content float-left"><Link to="#">Look On The Glorious Balance</Link> <span className="text-muted mt-2">15th June, 2019</span></div>
                                        </div>
                                        <div className="clearfix post-recent">
                                            <div className="post-recent-thumb float-left"> <Link to="#"> <img alt="img" src={this.props.blog01} className="img-fluid rounded"/></Link></div>
                                            <div className="post-recent-content float-left"><Link to="#">Research Financial.</Link> <span className="text-muted mt-2">15th June, 2019</span></div>
                                        </div>
                                    </div>
                                </div> */}
                              
                                {(this.props.tags.length !== 0 ? <div className="widget mb-4 pb-2">
                                    <h3 className="widget-title">Tags Cloud</h3>
                                    <div className="tagcloud mt-4">
                                    {this.props.tags.map((tag, key) => (
                                        <Link to={`/blog?tag=${tag}`} className="rounded">{tag}</Link>
                                        )
                                         )}
                                    </div>
                                </div> : null)}
                             
                                <div className="widget">
                                    <h3 className="widget-title">Follow us</h3>
                                    <ul className="list-unstyled social-icon mb-0 mt-4">
                                        <li className="list-inline-item ml-1"><a href="https://www.facebook.com/tenablylabs" target="_new" className="rounded"><i><FeatherIcon icon="facebook" className="fea icon-sm fea-social" /></i></a></li>
                                        <li className="list-inline-item ml-1"><a href="https://www.instagram.com/tenablylabs/" target="_new" className="rounded"><i><FeatherIcon icon="instagram" className="fea icon-sm fea-social" /></i></a></li>
                                        <li className="list-inline-item ml-1"><a href="https://www.twitter.com/tenablylabs/" target="_new" className="rounded"><i><FeatherIcon icon="twitter" className="fea icon-sm fea-social" /></i></a></li>
                                        <li className="list-inline-item ml-1"><a href="https://www.linkedin.com/company/tenablylabs" target="_new" className="rounded"><i><FeatherIcon icon="linkedin" className="fea icon-sm fea-social" /></i></a></li>
                                        {/* <li className="list-inline-item ml-1"><Link to="#" className="rounded"><i><FeatherIcon icon="github" className="fea icon-sm fea-social" /></i></Link></li>
                                        <li className="list-inline-item ml-1"><Link to="#" className="rounded"><i><FeatherIcon icon="youtube" className="fea icon-sm fea-social" /></i></Link></li>
                                        <li className="list-inline-item ml-1"><Link to="#" className="rounded"><i><FeatherIcon icon="gitlab" className="fea icon-sm fea-social" /></i></Link></li> */}
                                    </ul>
                                </div>
                               
                            </CardBody>
                        </Card>
                    
            </React.Fragment>
        );
    }
}

export default PageSearchSidebar;