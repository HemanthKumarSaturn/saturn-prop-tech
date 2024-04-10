import * as React from "react";
import PrimaryButton from "../common/PrimaryButton";
import Heading from "../common/Heading";
import Paragraph from "../common/Paragraph";

function Vision() {
  const blueHeading = "An Uncompromising Vision";
  const mainHeading = "Total Environment - Tangled Up In Green Plots";
  const paragraphText =
    "Escape the city’s clamor and rediscover serenity at Total Environment – Tangled Up In The Green.This exclusive property offers gated villa plots community in North Bangalore, meticulously craftedto be your sanctuary of peace amidst the verdant embrace of nature.Leave the city’s noise and pollution behind.";
  return (
    <div
      className="flex flex-col items-center gap-3 mx-auto"
      style={{ width: "60.625rem" }}
    >
      <Heading caption={blueHeading} mainHead={mainHeading} />
      <Paragraph text={paragraphText} />
      <PrimaryButton />
    </div>
  );
}

export default Vision;
