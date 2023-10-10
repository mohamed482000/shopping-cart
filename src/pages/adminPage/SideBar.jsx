import React from "react";
import { Link } from "react-router-dom";

function SideBar() {
  return (
    <div className="admin-page-slide-button">
      <ul>
        <li className="text-capitalize">
          <Link to="/adminpage">dashboard</Link>
        </li>
        <li className="text-capitalize">
          <Link to="/adminpage/users">users</Link>
        </li>
        <li className="text-capitalize">
          <Link to="/adminpage/products">products</Link>
        </li>
      </ul>
    </div>
  );
}

export default SideBar;
