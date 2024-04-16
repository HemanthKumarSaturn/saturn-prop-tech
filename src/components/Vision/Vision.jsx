import * as React from "react";
import PrimaryButton from "../common/PrimaryButton";
import Heading from "../common/Heading";
import Paragraph from "../common/Paragraph";

function Vision({ overview, jsonData }) {
  const { fold2 } = jsonData;
  const { heading, subHeading, body, cta } = fold2;

  return (
    <div
      className="flex flex-col items-center gap-y-7 mx-auto"
      style={{ width: "60.625rem" }}
      ref={overview}
    >
      <Heading caption={heading} mainHead={subHeading} />
      <Paragraph text={body} />
      <PrimaryButton sectionEnquired="Vision" text={cta} />
    </div>
  );
}

export default Vision;
