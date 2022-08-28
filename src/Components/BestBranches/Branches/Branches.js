import React from "react";
import BranchDetails from "../BranchDetails/BranchDetails";
import './Branches.css'


const branchesData = [
    {
        
    }
];

const Branches = () => {
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
          <BranchDetails></BranchDetails>
        </div>
      </div>
    </>
  );
};

export default Branches;
