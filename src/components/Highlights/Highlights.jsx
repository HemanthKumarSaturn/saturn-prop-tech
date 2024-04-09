import React from "react";
import highlightImg from "../../assets/images/highlights.png";
import shakeHandIcon from "../../assets/icons/shakeHand.png";
import apartmentIcon from "../../assets/icons/apartment.png";
import connectionIcon from "../../assets/icons/connection.png";
import locationIcon from "../../assets/icons/location.png";
import routeIcon from "../../assets/icons/route.png";
import stampIcon from "../../assets/icons/stamp.png";
import PrimaryButton from "../common/PrimaryButton";

function Highlights() {
  const mainHead = "Tangled Up in Green - Highlights";
  const paragraph =
    "Escape the city’s clamor and rediscover serenity at Total Environment – Tangled Up In The Green. this exclusive property offers gated villa plots community in North Bangalore, meticulously crafted to be your sanctuary of peace amidst the verdant embrace of nature.";
  const highlights = [
    {
      title: "BMDA Approved",
      icon: shakeHandIcon,
    },
    {
      title: "RERA Approved",
      icon: stampIcon,
    },
    {
      title: "Prime Location",
      icon: locationIcon,
    },
    {
      title: "115 Acre Township",
      icon: routeIcon,
    },
    {
      title: "Upcoming  tech parks",
      icon: apartmentIcon,
    },
    {
      title: "Essential amenities",
      icon: connectionIcon,
    },
  ];
  return (
    <div
      className="flex flex-col mx-auto justify-around gap-3 items-center"
      style={{
        borderRadius: "10px",
        background: "rgba(212, 214, 215, 0.19)",
        height: "35rem",
      }}
    >
      <h2 className="text-2xl font-bold">{mainHead}</h2>
      <p className="font-normal w-3/4 text-gray-500">{paragraph}</p>
      <div className="flex flex-row items-center mx-auto gap-8 w-11/12">
        <img src={highlightImg} style={{ width: "60%", height: "100%" }} />
        <div className="flex flex-col gap-3 items-baseline">
          {highlights?.map((highlight) => (
            <div
              className="flex flex-row items-center gap-3 font-semibold text-xl"
              style={{ width: "240px" }}
              key={highlight?.title}
            >
              <img
                src={highlight?.icon}
                style={{ width: "25px", height: "25px" }}
              />
              <div>{highlight?.title}</div>
            </div>
          ))}
          <PrimaryButton />
        </div>
      </div>
    </div>
  );
}

export default Highlights;
