import React, { Component } from "react";
import { Card, CardBody } from "reactstrap";


class PageSearchSidebar extends Component {
  render() {
    return (
      <React.Fragment>
        <Card className="border-0 sidebar sticky-bar rounded shadow">
          <CardBody>
            <div className="widget mb-4 pb-2">
              <h5 className="widget-title">Snippet Details</h5>
              <ul className="list-unstyled mt-4 mb-0 blog-categories">
                <li>
                  Language{" "}
                  <span className="float-end">{this.props.language}</span>
                </li>
                <li>
                  Length{" "}
                  <span className="float-end">{this.props.codeLength}</span>
                </li>
                {/* <li>
                  <Link to="#">Business</Link>{" "}
                  <span className="float-end">09</span>
                </li> */}
              </ul>
            </div>

            {/* <div className="widget mb-4 pb-2">
              <h5 className="widget-title">Recent Post</h5>
              <div className="mt-4">
                <div className="clearfix post-recent">
                  <div className="post-recent-thumb float-start">
                    {" "}
                    <Link to="#">
                      {" "}
                      <img
                        alt="img"
                        src={this.props.blog07}
                        className="img-fluid rounded"
                      />
                    </Link>
                  </div>
                  <div className="post-recent-content float-start">
                    <Link to="#">Consultant Business</Link>
                    <span className="text-muted mt-2">15th June, 2019</span>
                  </div>
                </div>
                <div className="clearfix post-recent">
                  <div className="post-recent-thumb float-start">
                    {" "}
                    <Link to="#">
                      {" "}
                      <img
                        alt="img"
                        src={this.props.blog08}
                        className="img-fluid rounded"
                      />
                    </Link>
                  </div>
                  <div className="post-recent-content float-start">
                    <Link to="#">Look On The Glorious Balance</Link>{" "}
                    <span className="text-muted mt-2">15th June, 2019</span>
                  </div>
                </div>
                <div className="clearfix post-recent">
                  <div className="post-recent-thumb float-start">
                    {" "}
                    <Link to="#">
                      {" "}
                      <img
                        alt="img"
                        src={this.props.blog01}
                        className="img-fluid rounded"
                      />
                    </Link>
                  </div>
                  <div className="post-recent-content float-start">
                    <Link to="#">Research Financial.</Link>{" "}
                    <span className="text-muted mt-2">15th June, 2019</span>
                  </div>
                </div>
              </div>
            </div> */}

            {/* <div className="widget mb-4 pb-2">
              <h5 className="widget-title">Tags Cloud</h5>
              <div className="tagcloud mt-4">
                <Link to="#" className="rounded">
                  Business
                </Link>
                <Link to="#" className="rounded ms-1">
                  Finance
                </Link>
                <Link to="#" className="rounded ms-1">
                  Marketing
                </Link>
                <Link to="#" className="rounded">
                  Fashion
                </Link>
                <Link to="#" className="rounded ms-1">
                  Bride
                </Link>
                <Link to="#" className="rounded ms-1">
                  Lifestyle
                </Link>
                <Link to="#" className="rounded">
                  Travel
                </Link>
                <Link to="#" className="rounded ms-1">
                  Beauty
                </Link>
                <Link to="#" className="rounded ms-1">
                  Video
                </Link>
                <Link to="#" className="rounded ms-1">
                  Audio
                </Link>
              </div>
            </div> */}

            {/* <div className="widget">
              <h5 className="widget-title">Follow us</h5>
              <ul className="list-unstyled social-icon mb-0 mt-4">
                <li className="list-inline-item ms-1">
                  <Link to="#" className="rounded">
                    <i>
                      <FeatherIcon
                        icon="facebook"
                        className="fea icon-sm fea-social"
                      />
                    </i>
                  </Link>
                </li>
                <li className="list-inline-item ms-1">
                  <Link to="#" className="rounded">
                    <i>
                      <FeatherIcon
                        icon="instagram"
                        className="fea icon-sm fea-social"
                      />
                    </i>
                  </Link>
                </li>
                <li className="list-inline-item ms-1">
                  <Link to="#" className="rounded">
                    <i>
                      <FeatherIcon
                        icon="twitter"
                        className="fea icon-sm fea-social"
                      />
                    </i>
                  </Link>
                </li>
                <li className="list-inline-item ms-1">
                  <Link to="#" className="rounded">
                    <i>
                      <FeatherIcon
                        icon="linkedin"
                        className="fea icon-sm fea-social"
                      />
                    </i>
                  </Link>
                </li>
                <li className="list-inline-item ms-1">
                  <Link to="#" className="rounded">
                    <i>
                      <FeatherIcon
                        icon="github"
                        className="fea icon-sm fea-social"
                      />
                    </i>
                  </Link>
                </li>
                <li className="list-inline-item ms-1">
                  <Link to="#" className="rounded">
                    <i>
                      <FeatherIcon
                        icon="youtube"
                        className="fea icon-sm fea-social"
                      />
                    </i>
                  </Link>
                </li>
                <li className="list-inline-item ms-1">
                  <Link to="#" className="rounded">
                    <i>
                      <FeatherIcon
                        icon="gitlab"
                        className="fea icon-sm fea-social"
                      />
                    </i>
                  </Link>
                </li>
              </ul>
            </div> */}
          </CardBody>
        </Card>
      </React.Fragment>
    );
  }
}

export default PageSearchSidebar;
