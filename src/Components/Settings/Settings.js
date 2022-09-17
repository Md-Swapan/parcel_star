import React, { useState } from "react";
import "./Settings.css";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Link } from "react-router-dom";

const Settings = () => {
  const { register, handleSubmit, errors } = useForm();
  const [imageUrl, setImageUrl] = useState(null);

  const handelImgUpload = (event) => {
    console.log(event.target.files[0]);
    const imageData = new FormData();
    imageData.set("key", "282791da900bc047d811a5c2dcf9f3f5");
    imageData.append("image", event.target.files[0]);

    axios
      .post("https://api.imgbb.com/1/upload", imageData)
      .then((res) => setImageUrl(res.data.data.display_url))
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

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

    // openModal();
  };
  return (
    <div className="settings-container">
      <div className="d-flex">
        <Link to="/">
          <span
            style={{
              marginTop: "80px",
              marginLeft: "200px",
              position: "absolute",
              color: "#002a47",
            }}
          >
            <i class="bi bi-caret-left-fill"></i> Back
          </span>
        </Link>
        <h2>Settings</h2>
      </div>
      <div className="settings-content">
        <div className="general-settings">
          <h3>General Settings</h3>
          <div className="general-form">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div>
                <label htmlFor="">Change Your Name</label>
                <br />
                <input
                  type="text"
                  name=""
                  placeholder="Enter New Name"
                  {...register("parcelName")}
                  required
                />

                <button type="">Change Request</button>
              </div>
              <br />
              <div>
                <label htmlFor="">Change Your Phone Number</label>
                <br />
                <input
                  type="number"
                  name=""
                  placeholder="Enter Phone Number"
                  {...register("parcelQty")}
                  required
                />
                <button type="">Change Request</button>
              </div>
              <br />
              <div className="generalImgInput">
                <label htmlFor="">Change Your Photo</label>
                <br />
                <span>
                  <i className="bi bi-image"></i>
                  <small>Upload Image</small>
                  <input type="file" name="" />
                </span>
                <div className="uploadedImgShow">
                  <img src={imageUrl} alt="" />
                </div>
                <p>{imageUrl} </p>
                <button type="">Change Request</button>
              </div>
              {/* <div className="percelService-btns">
                <button type="submit">Submit</button>
              </div> */}
            </form>
          </div>
        </div>
        <div className="general-settings shop-settings">
          <h3>Shop Settings</h3>

          <div className="general-form">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div>
                <label htmlFor="">Change Shop Name</label>
                <br />
                <input
                  type="text"
                  name=""
                  placeholder="Enter New Name"
                  {...register("parcelName")}
                  required
                />

                <button type="">Change Request</button>
              </div>
              <br />
              <div>
                <label htmlFor="">Change Shop Phone Number</label>
                <br />
                <input
                  type="number"
                  name=""
                  placeholder="Enter Phone Number"
                  {...register("parcelQty")}
                  required
                />
                <button type="">Change Request</button>
              </div>
              <br />

              <div className="generalImgInput">
                <label htmlFor="">Change Shop Photo</label>
                <br />
                <span>
                  <i className="bi bi-image"></i>
                  <small>Upload Image</small>
                  <input type="file" name="" />
                </span>
                <div className="uploadedImgShow">
                  <img src={imageUrl} alt="" />
                </div>
                <p>{imageUrl} </p>
                <button type="">Change Request</button>
              </div>
              {/* <div className="percelService-btns">
                <button type="submit">Submit</button>
              </div> */}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
