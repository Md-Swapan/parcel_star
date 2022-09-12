import React from "react";
import { useState, useEffect } from "react";
import * as axios from "axios";
import "./TrackProduct.css";


const TrackProduct = () => {
  const [shops, setShops] = useState([]);
  console.log(shops);
  useEffect(() => {
    axios("http://localhost:4050/shops").then((res) => {
      setShops(res.data);
      console.log(res);
    });
  }, []);


  return (
    <>
      <div className="track-product-container">
        <h2>Your Shops</h2>
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

        <div className="track-parcel-container">
          <div>
            <h2>Track Parcel</h2>
            <div className="track-parcel-container-content">
              <div className="track-parcel-content">
                <h5>Track Your Product</h5>
                <span>HERE YOU CAN TRACK YOUR PRODUCT EASILY</span>
              </div>
              <div className="track-parcel-input">
                <input
                  type="text"
                  name=""
                  placeholder="Enter Your Product Id"
                />
                <button type="">Track Your Parcel</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TrackProduct;
