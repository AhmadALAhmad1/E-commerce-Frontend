import React from "react";
import "./Footer.scss";
import { BsFacebook } from "react-icons/bs";
import { SlSocialTwitter } from "react-icons/sl";
import { FaInstagram } from "react-icons/fa";
import { IoIosArrowDropup } from "react-icons/io";
import triple from '../assets/triple-a-high-resolution-logo-color-on-transparent-background.png'
const Footer = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <header>{/* Content */}</header>

      <main>{/* Content */}</main>

      <footer className="footer">
        <div className="footer__addr">
         <img  className="triplea" src={triple} />

          <h2>Contact</h2>

          <address>
            Lebanon-Beirut-Jnah-CentroMall
            <br />
            <a className="footer__btn" href="ahmadd.l.ahmadd1998@gmail.com">
              Email Us
            </a>
          </address>
        </div>

        <ul className="footer__nav">
          <li className="nav__item">
            <h2 className="nav__title">Social</h2>

            <ul className="nav__ul nav-social">
              <li>
                <a href="#">
                  {" "}
                  <BsFacebook />{" "}
                </a>
              </li>

              <li>
                <a href="#">
                  {" "}
                  <SlSocialTwitter />{" "}
                </a>
              </li>

              <li>
                <a href="#">
                  {" "}
                  <FaInstagram />{" "}
                </a>
              </li>
            </ul>
          </li>

          <li className="nav__item nav__item--extra">
            <h2 className="nav__title">Benefits</h2>

            <ul className="nav__ul nav__ul--extra">
              <li>
                <a href="#">Strength</a>
              </li>
              <li>
                <a href="#">Endurance</a>
              </li>
              <li>
                <a href="#">Healthier</a>
              </li>
              <li>
                <a href="#">Stronger</a>
              </li>
              <li>
                <a href="#">Satisfied</a>
              </li>
              <li>
                <a href="#">Vitality</a>
              </li>{" "}
              <li>
                <a href="#">Performance</a>
              </li>{" "}
              <li>
                <a href="#">Recovery</a>
              </li>{" "}
              <li>
                <a href="#">Transformation</a>
              </li>{" "}
              <li>
                <a href="#">Confidence</a>
              </li>{" "}
            
            </ul>
          </li>

          <li className="nav__item">
            <h2 className="nav__title">Categories</h2>

            <ul className="nav__ul">
              <li>
                <a href="#">Protein</a>
              </li>

              <li>
                <a href="#">Creatine</a>
              </li>

              <li>
                <a href="#">Pre-Workouts</a>
              </li>

              <li>
                <a href="#">Fat Burners</a>
              </li>

              <li>
                <a href="#">Vitamins</a>
              </li>
            </ul>
          </li>
        </ul>

        <div className="legal">
          <p>&copy; By Ahmad.Al.Ahmad--All rights reserved.</p>
        </div>
        <div className="scroll" onClick={handleScrollToTop}>
  <IoIosArrowDropup/>
</div>
      </footer>
    </>
  );
};

export default Footer;
