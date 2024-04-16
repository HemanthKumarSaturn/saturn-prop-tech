import * as React from "react";

function IconWithLabel({ URL, title, desc }) {
  return (
    <div
      className="flex flex-row gap-4 text-black justify-center items-center cursor-pointer"
      data-tooltip-id="call-tooltip"
      data-tooltip-html={`<div style="width: 15rem">${desc}</div>`}
      data-tooltip-place="left"
      key={title}
    >
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
