import React from "react";
import "../App.css";

const Logo = ({ logoSrc, altText }) => {
  return (
    <div className="logo-container">
      <img src={logoSrc} alt={altText} className="logo-image" />
    </div>
  );
};

export default Logo;
