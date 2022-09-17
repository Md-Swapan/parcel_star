import React from "react";
import Nav from "../../SharedComponents/Nav/Nav";
import TakeServiceForm from "./TakeServiceForm";
import Footer from '../../SharedComponents/Footer/Footer'

const TakeServiceAll = () => {
  return (
    <>
      <Nav />
      <div style={{ marginTop: "20vh", marginBottom: "10vh" }}>
        <div style={{boxShadow: `rgba(99, 99, 99, 0.2) 0px 2px 8px 0px`, padding: '70px 0px', paddingTop: "50px", margin: "0px 350px", borderRadius: "10px" }}>
        <TakeServiceForm />
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default TakeServiceAll;
