import React, { useState } from "react";
import "./Nav.scss";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";
import { Link } from "react-router-dom";

function Nav() {
  const [isBurgerMenuOpen, setBurgerMenuOpen] = useState(false);
  const [isUserDropdownOpen, setUserDropdownOpen] = useState(false);

  const toggleBurgerMenu = () => {
    setBurgerMenuOpen(!isBurgerMenuOpen);
  };

  const toggleUserDropdown = () => {
    setUserDropdownOpen(!isUserDropdownOpen);
  };

  const closeMenu = () => {
    setBurgerMenuOpen(false);
  };

  return (
    <header className="header">
      <nav className="navbar">
        <div className="cart-phone">
          <AiOutlineShoppingCart />
        </div>
        <a className="brand" href="/">
          Triple A
        </a>
        <input
          type="checkbox"
          id="nav"
          className="hidden"
          checked={isBurgerMenuOpen}
          onChange={toggleBurgerMenu}
        />
        <label htmlFor="nav" className="nav-toggle">
          <span></span>
          <span></span>
          <span></span>
        </label>

        <div className={`wrapper ${isBurgerMenuOpen ? "active" : ""}`}>
          <ul className="menu">
            <li className="menu-item" onClick={closeMenu}>
              <Link to="/">Home</Link>
            </li>
            <li className="menu-item" onClick={closeMenu}>
              <Link to="/shop">Shop</Link>
            </li>
            <li className="menu-item" onClick={closeMenu}>
              <Link to="/about">About</Link>
            </li>
            <li className="menu-item" onClick={closeMenu}>
              <Link to="/contact">Contact</Link>
            </li>
            {isBurgerMenuOpen && ( // Render the Login menu item only when the burger menu is open
              <li className="menu-item" onClick={closeMenu}>
                <Link to="/register">Login</Link>
              </li>
            )}
          </ul>
        </div>

        <div className="icons-nav">
          
          <div className="cart">
            <Link to="/cart"><AiOutlineShoppingCart /></Link>
          </div>

          <div className="user" onClick={toggleUserDropdown}>
            <BiUserCircle />
            {isUserDropdownOpen && (
              <div className="user-dropdown">
                <ul className="dropdown-menu">
                  <li>
                    <Link to="/register">Register</Link>
                  </li>
                  <li>
                    <Link to="/register">Login</Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Nav;
