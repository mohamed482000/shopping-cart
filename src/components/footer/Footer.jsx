import React from "react";
import "./footer.css";

import FooterBrands from "./FooterBrands";
import FooterLinks from "./FooterLinks";
import FooterPartner from "./FooterPartner";
import FooterInput from "./FooterInput";

import { BiCopyright } from "react-icons/bi";

function Footer() {
  return (
    <footer>
      <div className="footer-wrapper">
        <FooterBrands />
        <FooterLinks />
        <FooterPartner />
        <FooterInput />
      </div>
      <div className="copy-right text-capitalize">
        copyright
        <BiCopyright />
        2023 & 2022
      </div>
    </footer>
  );
}

export default Footer;
