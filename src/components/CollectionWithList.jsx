import React from "react";
import "../App.css";

const CollectionWithList = ({ data, className }) => {
  return (
    <section className={`exclusive ${className}`}>
      <div className="e-text">
        <h1 className="first">{data.title}</h1>
        <p className="second">{data.description}</p>

        <ul className="item-list">
          {data.listItems &&
            data.listItems.map((item, index) => (
              <li key={index} className="list-item">
                {item}
              </li>
            ))}
        </ul>

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

export default CollectionWithList;
