import * as React from "react";

function FAQContainerExp({ index, question }) {
  return (
    <div className="flex gap-5 px-12 py-5 bg-purple-50 max-md:flex-wrap max-md:px-5">
      <div className="text-3xl font-bold tracking-wide leading-9 text-zinc-400">
        {index}
      </div>
      <div className="flex-1 text-2xl font-medium leading-8 text-black max-md:max-w-full">
        {question}
      </div>
      <div className="flex justify-center items-center px-4 py-2.5 bg-white rounded-3xl max-w-[48px]">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/cadb9d22405244bd233a445a51633dceae810b8f09e30ed8a636a8eb1cf6ddda?apiKey=6d29d163b59344eda42474c42f65e83e&"
          className="w-full aspect-square fill-black"
        />
      </div>
    </div>
  );
}

export default FAQContainerExp;
