import React, { useContext } from "react";
import Store from "../../context/Context";

function CartTotalPrice() {
  const { dataInCart } = useContext(Store);
  return (
    <div>
      {dataInCart.length > 0
        ? dataInCart
            .map((prod) => prod.price * prod.qnt)
            .reduce((x, y) => x + y)
        : 0}
    </div>
  );
}

export default CartTotalPrice;
