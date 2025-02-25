import React from "react";
import "../styles/jewellery.css";

const InfoSection = ({ heading, content }) => {
  return (
    <div className="inf">
      <div className="info">
        <h1 className="info-head">{heading}</h1>
        <p className="info-para">{content}</p>
      </div>
    </div>
  );
};

export default InfoSection;
