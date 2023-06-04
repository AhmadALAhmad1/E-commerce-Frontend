import React, { useState, useEffect } from "react";
import axios from "axios";
import secureLocalStorage from "react-secure-storage";
import { useNavigate, useLocation } from "react-router-dom";
import "./Profile.scss";
import Loader from "../components/Loader";

const Profile = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  const location = useLocation();
  const navigate = useNavigate();

  const token = secureLocalStorage.getItem("token");

  useEffect(() => {
    if (token) {
      const tokenPayload = token.split(".")[1];
      const decodedPayload = JSON.parse(atob(tokenPayload));
      const userID = decodedPayload.id;

      const fetchOrders = async () => {
        try {
          const { data } = await axios.get(
            `https://triplea.onrender.com/order/`,
          );
          const userOrders = data.filter(
            (order) => order.UserID._id === userID,
          );
          setOrders(userOrders);
        } catch (error) {
          console.log(error);
        } finally {
          setLoading(false);
        }
      };

      fetchOrders();
    } else {
      setLoading(false);
    }
  }, [token]);

  if (loading) {
    return <Loader />;
  }

  return (
    <div>
      {!token ? (
        <div className="login-first-container">
          <h1 className="check-h1">Please Login In First!</h1>
          <button
            className="check-login"
            onClick={() =>
              navigate("/register", {
                state: {
                  previousUrl: location.pathname,
                },
              })
            }
          >
            Click Here to Login
          </button>
        </div>
      ) : (
        <div className="parent-table-profile">
          <h1 className="profile-title">Your Orders</h1>
          <div className="profile-container">
            {orders.map((order) =>
              order.cart.map((cartItem, index) => (
                <table className="profile-table" key={`${order._id}-${index}`}>
                  <thead>
                    <tr>
                      <th scope="col">Product</th>
                      <th scope="col">Size</th>
                      <th scope="col">Quantity</th>
                      <th scope="col">Price</th>
                      <th scope="col">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="td-title-profile" data-label="Product">
                        {cartItem.name}
                      </td>
                      <td data-label="Size">{cartItem.size}</td>
                      <td data-label="Quantity">{cartItem.quantity}</td>
                      <td data-label="Price">{cartItem.price}</td>
                      <td data-label="Total">{order.total}</td>
                    </tr>
                  </tbody>
                </table>
              )),
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
