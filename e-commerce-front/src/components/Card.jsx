import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate,useLocation } from "react-router-dom";
import "./Card.css";
import secureLocalStorage from "react-secure-storage";
//TOAST
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {BsSearch} from 'react-icons/bs'
const Card = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [name, setName] = useState("");
  const [price, setprice] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [isProductDisabled, setIsProductDisabled] = useState(false);
  const [cart, setCart] = useState([]);
  const [message, setMessage] = useState("");


  
  const successToast = () => {
    toast.success("Product added to Cart", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };


  const failToast = () => {
    toast.error("Please Login First!", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };



  function handleBuyClick() {
    
    const token = secureLocalStorage.getItem("token");

    if (!token) {
      navigate("/register", { 
        state: {
          previousUrl: location.pathname,
        }
      });
   
    }

  }

  useEffect(() => {
    getAllProducts();
  }, []);
  ////////////////////////////////loader//////////////////////////
  // useEffect(() => {
  //   // Preloader after 3 seconds: adding "none" class and removing preloader
  //   setTimeout(function () {
  //     const loadingElement = document.getElementById("loading");
  //     if (loadingElement) {
  //       loadingElement.classList.add("none");
  //     }
  //   }, 3000);
  // }, []);

  //////////////////////////////////// GET ALL  /////////////////////////////////////////////
  const getAllProducts = async () => {
    try {
      const { data } = await axios.get(
        "https://triplea.onrender.com/products/",
      );
      setProducts(data.data);
      setFilteredProducts(data.data); // Initialize filtered products with all products
    } catch (error) {
      console.log(error);
    }
  };

  /////////////////////////////// Filter products based on category/////////////////////////////////////
  const filterProducts = (category) => {
    if (category === "all") {
      setFilteredProducts(products); // Show all products
    } else {
      const filtered = products.filter(
        (product) => product.CatID.name === category,
      );
      setFilteredProducts(filtered);
    }
  };
  ///////////////////////////////
  if (products.length === 0) {
    return null; // Return null or a loading spinner while fetching the products
  }
  ////////////////////////////////////////////////////////////////////////////////////////////////////


  const handleSearch = (event) => {
    event.preventDefault(); // Prevent form submission
    const query = event.target.value;
    setName(query);
  
    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredProducts(filtered);
  };
  
  /////////////////////////////////////////////////////////

  const addToCart = (event, product) => {
    event.preventDefault(); 
    const token = secureLocalStorage.getItem("token");

    if (!token) {
      failToast();

      navigate("/register" , { 
        state: {
          previousUrl: location.pathname,
        }
      });
      return;
    }
    successToast(); 

    const cartItem = {
      product_id: product._id,
      image: product.image,
      name: product.name,
      size: product.size,
      price: product.price,
      quantity: 1, // Set the initial quantity to 1
    };

    let existingCartItems = JSON.parse(localStorage.getItem("cart")) || [];
    let cartItemExists = false;

    existingCartItems = existingCartItems.map((item) => {
      if (
        item.product_id === cartItem.product_id &&
        item.image === cartItem.image &&
        item.name === cartItem.name &&
        item.size === cartItem.size &&
        item.price === cartItem.price
      ) {
        cartItemExists = true;
        return {
          ...item,
          quantity: item.quantity + 1, // Increment the quantity by 1
        };
      }
      return item;
    });

    if (!cartItemExists) {
      existingCartItems.push(cartItem);

    }

    localStorage.setItem("cart", JSON.stringify(existingCartItems));
    setMessage("Product added to cart!");
    setCart(existingCartItems);
  };

  return (
    <>

<div className="search-bar">
          <div className="box">
            <form name="search">
            <input
  type="text"
  className="input"
  name="txt"
  value={name}
  onChange={handleSearch}
  onKeyPress={(event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleSearch(event);
    }
  }}
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



      <div class="buttons-filter">
        <button class="button-all" onClick={() => filterProducts("all")}>
          All
        </button>
        <button class="button-protein" onClick={() => filterProducts("whey")}>
          PROTEIN
        </button>
        <button
          class="button-creatine"
          onClick={() => filterProducts("creatine")}
        >
          CREATINE
        </button>
        <button class="button-pre" onClick={() => filterProducts("preworkout")}>
          PRE-WORKOUT
        </button>

        <button class="button-burner" onClick={() => filterProducts("burner")}>
          FAT BURNERS
        </button>

        <button
          class="button-vitamin"
          onClick={() => filterProducts("vitamins")}
        >
          VITAMINS
        </button>
      </div>
      <div className="grid-container"></div>
      <div className="grid-container">
        <div className="grid-x grid-margin-x small-up-1 medium-up-2 large-up-4 grid-x-wrapper">
          {filteredProducts.map((product) => (
            <div className="product-box column" key={product.id}>
              <a href="#" className="product-item">
                <div className="product-item-image">
                  <img src={product.image} alt="Stadium Full Exterior" />
                  <div className="product-item-image-hover"></div>
                </div>
                <div className="product-item-content">
                  <div className="product-item-title">{product.name}</div>
                  <div className="product-item-price">{product.price}$</div>
                  <div className="button-pill">
                    <span
                      className="span-1"
                      onSubmit={() => handleBuyClick()}
                      // onClick={() => addToCart(product)}
                      onClick={(event) => addToCart(event, product)}
                    >
                      Add to Cart
                    </span>

                     <Link to={`/shop/${product._id}`}>
                      <span className="span-2">More Details</span></Link> 
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
      <div className="grid-container">
        <div className="grid-x grid-margin-x small-up-1 medium-up-1 large-up-1 grid-x-wrapper">
          <div
            className="product-box column"
            style={{ textAlign: "center", margin: "50px 0 50px" }}
          ></div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
                      <ToastContainer />

    </>
  );
};

export default Card;
