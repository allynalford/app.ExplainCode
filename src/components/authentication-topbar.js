import React,{ Fragment, useEffect, useState } from "react";

import { Link } from "react-router-dom";
import {
  Form,
  Dropdown,
  DropdownMenu,
  DropdownToggle
} from "reactstrap";


import { useAuth0 } from '@auth0/auth0-react';
import { getPrompts } from '../pages/Pages/Account/config';

const AuthenticationNav = () => {
  const { isAuthenticated, logout } = useAuth0();
  const [dropdownOpenShop, setDropdownOpenShop] = useState(false);
  const [dropdownIsOpen, setDropdownIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [dropdownOpenHome, setDropdownOpenHome] = useState(false);


 const toggleDropdownHome = () => {
  setDropdownOpenHome(!dropdownOpenHome);
};
  const toggleDropdownShop = () => {
    setDropdownOpenShop(!dropdownOpenShop);
  };
  const toggleDropdownIsOpen = () => {
    setDropdownIsOpen(!dropdownIsOpen);
  };
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };
 
  return isAuthenticated ? (
    <Fragment>
      <ul className="buy-button list-inline mb-0">
        <li className="list-inline-item mb-0">
          <Dropdown isOpen={dropdownOpen} toggle={toggleDropdown}>
            <DropdownToggle
              direction="right"
              color="none"
              type="button"
              className="btn btn-link text-decoration-none p-0 pe-2"
            >
              <i className="mdi mdi-magnify h4 text-muted"></i>
            </DropdownToggle>
            <DropdownMenu
              right
              className="dd-menu bg-white shadow rounded border-0 mt-3 py-0"
              style={{ width: '300px' }}
            >
              <Form>
                <input
                  type="text"
                  id="text"
                  name="name"
                  className="form-control border bg-white"
                  placeholder="Search..."
                />
              </Form>
            </DropdownMenu>
          </Dropdown>
        </li>
        <li className="list-inline-item mb-0 pe-1">
          <Dropdown isOpen={dropdownOpenShop} toggle={toggleDropdownShop}>
            <DropdownToggle type="button" className="btn btn-icon btn-primary ">
              <i className="uil uil-archway align-middle icons"></i>
            </DropdownToggle>
            <DropdownMenu
              direction="left"
              className="dd-menu bg-white shadow rounded border-0 mt-3 py-3"
              style={{ width: '200px' }}
            >
              <Link className="dropdown-item text-dark" to="/">
                <i className="uil uil-archway align-middle me-1"></i> Home
              </Link>
              <Link className="dropdown-item text-dark" to="/dashboard">
                <i className="uil uil-analysis align-middle me-1"></i> Dashboard
              </Link>
              <Link className="dropdown-item text-dark" to="/settings">
                <i className="uil uil-mailbox align-middle me-1"></i> Contact Us
              </Link>
              <Link className="dropdown-item text-dark" to="/settings">
                <i className="uil uil-book-alt align-middle me-1"></i> History &amp; Roadmap
              </Link>
              {/* <Link className="dropdown-item text-dark" to="#">
                <i className="uil uil-arrow-circle-down align-middle me-1"></i>{' '}
                Download
              </Link> */}
              <div className="dropdown-divider my-3 border-top"></div>
              <Link
                className="dropdown-item text-dark"
                to="#"
                onClick={() =>
                  logout({
                    returnTo: window.location.origin,
                  })
                }
              >
                <i className="uil uil-sign-out-alt align-middle me-1"></i>{' '}
                Logout
              </Link>
            </DropdownMenu>
          </Dropdown>
        </li>
        <li className="list-inline-item mb-0 pe-1">
          <Dropdown isOpen={dropdownOpenHome} toggle={toggleDropdownHome}>
            <DropdownToggle type="button" className="btn btn-icon btn-primary ">
              <i className="uil uil-file-share-alt align-middle icons"></i>
            </DropdownToggle>
            <DropdownMenu
              direction="left"
              className="dd-menu bg-white shadow rounded border-0 mt-3 py-3"
              style={{ width: '200px' }}
            >
              {getPrompts(window.location).map((widget, key) => (
                <Link className="dropdown-item text-dark" to={widget.link}>
                  <i key={key} className={`${widget.icon} align-middle me-1`}></i>
                  {widget.title}
                </Link>
              ))}

              <div className="dropdown-divider my-3 border-top"></div>
              <Link className="dropdown-item text-dark" to="/snippets">
                <i className="uil uil-bookmark align-middle me-1"></i> Saved
                Snippets
              </Link>
            </DropdownMenu>
          </Dropdown>
        </li>

        {/* <li className="list-inline-item mb-0 pe-1">
          <Link
            to="#"
            className="btn btn-icon btn-primary"
            onClick={toggleWishlistModal}
          >
            <i className="uil uil-heart align-middle icons"></i>
          </Link>
        </li> */}
        <li className="list-inline-item mb-0">
          <Dropdown
            color="primary"
            isOpen={dropdownIsOpen}
            toggle={toggleDropdownIsOpen}
          >
            <DropdownToggle
              type="button"
              title="User Menu"
              // color="primary"
              className="btn btn-icon btn-primary"
            >
              <i className="uil uil-user align-middle icons"></i>
            </DropdownToggle>
            <DropdownMenu
              direction="left"
              className="dd-menu bg-white shadow rounded border-0 mt-3 py-3"
              style={{ width: '200px' }}
            >
              <Link className="dropdown-item text-dark" to="/billing">
                <i className="uil uil-invoice align-middle me-1"></i> Billing
              </Link>
              <Link className="dropdown-item text-dark" to="/settings">
                <i className="uil uil-setting align-middle me-1"></i> Settings
              </Link>
              {/* <Link className="dropdown-item text-dark" to="#">
                <i className="uil uil-arrow-circle-down align-middle me-1"></i>{' '}
                Download
              </Link> */}
              <div className="dropdown-divider my-3 border-top"></div>
              <Link
                className="dropdown-item text-dark"
                to="#"
                onClick={() =>
                  logout({
                    returnTo: window.location.origin,
                  })
                }
              >
                <i className="uil uil-sign-out-alt align-middle me-1"></i>{' '}
                Logout
              </Link>
            </DropdownMenu>
          </Dropdown>
        </li>
      </ul>
    </Fragment>
  ) : (
    ''
  );
};

export default AuthenticationNav;