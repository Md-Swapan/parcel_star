import React from "react";
import "./css/button.css";
import { HashLink as Link } from "react-router-hash-link";

const ButtonForContactExplore = () => {
  return (
    <>
      <div className="contact-explore-btn">
        <Link smooth to="#contactUs">
          <button className="btn-1 contactUsBtn">Contact US</button>
        </Link>
        <Link smooth to="#services">
          <button className="btn-2 servicesBtn">Explore Service</button>
        </Link>
      </div>
    </>
  );
};

export default ButtonForContactExplore;
