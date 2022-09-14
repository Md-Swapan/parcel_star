import React from "react";
import "./CoverageArea.css";
import { useState } from "react";

const branchInfo = [
  {
    divisionName: "Dhaka",
    branchs: [
      {
        branchName: "Moghbazar",
        number: "01234567899",
        location:
          "House 405 , Tejgaon industrial area ( Near Channel 24 ) 1208 Dhaka, Dhaka Division,Bangladesh",
      },
      {
        branchName: "dhanmondhi",
        number: "01234567899",
        location:
          "House 405 , Tejgaon industrial area ( Near Channel 24 ) 1208 Dhaka, Dhaka Division,Bangladesh",
      },
      {
        branchName: "Mohakhali",
        number: "01234567899",
        location:
          "House 405 , Tejgaon industrial area ( Near Channel 24 ) 1208 Dhaka, Dhaka Division,Bangladesh",
      },
      {
        branchName: "Gulshan",
        number: "01234567899",
        location:
          "House 405 , Tejgaon industrial area ( Near Channel 24 ) 1208 Dhaka, Dhaka Division,Bangladesh",
      },
    ],
  },
  {
    divisionName: "Dhaka",
    branchs: [
      {
        branchName: "Moghbazar",
        number: "01234567899",
        location:
          "House 405 , Tejgaon industrial area ( Near Channel 24 ) 1208 Dhaka, Dhaka Division,Bangladesh",
      },
      {
        branchName: "dhanmondhi",
        number: "01234567899",
        location:
          "House 405 , Tejgaon industrial area ( Near Channel 24 ) 1208 Dhaka, Dhaka Division,Bangladesh",
      },
      {
        branchName: "Mohakhali",
        number: "01234567899",
        location:
          "House 405 , Tejgaon industrial area ( Near Channel 24 ) 1208 Dhaka, Dhaka Division,Bangladesh",
      },
      {
        branchName: "Gulshan",
        number: "01234567899",
        location:
          "House 405 , Tejgaon industrial area ( Near Channel 24 ) 1208 Dhaka, Dhaka Division,Bangladesh",
      },
    ],
  },
  {
    divisionName: "Dhaka",
    branchs: [
      {
        branchName: "Moghbazar",
        number: "01234567899",
        location:
          "House 405 , Tejgaon industrial area ( Near Channel 24 ) 1208 Dhaka, Dhaka Division,Bangladesh",
      },
      {
        branchName: "dhanmondhi",
        number: "01234567899",
        location:
          "House 405 , Tejgaon industrial area ( Near Channel 24 ) 1208 Dhaka, Dhaka Division,Bangladesh",
      },
      {
        branchName: "Mohakhali",
        number: "01234567899",
        location:
          "House 405 , Tejgaon industrial area ( Near Channel 24 ) 1208 Dhaka, Dhaka Division,Bangladesh",
      },
      {
        branchName: "Gulshan",
        number: "01234567899",
        location:
          "House 405 , Tejgaon industrial area ( Near Channel 24 ) 1208 Dhaka, Dhaka Division,Bangladesh",
      },
    ],
  },
  {
    divisionName: "Tangail",
    branchs: [
      {
        branchName: "Moghbazar",
        number: "01234567899",
        location:
          "House 405 , Tejgaon industrial area ( Near Channel 24 ) 1208 Dhaka, Dhaka Division,Bangladesh",
      },
      {
        branchName: "dhanmondhi",
        number: "01234567899",
        location:
          "House 405 , Tejgaon industrial area ( Near Channel 24 ) 1208 Dhaka, Dhaka Division,Bangladesh",
      },
      {
        branchName: "Mohakhali",
        number: "01234567899",
        location:
          "House 405 , Tejgaon industrial area ( Near Channel 24 ) 1208 Dhaka, Dhaka Division,Bangladesh",
      },
      {
        branchName: "Gulshan",
        number: "01234567899",
        location:
          "House 405 , Tejgaon industrial area ( Near Channel 24 ) 1208 Dhaka, Dhaka Division,Bangladesh",
      },
    ],
  },
];

const CoverageArea = () => {
  const [branchsInfo, setBranchsInfo] = useState(branchInfo);


  // const listToggle = () => {
  //   const branchlistContainer = document.querySelector('.branchlist-container')

  //   branchlistContainer.style.height = "auto"
  // }

  return (
    <>
      <div className="coverage-area-container">
        <h2>Coverage Area</h2>
        <div className="branchs-content-container">
          {branchsInfo.map((branchsItem) => (
            <div className="branchContent">
              <div className="branch-header" >
                <small>{Object.keys(branchsItem.branchs).length} Branchs</small>
                <h6>{branchsItem.divisionName}</h6>
                <p>
                  <i className="bi bi-caret-down-square"></i>
                </p>
              </div>

              <div className="branchlist-container">
                {Object.keys(branchsItem.branchs).map((item, index) => (
                  <>
                    <div className="branchsList">
                      <div className="brName">
                        <i className="bi bi-building"></i>
                        <small>{branchsItem.branchs[index]?.branchName}</small>
                      </div>
                      <div className="brNumber">
                        <i class="bi bi-telephone"></i>{" "}
                        <small>{branchsItem.branchs[index]?.number}</small>
                      </div>
                      <div className="brLocation">
                        <i className="bi bi-geo-alt"></i>{" "}
                        <small>{branchsItem.branchs[index]?.location}</small>
                      </div>
                    </div>
                  </>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CoverageArea;
