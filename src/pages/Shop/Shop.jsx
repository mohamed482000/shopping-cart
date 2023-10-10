import React, { useContext, useState, useEffect } from "react";
import "./shop.css";
import ProductComp from "../../components/product/ProductComp";
import Store from "../../context/Context";

function Shop() {
  const { allData, rerenderShop } = useContext(Store);
  const [data, setData] = useState([]);
  useEffect(() => {
    setData([]);
    setTimeout(() => {
      setData(allData);
    }, 800);
  }, [allData, rerenderShop]);
  return (
    <div className="shop-content container">
      {data.length > 0 ? (
        data.map((product) => (
          <ProductComp key={product.id} product={product} />
        ))
      ) : (
        <span className="loader"></span>
      )}
    </div>
  );
}

export default Shop;
