import React, { useState } from "react";
import "./Contact.scss";
import { FaMobileAlt } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { IoLocationSharp } from "react-icons/io5";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const successToast = () => {
    toast.success("Message sent successfully!", {
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

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform your custom validation here
    if (!name || !email || !message) {
      alert("Please fill in all the fields.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }
    // Form submission logic goes here
    // You can make an API request or perform any other necessary actions

    setIsFormSubmitted(true);
    successToast();
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <>
      <div className="contact container">
        <form onSubmit={handleSubmit}>
          <div className="form-contact">
            <div className="form-txt">
              <h1>Contact Us</h1>
              <span>
                Experience our exceptional customer service and let's create
                something amazing together!
              </span>
              <div class="row">
                <div class="col-md-5">
                  <div class="title"></div>
                  <div class="content-contact">
                    <div class="info">
                      <i class="fas fa-mobile-alt">
                        <FaMobileAlt />
                      </i>
                      <h4 class="d-inline-block">
                        PHONE :
                        <br />
                        <span>+96171378244</span>
                      </h4>
                    </div>
                    <div class="info">
                      <i class="far fa-envelope">
                        <HiOutlineMail />
                      </i>
                      <h4 class="d-inline-block">
                        EMAIL :
                        <br />
                        <span>Triple-A@gmail.com</span>
                      </h4>
                    </div>
                    <div class="info">
                      <i class="fas fa-map-marker-alt">
                        <IoLocationSharp />
                      </i>
                      <h4 class="d-inline-block">
                        ADDRESS :<br />
                        <span>Lebanon-Beirut</span>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="form-details">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Name"
                value={name}
                onChange={handleNameChange}
                required
              />
              <input
                type="email"
                name="email"
                id="email-contact"
                placeholder="Email"
                value={email}
                onChange={handleEmailChange}
                required
              />
              <textarea
                name="message"
                id="message"
                cols="52"
                rows="7"
                placeholder="Message"
                value={message}
                onChange={handleMessageChange}
                required
              ></textarea>
              <button
                mailto="ahmadd.l.ahmadd1998@gmail.com"
                className="btn-contact-us"
                type="submit"
              >
                SEND MESSAGE
              </button>
         
            </div>
          </div>
        </form>
      </div>
      <ToastContainer />
    </>
  );
}

export default Contact;
