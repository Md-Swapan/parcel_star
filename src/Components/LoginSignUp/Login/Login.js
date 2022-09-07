import React from "react";
import "./Login.css";
import logo from "../../../assets/img/Rectangle 58.png";
import loadergif from "../../../assets/img/loader.gif";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import useAuth from "../../../Hooks/useAuth";

const Login = () => {
  const [loginData, setLoginData] = useState({});
  const { user, loading, loginUser, authError } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  // Email & password sign in method..................
  const handelBlur = (event) => {
    let isFormValid = true;
    if (event.target.name === "email") {
      isFormValid = /\S+@\S+\.\S+/.test(event.target.value);
    }
    if (event.target.name === "password") {
      const isPasswordValid = event.target.value.length > 6;
      const passwordHasNumber = /\d{1}/.test(event.target.value);
      isFormValid = isPasswordValid && passwordHasNumber;
    }

    if (isFormValid) {
      let newUserInfo = { ...loginData };
      newUserInfo[event.target.name] = event.target.value;
      setLoginData(newUserInfo);
    }
  };

  const handelSubmit = (e) => {
    loginUser(loginData.email, loginData.password, location, navigate);
    e.preventDefault();
  };

  const LetsTalkToggle = () => {
    const contactImg = document.querySelector(".contactImg");
    const contactContentContainer = document.querySelector(
      ".contact-content-container"
    );

    const talkContent = document.querySelector(".talk-content");
    const letsTalkContainer = document.querySelector(".letsTalk-container");

    contactImg.style.marginLeft = "0px";
    contactContentContainer.style.marginLeft = "0px";
    contactContentContainer.style.width = "410px";
    contactContentContainer.style.padding = "50px 30px";
    letsTalkContainer.style.width = "300px";
    letsTalkContainer.style.marginLeft = "20px";
    letsTalkContainer.style.background = "#fff";
    letsTalkContainer.style.border = ".2px solid #002a47";
    letsTalkContainer.style.padding = "0px 20px";
    talkContent.style.display = "block";
  };

  const closetalk = () => {
    const contactImg = document.querySelector(".contactImg");
    const contactContentContainer = document.querySelector(
      ".contact-content-container"
    );
    const talkContent = document.querySelector(".talk-content");
    const letsTalkContainer = document.querySelector(".letsTalk-container");

    contactImg.style.marginLeft = "60px";
    contactContentContainer.style.marginLeft = "60px";
    contactContentContainer.style.width = "440px";
    contactContentContainer.style.padding = "50px 40px";
    letsTalkContainer.style.width = "5px";
    letsTalkContainer.style.marginLeft = "60px";
    letsTalkContainer.style.background = "#002a47";
    letsTalkContainer.style.border = "none";
    letsTalkContainer.style.padding = "0px";
    talkContent.style.display = "none";
  };

  return (
    <>
      <div className="login-container">
        <div className="container">
          <div className="login-container-content">
            <div className="login-form-container">
              <div className="login-header">
                <h2>
                  Login <i className="fi fi-rr-home"></i>
                </h2>
                <h4>Welcome To Parcel Star</h4>
              </div>
              {user?.email && (
                <span style={{ marginBottom: "20px", color: "green" }}>
                  User login successfully.
                </span>
              )}
              {authError && (
                <span style={{ marginBottom: "20px", color: "red" }}>
                  {authError}
                </span>
              )}

              {!loading && (
                <div className="login-form">
                  <form onSubmit={handelSubmit}>
                    <label>
                      <i className="fi fi-br-check"></i> Email
                    </label>
                    <input
                      type="email"
                      onBlur={handelBlur}
                      name="email"
                      placeholder="Email"
                      required
                    />
                    <br />
                    <label>Password</label>
                    <input
                      type="password"
                      onBlur={handelBlur}
                      name="password"
                      placeholder="Password"
                      required
                      autoComplete="off"
                    />
                    <br />
                    <div className="check-forgotPass">
                      <div className="check">
                        <div>
                          <input type="checkbox" name="" />
                        </div>
                        <div>
                          <span>Remember me</span>
                        </div>
                      </div>

                      <span className="forgotpass">Forgot Password?</span>
                    </div>

                    <br />
                    <input id="submitBtn" type="submit" value="Login" />
                    <br />
                    <span className="registerSwitch">
                      Need an Account?{" "}
                      <Link to="/signup">
                        <strong>Sign Up </strong>
                      </Link>
                    </span>
                  </form>
                </div>
              )}
              {loading && (
                <div className="loader-container" role="status">
                  <img src={loadergif} alt="" />
                </div>
              )}
              <p className="mt-2 text-center">or</p>
              <button className="phoneSignInBtn" type="">
                <span className="phone-icon">
                  <i className="bi bi-telephone"></i>
                </span>{" "}
                <span className="phoneSignInBtn-content">login with Phone</span>
              </button>
            </div>
            <div className="fastSaleAndRD-container">
              <div className="fastSaleAndRD-container-logo">
                <img src={logo} alt="" />
              </div>
              <h4>FAST SALE AND RELIABLE DELIVERY</h4>
              <small>
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book.
              </small>

              <div className="login-contact-content-container">
                <p>
                  <span>
                    <i className="bi bi-telephone"></i>
                  </span>{" "}
                  +8801234567890, +8801234567894
                </p>
                <p>
                  <span>
                    <i className="bi bi-chat"></i>
                  </span>{" "}
                  You can also message us{" "}
                  <button
                    onClick={LetsTalkToggle}
                    className="letsTalkBtn"
                    type=""
                  >
                    Lets Talk
                  </button>
                </p>
                <p>
                  <span>
                    <i className="bi bi-facebook"></i>
                  </span>{" "}
                  parcelstar/facebook.com
                </p>
                <p>
                  <span>
                    <i className="bi bi-linkedin"></i>
                  </span>{" "}
                  parcelstar/linkedin.com
                </p>
                <p>
                  <span>
                    <i className="bi bi-twitter"></i>
                  </span>{" "}
                  parcelstar/twitter.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
