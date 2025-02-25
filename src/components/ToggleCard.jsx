import React, { useState } from "react";
import "../styles/ToggleCard.css";

const ToggleCard = ({ data }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div className="card-container">
      <div className="image-section">
        <img
          src={data[selectedIndex].image}
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
      </div>
    </div>
  );
};

export default ToggleCard;
