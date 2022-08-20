import React from "react";
import "./ServiceProvide.css";
import img1 from "../../../assets/img/service-pic.png";
import img2 from "../../../assets/img/179-large_default (1).jpg";
import img3 from "../../../assets/img/Advantages-of-A-Motorcycle-Delivery-Service.jpg";
import img4 from "../../../assets/img/New Project (3).jpg";
import img5 from "../../../assets/img/8-Major-Types-of-Cargo-Transported-Through-the-Shipping-Industry.png";
import img6 from "../../../assets/img/download.jpg";

const ServiceProvide = () => {
  const tabs = document.querySelectorAll(".tabs");
  const children = document.querySelectorAll(".child");
  const Againchild = document.querySelectorAll(".Againchild");
  const current_position = 0;

  tabs.forEach(function (tab) {
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

  return (
    <>
      <div className="container " style={{ marginTop: "150px" }}>
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
          {/* <div className="serviceProvide-navTab-content"> */}
          <div className="row">
            <div className="col-md-4">
              <div className="navTabs">
                <h2>Services</h2>
                <p className="tabs" data-id="1">
                  Hand to Hand Delivery
                </p>
                <br />
                <p className="tabs" data-id="2">
                  Bicycle Delivery
                </p>
                <br />
                <p className="tabs" data-id="3">
                  Bike Delivery
                </p>
                <br />
                <p className="tabs" data-id="4">
                  Truck Delivery
                </p>
                <br />
                <p className="tabs" data-id="5">
                  Ship Delivery
                </p>
                <br />
                <p className="tabs" data-id="6">
                  Air Delivery
                </p>
              </div>
            </div>
            <div className="col-md-8">
              <div className="serviceProvide-content">
                <div className="containt content1">
                  <div className="vehicle-header">
                    <div className="icon">
                      <i class="bi bi-star"></i>
                      <i class="bi bi-star"></i>
                      <i class="bi bi-star"></i>
                      <i class="bi bi-star"></i>
                      <i class="bi bi-star"></i>
                    </div>
                    <h2>Our Vehicles</h2>
                  </div>
                  <div className="child" id="child1">
                    <img src={img1} alt="" />
                  </div>
                  <div className="child" id="child2">
                    <img src={img2} alt="" />
                  </div>
                  <div className="child" id="child3">
                    <img src={img3} alt="" />
                  </div>
                  <div className="child" id="child4">
                    <img src={img4} alt="" />
                  </div>
                  <div className="child" id="child5">
                    <img src={img5} alt="" />
                  </div>
                  <div className="child" id="child6">
                    <img src={img6} alt="" />
                  </div>
                </div>

                <div className="containt content2">
                  <div className="Againchild" id="Againchild1">
                    <h1>hello11</h1>
                  </div>
                  <div className="Againchild" id="Againchild2">
                    <h1>hello22</h1>
                  </div>
                  <div className="Againchild" id="Againchild3">
                    <h1>hello33</h1>
                  </div>
                  <div className="Againchild" id="Againchild4">
                    <h1>hello44</h1>
                  </div>
                  <div className="Againchild" id="Againchild5">
                    <h1>hello55</h1>
                  </div>
                  <div className="Againchild" id="Againchild6">
                    <h1>hello66</h1>
                  </div>
                </div>
              </div>
            </div>
            {/* </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceProvide;
