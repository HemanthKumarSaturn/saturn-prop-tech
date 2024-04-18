import * as React from "react";
import IconWithLabel from "./common/IconWithLabel";
import PrimaryButton from "./common/PrimaryButton";

function IconListContainer({ qualities }) {
  const BASE = "https://cdn.builder.io/api/v1/image/assets/TEMP/";
  const API = "?apiKey=6d29d163b59344eda42474c42f65e83e&";
  let ICON_LIST = [
    {
      title: "Intimate Clusters",
      endPoint:
        "113957d6ae797ee40462cbce4a79c846b84e48f5747809d2eca2a443faa390a4",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, repellat!",
    },
    {
      title: "Cobbled Streets",
      endPoint:
        "6ce8413feeb3e120a0f58255c4796dca6df65fb2021efc32ff7556e82a105cfc",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, repellat!",
    },
    {
      title: "Central Boulevard",
      endPoint:
        "d68387a47a9ee90041253570c069a7aa98b5528a7c5b3c4fd3de81db4c290517",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, repellat!",
    },
    {
      title: "Cycling Track",
      endPoint:
        "40705cf9e5e4b648368357b5656140fc30fea36f352a651b6ece899c29e69ce6",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, repellat!",
    },
    {
      title: "Tree Museum",
      endPoint:
        "0972828cbd224d5d1f8729add91359c5d14ce7d3fe59dcdc54daae53b1b4a5bf",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, repellat!",
    },
  ];
  ICON_LIST = ICON_LIST.map((ICON, index) => {
    const icon = {
      ...ICON,
      title: qualities[index].quality,
      desc: qualities[index].desc,
    };
    return icon;
  });
  return (
    <div className="flex flex-col justify-center items-center h-72">
      <div className="flex flex-col font-semibold leading-7 text-black gap-4 items-baseline">
        {ICON_LIST.map((ICON) => (
          <IconWithLabel
            title={ICON.title}
            URL={`${BASE}${ICON.endPoint}${API}`}
            key={ICON.endPoint}
            desc={ICON.desc}
          />
        ))}
      </div>
    </div>
  );
}

export default IconListContainer;
