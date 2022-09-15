import React from "react";
import "./TapToDeliveyProduct.css";
import parcelLogo from "../../../assets/img/Rectangle 58.png";
import { Link } from "react-router-dom";

const TapToDeliveryProduct = () => {
  return (
    <Link to='/take-service'>
      <div className="taptoDelivery-container">
        <div className="tapToDeliveryProduct">
          <a href="">
            <div className="parcelCar">
              <div className="car">
                <div className="parcel-carHead"></div>
                <div className="parcel-carBody"></div>
                <div className="parcel-carWheel"></div>
                <div className="parcel-carWheelIn"></div>
                <div className="parcel-carWheel2"></div>
                <div className="parcel-carWheel2In"></div>
                <img width={34} src={parcelLogo} alt="" />
                <p className="pt-3">
                  <span>Tap</span> To Delivery Your Product
                </p>
              </div>

              <div className="road-animation">
                <div className="dash dash1"></div>
                <div className="dash dash2"></div>
                <div className="dash dash3"></div>
                <div className="dash dash4"></div>
                <div className="dash dash5"></div>
                <div className="dash dash6"></div>
                <div className="dash dash7"></div>
                <div className="dash dash8"></div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </Link>
  );
};

export default TapToDeliveryProduct;
