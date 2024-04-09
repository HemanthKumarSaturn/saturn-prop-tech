import React from "react";
import BlueHeader from "../common/BlueHeader";
import StrongHeader from "../common/StrongHeader";
import Paragraph from "../common/Paragraph";
import Head from "../common/Head";
import IconListContainer from "../IconListContainer";

function ValueAdded() {
  const headerText = "Unveiling the Added Value at - Tangled Up In Green ";
  const blueText = "Beyond the Plots";
  return (
    <div className="flex flex-col gap-4 items-center">
      <BlueHeader text={blueText} />
      <Head text={headerText} />
      <Paragraph />
      <div className="flex w-full justify-between">
        <IconListContainer />
        <div style={{ width: "55rem", height: "25rem" }}>
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/15e78fbfc7bfbe6aec85776ac801780971710080e0c02e59015bcd36c31ebfee?apiKey=6d29d163b59344eda42474c42f65e83e&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/15e78fbfc7bfbe6aec85776ac801780971710080e0c02e59015bcd36c31ebfee?apiKey=6d29d163b59344eda42474c42f65e83e&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/15e78fbfc7bfbe6aec85776ac801780971710080e0c02e59015bcd36c31ebfee?apiKey=6d29d163b59344eda42474c42f65e83e&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/15e78fbfc7bfbe6aec85776ac801780971710080e0c02e59015bcd36c31ebfee?apiKey=6d29d163b59344eda42474c42f65e83e&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/15e78fbfc7bfbe6aec85776ac801780971710080e0c02e59015bcd36c31ebfee?apiKey=6d29d163b59344eda42474c42f65e83e&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/15e78fbfc7bfbe6aec85776ac801780971710080e0c02e59015bcd36c31ebfee?apiKey=6d29d163b59344eda42474c42f65e83e&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/15e78fbfc7bfbe6aec85776ac801780971710080e0c02e59015bcd36c31ebfee?apiKey=6d29d163b59344eda42474c42f65e83e&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/15e78fbfc7bfbe6aec85776ac801780971710080e0c02e59015bcd36c31ebfee?apiKey=6d29d163b59344eda42474c42f65e83e&"
            className="shadow-sm aspect-[1.56]"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
      </div>
    </div>
  );
}

export default ValueAdded;
