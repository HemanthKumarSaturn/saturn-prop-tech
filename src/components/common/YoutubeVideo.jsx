import React from "react";

function YouTubeVideo() {
  return (
    <div className="relative">
      <iframe
        className="w-full  rounded-3xl"
        width="860"
        height="484"
        src="https://www.youtube.com/embed/9Gb_20E8Hc0?si=zKiSpCcHZzXnC2Ge"
        sandbox="allow-scripts allow-same-origin"
        title="Tangled Up In Green | TotalEnvironment | Hebbal"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </div>
  );
}

export default YouTubeVideo;
