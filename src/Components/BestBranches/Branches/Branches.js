import React, { useState } from "react";
import BranchDetails from "../BranchDetails/BranchDetails";
import "./Branches.css";

const branchesData = [
  
  {
    _id: 1,
    division: "Dhaka",
    branch: {
      branch1: "Moghbazar, Dhaka",
      branch2: "Malibagh, Dhaka",
      branch3: "Kaligaon, Dhaka",
      branch4: "Gazipur, Dhaka",
      branch5: "Mirpur, Dhaka",
      branch6: "Dhanmondhi, Dhaka",
    },
    locations: {
      Location1:
        "House 405 , Tejgaon industrial area ( Near Channel 24 ) 1208 Dhaka, Dhaka Division,Bangladesh",
      Location2:
        "House 405 , Tejgaon industrial area ( Near Channel 24 ) 1208 Dhaka, Dhaka Division,Bangladesh",
      Location3:
        "House 405 , Tejgaon industrial area ( Near Channel 24 ) 1208 Dhaka, Dhaka Division,Bangladesh",
      Location4:
        "House 405 , Tejgaon industrial area ( Near Channel 24 ) 1208 Dhaka, Dhaka Division,Bangladesh",
      Location5:
        "House 405 , Tejgaon industrial area ( Near Channel 24 ) 1208 Dhaka, Dhaka Division,Bangladesh",
      Location6:
        "House 405 , Tejgaon industrial area ( Near Channel 24 ) 1208 Dhaka, Dhaka Division,Bangladesh",
    },

    employees: {
      name1: "Mr.Kashem",
      name2: "Mr.Emon",
      name3: "Mr.Sumon",
      name4: "Mr.Halim",
    },
    designation: {
      desig1: "Manager",
      desig2: "Computer Operator",
      desig3: "Delivery Man",
      desig4: "Delivery Man",
    },
  },
  {
    _id: 2,
    division: "Dhaka",
    branch: {
      branch1: "Moghbazar, Dhaka",
      branch2: "Malibagh, Dhaka",
      branch3: "Kaligaon, Dhaka",
      branch4: "Gazipur, Dhaka",
      branch5: "Mirpur, Dhaka",
      branch6: "Dhanmondhi, Dhaka",
    },
    locations: {
      Location1:
        "House 405 , Tejgaon industrial area ( Near Channel 24 ) 1208 Dhaka, Dhaka Division,Bangladesh",
      Location2:
        "House 405 , Tejgaon industrial area ( Near Channel 24 ) 1208 Dhaka, Dhaka Division,Bangladesh",
      Location3:
        "House 405 , Tejgaon industrial area ( Near Channel 24 ) 1208 Dhaka, Dhaka Division,Bangladesh",
      Location4:
        "House 405 , Tejgaon industrial area ( Near Channel 24 ) 1208 Dhaka, Dhaka Division,Bangladesh",
      Location5:
        "House 405 , Tejgaon industrial area ( Near Channel 24 ) 1208 Dhaka, Dhaka Division,Bangladesh",
      Location6:
        "House 405 , Tejgaon industrial area ( Near Channel 24 ) 1208 Dhaka, Dhaka Division,Bangladesh",
    },

    employees: {
      name1: "Mr.Kashem",
      name2: "Mr.Emon",
      name3: "Mr.Sumon",
      name4: "Mr.Halim",
    },
    designation: {
      desig1: "Manager",
      desig2: "Computer Operator",
      desig3: "Delivery Man",
      desig4: "Delivery Man",
    },
  },
  {
    _id: 3,
    division: "Dhaka",
    branch: {
      branch1: "Moghbazar, Dhaka",
      branch2: "Malibagh, Dhaka",
      branch3: "Kaligaon, Dhaka",
      branch4: "Gazipur, Dhaka",
      branch5: "Mirpur, Dhaka",
      branch6: "Dhanmondhi, Dhaka",
    },
    locations: {
      Location1:
        "House 405 , Tejgaon industrial area ( Near Channel 24 ) 1208 Dhaka, Dhaka Division,Bangladesh",
      Location2:
        "House 405 , Tejgaon industrial area ( Near Channel 24 ) 1208 Dhaka, Dhaka Division,Bangladesh",
      Location3:
        "House 405 , Tejgaon industrial area ( Near Channel 24 ) 1208 Dhaka, Dhaka Division,Bangladesh",
      Location4:
        "House 405 , Tejgaon industrial area ( Near Channel 24 ) 1208 Dhaka, Dhaka Division,Bangladesh",
      Location5:
        "House 405 , Tejgaon industrial area ( Near Channel 24 ) 1208 Dhaka, Dhaka Division,Bangladesh",
      Location6:
        "House 405 , Tejgaon industrial area ( Near Channel 24 ) 1208 Dhaka, Dhaka Division,Bangladesh",
    },

    employees: {
      name1: "Mr.Kashem",
      name2: "Mr.Emon",
      name3: "Mr.Sumon",
      name4: "Mr.Halim",
    },
    designation: {
      desig1: "Manager",
      desig2: "Computer Operator",
      desig3: "Delivery Man",
      desig4: "Delivery Man",
    },
  },
  {
    _id: 4,
    division: "Dhaka",
    branch: {
      branch1: "Moghbazar, Dhaka",
      branch2: "Malibagh, Dhaka",
      branch3: "Kaligaon, Dhaka",
      branch4: "Gazipur, Dhaka",
      branch5: "Mirpur, Dhaka",
      branch6: "Dhanmondhi, Dhaka",
    },
    locations: {
      Location1:
        "House 405 , Tejgaon industrial area ( Near Channel 24 ) 1208 Dhaka, Dhaka Division,Bangladesh",
      Location2:
        "House 405 , Tejgaon industrial area ( Near Channel 24 ) 1208 Dhaka, Dhaka Division,Bangladesh",
      Location3:
        "House 405 , Tejgaon industrial area ( Near Channel 24 ) 1208 Dhaka, Dhaka Division,Bangladesh",
      Location4:
        "House 405 , Tejgaon industrial area ( Near Channel 24 ) 1208 Dhaka, Dhaka Division,Bangladesh",
      Location5:
        "House 405 , Tejgaon industrial area ( Near Channel 24 ) 1208 Dhaka, Dhaka Division,Bangladesh",
      Location6:
        "House 405 , Tejgaon industrial area ( Near Channel 24 ) 1208 Dhaka, Dhaka Division,Bangladesh",
    },
    employees: {
      name1: "Mr.Kashem",
      name2: "Mr.Emon",
      name3: "Mr.Sumon",
      name4: "Mr.Halim",
    },
    designation: {
      desig1: "Manager",
      desig2: "Computer Operator",
      desig3: "Delivery Man",
      desig4: "Delivery Man",
    },
  },
];

const Branches = () => {
  const [branchData, setBranchData] = useState(branchesData);
  return (
    <>
      <div className="branches-container">
        <div className="container">
          <div className="branches-header">
            <div className="d-flex">
              <div className="branches-header-before"></div>
              <div className="branches-header-header">
                <h1>Branches</h1>
              </div>
              <div className="branches-header-after"></div>
            </div>
          </div>
          <div>
            {branchData.map((branch) => (
              <BranchDetails key={branch._id} branch={branch}></BranchDetails>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Branches;
