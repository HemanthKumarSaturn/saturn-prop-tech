import * as React from "react";
import green01 from "../../assets/gallery/images/green01.jpg";
import Carousel from "../common/Carousel";
import BackGateImage from "../../assets/gallery/images/backgate.jpeg";
import CentralBoulevard from "../../assets/gallery/images/centralyeard.jpeg";
import DrivewayImage from "../../assets/gallery/images/driveaway.jpeg";
import StreetViewImage from "../../assets/gallery/images/streetscape.jpeg";
import StreetscapeImage from "../../assets/gallery/images/streetview.jpg";

function Gallery() {
  const slides = [
    BackGateImage,
    CentralBoulevard,
    DrivewayImage,
    StreetViewImage,
    StreetscapeImage,
  ];
  return (
    <div className="flex flex-col items-center gap-y-11">
      <div className="text-4xl font-bold text-black">
        Tangled Up in Green - Gallery
      </div>
      <div className="flex gap-x-5 text-3xl font-semibold text-center capitalize">
        <div className="justify-center px-14 py-4 whitespace-nowrap bg-white border-indigo-600 border-solid border-b-[5px] text-neutral-600">
          Gallery
        </div>
        <div className="grow justify-center px-3.5 py-4 bg-white border-solid border-b-[5px] border-indigo-600 border-opacity-50 text-neutral-600 text-opacity-50 w-fit">
          Project Walkthrough
        </div>
      </div>
      <div className="w-[75%] m-auto">
        <Carousel slides={slides} />
      </div>
    </div>
  );
}

export default Gallery;
