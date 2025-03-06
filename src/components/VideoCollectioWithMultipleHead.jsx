import React from "react";
import "../App.css";

const CollectionWithVideoAndButtons = ({ data, className }) => {
  return (
    <section className={`exclusive ${className}`}>
      <div className="e-text">
        <h1 className="first">{data.title}</h1>
        {data.sections.map((section, index) => (
          <div key={index} className="section">
            <h2 className="section-head">{section.head}</h2>
            <p className="section-para">{section.para}</p>
            <a href={section.linkUrl} className="section-link">
              {section.linkText}
            </a>
          </div>
        ))}
        <div className="p-button">
          {data.btnText.map((btnText, index) => (
            <button key={index} className="price-btn1">
              {btnText}
            </button>
          ))}
        </div>
      </div>
      <div className="sol-video">
        <video controls autoPlay loop>
          <source src={data.videoUrl} type="video/mp4" />
        </video>
      </div>
    </section>
  );
};

export default CollectionWithVideoAndButtons;
