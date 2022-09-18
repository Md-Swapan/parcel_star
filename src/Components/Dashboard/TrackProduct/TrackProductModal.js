import React from "react";
import Footer from "../../SharedComponents/Footer/Footer";
import Nav from "./../../SharedComponents/Nav/Nav";
import Modal from "react-modal";
import "./TrackProduct.css";
import { Link } from 'react-router-dom';

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
    paddingTop: "30px",
    width: "1000px",
    zIndex: "10000000",
  },
};

const TrackProductModal = () => {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div className="trackProductShowDetail-section">
      {/* <Nav /> */}
      <main className="trackProduct-modal-content">
        <div>
        <h2>SHOW YOUR PARCEL TRACKING DETAILS</h2>
        <button className="glow-on-hover" onClick={openModal} type="">
          Show
        </button>
        </div>
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
              textAlign: "end",
              margin: "auto",
              cursor: "pointer",
              fontSize: "25px",
              color: "#a11e00",
            }}
          >
            <Link to='/' style={{color: "#fa4319"}}>
              <i class="bi bi-x-circle"></i>
            </Link>
          </div>
          <div className="tracking-content">
            <h1>Your Product is On The Way To Delivery</h1>

            <div className="trackingContents">
              
              <p>Product Name : Eye Frame</p>
              <p>Parcel Qty : 5</p>
              <p>Pickup Area : Dhaka</p>
              <p>Delivery Area : Rajshahi</p>
              <p>Delivery Man Name : Tarek</p>
              <p>Delivery Man Number : 012435678957</p>
            </div>
            <h2>Estimated Time To Delivery Your Product : 25 Min.</h2>
          </div>
        </Modal>
      </main>
      {/* <Footer /> */}
    </div>
  );
};

export default TrackProductModal;
