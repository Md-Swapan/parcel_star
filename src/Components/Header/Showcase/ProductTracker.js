import React from "react";
import "./css/ProductTracker.css";
import { Link } from 'react-router-dom';


const ProductTracker = () => {
  
  return (
    <>
      <div className="productTracker-container">
        <h4>TRACK YOUR PRODUCT</h4>
        <div className="Product-id-input">
          <input type="text" placeholder="Enter your product id" />
        </div>
        <Link to="/track-products">
        <button className="track-btn">TRACK YOUR PRODUCT</button>
        </Link>
      </div>
      
      <div className="productTracker-container-shadow1"></div>
      <div className="productTracker-container-shadow2"></div>

    </>
  );
};

export default ProductTracker;
