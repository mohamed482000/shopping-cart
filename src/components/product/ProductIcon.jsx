import React from "react";
import { BsHeart } from "react-icons/bs";
import { BsArrowLeftRight } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
import { BsFillCartDashFill } from "react-icons/bs";
function ProductIcon() {
  return (
    <div className="product-icons">
      <div className="product-top-icons">
        <BsHeart />
        <BsArrowLeftRight />
        <BsSearch />
      </div>
      <div className="product-button-icon">
        <BsFillCartDashFill />
      </div>
    </div>
  );
}

export default ProductIcon;
