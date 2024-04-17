import * as React from "react";
// import Head from "../common/Head";
import IconWithLinkContainer from "../common/IconWithLinkContainer";
import HeadWithPara from "../common/HeadWithPara";
import Map from "../common/Map/Map";

function Location({ location, jsonData }) {
  const { fold4 } = jsonData;
  const { heading, proximities, cta } = fold4;
  const headerText = "Tangled Up in Green - Location";
  return (
    <div
      className="flex flex-col mx-auto justify-around gap-y-11 items-center rounded-lg"
      style={{ position: "relative", width: "74rem", margin: "0px auto" }}
      ref={location}
    >
      <HeadWithPara text={heading} />
      <Map proximities={proximities} cta={cta} />
      {/* <img
        loading="lazy"
        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/366ef58d453a8a75d99a33c181b6ed87dcfe9320fddc4b093e5cbd01fcd515f6?apiKey=6d29d163b59344eda42474c42f65e83e&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/366ef58d453a8a75d99a33c181b6ed87dcfe9320fddc4b093e5cbd01fcd515f6?apiKey=6d29d163b59344eda42474c42f65e83e&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/366ef58d453a8a75d99a33c181b6ed87dcfe9320fddc4b093e5cbd01fcd515f6?apiKey=6d29d163b59344eda42474c42f65e83e&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/366ef58d453a8a75d99a33c181b6ed87dcfe9320fddc4b093e5cbd01fcd515f6?apiKey=6d29d163b59344eda42474c42f65e83e&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/366ef58d453a8a75d99a33c181b6ed87dcfe9320fddc4b093e5cbd01fcd515f6?apiKey=6d29d163b59344eda42474c42f65e83e&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/366ef58d453a8a75d99a33c181b6ed87dcfe9320fddc4b093e5cbd01fcd515f6?apiKey=6d29d163b59344eda42474c42f65e83e&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/366ef58d453a8a75d99a33c181b6ed87dcfe9320fddc4b093e5cbd01fcd515f6?apiKey=6d29d163b59344eda42474c42f65e83e&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/366ef58d453a8a75d99a33c181b6ed87dcfe9320fddc4b093e5cbd01fcd515f6?apiKey=6d29d163b59344eda42474c42f65e83e&"
        className="w-full aspect-[2.17] rounded-lg"
      /> */}
      {/* <IconWithLinkContainer /> */}
    </div>
  );
}

export default Location;
