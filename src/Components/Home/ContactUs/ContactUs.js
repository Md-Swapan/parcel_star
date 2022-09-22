import React from "react";
import "./ContactUs.css";
import contactImg from "../../../assets/img/Frame 1000004750 (2).png";
import logoimg from "../../../assets/img/Rectangle 58.png";
import dotImg from "../../../assets/img/1_nZ9VwHTLxAfNCuCjYAkajg.png";

const ContactUs = () => {
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
      <div className="contactUs-section" id="contactUs">
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <img className="contactImg" src={contactImg} alt="" />
            </div>
            <div className="col-md-7">
              <div className="d-flex">
                <div className="contact-content-container">
                  <h2>Contact Us</h2>

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
                <div className="letsTalk-container">
                  <div className="talk-content">
                    <div className="talkHeading">
                      <div className="talk-header">
                        <img src={logoimg} alt="" />
                        <span onClick={closetalk}>
                          <i className="bi bi-x-circle"></i>
                        </span>
                      </div>
                      <div className="pslsc">
                        <h6>
                          Parcel Star Support Live Chat{" "}
                          <span>
                            <img src={dotImg} alt="" />
                          </span>
                        </h6>
                        <span>Typically replies in a few minutes</span>
                      </div>
                    </div>

                    <div className="sms-body">
                      <div className="sms">
                        <div className="profileImg">
                          <img src={logoimg} alt="" />
                        </div>
                        <div className="sms-text">
                          <span>Hi, How Can I Help You?</span>
                        </div>
                      </div>
                    </div>

                    <div className="typeMessage">
                      <input type="" name="" placeholder="Type Your Message" />
                      <span className="fileIcon">
                        <i className="bi bi-card-image"></i>
                      </span>
                      <span className="emojiIcon">
                        <i className="bi bi-emoji-smile"></i>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
