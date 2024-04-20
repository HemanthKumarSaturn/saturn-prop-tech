import React from "react";
import { useState } from "react";
import { FaArrowCircleRight, FaArrowCircleLeft } from "react-icons/fa";

function Carousel({ slides }) {
  let [current, setCurrent] = useState(0);

  let previousSlide = () => {
    if (current === 0) setCurrent(slides.length - 1);
    else setCurrent(current - 1);
  };

  let nextSlide = () => {
    if (current === slides.length - 1) setCurrent(0);
    else setCurrent(current + 1);
  };

  return (
    <div className="overflow-hidden relative rounded-3xl">
      <div
        className={`flex transition ease-out duration-40 rounded-3xl`}
        style={{
          transform: `translateX(-${current * 100}%)`,
        }}
      >
        {slides.map((s, i) => {
          return (
            <img
              src={s}
              className=" rounded-3xl h-full"
              key={"circle" + i}
              style={{ width: "100%", height: "100%" }}
            />
          );
        })}
      </div>

      <div className="absolute top-0 h-full w-full justify-between items-center flex text-3xl">
        <div className="absolute top-0 h-full w-full justify-between items-center flex text-white px-10 text-3xl">
          <button onClick={previousSlide} style={{ display: "contents" }}>
            <FaArrowCircleLeft />
          </button>
          <button onClick={nextSlide} style={{ display: "contents" }}>
            <FaArrowCircleRight />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
