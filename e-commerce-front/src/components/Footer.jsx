import React from "react";
import "./Footer.css";
import { BsFacebook } from "react-icons/bs";
import { SlSocialTwitter } from "react-icons/sl";
import { FaInstagram } from "react-icons/fa";
import { IoIosArrowDropup } from "react-icons/io";

const Footer = () => {
  return (
    <>
      <div className="parent">
        <div className="foot-1">
          <p>LOGO</p>
          <h1>TripleA</h1>
        </div>

        <div className="foot-2">
          <h3 className="foot-h3">product</h3>
          <p>features</p>
          <p>features</p>
          <p>features</p>
          <p>features</p>
        </div>

        <div className="foot-3">
          <h3 className="foot-h3">product</h3>
          <p>features</p>
          <p>features</p>
          <p>features</p>
          <p>features</p>
        </div>

        <div className="foot-4">
          <h3 className="foot-h3">product</h3>
          <p>features</p>
          <p>features</p>
          <p>features</p>
          <p>features</p>
        </div>
        <div className="foot-4">
          <h3 className="foot-h3">product</h3>
          <p>features</p>
          <p>features</p>
          <p>features</p>
          <p>features</p>
        </div>

        <div className="foot-5-social">
          <ul className="social-ul">
            <li>
              <BsFacebook />
            </li>
            <li>
              <SlSocialTwitter />
            </li>
            <li>
              <FaInstagram />
            </li>
          </ul>
          <ul className="scroll-up">
            <li>
              <IoIosArrowDropup />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Footer;
