import * as React from "react";

function Icon({ URL, title }) {
  return (
    <div className="flex flex-col text-base font-bold leading-5 text-center max-w-[106px] text-zinc-800">
      <img
        loading="lazy"
        src={URL}
        className="self-center aspect-square w-[42px]"
        alt={title}
      />
      <div className="mt-3.5 w-full">{title}</div>
    </div>
  );
}

export default Icon;
