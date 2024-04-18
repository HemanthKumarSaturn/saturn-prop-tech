import React, { useState } from "react";
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
import ParagraphNoReadMore from "../common/ParagraphWithoutReadMore";

function Highlights({ jsonData }) {
  const { fold2, fold3 } = jsonData;
  const { heading2, body2p1, body2p2, highlights } = fold2;
  const { highlightsListing, cta } = fold3;
  const mainHead = "Tangled Up in Green - Highlights";
  const paragraph =
    "Escape the city’s clamor and rediscover serenity at Total Environment – Tangled Up In The Green. this exclusive property offers gated villa plots community in North Bangalore, meticulously crafted to be your sanctuary of peace amidst the verdant embrace of nature.";
  const icons = [
    shakeHandIcon,
    stampIcon,
    locationIcon,
    routeIcon,
    apartmentIcon,
    connectionIcon,
  ];
  const [isReadMore, setIsReadMore] = useState(true);

  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <div
      className="flex flex-col mx-auto gap-y-11 items-center"
      style={{
        borderRadius: "10px",
        background: "rgba(212, 214, 215, 0.19)",
        width: "94%",
        // minHeight: "46rem",
        justifyContent: "center",
        padding: "4rem 0",
      }}
    >
      <HeadWithPara text={heading2} />
      <div style={{ width: "60.625rem" }} className="inline">
        <ParagraphNoReadMore
          text={body2p1}
          isReadMore={isReadMore}
          toggleReadMore={toggleReadMore}
          isFirst={true}
        />
        {!isReadMore && (
          <ParagraphNoReadMore
            text={body2p2}
            isReadMore={isReadMore}
            toggleReadMore={toggleReadMore}
            isFirst={false}
          />
        )}
        {/* <Paragraph text={body2} /> */}
      </div>
      <div
        className="flex flex-row items-center gap-8 h-96 justify-start"
        style={{ width: "68.125rem" }}
      >
        <img src={highlightImg} style={{ width: "65%", height: "100%" }} />
        <HighlightsList
          highlightsListing={highlightsListing}
          highlights={highlights}
          cta={cta}
        />
      </div>
    </div>
  );
}

export default Highlights;
