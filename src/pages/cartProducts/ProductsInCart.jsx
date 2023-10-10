import React, { useContext } from "react";
import "./productsInCart.css";

import Store from "../../context/Context";
import CartDetails from "../../components/cart/CartDetails";
import CartPayment from "../../components/cart/CartPayment";

function ProductsInCart() {
  const { dataInCart } = useContext(Store);
  return (
    <div
      className={
        dataInCart.length > 0
          ? "products-in-cart container"
          : "back-background-img container"
      }
    >
      <div className="cart">
        {dataInCart.map((prod) => (
          <CartDetails key={prod.id} prod={prod} />
        ))}
      </div>
      <CartPayment />
    </div>
  );
}

export default ProductsInCart;
