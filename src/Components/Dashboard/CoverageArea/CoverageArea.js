import React from "react";
import "./CoverageArea.css";
import { useState } from "react";

const branchInfo = [
  {
    divisionName: "Dhaka",
    branchs: {
      branch1: {
        branchName: "Moghbazar",
        number: "01234567899",
        location:
          "House 405 , Tejgaon industrial area ( Near Channel 24 ) 1208 Dhaka, Dhaka Division,Bangladesh",
      },
      branch2: {
        branchName: "dhanmondhi",
        number: "01234567899",
        location:
          "House 405 , Tejgaon industrial area ( Near Channel 24 ) 1208 Dhaka, Dhaka Division,Bangladesh",
      },
      branch3: {
        branchName: "Mohakhali",
        number: "01234567899",
        location:
          "House 405 , Tejgaon industrial area ( Near Channel 24 ) 1208 Dhaka, Dhaka Division,Bangladesh",
      },
      branch4: {
        branchName: "Gulshan",
        number: "01234567899",
        location:
          "House 405 , Tejgaon industrial area ( Near Channel 24 ) 1208 Dhaka, Dhaka Division,Bangladesh",
      },
    },
  },
  {
    divisionName: "Dhaka",
    branchs: {
      branch1: {
        branchName: "Moghbazar",
        number: "01234567899",
        location:
          "House 405 , Tejgaon industrial area ( Near Channel 24 ) 1208 Dhaka, Dhaka Division,Bangladesh",
      },
      branch2: {
        branchName: "dhanmondhi",
        number: "01234567899",
        location:
          "House 405 , Tejgaon industrial area ( Near Channel 24 ) 1208 Dhaka, Dhaka Division,Bangladesh",
      },
      branch3: {
        branchName: "Mohakhali",
        number: "01234567899",
        location:
          "House 405 , Tejgaon industrial area ( Near Channel 24 ) 1208 Dhaka, Dhaka Division,Bangladesh",
      },
      branch4: {
        branchName: "Gulshan",
        number: "01234567899",
        location:
          "House 405 , Tejgaon industrial area ( Near Channel 24 ) 1208 Dhaka, Dhaka Division,Bangladesh",
      },
    },
  },
  {
    divisionName: "Dhaka",
    branchs: {
      branch1: {
        branchName: "Moghbazar",
        number: "01234567899",
        location:
          "House 405 , Tejgaon industrial area ( Near Channel 24 ) 1208 Dhaka, Dhaka Division,Bangladesh",
      },
      branch2: {
        branchName: "dhanmondhi",
        number: "01234567899",
        location:
          "House 405 , Tejgaon industrial area ( Near Channel 24 ) 1208 Dhaka, Dhaka Division,Bangladesh",
      },
      branch3: {
        branchName: "Mohakhali",
        number: "01234567899",
        location:
          "House 405 , Tejgaon industrial area ( Near Channel 24 ) 1208 Dhaka, Dhaka Division,Bangladesh",
      },
      branch4: {
        branchName: "Gulshan",
        number: "01234567899",
        location:
          "House 405 , Tejgaon industrial area ( Near Channel 24 ) 1208 Dhaka, Dhaka Division,Bangladesh",
      },
    },
  },
  {
    divisionName: "Dhaka",
    branchs: {
      branch1: {
        branchName: "Moghbazar",
        number: "01234567899",
        location:
          "House 405 , Tejgaon industrial area ( Near Channel 24 ) 1208 Dhaka, Dhaka Division,Bangladesh",
      },
      branch2: {
        branchName: "dhanmondhi",
        number: "01234567899",
        location:
          "House 405 , Tejgaon industrial area ( Near Channel 24 ) 1208 Dhaka, Dhaka Division,Bangladesh",
      },
      branch3: {
        branchName: "Mohakhali",
        number: "01234567899",
        location:
          "House 405 , Tejgaon industrial area ( Near Channel 24 ) 1208 Dhaka, Dhaka Division,Bangladesh",
      },
      branch4: {
        branchName: "Gulshan",
        number: "01234567899",
        location:
          "House 405 , Tejgaon industrial area ( Near Channel 24 ) 1208 Dhaka, Dhaka Division,Bangladesh",
      },
    },
  },
];

const CoverageArea = () => {
  const [branchsInfo, setBranchsInfo] = useState(branchInfo);
  console.log(branchsInfo);
  return (
    <>
      <div className="coverage-area-container">
        <h2>Coverage Area</h2>
        <div className="branchs-content-container">
          {branchsInfo.map((branch, length) => (
            <div>
              <div className="branch-header">
                <small>4 Branchs</small>
                <h6>{branch.divisionName}</h6>
                <p>
                  <i className="bi bi-caret-down-square"></i>
                </p>
              </div>

              <div className="branchsList">
                <div className="brName">
                  <i className="bi bi-building"></i>
                  <small>{branch.branchs.branch1.branchName}</small>
                </div>
                <div className="brNumber">
                  <i class="bi bi-telephone"></i>{" "}
                  <small>{branch.branchs.branch1.number}</small>
                </div>
                <div className="brLocation">
                  <i className="bi bi-geo-alt"></i>{" "}
                  <small>{branch.branchs.branch1.location}</small>
                </div>
              </div>

              <div className="branchsList">
                <div className="brName">
                  <i className="bi bi-building"></i>
                  <small>{branch.branchs.branch2.branchName}</small>
                </div>
                <div className="brNumber">
                  <i class="bi bi-telephone"></i>{" "}
                  <small>{branch.branchs.branch2.number}</small>
                </div>
                <div className="brLocation">
                  <i className="bi bi-geo-alt"></i>{" "}
                  <small>{branch.branchs.branch2.location}</small>
                </div>
              </div>

              <div className="branchsList">
                <div className="brName">
                  <i className="bi bi-building"></i>
                  <small>{branch.branchs.branch3.branchName}</small>
                </div>
                <div className="brNumber">
                  <i class="bi bi-telephone"></i>{" "}
                  <small>{branch.branchs.branch3.number}</small>
                </div>
                <div className="brLocation">
                  <i className="bi bi-geo-alt"></i>{" "}
                  <small>{branch.branchs.branch3.location}</small>
                </div>
              </div>

              <div className="branchsList">
                <div className="brName">
                  <i className="bi bi-building"></i>
                  <small>{branch.branchs.branch4.branchName}</small>
                </div>
                <div className="brNumber">
                  <i class="bi bi-telephone"></i>{" "}
                  <small>{branch.branchs.branch4.number}</small>
                </div>
                <div className="brLocation">
                  <i className="bi bi-geo-alt"></i>{" "}
                  <small>{branch.branchs.branch4.location}</small>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CoverageArea;
