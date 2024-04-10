import React from "react";

function Heading({ caption, mainHead }) {
  return (
    <>
      <h4 className="text-blue-700 text-3xl font-medium uppercase">
        {caption}
      </h4>
      {mainHead !== "" && (
        <h2 className="text-4xl font-bold uppercase">{mainHead}</h2>
      )}
    </>
  );
}

export default Heading;
