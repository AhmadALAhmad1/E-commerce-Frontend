import React, { useState, useEffect } from "react";
import secureLocalStorage from "react-secure-storage";
import "./Checkout.scss";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
// TOAST
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Checkout = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || [],
  );
  const [address, setAddress] = useState({
    firstName: "",
    phone: "",
    email: "",
    city: "",
    streetAddress: "",
    building: "",
  });

  const navigate = useNavigate();

  const successToast = () => {
    toast.success("Order Submitted Successfully!", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const warnToast = () => {
    toast.warn("Your Cart is empty, Add some Products First!", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

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
      warnToast();
      navigate("/shop");
    }

    if (!validateForm()) {
      setIsLoading(false);
      return;
    }

    try {
      const token = secureLocalStorage.getItem("token");
      if (!token) {
        return;
      }

      const tokenPayload = token.split(".")[1];
      const decodedPayload = JSON.parse(atob(tokenPayload));
      const userId = decodedPayload.id;
      const role = secureLocalStorage.getItem("role");

      const addressData = {
        name: address.firstName,
        phone: address.phone,
        email: address.email,
        city: address.city,
        street: address.streetAddress,
        building: address.building,
      };

      const response = await axios.post(
        "https://triplea.onrender.com/address/createAddress",
        addressData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      // console.log(response.data.address._id);

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
        total: calculateTotal(),
      };

      await axios.post(
        "https://triplea.onrender.com/order/create",
        orderData,
        addressData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      localStorage.removeItem("cart");
      setCart([]);
      setIsSubmitted(true);
      Swal.fire({
        title: "Order Submitted Successfully!",
        icon: "success",
        showCancelButton: false,
        confirmButtonColor: "#3085d6",
        confirmButtonText: "Back to Shop",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/shop");
        }
      });

      setAddress({
        firstName: "",
        phone: "",
        email: "",
        city: "",
        streetAddress: "",
        building: "",
      });
    } catch (error) {
      console.log(error);
      if (
        error.response &&
        error.response.status === 400 &&
        error.response.data.message === "Your Cart is empty!"
      ) {
        setErrorMessage("Your Cart is empty!");
      } else {
        setErrorMessage(
          "An error occurred while submitting your order. Please try again.",
        );
      }
    } finally {
      setIsLoading(false);
    }
  };

  const validateForm = () => {
    if (!address.firstName) {
      setErrorMessage("Please enter your first name!");
      return false;
    }

    if (!address.email) {
      setErrorMessage("Please enter your email address!");
      return false;
    }

    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(address.email)) {
      setErrorMessage("Please enter a valid email address!");
      return false;
    }

    if (!address.phone) {
      setErrorMessage("Please enter your phone number!");
      return false;
    }

    const phoneRegex = /^\d{8,13}$/;
    if (!phoneRegex.test(address.phone)) {
      setErrorMessage("Please enter a valid phone number!");
      return false;
    }

    if (address.city.length < 4) {
      setErrorMessage("Please fill in the city field correctly!");
      return false;
    }

    if (address.streetAddress.length < 4) {
      setErrorMessage("Please fill in the street field correctly!");
      return false;
    }

    if (address.building.length < 4) {
      setErrorMessage("Please fill in the building field correctly!");
      return false;
    }

    return true;
  };

  // useEffect(() => {
  //   const fetchUserAddress = async () => {
  //     try {
  //       const token = secureLocalStorage.getItem("token");
  //       if (!token) {
  //         return;
  //       }

  //       const tokenPayload = token.split(".")[1];
  //       const decodedPayload = JSON.parse(atob(tokenPayload));
  //       const userId = decodedPayload.id;

  //       const response = await axios.get(
  //         `https://triplea.onrender.com/address/${userId}`,
  //         {
  //           headers: {
  //             Authorization: `Bearer ${token}`,
  //           },
  //         }
  //       );

  //       const userAddress = response.data.data;
  //       console.log(response)
  //       console.log(response.data)
  //       console.log(response.data.data)
  //       setAddress({
  //         firstName: userAddress.name,
  //         phone: userAddress.phone.toString(),
  //         email: userAddress.email,
  //         city: userAddress.city,
  //         streetAddress: userAddress.street,
  //         building: userAddress.building,
  //       });
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  //   fetchUserAddress();
  // }, []);

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
            {errorMessage && <p className="error-message">{errorMessage}</p>}

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
                City <span className="required">*</span>
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
                placeholder="Street name"
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
                placeholder="Country name"
                required
                value={address.building}
                onChange={(e) =>
                  setAddress({ ...address, building: e.target.value })
                }
              />
            </label>
            <label>
              <input
                className="radio-btn-delivery"
                type="radio"
                disabled
                checked
              />
              Cash on delivery
            </label>

            <button
              onClick={handleSubmitOrder}
              className="btn-checkout"
              type="button"
            >
              Place Order
            </button>
          </form>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Checkout;
