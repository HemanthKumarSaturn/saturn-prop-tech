import React from "react";

const VideoPlayer = ({ src }) => {
  return (
    <div className="relative">
      <video
        className="w-full  rounded-3xl"
        controls
        src={src}
        type="video/mp4"
        autoPlay
      ></video>
    </div>
  );
};

export default VideoPlayer;
