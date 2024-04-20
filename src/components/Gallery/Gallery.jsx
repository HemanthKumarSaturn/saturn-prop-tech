import React, { useState, useRef } from "react";
import green01 from "../../assets/gallery/images/green01.jpg";
import Carousel from "../common/Carousel";
import BackGateImage from "../../assets/gallery/images/backgate.jpeg";
import CentralBoulevard from "../../assets/gallery/images/centralyeard.jpeg";
import DrivewayImage from "../../assets/gallery/images/driveaway.jpeg";
import StreetViewImage from "../../assets/gallery/images/streetscape.jpeg";
import StreetscapeImage from "../../assets/gallery/images/streetview.jpg";
import VideoPlayer from "../common/VideoPlayer";
import Vid from "../../assets/gallery/videos/banner-video.mp4";
import YouTubeVideo from "../common/YoutubeVideo";

function Gallery() {
  const [isGallery, setIsGallery] = useState(true);
  const slides = [
    BackGateImage,
    CentralBoulevard,
    DrivewayImage,
    StreetViewImage,
    StreetscapeImage,
  ];

  const ref = useRef(null);

  const setGalleryTab = () => {
    setIsGallery(true);
    if (ref.current)
      ref.current.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  const setVideoTab = () => {
    setIsGallery(false);
    if (ref.current)
      ref.current.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <div className="flex flex-col items-center gap-y-11">
      <div className="text-4xl font-bold text-black">
        Tangled Up in Green - Gallery
      </div>
      <div className="flex gap-x-5 text-3xl font-semibold text-center capitalize">
        <div
          className={
            isGallery === true
              ? "justify-center px-3.5 py-4 whitespace-nowrap bg-white border-indigo-600 border-solid border-b-[5px] text-neutral-600 cursor-pointer hover:bg-gray-300"
              : "grow justify-center px-3.5 py-4 bg-white border-solid border-b-[5px] border-indigo-600 border-opacity-50 text-neutral-600 text-opacity-50 w-fit cursor-pointer hover:bg-gray-300"
          }
          type="button"
          onClick={setGalleryTab}
        >
          Gallery
        </div>
        <div
          className={
            isGallery === true
              ? "grow justify-center px-3.5 py-4  bg-white border-solid border-b-[5px] border-indigo-600 border-opacity-50 text-neutral-600 text-opacity-50 w-fit cursor-pointer hover:bg-gray-300"
              : "justify-center px-3.5 py-4 whitespace-nowrap bg-white border-indigo-600 border-solid border-b-[5px] text-neutral-600 cursor-pointer hover:bg-gray-300"
          }
          type="button"
          onClick={setVideoTab}
        >
          Project Walkthrough
        </div>
      </div>
      <div className="max-w-[75%] w-full m-auto" ref={ref}>
        {isGallery ? <Carousel slides={slides} /> : <YouTubeVideo />}
      </div>
    </div>
  );
}

export default Gallery;
