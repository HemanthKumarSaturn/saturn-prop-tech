import React, { useState } from "react";
import BlueHeader from "../common/BlueHeader";
import StrongHeader from "../common/StrongHeader";
import Paragraph from "../common/Paragraph";
import Head from "../common/Head";
import IconListContainer from "../IconListContainer";
import HeadWithPara from "../common/HeadWithPara";
import Heading from "../common/Heading";
import ParagraphNoReadMore from "../common/ParagraphWithoutReadMore";
import FeaturesList from "../common/Bullet";

function ValueAdded({ jsonData }) {
  const [isReadMore, setIsReadMore] = useState(true);

  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  const blueText = "Beyond the Plots";
  const { fold5, fold6 } = jsonData;
  const { heading, body, why, qualities } = fold5;
  const { amenities } = fold6;
  return (
    <div
      className="flex flex-col gap-y-11 items-center rounded-lg"
      style={{
        background: "#F4F4F4",
        // height: "48rem",
        width: "74rem",
        margin: "0px auto",
        padding: "3rem 0",
      }}
    >
      <Heading caption={blueText} mainHead="" />
      <HeadWithPara text={heading} />
      <div style={{ width: "60.625rem" }} className="inline">
        <ParagraphNoReadMore
          text={body}
          isReadMore={isReadMore}
          toggleReadMore={toggleReadMore}
          isFirst={true}
        />
        {!isReadMore && <ParagraphNoReadMore text={why} />}
        {!isReadMore && (
          <FeaturesList
            qualities={qualities}
            isReadMore={isReadMore}
            toggleReadMore={toggleReadMore}
            isFirst={false}
          />
        )}
      </div>
      <div
        className="flex w-full justify-between items-center"
        style={{ width: "58rem" }}
      >
        <IconListContainer qualities={amenities} />
        <div style={{ width: "40rem", height: "25rem" }}>
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/15e78fbfc7bfbe6aec85776ac801780971710080e0c02e59015bcd36c31ebfee?apiKey=6d29d163b59344eda42474c42f65e83e&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/15e78fbfc7bfbe6aec85776ac801780971710080e0c02e59015bcd36c31ebfee?apiKey=6d29d163b59344eda42474c42f65e83e&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/15e78fbfc7bfbe6aec85776ac801780971710080e0c02e59015bcd36c31ebfee?apiKey=6d29d163b59344eda42474c42f65e83e&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/15e78fbfc7bfbe6aec85776ac801780971710080e0c02e59015bcd36c31ebfee?apiKey=6d29d163b59344eda42474c42f65e83e&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/15e78fbfc7bfbe6aec85776ac801780971710080e0c02e59015bcd36c31ebfee?apiKey=6d29d163b59344eda42474c42f65e83e&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/15e78fbfc7bfbe6aec85776ac801780971710080e0c02e59015bcd36c31ebfee?apiKey=6d29d163b59344eda42474c42f65e83e&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/15e78fbfc7bfbe6aec85776ac801780971710080e0c02e59015bcd36c31ebfee?apiKey=6d29d163b59344eda42474c42f65e83e&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/15e78fbfc7bfbe6aec85776ac801780971710080e0c02e59015bcd36c31ebfee?apiKey=6d29d163b59344eda42474c42f65e83e&"
            className="shadow-sm aspect-[1.56]   rounded-lg"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
      </div>
    </div>
  );
}

export default ValueAdded;
