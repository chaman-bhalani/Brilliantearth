import React, { useState } from "react";

const Cards = ({
  id,
  imgUrl,
  hoverUrl,
  alt,
  footer,
  alternateImages = [],
  alternateFooter,
  price,
}) => {
  const [showAlternate, setShowAlternate] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleButtonClick = () => {
    setShowAlternate((prevState) => !prevState);
  };

  const defaultImage =
    showAlternate && alternateImages.length > 0 ? alternateImages[0] : imgUrl;
  const hoverImage =
    showAlternate && alternateImages.length > 1 ? alternateImages[1] : hoverUrl;

  const currentFooter = showAlternate ? alternateFooter || footer : footer;

  return (
    <div className="cards">
      <img
        src={isHovered && hoverImage ? hoverImage : defaultImage || ""}
        alt={alt || "Product Image"}
        onMouseEnter={() => hoverImage && setIsHovered(true)}
        onMouseLeave={() => hoverImage && setIsHovered(false)}
        className="card-image"
      />
      <div className="cards-footer">
        <p>{currentFooter}</p>
        {price && <p className="price">{price}</p>}
      </div>
      <button onClick={handleButtonClick} className="toggle-button">
        {showAlternate ? "Change Color" : "Change Color"}
      </button>
    </div>
  );
};

export default Cards;
