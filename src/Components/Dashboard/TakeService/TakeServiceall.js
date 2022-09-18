import React from "react";
import Nav from "../../SharedComponents/Nav/Nav";
import TakeServiceForm from "./TakeServiceForm";
import Footer from "../../SharedComponents/Footer/Footer";
import "./TakeService.css";
import { Link } from 'react-router-dom';

const TakeServiceAll = () => {
  return (
    <>
      {/* <Nav /> */}
      <div className="takeServiceForm-section">
        <div
          style={{
            paddingTop: "10%"
          }}
        >
          <Link to="/">
            <span
              style={{
                marginTop: "-40px",
                marginLeft: "350px",
                position: "absolute",
                color: "#002a47",
              }}
            >
              <i class="bi bi-caret-left-fill"></i> Back
            </span>
          </Link>
          <div
            style={{
              background: "#fff",
              boxShadow: `rgba(99, 99, 99, 0.2) 0px 2px 8px 0px`,
              padding: "100px 0px",
              paddingTop: "60px",
              margin: "0px 350px",
              borderRadius: "10px",
            }}
          >
            <TakeServiceForm />
          </div>
        </div>
      </div>
      {/* <Footer/> */}
    </>
  );
};

export default TakeServiceAll;
