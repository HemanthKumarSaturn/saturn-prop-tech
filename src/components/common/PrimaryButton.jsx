import * as React from "react";
import { useNavigate } from "react-router-dom";

function PrimaryButton({ sectionEnquired }) {
  const navigate = useNavigate();
  return (
    <div
      type="button"
      className="text-indigo-600 bg-white rounded-2xl border-indigo-600 border-solid border-[3px] justify-center px-4 py-2 text-2xl font-medium focus:outline-none hover:bg-indigo-600 hover:text-white focus:ring-4 focus:ring-purple-300 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 hover:cursor-pointer"
      onClick={() => navigate("/contact-us", { state: { sectionEnquired } })}
    >
      Enquire Now
    </div>
  );
}

export default PrimaryButton;
