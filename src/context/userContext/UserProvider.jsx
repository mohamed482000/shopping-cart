import axios from "axios";
import React, { useEffect, useState } from "react";
import UserStore from "./UserContext";

function UserProvider({ children }) {
  const [userData, setUserData] = useState({});
  const [reRender, setReRender] = useState(false);

  //// git user data
  useEffect(() => {
    const userId = localStorage.getItem("id");
    if (userId !== null) {
      axios({
        method: "get",
        url: `https://shopping-cart-data.onrender.com/users/${userId}`,
      }).then((data) => {
        setUserData(data.data);
      });
    }
  }, [reRender]);
  return (
    <UserStore.Provider value={{ userData, reRender, setReRender }}>
      {children}
    </UserStore.Provider>
  );
}

export default UserProvider;
