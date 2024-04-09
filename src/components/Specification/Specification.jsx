import React from "react";
import Head from "../common/Head";
import Specification from "../common/Specification";
import SubHead from "../common/SubHead";

function Specifications() {
  const headerText = "Tangled Up in Green - Specification";
  const subText1 = "SITE DEVELOPMENT";
  const subText2 = "UTILITIES";
  const siteDevelopmentSpecs = [
    {
      title: "Roads",
      description: "Roads built with hand-crafted cobblestones. ",
    },
    {
      title: "Boundary Walls",
      description: "Boundary walls in masonry or concrete to a height of 1.8m",
    },
    {
      title: "Landscaping",
      description: "Combination of trees, shrubs and creepers.",
    },
    {
      title: "Lighting",
      description: "Street lighting with LED lights on MS poles",
    },
    {
      title: "Irrigation",
      description:
        "Sprinklers and a drip irrigation system for landscaped areas.",
    },
    {
      title: "Security System",
      description: "CCTV surveillance in streets and common areas",
    },
  ];
  const utilitiesSpecs = [
    {
      title: "Power Supply",
      description: "Power connection of 4 kVA and 5kVA",
    },
    {
      title: "Rainwater Harvesting",
      description: "Percolation pits shall be provided at regualr intervals.",
    },
    {
      title: "Data Network",
      description: "Provision to lay a fibre optic network throughout.",
    },
    {
      title: "Sewage Treatment",
      description: "Sewage treatment plant shall be provided.",
    },
    {
      title: "Water Supply",
      description:
        "Water supply shall be through a combination of overhead storage.",
    },
  ];
  return (
    <div className="flex flex-col items-center gap-20">
      <Head text={headerText} />
      <div className="grid gap-4">
        <div className="grid grid-rows-1 grid-cols-2 gap-4">
          <div className="grid grid-cols-2 gap-4">
            {/* <SubHead text={subText1} /> */}
            {siteDevelopmentSpecs?.map((spec) => (
              <Specification
                title={spec.title}
                description={spec.description}
              />
            ))}
          </div>
          <div className="grid grid-cols-2 gap-4">
            {/* <SubHead text={subText2} /> */}
            {utilitiesSpecs?.map((spec) => (
              <Specification
                title={spec.title}
                description={spec.description}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Specifications;
