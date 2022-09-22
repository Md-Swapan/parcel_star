import React from "react";
import "./DeliveryCalculator.css";
import { Link } from "react-router-dom";

const DeliveryCalculator = () => {
  const calculateToggle = (e) => {
    e.preventDefault();
    const form = document.querySelector(".formdiv");
    const takeServiceContainer = document.querySelector(
      ".take-service-container"
    );
    form.style.marginLeft = "50px ";
    // takeServiceContainer.style.display = "block"

    setTimeout(() => {
      takeServiceContainer.style.display = "block";
    }, 500);
  };

  const closeModal = () => {
    const takeServiceContainer = document.querySelector(
      ".take-service-container"
    );
    const form = document.querySelector(".formdiv");
    takeServiceContainer.style.display = "none";
    form.style.marginLeft = "300px";
  };

  return (
    <>
      <div className="deliveryCalculator-section " id="deliveryCalculator">
        <div className="container">
          <div className="deliveryCalculator-header">
            <div className="d-flex">
              <div className="dc-before"></div>
              <div className="dc-header">
                <h1>Delivery Calculator</h1>
              </div>
              <div className="dc-after"></div>
            </div>
            <small>
              Plan your shipments with ease as you estimate delivery costs
              beforehand{" "}
            </small>
          </div>

          <div className="calculator-form-container">
            <form className="formdiv">
              <div className="formdiv-container">
                <div>
                  <label htmlFor="">Weight</label>
                  <br />
                  <input type="text" placeholder="Enter weight" />
                  <br />

                  <label htmlFor="">Pickup Area</label>
                  <br />
                  <select>
                    <option selected>Select pickup area</option>
                    <option value="One">One</option>
                    <option value="Two">Two</option>
                    <option value="Three">Three</option>
                  </select>
                  <br />

                  <label htmlFor="">Quantity</label>
                  <br />
                  <input
                    type="text"
                    placeholder="Enter quantity of your product"
                  />
                </div>

                <div className="form2">
                  <label htmlFor="">Product Type</label>
                  <br />
                  <select aria-label="Default select example">
                    <option selected>Select product type</option>
                    <option value="One">One</option>
                    <option value="Two">Two</option>
                    <option value="Three">Three</option>
                  </select>
                  <br />

                  <label htmlFor="">Delivery Area</label>
                  <br />
                  <select aria-label="Default select example">
                    <option selected>Select delivery area</option>
                    <option value="One">One</option>
                    <option value="Two">Two</option>
                    <option value="Three">Three</option>
                  </select>
                  <br />
                  <button onClick={calculateToggle} type="submit">
                    Calculate
                  </button>
                </div>
              </div>
            </form>

            <div className="take-service-container">
              <span className="close-tab" onClick={closeModal}>
                <i className="bi bi-x-circle"></i>
              </span>
              <div className="d-flex">
                <div className="planCategory">
                  <p>Plan Category</p>
                  <small>Standard</small>
                </div>
                <div className="costPerKg">
                  <p>Cost Per Kg</p>
                  <small>0 Tk</small>
                </div>
              </div>
              <div className="haveToPay">
                <h4>You Have To Pay</h4>
                <h4>0 tk</h4>
              </div>
              <Link to="/take-service">
                <button type="">Take Service</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeliveryCalculator;
