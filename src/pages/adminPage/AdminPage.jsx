import { useContext, useEffect, useState } from "react";
import React from "react";
import "./adminPage.css";
import { Link } from "react-router-dom";
import SideBar from "./SideBar";
import "./adminPage.css";
import DashBoardStore from "../../context/dashBoard/DashBoardContext";

function AdminPage({ updateLinks, setUpdateLinks }) {
  const { products, users } = useContext(DashBoardStore);
  useEffect(() => {
    setUpdateLinks(!updateLinks);
  }, []);

  return (
    <div className="admin-page">
      <SideBar />
      <div className="admin-page-content">
        <div className="admin-page-users">
          <h2 className="text-capitalize">users</h2>
          <h4 className="text-capitalize">
            number of user : <span>{users.length}</span>
          </h4>
          <h4 className="text-capitalize">
            last user registered is :{" "}
            <span>
              {users.length > 0 ? users[users.length - 1].userName : ""}
            </span>
          </h4>
          <Link to="/adminpage/users">
            <button className="bg-primary">show users</button>
          </Link>
        </div>
        <div className="admin-page-products">
          <h2 className="text-capitalize">products</h2>
          <h4 className="text-capitalize">
            number of products : <span>{products.length}</span>
          </h4>
          <h4 className="text-capitalize">
            last products added :{" "}
            <span>
              {products.length > 0 ? products[products.length - 1].name : ""}
            </span>
          </h4>
          <Link to="/adminpage/products">
            <button className="bg-primary">show products</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AdminPage;
