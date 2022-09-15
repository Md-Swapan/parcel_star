import React from "react";
import Footer from "../../SharedComponents/Footer/Footer";
import Nav from "./../../SharedComponents/Nav/Nav";
import Modal from "react-modal";

const customStyles = {
  content: {
    borderRadius: "5px",
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
    <div>
      <Nav />
      <main className="trackProduct-modal-content">
        <h2>Show Your Parcel Tracking Details</h2>
        <button className="glow-on-hover" onClick={openModal} type="">
          Show
        </button>
        <Modal
          ariaHideApp={false}
          isOpen={modalIsOpen}
          // onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <div className="tracking-content">
            <h1>Your Product is On The Way To delivery</h1>

            <div>
              <p>Delivery Man Name: </p>
              <p>Delivery Man Number: </p>

              <p>Product Name:</p>
              <p>Parcel Qty: </p>
              <p>Pickup Area</p>
              <p>Delivery Area</p>
            </div>
          </div>
        </Modal>
      </main>
      <Footer />
    </div>
  );
};

export default TrackProductModal;
