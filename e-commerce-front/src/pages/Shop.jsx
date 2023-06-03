import React, { useState, useEffect } from "react";
import "./Shop.css";
import { BsSearch } from "react-icons/bs";
import Card from "../components/Card";
import axios from "axios";
import Loader from "../components/Loader";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getAllProducts = async () => {
      try {
        const { data } = await axios.get("https://triplea.onrender.com/products/");
        setProducts(data.data);
        console.log(data.data);
      } catch (error) {
        console.log(error);
      }
    };

    setTimeout(() => {
      setLoading(false);
    }, 3000);

    
    getAllProducts();
  }, []);

  return (
    <>
      <div className="shop-container">
        <h1>
          Our<span className="span-h1"> Products</span>{" "}
        </h1>
{/* 
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
        </div> */}

        {loading ? <Loader /> : <Card products={products} />}
      </div>
    </>
  );
};

export default Shop;
