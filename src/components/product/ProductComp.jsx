import React from "react";

import ProductIcon from "./ProductIcon";
import ProductInfo from "./ProductInfo";

function ProductComp({ product }) {
  return (
    <div className="product-cart">
      <div className="product-img">
        <img src={product.img} alt={product.sort} />
      </div>
      <ProductInfo product={product} />
      <ProductIcon product={product} />
    </div>
  );
}

export default ProductComp;
