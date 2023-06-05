import React from "react";
import "./DashboardSide.scss";
import { Link } from "react-router-dom";

const DashboardSide = () => {
  return (
    <>
      <div className="dash-container">
        <input type="checkbox" name="menuToggle" id="menuToggle" />
        <aside className="custom-sidebar">
          <nav>
            <a href="#" className="custom-logo">
              Logo
            </a>
            <div className="custom-nav-items">
              <Link to="/products">Products</Link>
              <Link to="/orders">Orders</Link>
              <Link to="/users">Users</Link>
            </div>
          </nav>
        </aside>
        <main className="custom-right">
          <label htmlFor="menuToggle" className="custom-toggle__icon">
            <span className="custom-line custom-line1"></span>
            <span className="custom-line custom-line3"></span>
            <span className="custom-line custom-line2"></span>
          </label>
          <div className="custom-content">
            <h2>Welcome To Dashboard</h2>
          </div>
        </main>
      </div>
    </>
  );
};

export default DashboardSide;
