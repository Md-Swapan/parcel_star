import React from "react";
import "./Nav.css";
import logo from "../../../assets/img/Rectangle 58.png";
import { HashLink as Link } from "react-router-hash-link";
import useAuth from "./../../../Hooks/useAuth";
import profileDemoImg from "../../../assets/img/profile1.jpg";
const Nav = () => {
  const { user, merchant, logOut } = useAuth();

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
              <i className="bi bi-geo-alt"></i> House 405, Tejgaon industrial
              area (near channel 24 ), 1208 Dhaka, Dhaka Division, Bangladesh
            </small>
            <small className="clock-container">
              <i className="bi bi-clock"></i>{" "}
              <strong className="open">Open: </strong>Saturday - Thursday |
              <strong className="close">Close: </strong> Friday
            </small>
            <div className="social-container">
              <span>
                <i className="bi bi-whatsapp"></i>
              </span>
              <span>
                <i className="bi bi-facebook"></i>
              </span>
              <span>
                <i className="bi bi-twitter"></i>
              </span>
              <span>
                <i className="bi bi-linkedin"></i>
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
                <Link
                  className="nav-link"
                  aria-current="page"
                  smooth
                  to="#services"
                >
                  Services
                </Link>
              </li>
              <li className="nav-item nav-menu">
                <Link
                  className="nav-link"
                  aria-current="page"
                  smooth
                  to="#deliveryCalculator"
                >
                  Delivery calculator
                </Link>
              </li>
              <li className="nav-item nav-menu">
                <Link
                  className="nav-link"
                  aria-current="page"
                  smooth
                  to="#priceAndPlan"
                >
                  Pricing & Plan
                </Link>
              </li>
              <li className="nav-item nav-menu">
                <Link
                  className="nav-link"
                  aria-current="page"
                  smooth
                  to="#whyChooseUs"
                >
                  Why Choose Us
                </Link>
              </li>
              {merchant ? (
                <li className="nav-item nav-menu">
                  <a className="nav-link " href="/dashboard">
                    DASHBOARD
                  </a>
                </li>
              ) : (
                <li className="nav-item nav-menu">
                  <a className="nav-link" aria-current="page" href="/">
                    Become a Merchant
                  </a>
                </li>
              )}

              <li className="nav-item nav-menu">
                <Link
                  className="nav-link"
                  aria-current="page"
                  smooth
                  to="#contactUs"
                >
                  Contact Us
                </Link>
              </li>

              {!user.email ? (
                <li className="nav-item nav-menu login">
                  <Link
                    className="nav-link login-link"
                    aria-current="page"
                    to="/login"
                  >
                    Login
                  </Link>
                </li>
              ) : (
                <li className="nav-item nav-menu">
                  <div
                    className="d-flex"
                    style={{ cursor: "pointer", marginLeft: "180px" }}
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <div className=" afterLogin">
                      <span className="nav-link " aria-current="page">
                        <img src={profileDemoImg} alt="" />
                      </span>
                    </div>
                    <i
                      style={{
                        marginTop: "10px",
                        marginLeft: "10px",
                        color: "#002a47",
                        fontWeight: "600",
                      }}
                      className="bi bi-chevron-down"
                    ></i>
                  </div>
                  <div className="dropdown-menu profile-dropdown">
                    <ul>
                      {/* <li>
                        <a className="dropdown-item" href="#">
                          View Profile
                        </a>
                      </li> */}
                      <li>
                        <a className="dropdown-item" href="/settings">
                        <i className="bi bi-gear"></i> Settings
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/help">
                        <i className="bi bi-info-circle"></i>  Help
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/faq">
                        <i className="bi bi-question-circle"></i> FAQ
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                        <i className="bi bi-twitch"></i> Terms & Condition
                        </a>
                      </li>
                      <li onClick={logOut}>
                        <a className="dropdown-item" href="#">
                        <i className="bi bi-box-arrow-left"></i> Logout
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
