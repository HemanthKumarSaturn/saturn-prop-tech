import * as React from "react";

function Paragraph({ text, isReadMore, toggleReadMore, isFirst }) {
  return (
    <div className="text-xl leading-7 h-fit text-left pt-3">
      {text}
      <span onClick={toggleReadMore} className="text-indigo-600 cursor-pointer">
        {isFirst
          ? isReadMore
            ? "...read more"
            : ""
          : isFirst != null
          ? isReadMore
            ? ""
            : " Show less"
          : ""}
      </span>
    </div>
  );
}

export default Paragraph;
