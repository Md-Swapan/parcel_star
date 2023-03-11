import React, { useEffect } from "react";
import "./ServiceProvide.css";
import img1 from "../../../assets/img/service-pic.png";
import img2 from "../../../assets/img/179-large_default (1).jpg";
import img3 from "../../../assets/img/Advantages-of-A-Motorcycle-Delivery-Service.jpg";
import img4 from "../../../assets/img/New Project (3).jpg";
import img5 from "../../../assets/img/8-Major-Types-of-Cargo-Transported-Through-the-Shipping-Industry.png";
import img6 from "../../../assets/img/download.jpg";
import userImg from "../../../assets/img/businessman-profile-cartoon_18591-58479.webp";
import userImg2 from "../../../assets/img/man-profile-cartoon_18591-58482.webp";
import quotation from "../../../assets/img/quotation-marks-removebg-preview.png";

const ServiceProvide = () => {
  const mediaQuery = window.matchMedia("(max-width: 360px)");
  // const mediaQuery576 = window.matchMedia("(max-width: 576px)");
  // const mediaQueryDesktop = window.matchMedia("(min-width: 1200px)");

  useEffect((e) => {
    if(!mediaQuery.matches){
      const responsiveScreen = document.querySelector(".responsiveScreen");
      responsiveScreen.style.display = "none"
    }
    const btns = document.querySelectorAll(".btns");
    const children = document.querySelectorAll(".child");
    const Againchild = document.querySelectorAll(".Againchild");
    const current_position = 0;

    btns.forEach((tab) => {
      tab.addEventListener("click", () => {
        let data_id = tab.getAttribute("data-id");

        for (let i = current_position; i < data_id; i++) {
          children[i].style.height = "0%";
          Againchild[i].style.height = "0%";
        }

        document.getElementById(`child${data_id}`).style.height = "100%";
        document.getElementById(`Againchild${data_id}`).style.height = "100%";
      });
    });

    const toggleItem = (elems) => {
      elems.forEach((elem) => {
        elem.addEventListener("click", (event) => {
          removeActiveClass(elems);
          event.target.classList.add("active");
        });
      });
    };

    function removeActiveClass(elems) {
      elems.forEach((elem) => {
        if (elem.classList.contains("active")) {
          elem.classList.remove("active");
        }
      });
    }

    toggleItem(btns);
  }, []);

  return (
    <>
      <div id="services" className="container " style={{ marginTop: "100px" }}>
        <div className="d-flex">
          <div className="swp-before"></div>
          <div className="swp-header">
            <h1>Service We Provide</h1>
          </div>
          <div className="swp-after"></div>
        </div>
      </div>
      <div className=" serviceProvider-container">
        <div className="container">
          <div className="row fullScreenRow">
            <div className="col-md-4 ">
              <div className="navTab">
                <h2>Services</h2>
                <div id="navtabBtns">
                  <p className="btns active" data-id="1">
                    Hand to Hand Delivery
                  </p>
                  <p className="btns" data-id="2">
                    Bicycle Delivery
                  </p>
                  <p className="btns" data-id="3">
                    Bike Delivery
                  </p>
                  <p className="btns" data-id="4">
                    Truck Delivery
                  </p>
                  <p className="btns" data-id="5">
                    Ship Delivery
                  </p>
                  <p className="btns" data-id="6">
                    Air Delivery
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-8">
              <div className="serviceProvide-content">
                <div className="containt content1">
                  <div className="vehicle-header">
                    <div className="icon">
                      <i className="bi bi-star"></i>
                      <i className="bi bi-star"></i>
                      <i className="bi bi-star"></i>
                      <i className="bi bi-star"></i>
                      <i className="bi bi-star"></i>
                    </div>
                    <h2>Our Vehicles</h2>
                  </div>
                  <div className="child" id="child1">
                    <img src={img1} alt="" />
                    <div className="vehicle-text">
                      <h4>
                        We Delivery <br /> <span>Product By Cycle</span>
                      </h4>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum is simply dummy text
                        of the printing and typesetting industry.
                      </p>
                    </div>
                  </div>
                  <div className="child" id="child2">
                    <img src={img2} alt="" />
                    <div className="vehicle-text">
                      <h4>
                        We Delivery <br /> <span>Product By Cycle</span>
                      </h4>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum is simply dummy text
                        of the printing and typesetting industry.
                      </p>
                    </div>
                  </div>
                  <div className="child" id="child3">
                    <img src={img3} alt="" />
                    <div className="vehicle-text">
                      <h4>
                        We Delivery <br /> <span>Product By Cycle</span>
                      </h4>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum is simply dummy text
                        of the printing and typesetting industry.
                      </p>
                    </div>
                  </div>
                  <div className="child" id="child4">
                    <img src={img4} alt="" />
                    <div className="vehicle-text">
                      <h4>
                        We Delivery <br /> <span>Product By Cycle</span>
                      </h4>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum is simply dummy text
                        of the printing and typesetting industry.
                      </p>
                    </div>
                  </div>
                  <div className="child" id="child5">
                    <img src={img5} alt="" />
                    <div className="vehicle-text">
                      <h4>
                        We Delivery <br /> <span>Product By Cycle</span>
                      </h4>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum is simply dummy text
                        of the printing and typesetting industry.
                      </p>
                    </div>
                  </div>
                  <div className="child" id="child6">
                    <img src={img6} alt="" />
                    <div className="vehicle-text">
                      <h4>
                        We Delivery <br /> <span>Product By Cycle</span>
                      </h4>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum is simply dummy text
                        of the printing and typesetting industry.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="containt content2">
                  <div className="review-header">
                    <h2>Customer Reviews</h2>
                  </div>
                  <div className="Againchild" id="Againchild1">
                    <div className="review-content">
                      <img className="first" src={quotation} alt="" />
                      <br />
                      <br />
                      <div className="review-user-content">
                        <img src={userImg} alt="" />
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum is simply dummy text
                          of the printing and typesetting industry.
                        </p>
                      </div>
                      <img className="last" src={quotation} alt="" />
                    </div>
                  </div>
                  <div className="Againchild" id="Againchild2">
                    <div className="review-content">
                      <img className="first" src={quotation} alt="" />
                      <br />
                      <br />
                      <div className="review-user-content">
                        <img src={userImg2} alt="" />
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum is simply dummy text
                          of the printing and typesetting industry.
                        </p>
                      </div>
                      <img className="last" src={quotation} alt="" />
                    </div>
                  </div>
                  <div className="Againchild" id="Againchild3">
                    <div className="review-content">
                      <img className="first" src={quotation} alt="" />
                      <br />
                      <br />
                      <div className="review-user-content">
                        <img src={userImg} alt="" />
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum is simply dummy text
                          of the printing and typesetting industry.
                        </p>
                      </div>
                      <img className="last" src={quotation} alt="" />
                    </div>
                  </div>
                  <div className="Againchild" id="Againchild4">
                    <div className="review-content">
                      <img className="first" src={quotation} alt="" />
                      <br />
                      <br />
                      <div className="review-user-content">
                        <img src={userImg2} alt="" />
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum is simply dummy text
                          of the printing and typesetting industry.
                        </p>
                      </div>
                      <img className="last" src={quotation} alt="" />
                    </div>
                  </div>
                  <div className="Againchild" id="Againchild5">
                    <div className="review-content">
                      <img className="first" src={quotation} alt="" />
                      <br />
                      <br />
                      <div className="review-user-content">
                        <img src={userImg} alt="" />
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum is simply dummy text
                          of the printing and typesetting industry.
                        </p>
                      </div>
                      <img className="last" src={quotation} alt="" />
                    </div>
                  </div>
                  <div className="Againchild" id="Againchild6">
                    <div className="review-content">
                      <img className="first" src={quotation} alt="" />
                      <br />
                      <br />
                      <div className="review-user-content">
                        <img src={userImg2} alt="" />
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum is simply dummy text
                          of the printing and typesetting industry.
                        </p>
                      </div>
                      <img className="last" src={quotation} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="responsiveScreen">
            <div className="ResponsiveService HandDelivery">
              <h4>Hand to Hand Delivery</h4>
              {/* <span>............</span> */}
              <p>
                Lorem Ipsum is simply 
              </p>
              <button type="">Show Details</button>
            </div>
            <div className="ResponsiveService BicycleDelivery">
              <h4>Bicycle Delivery</h4>
              <p>
                Lorem Ipsum is simply 
              </p>
              <button type="">Show Details</button>
            </div>
            <div className="ResponsiveService BikeDelivery">
              <h4>Bike Delivery</h4>
              <p>
                Lorem Ipsum is simply 
              </p>
              <button type="">Show Details</button>
            </div>
            <div className="ResponsiveService TruckDelivery">
              <h4>Truck Delivery</h4>
              <p>
                Lorem Ipsum is simply
              </p>
              <button type="">Show Details</button>
            </div>
            <div className="ResponsiveService ShipDelivery">
              <h4>Ship Delivery</h4>
              <p>
                Lorem Ipsum is simply 
              </p>
              <button type="">Show Details</button>
            </div>
            <div className="ResponsiveService AirDelivery">
              <h4>Air Delivery</h4>
              <p>
                Lorem Ipsum is simply
              </p>
              <button type="">Show Details</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceProvide;
