import * as React from "react";
import PrimaryButton from "../common/PrimaryButton";
import { Tooltip } from "react-tooltip";

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
  return (
    <div
      className="flex gap-1.5 self-start font-semibold text-black hover:cursor-pointer"
      data-tooltip-id="call-tooltip"
      data-tooltip-content="Call this number for instant support"
      data-tooltip-place="left"
    >
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/e4604b052f2dcd52c8bc997b3848b3f7a47290ec3e460a9495dead4f754afb52?apiKey=6d29d163b59344eda42474c42f65e83e&"
        alt=""
        className="shrink-0 aspect-square w-[25px]"
      />
      <div>+91 95605 09669</div>
      <Tooltip id="call-tooltip" />
    </div>
  );
}

function HeadingBar({ overview, amenities, location, specification }) {
  return (
    <div className="flex justify-between bg-white bg-opacity-0 h-20 items-center">
      <div className="flex flex-auto gap-5 justify-around my-auto text-base text-neutral-600 items-center">
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
        <PrimaryButton sectionEnquired="Nav Bar" />
      </div>
    </div>
  );
}

export default HeadingBar;
