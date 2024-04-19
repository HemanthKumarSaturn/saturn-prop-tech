import * as React from "react";
import { useState } from "react";

function Paragraph2({ text }) {
  const [isReadMore, setIsReadMore] = useState(true);

  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  return (
    <div className="mt-8 leading-6 max-md:max-w-full h-fit">
      {isReadMore ? text.slice(0, 400) : text}{" "}
      {text?.length > 400 && (
        <span
          onClick={toggleReadMore}
          className="text-indigo-600 cursor-pointer"
        >
          {isReadMore ? "...Read more" : "Show less"}
        </span>
      )}
      <br />
    </div>
  );
}

export default Paragraph2;
