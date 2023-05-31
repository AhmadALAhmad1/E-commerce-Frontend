import React, { useState, useEffect } from "react";
import secureLocalStorage from "react-secure-storage";
import "./Checkout.scss";
import axios from "axios";



const Checkout = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );
  const [address, setAddress] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
    street: "",
    building: ""
  });

  const calculateTotal = () => {
    let total = 0;
    for (const item of cart) {
      total += item.price * item.quantity;
    }
    return total;
  };

  const handleSubmitOrder = async () => {
    setIsLoading(true);
    setErrorMessage("");
    const token = secureLocalStorage.getItem("token");
    if (!token) {
      window.location.href = "/";
    }
  
  //////////to get token//////////
    try {
      const token = secureLocalStorage.getItem("token");
      if (!token) {
        // Handle the case where the token is not found
        return;
      }
      // console.log("Token:", token);
      const tokenPayload = token.split(".")[1]; // Get the payload part of the token
      // console.log("Token Payload:", tokenPayload);
      const decodedPayload = JSON.parse(atob(tokenPayload));
      // console.log("Decoded Payload:", decodedPayload);
      const userId = decodedPayload.id;
console.log("userrrr",userId)
const role = secureLocalStorage.getItem("role");
console.log("role", role)
/////////////////////////////////////////////////////
      const addressData = {
        name: address.firstName,
        phone: address.phone,
        email: address.email,
        city: address.city,
        street: address.streetAddress,
        building: address.building,
      };
  
      const response = await axios.post(
        "http://localhost:5000/address/createAddress",
        addressData,
        
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
        
      );
      console.log(response.data.address._id)

  
      const orderData = {
        UserID: decodedPayload.id,
        AddressID: response.data.address._id,
        
        cart: cart.map((item) => ({
          name: item.name,
          price: item.price,
          quantity: item.quantity,
          size: item.size,
          product_id: item.product_id,
          total: item.total,

        })),
        total: calculateTotal(), // Calculate the total amount based on cart items
      };
  
      await axios.post("http://localhost:5000/order/create", orderData,addressData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
  
      localStorage.removeItem("cart");
      setCart([]);
      setIsSubmitted(true);
    } catch (error) {
      console.log(error);
      setErrorMessage("Failed to create the order.");
    } finally {
      setIsLoading(false);
    }
  };
  
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);
 





  return (
    <>
<div className="container-checkout">
        <div className="title-checkout">
          <h2 className="checkout-h1">Product Order Form</h2>
        </div>
        <div className="d-flex">
          <form className="form-checkout" action="" method="">
            <label>
              <span>
                First Name <span className="required">*</span>
              </span>
              <input
                type="text"
                name="fname"
                value={address.firstName}
                onChange={(e) =>
                  setAddress({ ...address, firstName: e.target.value })
                }
              />
            </label>

            <label>
              <span>
                Email Address <span className="required">*</span>
              </span>
              <input
                type="email"
                name="email"
                value={address.email}
                onChange={(e) =>
                  setAddress({ ...address, email: e.target.value })
                }
              />
            </label>

            <label>
              <span>
                Phone <span className="required">*</span>
              </span>
              <input
                type="tel"
                name="phone"
                value={address.phone}
                onChange={(e) =>
                  setAddress({ ...address, phone: e.target.value })
                }
              />
            </label>

            <label>
              <span>
                Town / City <span className="required">*</span>
              </span>
              <input
                type="text"
                name="city"
                value={address.city}
                onChange={(e) =>
                  setAddress({ ...address, city: e.target.value })
                }
              />
            </label>

            <label>
              <span>
                Street Address <span className="required">*</span>
              </span>
              <input
                type="text"
                name="houseadd"
                placeholder="House number and street name"
                required
                value={address.streetAddress}
                onChange={(e) =>
                  setAddress({ ...address, streetAddress: e.target.value })
                }
              />
            </label>

            <label>
              <span>
                Building <span className="required">*</span>
              </span>
              <input
                type="text"
                name="building"
                placeholder="country name"
                required
                value={address.building}
                onChange={(e) =>
                  setAddress({ ...address, building: e.target.value })
                }
              />
            </label>
         

            
       
          </form>
          <div className="Yorder">
            <table className="checkout-table">
              <tr>
                <th colSpan="2">Your order</th>
              </tr>
              <tr>
                <td>Product Name x 2(Qty)</td>
                <td>$88.00</td>
              </tr>
              <tr>
                <td>Subtotal</td>
                <td>$88.00</td>
              </tr>
              <tr>
                <td>Shipping</td>
                <td>Free shipping</td>
              </tr>
              <tr>
                <td className="total-td">Total</td>
                <td>$88.00</td>
              </tr>
            </table>
            <br />

            <div>
              <input type="radio" name="dbt" value="cd" /> Cash on Delivery
            </div>
            <button
              onClick={handleSubmitOrder}
              className="btn-checkout"
              type="button"
            >
              Place Order
            </button>
          </div>
          {/* Yorder */}
        </div>
      </div>
    </>
  );
};

export default Checkout;
