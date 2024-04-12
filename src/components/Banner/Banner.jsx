import React from "react";
import BannerCaption from "./BannerCaption";
import BannerHead from "./BannerHead";
import PrimaryButton from "../common/PrimaryButton";
import Filter from "../common/Filter";

function Banner() {
  return (
    <div
      style={{
        backgroundImage:
          "url(https://cdn.builder.io/api/v1/image/assets/TEMP/abf422d88a7326565f89a01b2d7c7ce016caf4edb3a33a0151f3e9717135a60a?apiKey=6d29d163b59344eda42474c42f65e83e&)",
        width: "98.6vw",
        height: "88vh",
        aspectRatio: "1.82",
        backgroundSize: "cover",
        // backgroundRepeat: "no-repeat",
      }}
      className="flex flex-col items-baseline px-20 justify-center"
    >
      <div className="flex flex-col gap-6 items-baseline">
        <BannerCaption />
        <BannerHead />
        <PrimaryButton />
      </div>
    </div>
  );
}

export default Banner;
