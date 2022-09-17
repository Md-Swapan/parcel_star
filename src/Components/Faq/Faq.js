import React from "react";
import { Link } from "react-router-dom";
import "./Faq.css";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useState } from "react";

const Faq = () => {
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
    <>
      <div className="faq-section">
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
          <h3>FAQ</h3>
        </div>
        <div className="settings-content">
          <div className="general-settings">
            {/* <h3>General Settings</h3> */}
            <div className="general-form"></div>
          </div>
          <div className="general-settings shop-settings">
            <h3>Ask Question?</h3>

            <div className="general-form">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="d-flex">
                  <div className="m-2">
                    <label htmlFor="">Your Name</label>
                    <br />
                    <input
                      type="text"
                      name=""
                      placeholder="Enter New Name"
                      {...register("parcelName")}
                      required
                    />
                  </div>
                  <div className="m-2">
                    <label htmlFor="">Your Phone Number</label>
                    <br />
                    <input
                      type="number"
                      name=""
                      placeholder="Enter Phone Number"
                      {...register("parcelQty")}
                      required
                    />
                  </div>
                </div>

                <div className="ask-textarea m-2">
                  <label htmlFor="">Ask Your Question</label>
                  <br />
                  <textarea placeholder="Text Here...." />
                </div>
                {/* <div className="percelService-btns">
                <button type="submit">Submit</button>
              </div> */}
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Faq;
