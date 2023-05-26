import React from "react";
import "./Shop.css";
import { BsSearch } from "react-icons/bs";
import Card from "../components/Card";

const Shop = () => {
  return (
    <>
      <div className="shop-container">
        <h1>
          Our<span className="span-h1"> Products</span>{" "}
        </h1>

        <div className="search-bar">
          <div className="box">
            <form name="search">
              <input
                type="text"
                className="input"
                name="txt"
                onMouseOut={(e) => {
                  e.target.value = "";
                  e.target.blur();
                }}
              />
            </form>
            <i className="fas fa-search">
              {" "}
              <BsSearch />
            </i>
          </div>
          </div>

          <div className="products">
              <Card />
        </div>
      </div>
    </>
  );
};

export default Shop;
