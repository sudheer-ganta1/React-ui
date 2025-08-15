import React from "react";
import LaidesBanner from "../../NewImg/LadiesBanner.gif";
import "../Styles/Banner.css";

const LadiesBanner = () => {
  return (
    <div className="BannerSection">
      <img src={LaidesBanner} alt="img" />
    </div>
  );
};

export default LadiesBanner;
