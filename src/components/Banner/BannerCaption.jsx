import * as React from "react";

function BannerCaption({ text }) {
  return (
    <h1
      // style={{ color: "#FFAC12" }}
      className="text-3xl font-medium text-black"
    >
      {text}
    </h1>
  );
}

export default BannerCaption;
