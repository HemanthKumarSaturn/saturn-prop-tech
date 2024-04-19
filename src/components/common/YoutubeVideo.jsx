import React from "react";
import "./YouTubeVideo.css"; // Import CSS file for styling

function YouTubeVideo() {
  const handleVideoClick = (e) => {
    e.stopPropagation(); // Stop the click event from bubbling up
  };
  return (
    <div className="video-container" onClick={handleVideoClick}>
      <iframe
        className="video-frame  rounded-3xl"
        src="https://www.youtube.com/embed/9Gb_20E8Hc0?si=zKiSpCcHZzXnC2Ge"
        sandbox="allow-scripts allow-same-origin"
        title="Tangled Up In Green | TotalEnvironment | Hebbal"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
        autoPlay
      ></iframe>
    </div>
  );
}

export default YouTubeVideo;
