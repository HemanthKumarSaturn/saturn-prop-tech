import * as React from "react";

const SiteFeature = ({ icon, title, description }) => (
  <div className="flex grow gap-3.5 items-start px-5 py-5 w-full bg-white rounded-lg max-md:mt-3.5">
    <div className="flex justify-center items-center px-4 rounded-full shadow-sm h-[69px] w-[69px]">
      <img src={icon} alt={title} className="aspect-square w-[37px]" />
    </div>
    <div className="flex flex-col">
      <div className="text-xl font-bold leading-7 text-black">{title}</div>
      <div className="mt-2 text-xs leading-4 text-black text-opacity-80">
        {description}
      </div>
    </div>
  </div>
);

const UtilityFeature = ({ icon, title, description }) => (
  <div className="flex gap-3.5 p-5 bg-white rounded-lg">
    <div className="flex flex-col justify-center self-start">
      <div className="flex justify-center items-center px-4 rounded-full shadow-sm h-[66px] w-[66px]">
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

const siteFeatures = [
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

const utilityFeatures = [
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/06f1607541ed840ede9dcec28a90adf79edf5da6d086e09726b6189bd29115d0?apiKey=6d29d163b59344eda42474c42f65e83e&",
    title: "Power Supply",
    description: "Power connection of 4 kVA and 5kVA",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/4103e5f57a8714c1e1716885707fc8e9c3bfa6ba7a80e1a2daf3a5664f145066?apiKey=6d29d163b59344eda42474c42f65e83e&",
    title: "Rainwater Harvesting",
    description: "Percolation pits shall be provided at regualr intervals.",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/84b583a48af610f50f4648d3eb584d36b223686a932af7fb23dbbca5f47b0521?apiKey=6d29d163b59344eda42474c42f65e83e&",
    title: "Data Network",
    description: "Provision to lay a fibre optic network throughout.",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/88fe8967b552413433fb7760e57f202ad26b821e8d8159c2b7d6e9bfab999df1?apiKey=6d29d163b59344eda42474c42f65e83e&",
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

function MyComponent() {
  return (
    <div className="flex flex-col py-11 bg-lime-50 bg-opacity-20">
      <h1 className="self-center text-4xl font-bold text-black leading-[51.8px] max-md:max-w-full">
        Tangled Up in Green - Specification
      </h1>
      <div className="mt-9 max-md:mr-1.5 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <section className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow pt-2 max-md:mt-8 max-md:max-w-full">
              <h2 className="self-center text-2xl font-medium leading-8 text-black capitalize">
                SITE DEVELOPMENT
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
                      <SiteFeature {...feature} />
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
                      <SiteFeature {...feature} />
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
                      <SiteFeature {...feature} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex gap-5 justify-between max-md:flex-wrap max-md:mt-8">
              <div className="shrink-0 my-auto w-px bg-zinc-300 h-[313px]" />
              <section className="flex flex-col pt-2 pr-3.5 max-md:max-w-full">
                <h2 className="self-center text-2xl font-medium leading-8 text-black capitalize">
                  UTILITIES
                </h2>
                <div className="flex gap-3.5 mt-10 max-md:flex-wrap">
                  {utilityFeatures.slice(0, 2).map((feature, index) => (
                    <UtilityFeature key={index} {...feature} />
                  ))}
                </div>
                <div className="mt-5 max-md:max-w-full">
                  <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                    <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                      <div className="flex flex-col grow">
                        <UtilityFeature {...utilityFeatures[2]} />
                        <div className="flex flex-col px-5 pt-5 pb-2 mt-5 w-full bg-white rounded-lg">
                          <div className="flex gap-2.5">
                            <img
                              src={utilityFeatures[3].icon}
                              alt={utilityFeatures[3].title}
                              className="shrink-0 self-start aspect-square w-[66px]"
                            />
                            <div className="flex flex-col">
                              <div className="text-xl font-bold leading-7 text-black">
                                {utilityFeatures[3].title}
                              </div>
                              <div className="mt-2 text-xs leading-4 text-black text-opacity-80">
                                {utilityFeatures[3].description}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                      <UtilityFeature {...utilityFeatures[4]} />
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyComponent;
