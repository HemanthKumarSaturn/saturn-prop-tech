import * as React from "react";
import BMRDAIcon from "../Icons/BMRDAIcon";
import EssentialsIcon from "../Icons/EssentialsIcon";
import PrimeIcon from "../Icons/PrimeIcon";
import ReraIcon from "../Icons/ReraIcon";
import TownShipIcon from "../Icons/TownShipIcon";
import UpcomingIcon from "../Icons/UpcomingIcon";
import PrimaryButton from "../common/PrimaryButton";

const FeatureItem = ({ children }) => (
  <div className="font-semibold w-fit text-nowrap">{children}</div>
);

const featureItems = [
  {
    title: "BMRDA Approved",
    icon: BMRDAIcon,
  },
  {
    title: "RERA Approved",
    icon: ReraIcon,
  },
  {
    title: "Prime Location",
    icon: PrimeIcon,
  },
  {
    title: "115 Acre Township",
    icon: TownShipIcon,
  },
  {
    title: "Upcoming tech parks",
    icon: UpcomingIcon,
  },
  {
    title: "Essential amenities",
    icon: EssentialsIcon,
  },
];

function HighlightsList() {
  return (
    <div className="text-xl font-light text-black capitalize flex flex-col justify-between items-center h-96">
      <div className="flex flex-col gap-6">
        {featureItems.map((item, index) => (
          <div className="flex flex-row gap-8 items-center">
            <item.icon />
            <FeatureItem key={index}>{item.title}</FeatureItem>
          </div>
        ))}
      </div>
      <PrimaryButton />
    </div>
  );
}

export default HighlightsList;
