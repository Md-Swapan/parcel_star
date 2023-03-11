import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import "./TakeService.css";
import { useState } from "react";
import "reactjs-popup/dist/index.css";
import OptionImg1 from "../../../assets/img/Bkash-logo.png";
import OptionImg2 from "../../../assets/img/Nagad-Logo.wine.png";
import OptionImg3 from "../../../assets/img/rocket (1).png";

const customStyles = {
  content: {
    borderRadius: "10px",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    boxShadow: "0 0 0 500vmax rgb(0 0 0 / 0.2)",
    padding: "40px",
    paddingTop: "40px",
    width: "900px",
  },
};

const TakeServiceForm = () => {
  const { register, handleSubmit, errors } = useForm();
  const [modalIsOpen, setIsOpen] = React.useState(false);
  
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }


  const [parcelData, setParcelData] = useState([]);  

  const onSubmit = (data) => {
    const parcelData = {
      productType: data.productType,
      parcelName: data.parcelName,
      parcelQty: data.parcelQty,
      weight: data.weight,
      pickupArea: data.pickupArea,
      deliveryArea: data.deliveryArea,
      senderPhnNumber: data.senderPhnNumber,
      receiverPhnNumber: data.receiverPhnNumber,
    };
    setParcelData(parcelData);

    // axios.post("http://localhost:4050/AddShop", productData).then((res) => {

    //   console.log("done");
    // });

    openModal();
  };

  
  const paymentLedgerToggle = () => {
    const planCalculateContainer = document.querySelector(".plan-calculate-container");
    const paymentLedgerContainer = document.querySelector(".paymentLedger-container");
    planCalculateContainer.style.display = "none";
    paymentLedgerContainer.style.display = "block";
  };

  const [userType, setUserType] = useState("");
  const isRadioSelected = (value) => userType === value;
  const handleRadioClick = (event) => setUserType(event.target.value);

  const senderToggler = () => {
    const senderPayContainer = document.querySelector(".sender-pay-container");
    const payBy = document.querySelector(".payBy");
    const havtoPayContainer = document.querySelector(".havtoPay-container");

    senderPayContainer.style.display = "block";
    payBy.style.display = "none ";
    havtoPayContainer.style.display = "none";
  };

  const paymentOptionWayHandler = () => {
    const paymentOptionWayContent = document.querySelector(".payment-option-way-content");

    paymentOptionWayContent.style.display = "block";
  };


  return (
    <>
      <div className="takeService-container">
        <h2>Take Service</h2>
        <div className="takeService-form">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label htmlFor="">Product Type</label>
              <br />

              <select {...register("productType")} required>
                <option value="none" selected disabled hidden>
                  Product Type
                </option>
                <option value="Electronics">Electronics</option>
                <option value="Fashion">Fashion</option>
                <option value="Glass">Glass</option>
                <option value="Others">Others</option>
              </select>
            </div>
            <div>
              <label htmlFor="">Parcel Name</label>
              <br />
              <input
                type="text"
                name=""
                placeholder="Enter Parcel Name"
                {...register("parcelName")}
                required
              />
            </div>
            <div>
              <label htmlFor="">Parcel Quantity</label>
              <br />
              <input
                type="number"
                name=""
                placeholder="Enter Parcel Quantity"
                {...register("parcelQty")}
                required
              />
            </div>
            <div>
              <label htmlFor="">Parcel Weight</label>
              <br />
              <input
                type="number"
                name=""
                placeholder="Enter Parcel Weight"
                {...register("weight")}
                required
              />
            </div>
            <div>
              <label htmlFor="">Pickup Area</label>
              <br />

              <select {...register("pickupArea")} required>
                <option value="none" selected disabled hidden>
                  Pickup Area
                </option>
                <option value="Dhaka">Dhaka</option>
                <option value="khulna">Khulna</option>
              </select>
            </div>

            <div>
              <label htmlFor="">Delivery Area</label>
              <br />

              <select {...register("deliveryArea")} required>
                <option value="none" selected disabled hidden>
                  Delivery Area
                </option>
                <option value="Rajshahi">Rajshahi</option>
                <option value="Rangpur">Rangpur</option>
              </select>
            </div>
            <div>
              <label htmlFor="">Sender Phone Number</label>
              <br />
              <input
                type="number"
                name=""
                placeholder="Enter Sender Phone Number"
                {...register("senderPhnNumber")}
                required
              />
            </div>
            <div>
              <label htmlFor="">Receiver Phone Number</label>
              <br />
              <input
                type="number"
                name=""
                placeholder="Enter Receiver Phone Number"
                {...register("receiverPhnNumber")}
                required
              />
            </div>
            <div className="percelService-btns">
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>

        <Modal
          ariaHideApp={false}
          isOpen={modalIsOpen}
          // onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <div className="parceldata-submit-modal">
            <span onClick={closeModal}>
              <i class="bi bi-caret-left-fill"></i> Back
            </span>

            <div className="plan-calculate-container">
              <h4>
                Plan Category: <span>Standard</span>
              </h4>

              <div className="plan-content">
                
                  <div className="serviceCost">
                  <div>
                    <p>
                      Cost Per Kg, <strong>10৳</strong> 10৳ x 5 kg
                      <span>= 50৳</span>
                    </p>
                    <p>
                      Distance Cost per km, <strong>10৳</strong> (10৳ x 5 km){" "}
                      <span>= 50৳</span>
                    </p>
                  </div>
                  <p className="subtotal">
                    Sub Total <span>= 100৳</span>{" "}
                  </p>
                  <p>
                    Quantity + Sub Total ( 5 qty x 100৳) <span>= 500৳</span>
                  </p>
                </div>
                
                <div className="haveToPay">
                  <h4>You Have To Pay</h4>
                  <h2>500 ৳</h2>
                  <button onClick={paymentLedgerToggle} type="">
                    Take Service
                  </button>
                </div>
              </div>
            </div>
            <div className="paymentLedger-container">
              <h2>Payment Ledger</h2>
              <div className="d-flex justify-content-center paymentLedger-content">
                <div className="payBy">
                  <h4>Pay by :</h4>

                  <div className="account-type">
                    <div>
                      <input
                        type="radio"
                        name="selectedRadioBtn"
                        value="sender"
                        checked={isRadioSelected("sender")}
                        onChange={handleRadioClick}
                        onClick={senderToggler}
                      />
                      <label for="Sender">Sender</label>
                    </div>
                    <div>
                      <input
                        type="radio"
                        name="selectedRadioBtn"
                        value="receiver"
                        checked={isRadioSelected("receiver")}
                        onChange={handleRadioClick}
                      />
                      <label for="receiver">Receiver</label>
                      {/* <Popup
                        trigger={<button> Trigger</button>}
                        position="right center"
                      >
                        <div>Popup content here !!</div>
                      </Popup> */}
                    </div>
                  </div>
                </div>
                <div className="havtoPay-container">
                  <div className="haveToPay">
                    <h4>You Have To Pay</h4>
                    <h3>500৳</h3>
                    <button onClick={closeModal} type="">
                      Cancel Order
                    </button>
                  </div>
                </div>
              </div>

              <div className="sender-pay-container">
                <div className="sender-pay-content">
                  <div>
                    <h4>
                      Pay by : <span>Sender</span>
                    </h4>
                    <h3>
                      You Have To Pay: <span>500৳</span>{" "}
                    </h3>
                  </div>
                  <div className="payment-way">
                    <h4>Payment by : </h4>

                    <div className="d-flex">
                      <div className="cashOnDeliVery">
                        <input
                          type="radio"
                          name="selectedRadioBtn"
                          value="cashOnDelivery"
                          checked={isRadioSelected("cashOnDelivery")}
                          onChange={handleRadioClick}
                          // onClick={senderToggler}
                        />
                        <label for="cashOnDelivery">Cash On Delivery</label>
                      </div>
                      <div>
                        <input
                          type="radio"
                          name="selectedRadioBtn"
                          value="onlinePayment"
                          checked={isRadioSelected("onlinePayment")}
                          onChange={handleRadioClick}
                          onClick={paymentOptionWayHandler}
                        />
                        <label for="onlinePayment">Online Payment</label>
                      </div>
                    </div>
                    <div className="payment-option-way-content">
                      <div className="payment-option-way">
                        <div>
                          <img width={90} src={OptionImg1} alt="" />
                        </div>
                        <div>
                          <img width={90} src={OptionImg2} alt="" />
                        </div>
                        <div>
                          <img width={110} src={OptionImg3} alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <button onClick={closeModal} type="">
                  Cancel Order
                </button>
              </div>
            </div>
          </div>
        </Modal>
      </div>
    </>
  );
};

export default TakeServiceForm;
