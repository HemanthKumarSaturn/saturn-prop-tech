import React from "react";
import Head from "../common/Head";
import Icon from "../common/Icon";
import PrimaryButton from "../common/PrimaryButton";
import HeadWithPara from "../common/HeadWithPara";

function Amenities({ amenities }) {
  const BASE = "https://cdn.builder.io/api/v1/image/assets/TEMP/";
  const API = "?apiKey=6d29d163b59344eda42474c42f65e83e&";
  const ICONS = [
    {
      endPoint:
        "bc611c0d3afbf1b0db34e1a657ae551c99c49ff440eafe4a0cf817c1923269ca",
      title: "Cycling Track",
    },
    {
      endPoint:
        "f5306f2d1c54f1027c2a6966f4ba3302ee530b96d8ba2f57d79f8be2ceda7a6e",
      title: "Meditation",
    },
    {
      endPoint:
        "ee50605f8e33450903a3976a33c4081c4aebe85258da5730ef12daf1d4a14af0",
      title: "Dog Park",
    },
    {
      endPoint:
        "845372788d91a503c51610d62b00bd6e5481b7ffebac1e7c7c7e4e64ef735eeb",
      title: "Jogging Track",
    },
    {
      endPoint:
        "5bd1b2b685c48c73e1291412e1f2e3e38608696a3a1844316f75cb1e513435af",
      title: "Stepped Seats",
    },
    {
      endPoint:
        "6dace0e4004b2d7091ea5f4b7526778129b769125461992d7fd21632c6b7d14f",
      title: "Eucalyptus Grove",
    },
    {
      endPoint:
        "e2eb405e9eecd50fe06ab28acac6040c813006506d74a12f2877b422128f2453",
      title: "Kid’s Play Area",
    },
    {
      endPoint:
        "573198496a5bf8d4c0662f1347fef2fe3ee0364a1eafaaa821f8bd3699cc54cf",
      title: "Open Play-ground",
    },
    {
      endPoint:
        "34bee912eb69dee79cfde8064d9e40c78d5ed0032a76a3c4c948597868ac830b",
      title: "Reflexology Path",
    },
    {
      endPoint:
        "dbd6dd71f81d3462d8ce2f2c47dfd18a0bc945ac4bae9eae57b802df4a871e95",
      title: "Seating Deck",
    },
  ];
  const headerText = "Tangled Up in Green - Amenities";

  return (
    <div
      className="flex flex-col items-center gap-20 justify-center rounded-lg"
      style={{
        background: "#F7F7F7",
        height: "35rem",
        width: "74rem",
        margin: "0px auto",
      }}
      ref={amenities}
    >
      <HeadWithPara text={headerText} />
      <div className="grid gap-4">
        <div className="grid grid-cols-5 gap-20">
          {ICONS.map((icon) => (
            <Icon
              URL={`${BASE}${icon.endPoint}${API}`}
              title={icon.title}
              key={icon.title}
            />
          ))}
        </div>
      </div>
      <PrimaryButton sectionEnquired="Amenities" />
    </div>
  );
}

export default Amenities;
