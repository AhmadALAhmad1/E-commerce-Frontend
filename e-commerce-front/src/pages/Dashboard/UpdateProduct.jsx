import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const UpdateProduct = () => {
  const { itemID } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: 0,
    size: "",
    image: "",
    CatID: "",
  });
  const [imageFile, setImageFile] = useState("");
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchCategories();
    getById();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await axios.get("https://triplea.onrender.com/cat/");
      setCategories(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getById = async () => {
    try {
      const response = await axios.get(
        `https://triplea.onrender.com/products/${itemID}`
      );
      const item = response.data.data;
      setFormData({
        name: item.name,
        description: item.description,
        price: item.price,
        size: item.size,
        CatID: item.CatID,
        image: item.image,
      });
    } catch (error) {
      console.log("Error:",error);
    }
  };

  const updateItem = async (itemID, updatedItemData) => {
    try {
      const formData = new FormData();
      formData.append("name", updatedItemData.name);
      formData.append("description", updatedItemData.description);
      formData.append("price", updatedItemData.price);
      formData.append("size", updatedItemData.size);
      formData.append("CatID", updatedItemData.CatID);

      if (imageFile) {
        formData.append("image", imageFile);
      }

      const response = await axios.put(
        `https://triplea.onrender.com/products/${itemID}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("Update response:", response.data.data.CatID.name);
      // console.log(response.data.data);
      // navigate("/products");
    } catch (error) {
      console.log("Update error:", error.response.data);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  const formSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted"); /// Debugging statement
  
    console.log("Calling updateItem"); // Debugging statement
    await updateItem(itemID, formData);
  };
  

  return (
    <form onSubmit={formSubmit} className="form">
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        name="name"
        value={formData.name}
        onChange={handleInputChange}
      />

      <label htmlFor="description">Description:</label>
      <input
        type="text"
        id="description"
        name="description"
        value={formData.description}
        onChange={handleInputChange}
      />

      <label htmlFor="price">Price:</label>
      <input
        type="number"
        id="price"
        name="price"
        value={formData.price}
        onChange={handleInputChange}
      />

      <label htmlFor="size">Size:</label>
      <input
        type="text"
        id="size"
        name="size"
        value={formData.size}
        onChange={handleInputChange}
      />

      <label htmlFor="image">Image:</label>
      <input
        type="file"
        id="image"
        name="image"
        accept="image/*"
        onChange={handleImageChange}
      />

      <label htmlFor="CatID" className="add-products__label">
        Category
      </label>
      <select
        className="add-products__select"
        id="CatID"
        aria-describedby="Item category"
        value={formData.CatID}
        onChange={handleInputChange}  // Change the event handler to handleCategoryChange
      >
        {categories.map((category) => (
          <option key={category._id} value={category._id}>
            {category.name}
          </option>
        ))}
      </select>

      <button type="submit">Update</button>
    </form>
  );
};

export default UpdateProduct;
