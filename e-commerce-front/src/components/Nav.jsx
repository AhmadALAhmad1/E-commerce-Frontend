import React, { useState, useEffect } from "react";
import "./Nav.scss";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import secureLocalStorage from "react-secure-storage";

function Nav() {
  const [isBurgerMenuOpen, setBurgerMenuOpen] = useState(false);
  const [isUserDropdownOpen, setUserDropdownOpen] = useState(false);
  const [user, setUser] = useState({});

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    try {
      const token = secureLocalStorage.getItem("token");
    

      const tokenPayload = token.split(".")[1];
      const decodedPayload = JSON.parse(atob(tokenPayload));
      const userID = decodedPayload.id;
console.log("1",userID)
      ///////////////////////Get User BY ID///////////////
      const getById = async () => {
        try {
          const { data } = await axios.get(
            `https://triplea.onrender.com/users/me/${userID}`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          setUser(data);
          console.log("3", data.fullName);
        } catch (error) {
          console.log(error);
        }
      };
      

      getById();
    } catch (error) {
      console.log(error);
    }
  }, []);

  ////////////////////////////////////////////
  function handleBuyClick() {
    navigate("/register", {
      state: {
        previousUrl: location.pathname,
      },
    });
  }

  const toggleBurgerMenu = () => {
    setBurgerMenuOpen(!isBurgerMenuOpen);
  };

  const toggleUserDropdown = () => {
    setUserDropdownOpen(!isUserDropdownOpen);
  };

  const closeMenu = () => {
    setBurgerMenuOpen(false);
  };

  const closeUserDropdown = () => {
    setUserDropdownOpen(false);
  };
  return (
    <header className="header">
      <nav className="navbar">
        {/* <div className="cart-phone">
          <Link to="/cart" className="cart-link">
            <AiOutlineShoppingCart className="cart-icon" />
          </Link>
        </div> */}

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
            {isBurgerMenuOpen && (
              <li className="menu-item" onClick={closeMenu}>
                <Link to="/register">Login</Link>
              </li>
            )}
          </ul>
        </div>

        <div className="icons-nav">
     
          <div className="cart-phone">
            <Link to="/cart" className="cart-link">
              <AiOutlineShoppingCart className="cart-icon" />
            </Link>
          </div>

          <div className="user" onClick={toggleUserDropdown}>
            <BiUserCircle />
            {isUserDropdownOpen && (
              <div className="user-dropdown" onClick={closeUserDropdown}>
                <ul className="dropdown-menu">

                  {user && <li className="span-nav-user">Hello <span className="user-name">{user.fullName}</span></li>}
                  <li>
                    <span
                      className="span-nav-login"
                      onClick={() => handleBuyClick()}
                    >
                      Login
                    </span>
                  </li>
                  <li>
                    <Link to="/profile">Profile</Link>
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
