import React from "react";
import closesImg from "../../assets/banner/banner-1.jpg";
import shoesImg from "../../assets/banner/banner-3.jpg";
import glasessImg from "../../assets/banner/banner-2.jpg";
import { Link } from "react-router-dom";

function SecondHomeSec() {
  return (
    <section className="second-home-section container">
      <div className="second-home-section-content ">
        <div className="second-section-item">
          <div className="closes-info">
            <h3 className="text-capitalize">clothing</h3>
            <h3 className="text-capitalize">collections 2023</h3>
            <Link to="/shop" className="text-uppercase">
              shop now
            </Link>
          </div>
          <div className="closes-img">
            <img src={closesImg} alt="close image" />
          </div>
        </div>
        <div className="second-section-item">
          <div className="glasses-img">
            <img src={glasessImg} alt="glasses image" />
          </div>
          <div className="shoes-info">
            <h3 className="text-capitalize">shoes spring</h3>
            <h3 className="text-capitalize">2023</h3>
            <Link to="/shop" className="text-uppercase">
              shop now
            </Link>
          </div>
        </div>
        <div className="third-section-item">
          <div className="glasses-info">
            <h3 className="text-capitalize">accessorios</h3>
            <Link to="/shop" className="text-uppercase">
              shop now
            </Link>
          </div>
          <div className="shoes-img">
            <img src={shoesImg} alt="shoes image" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default SecondHomeSec;
