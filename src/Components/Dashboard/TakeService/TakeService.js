import React from "react";
import { useState } from "react";
import * as axios from "axios";
import { useEffect } from "react";
import "./TakeService.css";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import TakeServiceForm from "./TakeServiceForm";

const customStyles = {
  content: {
    borderRadius: "10px",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    // boxShadow: "0 0 0 500vmax rgb(0 0 0 / 0.3)",
    padding: "40px",
    paddingTop: "15px",
    width: "%",
  },
};

const TakeService = () => {
  const [shops, setShops] = useState([]);

  useEffect(() => {
    axios("http://localhost:4050/shops").then((res) => {
      setShops(res.data);
    });
  }, []);

  return (
    <>
      <div className="takeService-section">
        <h2 style={{ marginBottom: "40px" }}>Your Shops</h2>
        {shops.map((shop) => (
          <div className="track-product-shop-content">
            <div className="shop-details">
              <span>
                <input type="radio" name="" value="" />{" "}
              </span>{" "}
              <p>{shop.name}</p>
              <small>
                <i className="bi bi-geo-alt"></i> {shop.address}
              </small>
            </div>
          </div>
        ))}

        <div style={{ marginTop: "30px" }}>
          <TakeServiceForm />
        </div>
      </div>
    </>
  );
};

export default TakeService;
