// import React, { useContext } from 'react';
import { useState } from "react";
import "./SignUp.css";
import logo from "../../../assets/img/Rectangle 58.png";
import loadergif from "../../../assets/img/loader.gif";
import { Link, useLocation, useNavigate  } from "react-router-dom";
import useAuth from "./../../../Hooks/useAuth";

const SignUp = () => {
  const [userType, setUserType] = useState("personal");
  const isRadioSelected = (value) => userType === value;
  const handleRadioClick = (event) => setUserType(event.target.value);

  const [registerData, setRegisterData] = useState({});
  const { user, loading, registerUser, authError, logOut } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();

  // Email & password sign in method..................
  const handelBlur = (event) => {
    let isFormValid = true;
    if (event.target.name === "email") {
      isFormValid = /\S+@\S+\.\S+/.test(event.target.value);
    }
    if (event.target.name === "password" && "confirmPassword") {
      const isPasswordValid = event.target.value.length > 6;
      const passwordHasNumber = /\d{1}/.test(event.target.value);
      const passValid = isPasswordValid && passwordHasNumber;
      isFormValid = passValid;
    }
    if (event.target.name === "name") {
      isFormValid = event.target.value.length > 8;
    }
    if (isFormValid) {
      let newUserInfo = { ...registerData };
      newUserInfo[event.target.name] = event.target.value;
      console.log(newUserInfo);
      setRegisterData(newUserInfo);
    }
  };

  const handelSubmit = (e) => {
    registerUser(
      registerData.email,
      registerData.password,
      registerData.name,
      userType,
      location,
      navigate
    );
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

  const callNextStep = () => {
    const signupFirstStep = document.querySelector(".signup-first-step");
    const signupNextStep = document.querySelector(".signup-next-step");
    signupFirstStep.style.display = "none";
    signupNextStep.style.display = "block";
  };

  return (
    <>
      <div className="login-container">
        <div className="container">
          <div className="login-container-content">
            <div className="login-form-container">
              <div className="login-header">
                <h2>Sign Up</h2>
                <h4>Welcome To Parcel Star</h4>
              </div>
              <div className="signup-first-step">
                <h4>Account Type</h4>
                <div className="account-type">
                  <div>
                    <input
                      type="radio"
                      name="selectedRadioBtn"
                      value="personal"
                      checked={isRadioSelected("personal")}
                      onChange={handleRadioClick}
                    />
                    <label for="Personal">Personal</label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      name="selectedRadioBtn"
                      value="merchant"
                      checked={isRadioSelected("merchant")}
                      onChange={handleRadioClick}
                    />
                    <label for="merchant">Merchant</label>
                  </div>
                </div>
                <button onClick={callNextStep} type="">
                  Next
                </button>

                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <p>
                  By sign up in you agree to our <br />{" "}
                  <Link to="/termsCondition">terms & condition</Link>
                </p>
              </div>
              <div className="signup-next-step">
                <div className="login-form">
                  {user?.email && (
                    <span style={{ marginBottom: "20px", color: "green" }}>
                      User created successfully.
                    </span>
                  )}
                  {/* {authError && (
                    <span style={{ marginBottom: "20px", color: "red" }}>
                      {authError}
                    </span>
                  )} */}
                  {!loading && (
                    <form onSubmit={handelSubmit}>
                      <label>Name</label>
                      <input
                        type="text"
                        onBlur={handelBlur}
                        name="name"
                        placeholder="Name"
                        required
                      />
                      <br />
                      <label>Email</label>
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
                      />
                      <br />
                      <br />
                      <input id="submitBtn" type="submit" value="Sign Up" />
                      <br />
                      <span className="registerSwitch">
                        Alrady have an account?{" "}
                        <Link to="/login">
                          <strong>Login</strong>
                        </Link>
                      </span>
                    </form>
                  )}
                  {loading && (
                    <div className="loader-container" role="status">
                      <img src={loadergif} alt="" />
                    </div>
                  )}
                </div>
                <p className="mt-2 text-center">or</p>
                <button className="phoneSignInBtn" type="">
                  <span className="phone-icon">
                    <i className="bi bi-telephone"></i>
                  </span>{" "}
                  <span onClick={logOut} className="phoneSignInBtn-content">
                    Sing Up with Phone
                  </span>
                </button>
              </div>
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

export default SignUp;
