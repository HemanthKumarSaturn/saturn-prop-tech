import * as React from "react";

function IconWithLabel({ URL, title }) {
  return (
    <div className="flex flex-row gap-4 text-black justify-center items-center">
      <img
        loading="lazy"
        src={URL}
        className="shrink-0 aspect-square fill-black"
        style={{ height: "30px" }}
      />
      <div className="text-xl font-semibold">{title}</div>
    </div>
  );
}

export default IconWithLabel;
