import React from "react";
import ButtonForContactExplore from "./ButtonForContactExplore";
import Carousel from "./Carousel";
import ProductTracker from "./ProductTracker";
import "./css/Showcase.css";

const Showcase = () => {
  return (
    <>
      <div className="showcase-container">
        <Carousel />
        <ButtonForContactExplore />
        <ProductTracker />
      </div>
    </>
  );
};

export default Showcase;
