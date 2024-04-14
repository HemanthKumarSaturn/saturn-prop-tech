import * as React from "react";

function AboutBuilder() {
  return (
    <div
      className="flex flex-col px-11 pt-12 pb-6 rounded-2xl bg-gray-200 bg-opacity-40 max-md:px-5"
      style={{ width: "74rem", margin: "0px auto" }}
    >
      <div className="self-center text-4xl font-bold text-black leading-[51.8px]">
        About Builder
      </div>
      <div className="mt-7 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[55%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col self-stretch my-auto text-lg max-md:mt-10 max-md:max-w-full">
              <div className="font-semibold leading-[140%] max-md:max-w-full text-indigo-600">
                With just 10,000 rupees and a dream,{" "}
              </div>
              <div className="mt-8 text-2xl font-bold leading-8 text-black max-md:max-w-full">
                Total Environment was founded <br />
                by Kamal Sagar.
              </div>
              <div className="mt-8 leading-6 max-md:max-w-full">
                <span>
                  Over two decades later, Total Environment has delivered more
                  than 4 million square feet to over 1,200 customers across
                  dozens of projects in Bangalore, Hyderabad and Pune. While
                  these numbers demonstrate their scale of operations and our
                  ability to influence modern housing, they only tell one side
                  of the story. What truly moves and inspires Total Environment
                  is the love for design and the joy of giving people a place to
                  proudly call home.
                </span>{" "}
                <span className="text-xs text-indigo-600 underline">
                  Read More
                </span>
                .
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[45%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow justify-center w-full bg-white max-md:mt-5 max-md:max-w-full">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/aeee67acf492c305471a798c34f984bc832abcb9eb968276159f4f2bdf6a3528?apiKey=6d29d163b59344eda42474c42f65e83e&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/aeee67acf492c305471a798c34f984bc832abcb9eb968276159f4f2bdf6a3528?apiKey=6d29d163b59344eda42474c42f65e83e&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/aeee67acf492c305471a798c34f984bc832abcb9eb968276159f4f2bdf6a3528?apiKey=6d29d163b59344eda42474c42f65e83e&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/aeee67acf492c305471a798c34f984bc832abcb9eb968276159f4f2bdf6a3528?apiKey=6d29d163b59344eda42474c42f65e83e&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/aeee67acf492c305471a798c34f984bc832abcb9eb968276159f4f2bdf6a3528?apiKey=6d29d163b59344eda42474c42f65e83e&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/aeee67acf492c305471a798c34f984bc832abcb9eb968276159f4f2bdf6a3528?apiKey=6d29d163b59344eda42474c42f65e83e&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/aeee67acf492c305471a798c34f984bc832abcb9eb968276159f4f2bdf6a3528?apiKey=6d29d163b59344eda42474c42f65e83e&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/aeee67acf492c305471a798c34f984bc832abcb9eb968276159f4f2bdf6a3528?apiKey=6d29d163b59344eda42474c42f65e83e&"
                className="w-full aspect-[1.15] max-md:max-w-full  rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutBuilder;
