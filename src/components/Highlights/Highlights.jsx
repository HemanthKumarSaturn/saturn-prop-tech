import React from "react";
import highlightImg from "../../assets/images/highlights.png";
import shakeHandIcon from "../../assets/icons/shakeHand.png";
import apartmentIcon from "../../assets/icons/apartment.png";
import connectionIcon from "../../assets/icons/connection.png";
import locationIcon from "../../assets/icons/location.png";
import routeIcon from "../../assets/icons/route.png";
import stampIcon from "../../assets/icons/stamp.png";
import PrimaryButton from "../common/PrimaryButton";
import HeadWithPara from "../common/HeadWithPara";
import Paragraph from "../common/Paragraph";
import HighlightsList from "./HighlightsList";

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
      className="flex flex-col mx-auto justify-center gap-y-7 items-center"
      style={{
        borderRadius: "10px",
        background: "rgba(212, 214, 215, 0.19)",
        width: "94%",
        height: "42rem",
      }}
    >
      <HeadWithPara text={mainHead} />
      <div style={{ width: "60.625rem" }}>
        <Paragraph text={paragraph} />
      </div>
      <div
        className="flex flex-row items-center gap-8 h-96 justify-start"
        style={{ width: "68.125rem" }}
      >
        <img src={highlightImg} style={{ width: "65%", height: "100%" }} />
        <HighlightsList />
      </div>
    </div>
  );
}

export default Highlights;
