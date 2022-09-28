import React from "react";
import logo from "../../../assets/img/Rectangle 58.png";
import profileImg from "../../../assets/img/profile1.jpg";
import "./DashboardSidebar.css";
import { useEffect } from "react";
import useAuth from "./../../../Hooks/useAuth";
import { Link } from "react-router-dom";
import { useState } from "react";
import * as axios from "axios";
import { NavLink } from "react-router-dom";

const DashboardSidebar = () => {
  const { user, logOut } = useAuth();

  useEffect(() => {
    const btns = document.querySelectorAll(".menu-item");

    const toggleItem = (elems) => {
      elems.forEach((elem) => {
        elem.addEventListener("click", (event) => {
          removeActiveClass(elems);
          event.target.classList.add("active");
        });
      });
    };

    function removeActiveClass(elems) {
      elems.forEach((elem) => {
        if (elem.classList.contains("active")) {
          elem.classList.remove("active");
        }
      });
    }

    toggleItem(btns);
  }, []);

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
      <div id="sidebarMenu">
        <div className="dashboard-logo">
          <img src={logo} alt="" />
        </div>
        <div className="dashboard-profile-show-container">
          <div className="Dashboard-profileImg">
            <div>
              <img src={profileImg} alt="" />
            </div>
          </div>
          <div className="profileName-shopQuantity">
            <h6>{user.displayName}</h6>
            <small>Quantity of shop: {shops.length}</small>
          </div>
        </div>
        <ul className="menuList">
          <NavLink to="/">
            <li className="menu-item">
            <i class="bi bi-house-fill"></i> Home
            </li>
          </NavLink>
          <NavLink to="/dashboard">
            <li className="menu-item active">
              <i className="bi bi-grid-1x2-fill"></i> Dashboard
            </li>
          </NavLink>
          <NavLink to="order-history">
            <li className="menu-item">
              <i className="bi bi-clock-fill"></i> Order History
            </li>
          </NavLink>
          <NavLink to="take-service">
            <li className="menu-item">
              <i className="bi bi-terminal-fill"></i> Take Service
            </li>
          </NavLink>
          <NavLink to="track-product">
            <li className="menu-item">
              <i className="bi bi-map-fill"></i> Track Product
            </li>
          </NavLink>
          <NavLink to="offers">
            <li className="menu-item">
              <i className="bi bi-bookmark-star-fill"></i> Offers
            </li>
          </NavLink>
          <NavLink to="support">
            <li className="menu-item">
              <i className="bi bi-headset"></i> Support
            </li>
          </NavLink>
          <NavLink to="coverage-area">
            <li className="menu-item">
              <i className="bi bi-pin-map-fill"></i> Coverage Area
            </li>
          </NavLink>
          <li onClick={logOut} className="menu-item">
            <i className="bi bi-box-arrow-left"></i> Logout
          </li>
        </ul>
      </div>
    </>
  );
};

export default DashboardSidebar;
