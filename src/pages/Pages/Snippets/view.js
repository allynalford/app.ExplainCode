import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import {
  Button,
  Col,
  Container,
  Form,
  FormGroup,
  Row,
  Table,
} from "reactstrap";
import { useAuth0 } from '@auth0/auth0-react';
import MainSideBar from '../../../components/Layout/sidebar';
<<<<<<< HEAD
import { getSnippets } from '../../../common/config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngleLeft,
  faAngleRight,
  faAngleDoubleLeft,
  faAngleDoubleRight,
} from '@fortawesome/free-solid-svg-icons';
const endpoint = require('../../../common/endpoint');
=======
>>>>>>> parent of 0e07f17 (updates)

function View({ history }) {

  const { user } = useAuth0();
  const [userglobaluuid, setUserglobaluuid] = useState('');

  useEffect(() => {
    document.title = "Explain Code App - Snippets";
    document.body.classList = '';
    document.getElementById('top-menu').classList.add('nav-light');
    window.addEventListener('scroll', scrollNavigation, true);

    return () => {
      window.removeEventListener('scroll', scrollNavigation, true);
    };
  }, []);

  useEffect(() => {
    if (typeof user !== 'undefined') {
       setUserglobaluuid(
         user[process.env.REACT_APP_AUTH0_USER_METADATA].userglobaluuid
       );
    }
    return () => {};
  }, [user]);

  const scrollNavigation = () => {
    var doc = document.documentElement;
    var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    if (top > 80) {
      document.getElementById('topnav').classList.add('nav-sticky');
    } else {
      document.getElementById('topnav').classList.remove('nav-sticky');
    }
  };
 
    return (
      <React.Fragment>
        <section className="bg-half bg-light d-table w-100">
          <Container>
            <Row className="justify-content-center">
              <Col lg={12} className="text-center">
                <div className="page-next-level">
                  <h1 className="title"> Saved Snippets</h1>
                  <div className="page-next">
                    <nav aria-label="breadcrumb" className="d-inline-block">
                      <ul className="breadcrumb bg-white rounded shadow mb-0">
                        <li className="breadcrumb-item">
                          <Link to="/dashboard">Dashboard</Link>
                        </li>
                        <li
                          className="breadcrumb-item active"
                          aria-current="page"
                        >
                          Snippets
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
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
            <Row>
              <Col lg="3">
              <MainSideBar userglobaluuid={userglobaluuid} />
              </Col>
              <Col lg={9}>              
                <div className="text-center subcribe-form mb-2">
                  <Form className="m-0" style={{ maxWidth: "800px" }}>
                    <FormGroup className="mb-0">
                      <input
                        type="text"
                        id="search"
                        name="search"
                        className="rounded-pill shadow"
                        placeholder="Search Snippets..."
                        required
                      />
                      <Button
                        type="submit"
                        className="btn btn-pills btn-primary"
                      >
                        Search Snippets
                      </Button>
                    </FormGroup>
                  </Form>
                </div>

                <div className="table-responsive bg-white shadow rounded mt-4">
<<<<<<< HEAD
                <div style={{ justifyContent: 'center', display: 'flex' }} className="app-inner-layout__bottom-pane text-center">
             
                <div>
                <ReactPaginate
                    previousLabel={customLabels.previous}
                    nextLabel={customLabels.next}
                    containerClassName="pagination"
                    breakLabel="..."
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={pageRangeDisplayed}
                    pageCount={pageCount}
                    renderOnZeroPageCount={null}
                    pageClassName="page-item"
                    pageLinkClassName="page-link"
                    previousClassName="page-item"
                    previousLinkClassName="page-link"
                    nextClassName="page-item"
                    nextLinkClassName="page-link"
                    breakClassName="page-item"
                    breakLinkClassName="page-link"
                  /></div>
                  
                  </div>
                  <Table className="mb-0 table-center">
                    <thead className="bg-light">
                      <tr>
                        <th
                          scope="col"
                          className="border-bottom"
                          style={{ minWidth: '300px' }}
                        >
                         {`Snippets: ${snippetsCount}`}
=======
                  <Table className="mb-0 table-center">
                    <thead className="bg-light">
                      <tr>
                        <th scope="col" className="border-bottom" style={{ minWidth: "300px" }}>
                          Snippets Title
>>>>>>> parent of 0e07f17 (updates)
                        </th>
                        <th
                          scope="col"
                          className="border-bottom text-center"
                          style={{ maxWidth: "150px" }}
                        >
                          Posted
                        </th>
                        <th
                          scope="col"
                          className="border-bottom text-center"
                          style={{ width: "100px" }}
                        >
                          Language
                        </th>
                        <th
                          scope="col"
                          className="border-bottom text-center"
                          style={{ width: "100px" }}
                        >
                          Explanations
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <div className="d-flex">
                            <i className="uil uil-comment text-muted h5"></i>
                            <div className="flex-1 content ms-3">
                              <Link
                                to="forums-topic"
                                className="forum-title text-primary fw-bold"
                              >
                                Introductions: Landrick
                              </Link>
                              <p className="text-muted small mb-0 mt-2">
                                Start working with Landrick that can provide
                                everything you need to generate awareness, drive
                                traffic, connect.
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="text-center small h6">Calvin</td>
                        <td className="text-center small">3</td>
                        <td className="text-center small">5</td>
                      </tr>

                      <tr>
                        <td>
                          <div className="d-flex">
                            <i className="uil uil-comment text-muted h5"></i>
                            <div className="flex-1 content ms-3">
                              <Link
                                to="forums-topic"
                                className="forum-title text-primary fw-bold"
                              >
                                Web Designing and Developing
                              </Link>
                              <p className="text-muted small mb-0 mt-2">
                                Start working with Landrick that can provide
                                everything you need to generate awareness, drive
                                traffic, connect.
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="text-center small h6">George</td>
                        <td className="text-center small">3</td>
                        <td className="text-center small">5</td>
                      </tr>

                      <tr>
                        <td>
                          <div className="d-flex">
                            <i className="uil uil-comment text-muted h5"></i>
                            <div className="flex-1 content ms-3">
                              <Link
                                to="forums-topic"
                                className="forum-title text-primary fw-bold"
                              >
                                Hosting and providers
                              </Link>
                              <p className="text-muted small mb-0 mt-2">
                                Start working with Landrick that can provide
                                everything you need to generate awareness, drive
                                traffic, connect.
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="text-center small h6">Parthiv</td>
                        <td className="text-center small">3</td>
                        <td className="text-center small">5</td>
                      </tr>

                      <tr>
                        <td>
                          <div className="d-flex">
                            <i className="uil uil-comment text-muted h5"></i>
                            <div className="content ms-3">
                              <Link
                                to="forums-topic"
                                className="forum-title text-primary fw-bold"
                              >
                                SEO starter guide
                              </Link>
                              <p className="text-muted small mb-0 mt-2">
                                Start working with Landrick that can provide
                                everything you need to generate awareness, drive
                                traffic, connect.
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="text-center small h6">David</td>
                        <td className="text-center small">3</td>
                        <td className="text-center small">5</td>
                      </tr>

                      <tr>
                        <td>
                          <div className="d-flex">
                            <i className="uil uil-comment text-muted h5"></i>
                            <div className="content ms-3">
                              <Link
                                to="forums-topic"
                                className="forum-title text-primary fw-bold"
                              >
                                Troubleshooting and managing issues
                              </Link>
                              <p className="text-muted small mb-0 mt-2">
                                Start working with Landrick that can provide
                                everything you need to generate awareness, drive
                                traffic, connect.
                              </p>
                            </div>
<<<<<<< HEAD
                          </td>
                          <td className="text-center small h6">{snippet.snippet.length}</td>
                          <td className="text-center small">{snippet.lang}</td>
                          <td className="text-center small">{dateFormat(snippet.creationDateTime, 'mm/dd/yyyy h:MM TT')}</td>
                        </tr>
                      ))}
