import * as React from "react";
import BMRDAIcon from "../Icons/BMRDAIcon";
import EssentialsIcon from "../Icons/EssentialsIcon";
import PrimeIcon from "../Icons/PrimeIcon";
import ReraIcon from "../Icons/ReraIcon";
import TownShipIcon from "../Icons/TownShipIcon";
import UpcomingIcon from "../Icons/UpcomingIcon";
import PrimaryButton from "../common/PrimaryButton";
import ContactUsModal from "../ContactUs/ContactUsModal";

const FeatureItem = ({ children }) => (
  <div className="font-semibold w-fit text-nowrap">{children}</div>
);

let featureItems = [
  {
    title: "BMRDA Approved",
    icon: BMRDAIcon,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, amet.",
  },
  {
    title: "RERA Approved",
    icon: ReraIcon,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, amet.",
  },
  {
    title: "Prime Location",
    icon: PrimeIcon,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, amet.",
  },
  {
    title: "115 Acre Township",
    icon: TownShipIcon,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, amet.",
  },
  {
    title: "Upcoming tech parks",
    icon: UpcomingIcon,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, amet.",
  },
  {
    title: "Essential amenities",
    icon: EssentialsIcon,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, amet.",
  },
];

function HighlightsList({ highlightsListing, highlights, cta }) {
  featureItems = featureItems.map((feature, index) => {
    const highlight = {
      ...feature,
      desc: highlights[index],
      title: highlightsListing[index],
    };
    return highlight;
  });
  return (
    <div className="text-xl font-light text-black capitalize flex flex-col justify-between items-center h-96">
      <div className="flex flex-col gap-6">
        {featureItems.map((item, index) => (
          <div
            className="flex flex-row gap-8 items-center cursor-pointer"
            data-tooltip-id="call-tooltip"
            data-tooltip-html={`<p style="width: 18rem; font-weight: 200">${item?.desc}</p>`}
            data-tooltip-place="left"
            key={item.title}
          >
            <item.icon />
            <FeatureItem key={index}>{item.title}</FeatureItem>
          </div>
        ))}
        <div className="w-48 flex justify-center items-center">
          {/* <PrimaryButton sectionEnquired="Highlights" text={cta} /> */}
          <ContactUsModal sectionEnquired="Highlights" text={cta} />
        </div>
      </div>
    </div>
  );
}

export default HighlightsList;
