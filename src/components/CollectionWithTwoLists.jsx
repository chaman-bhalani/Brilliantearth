import React from "react";
import "../App.css";

const CollectionWithTwoList = ({ data, className }) => {
  return (
    <section className={`exclusive ${className}`}>
      <div className="e-text">
        <h1 className="first">{data.title}</h1>
        <p className="second">{data.description1}</p>

        <ul className="item-list">
          {data.listItems &&
            data.listItems.map((item, index) => (
              <li key={index} className="list-item">
                {item}
              </li>
            ))}
        </ul>

        <p className="second">{data.description2}</p>
        <ol className="ordered-list">
          {data.orderedListItems &&
            data.orderedListItems.map((item, index) => (
              <li key={index} className="ordered-list-item">
                {item}
              </li>
            ))}
        </ol>

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

export default CollectionWithTwoList;
