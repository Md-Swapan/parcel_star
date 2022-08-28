import React, { useState } from "react";
import './Employees.css'
import EmployeeDetails from '../EmployeeDetails/EmployeeDetails';

const employeesData = [
  {
    _id: 1,
    Name1: "Kashem",
    Designation1: "Manager",
    Name2: "Kashem",
    Designation2: "Manager",
    Name3: "Kashem",
    Designation3: "Manager",
    Name4: "Kashem",
    Designation4: "Manager",
    Branch: "Moghbazar, Dhaka",
  },
  {
    _id: 2,
    Name1: "Hashem",
    Designation1: "Manager",
    Name2: "Hashem",
    Designation2: "Manager",
    Name3: "Hashem",
    Designation3: "Manager",
    Name4: "Hashem",
    Designation4: "Manager",
    Branch: "Gazipur, Dhaka",
  },
  {
    _id: 3,
    Name1: "Monir",
    Designation1: "Manager",
    Name2: "Monir",
    Designation2: "Manager",
    Name3: "Monir",
    Designation3: "Manager",
    Name4: "Monir",
    Designation4: "Manager",
    Branch: "Tangail, Dhaka",
  },
  {
    _id: 4,
    Name1: "Nasir",
    Designation1: "Manager",
    Name2: "Nasir",
    Designation2: "Manager",
    Name3: "Nasir",
    Designation3: "Manager",
    Name4: "Nasir",
    Designation4: "Manager",
    Branch: "Jamalpur, Dhaka",
  },
  {
    _id: 5,
    Name1: "Tarek",
    Designation1: "Manager",
    Name2: "Tarek",
    Designation2: "Manager",
    Name3: "Tarek",
    Designation3: "Manager",
    Name4: "Tarek",
    Designation4: "Manager",
    Branch: "Rajshahi, Dhaka",
  },
  {
    _id: 6,
    Name1: "Sojib",
    Designation1: "Manager",
    Name2: "Sojib",
    Designation2: "Manager",
    Name3: "Sojib",
    Designation3: "Manager",
    Name4: "Sojib",
    Designation4: "Manager",
    Branch: "Moghbazar, Dhaka",
  },
  {
    _id: 7,
    Name1: "Korim",
    Designation1: "Manager",
    Name2: "Korim",
    Designation2: "Manager",
    Name3: "Korim",
    Designation3: "Manager",
    Name4: "Korim",
    Designation4: "Manager",
    Branch: "Moghbazar, Dhaka",
  },
  {
    _id: 8,
    Name1: "Sany",
    Designation1: "Manager",
    Name2: "Sany",
    Designation2: "Manager",
    Name3: "Sany",
    Designation3: "Manager",
    Name4: "Sany",
    Designation4: "Manager",
    Branch: "Moghbazar, Dhaka",
  },
];

const Employees = () => {
  const [employees, setEmployees] = useState(employeesData);
  return (
    <>
      <div className="employee-section">
        <div className="container">
          <div className="employee-header">
            <div className="d-flex">
              <div className="dc-before"></div>
              <div className="dc-header">
                <h1>Employees</h1>
              </div>
              <div className="dc-after"></div>
            </div>
          </div>

          <div className="employeeDetail-card-container">
            {
                employees.map(employee => <EmployeeDetails key={employee._id} employee={employee}></EmployeeDetails>)
            }
          </div>
        </div>
      </div>
    </>
  );
};

export default Employees;
