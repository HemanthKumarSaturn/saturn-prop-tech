import * as React from "react";

function IconWithLabel({ URL, title }) {
  return (
    <div className="flex gap-4 text-2xl font-semibold leading-7 text-black">
      <img
        loading="lazy"
        src={URL}
        className="shrink-0 aspect-square fill-black w-[51px]"
      />
      <div className="justify-center py-1.5 my-auto">{title}</div>
    </div>
  );
}

export default IconWithLabel;
