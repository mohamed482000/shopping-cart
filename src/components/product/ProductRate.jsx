import React from "react";
import { BsStarFill } from "react-icons/bs";
import { BsStarHalf } from "react-icons/bs";
import { BsStar } from "react-icons/bs";

function ProductRate({ rate }) {
  return (
    <div className="stars-comp">
      {rate >= 1 ? <BsStarFill /> : rate >= 0.5 ? <BsStarHalf /> : <BsStar />}
      {rate >= 2 ? <BsStarFill /> : rate >= 1.5 ? <BsStarHalf /> : <BsStar />}
      {rate >= 3 ? <BsStarFill /> : rate >= 2.5 ? <BsStarHalf /> : <BsStar />}
      {rate >= 4 ? <BsStarFill /> : rate >= 3.5 ? <BsStarHalf /> : <BsStar />}
      {rate >= 5 ? <BsStarFill /> : rate >= 4.5 ? <BsStarHalf /> : <BsStar />}
    </div>
  );
}

export default ProductRate;
