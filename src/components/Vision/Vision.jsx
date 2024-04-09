import * as React from "react";
import PrimaryButton from "../common/PrimaryButton";

function Vision() {
  return (
    <div className="flex flex-col items-center gap-3 mx-auto">
      <div className="self-center text-3xl font-medium uppercase max-md:max-w-full  text-indigo-600">
        An Uncompromising Vision
      </div>
      <div className="mt-8 text-5xl font-bold text-black uppercase max-md:max-w-full max-md:text-4xl">
        Total Environment - Tangled Up In Green Plots
      </div>
      <div className="mt-8 w-full text-xl leading-7 text-center max-md:max-w-full">
        Escape the city’s clamor and rediscover serenity at Total Environment –
        Tangled Up In The Green.This exclusive property offers gated villa plots
        community in North Bangalore, meticulously craftedto be your sanctuary
        of peace amidst the verdant embrace of nature.Leave the city’s noise and
        pollution behind.{" "}
        <span className="text-indigo-600 underline">Read More</span>
        <span className="text-indigo-600">.</span>
        <br />
      </div>
      <PrimaryButton />
    </div>
  );
}

export default Vision;
