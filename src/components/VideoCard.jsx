import React from "react";

const VideoCard = ({ videoUrl, alt, footer }) => {
  return (
    <div className="card">
      <video
        src={videoUrl}
        alt={alt}
        autoPlay
        loop
        muted
        playsInline
        className="video-card"
      />
      <div className="footer">{footer}</div>
    </div>
  );
};

export default VideoCard;
