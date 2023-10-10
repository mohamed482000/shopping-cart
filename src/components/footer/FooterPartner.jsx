import React from "react";
import fristClient from "../../assets/clients/client-1.png";
import secondClient from "../../assets/clients/client-3.png";
import thirdClient from "../../assets/clients/client-4.png";
import fourthClient from "../../assets/clients/client-5.png";

function FooterPartner() {
  return (
    <div className="footer-items footer-partner">
      <h4 className="footer-partner-title text-uppercase">partner</h4>
      <div className="our-partner-imgs">
        <div className="frist-two-partner-img">
          <img src={fristClient} alt="frist client to our company" />
          <img src={secondClient} alt="second client to our company" />
        </div>
        <div className="second-two-partner-img">
          <img src={thirdClient} alt="third client to our company" />
          <img
            src={fourthClient}
            className="sss"
            alt="fourth client to our company"
          />
        </div>
      </div>
    </div>
  );
}

export default FooterPartner;
