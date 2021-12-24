import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  CardBody,
  Card,
} from "reactstrap";
import imgbg from "../../assets/images/account/bg.png";
import { useAuth0 } from '@auth0/auth0-react';
import FeatherIcon from "feather-icons-react";
function ProfileHeader({history}) {
 
  const { user, logout } = useAuth0();
  const { name, picture, email } = user;
  const [userglobaluuid, setUserglobaluuid] = useState("");
  const [user_metadata, setUserMetadata] = useState({});
  const [occupation, setOccupation] = useState("");
  const [twitter, setTwitter] = useState("");
  const [instagram, setInstagram] = useState("");
  const [linkedin, setLinkedin] = useState("");



  useEffect(() => {
    return () => {};
  }, []);



  useEffect(() => {
    // if(typeof user !== "undefined"){
    //   setUserglobaluuid(user[process.env.REACT_APP_AUTH0_USER_METADATA].userglobaluuid);
    // }

    setUserMetadata(user[process.env.REACT_APP_AUTH0_USER_METADATA]);
    return () => {};
  }, [ user ]);

  useEffect(() => {
    if (typeof user_metadata !== "undefined") {
      setUserglobaluuid(user_metadata.userglobaluuid);
      setOccupation(user_metadata.occupation);
      setTwitter(user_metadata.twitter);
      setInstagram(user_metadata.instagram);
      setLinkedin(user_metadata.linkedin);
    }
    return () => {};
  }, [ user_metadata ]);

  useEffect(() => {
    return () => {};
  }, [name, picture, email]);


  return (
    <React.Fragment>
      <section
        className="bg-profile d-table w-100 bg-primary"
        style={{ background: `url(${imgbg}) center center` }}
      >
        <Container>
          <Row>
            <Col lg="12">
              <Card
                className="public-profile border-0 rounded shadow"
                style={{ zIndex: '1' }}
              >
                <CardBody>
                  <Row className="align-items-center">
                    <Col lg="2" md="3" className="text-md-start text-center">
                      <img
                        src={picture}
                        className="avatar avatar-large rounded-circle shadow d-block mx-auto"
                        alt={name}
                      />
                    </Col>

                    <Col lg="10" md="9">
                      <Row className="align-items-end">
                        <Col
                          md="7"
                          className="text-md-start text-center mt-4 mt-sm-0"
                        >
                          <h3 className="title mb-0">{name}</h3>
                          <small className="text h6 me-2">{occupation}</small><br />
                          <small className="text h6 me-2">{email}</small>
                          <ul className="list-inline mb-0 mt-3">
                          <li className="list-inline-item me-2">
                                <a
                                  href={`https://www.twitter.com/${twitter}`}
                                  target={"_new"}
                                  className="text-muted"
                                  title="twitter"
                                >
                                  <i>
                                    <FeatherIcon
                                      icon="twitter"
                                      className="fea icon-sm me-2"
                                    />
                                  </i>
                                  {twitter}
                                </a>
                              </li>
                              <li className="list-inline-item me-2">
                                <a
                                  href={`https://www.instagram.com/${instagram}`}
                                  target={"_new"}
                                  className="text-muted"
                                  title="instagram"
                                >
                                  <i>
                                    <FeatherIcon
                                      icon="instagram"
                                      className="fea icon-sm me-2"
                                    />
                                  </i>
                                  {instagram}
                                </a>
                              </li>
                              <li className="list-inline-item ms-1">
                                <a
                                  href="https://www.linkedin.com/"
                                  target={"_new"}
                                  className="text-muted"
                                  title="linkedin"
                                >
                                  <i>
                                    <FeatherIcon
                                      icon="linkedin"
                                      className="fea icon-sm me-2"
                                    />
                                  </i>
                                  {linkedin}
                                </a>
                              </li>
                            </ul>
                        </Col>
                        <Col md="5" className="text-md-end text-center">
                          <ul className="list-unstyled social-icon social mb-0 mt-4">
                            {/* <li className="list-inline-item">
                              <Link to="#" className="rounded">
                                <i className="uil uil-user-plus align-middle"></i>
                              </Link>
                            </li>
                            <li className="list-inline-item">
                              <Link to="#" className="rounded">
                                <i className="uil uil-comment align-middle"></i>
                              </Link>
                            </li> */}
                            <li className="list-inline-item">
                              <Link to="/dashboard" className="rounded" title="dashboard">
                                <i className="uil uil-dashboard align-middle"></i>
                              </Link>
                            </li>
                            <li className="list-inline-item">
                              <Link to="/settings" className="rounded" title="Settings">
                                <i className="uil uil-cog align-middle"></i>
                              </Link>
                            </li>
                          </ul>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default ProfileHeader;

