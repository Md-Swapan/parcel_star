import React from "react";
import { useState, useEffect } from "react";
import * as axios from "axios";

const Offers = () => {
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
            <h2>Offers</h2>
            <div className="track-parcel-container-content">
              <div className="track-parcel-content">
                <h5>You Have 2 Offers From Parcel Star</h5>
              </div>
              <div className="offers-content">
                <span>
                  <input type="radio" name="" value="" />{" "}
                </span>{" "}
                <p> Get 2 Free Delivery For Both Shop</p>
              </div>
              <div className="offers-content">
                <span>
                  <input type="radio" name="" value="" />{" "}
                </span>{" "}
                <p> Get 20% Off For Your Shop</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Offers;
