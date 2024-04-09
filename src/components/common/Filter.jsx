import * as React from "react";

function Filter() {
  return (
    <div className="px-3.5 py-4 rounded-3xl bg-zinc-100">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        <div className="flex flex-col w-[83%] max-md:ml-0 max-md:w-full">
          <div className="flex grow gap-5 justify-between max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
            <div className="flex flex-col justify-center p-3 bg-white rounded-2xl shadow-sm">
              <div className="flex gap-2">
                <div className="flex justify-center items-center px-1.5 w-14 h-14 bg-white bg-opacity-0">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/205eeb2e7c7c8bfc269fa31add5658a4341cab6f86817edecefcf4c669f29712?apiKey=6d29d163b59344eda42474c42f65e83e&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/205eeb2e7c7c8bfc269fa31add5658a4341cab6f86817edecefcf4c669f29712?apiKey=6d29d163b59344eda42474c42f65e83e&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/205eeb2e7c7c8bfc269fa31add5658a4341cab6f86817edecefcf4c669f29712?apiKey=6d29d163b59344eda42474c42f65e83e&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/205eeb2e7c7c8bfc269fa31add5658a4341cab6f86817edecefcf4c669f29712?apiKey=6d29d163b59344eda42474c42f65e83e&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/205eeb2e7c7c8bfc269fa31add5658a4341cab6f86817edecefcf4c669f29712?apiKey=6d29d163b59344eda42474c42f65e83e&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/205eeb2e7c7c8bfc269fa31add5658a4341cab6f86817edecefcf4c669f29712?apiKey=6d29d163b59344eda42474c42f65e83e&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/205eeb2e7c7c8bfc269fa31add5658a4341cab6f86817edecefcf4c669f29712?apiKey=6d29d163b59344eda42474c42f65e83e&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/205eeb2e7c7c8bfc269fa31add5658a4341cab6f86817edecefcf4c669f29712?apiKey=6d29d163b59344eda42474c42f65e83e&"
                    className="aspect-square w-[45px]"
                  />
                </div>
                <div className="flex flex-col self-start mt-1.5 leading-[140%]">
                  <div className="justify-center px-2 py-2 text-sm bg-white bg-opacity-0 text-black text-opacity-80">
                    Total Land Parcel
                  </div>
                  <div className="justify-center px-6 py-2 mt-1 text-base font-semibold text-black bg-white bg-opacity-0 max-md:px-5">
                    115 Acres
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center p-3 bg-white rounded-2xl shadow-sm">
              <div className="flex gap-2">
                <div className="flex justify-center items-center px-1.5 w-14 h-14 bg-white bg-opacity-0">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/f2976e20f7f1c01c1e7e88b2fce948ab358a0625846582227a99ef5072979d3e?apiKey=6d29d163b59344eda42474c42f65e83e&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/f2976e20f7f1c01c1e7e88b2fce948ab358a0625846582227a99ef5072979d3e?apiKey=6d29d163b59344eda42474c42f65e83e&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f2976e20f7f1c01c1e7e88b2fce948ab358a0625846582227a99ef5072979d3e?apiKey=6d29d163b59344eda42474c42f65e83e&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/f2976e20f7f1c01c1e7e88b2fce948ab358a0625846582227a99ef5072979d3e?apiKey=6d29d163b59344eda42474c42f65e83e&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/f2976e20f7f1c01c1e7e88b2fce948ab358a0625846582227a99ef5072979d3e?apiKey=6d29d163b59344eda42474c42f65e83e&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f2976e20f7f1c01c1e7e88b2fce948ab358a0625846582227a99ef5072979d3e?apiKey=6d29d163b59344eda42474c42f65e83e&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/f2976e20f7f1c01c1e7e88b2fce948ab358a0625846582227a99ef5072979d3e?apiKey=6d29d163b59344eda42474c42f65e83e&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/f2976e20f7f1c01c1e7e88b2fce948ab358a0625846582227a99ef5072979d3e?apiKey=6d29d163b59344eda42474c42f65e83e&"
                    className="aspect-square w-[45px]"
                  />
                </div>
                <div className="flex flex-col self-start mt-1.5 leading-[140%]">
                  <div className="justify-center px-5 py-2 text-sm bg-white bg-opacity-0 text-black text-opacity-80">
                    Unit Variants
                  </div>
                  <div className="justify-center py-1.5 mt-1 text-base font-semibold text-black bg-white bg-opacity-0">
                    1800-7200 sq.ft.
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center p-3 bg-white rounded-2xl shadow-sm">
              <div className="flex gap-0">
                <div className="flex flex-col justify-center items-start py-1.5 bg-white bg-opacity-0">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/567325b182558fe284512d229ebeb51b07af15af76a6853a84e469079a1afd94?apiKey=6d29d163b59344eda42474c42f65e83e&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/567325b182558fe284512d229ebeb51b07af15af76a6853a84e469079a1afd94?apiKey=6d29d163b59344eda42474c42f65e83e&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/567325b182558fe284512d229ebeb51b07af15af76a6853a84e469079a1afd94?apiKey=6d29d163b59344eda42474c42f65e83e&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/567325b182558fe284512d229ebeb51b07af15af76a6853a84e469079a1afd94?apiKey=6d29d163b59344eda42474c42f65e83e&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/567325b182558fe284512d229ebeb51b07af15af76a6853a84e469079a1afd94?apiKey=6d29d163b59344eda42474c42f65e83e&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/567325b182558fe284512d229ebeb51b07af15af76a6853a84e469079a1afd94?apiKey=6d29d163b59344eda42474c42f65e83e&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/567325b182558fe284512d229ebeb51b07af15af76a6853a84e469079a1afd94?apiKey=6d29d163b59344eda42474c42f65e83e&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/567325b182558fe284512d229ebeb51b07af15af76a6853a84e469079a1afd94?apiKey=6d29d163b59344eda42474c42f65e83e&"
                    className="w-11 aspect-[0.98]"
                  />
                </div>
                <div className="flex flex-col self-start mt-1.5 leading-[140%]">
                  <div className="justify-center px-7 py-2 text-sm bg-white bg-opacity-0 text-black text-opacity-80 max-md:px-5">
                    Starting Price
                  </div>
                  <div className="justify-center px-1 py-1.5 mt-1 text-base font-semibold text-black bg-white bg-opacity-0">
                    1.16 Cr* Onwards
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center p-3 bg-white rounded-2xl shadow-sm">
              <div className="flex gap-0">
                <div className="flex flex-col justify-center items-start py-1.5 bg-white bg-opacity-0">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/a790eea2cb0c323a2f8b44abd4c819bc2b70064421e044cb9ef0e2e557e3a497?apiKey=6d29d163b59344eda42474c42f65e83e&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/a790eea2cb0c323a2f8b44abd4c819bc2b70064421e044cb9ef0e2e557e3a497?apiKey=6d29d163b59344eda42474c42f65e83e&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a790eea2cb0c323a2f8b44abd4c819bc2b70064421e044cb9ef0e2e557e3a497?apiKey=6d29d163b59344eda42474c42f65e83e&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/a790eea2cb0c323a2f8b44abd4c819bc2b70064421e044cb9ef0e2e557e3a497?apiKey=6d29d163b59344eda42474c42f65e83e&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/a790eea2cb0c323a2f8b44abd4c819bc2b70064421e044cb9ef0e2e557e3a497?apiKey=6d29d163b59344eda42474c42f65e83e&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a790eea2cb0c323a2f8b44abd4c819bc2b70064421e044cb9ef0e2e557e3a497?apiKey=6d29d163b59344eda42474c42f65e83e&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/a790eea2cb0c323a2f8b44abd4c819bc2b70064421e044cb9ef0e2e557e3a497?apiKey=6d29d163b59344eda42474c42f65e83e&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/a790eea2cb0c323a2f8b44abd4c819bc2b70064421e044cb9ef0e2e557e3a497?apiKey=6d29d163b59344eda42474c42f65e83e&"
                    className="w-11 aspect-[0.98]"
                  />
                </div>
                <div className="flex flex-col self-start mt-1.5 leading-[140%]">
                  <div className="justify-center items-start px-7 py-2 text-sm bg-white bg-opacity-0 text-black text-opacity-80 max-md:px-5">
                    Base Price
                  </div>
                  <div className="justify-center items-start px-10 py-2 mt-1 text-base font-semibold text-black whitespace-nowrap bg-white bg-opacity-0 max-md:px-5">
                    6490
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-[17%] max-md:ml-0 max-md:w-full">
          <div className="justify-center self-stretch px-4 py-2.5 my-auto w-full text-2xl font-medium leading-8 text-white bg-indigo-600 rounded-2xl shadow-sm max-md:mt-10">
            Enquire Now
          </div>
        </div>
      </div>
    </div>
  );
}

export default Filter;
