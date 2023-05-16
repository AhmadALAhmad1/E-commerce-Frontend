import React, { useState } from "react";
import "./Nav.scss";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";
import image from "../assets/image-protein.png";
function Nav() {
  const [isBurgerMenuOpen, setBurgerMenuOpen] = useState(false);
  const [isUserDropdownOpen, setUserDropdownOpen] = useState(false);

  const toggleUserDropdown = () => {
    setUserDropdownOpen(!isUserDropdownOpen);
  };

  return (
    <header className="header">
      <nav className="navbar">
        <div className="cart-phone">
          <AiOutlineShoppingCart />
        </div>
        <a className="brand" href="#">
          Triple A
        </a>
        <input
          type="checkbox"
          id="nav"
          className="hidden"
          checked={isBurgerMenuOpen}
          onChange={() => setBurgerMenuOpen(!isBurgerMenuOpen)}
        />
        <label htmlFor="nav" className="nav-toggle">
          <span></span>
          <span></span>
          <span></span>
        </label>

        <div className="wrapper">
          <ul className="menu">
            <li className="menu-item">
              <a href="#">Home</a>
            </li>
            <li className="menu-item">
              <a href="#">Shop</a>
            </li>
            <li className="menu-item">
              <a href="#">About</a>
            </li>
            <li className="menu-item">
              <a href="#">Contact</a>
            </li>
            {isBurgerMenuOpen && (
              <li className="menu-item">
                <a href="#">Login</a>
              </li>
            )}
          </ul>
        </div>

        <div className="icons-nav">
          <div className="cart">
            <AiOutlineShoppingCart />
          </div>
          <div className="user" onClick={toggleUserDropdown}>
            <BiUserCircle />
            {isUserDropdownOpen && (
              <div className="user-dropdown">
                <ul className="dropdown-menu">
                  <li>
                    <a href="#">Register</a>
                  </li>
                  <li>
                    <a href="#">Login</a>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </nav>
{/*       
      <div className="hero">
        <h1 className="hero-h1">
          Let's Build Wellness Rather
          <br />
          Than Treating Diseas
        </h1>
        <p className="hero-p">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum in
          iure, repellendus animi exercitationem enim minus dolorum ducimus
        </p>
       
        <div className="circle">
          <img src={image} alt="" />
        </div>
        <div className="hero-btn">
          <button>START </button>
        </div>
      </div> */}
    </header>
  );
}

export default Nav;
