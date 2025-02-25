import React from "react";
import Card from "./Cards";
import "../styles/Jewellery.css";
import { jwmData } from "../assets/data";

const JewelryWithMeaning = () => {
  const renderCards = (imageArray) => {
    return imageArray.map((item) => (
      <Card
        key={item.id}
        url={item.imgUrl}
        alt={item.alt}
        footer={item.footer}
        hoverUrl={item.hoverUrl}
      />
    ));
  };

  return (
    <div className="jwl-with-meaning">
      <h1 className="jwm-head">Jewelry with Meaning</h1>
      <div className="jwm-cards">{renderCards(jwmData)}</div>
    </div>
  );
};

export default JewelryWithMeaning;
