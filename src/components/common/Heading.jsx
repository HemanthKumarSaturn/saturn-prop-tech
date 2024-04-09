import React from "react";

function Heading({ caption, mainHead }) {
  return (
    <>
      <h4 className="text-blue-700 text-3xl font-medium dark:text-white uppercase">
        {caption}
      </h4>
      <h2 className="text-4xl font-bold dark:text-white uppercase">
        {mainHead}
      </h2>
    </>
  );
}

export default Heading;
