import React from "react";
import "../App";

const AboutPoster = ({ imageSrc, heading, paragraph }) => {
  return (
    <div className="image-container">
      <img src={imageSrc} alt="background" className="background-image" />
      <div className="overlay">
        <div className="ab-text">
          <h1 className="ab-head">{heading}</h1>
          <p className="ab-pera">{paragraph}</p>
          <button className="ab-btn">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default AboutPoster;
