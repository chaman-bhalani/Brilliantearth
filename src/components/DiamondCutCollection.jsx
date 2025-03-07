import React, { useState } from "react";
import "../App.css";
import "../styles/DiamondCutCollection.css";

const DiamondCutCollection = ({ data, className }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const selectedItem = data.items[selectedIndex];

  return (
    <section className={`exclusive ${className}`}>
      <div className="e-text">
        <h1 className="first">{data.title}</h1>
        <p className="second">{selectedItem.description}</p>
        <div className="p-button">
          {data.btnText.map((btnText, index) => (
            <button key={index} className="price-btn1">
              {btnText}
            </button>
          ))}
        </div>
      </div>

      <div className="sol-img">
        <img
          src={selectedItem.imgUrl}
          alt={selectedItem.alt}
          className="diamond-image"
        />

        <div className="slider">
          {data.items.map((item, index) => (
            <div
              key={index}
              className={`slider-node ${
                selectedIndex === index ? "active" : ""
              }`}
              onClick={() => setSelectedIndex(index)}
            ></div>
          ))}
        </div>

        <div className="footer-box">
          <h3>{selectedItem.label}</h3>
          <p>{selectedItem.detail}</p>
        </div>
      </div>
    </section>
  );
};

export default DiamondCutCollection;
