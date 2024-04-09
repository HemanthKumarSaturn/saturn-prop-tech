import * as React from "react";

function Specification({ title, description }) {
  return (
    <div className="flex gap-3.5 items-start px-5 py-5 bg-white rounded-lg justify-center">
      <div
        className="flex justify-center items-center px-5 mt-1 rounded-full shadow-sm h-[69px] w-[69px]"
        style={{ background: "linear-gradient(#3742FA, #D4D6D7)" }}
      >
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/0201520132664ab690a65668bdb3b13307ecb894da8489e23af020422b796a21?apiKey=6d29d163b59344eda42474c42f65e83e&"
          className="w-9 aspect-square"
        />
      </div>
      <div className="flex flex-col">
        <div className="text-xl font-bold leading-7 text-black">{title}</div>
        <div className="mt-2 text-xs leading-4 text-black text-opacity-80">
          {description}
        </div>
      </div>
    </div>
  );
}

export default Specification;
