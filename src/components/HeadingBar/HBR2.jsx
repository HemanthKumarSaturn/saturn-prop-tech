import * as React from "react";
import PrimaryButton from "../common/PrimaryButton";
import { Tooltip } from "react-tooltip";
import ContactUsModal from "../ContactUs/ContactUsModal";

function NavItem({ text, method }) {
  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <div
      onClick={() => {
        scrollToSection(method);
      }}
      className="self-stretch text-center hover:cursor-pointer hover:text-indigo-700 "
    >
      {text}
    </div>
  );
}

function ContactInfo() {
  const callToolTip = "Contact this number for instant support";
  return (
    <div
      className="flex gap-1.5 self-start font-semibold text-black hover:cursor-pointer"
      data-tooltip-id="call-tooltip"
      data-tooltip-place="left"
      data-tooltip-html={`<div style="width: 15rem">${callToolTip}</div>`}
    >
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/e4604b052f2dcd52c8bc997b3848b3f7a47290ec3e460a9495dead4f754afb52?apiKey=6d29d163b59344eda42474c42f65e83e&"
        alt=""
        className="shrink-0 aspect-square w-[25px]"
      />
      <div>+91 95605 09669</div>
      <Tooltip id="call-tooltip" type="light" />
    </div>
  );
}

function HeadingBar({ overview, amenities, location, specification }) {
  return (
    <div style={{ width: "100%", position: "fixed", zIndex: 9999 }}>
      <div
        style={{ height: "93px", width: "98vw" }}
        className="flex flex-col justify-center px-6 py-2 rounded-3xl border border-solid shadow-sm bg-gray-200 bg-opacity-50 border-zinc-300 leading-[140%] max-md:px-5"
      >
        <div className="flex gap-5 justify-center px-0.5 py-px w-full bg-white bg-opacity-0 max-md:flex-wrap max-md:max-w-full items-center">
          <div className="flex flex-auto gap-5 justify-between my-auto text-base text-neutral-600 max-md:flex-wrap max-md:max-w-full">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/761d31aae2dfa7f389d046e92fe7534c2633ef0609193ab34d6e720e96b49b23?apiKey=6d29d163b59344eda42474c42f65e83e&"
              alt=""
              className="aspect-[8.33] w-[299px] hover:cursor-pointer"
              onClick={() => window.location.reload()}
            />
            <nav className="flex gap-5 items-center px-1 my-auto">
              <NavItem text="Overview" method={overview} />
              <NavItem text="Amenities" method={amenities} />
              <NavItem text="Location" method={location} />
              <NavItem text="Specification" method={specification} />
              <ContactInfo />
            </nav>
            <div className="flex justify-center items-center min-w-48">
              {/* <PrimaryButton sectionEnquired="Nav Bar" text="Enquire Now" /> */}
              <ContactUsModal sectionEnquired="Nav Bar" text="Enquire Now" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeadingBar;
