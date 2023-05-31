import React from "react";
import "./Shop.css";
import { BsSearch } from "react-icons/bs";
import Card from "../components/Card";
import { useState, useEffect } from "react";
import axios from "axios";



const Shop = () => {
  const [Products, setProducts] = useState([]);

  useEffect(() => {
    getAllProducts();
  }, []);

  ///////////////////////////////////GET ALL///////////////////////////
  const getAllProducts = async () => {
    try {
      const { data } = await axios.get("http://localhost:5000/products/");
      setProducts(data.data);
      console.log(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  if (Products.length === 0) {
    return null; // Return null or a loading spinner while fetching the products
  }
  /////////////////////////////////////////////////////////////////////////


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
