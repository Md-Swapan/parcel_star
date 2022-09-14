import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Modal from "react-modal";

const customStyles = {
  content: {
    borderRadius: "10px",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    // boxShadow: "0 0 0 500vmax rgb(0 0 0 / 0.3)",
    padding: "40px",
    paddingTop: "40px",
    width: "900px",
  },
};

const TakeServiceForm = () => {
  const { register, handleSubmit, errors } = useForm();
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
    console.log(parcelData);
    // axios.post("http://localhost:4050/AddShop", productData).then((res) => {

    //   console.log("done");
    // });

    openModal();
  };

  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
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
            <span onClick={closeModal}><i class="bi bi-caret-left-fill"></i> Back</span>

            <h6>Plan Category: <span>Standard</span></h6>

            <div className="plan-content">
              <div className="serviceCost">
                <p>Cost Per Kg: 10৳ x 5 kg = 50৳</p>
                <p>Weight: 10৳ x 5 kg = 50৳</p>
                <p>Distance: 10৳ x 5 kg = 50৳</p>
                <p>Quantity: 10৳ x 5 kg = 50৳</p>
              </div>
              <div className="haveToPay">
                <h4>You Have To Pay</h4>
                <h2>0 ৳</h2>
                <button type="">Take Service</button>
              </div>
            </div>
          </div>
        </Modal>
      </div>
    </>
  );
};

export default TakeServiceForm;
