import React, { useEffect, useState } from "react";
import DashBoardStore from "./DashBoardContext";
import axios from "axios";

function DashBoardProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [users, setUsers] = useState([]);
  const [updateUsersAndProd, setUpdateUsersAndProd] = useState(false);

  ////get all users and products
  useEffect(() => {
    axios.get("https://shopping-cart-data.onrender.com/users").then((data) => {
      setUsers(data.data);
    });
    axios
      .get("https://shopping-cart-data.onrender.com/products")
      .then((data) => setProducts(data.data));
  }, [updateUsersAndProd]);
  ////get all products
  return (
    <DashBoardStore.Provider value={{ products, users, setUpdateUsersAndProd }}>
      {children}
    </DashBoardStore.Provider>
  );
}

export default DashBoardProvider;
