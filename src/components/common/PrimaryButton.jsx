import * as React from "react";
import { useNavigate } from "react-router-dom";

function PrimaryButton({ sectionEnquired, text }) {
  const navigate = useNavigate();
  return (
    <div
      type="button"
      className=" text-white bg-[#FFAC12] rounded  hover:border-solid hover:border-[3px] justify-center px-4 py-2 text-2xl font-medium focus:outline-none hover:bg-white hover:border-black hover:text-black focus:ring-4 focus:ring-purple-300 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 hover:cursor-pointer"
      onClick={() => navigate("/contact-us", { state: { sectionEnquired } })}
      // style={{ background: "#FFAC12", color: "white" }}
    >
      {text}
    </div>
  );
}

export default PrimaryButton;
