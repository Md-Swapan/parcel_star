import React from "react";
import "./DeliveryCalculator.css";

const DeliveryCalculator = () => {
    const calculateToggle = (e) => {
        e.preventDefault();
        const form = document.querySelector('.form')
        const takeServiceContainer = document.querySelector('.take-service-container')
        form.style.marginLeft = "60px"
        takeServiceContainer.style.display = "block"
    }

    const closeModal = () => {
      const takeServiceContainer = document.querySelector('.take-service-container')
      const form = document.querySelector('.form')
      takeServiceContainer.style.display = "none"
      form.style.margin = "auto"
    }
  return (
    <>
      <div className="deliveryCalculator-section">
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
        <div className="container">
          {/* <div className="row">
            <div className="col-md-6">
                
            </div>
          </div> */}

          <div className="calculator-form-container">
            <form className="form">
              <div className="d-flex">
                <div>
                  <label for="">Weight</label>
                  <br />
                  <input type="text" placeholder="Enter weight" />
                  <br />

                  <label for="">Pickup Area</label>
                  <br />
                  <select>
                    <option selected>Select pickup area</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                  <br />

                  <label for="">Quantity</label>
                  <br />
                  <input
                    type="text"
                    placeholder="Enter quantity of your product"
                  />
                </div>

                <div className="form2">
                  <label for="">Product Type</label>
                  <br />
                  <select aria-label="Default select example">
                    <option selected>Select product type</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                  <br />

                  <label for="">Delivery Area</label>
                  <br />
                  <select aria-label="Default select example">
                    <option selected>Select delivery area</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                  <br />
                  <button onClick={calculateToggle} type="submit">Calculate</button>
                </div>
              </div>
            </form>

            <div className="take-service-container">
              <span className="close-tab" onClick={closeModal}>x</span>
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
                <button type="">Take Service</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeliveryCalculator;
