import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import "./CartDetails.scss";
import imagetest from "../assets/casein.jpg";
import { BsCart3 } from "react-icons/bs";

const CartDetails = () => {
  const [product, setProduct] = useState({});
  let { productID } = useParams();
  useEffect(() => {
    getById();
  }, []);

  const getById = async () => {
    try {
      const { data } = await axios.get(`https://triplea.onrender.com/products/${productID}`);
      setProduct(data);
    } catch (error) {
      console.log(error);
    }
  };
return (
  <>
    {/* Main item container */}
    <main className="item">
      <section className="img">
        <img className="image-test" src={product.image} alt={product.name} />
      </section>

      <section className="price">
        <h1 className="price-main__heading">{product.name}</h1>
        <p className="price-txt">{product.description}</p>
        <p className="size-txt">Size: {product.size}</p>
        <div className="price-box">
          <div className="price-box__main">
            <span className="price-box__main-new">{product.price}</span>
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
}
export default CartDetails;
