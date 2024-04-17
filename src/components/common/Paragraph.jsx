import * as React from "react";
import { useState } from "react";

function Paragraph({ text }) {
  const [isReadMore, setIsReadMore] = useState(true);

  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  return (
    <div className="text-xl leading-7 text-center h-fit">
      {isReadMore ? text.slice(0, 200) : text}{" "}
      {text?.length > 200 && (
        <span
          onClick={toggleReadMore}
          className="text-indigo-600 cursor-pointer"
        >
          {isReadMore ? "...read more" : "Show less"}
        </span>
      )}
      <br />
    </div>
  );
}

export default Paragraph;
