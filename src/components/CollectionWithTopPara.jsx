import React from "react";
import "../App.css";

const CollectionWithTopPara = ({ data, className }) => {
  return (
    <section className={`exclusive ${className}`}>
      <div className="e-text">
        <p className="top-paragraph">{data.topParagraph}</p>

        <h1 className="first">{data.title}</h1>
        <p className="second">{data.description}</p>

        <div className="p-button">
          {data.btnText.map((btnText, index) => (
            <button key={index} className="price-btn1">
              {btnText}
            </button>
          ))}
        </div>
      </div>
      <div className="sol-img">
        <img src={data.imgUrl} alt={data.alt} />
      </div>
    </section>
  );
};

export default CollectionWithTopPara;
