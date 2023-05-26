import React, { useEffect, useRef } from "react";
import "./Card.css";
import image1 from "../assets/casein.jpg";
import image from "../assets/download.jpeg";

function Card() {
  const productRefs = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      const windowBottom = window.scrollY + window.innerHeight;
      productRefs.current.forEach((productRef) => {
        if (productRef) {
          const objectBottom = productRef.offsetTop + productRef.offsetHeight;

          if (objectBottom < windowBottom) {
            if (!productRef.classList.contains("fade-in")) {
              productRef.classList.add("fade-in");
            }
          } else {
            if (productRef.classList.contains("fade-in")) {
              productRef.classList.remove("fade-in");
            }
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Trigger initial check

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="parent-card">
        <figure
          ref={(el) => (productRefs.current[0] = el)}
          className="product-card fade"
        >
          <img src={image1} alt="Face mask" className="product-cardimage" />

          <div class="product-cardcaption">
            <header class="product-cardheader">
              <h2 class="product-cardtitle">Face mask</h2>
              <p className="card-price">100$</p>
            </header>
            <div className="card-btn">
              <button className="details-btn">more details</button>
              <button className="add-cart-btn">Add to cart</button>
            </div>
          </div>
        </figure>

        <figure
          ref={(el) => (productRefs.current[1] = el)}
          className="product-card fade"
        >
          <img src={image1} alt="Face mask" className="product-cardimage" />

          <div class="product-cardcaption">
            <header class="product-cardheader">
              <h2 class="product-cardtitle">Face mask</h2>
              <p className="card-price">100$</p>
            </header>
            <div className="card-btn">
              <button className="details-btn">more details</button>
              <button className="add-cart-btn">Add to cart</button>
            </div>
          </div>
        </figure>



        <figure
          ref={(el) => (productRefs.current[2] = el)}
          className="product-card fade"
        >
          <img src={image1} alt="Face mask" className="product-cardimage" />

          <div class="product-cardcaption">
            <header class="product-cardheader">
              <h2 class="product-cardtitle">Face mask</h2>
              <p className="card-price">100$</p>
            </header>
            <div className="card-btn">
              <button className="details-btn">more details</button>
              <button className="add-cart-btn">Add to cart</button>
            </div>
          </div>
        </figure>



        <figure
          ref={(el) => (productRefs.current[3] = el)}
          className="product-card fade"
        >
          <img src={image1} alt="Face mask" className="product-cardimage" />

          <div class="product-cardcaption">
            <header class="product-cardheader">
              <h2 class="product-cardtitle">Face mask</h2>
              <p className="card-price">100$</p>
            </header>
            <div className="card-btn">
              <button className="details-btn">more details</button>
              <button className="add-cart-btn">Add to cart</button>
            </div>
          </div>
        </figure>



        <figure
          ref={(el) => (productRefs.current[4] = el)}
          className="product-card fade"
        >
          <img src={image1} alt="Face mask" className="product-cardimage" />

          <div class="product-cardcaption">
            <header class="product-cardheader">
              <h2 class="product-cardtitle">Face mask</h2>
              <p className="card-price">100$</p>
            </header>
            <div className="card-btn">
              <button className="details-btn">more details</button>
              <button className="add-cart-btn">Add to cart</button>
            </div>
          </div>
        </figure>



        <figure
          ref={(el) => (productRefs.current[5] = el)}
          className="product-card fade"
        >
          <img src={image1} alt="Face mask" className="product-cardimage" />

          <div class="product-cardcaption">
            <header class="product-cardheader">
              <h2 class="product-cardtitle">Face mask</h2>
              <p className="card-price">100$</p>
            </header>
            <div className="card-btn">
              <button className="details-btn">more details</button>
              <button className="add-cart-btn">Add to cart</button>
            </div>
          </div>
        </figure>



        <figure
          ref={(el) => (productRefs.current[6] = el)}
          className="product-card fade"
        >
          <img src={image1} alt="Face mask" className="product-cardimage" />

          <div class="product-cardcaption">
            <header class="product-cardheader">
              <h2 class="product-cardtitle">Face mask</h2>
              <p className="card-price">100$</p>
            </header>
            <div className="card-btn">
              <button className="details-btn">more details</button>
              <button className="add-cart-btn">Add to cart</button>
            </div>
          </div>
        </figure>



        <figure
          ref={(el) => (productRefs.current[7] = el)}
          className="product-card fade"
        >
          <img src={image1} alt="Face mask" className="product-cardimage" />

          <div class="product-cardcaption">
            <header class="product-cardheader">
              <h2 class="product-cardtitle">Face mask</h2>
              <p className="card-price">100$</p>
            </header>
            <div className="card-btn">
              <button className="details-btn">more details</button>
              <button className="add-cart-btn">Add to cart</button>
            </div>
          </div>
        </figure>



        <figure
          ref={(el) => (productRefs.current[8] = el)}
          className="product-card fade"
        >
          <img src={image1} alt="Face mask" className="product-cardimage" />

          <div class="product-cardcaption">
            <header class="product-cardheader">
              <h2 class="product-cardtitle">Face mask</h2>
              <p className="card-price">100$</p>
            </header>
            <div className="card-btn">
              <button className="details-btn">more details</button>
              <button className="add-cart-btn">Add to cart</button>
            </div>
          </div>
        </figure>


        <figure
          ref={(el) => (productRefs.current[9] = el)}
          className="product-card fade"
        >
          <img src={image1} alt="Face mask" className="product-cardimage" />

          <div class="product-cardcaption">
            <header class="product-cardheader">
              <h2 class="product-cardtitle">Face mask</h2>
              <p className="card-price">100$</p>
            </header>
            <div className="card-btn">
              <button className="details-btn">more details</button>
              <button className="add-cart-btn">Add to cart</button>
            </div>
          </div>
        </figure>





       
      </div>
    </>
  );
}

export default Card;
