import * as React from "react";
import PrimaryButton from "../common/PrimaryButton";
import Heading from "../common/Heading";
import Paragraph from "../common/Paragraph";
import ParagraphNoReadMore from "../common/ParagraphWithoutReadMore";
import { useState } from "react";

function Vision({ overview, jsonData }) {
  const { fold2 } = jsonData;
  const { heading, subHeading, body1p1, body1p2, body1p3, cta } = fold2;
  const [isReadMore, setIsReadMore] = useState(true);

  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  return (
    <div
      className="flex flex-col items-center gap-y-11 mx-auto"
      style={{ width: "60.625rem" }}
      ref={overview}
    >
      <Heading caption={heading} mainHead={subHeading} />
      <div className="inline">
        <ParagraphNoReadMore
          text={body1p1}
          isReadMore={isReadMore}
          toggleReadMore={toggleReadMore}
          isFirst={true}
        />
        {!isReadMore && (
          <>
            <ParagraphNoReadMore text={body1p2} />
            <ParagraphNoReadMore
              text={body1p3}
              isReadMore={isReadMore}
              toggleReadMore={toggleReadMore}
              isFirst={false}
            />
          </>
        )}
        {/* <span
          onClick={toggleReadMore}
          className="text-indigo-600 cursor-pointer"
        >
          {isReadMore ? "...read more" : "Show less"}
        </span> */}
      </div>
      <PrimaryButton sectionEnquired="Vision" text={cta} />
    </div>
  );
}

export default Vision;
