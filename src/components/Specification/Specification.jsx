import React from "react";
import Head from "../common/Head";
import Specification from "../common/Specification";
import SubHead from "../common/SubHead";
import HeadWithPara from "../common/HeadWithPara";

function Specifications() {
  const headerText = "Tangled Up in Green - Specification";
  const subText1 = "SITE DEVELOPMENT";
  const subText2 = "UTILITIES";
  const siteDevelopmentSpecs = [
    {
      icon: {
        src: "https://cdn.builder.io/api/v1/image/assets/TEMP/f8934633b789dba6eeb48e65e1eed904dd45aa5ec7aa358e80be8dfc1e366abc?apiKey=6d29d163b59344eda42474c42f65e83e&",
        alt: "Boundary Walls icon",
      },
      title: "Boundary Walls",
      description: "Boundary walls in masonry or concrete to a height of 1.8m",
    },
    {
      icon: {
        src: "https://cdn.builder.io/api/v1/image/assets/TEMP/69760cd41d0611a3d99b3e646b92f061e23d01c4ecb5f726b07aab4063fe0564?apiKey=6d29d163b59344eda42474c42f65e83e&",
        alt: "Boundary Walls icon",
      },
      title: "Lighting",
      description: "Street lighting with LED lights on MS poles",
    },
    {
      icon: {
        src: "https://cdn.builder.io/api/v1/image/assets/TEMP/290016b95f5371b9e9d014c76fb10a810ea1dce703e4bb7eb1ff1deed2bfafb7?apiKey=6d29d163b59344eda42474c42f65e83e&",
        alt: "Boundary Walls icon",
      },
      title: "Roads",
      description: "Roads built with hand-crafted cobblestones.",
    },
    {
      icon: {
        src: "https://cdn.builder.io/api/v1/image/assets/TEMP/34092cf8375779fcf442a74ea4393b9eaf94e5abfe58fcf0aa875b6b8b389aaa?apiKey=6d29d163b59344eda42474c42f65e83e&",
        alt: "Boundary Walls icon",
      },
      title: "Security System",
      description: "CCTV surveillance in streets and common areas",
    },
    {
      icon: {
        src: "https://cdn.builder.io/api/v1/image/assets/TEMP/949c1b95f20651398890fd6d600d3ad94efbe89578eed6a547728498db224663?apiKey=6d29d163b59344eda42474c42f65e83e&",
        alt: "Boundary Walls icon",
      },
      title: "Landscaping",
      description: "Combination of trees, shrubs and creepers.",
    },
    {
      icon: {
        src: "https://cdn.builder.io/api/v1/image/assets/TEMP/109b9a70cdcfa5c147705d33a2a3a53778990675d71717c266c667f2577b8aea?apiKey=6d29d163b59344eda42474c42f65e83e&",
        alt: "Boundary Walls icon",
      },
      title: "Irrigation",
      description:
        "Sprinklers and a drip irrigation system for landscaped areas.",
    },
  ];
  const utilitiesSpecs = [
    {
      icon: {
        src: "https://cdn.builder.io/api/v1/image/assets/TEMP/06f1607541ed840ede9dcec28a90adf79edf5da6d086e09726b6189bd29115d0?apiKey=6d29d163b59344eda42474c42f65e83e&",
        alt: "Boundary Walls icon",
      },
      title: "Power Supply",
      description: "Power connection of 4 kVA and 5kVA",
    },
    {
      icon: {
        src: "https://cdn.builder.io/api/v1/image/assets/TEMP/4103e5f57a8714c1e1716885707fc8e9c3bfa6ba7a80e1a2daf3a5664f145066?apiKey=6d29d163b59344eda42474c42f65e83e&",
        alt: "Boundary Walls icon",
      },
      title: "Rainwater Harvesting",
      description: "Percolation pits shall be provided at regualr intervals.",
    },
    {
      icon: {
        src: "https://cdn.builder.io/api/v1/image/assets/TEMP/84b583a48af610f50f4648d3eb584d36b223686a932af7fb23dbbca5f47b0521?apiKey=6d29d163b59344eda42474c42f65e83e&",
        alt: "Boundary Walls icon",
      },
      title: "Data Network",
      description: "Provision to lay a fibre optic network throughout.",
    },
    {
      icon: {
        src: "https://cdn.builder.io/api/v1/image/assets/TEMP/88fe8967b552413433fb7760e57f202ad26b821e8d8159c2b7d6e9bfab999df1?apiKey=6d29d163b59344eda42474c42f65e83e&",
        alt: "Boundary Walls icon",
      },
      title: "Water Supply",
      description:
        "Water supply shall be through a combination of overhead storage.",
    },
    {
      icon: {
        src: "https://cdn.builder.io/api/v1/image/assets/TEMP/789229644c04d16e86be7de294685cc0418f21098d74669bfad78ca6711e0a14?apiKey=6d29d163b59344eda42474c42f65e83e&",
        alt: "Boundary Walls icon",
      },
      title: "Sewage Treatment",
      description: "Sewage treatment plant shall be provided.",
    },
  ];
  return (
    <div className="flex flex-col items-center gap-y-7 justify-center">
      <HeadWithPara text={headerText} />
      <div className="grid gap-4">
        <div className="grid grid-rows-1 grid-cols-2 gap-x-[32rem]">
          <SubHead text={subText1} />
          <SubHead text={subText2} />
        </div>
      </div>
      <div className="grid gap-4" style={{ width: "78rem" }}>
        <div className="grid grid-rows-1 grid-cols-2">
          <div className="grid grid-cols-2 gap-4">
            {siteDevelopmentSpecs?.map((spec) => (
              <Specification card={spec} />
            ))}
          </div>
          {/* <div className="bg-zinc-300 max-w-[1px] min-h-[313px]"></div> */}
          <div className="grid grid-cols-2 gap-4">
            {utilitiesSpecs?.map((spec) => (
              <Specification card={spec} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Specifications;
