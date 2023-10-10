import React, { useContext, useEffect, useState } from "react";
import "./userPage.css";
import UserStore from "../../context/userContext/UserContext";

function UserPage({ updateLinks, setUpdateLinks }) {
  const { reRender, userData } = useContext(UserStore);
  useEffect(() => {
    setUpdateLinks(!updateLinks);
  }, []);

  return (
    <div>
      {userData ? (
        <div className="user-page-content">
          <div className="user-image">
            <img src={userData.image} alt="user Image" />
          </div>
          <div className="user-information">
            <span>
              <h4>FirstName</h4> : {userData.firstName}
            </span>
            <span>
              <h4>LastName</h4> : {userData.lastName}
            </span>
            <div>
              <h4>User Name</h4>:{userData.userName}
            </div>
            <div>
              <h4>userEmail</h4> : {userData.email}
            </div>
            <div>
              <span>
                <h4>pass</h4>:{userData.password}
              </span>
              <span>
                <h4>gender</h4>:{userData.gender}
              </span>
            </div>
            <div>
              <span>
                <h4>city</h4>:{userData.city}
              </span>
              <span>
                <h4>phoneNumber</h4>:{userData.phoneNumber}
              </span>
            </div>
            <div>
              <h4>role</h4>:{userData.role}
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default UserPage;
