import React from "react";
import CopyrightFooter from "../SharedComponents/Footer/CopyrightFooter";
import Footer from "../SharedComponents/Footer/Footer";
import Nav from "../SharedComponents/Nav/Nav";
import BranchImg1 from "../../assets/carousel_img/branchSliderImg (1).png";
import BranchImg2 from "../../assets/carousel_img/branch (1).png";
import BranchImg3 from "../../assets/carousel_img/branch (2).png";
import Branches from "./Branches/Branches";
import "./BestBranches.css";
import TapToDeliveryProduct from "./../Home/TapToDeliveryProduct/TapToDeliveryProduct";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const BestBranches = () => {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };
  return (
    <>
      <div className="bestBranches-section">
        <Nav />
        <div className="bestBranches-showcase">
          <div className="bestBranches-content">
            <div className="bestBranches-content-title">
              <h1>
                Our Three<span> Best Branches </span> Of The Year{" "}
                <small>2022</small>
              </h1>
              <p>
                <span>We Have</span> 500 <span>Branches To</span> Give Service
              </p>

              <div className="list">
                <p>
                  <span className="color">300</span> Delivery Successfully
                  Completed in That Year
                </p>
              </div>
            </div>
          </div>
          <div className="bestBranches-slider-container">
            <Slider {...settings}>
              <div>
                <img className="img-fluid" src={BranchImg1} alt="" />
              </div>
              <div>
                <img className="img-fluid" src={BranchImg2} alt="" />
              </div>
              <div>
                <img className="img-fluid" src={BranchImg3} alt="" />
              </div>
            </Slider>
          </div>
        </div>
        <TapToDeliveryProduct />
        <Branches />
        <Footer />
        <CopyrightFooter />
      </div>
    </>
  );
};

export default BestBranches;
