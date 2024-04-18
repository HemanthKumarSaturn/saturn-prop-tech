import * as React from "react";
import IconWithLink from "./IconWithLink";
import PrimaryButton from "./PrimaryButton";
import ContactUsModal from "../ContactUs/ContactUsModal";

function IconWithLinkContainer({ proximities, cta }) {
  return (
    <div
      style={{
        height: "fit-content",
        width: "100%",
      }}
      className="bg-white rounded-3xl flex flex-col gap-4 items-center"
    >
      <div className="text-2xl font-bold leading-8 text-black self-center">
        Key Directions
      </div>
      <div className="flex flex-col gap-2">
        {proximities?.slice(0, 5)?.map((proximity) => (
          <IconWithLink proximity={proximity} />
        ))}
      </div>
      {/* <PrimaryButton sectionEnquired="Location" text={cta} /> */}
      <ContactUsModal sectionEnquired="Location" text={cta} />
    </div>
  );
}

export default IconWithLinkContainer;
