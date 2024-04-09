import * as React from "react";
import IconWithLink from "./IconWithLink";
import PrimaryButton from "./PrimaryButton";

function IconWithLinkContainer() {
  return (
    <div
      style={{ position: "absolute", bottom: "10px", right: "20px" }}
      className="bg-white rounded-3xl flex flex-col gap-4 items-center"
    >
      <div className="text-2xl font-bold leading-8 text-black max-w-[165px]">
        Key Directions
      </div>
      <div className="flex flex-col gap-2">
        <IconWithLink />
        <IconWithLink />
        <IconWithLink />
        <IconWithLink />
        <IconWithLink />
      </div>
      <PrimaryButton />
    </div>
  );
}

export default IconWithLinkContainer;
