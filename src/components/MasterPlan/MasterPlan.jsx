import * as React from "react";
import HeadWithPara from "../common/HeadWithPara";

function MasterPlan() {
  const headerText = "Tangled Up in Green - Master Plan";
  return (
    <div
      className="flex flex-col items-center"
      style={{ width: "74rem", margin: "0px auto" }}
    >
      <HeadWithPara text={headerText} />
      <img
        loading="lazy"
        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/abbdfdf32d6c6175d498f8954d06f285daa9fd1228c35823d4866c6c909d2902?apiKey=6d29d163b59344eda42474c42f65e83e&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/abbdfdf32d6c6175d498f8954d06f285daa9fd1228c35823d4866c6c909d2902?apiKey=6d29d163b59344eda42474c42f65e83e&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/abbdfdf32d6c6175d498f8954d06f285daa9fd1228c35823d4866c6c909d2902?apiKey=6d29d163b59344eda42474c42f65e83e&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/abbdfdf32d6c6175d498f8954d06f285daa9fd1228c35823d4866c6c909d2902?apiKey=6d29d163b59344eda42474c42f65e83e&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/abbdfdf32d6c6175d498f8954d06f285daa9fd1228c35823d4866c6c909d2902?apiKey=6d29d163b59344eda42474c42f65e83e&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/abbdfdf32d6c6175d498f8954d06f285daa9fd1228c35823d4866c6c909d2902?apiKey=6d29d163b59344eda42474c42f65e83e&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/abbdfdf32d6c6175d498f8954d06f285daa9fd1228c35823d4866c6c909d2902?apiKey=6d29d163b59344eda42474c42f65e83e&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/abbdfdf32d6c6175d498f8954d06f285daa9fd1228c35823d4866c6c909d2902?apiKey=6d29d163b59344eda42474c42f65e83e&"
        className="mt-9 w-full aspect-[2.22] max-md:max-w-full"
      />
    </div>
  );
}

export default MasterPlan;
