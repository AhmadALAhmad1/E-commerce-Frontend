import React from 'react';
import './Contact.css'
import { BsFacebook } from "react-icons/bs";
import { SlSocialTwitter } from "react-icons/sl";
import { FaInstagram } from "react-icons/fa";


function Contact() {
  return (
    <>
    <section className="contact_us">
      <div className="container">
        <div className="row">
          <div className="col-md-10 offset-md-1">
            <div className="contact_inner">
              <div className="row">
                <div className="col-md-10">
                  <div className="contact_form_inner">
                    <div className="contact_field">
                      <h3>Contact Us</h3>
                      <p>Feel free to contact us any time. We will get back to you as soon as we can!.</p>
                      <input type="text" className="form-control form-group" placeholder="Name" />
                      <input type="text" className="form-control form-group" placeholder="Email" />
                      <textarea className="form-control form-group" placeholder="Message"></textarea>
                      <button className="contact_form_submit">Send</button>
                    </div>
                  </div>
                </div>
                <div className="col-md-2">
                  <div className="right_conatct_social_icon d-flex align-items-end">
                    <div className="socil_item_inner d-flex">
                      <li><a href="#"><i className="fab fa-facebook-square"><BsFacebook/></i></a></li>
                      <li><a href="#"><i className="fab fa-instagram"><FaInstagram/></i></a></li>
                      <li><a href="#"><i className="fab fa-twitter"><SlSocialTwitter/></i></a></li>
                    </div>
                  </div>
                </div>
              </div>
              <div className="contact_info_sec">
                <h4>Contact Info</h4>
                <div className="d-flex info_single align-items-center">
                  <i className="fas fa-headset"></i>
                  <span>+961 03222111</span>
                </div>
                <div className="d-flex info_single align-items-center">
                  <i className="fas fa-envelope-open-text"></i>
                  <span>Triple.A@gmail.com</span>
                </div>
                <div className="d-flex info_single align-items-center">
                  <i className="fas fa-map-marked-alt"></i>
                  <span>100+ Travel partners and 10+ Service city across India, USA, Canada & UAE</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="map_sec">
      <div className="container">
        <div className="row">
          <div className="col-md-10 offset-md-1">
            <div className="map_inner">
              <h4>Find Us on Google Map</h4>
              <div className="map_bind">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6476.006255828446!2d35.51139001905863!3d33.89349012697564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151f1659d8978b6b%3A0xb6dfec56b0ab56cc!2sBeirut%2C%20Lebanon!5e0!3m2!1sen!2sin!4v1596988408134!5m2!1sen!2sin" width="100%" height="450" frameBorder="0" style={{ border: '0' }} allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}

export default Contact;
