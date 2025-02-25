import React, { useState } from "react";
import "../styles/ToggleCard.css";

const ToggleCard = ({ data }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="card-container">
      <div
        className="image-section"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img
          src={
            isHovered
              ? data[selectedIndex].hoverUrl
              : data[selectedIndex].imgUrl
          }
          alt="toggle-img"
          className="toggle-image"
        />
      </div>

      <div className="toggle-buttons">
        {data.map((item, index) => (
          <button
            key={index}
            className={`toggle-btn ${selectedIndex === index ? "active" : ""}`}
            onClick={() => setSelectedIndex(index)}
          >
            {item.linkName}
          </button>
        ))}
      </div>

      <div className="footer">
        <p>{data[selectedIndex].footerText}</p>
        <p className="price">{data[selectedIndex].price}</p>
      </div>
    </div>
  );
};

export default ToggleCard;
