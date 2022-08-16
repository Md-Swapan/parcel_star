import React from "react";
import "./Nav.css";
import logo from "../../../assets/img/Rectangle 58.png";

const Nav = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light  pt-3 pb-0">
        <div className="container-fluid navbar-container">
          <a className="navbar-brand" href="#">
            <div id="mainlogo">
              <img style={{ width: "200px" }} src={logo} />
            </div>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item nav-menu">
                <a className="nav-link" aria-current="page" href="/">
                  HOME
                </a>
              </li>
              <li className="nav-item nav-menu">
                <a className="nav-link" aria-current="page" href="/">
                  Services
                </a>
              </li>
              <li className="nav-item nav-menu">
                <a className="nav-link" aria-current="page" href="/">
                  Delivery calculator
                </a>
              </li>
              <li className="nav-item nav-menu">
                <a className="nav-link" aria-current="page" href="/">
                  Pricing & Plan
                </a>
              </li>
              <li className="nav-item nav-menu">
                <a className="nav-link" aria-current="page" href="/">
                  Why Choose Us
                </a>
              </li>
              <li className="nav-item nav-menu">
                <a className="nav-link" aria-current="page" href="/">
                  Become a Merchant
                </a>
              </li>
              <li className="nav-item nav-menu">
                <a className="nav-link" aria-current="page" href="/">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
