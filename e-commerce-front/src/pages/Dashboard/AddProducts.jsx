import React, { useState,useEffect } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import "./AddProducts.scss";
//TOAST
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function AddProducts() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [size, setSize] = useState("");
  const [image, setImage] = useState("");
  const [CatID, setCategory] = useState("");
  const [categories, setCategories] = useState([]);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await axios.get(
        "https://triplea.onrender.com/cat/",
      );
      setCategories(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const successToast = () => {
    toast.success("Product Added", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const formSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("description", description);
      formData.append("price", price);
      formData.append("size", size);
      formData.append("image", image);
      formData.append("CatID", CatID);

      const response = await axios.post(
        "https://triplea.onrender.com/products/",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        },
      );

      successToast();
      console.log("product added");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <h1 className="add-products__title">ADD Products</h1>

      <form className="add-products__form" onSubmit={formSubmit}>
        <div className="add-products__input-group">
          <label htmlFor="ItemName" className="add-products__label">
            Name
          </label>
          <input
            type="text"
            className="add-products__input"
            id="ItemName"
            placeholder="Item name"
            aria-describedby="item name"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>

        <div className="add-products__input-group">
          <label htmlFor="Itemdescription" className="add-products__label">
            Description
          </label>
          <input
            type="text"
            className="add-products__input"
            id="Itemdescription"
            placeholder="Item description"
            aria-describedby="description title"
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
        </div>

        <div className="add-products__input-group">
          <label htmlFor="ItemPrice" className="add-products__label">
            Price
          </label>
          <input
            type="number"
            className="add-products__input"
            id="ItemPrice"
            placeholder="Item Price"
            aria-describedby="Item Price"
            onChange={(e) => {
              setPrice(e.target.value);
            }}
          />
        </div>

        <div className="add-products__input-group">
          <label htmlFor="ItemSize" className="add-products__label">
            Size
          </label>
          <input
            type="text"
            className="add-products__input"
            id="ItemSize"
            placeholder="Item size"
            aria-describedby="Item size"
            onChange={(e) => {
              setSize(e.target.value);
            }}
          />
        </div>

        <div className="add-products__input-group">
          <label htmlFor="ItemImage" className="add-products__label">
            Image
          </label>
          <input
            type="file"
            className="add-products__input"
            id="ItemImage"
            onChange={(e) => {
              setImage(e.target.files[0]);
            }}
          />
        </div>

        <div className="add-products__input-group">
          <label htmlFor="ItemCategory" className="add-products__label">
            Category
          </label>
          <select
            className="add-products__select"
            id="ItemCategory"
            aria-describedby="Item category"
            value={CatID}
            onChange={(e) => {
              setCategory(e.target.value);
            }}
          >
            {categories.map((category) => (
              <option key={category._id} value={category._id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>

        <button type="submit" className="add-products__button">
          Add
        </button>
      </form>
    </>
  );
}

export default AddProducts;
