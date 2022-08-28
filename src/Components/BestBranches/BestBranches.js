import React from "react";
import CopyrightFooter from "../SharedComponents/Footer/CopyrightFooter";
import Footer from "../SharedComponents/Footer/Footer";
import Nav from "../SharedComponents/Nav/Nav";
import bestEmployeeBackground from "../../assets/img/bestEmployee (4).png";
import Branches from "./Branches/Branches";
import './BestBranches.css'
import TapToDeliveryProduct from './../Home/TapToDeliveryProduct/TapToDeliveryProduct';

const BestBranches = () => {
  return (
    <>
      <div className="bestBranches-section">
        <Nav />
        <div className="bestBranches-showcase">
          <div className="bestBranches-content">
            <div className="bestBranches-content-title">
              <h1>
                Our Three<span> Best Branches </span> Of The Year <small>2022</small>
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
          <div className="bestBranches-img-container">
            <img src={bestEmployeeBackground} alt="bestEmployee" />
          </div>
        </div>
        <TapToDeliveryProduct/>
        <Branches/>
        <Footer />
        <CopyrightFooter />
      </div>
    </>
  );
};

export default BestBranches;
