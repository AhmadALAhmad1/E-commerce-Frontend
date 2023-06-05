import React, { useState, useEffect } from "react";
import "./Users.css";
import { MdModeEditOutline } from "react-icons/md";
import { AiFillDelete } from "react-icons/ai";
import Swal from "sweetalert2";
import axios from "axios";
import { Link } from "react-router-dom";
const Users = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    getAllUsers();
  }, []);

  //GET ALL
  const getAllUsers = async () => {
    try {
      const { data } = await axios.get(
        "https://triplea.onrender.com/users/getAll",
      );
      setUsers(data.user);
    } catch (error) {
      console.log(error);
    }
  };

  //DELETE
  const handleDeleteUser = async (user) => {
    try {
      const result = await Swal.fire({
        title: `Are you sure you want to delete ${user.fullName}?`,
        showCancelButton: true,
      });
      if (result.isConfirmed) {
        await axios.delete(
          `https://triplea.onrender.com/users/delete/${user._id}`,
        );
        getAllUsers();
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Filter users based on search term
  const filteredUsers = users.filter(
    (user) =>
      user &&
      user.fullName &&
      user.email &&
      (user.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase())),
  );
  return (
    <div className="products-dash-table">
          <div className="btn-go-back">
          <Link to={"/dashboard"}>
            <button>Back</button>
          </Link>
        </div>
      <div className="content read">
        <h1>Users</h1>
        <div className="table-responsive">
          <div className="filter-bar">
            <input
              type="text"
              placeholder="Search by name or email"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <table>
            <thead>
              <tr>
                <td>#</td>
                <td>Name</td>
                <td>Email</td>
                <td>Role</td>
                <td>Action</td>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map((user, index) => (
                <tr key={user._id}>
                  <td>{index + 1}</td>
                  <td>{user.fullName}</td>
                  <td>{user.email}</td>
                  <td>{user.role}</td>
                  <td className="crud-btns">
                    <button
                      onClick={() => handleDeleteUser(user)}
                      className="delete-btn"
                    >
                      <AiFillDelete />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="pagination"></div>
      </div>
    </div>
  );
};

export default Users;
