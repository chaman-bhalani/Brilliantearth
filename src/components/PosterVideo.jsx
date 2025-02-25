import React from "react";
import "../App";

const BackgroundVideo = ({ videoSrc }) => {
  return (
    <div className="video-container">
      <video autoPlay loop muted className="background-video">
        <source src={videoSrc} type="video/mp4" />
      </video>
      <div className="overlay-content">
        <div className="text">
          <h1 className="logo-head">Makes Hearts Race</h1>
          <p className="pera">
            Don't miss out on the perfact piece for your Valentine
          </p>
        </div>

        <div className="button-container">
          <button className="b1">Shop valantine's day gifts</button>
          <button className="b2">Shop ready to ship rings</button>
        </div>
      </div>
    </div>
  );
};

export default BackgroundVideo;
