import * as React from "react";

function FAQContainerExp({ index, question, answer }) {
  return (
    <div className="flex gap-5 self-stretch px-16 pt-14 pb-6 bg-purple-100 max-md:flex-wrap max-md:px-5">
      <div className="self-start text-3xl font-bold tracking-wide leading-9 text-zinc-400">
        {index}
      </div>
      <div className="flex flex-col flex-1 justify-center pt-1 pb-0.5 max-md:max-w-full">
        <div className="flex gap-4 max-md:flex-wrap">
          <div className="flex-1 self-start text-2xl font-bold leading-8 text-black max-md:max-w-full">
            {question}
          </div>
          <div className="flex justify-center items-center px-3.5 w-12 h-12 bg-black rounded-3xl">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/430529c837a7a7b60e57f1a68075543fc8ef7b8f4d7d1861780d81a985fc65ef?apiKey=6d29d163b59344eda42474c42f65e83e&"
              className="w-5 aspect-square fill-white"
            />
          </div>
        </div>
        <div className="text-xl leading-7 text-black max-md:max-w-full">
          {answer}
        </div>
      </div>
    </div>
  );
}

export default FAQContainerExp;
