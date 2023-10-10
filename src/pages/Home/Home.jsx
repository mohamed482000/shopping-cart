import React from "react";
import "./home.css";
import FristHomeSec from "../../components/homeSections/FristHomeSec";
import SecondHomeSec from "../../components/homeSections/SecondHomeSec";

function Home() {
  return (
    <div className="home-content ">
      <FristHomeSec />
      <SecondHomeSec />
    </div>
  );
}

export default Home;
