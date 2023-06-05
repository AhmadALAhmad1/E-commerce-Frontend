import React from "react";
import "./Products.css";
import { MdModeEditOutline } from "react-icons/md";
import { AiFillDelete } from "react-icons/ai";
import Swal from "sweetalert2";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import DashboardSide from "./DashboardSide";

const Products = () => {
  const [items, setItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    getAllItems();
  }, []);

  useEffect(() => {
    setFilteredItems(
      items.filter(
        (item) =>
          item.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
          (filter === "" || item.CatID?.name === filter),
      ),
    );
  }, [searchQuery, items, filter]);

  // GET ALL
  const getAllItems = async () => {
    try {
      const { data } = await axios.get(
        "https://triplea.onrender.com/products/",
      );
      setItems(data.data);
      console.log(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  // DELETE
  const deleteItem = async (item) => {
    try {
      const result = await Swal.fire({
        title: `Are you sure to delete ${item.name}?`,
        showCancelButton: true,
      });

      if (result.isConfirmed) {
        await axios.delete(`https://triplea.onrender.com/products/${item._id}`);
        getAllItems(); // when finished deleting, call products again to refresh
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="products-dash-table">
        <div className="btn-go-back">
          <Link to={"/dashboard"}>
            <button>Back</button>
          </Link>
        </div>
        <div className="content read">
          <h1>Products</h1>

          <div className="filter-bar">
            <input
              type="text"
              placeholder="Search by title"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <select
              className="select-items"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            >
              <option value="">All</option>
              <option value="protein">Protein</option>
              <option value="creatine">Creatine</option>
              <option value="vitamins">vitamins</option>
              <option value="pre-workout">pre-workout</option>
              <option value="fat-burner">fat-burner</option>
            </select>
          </div>
          <a className="create-contact add-btn">
            <Link to={"/products/add"} className="btn-add">
              Add product
            </Link>
          </a>
          <div className="table-responsive">
            <table>
              <thead>
                <tr>
                  <td>#</td>
                  <td>Name</td>
                  <td>Desc.</td>
                  <td>Size</td>
                  <td>Price</td>
                  <td>category</td>
                  <td>Image</td>
                  <td>Action</td>
                </tr>
              </thead>
              <tbody>
                {filteredItems.map((item, key) => {
                  return (
                    <tr key={item._id}>
                      <td>{key + 1}</td>
                      <td>{item.name}</td>
                      <td>{item.description}</td>
                      <td>{item.size}</td>
                      <td>{item.price}</td>
                      <td>{item.CatID?.name}</td>

                      <td>
                        <img src={item.image} />
                      </td>

                      <td className="crud-btns">
                        <button
                          onClick={() =>
                            (window.location.href = `/products/update/${item._id}`)
                          }
                          className="edit-btn"
                        >
                          <MdModeEditOutline />
                        </button>
                        <button
                          onClick={() => {
                            deleteItem(item);
                          }}
                          className="delete-btn"
                        >
                          <AiFillDelete />
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className="pagination"></div>
        </div>
      </div>
    </>
  );
};

export default Products;
