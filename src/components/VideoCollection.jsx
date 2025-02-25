import React from "react";
import "../App";

const VideoCollection = ({ data, className }) => {
  return (
    <section className={`exclusive ${className}`}>
      <div className="e-text">
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
      <div className="sol-video">
        <video
          controls
          autoPlay
          loop
          muted
          playsInline
          className="video-player"
        >
          <source src={data.videoUrl} type="video/mp4" />
        </video>
      </div>
    </section>
  );
};

export default VideoCollection;
