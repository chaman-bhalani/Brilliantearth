import React from "react";
import "../styles/Jewellery.css";

const DesignYourJewelry = ({ data, customClass }) => {
  return (
    <div className={`design-your-jwl-container ${customClass}`}>
      {data.map((section, index) => (
        <div key={index} className="design-your-jwl">
          <div className="dyj-image">
            <img src={section.imgUrl} alt={section.alt} className="dyj-img" />
          </div>
          <h1>{section.title}</h1>
          <p>{section.description}</p>
          <div className="dyj-buttons">
            {section.buttons.map((btnText, i) => (
              <button key={i}>{btnText}</button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default DesignYourJewelry;