=======
                          </div>
                        </td>
                        <td className="text-center small h6">Tiger</td>
                        <td className="text-center small">3</td>
                        <td className="text-center small">5</td>
                      </tr>

                      <tr>
                        <td>
                          <div className="d-flex">
                            <i className="uil uil-comment text-muted h5"></i>
                            <div className="content ms-3">
                              <Link
                                to="forums-topic"
                                className="forum-title text-primary fw-bold"
                              >
                                Backup and restore
                              </Link>
                              <p className="text-muted small mb-0 mt-2">
                                Start working with Landrick that can provide
                                everything you need to generate awareness, drive
                                traffic, connect.
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="text-center small h6">Cristina</td>
                        <td className="text-center small">3</td>
                        <td className="text-center small">5</td>
                      </tr>

                      <tr>
                        <td>
                          <div className="d-flex">
                            <i className="uil uil-comment text-muted h5"></i>
                            <div className="content ms-3">
                              <Link
                                to="forums-topic"
                                className="forum-title text-primary fw-bold"
                              >
                                Errors and how to fix them
                              </Link>
                              <p className="text-muted small mb-0 mt-2">
                                Start working with Landrick that can provide
                                everything you need to generate awareness, drive
                                traffic, connect.
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="text-center small h6">Miriam</td>
                        <td className="text-center small">3</td>
                        <td className="text-center small">5</td>
                      </tr>

                      <tr>
                        <td>
                          <div className="d-flex">
                            <i className="uil uil-comment text-muted h5"></i>
                            <div className="content ms-3">
                              <Link
                                to="forums-topic"
                                className="forum-title text-primary fw-bold"
                              >
                                Template features & Services
                              </Link>
                              <p className="text-muted small mb-0 mt-2">
                                Start working with Landrick that can provide
                                everything you need to generate awareness, drive
                                traffic, connect.
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="text-center small h6">Janalia</td>
                        <td className="text-center small">3</td>
                        <td className="text-center small">5</td>
                      </tr>

                      <tr>
                        <td>
                          <div className="d-flex">
                            <i className="uil uil-comment text-muted h5"></i>
                            <div className="content ms-3">
                              <Link
                                to="forums-topic"
                                className="forum-title text-primary fw-bold"
                              >
                                Landrick includes the ability to create a better
                                of sites by using the multisite feature.
                              </Link>
                              <p className="text-muted small mb-0 mt-2">
                                Start working with Landrick that can provide
                                everything you need to generate awareness, drive
                                traffic, connect.
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="text-center small h6">Harry</td>
                        <td className="text-center small">3</td>
                        <td className="text-center small">5</td>
                      </tr>
>>>>>>> parent of 0e07f17 (updates)
                    </tbody>
                  </Table>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
}
export default View;