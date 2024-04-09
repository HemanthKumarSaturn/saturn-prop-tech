import * as React from "react";
import FAQContainerExp from "./FAQContainerExpanded";
import FAQContainerColl from "./FAQContainerCollapsed";

function FAQS() {
  const FAQLIST = [
    {
      serialNo: "1",
      question: "What platforms does ACME payment gateway support?",
      answer: "What platforms does ACME payment gateway support?",
      isExpanded: true,
    },
    {
      serialNo: "2",
      question: "What platforms does ACME payment gateway support?",
      answer: "What platforms does ACME payment gateway support?",
      isExpanded: false,
    },
    {
      serialNo: "3",
      question: "What platforms does ACME payment gateway support?",
      answer: "",
      isExpanded: false,
    },
    {
      serialNo: "4",
      question: "Does ACME provide international payments support?",
      answer: "",
      isExpanded: false,
    },
    {
      serialNo: "5",
      question:
        "What is the price range of Tangled Up In Green of Devanahalli?",
      answer: "",
      isExpanded: false,
    },
    {
      serialNo: "6",
      question:
        "What is the nearest landmark to the Tangled Up In Green residential project?",
      answer: "",
      isExpanded: false,
    },
    {
      serialNo: "7",
      question:
        "What amenities are available at the Tangled Up In Green residential project?",
      answer: "",
      isExpanded: false,
    },
    {
      serialNo: "8",
      question:
        "Is a transportation facility easily available near the Tangled Up In Green residential project?",
      answer: "",
      isExpanded: false,
    },
  ];
  return (
    <div className="flex flex-col">
      <div className="self-center text-5xl font-bold text-black leading-[63px] max-md:max-w-full max-md:text-4xl">
        Tangled Up in Green - Frequent Ask Questions
      </div>
      {FAQLIST.map((FAQ) =>
        FAQ.isExpanded === true ? (
          <FAQContainerExp
            index={FAQ.serialNo}
            question={FAQ.question}
            answer={FAQ.answer}
          />
        ) : (
          <FAQContainerColl index={FAQ.serialNo} question={FAQ.question} />
        )
      )}
    </div>
  );
}

export default FAQS;
