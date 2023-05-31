import React from "react";
import "./Contact.scss";
import { BsFacebook } from "react-icons/bs";
import { SlSocialTwitter } from "react-icons/sl";
import { FaInstagram } from "react-icons/fa";

import { FaMobileAlt } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { IoLocationSharp } from "react-icons/io5";

function Contact() {
  return (
    <>
      {/* <div className="contact_form" id="form-contact-id">
      <h3 className="heading">Contact Us</h3>
      <form className="contact-form">
        <div>
          <label htmlFor="name">Full Name</label><br />
          <input type="text" id="name" placeholder="Please Enter Your full name" required />
        </div>
        <div>
          <label htmlFor="email">Email</label><br />
          <input type="email" id="email" placeholder="Please Enter Your Email Id" required />
        </div>
        <div>
          <label htmlFor="phone">Phone Number</label><br />
          <input type="tel" id="phone" placeholder="Please Enter Your Phone Number" />
        </div>
        <div>
          <label htmlFor="message">Message</label><br />
          <textarea type="text" rows="5" cols="50" id="message" placeholder="Please Enter your message"></textarea>
        </div>
        <div className="btn-conatct-div">
          <button className="btn-contact" type="submit">Submit</button>
        </div>
      </form>
    </div> */}

      <div className="contact container">
        <form>
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
                  <div class="content">
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
                required
              />
              <input
                type="email"
                name="email"
                id="email-contact"
                placeholder="Email"
                required
              />
              <textarea
                name="message"
                id="message"
                cols="52"
                rows="7"
                placeholder="Message"
                required
              ></textarea>
              <button className="btn-contact-us">SEND MESSAGE</button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default Contact;
