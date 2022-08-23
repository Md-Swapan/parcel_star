import React from "react";
import brandLogo1 from "../../../assets/Brands/Frame 20.png";
import brandLogo2 from "../../../assets/Brands/Frame 21.png";
import brandLogo3 from "../../../assets/Brands/Frame 22.png";
import brandLogo4 from "../../../assets/Brands/Frame 23.png";
import brandLogo5 from "../../../assets/Brands/Frame 24.png";
import brandLogo6 from "../../../assets/Brands/Frame 25.png";
import brandLogo7 from "../../../assets/Brands/Frame 26.png";
import brandLogo8 from "../../../assets/Brands/Frame 27.png";
import brandLogo9 from "../../../assets/Brands/Frame 28.png";
import brandLogo10 from "../../../assets/Brands/Frame 29.png";
import brandLogo11 from "../../../assets/Brands/Frame 30.png";
import psLogo from "../../../assets/img/Rectangle 58.png";
import poster from "../../../assets/img/poster.png";
import "./LogisticBrand.css";

const LogisticBrand = () => {
  return (
    <>
      <div className="logisticBrand-section">
        <div className="deliveryCalculator-header">
          <div className="d-flex">
            <div className="dc-before"></div>
            <div className="dc-header">
              <h1>Our Logistic Brand</h1>
            </div>
            <div className="dc-after"></div>
          </div>
        </div>
        <div className="container">
          <div className="brand-container">
            <img src={brandLogo1} alt="" />
            <img src={brandLogo2} alt="" />
            <img src={brandLogo3} alt="" />
            <img src={brandLogo4} alt="" />
            <img src={brandLogo5} alt="" />
            <img src={brandLogo6} alt="" />
            <img src={brandLogo7} alt="" />
            <img src={brandLogo8} alt="" />
            <img src={brandLogo9} alt="" />
            <img src={brandLogo10} alt="" />
            <img src={brandLogo11} alt="" />
          </div>

          <div className="growUp-business-container">
            <div className="row">
              <div className="col-md-2">
                <div className="longTrUniqBusiness">
                  <img width={150} src={psLogo} alt="" />

                  <div className="ltb-container">
                    <div className="ltbIcon">
                      <i class="bi bi-info-square"></i>
                    </div>
                    <div>
                      <h6>LongTerm</h6>
                      <span>Support</span>
                    </div>
                  </div>
                  <div className="ltb-container">
                    <div className="ltbIcon">
                    <i class="bi bi-award"></i>
                    </div>
                    <div>
                      <h6>LongTerm</h6>
                      <span>Support</span>
                    </div>
                  </div>
                  <div className="ltb-container">
                    <div className="ltbIcon">
                    <i class="bi bi-briefcase"></i>
                    </div>
                    <div>
                      <h6>LongTerm</h6>
                      <span>Support</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-7">
                <img src={poster} alt="" />
              </div>
              <div className="col-md-3">
                <div className="growup-content">
                  <h3>
                    Grow Up <span>Your</span> <br /> Business
                  </h3>
                  <p>
                    Courier guarantee reliable delivery of your product to your
                    customer, at the right location in the right time through
                    its efficient distribution management.
                  </p>
                  <button type="">Become a Merchant</button>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="redMiddleItalic_img"></div>
          <div className="redMiddleItalic_border"></div> */}
        </div>
      </div>
    </>
  );
};

export default LogisticBrand;
