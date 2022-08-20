import React from "react";
import "./WhyChooseUs.css";
import deliveryManImg from "../../../assets/img/choose-us.png";

const WhyChooseUs = () => {
  return (
    <>
      <div className="container">
        <div className="whychooseus-container">
          <div className="d-flex">
            <div className="wcu-before"></div>
            <div className="wcu-header">
              <h1>Why Choose US</h1>
            </div>
            <div className="wcu-after"></div>
          </div>
          <div className="whyChooseUs-content">
            <div className="row">
              <div className="col-md-6">
                <div className="Delivery-container">
                  <div className="icon">
                    <i class="bi bi-truck"></i>
                  </div>
                  <div className="Delivery-content">
                    <h3>On-Time Delivery</h3>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </p>
                  </div>
                </div>
                <div className="Delivery-container">
                  <div className="icon">
                    <i class="bi bi-people"></i>
                  </div>
                  <div className="Delivery-content">
                    <h3>24/7 Support</h3>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </p>
                  </div>
                </div>
                <div className="Delivery-container">
                  <div className="icon">
                    <i class="bi bi-pin-map"></i>
                  </div>
                  <div className="Delivery-content">
                    <h3>Product Tracking</h3>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </p>
                  </div>
                </div>
                <div className="Delivery-container">
                  <div className="icon">
                    <i class="bi bi-cart2"></i>
                  </div>
                  <div className="Delivery-content">
                    <h3>Careful Handover</h3>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <img src={deliveryManImg} alt="deliveryManImg" />
              </div>
            </div>

            <div className="count-container">
              <div className="d-flex">
                <div className="half-border"></div>
                <div className="parcel-delivered-count">
                  <h2>15+</h2>
                  <p>Parcel Delivered</p>
                </div>
              </div>
              <div className="d-flex">
                <div className="half-border"></div>
                <div className="Expert-employee-count">
                  <h2>700</h2>
                  <p>Expert Employee</p>
                  <small>Tap to see</small>
                </div>
              </div>
              <div className="d-flex">
                <div className="half-border"></div>
                <div className="satisfied-client-count">
                  <h2>10k +</h2>
                  <p>Satisfied Clients</p>
                </div>
              </div>
              <div className="d-flex">
                <div className="half-border"></div>
                <div className="branches-count">
                  <h2>500</h2>
                  <p>Branches</p>
                  <small>Tap to see</small>
                </div>
              </div>
            </div>
            <div className="d-flex">
              <div className="count-container-border1"></div>
              <div className="count-container-border2"></div>
              <div className="count-container-border3"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyChooseUs;
