import React from "react";
import "./Orders.css";
import { AiFillDelete } from "react-icons/ai";
import Swal from "sweetalert2";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    getAllOrders();
  }, []);

  // GET ALL
  const getAllOrders = async () => {
    try {
      const { data } = await axios.get("https://triplea.onrender.com/order/");
      setOrders(data);
      console.log("data", data);
    } catch (error) {
      console.log(error);
    }
  };

  // DELETE
  const deleteOrder = async (order) => {
    try {
      const result = await Swal.fire({
        title: `Are you sure to delete ${order?.AddressID?.name}?`,
        showCancelButton: true,
      });

      if (result.isConfirmed) {
        await axios.delete(`https://triplea.onrender.com/order/${order._id}`);
        getAllOrders(); // when finished deleting, call products again to refresh
      }
    } catch (error) {
      console.log(error);
      console.log(order._id);
    }
  };

  return (
    <div className="products-dash-table">
      <div className="content read">
        <div className="btn-go-back">
          <Link to={"/dashboard"}>
            <button>Back</button>
          </Link>
        </div>
        <h1>Orders</h1>
        <div className="table-responsive">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Address</th>
                <th>Quantity</th>
                <th>Size</th>
                <th>Total</th>
                <th>Item Name</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {orders &&
                orders.map((order, key) => {
                  return order.cart.map((item, index) => (
                    <tr key={`${order._id}-${index}`}>
                      <td>{key + 1}</td>
                      <td>{order?.AddressID?.name}</td>
                      <td>{order?.AddressID?.email}</td>
                      <td>{order?.AddressID?.phone}</td>
                      <td>
                        <br />
                        <b>City:</b>
                        {order?.AddressID?.city}
                        <br />
                        <br />
                        <b>Street:</b>
                        {order?.AddressID?.street}
                        <br />
                        <b>Building:</b>
                        {order?.AddressID?.building}
                        <br />
                      </td>
                      <td>{item.quantity}</td>
                      <td>{item.size}</td>
                      <td>{order.total}</td>
                      <td>{item.name}</td>
                      <td>
                        <button
                          className="delete-btn"
                          onClick={() => {
                            deleteOrder(order);
                          }}
                        >
                          <AiFillDelete />
                        </button>
                        <div>
                          <label htmlFor="status">Status:</label>
                          <select id="status">
                            <option>Pending</option>
                            <option>Delivered</option>
                          </select>
                        </div>
                      </td>
                    </tr>
                  ));
                })}
            </tbody>
          </table>
        </div>
        <div className="pagination"></div>
      </div>
    </div>
  );
};

export default Orders;
