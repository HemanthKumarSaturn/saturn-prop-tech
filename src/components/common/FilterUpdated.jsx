import React from "react";
import { useNavigate } from "react-router-dom";

const InfoCard = ({ icon, title, value }) => {
  return (
    <div className="flex flex-col justify-center bg-white rounded">
      <div className="flex items-center justify-center w-fit gap-x-2 p-3">
        <div className="flex justify-center items-center bg-white bg-opacity-0">
          <img src={icon} alt="" className="aspect-square w-[45px]" />
        </div>
        <div className="flex flex-col self-start">
          <div className="justify-center text-sm bg-white bg-opacity-0 text-black text-opacity-80">
            {title}
          </div>
          <div className="justify-center text-base font-semibold text-black bg-white bg-opacity-0">
            {value}
          </div>
        </div>
      </div>
    </div>
  );
};

const PriceCard = ({ icon, title, value }) => {
  return (
    <div className="flex flex-col justify-center items-center bg-white rounded shadow-sm ">
      <div className="flex items-center justify-center w-fit gap-x-2 p-3">
        <div className="flex flex-col justify-center items-center bg-white bg-opacity-0">
          <img src={icon} alt="" className="w-11 aspect-[0.98]" />
        </div>
        <div className="flex flex-col self-start">
          <div className="justify-center text-sm bg-white bg-opacity-0 text-black text-opacity-80">
            {title}
          </div>
          <div className="justify-center text-base font-semibold text-black bg-white bg-opacity-0">
            {value}
          </div>
        </div>
      </div>
    </div>
  );
};

const FilterUpdated = () => {
  const infoCardData = [
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/205eeb2e7c7c8bfc269fa31add5658a4341cab6f86817edecefcf4c669f29712?apiKey=6d29d163b59344eda42474c42f65e83e&",
      title: "Total Land Parcel",
      value: "115 Acres",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/f2976e20f7f1c01c1e7e88b2fce948ab358a0625846582227a99ef5072979d3e?apiKey=6d29d163b59344eda42474c42f65e83e&",
      title: "Unit Variants",
      value: "1800-7200 sq.ft.",
    },
  ];
  const priceCardData = [
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/567325b182558fe284512d229ebeb51b07af15af76a6853a84e469079a1afd94?apiKey=6d29d163b59344eda42474c42f65e83e&",
      title: "Starting Price",
      value: "1.16 Cr* Onwards",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/a790eea2cb0c323a2f8b44abd4c819bc2b70064421e044cb9ef0e2e557e3a497?apiKey=6d29d163b59344eda42474c42f65e83e&",
      title: "Base Price",
      value: "6490",
    },
  ];
  const sectionEnquired = "Filter";
  const navigate = useNavigate();

  return (
    <div
      className="flex flex-wrap gap-5 justify-center px-5 rounded bg-zinc-100 bg-opacity-40 max-md:pr-5"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "6rem",
      }}
    >
      {infoCardData.map((card, index) => (
        <InfoCard
          key={index}
          icon={card.icon}
          title={card.title}
          value={card.value}
        />
      ))}
      {priceCardData.map((card, index) => (
        <PriceCard
          key={index}
          icon={card.icon}
          title={card.title}
          value={card.value}
        />
      ))}
      <div
        className="justify-center px-5 py-4 my-auto text-2xl font-medium leading-8 text-white border border-solid bg-neutral-900 border-zinc-500 hover:cursor-pointer"
        type="button"
        onClick={() => navigate("/contact-us", { state: { sectionEnquired } })}
      >
        Enquire Now
      </div>
    </div>
  );
};

export default FilterUpdated;
