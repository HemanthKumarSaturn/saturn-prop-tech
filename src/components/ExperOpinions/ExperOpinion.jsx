import * as React from "react";
import HeadWithPara from "../common/HeadWithPara";

function ExpertOpinion() {
  const headingText = "Expert Opinions on TE Tangled up in Green Plots";
  return (
    <div
      className="flex flex-col px-20 py-14 border border-black border-solid"
      style={{
        width: "74rem",
        margin: "0px auto",
        display: "flex",
        alignItems: "center",
      }}
    >
      <HeadWithPara text={headingText} />
      <div className="mt-14 max-md:mt-10 max-md:mr-2 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow px-9 pb-16 text-white whitespace-nowrap border border-black border-solid leading-[51.8px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
              <div
                className="z-10 justify-center  text-4xl font-bold items-center px-16 py-3.5 mx-7 -mt-4 bg-teal-500 rounded-xl shadow-sm max-md:px-5 max-md:mx-2.5"
                style={{ padding: "0px 94px" }}
              >
                PROS
              </div>
              <div className="shrink-0 mt-14 rounded-3xl border border-grey-900 border-solid shadow-sm h-[92px] max-md:mt-10 max-md:max-w-full" />
              <div className="shrink-0 mt-7 rounded-3xl border border-grey-900 border-solid shadow-sm h-[92px] max-md:max-w-full" />
              <div className="shrink-0 mt-3.5 rounded-3xl border border-grey-900 border-solid shadow-sm h-[92px] max-md:max-w-full" />
              <div className="shrink-0 mt-5 rounded-3xl border border-grey-900 border-solid shadow-sm h-[92px] max-md:max-w-full" />
            </div>
          </div>
          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow px-9 pb-16 text-white whitespace-nowrap border border-black border-solid leading-[51.8px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
              <div
                className="z-10 justify-center  text-4xl font-bold items-center px-16 py-3.5 mx-7 -mt-4 bg-red-500 rounded-xl shadow-sm max-md:px-5 max-md:mx-2.5"
                style={{ padding: "0px 94px" }}
              >
                CONS
              </div>
              <div className="shrink-0 mt-14 rounded-3xl border border-grey-900 border-solid shadow-sm h-[92px] max-md:mt-10 max-md:max-w-full" />
              <div className="shrink-0 mt-7 rounded-3xl border border-grey-900 border-solid shadow-sm h-[92px] max-md:max-w-full" />
              <div className="shrink-0 mt-3.5 rounded-3xl border border-grey-900 border-solid shadow-sm h-[92px] max-md:max-w-full" />
              <div className="shrink-0 mt-5 rounded-3xl border border-grey-900 border-solid shadow-sm h-[92px] max-md:max-w-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExpertOpinion;
