import React from "react";
import { MdOutlineEmail } from "react-icons/md";

function FooterInput() {
  return (
    <div className="footer-items footer-newletter">
      <h4 className="footer-newliter-title text-uppercase">newletter</h4>
      <p>
        be the frist to know about new arrivals,
        <br /> look books, sales & promos!
      </p>
      <div>
        <input type="text" placeholder="Your email " />
        <MdOutlineEmail />
      </div>
    </div>
  );
}

export default FooterInput;
