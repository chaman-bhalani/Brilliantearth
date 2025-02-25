import React from "react";

const BackgroundImage = ({
  imageSrc,
  heading,
  paragraph,
  buttons,
  customClass,
}) => {
  return (
    <div
      className={`image-container ${customClass}`}
      style={{ backgroundImage: `url(${imageSrc})` }}
    >
      <div className="photo-overlay-content">
        <div className="photo-text">
          <h1 className="photo-head">{heading}</h1>
          <p className="photo-pera">{paragraph}</p>
        </div>

        <div className="button-container">
          {buttons.map((btn, index) => (
            <button key={index} className="poster-button">
              {btn.text}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BackgroundImage;
