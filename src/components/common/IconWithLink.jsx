import React, { useEffect } from "react";
import RailwayTrackIcon from "../../assets/icons/RailwayTrackUp.png";

function IconWithLink({ proximity, setEnd, end }) {
  const setLocation = () => {
    setEnd(proximity.location);
    // console.log({ end });
  };

  return (
    <div
      className="flex gap-5 text-base font-bold leading-5 text-indigo-600 border border-lime-500 border-dashed bg-white bg-opacity-0 cursor-pointer items-center justify-center"
      onClick={setLocation}
    >
      <img
        loading="lazy"
        src={proximity.icon || RailwayTrackIcon}
        className="shrink-0 mt-1.5 w-7 aspect-square"
      />
      <div className="flex-auto my-auto">{proximity.title}</div>
    </div>
  );
}

export default IconWithLink;
