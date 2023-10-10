import React, { useContext, useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import axios from "axios";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import SideBar from "./SideBar";
import Store from "../../context/Context";
import Swal from "sweetalert2";
import DashBoardStore from "../../context/dashBoard/DashBoardContext";

function ProductsPage() {
  const { products, setUpdateUsersAndProd } = useContext(DashBoardStore);
  const { setUpdataShopData } = useContext(Store);

  ///delete products
  const deleteProduct = (id) => {
    axios({
      method: "delete",
      url: `https://shopping-cart-data.onrender.com/products/${id}`,
    }).then(() => {
      setUpdataShopData((prev) => !prev);
      setUpdateUsersAndProd((prev) => !prev);
    });
    Swal.fire({
      icon: "success",
      title: "Product Deleted",
      timer: 1000,
      timerProgressBar: true,
      showConfirmButton: false,
    });
  };
  return (
    <div className="products-page">
      <SideBar />
      <h4 className="text-uppercase text-center text-primary">products</h4>
      <Table container striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>product</th>
            <th>price</th>
            <th>operations</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id} className="product">
              <td className="product-img">
                <img src={product.img} alt={`img ${product.name}`} />
              </td>
              <td>$ {product.price}</td>
              <td className="product-buttons">
                <Link to={`/admin/edit/${product.id}`}>
                  <Button variant="primary">view</Button>
                </Link>
                <Link to={`/adminpage/products/editonproduct/${product.id}`}>
                  <Button variant="warning">Edit</Button>
                </Link>
                <Button
                  variant="danger"
                  onClick={() => deleteProduct(product.id)}
                >
                  delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default ProductsPage;
