import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {  useNavigate } from "react-router-dom";
import axios from "axios";
import "./CartDetails.scss";
import { BsCart3 } from "react-icons/bs";
import secureLocalStorage from "react-secure-storage";
//TOAST
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useLocation } from "react-router-dom";

const CartDetails = () => {
  const [product, setProduct] = useState({});
  let { productID } = useParams();

  const location = useLocation();
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [name, setName] = useState("");
  const [price, setprice] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [isProductDisabled, setIsProductDisabled] = useState(false);
  const [cart, setCart] = useState([]);
  const [message, setMessage] = useState("");

  const successToast = () => {
    toast.success("Product added to Cart", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };
  const failToast = () => {
    toast.error("Please Login First!", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  // function handleBuyClick() {
    
  //   const token = secureLocalStorage.getItem("token");

  //   if (!token) {
  //     navigate("/register");
   
  //   }

  // }
  useEffect(() => {
    getById();
  }, []);

  const getById = async () => {
    try {
      const { data } = await axios.get(
        `https://triplea.onrender.com/products/${productID}`,
      );
      setProduct(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  //////////////////////////////////ADD TO CART/////////////////////
  const addToCart = (event, product) => {
    event.preventDefault(); 
    const token = secureLocalStorage.getItem("token");

    if (!token) {
      failToast();

      navigate('/register', { 
        state: {
          previousUrl: location.pathname,
        }
      });
      return;
    }
    successToast(); 

    const cartItem = {
      product_id: product._id,
      image: product.image,
      name: product.name,
      size: product.size,
      price: product.price,
      quantity: quantity, // Set the initial quantity to 1
    };

    let existingCartItems = JSON.parse(localStorage.getItem("cart")) || [];
    let cartItemExists = false;

    existingCartItems = existingCartItems.map((item) => {
      if (
        item.product_id === cartItem.product_id &&
        item.image === cartItem.image &&
        item.name === cartItem.name &&
        item.size === cartItem.size &&
        item.price === cartItem.price
      ) {
        cartItemExists = true;
        return {
          ...item,
          quantity: item.quantity +  cartItem.quantity, // Increment the quantity by 1
        };
      }
      return item;
    });

    if (!cartItemExists) {
      existingCartItems.push(cartItem);

    }

    localStorage.setItem("cart", JSON.stringify(existingCartItems));
    setMessage("Product added to cart!");
    setCart(existingCartItems);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };


  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  return (
    <>
      {/* Main item container */}
      <main className="item">
        <section className="img">
          {product && (
            <img
              className="image-test"
              src={product.image}
              alt={product.name}
            />
          )}
        </section>

        <section className="price">
          {product && <h1 className="price-main__heading">{product.name}</h1>}
          {product && <p className="price-txt">{product.description}</p>}
          {product && <p className="size-txt">Size: {product.size}</p>}
          <div className="price-box">
            <div className="price-box__main">
              {product && (
                <span className="price-box__main-new">{product.price}</span>
              )}
            </div>
          </div>

          <div className="price-btnbox">

            <div className="price-btns">
              <button 
                 onClick={handleDecrement}
              className="price-btn__add price-btn">-</button>
                <span className="price-btn__txt">{quantity}</span>
              <button 
                 onClick={handleIncrement}
              className="price-btn__remove price-btn">+</button>

            </div>
            <button
              onClick={(event) => addToCart(event, product)}
              className="price-cart__btn btn--orange"
            >
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
