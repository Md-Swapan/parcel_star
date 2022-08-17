import React from "react";
import img1 from "../../../assets/carousel_img/New Project.jpg";
import img2 from "../../../assets/carousel_img/image.jpg";
import img3 from "../../../assets/carousel_img/semitruck-with-cargo-trailer-driving-highway-hauling-goods-evening-delivery-transportation-logistics-concept (1).jpg";
import img4 from "../../../assets/carousel_img/New Project (1) (1).jpg";
import img5 from "../../../assets/carousel_img/truck-with-container-logistic-running-road-background-natural-river-3d-illustrator.jpg";
import "./css/Carousel.css";

const Carousel = () => {
  return (
    <>
      <div className="carousel-container">
        <div
          id="carouselExampleCaptions"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="3"
              aria-label="Slide 4"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="4"
              aria-label="Slide 5"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={img1} className="d-block w-100" alt="cover" />
              <div className="carousel-caption d-none d-md-block">
                <div className="text-overlay">
                  <h1>
                    <span className="text-color">FAST, SAFE</span> AND <br />{" "}
                    RELIABLE <span className="text-color">DELIVERY</span>
                  </h1>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. <br /> Lorem Ipsum has been the
                    industry's standard dummy
                  </p>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img src={img2} className="d-block w-100" alt="cover" />
              <div className="carousel-caption d-none d-md-block">
                <h1>
                  <span className="text-color">WE TAKE CARE</span> OF <br />{" "}
                  YOUR <span className="text-color">PRODUCT</span>
                </h1>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. <br /> Lorem Ipsum has been the
                  industry's standard dummy
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <img src={img3} className="d-block w-100" alt="cover" />
              <div className="carousel-caption d-none d-md-block">
                <h1>
                  <span className="text-color">KEEP</span> YOUR <br /> PRODUCT{" "}
                  <span className="text-color">SAFE</span>
                </h1>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. <br />
                  Lorem Ipsum has been the industry's standard dummy
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <img src={img4} className="d-block w-100" alt="cover" />
              <div className="carousel-caption d-none d-md-block">
                <h1>
                  <span className="text-color">SAFE</span> DELIVERY
                </h1>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. <br />
                  Lorem Ipsum has been the industry's standard dummy
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <img src={img5} className="d-block w-100" alt="cover" />
              <div className="carousel-caption d-none d-md-block">
                <h1>
                  CUSTOMER <span className="text-color">SATISFACTION</span> IS{" "}
                  <br /> <span className="text-color">IMPORTANT</span> FOR US
                </h1>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. <br /> Lorem Ipsum has been the
                  industry's standard dummy
                </p>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Carousel;
