import React from "react";
import "./Nav.css";
import logo from "../../../assets/img/Rectangle 58.png";

const Nav = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light p-0">
        <div className="container-fluid navbar-container">
          <a className="navbar-brand" href="#">
            <div id="mainlogo">
              <img style={{ width: "200px" }} src={logo} />
            </div>
          </a>
          

          <div className="topBar-container">
            <small className="location-container">
              <i class="bi bi-geo-alt"></i> House 405, Tejgaon industrial area
              (near channel 24 ), 1208 Dhaka, Dhaka Division, Bangladesh
            </small>
            <small className="clock-container">
              <i class="bi bi-clock"></i>{" "}
              <strong className="open">Open: </strong>Saturday - Thursday {" "} |
              <strong className="close">Close: </strong> Friday
            </small>
            <div className="social-container">
              <span>
                <i class="bi bi-whatsapp"></i>
              </span>
              <span>
                <i class="bi bi-facebook"></i>
              </span>
              <span>
                <i class="bi bi-twitter"></i>
              </span>
              <span>
                <i class="bi bi-linkedin"></i>
              </span>
            </div>

          </div>
          <button
            className="navbar-toggler shadow-none"
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
              <li className="nav-item nav-menu login">
                <a className="nav-link login-link" aria-current="page" href="/">
                  Login
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
