import React from "react";
import "../App.css";

const BackgroundVideoWithLogo = ({ videoSrc, logoSrc, className }) => {
  return (
    <div className={`video-container ${className}`}>
      <video autoPlay loop muted className="background-video">
        <source src={videoSrc} type="video/mp4" />
      </video>
      <div className="overlay-content">
        <img src={logoSrc} alt="Company Logo" className="logo-image" />
        <h1 className="logo-head">JEWELRY REDEFINED</h1>
        <p className="pera">
          We are pioneers. We are Disruptors. We are innovators. Join us for
          transforming the jewelry industry for good.
        </p>
      </div>
    </div>
  );
};

export default BackgroundVideoWithLogo;
