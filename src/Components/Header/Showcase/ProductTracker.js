import React from "react";
import "./css/ProductTracker.css";

const ProductTracker = () => {
  return (
    <>
      <div className="productTracker-container">
        <h4>TRACK YOUR PRODUCT</h4>
        <div className="Product-id-input">
          <input type="text" placeholder="Enter your product id" />
        </div>
        <button className="track-btn">TRACK YOUR PRODUCT</button>
      </div>
    </>
  );
};

export default ProductTracker;
