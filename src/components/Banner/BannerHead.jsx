import * as React from "react";

function BannerHead({ text }) {
  return (
    <h1
      // style={{ color: "#FFA500" }}
      // className="flex flex-wrap gap-5 justify-center px-5 rounded bg-zinc-100 bg-opacity-40 max-md:pr-5"

      className="text-5xl font-semibold text-black uppercase"
    >
      {text}
    </h1>
  );
}

export default BannerHead;
