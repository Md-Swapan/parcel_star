import React from "react";
import DashboardSidebar from "./DashboardSidebar/DashboardSidebar";
import userProfileImg from "../../assets/img/profile1.jpg";
import "./Dashboard.css";
import { Outlet } from "react-router-dom";
import TitleOutlet from './TitleOutlet/TitleOutlet';
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const Dashboard = () => {

  return (
    <>
      <div className="dashboard-section">
        <div className="dashboard-sidebar">
          <DashboardSidebar />
        </div>
        <div className="dashboard-content-outlet-container">
          <div className="dashboard-navbar">
            <div className="content-title"><TitleOutlet/></div>
            <div className="content-search">
              <input type="text" name="" placeholder="Search" />{" "}
              <span>
                <i className="bi bi-search"></i>
              </span>
            </div>
            <div className="user-profile">
              <img width={50} src={userProfileImg} alt="" />
            </div>
          </div>

          <div className="dashboard-outlet-container">
            <Outlet/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
