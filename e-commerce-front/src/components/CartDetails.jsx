import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import "./CartDetails.scss";
import imagetest from "../assets/casein.jpg";
import { BsCart3 } from "react-icons/bs";

const CartDetails = () => {
  let { productID } = useParams();

  const [product, setProduct] = useState({});

  useEffect(() => {
    getById();
  }, []);

  const getById = async () => {
    axios
      .get(`http://localhost:5000/products/${productID}`)
      .then((response) => {
        const product = response.data;
        setProduct(product);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>


      {/* Cart */}
      <div className="head-cart">
        <h3 className="head-cart__heading">Cart</h3>
        <div className="head-cart__txt">Your cart is empty.</div>
        <div className="head-cart__item">
          <div className="head-cart__item-wrapper">
            <img
              src="images/image-product-1-thumbnail.jpg"
              alt="cart product image"
              className="head-cart__item-img"
            />
            <div className="head-cart__des">
              <p className="head-cart__des-txt">
                Fall Limited Edition Sneakers
              </p>
              <div className="head-cart__price">
                <span className="head-cart__price-single">$125.00*3</span>
                <span className="head-cart__price-total">$375.00</span>
              </div>
            </div>
            <button className="head-cart__item-btn">
              <img
                src="images/icon-delete.svg"
                alt="delete image"
                className="head-cart__btn-img"
              />
            </button>
          </div>

          <button className="head-cart__btn btn--orange">Checkout</button>
        </div>
      </div>

      {/* Header */}

      {/* Main item container */}
      <main className="item">
        <section className="img">
          <img className="image-test" src={imagetest} />
        </section>

        <section className="price">
          <h1 className="price-main__heading">Fall Limited Edition Sneakers</h1>
          <p className="price-txt">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. A libero
            incipit aspernatur enim voluptatum nostrum dolorem
          </p>
          <p className="size-txt">Size: S</p>
          <div className="price-box">
            <div className="price-box__main">
              <span className="price-box__main-new">$125.00</span>
            </div>
          </div>

          <div className="price-btnbox">
            <div className="price-btns">
              <button className="price-btn__add price-btn">-</button>
              <span className="price-btn__txt">0</span>
              <button className="price-btn__remove price-btn">+</button>
            </div>
            <button className="price-cart__btn btn--orange">
              <BsCart3 />
              Add to cart
            </button>
          </div>
        </section>
      </main>
    </>
  );
};

export default CartDetails;
