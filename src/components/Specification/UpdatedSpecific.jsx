import * as React from "react";

const Feature = ({ icon, title, description }) => (
  <div className="flex gap-3.5 p-5 bg-white rounded-lg">
    <div className="flex flex-col justify-center self-start">
      <div className="flex justify-center items-center px-4 rounded-full shadow-sm   min-h-[69px] h-[66px] w-[66px] bg-gradient-to-r from-[#989EF9] to-[#D4D6D7]">
        <img src={icon} alt={title} className="aspect-square w-[35px]" />
      </div>
    </div>
    <div className="flex flex-col">
      <div className="text-xl font-bold leading-7 text-black">{title}</div>
      <div className="mt-2 text-xs leading-4 text-black text-opacity-80">
        {description}
      </div>
    </div>
  </div>
);

const MyComponent = ({ specification, jsonData }) => {
  const { fold9 } = jsonData;
  const { heading, leftSide, siteDevelopment, rightSide, utilities } = fold9;

  let siteFeatures = [
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/f8934633b789dba6eeb48e65e1eed904dd45aa5ec7aa358e80be8dfc1e366abc?apiKey=6d29d163b59344eda42474c42f65e83e&",
      title: "Boundary Walls",
      description: "Boundary walls in masonry or concrete to a height of 1.8m",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/69760cd41d0611a3d99b3e646b92f061e23d01c4ecb5f726b07aab4063fe0564?apiKey=6d29d163b59344eda42474c42f65e83e&",
      title: "Lighting",
      description: "Street lighting with LED lights on MS poles",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/290016b95f5371b9e9d014c76fb10a810ea1dce703e4bb7eb1ff1deed2bfafb7?apiKey=6d29d163b59344eda42474c42f65e83e&",
      title: "Roads",
      description: "Roads built with hand-crafted cobblestones.",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/34092cf8375779fcf442a74ea4393b9eaf94e5abfe58fcf0aa875b6b8b389aaa?apiKey=6d29d163b59344eda42474c42f65e83e&",
      title: "Security System",
      description: "CCTV surveillance in streets and common areas",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/949c1b95f20651398890fd6d600d3ad94efbe89578eed6a547728498db224663?apiKey=6d29d163b59344eda42474c42f65e83e&",
      title: "Landscaping",
      description: "Combination of trees, shrubs and creepers.",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/109b9a70cdcfa5c147705d33a2a3a53778990675d71717c266c667f2577b8aea?apiKey=6d29d163b59344eda42474c42f65e83e&",
      title: "Irrigation",
      description:
        "Sprinklers and a drip irrigation system for landscaped areas.",
    },
  ];

  siteFeatures = siteFeatures.map((feature, index) => {
    const updatedFeature = {
      ...feature,
      title: siteDevelopment[index].quality,
      description: siteDevelopment[index].desc,
    };
    return updatedFeature;
  });

  let utilityFeatures = [
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/06f1607541ed840ede9dcec28a90adf79edf5da6d086e09726b6189bd29115d0?apiKey=6d29d163b59344eda42474c42f65e83e&",
      title: "Power Supply",
      description: "Power connection of 4 kVA and 5kVA",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/52edc2aba0dea6db72601332062cde9f6f7056c7082adc37bc68cf281bd0ea5a?apiKey=6d29d163b59344eda42474c42f65e83e&",
      title: "Rainwater Harvesting",
      description: "Percolation pits shall be provided at regualr intervals.",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/84b583a48af610f50f4648d3eb584d36b223686a932af7fb23dbbca5f47b0521?apiKey=6d29d163b59344eda42474c42f65e83e&",
      title: "Data Network",
      description: "Provision to lay a fibre optic network throughout.",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/64caedbbe36cfb88d2cc1496b2cf3b6a01b45034da25d648ffcbb4fcd115c0b9?apiKey=6d29d163b59344eda42474c42f65e83e&",
      title: "Water Supply",
      description:
        "Water supply shall be through a combination of overhead storage.",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/789229644c04d16e86be7de294685cc0418f21098d74669bfad78ca6711e0a14?apiKey=6d29d163b59344eda42474c42f65e83e&",
      title: "Sewage Treatment",
      description: "Sewage treatment plant shall be provided.",
    },
  ];
  utilityFeatures = utilityFeatures.map((feature, index) => {
    const updatedFeature = {
      ...feature,
      title: utilities[index].quality,
      description: utilities[index].desc,
    };
    return updatedFeature;
  });

  return (
    <div
      className="flex flex-col pb-11 bg-lime-50 bg-opacity-20"
      ref={specification}
    >
      <h1 className="self-center text-4xl font-bold text-black leading-[51.8px] max-md:max-w-full">
        {heading}
      </h1>
      <div className="mt-9 max-md:mr-1.5 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <section className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <h2 className="self-center text-2xl font-medium leading-8 text-black capitalize">
              {leftSide}
            </h2>
            <div className="mt-10 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                {siteFeatures.slice(0, 2).map((feature, index) => (
                  <div
                    key={index}
                    className={`flex flex-col ${
                      index === 0 ? "w-6/12" : "ml-5 w-6/12"
                    } max-md:ml-0 max-md:w-full`}
                  >
                    <Feature {...feature} />
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-5 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                {siteFeatures.slice(2, 4).map((feature, index) => (
                  <div
                    key={index}
                    className={`flex flex-col ${
                      index === 0 ? "w-6/12" : "ml-5 w-6/12"
                    } max-md:ml-0 max-md:w-full`}
                  >
                    <Feature {...feature} />
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-5 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                {siteFeatures.slice(4).map((feature, index) => (
                  <div
                    key={index}
                    className={`flex flex-col ${
                      index === 0 ? "w-6/12" : "ml-5 w-6/12"
                    } max-md:ml-0 max-md:w-full`}
                  >
                    <Feature {...feature} />
                  </div>
                ))}
              </div>
            </div>
          </section>
          <section className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <h2 className="self-center text-2xl font-medium leading-8 text-black capitalize">
              {rightSide}
            </h2>
            <div className="mt-10 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                {utilityFeatures.slice(0, 2).map((feature, index) => (
                  <div
                    key={index}
                    className={`flex flex-col ${
                      index === 0 ? "w-6/12" : "ml-5 w-6/12"
                    } max-md:ml-0 max-md:w-full`}
                  >
                    <Feature {...feature} />
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-5 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                {utilityFeatures.slice(2, 4).map((feature, index) => (
                  <div
                    key={index}
                    className={`flex flex-col ${
                      index === 0 ? "w-6/12" : "ml-5 w-6/12"
                    } max-md:ml-0 max-md:w-full`}
                  >
                    <Feature {...feature} />
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-5 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                {utilityFeatures.slice(4).map((feature, index) => (
                  <div
                    key={index}
                    className={`flex flex-col ${
                      index === 0 ? "w-6/12" : "ml-5 w-6/12"
                    } max-md:ml-0 max-md:w-full`}
                  >
                    <Feature {...feature} />
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default MyComponent;
