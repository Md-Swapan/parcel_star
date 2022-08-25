import React from "react";
import "./PricingAndPlan.css";

const PricingAndPlan = () => {
  return (
    <>
      <div className="planAndPrice-section">
        <div className="container">
        <div className="planAndPrice-header">
          <div className="d-flex">
            <div className="pp-before"></div>
            <div className="pp-header">
              <h1>Pricing & Plan</h1>
            </div>
            <div className="pp-after"></div>
          </div>
        </div>
        </div>
        <div className="planAndPrice-container">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <div className="basic">
                  <div className="basic-container">
                    <div className="basic-front-view">
                      <p>BASIC</p>
                      <div className="d-flex">
                        <h3>$50</h3>{" "}
                        <span>
                          <i class="bi bi-chevron-right"></i>
                        </span>
                      </div>
                      <small>FOR SINGLE PRODUCT</small>
                    </div>
                    <div className="basic-back-view">
                      <p>
                        PRODUCT WEIGHT: <span>3KG</span>
                      </p>
                      <p>
                        COUNTRY: <span>ALL</span>
                      </p>
                      <p>
                        DURATION: <span>7-14 DAYS</span>
                      </p>
                      <p>
                        SUPPORT: <span>YES</span>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="basic-container-border1"></div>
              </div>
              <div className="col-md-4">
                <div className="premium">
                  <div className="premium-container">
                    <div className="premium-front-view">
                      <p>PREMIUM</p>
                      <div className="d-flex">
                        <h3>$150</h3>{" "}
                        <span>
                          <i class="bi bi-chevron-right"></i>
                        </span>
                      </div>
                      <small>FOR SINGLE PRODUCT</small>
                    </div>
                    <div className="premium-back-view">
                      <p>
                        PRODUCT WEIGHT: <span>3KG</span>
                      </p>
                      <p>
                        COUNTRY: <span>ALL</span>
                      </p>
                      <p>
                        DURATION: <span>7-14 DAYS</span>
                      </p>
                      <p>
                        SUPPORT: <span>YES</span>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="premium-container-border2"></div>
              </div>
              <div className="col-md-4">
                <div className="standard">
                  <div className="standard-container">
                    <div className="standard-front-view">
                      <p>STANDARD</p>
                      <div className="d-flex">
                        <span>
                          <i class="bi bi-chevron-left"></i>
                        </span>
                        <h3>$100</h3>{" "}
                      </div>
                      <small>FOR SINGLE PRODUCT</small>
                    </div>
                    <div className="standard-back-view">
                      <p>
                        PRODUCT WEIGHT: <span>3KG</span>
                      </p>
                      <p>
                        COUNTRY: <span>ALL</span>
                      </p>
                      <p>
                        DURATION: <span>7-14 DAYS</span>
                      </p>
                      <p>
                        SUPPORT: <span>YES</span>
                      </p>
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

export default PricingAndPlan;
