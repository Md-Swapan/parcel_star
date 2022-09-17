import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./CreateShopForm.css";
import axios from "axios";
import { useForm } from "react-hook-form";
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
    paddingTop: "15px",
    width: "%",
  },
};

const CreateShopForm = () => {
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
    console.log(data);
    const productData = {
      name: data.name,
      email: data.email,
      number: data.number,
      Website: data.Website,
      address: data.address,
      licenseKey: data.licenseKey,
      category: data.category,
      imageUrlOne: imageUrl,
    };
    console.log(productData);
    axios.post("http://localhost:4050/AddShop", productData).then((res) => {
      openModal();
    });
  };

  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className="createShop-form-container">
      <h2>Create New Shop</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="">Shop Name</label>
          <br />
          <input
            type="text"
            name=""
            placeholder="Enter Shop Name"
            {...register("name")}
            required
          />
          <br />
          <br />
          <label htmlFor="">Shop Email</label>
          <br />
          <input
            type="text"
            name=""
            placeholder="Enter Shop Email"
            {...register("email")}
            required
          />
          <br />
          <br />
          <label htmlFor="">Shop Phone Number</label>
          <br />
          <input
            type="number"
            name=""
            placeholder="Enter Shop Phone Number"
            {...register("number")}
            required
          />
          <br />
          <br />
          <label htmlFor="">Shop Website Link</label>
          <br />
          <input
            type="text"
            name=""
            placeholder="Enter Shop Website Link"
            {...register("Website")}
          />
        </div>
        <div>
          <label htmlFor="">Shop Address</label>
          <br />
          <input
            type="text"
            name=""
            placeholder="Enter Shop Address"
            {...register("address")}
            required
          />
          <br />
          <br />
          <label htmlFor="">Shop license Key</label>
          <br />
          <input
            type="text"
            name=""
            placeholder="Enter Shop license Key"
            {...register("licenseKey")}
            required
          />
          <br />
          <br />
          <label htmlFor="">Business Category</label>
          <br />
          <select {...register("category")} required>
            <option value="none" selected disabled hidden>
              Select
            </option>
            <option value="Ecommerce">Ecommerce</option>
            <option value="multiEcommerce">multi ecommerce</option>
          </select>
        </div>

        <div className="shopImgInput">
          <label htmlFor="">Add Your Shop Logo</label>
          <br />
          <span>
          <i className="bi bi-image"></i>
            <small>Upload Image</small>
            <input onChange={handelImgUpload} type="file" name="" />
          </span>
          <br />
          <br />
          <div className="uploadedImgShow">
            <img src={imageUrl} alt=""/>
            
          </div>
          <p>
              {imageUrl}{" "}
              {/* <i
                style={{ fontSize: "20px", color: "#002a47" }}
                class="bi bi-check-lg"
              ></i> */}
            </p>
        </div>

        <div className="create-shop-btns">
          <Link to="/dashboard">
            <button type="">Cancel</button>
          </Link>
          <button type="submit">Submit</button>
        </div>
      </form>

      <Link to="/dashboard">
        <Modal
          ariaHideApp={false}
          isOpen={modalIsOpen}
          // onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <div
            style={{
              textAlign: "center",
              margin: "auto",
              cursor: "pointer",
              fontFamily: "Poppins",
              fontSize: "25px",
              color: "#002a47",
            }}
          >
            Shop Created successfully
            <br />
            <br />
            <Link to="/dashboard">
              <span style={{border: ".5px solid gray", padding: "10px", borderRadius: "10px", color: "gray"}} onClick={closeModal}>Done</span>
            </Link>
          </div>
        </Modal>
      </Link>
    </div>
  );
};

export default CreateShopForm;
