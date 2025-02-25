import React from "react";
import { useState } from "react";

const Card = ({ url, alt, hoverUrl,footer }) => {
  const [imageSrc, setImageSrc] = useState(url);

  const handleMouseEnter = () => {
    if (hoverUrl) {
      setImageSrc(hoverUrl);
    }
  };

  const handleMouseLeave = () => {
    setImageSrc(url);
  };
  return (
    <div
      className="card"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img src={imageSrc} alt={alt} />
      <div className="footer">{footer}</div>
    </div>
  );
};

export default Card;
