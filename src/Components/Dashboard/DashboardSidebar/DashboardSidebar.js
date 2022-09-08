import React from "react";
import logo from "../../../assets/img/Rectangle 58.png";
import profileImg from "../../../assets/img/profile1.jpg";
import "./DashboardSidebar.css";
import { useEffect } from "react";
import useAuth from './../../../Hooks/useAuth';

const DashboardSidebar = () => {
    const { logOut } = useAuth();

    useEffect(()=> {
        const btns = document.querySelectorAll(".menu-item");

        const toggleItem = (elems) => {
            elems.forEach(elem => {
              elem.addEventListener("click", (event) => {
                removeActiveClass(elems);
                event.target.classList.add("active");
              })
            });
      
          }
          
          function removeActiveClass(elems){
            elems.forEach(elem =>{
              if(elem.classList.contains("active")){
                elem.classList.remove("active")
              }
            })
          }
             
      
          toggleItem(btns)

    }, [] )
    
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
          <h6>Md: Shamim hasan</h6>
          <small>Quantity of shop: 3</small>
        </div>
        </div>
        <ul className="menuList">
          <li className="menu-item active"><i className="bi bi-grid-1x2-fill"></i> Dashboard</li>
          <li className="menu-item"><i className="bi bi-clock-fill"></i> Order History</li>
          <li className="menu-item"><i className="bi bi-terminal-fill"></i> Take Service</li>
          <li className="menu-item"><i className="bi bi-map-fill"></i> Track Product</li>
          <li className="menu-item"><i className="bi bi-bookmark-star-fill"></i> Offers</li>
          <li className="menu-item"><i className="bi bi-headset"></i> Support</li>
          <li className="menu-item"><i className="bi bi-pin-map-fill"></i> Coverage Area</li>
          <li onClick={logOut} className="menu-item"><i className="bi bi-box-arrow-left"></i> Logout</li>
        </ul>
      </div>
    </>
  );
};

export default DashboardSidebar;
