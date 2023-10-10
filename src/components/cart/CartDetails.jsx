import React, { useContext } from "react";
import { FaTrashCan } from "react-icons/fa6";
import Store from "../../context/Context";

function CartDetails({ prod }) {
  const { increaseQnt, decreaseQnt, deleteFromCartFun } = useContext(Store);

  return (
    <div className="cartDetails" key={prod.id}>
      <div className="product-img">
        <img src={prod.img} alt={` ${prod.sort} image `} />
      </div>
      <div className="cart-info">
        <div className="product-header">
          <p>{prod.name}</p>
        </div>
        <div className="product-info">
          <h4>${prod.price}</h4>
          <div className="product-buttons">
            <div className="product-button">
              <button onClick={() => decreaseQnt(prod)}>-</button>
              <span>{prod.qnt}</span>
              <button onClick={() => increaseQnt(prod)}>+</button>
            </div>
            <h4>${prod.price * prod.qnt}</h4>
            <button
              onClick={() => deleteFromCartFun(prod)}
              className="product-delete"
            >
              <FaTrashCan />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartDetails;
