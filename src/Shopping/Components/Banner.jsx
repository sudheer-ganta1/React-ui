import React from "react";
import GentsBanner from "../../NewImg/GentsBanner.gif";
import "../Styles/Banner.css";

const Banner = () => {
  return (
    <div className="BannerSection">
      <img src={GentsBanner} alt="img" />
    </div>
  );
};

export default Banner;
