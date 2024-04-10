import * as React from "react";

function Paragraph({ text }) {
  return (
    <div className="text-xl leading-7 text-center">
      {text} <span className="text-indigo-600 underline">Read More</span>
      <span className="text-indigo-600">.</span>
      <br />
    </div>
  );
}

export default Paragraph;
