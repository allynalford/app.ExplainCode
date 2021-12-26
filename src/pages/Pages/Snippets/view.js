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
import dateFormat from 'dateformat';
import ReactPaginate from 'react-paginate';
import MainSideBar from '../../../components/Layout/sidebar';
import { getSnippets } from '../../../common/config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngleLeft,
  faAngleRight,
  faAngleDoubleLeft,
  faAngleDoubleRight,
} from '@fortawesome/free-solid-svg-icons';
import TableLoader from '../../../components/TableLoader';
import Threedots from '../../../components/Threedots';
const endpoint = require('../../../common/endpoint');



const customLabels = {
  first: <FontAwesomeIcon icon={faAngleDoubleLeft}/>,
  last: <FontAwesomeIcon icon={faAngleDoubleRight}/>,
  previous: <FontAwesomeIcon icon={faAngleLeft}/>,
  next: <FontAwesomeIcon icon={faAngleRight}/>
}
function View({ history }) {

  const { user } = useAuth0();
  const pageRangeDisplayed = 1;
  //const { name } = user;
  const { userglobaluuid } = user[process.env.REACT_APP_AUTH0_USER_METADATA];
  const [snippets, setSnippets] = useState([]);
  const [snippetsCount, setSnippetsCount] = useState(0);
  const [itemsPerPage , setItemsPerPage ] = useState(5);
  const [LastEvaluatedKey, setLastEvaluatedKey] = useState(undefined);
  const [filter, setFilter] = useState(undefined);
  // We start with an empty list of items.
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [loading, setLoading] = useState(false);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const itemOffset = 0;
  const sortByDate = arr => {
    const sorter = (a, b) => {
      return new Date(b.creationDateTime).getTime() - new Date(a.creationDateTime).getTime();
    }
    arr.sort(sorter);
  };
  useEffect(() => {
    document.title = 'Explain Code App - Snippets';
    try {
      document.body.classList = '';
      document.getElementById('top-menu').classList.add('nav-light');
    } catch (e) {
      console.error(e);
    }

    window.addEventListener('scroll', scrollNavigation, true);
    return () => {
      window.removeEventListener('scroll', scrollNavigation, true);
    };
  }, []);

  useEffect(() => {

    return () => {
    };
  }, [snippets]);



  useEffect(() => {
    
    if(typeof userglobaluuid !== "undefined"){
      setLoading(true);
      LoadPaginatedSnippets(filter).then((res) => {
        
        var payload = res.data.snippets.Items;


        sortByDate(payload);

        setLastEvaluatedKey(res.data.snippets.LastEvaluatedKey);
        setSnippets(payload);
        setCurrentItems(payload.slice(itemOffset, (itemOffset + itemsPerPage)));
        setPageCount(Math.round(res.data.snippetsCount / itemsPerPage));
        setSnippetsCount(res.data.snippetsCount);
        setLoading(false);
      }).catch((err) => {
           console.error(err);
           setLoading(false);
      });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ userglobaluuid, filter]);


  const handlePageClick = (event) => {
    const newOffset = (itemsPerPage * event.selected);

    const endOffset = (newOffset + itemsPerPage);
   
    const currentPage = snippets.slice(newOffset, endOffset);
    setLoading(true);
    if(currentPage.length === 0){
      //setItemOffset(newOffset);
        // eslint-disable-next-line no-loop-func
        LoadPaginatedSnippets(filter).then((res) => {
          //res.data.snippets
          var newSnippets = snippets;
          newSnippets.push(...res.data.snippets.Items);
  
          sortByDate(newSnippets);
          const currentItems = newSnippets.slice(newOffset, endOffset);
  
          if(currentItems.length !== 0){
            setCurrentItems(currentItems);
          }
  
          setLastEvaluatedKey(res.data.snippets.LastEvaluatedKey);
          setSnippets(newSnippets);
          setPageCount(res.data.pageCount);
          setSnippetsCount(res.data.snippetsCount);
          setLoading(false);
        }).catch((err) => {
             console.error(err);
             setLoading(false);
        });

    }else{
      //We already have these items, use them
      setCurrentItems(currentPage);
      setLoading(false);
    }
  }

  const scrollNavigation = () => {
    var doc = document.documentElement;
    var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    if (top > 80) {
      document.getElementById('topnav').classList.add('nav-sticky');
    } else {
      document.getElementById('topnav').classList.remove('nav-sticky');
    }
  };

  async function LoadPaginatedSnippets() {
    return await endpoint.postIAM(`${getSnippets().snippetsPagination}`, {userglobaluuid, pagesize: (itemsPerPage * pageRangeDisplayed), LastEvaluatedKey, filter});
  }
 
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
                  <Form className="m-0" style={{ maxWidth: '800px' }}>
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
                <div style={{ justifyContent: 'center', display: 'flex' }} className="app-inner-layout__bottom-pane text-center">
             
                {(loading === true ? <Threedots />:<div>
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
                  /></div>)}
                  
                  </div>
                  {(loading === true ? <TableLoader style={{verticalAlign: 'top'}} /> : <Table className="mb-0 table-center">
                    <thead className="bg-light">
                      <tr>
                        <th
                          scope="col"
                          className="border-bottom"
                          style={{ minWidth: '300px' }}
                        >
                         {`Snippets: ${snippetsCount}`}
                        </th>
                        <th
                          scope="col"
                          className="border-bottom text-center"
                          style={{ maxWidth: '150px' }}
                        >
                          Length
                        </th>
                        <th
                          scope="col"
                          className="border-bottom text-center"
                          style={{ width: '100px' }}
                        >
                          Language
                        </th>
                        <th
                          scope="col"
                          className="border-bottom text-center"
                          style={{ width: '100px' }}
                        >
                          Saved
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {currentItems.map((snippet, key) => (
                        <tr key={key}>
                          <td>
                            <div className="d-flex">
                              <i className="uil uil-brackets-curly text h5"></i>
                              <div className="flex-1 content ms-3">
                                <Link
                                  to={`/snippet/${snippet.snippetuuid}`}
                                  className="forum-title text-primary fw-bold"
                                >
                                  {snippet.title}
                                </Link>
                                <p className="text-muted small mb-0 mt-2">
                                  {(typeof snippet.explanation !== "undefined" ? snippet.explanation.substring(0,100) : "")}
                                </p>
                              </div>
                            </div>
                          </td>
                          <td className="text-center small h6">{snippet.snippet.length}</td>
                          <td className="text-center small">{snippet.lang}</td>
                          <td className="text-center small">{dateFormat(snippet.creationDateTime, 'mm/dd/yyyy h:MM TT')}</td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>)}
                  
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
}
export default View;