import * as React from "react";
import PrimaryButton from "./PrimaryButton";

const PropertyDetail = ({ detail, icon }) => (
  <div className="flex flex-col justify-center bg-white rounded-2xl shadow-sm">
    <div className="flex items-center justify-center w-fit gap-x-2 p-3">
      <div className="flex justify-center items-center bg-white bg-opacity-0">
        <img src={icon} alt="" className="aspect-square w-[45px]" />
      </div>
      <div className="flex flex-col self-start">
        <div className="justify-center text-sm bg-white bg-opacity-0 text-black text-opacity-80">
          {detail.label}
        </div>
        <div className="justify-center text-base font-semibold text-black bg-white bg-opacity-0">
          {detail.value}
        </div>
      </div>
    </div>
  </div>
);

const PriceDetail = ({ detail, icon }) => (
  <div className="flex flex-col justify-center items-center bg-white rounded-2xl shadow-sm ">
    <div className="flex items-center justify-center w-fit gap-x-2 p-3">
      <div className="flex flex-col justify-center items-center bg-white bg-opacity-0">
        <img src={icon} alt="" className="w-11 aspect-[0.98]" />
      </div>
      <div className="flex flex-col self-start">
        <div className="justify-center text-sm bg-white bg-opacity-0 text-black text-opacity-80">
          {detail.label}
        </div>
        <div className="justify-center text-base font-semibold text-black bg-white bg-opacity-0">
          {detail.value}
        </div>
      </div>
    </div>
  </div>
);

function MyComponent() {
  const propertyDetails = [
    {
      label: "Total Land Parcel",
      value: "115 Acres",
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/205eeb2e7c7c8bfc269fa31add5658a4341cab6f86817edecefcf4c669f29712?apiKey=6d29d163b59344eda42474c42f65e83e&",
    },
    {
      label: "Unit Variants",
      value: "1800-7200 sq.ft.",
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/f2976e20f7f1c01c1e7e88b2fce948ab358a0625846582227a99ef5072979d3e?apiKey=6d29d163b59344eda42474c42f65e83e&",
    },
  ];

  const priceDetails = [
    {
      label: "Starting Price",
      value: "1.16 Cr* Onwards",
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/567325b182558fe284512d229ebeb51b07af15af76a6853a84e469079a1afd94?apiKey=6d29d163b59344eda42474c42f65e83e&",
    },
    {
      label: "Base Price",
      value: "6490",
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/a790eea2cb0c323a2f8b44abd4c819bc2b70064421e044cb9ef0e2e557e3a497?apiKey=6d29d163b59344eda42474c42f65e83e&",
    },
  ];

  return (
    <div
      className="justify-center rounded-t-3xl bg-zinc-100"
      style={{ width: "85vw" }}
    >
      <div className="flex gap-5 items-center justify-center">
        <div
          className="flex flex-col items-center justify-center"
          style={{ height: "7rem" }}
        >
          <div className="flex grow gap-5 justify-between items-center">
            {propertyDetails.map((detail, index) => (
              <PropertyDetail key={index} detail={detail} icon={detail.icon} />
            ))}
            {priceDetails.map((detail, index) => (
              <PriceDetail key={index} detail={detail} icon={detail.icon} />
            ))}
          </div>
        </div>
        <div className="flex flex-col">
          <PrimaryButton sectionEnquired="Filter" />
        </div>
      </div>
    </div>
  );
}

export default MyComponent;
