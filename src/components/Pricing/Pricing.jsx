import * as React from "react";
import CapitalBlue from "../common/CapitalBlue";
import ContactUsModal from "../ContactUs/ContactUsModal";
import PricingTable from "./PricingTable";

function Pricing() {
  const caption = "Plot Spec & Pricing";
  const mainHead = "Tangled Up in Green, Devanahalli Land Price";
  const sqft7200 = [
    "46,728,000",
    "6,840,000",
    "225,000",
    "1,271,700",
    "55,064,700",
  ];
  const data = [
    { title: "11,682,000" },
    { title: "11,682,000" },
    { title: "13,629,000" },
    { title: "15,576,000" },
    { title: "17,523,000" },
    { title: "20,768,000" },
    { title: "23,364,000" },
    { title: "32,450,000" },
    { title: "46,728,000" },
    { title: "1,710,000" },
    { title: "1,710,000" },
    { title: "1,710,000" },
    { title: "1,995,000" },
    { title: "2,280,000" },
    { title: "2,565,000" },
    { title: "3,040,000" },
    { title: "3,420,000" },
    { title: "4,750,000" },
    { title: "6,840,000" },
    { title: "225,000" },
    { title: "225,000" },
    { title: "225,000" },
    { title: "225,000" },
    { title: "225,000" },
    { title: "225,000" },
    { title: "225,000" },
    { title: "225,000" },
    { title: "225,000" },
    { title: "225,000" },
    { title: "225,000" },
    { title: "225,000" },
    { title: "348,300" },
    { title: "399,6000" },
    { title: "450,900" },
    { title: "502,200" },
    { title: "587,700" },
    { title: "656,100" },
    { title: "895,500" },
    { title: "1,271,700" },
    { title: "1,271,700" },
    { title: "1,271,700" },
    { title: "13,965,300" },
    { title: "16,248,600" },
    { title: "18,531,900" },
    { title: "20,815,200" },
    { title: "24,620,700" },
    { title: "27,665,100" },
    { title: "38,320,500" },
    { title: "55,064,700" },
    { title: "46,728,000" },
  ];
  return (
    <div className="flex flex-col items-center gap-y-11">
      <CapitalBlue caption={caption} mainHead={mainHead} />
      <PricingTable data={data} />
      <div className="text-base font-bold leading-5 text-black">
        ***PLC & Registration Charges Extra
      </div>
      <ContactUsModal text="Enquire Now" sectionEnquired="Pricing" />
    </div>
  );
}

export default Pricing;
