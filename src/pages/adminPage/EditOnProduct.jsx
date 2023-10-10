import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Store from "../../context/Context";

function Edit() {
  const { id } = useParams();
  const [productWillEdit, setProductWillEdit] = useState({});
  const [img, setImage] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [sort, setSort] = useState("");
  const [rate, setRate] = useState(0);
  const { setUpdataShopData } = useContext(Store);

  useEffect(() => {
    axios({
      method: "get",
      url: `https://shopping-cart-data.onrender.com/products/${id}`,
    }).then((data) => setProductWillEdit(data.data));
  });
  const saveData = (e) => {
    e.preventDefault();
    axios({
      method: "put",
      url: `https://shopping-cart-data.onrender.com/products/${id}`,
      data: { img, name, price, sort, rate },
    }).then(() => setUpdataShopData((prev) => !prev));
  };
  return (
    <div>
      <Form
        className="d-flex justify-content-center flex-column align-items-center"
        onSubmit={(e) => saveData(e)}
      >
        <Form.Group className="mb-3">
          <Form.Label>product image</Form.Label>
          <Form.Control
            type="text"
            value={img}
            placeholder={productWillEdit.img}
            onChange={(e) => setImage(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>product name</Form.Label>
          <Form.Control
            type="text"
            value={name}
            placeholder={productWillEdit.name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>product sort</Form.Label>
          <Form.Control
            type="text"
            value={sort}
            placeholder={productWillEdit.sort}
            onChange={(e) => setSort(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>product price</Form.Label>
          <Form.Control
            type="number"
            value={price}
            placeholder={productWillEdit.price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>rate</Form.Label>
          <Form.Control
            type="number"
            value={rate}
            placeholder={productWillEdit.rate}
            onChange={(e) => setRate(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default Edit;
