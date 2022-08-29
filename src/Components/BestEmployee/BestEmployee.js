import React from "react";
import "./BestEmployee.css";
import bestEmployeeBackground from "../../assets/img/bestEmployee (4).png";
import bestemployeeImg from "../../assets/img/bestEmployee (1).png";
import bestemployeeImg2 from "../../assets/img/bestEmployee (2).png";
import celebrateImg from "../../assets/img/party-confetti.png";
import Nav from "./../SharedComponents/Nav/Nav";
import { ActionKind, usePony } from "pony-props";
import TapToDeliveryProduct from './../Home/TapToDeliveryProduct/TapToDeliveryProduct';
import Employees from "./Employees/Employees";
import Footer from './../SharedComponents/Footer/Footer';
import CopyrightFooter from './../SharedComponents/Footer/CopyrightFooter';


const BestEmployee = () => {
  const items = [
    {
      name: "Previous Year",
      img: bestemployeeImg,
    },
    {
      name: "Next Year",
      img: bestemployeeImg2,
    }
    
  ];

  const {
    getSectionProps,
    getHeadingProps,
    getCarouselWrapperProps,
    getCarouselProps,
    getCarouselItemProps,
    getButtonProps,
    getAnnouncerProps,
    state,
  } = usePony({ numItems: items.length });

  return (
    <>
      <div className="best_employee_section">
        <Nav />
        <div className="bestEmployee-showcase">
          <div className="bestEmployee-content">
            <div className="bestEmployee-content-title">
              <h1>
                Our <span>Best Employee</span> Of The Year <small>2022</small>
              </h1>
              <p>
                Best Employee Name: <span>Jhone Doe</span>
              </p>

              <div className="list">
                <p>
                  <span className="color">100%</span> Attendance
                </p>
                <p>
                  <span className="color">300</span> Delivery Successfully Completed
                  in That Year
                </p>
              </div>
            </div>
            <div className="celebrateImg">
              <img src={celebrateImg} alt="" />
            </div>
          </div>
          <div className="bestEmployee-img-container">
            <img src={bestEmployeeBackground} alt="bestEmployee" />
          </div>
        </div>

        <div className="best-employee-carousel-slider">
          <div {...getSectionProps()}>
          <h1 {...getHeadingProps()}></h1>
            <div {...getCarouselWrapperProps()}>
              <ul {...getCarouselProps()}>
                {items.map((item, idx) => (
                  <li key={idx} {...getCarouselItemProps(idx)}>
                    
                    <img width={620} src={item.img} alt="" />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="carouselBtn">
          <ul {...getCarouselProps()}>
            {items.map((item, idx) => (
              <li key={idx} {...getCarouselItemProps(idx)}>
                {item.name}
              </li>
            ))}
          </ul>
          <button {...getButtonProps(ActionKind.Previous)}>
            <i className="bi bi-caret-left"></i>
          </button>

          <button className="nextBtn" {...getButtonProps(ActionKind.Next)}>
            <i className="bi bi-caret-right"></i>
          </button>
          <div {...getAnnouncerProps()}>
            <p>{`Item ${state.activeSlideIndex + 1} of ${items.length}`}</p>
          </div>
        </div>
      </div>
      <TapToDeliveryProduct/>
      <Employees/>
      <Footer/>
      <CopyrightFooter/>
    </>
  );
};

export default BestEmployee;
