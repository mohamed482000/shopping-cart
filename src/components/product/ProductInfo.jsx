import React, { useContext } from "react";
import ProductRate from "./ProductRate";
import Store from "../../context/Context";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

function ProductInfo({ product }) {
  const navigate = useNavigate();
  const { addToCartFun } = useContext(Store);
  const handleAddToCart = (prodDetails) => {
    if (localStorage.getItem("id")) {
      addToCartFun(prodDetails);
    } else {
      Swal.fire({
        title: "Bro you can't add without login !",
        showCancelButton: true,
        timer: 2000,
        timerProgressBar: true,
        confirmButtonText: "logIn",
      }).then((result) => {
        if (result.isConfirmed) {
          return navigate("/login");
        }
      });
    }
  };
  return (
    <div className="product-info">
      <button
        onClick={() => handleAddToCart({ ...product, qnt: 1 })}
        className="add-to-cart-button text-capitalize"
      >
        add to cart +
      </button>
      <h6 className="product-desc">{product.name}</h6>
      <h5 className="product-sort">{product.sort}</h5>
      <ProductRate rate={product.rate} />
      <h5 className="product-price">
        {product.price}
        <span>$</span>
      </h5>
    </div>
  );
}

export default ProductInfo;
