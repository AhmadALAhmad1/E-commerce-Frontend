import React from "react";
import "./CartDetails.scss";
import imagetest from "../assets/casein.jpg";
import { BsCart3 } from "react-icons/bs";

const CartDetails = () => {
  return (
    <>
      {/* Overlay image Modal */}
      <div className="overlay-container">
        <div className="item-overlay">
          <button className="item-overlay__btn">
            <img
              src="images/icon-close.svg"
              alt="close image"
              className="item-overlay__btn-img"
            />
          </button>
          <div className="item-overlay__mainImg">
            <img
              src="images/image-product-1.jpg"
              alt=""
              className="item-overlay__img"
            />
            <button className="item-overlay__btnlft overlay-btn">
              <img
                src="images/icon-next.svg"
                alt="next symbol image"
                className="item-overlay__btnlft-img overlay-btn__img"
              />
            </button>
            <button className="item-overlay__btnrgt overlay-btn">
              <img
                src="images/icon-next.svg"
                alt="next symbol image"
                className="item-overlay__btnrgt-img overlay-btn__img"
              />
            </button>
          </div>
          <div className="overlay-img__btns">
            <button className="overlay-img__btn" data-img="0">
              <img
                src="images/image-product-1-thumbnail.jpg"
                alt="shoe product image"
                className="overlay-img__btn-img"
              />
            </button>
            <button className="overlay-img__btn" data-img="1">
              <img
                src="images/image-product-2-thumbnail.jpg"
                alt="shoe product image"
                className="overlay-img__btn-img"
              />
            </button>
            <button className="overlay-img__btn" data-img="2">
              <img
                src="images/image-product-3-thumbnail.jpg"
                alt="shoe product image"
                className="overlay-img__btn-img"
              />
            </button>
            <button className="overlay-img__btn" data-img="3">
              <img
                src="images/image-product-4-thumbnail.jpg"
                alt="shoe product image"
                className="overlay-img__btn-img"
              />
            </button>
          </div>
        </div>
      </div>

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
            incidunt delectus! Quaerat quisquam numqualor  Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio eligendi sapiente impedit id suscipit nisi blanditiis alias, inventore possimus quae explicabo, laudantium quia, fugiat vitae culpa repellat. Atque, laboriosam autem. m ex voluptas molestias
            maiores aut suscipit aspernatur enim voluptatum nostrum dolorem
          </p>
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
