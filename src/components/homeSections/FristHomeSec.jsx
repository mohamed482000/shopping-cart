import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router-dom";

function FristHomeSec() {
  return (
    <section className="frist-home-section ">
      <div className="frist-home-section-content container">
        <h6 className="text-uppercase text-danger">summer collection</h6>
        <h3 className="text-uppercase">fall - winter</h3>
        <h2 className="text-capitalize">collections 2023</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima eos
          nihil excepturi explicabo necessitatibus nobis molestias .
        </p>
        <Link to="shop">
          <button type="button" className="text-uppercase p-3">
            shop now <FaLongArrowAltRight />
          </button>
        </Link>
      </div>
    </section>
  );
}

export default FristHomeSec;
