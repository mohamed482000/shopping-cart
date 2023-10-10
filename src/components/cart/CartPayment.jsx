import React from "react";
import { BsCreditCard } from "react-icons/bs";
import CartTotalPrice from "../../components/cart/CartTotalPrice";
function CartPayment() {
  return (
    <div className="payment">
      <h5 className="text-uppercase">cart total</h5>
      <div className="payment-info">
        <span>
          <CartTotalPrice />
        </span>
        <BsCreditCard />
      </div>
      <button className="text-capitalize">pay</button>
    </div>
  );
}

export default CartPayment;
