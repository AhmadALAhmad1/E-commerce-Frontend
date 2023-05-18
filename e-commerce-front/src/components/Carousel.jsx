import React from "react";
import "./Carousel.scss";
import image1 from "../assets/wheyBlack.jpg";
import image2 from "../assets/blueprotein.jpg";
import image3 from "../assets/redprotein.jpg";
import image4 from "../assets/plantprotein.jpg";
import image5 from "../assets/casein.jpg";
function Carousel() {
  return (
    <>
      <div className="slider">
        <div className="slide-track">
          <div className="slide" >
            <div className="circle" >
              <img  src={image1} />
            </div>
            <div className="content-circle">
              <h3>Title 1</h3>
              <p>price</p>
            </div>
          </div>
          <div className="slide">
            <div className="circle">
              <img className="image2" src={image2} />
            </div>
            <div className="content-circle">
              <h3>Title 1</h3>
              <p>price</p>
            </div>
          </div>
          <div className="slide">
            <div className="circle">
              <img className="image3" src={image3} />
            </div>
            <div className="content-circle">
              <h3>Title 1</h3>
              <p>price</p>
            </div>
          </div>

          <div className="slide">
            <div className="circle">
              <img className="image4" src={image4} />
            </div>
            <div className="content-circle">
              <h3>Title 1</h3>
              <p>price</p>
            </div>
          </div>

          <div className="slide">
            <div className="circle">
              <img src={image5} />
            </div>
            <div className="content-circle">
              <h3>Title 1</h3>
              <p>price</p>
            </div>
          </div>

          <div className="slide">
            <div className="circle">
              <img className="image1" src={image1} />
            </div>
            <div className="content-circle">
              <h3>Title 1</h3>
              <p>price</p>
            </div>
          </div>
          <div className="slide">
            <div className="circle">
              <img className="image3" src={image3} />
            </div>
            <div className="content-circle">
              <h3>Title 1</h3>
              <p>price</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Carousel;
