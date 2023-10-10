import React from "react";
import brandImg from "../../assets/footer-logo.png";
import brandsImg from "../../assets/payment.png";

function FooterBrands() {
  return (
    <div className="footer-items footer-brand">
      <div className="footer-brand-img">
        <img src={brandImg} alt="footer main img" />
      </div>
      <p>
        the customer is at the heart of our unique business model, which
        includes design.
      </p>
      <div className="footer-brands-img">
        <img src={brandsImg} alt="brands you can pay on " />
      </div>
    </div>
  );
}

export default FooterBrands;
