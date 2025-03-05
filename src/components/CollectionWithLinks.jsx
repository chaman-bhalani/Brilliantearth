import React from "react";
import "../App.css";

const CollectionWithLinks = ({ data, className }) => {
  return (
    <section className={`exclusive ${className}`}>
      <div className="e-text">
        {data.sections.map((section, index) => (
          <div key={index} className="section">
            <h2 className="section-head">{section.head}</h2>
            <p className="section-para">{section.para}</p>
            <a href={section.linkUrl} className="section-link">
              {section.linkText}
            </a>
          </div>
        ))}
      </div>
      <div className="sol-img">
        <img src={data.imgUrl} alt={data.alt} />
      </div>
    </section>
  );
};

export default CollectionWithLinks;
