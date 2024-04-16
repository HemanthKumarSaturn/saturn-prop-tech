import React, { useState } from "react";

const TabButton = ({ children, active, onClick }) => (
  <button
    type="button"
    onClick={onClick}
    className={`flex justify-center px-14 py-5 whitespace-nowrap bg-white border-indigo-600 border-solid text-neutral-600 max-md:px-5 ${
      active
        ? "border-b-[5px]"
        : "border-b-[5px] border-opacity-50 text-opacity-50"
    }`}
  >
    {children}
  </button>
);

function MyComponent() {
  const [activeTab, setActiveTab] = useState("Gallery");

  const tabs = [
    { label: "Gallery", active: activeTab === "Gallery" },
    {
      label: "Project Walkthrough",
      active: activeTab === "Project Walkthrough",
    },
  ];

  const handleTabClick = (label) => setActiveTab(label);

  return (
    <main className="flex flex-col items-center">
      <h1 className="text-4xl font-bold text-black leading-[51.8px] max-md:max-w-full">
        Tangled Up in Green - Gallery
      </h1>
      <nav className="flex gap-5 mt-8 max-w-full text-3xl font-semibold leading-6 text-center capitalize w-[618px] max-md:flex-wrap">
        {tabs.map((tab) => (
          <TabButton
            key={tab.label}
            active={tab.active}
            onClick={() => handleTabClick(tab.label)}
          >
            {tab.label}
          </TabButton>
        ))}
      </nav>
      <img
        loading="lazy"
        src={`path/to/${activeTab
          .replace(/\s+/g, "-")
          .toLowerCase()}-image.jpg`}
        alt={`${activeTab} view`}
        className="self-stretch mt-8 w-full aspect-[2.27] max-md:max-w-full"
      />
    </main>
  );
}
