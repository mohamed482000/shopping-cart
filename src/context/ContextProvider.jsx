import axios from "axios";
import Store from "./Context";
import React, { useEffect, useState } from "react";

function ContextProvider({ children }) {
  const [rerenderShop, setRerenderShop] = useState(false);
  const [dataInCart, setDataInCart] = useState([]);
  const [allData, setAllData] = useState([]);
  const [updataShopData, setUpdataShopData] = useState(false);

  ///// get all shop data
  useEffect(() => {
    axios({
      method: "get",
      url: "https://shopping-cart-data.onrender.com/products",
    }).then((data) => setAllData(data.data));
  }, [updataShopData]);
  // add products to shopping cat
  const addToCartFun = (obj) => {
    const addedOrNot = dataInCart.some((o) => o.id == obj.id);
    if (addedOrNot) {
      const newProducts = dataInCart.map((prod) => {
        if (prod.id == obj.id) {
          prod.qnt++;
        }
        return prod;
      });
      setDataInCart(newProducts);
    } else {
      setDataInCart([...dataInCart, obj]);
    }
  };
  // increase products in shopping cat
  const increaseQnt = (obj) => {
    const newProducts = dataInCart.map((prod) => {
      if (prod.id == obj.id) {
        prod.qnt++;
      }
      return prod;
    });
    setDataInCart(newProducts);
  };
  // decrease products in shopping cat
  const decreaseQnt = (obj) => {
    const newProducts = dataInCart.map((prod) => {
      if (prod.id == obj.id && obj.qnt > 1) {
        prod.qnt--;
      }
      return prod;
    });
    setDataInCart(newProducts);
  };
  // delete products from shopping cat
  const deleteFromCartFun = (obj) => {
    const newProducts = dataInCart.filter((prod) => prod.id !== obj.id);
    setDataInCart(newProducts);
  };

  return (
    <Store.Provider
      value={{
        allData,
        setUpdataShopData,
        dataInCart,
        addToCartFun,
        deleteFromCartFun,
        increaseQnt,
        decreaseQnt,
        rerenderShop,
        setRerenderShop,
      }}
    >
      {children}
    </Store.Provider>
  );
}

export default ContextProvider;
