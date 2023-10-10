import React, { useContext, useEffect } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import axios from "axios";
import SideBar from "./SideBar";
import Swal from "sweetalert2";
import DashBoardStore from "../../context/dashBoard/DashBoardContext";

function UsersPage() {
  const { users, setUpdateUsersAndProd } = useContext(DashBoardStore);

  useEffect(() => {}, []);
  ////remove and add user
  const ramoveAndAddUser = (product) => {
    if (product.userName !== "mohamedmagdy") {
      if (product.role === "admin") {
        axios({
          method: "patch",
          url: `https://shopping-cart-data.onrender.com/users/${product.id}`,
          data: { role: "member" },
        }).then(() => setUpdateUsersAndProd((prev) => !prev));
      } else {
        axios({
          method: "patch",
          url: `https://shopping-cart-data.onrender.com/users/${product.id}`,
          data: { role: "admin" },
        }).then(() => setUpdateUsersAndProd((prev) => !prev));
      }
    } else {
      Swal.fire({
        icon: "error",
        title: "Bro you can't remove the real admin !",
        timer: 1500,
        timerProgressBar: true,
        showConfirmButton: false,
      });
    }
  };
  return (
    <div className="users-page">
      <SideBar />
      <h4 className="text-uppercase text-center text-primary">users</h4>
      <Table className="container" striped bordered hover variant="dark">
        <thead>
          <tr>
            <th className="text-capitalize">user name</th>
            <th className="text-capitalize">role</th>
            <th className="text-capitalize">operations (just design )</th>
          </tr>
        </thead>
        <tbody>
          {users.map((product) => (
            <tr key={product.id} className="product">
              <td>{product.userName}</td>
              <td>{product.role}</td>
              <td className="product-buttons">
                <Button variant="primary">view</Button>
                <Button variant="warning">Edit</Button>
                <Button variant="danger">delete</Button>
                {product.role === "admin" ? (
                  <Button
                    onClick={() => ramoveAndAddUser(product)}
                    className="background"
                  >
                    remove admin
                  </Button>
                ) : (
                  <Button
                    onClick={() => ramoveAndAddUser(product)}
                    variant="success"
                  >
                    make admin
                  </Button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default UsersPage;
