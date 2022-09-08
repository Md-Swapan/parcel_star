import React from "react";
import DashboardSidebar from "./DashboardSidebar/DashboardSidebar";
import userProfileImg from "../../assets/img/man-profile-cartoon_18591-58482.webp";
import './Dashboard.css'

const Dashboard = () => {
  return (
    <>
      <div className="dashboard-section">
        <div className="dashboard-sidebar">
          <DashboardSidebar/>
        </div>
        <div className="dashboard-content-outlet-container">
            <div className="dashboard-navbar">
                <div className="content-title">Dashboard</div>
                <div className="content-search"><input type="text" name="" placeholder="Search"/></div>
                <div className="user-profile">
                    <img width={50} src={userProfileImg} alt=""/>
                </div>
            </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
