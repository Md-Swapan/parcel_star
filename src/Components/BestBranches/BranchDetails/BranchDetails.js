import React from "react";
import "./BranchDetails.css";
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
    boxShadow: "0 0 0 500vmax rgb(0 0 0 / 0.3)",
    padding: "40px",
    paddingTop: "15px",
    width: '700px'
  },
};

const BranchDetails = (props) => {
  const { division, branch, locations, employees, designation } = props.branch;

  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <div className="branchDetails-container">
        <h2>
          Division: <span>{division}</span>
        </h2>
        <div className="branchDetails-content1">
          <h4>{branch.branch1}</h4>
          <span>
            <i className="bi bi-geo-alt"></i> {locations.Location1}
          </span>
          <button type="" onClick={openModal}>
            See More{" "}
          </button>
        </div>
        <div className="branchDetails-content2">
          <h4>{branch.branch1}</h4>
          <span>
            <i className="bi bi-geo-alt"></i> {locations.Location1}
          </span>
          <button type="" onClick={openModal}>
            See More{" "}
          </button>
        </div>
        <div className="branchDetails-content3">
          <h4>{branch.branch1}</h4>
          <span>
            <i className="bi bi-geo-alt"></i> {locations.Location1}
          </span>
          <button type="" onClick={openModal}>
            See More{" "}
          </button>
        </div>
        <div className="branchDetails-content4">
          <h4>{branch.branch1}</h4>
          <span>
            <i className="bi bi-geo-alt"></i> {locations.Location1}
          </span>
          <button type="" onClick={openModal}>
            See More{" "}
          </button>
        </div>
        <div className="branchDetails-content5">
          <h4>{branch.branch1}</h4>
          <span>
            <i className="bi bi-geo-alt"></i> {locations.Location1}
          </span>
          <button type="" onClick={openModal}>
            See More{" "}
          </button>
        </div>
        <div className="branchDetails-content6">
          <h4>{branch.branch1}</h4>
          <span>
            {" "}
            <i className="bi bi-geo-alt"></i> {locations.Location1}
          </span>
          <button type="" onClick={openModal}>
            See More{" "}
          </button>
        </div>
      </div>

      <Modal
        ariaHideApp={false}
        isOpen={modalIsOpen}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div style={{ textAlign: "end", margin: "auto", cursor: "pointer", fontSize: "25px", color: "#a11e00" }}>
          <span onClick={closeModal}><i class="bi bi-x-circle"></i></span>
        </div>
        <div className="modalContainer">
          <h2><span>Branch:</span> {branch.branch1}</h2>
          <div className="employeeDetailContainer">
            <div className="branch-content">
              <div className="branch-content-header">
                <h3>Employees</h3>
              </div>
              <div className="nameDesignation1">
                <div>
                  <p>{employees.name1}</p>
                </div>
                <div>
                  <p>{designation.desig1}</p>
                </div>
              </div>
              <div className="nameDesignation2">
                <div>
                  <p>{employees.name2}</p>
                </div>
                <div>
                  <p>{designation.desig2}</p>
                </div>
              </div>
              <div className="nameDesignation3">
                <div>
                  <p>{employees.name3}</p>
                </div>
                <div>
                  <p>{designation.desig3}</p>
                </div>
              </div>
              <div className="nameDesignation4">
                <div>
                  <p>{employees.name4}</p>
                </div>
                <div>
                  <p>{designation.desig4}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default BranchDetails;
