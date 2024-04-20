import * as React from "react";

function PrimaryButton({ text, openModal }) {
  return (
    <div
      type="button"
      className=" text-white bg-[#FFAC12] rounded  hover:border-solid hover:border-[3px] justify-center px-4 py-2 text-2xl font-medium focus:outline-none hover:bg-white hover:border-black hover:text-black focus:ring-4 focus:ring-purple-300 mb-2 hover:cursor-pointer"
      onClick={openModal}
    >
      {text}
    </div>
  );
}

export default PrimaryButton;
