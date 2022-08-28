import React from "react";
import "./EmployeeDetails.css";

const EmployeeDetails = (props) => {
  console.log(props);
  const {
    Name1,
    Name2,
    Name3,
    Name4,
    Designation1,
    Designation2,
    Designation3,
    Designation4,
    Branch,
  } = props.employee;
  return (
    <>
      <div className="employeeDetailContainer">
        <h2 className="branch">Branch: <span>{Branch}</span></h2>
        <div className="branch-content">
          <div className="branch-content-header">
            <h3>Employees</h3>
          </div>
          <div className="nameDesignation1">
            <div>
              <p>{Name1}</p>
            </div>
            <div>
              <p>{Designation1}</p>
            </div>
          </div>
          <div className="nameDesignation2">
            <div>
              <p>{Name2}</p>
            </div>
            <div>
              <p>{Designation2}</p>
            </div>
          </div>
          <div className="nameDesignation3">
            <div>
              <p>{Name3}</p>
            </div>
            <div>
              <p>{Designation3}</p>
            </div>
          </div>
          <div className="nameDesignation4">
            <div>
              <p>{Name4}</p>
            </div>
            <div>
              <p>{Designation4}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmployeeDetails;
