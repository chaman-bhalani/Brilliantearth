import React from "react";
import "../App.css";

const CollectionWithFooter = ({ data, className }) => {
  return (
    <section className={`exclusive ${className}`}>
      <div className="e-text">
        <h1 className="first">{data.title}</h1>
        <p className="second">{data.description}</p>
      </div>
      <div className="sol-video">
        <video autoPlay loop muted playsInline>
          <source src={data.videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="footer">
        <p>{data.footerText}</p>
      </div>
    </section>
  );
};

export default CollectionWithFooter;
