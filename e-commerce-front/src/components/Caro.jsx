import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Caro.scss";
import image1 from "../assets/wheyBlack.jpg";

function Caro() {
  const [Products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getAllProducts();
  }, []);

  const navigateToShop = () => {
    navigate("/shop");
  };

  useEffect(() => {
    if (Products.length > 0) {
      const root = document.documentElement;
      const marqElementsDisplayed = getComputedStyle(root).getPropertyValue(
        "--marq-elements-displayed",
      );
      const marqContent = document.querySelector("ul.marq-content");

      root.style.setProperty("--marq-elements", marqContent.children.length);

      for (let i = 0; i < marqElementsDisplayed; i++) {
        marqContent.appendChild(marqContent.children[i].cloneNode(true));
      }
    }
  }, [Products]);

  // GET ALL
  const getAllProducts = async () => {
    try {
      const { data } = await axios.get("https://triplea.onrender.com/products/");
      setProducts(data.data);
      console.log(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  if (Products.length === 0) {
    return null; // Return null or a loading spinner while fetching the products
  }

  return (
    <div className="marq">
      <div className="carousel">
        <div className="carousel-h1">
          <h1>OUR LATEST PRODUCTS</h1>
          <p className="carousel-p">
            Discover Our Latest Selection of
            <br />
            Premium Fitness Supplements
            <br />
            for Optimal Results
          </p>
        </div>
      </div>

      <div>
        <ul className="marq-content">
          {Products.map((product) => (
            <li key={product._id}>
              <div className="marqoo">
                <img
                  className="img-marq"
                  src={product.image}
                  alt=""
                  onClick={navigateToShop}
                />
                <h1 className="hello">{product.name}</h1>
                <p className="hello">{product.price}$</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Caro;
