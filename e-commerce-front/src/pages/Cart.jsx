import { MdDeleteForever } from "react-icons/md";
import React, { useState, useEffect } from "react";
import "./Cart.scss";
import axios from "axios";
import { AiFillDelete } from "react-icons/ai";
import { BsCart } from "react-icons/bs";
import { FaCheckCircle } from "react-icons/fa";
import secureLocalStorage from "react-secure-storage";
import { useNavigate,useLocation} from "react-router-dom";

const Cart = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitted, setISSubmitted] = useState(false);
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || [],
  );

  const navigate = useNavigate();
  const location = useLocation();

  const HandleSubmitOrder = () => {
    navigate("/checkout");
  };

  const handleSubmitOrder = async () => {
    setIsLoading(true);
    setErrorMessage("");
    const token = secureLocalStorage.getItem("token");
    if (!token) {
      window.location.href = "/register";
    }
  };

  //   try {
  //     const response = await axios.post(
  //       "https://triplea.onrender.com/orders",
  //       {
  //         cart,
  //       },
  //       {
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //         },
  //       }
  //     );
  //     setISSubmitted(true);
  //     localStorage.removeItem("cart");
  //     setCart([]);
  //   } catch (error) {
  //     console.error(error.response.data.error);
  //     setErrorMessage(error.response.data.error);
  //   } finally {
  //     setIsLoading(false);
  //   }
  //};

  function handleBuyClick() {
    navigate('/register', { 
      state: {
        previousUrl: location.pathname,
      }
    });
  }

  const handleDelete = (id) => {
    setCart((cart) => cart.filter((i) => i.product_id !== id));

    localStorage.setItem("cart", JSON.stringify(cart));
  };

  const updateQuantity = (itemId, newQuantity) => {
    const updatedCart = cart.map((item) => {
      if (item.product_id === itemId) {
        return {
          ...item,
          quantity: newQuantity < 0 ? 0 : newQuantity,
        };
      }
      return item;
    });
    setCart(updatedCart);
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <div>
      {!secureLocalStorage.getItem("token") ? (
        <div className="login-first-container">
          <h1 className="check-h1">Please Login In First !</h1>
          <button className="check-login" onClick={() => handleBuyClick()}>
            Click Here to Login
          </button>
        </div>


      ) : (
        <div>
          <h1 className="shopping-cart">Shopping Cart</h1>
          <div className="cart-table-view">
            <div className="table-cart">
              <table className="cart-table-parent">
                <thead>
                  <tr>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Size</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {cart.length === 0 ? (
                    <tr>
                      <td colSpan="7">Your cart is empty.</td>
                    </tr>
                  ) : (
                    <>
                      {cart.map((item) => (
                        <tr key={item.product_id}>
                          <td>
                            <img
                              src={item.image}
                              alt={item.name}
                              className="cart-image"
                            />
                          </td>
                          <td>{item.name}</td>
                          <td>{item.size}</td>
                          <td>
                            <button
                              className="increment-btn-cart"
                              onClick={() =>
                                updateQuantity(
                                  item.product_id,
                                  +item.quantity - 1,
                                )
                              }
                            >
                              -
                            </button>
                            {item.quantity}

                            <button
                              className="increment-btn-cart"
                              onClick={() =>
                                updateQuantity(
                                  item.product_id,
                                  +item.quantity + 1,
                                )
                              }
                            >
                              +
                            </button>
                          </td>
                          <td>{item.price}</td>
                          <td>
                            <AiFillDelete
                              className="delete-icon-row"
                              onClick={() => handleDelete(item.product_id)}
                            />
                          </td>
                        </tr>
                      ))}
                    </>
                  )}
                </tbody>
              </table>

              <div className="cart-item-responsive">
                {cart.length === 0 ? (
                  <tr>
                    <td colSpan="7">Your cart is empty.</td>
                  </tr>
                ) : (
                  <>
                    {cart.map((item) => (
                      <div key={item.product_id} className="cart-items-rspnv">
                        <div className="list-rspnv delete-icon">
                          <AiFillDelete
                            className="delete-icon-row"
                            onClick={() => handleDelete(item.product_id)}
                          />
                        </div>
                        <div className="cart-image-rspnv-div">
                          {" "}
                          <img
                            src={item.image}
                            alt={item.name}
                            className="cart-image-rspnv"
                          />
                        </div>
                        <div className="list-rspnv">
                          <div>Product: </div>
                          <div> {item.name}</div>
                        </div>
                        {/* <div className='list-rspnv'>
                      <div>Color: </div>
                      <div>{item.color}</div>
                    </div>*/}
                        <div className="list-rspnv">
                          <div>Size: </div>
                          <div>{item.size}</div>
                        </div>

                        <div className="list-rspnv">
                          <div>Quantity: </div>
                          <div className="increment-div-rspnsv">
                            <button
                              className="increment-btn-cart"
                              onClick={() =>
                                updateQuantity(
                                  item.product_id,
                                  +item.quantity + 1,
                                )
                              }
                            >
                              +
                            </button>
                            {item.quantity}
                            <button
                              className="increment-btn-cart"
                              onClick={() =>
                                updateQuantity(
                                  item.product_id,
                                  +item.quantity - 1,
                                )
                              }
                            >
                              -
                            </button>
                          </div>
                        </div>
                        <div className="list-rspnv">
                          <div>
                            <div>Price:</div>
                          </div>

                          <div>
                            <div>{item.price}</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </>
                )}
              </div>
            </div>
            {isSubmitted ? (
              <div className="success-message">
                {" "}
                <FaCheckCircle className="success" /> Order submitted
                successfully!
              </div>
            ) : (
              <div className="cart-discription">
                <h3 className="cart-description-title">
                  {" "}
                  <BsCart className="cart-icon-cart" /> Cart Description
                </h3>
                <div className="order-details">
                  <div>
                    <p className="order-detail-title">Order details:</p>
                    <ul className="cart-list">
                      {cart.map((item) => (
                        <li key={item.product_id}>
                          <p className="cart-item-quantity">{item.quantity} </p>{" "}
                          {item.name} / price : {item.price} / size :{" "}
                          {item.size}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>Created At: {new Date().toLocaleString()}</div>
                  <div className="cart-total-price">
                    Total Price :{" "}
                    {cart.reduce(
                      (total, item) => total + item.price * item.quantity,
                      0,
                    )}{" "}
                    $
                  </div>
                </div>
                <div className="submit-cart">
                  <button
                    onClick={HandleSubmitOrder}
                    // onClick={handleSubmitOrder}
                    className="submit-order"
                    disabled={isLoading}
                  >
                    {isLoading ? "Submitting..." : "Proceed to Checkout"}
                  </button>
                  {errorMessage && (
                    <div className="error-message">{errorMessage}</div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
