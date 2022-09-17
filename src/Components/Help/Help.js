import React from "react";
import "./Help.css";
import { Link } from "react-router-dom";
import ContactUs from './../Home/ContactUs/ContactUs';


const Help = () => {
   
  return (
    <div className="help-section">
      <div className="d-flex">
        <Link to="/">
          <span
            style={{
              marginTop: "80px",
              marginLeft: "200px",
              position: "absolute",
              color: "#002a47",
            }}
          >
            <i class="bi bi-caret-left-fill"></i> Back
          </span>
        </Link>
        <h3>Contact With Us To Get Help</h3>
      </div>
      <div className="help-content">
        <ContactUs/>
      </div>
    </div>
  );
};


export default Help;
