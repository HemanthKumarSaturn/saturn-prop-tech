import * as React from "react";
import { Plus } from "react-feather";

function FAQList() {
  const initialFaqData = [
    {
      question: "Where is Tangled Up In Green located?",
      answer:
        "Tangled Up In Green is a total environment development in Devanahalli, Doddaballapur road, <br /> North Bangalore.",
      isOpened: true,
    },
    {
      question:
        "Do I need to pay to Instapay even when there is no transaction going on in my business?",
      answer:
        "Tangled Up In Green is a total environment development in Devanahalli, Doddaballapur road, <br /> North Bangalore.",
      isOpened: false,
    },
    {
      question: "What platforms does ACME payment gateway support?",
      answer:
        "Tangled Up In Green is a total environment development in Devanahalli, Doddaballapur road, <br /> North Bangalore.",
      isOpened: false,
    },
    {
      question: "Does ACME provide international payments support?",
      answer:
        "Tangled Up In Green is a total environment development in Devanahalli, Doddaballapur road, <br /> North Bangalore.",
      isOpened: false,
    },
    {
      question:
        "What is the price range of Tangled Up In Green of Devanahalli?",
      answer:
        "Tangled Up In Green is a total environment development in Devanahalli, Doddaballapur road, <br /> North Bangalore.",
      isOpened: false,
    },
    {
      question:
        "What is the nearest landmark to the Tangled Up In Green residential project?",
      answer:
        "Tangled Up In Green is a total environment development in Devanahalli, Doddaballapur road, <br /> North Bangalore.",
      isOpened: false,
    },
    {
      question:
        "What amenities are available at the Tangled Up In Green residential project?",
      answer:
        "Tangled Up In Green is a total environment development in Devanahalli, Doddaballapur road, <br /> North Bangalore.",
      isOpened: false,
    },
    {
      question:
        "Is a transportation facility easily available near the Tangled Up In Green residential project?",
      answer:
        "Tangled Up In Green is a total environment development in Devanahalli, Doddaballapur road, <br /> North Bangalore.",
      isOpened: false,
    },
  ];
  const [faqData, setFaqData] = React.useState(initialFaqData);
  return (
    <div
      className="flex flex-col justify-center items-center gap-4 bg-purple-50 rounded-2xl"
      style={{
        width: "74rem",
        margin: "0px auto",
        display: "flex",
        alignItems: "center",
        height: "fit-content",
        padding: "3rem 0",
      }}
    >
      <h1 className="self-center text-4xl font-bold text-black leading-[51.8px] max-md:max-w-full">
        Tangled Up in Green - Frequent Ask Questions
      </h1>
      {faqData.map((item, index) =>
        item?.isOpened ? (
          <FaqItem
            index={index + 1}
            question={faqData[0].question}
            answer={faqData[0].answer}
            setFaqData={setFaqData}
            faqItem={item}
          />
        ) : (
          <FaqItemShort
            key={index}
            index={index + 1}
            question={item.question}
            faqItem={item}
            setFaqData={setFaqData}
          />
        )
      )}
    </div>
  );
}

function FaqItem({ index, question, answer, setFaqData, faqItem }) {
  const [isOpen, setIsOpen] = React.useState(true);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
    faqItem.isOpened = false;
    setFaqData((prevFAQ) => [...prevFAQ]);
  };

  return (
    <div
      className="flex gap-5 px-16 py-14 mt-9 bg-purple-100 max-md:flex-wrap max-md:px-5 max-md:max-w-full"
      style={{ width: "100%" }}
    >
      <div className="self-start text-3xl font-bold tracking-wide leading-9 text-zinc-400">
        {index.toString().padStart(2, "0")}
      </div>
      <div className="flex flex-col flex-1 justify-center pt-1 pb-0.5 max-md:max-w-full">
        <div className="flex gap-4 max-md:flex-wrap">
          <h2 className="flex-1 self-start text-2xl font-bold leading-8 text-black max-md:max-w-full">
            {question}
          </h2>
          {isOpen && (
            <button
              className="flex justify-center items-center px-3.5 w-12 h-12 bg-black rounded-3xl"
              onClick={toggleOpen}
            >
              <img
                loading="lazy"
                src={
                  "https://cdn.builder.io/api/v1/image/assets/TEMP/430529c837a7a7b60e57f1a68075543fc8ef7b8f4d7d1861780d81a985fc65ef?apiKey=6d29d163b59344eda42474c42f65e83e&"
                }
                alt=""
                className="w-5 aspect-square fill-white"
              />
            </button>
          )}
        </div>
        {isOpen && (
          <p
            className="text-xl leading-7 text-black max-md:max-w-full"
            dangerouslySetInnerHTML={{ __html: answer }}
          ></p>
        )}
      </div>
    </div>
  );
}

function FaqItemShort({ index, question, setFaqData, faqItem }) {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
    faqItem.isOpened = true;
    setFaqData((prevFAQ) => [...prevFAQ]);
  };

  return (
    <div
      className="flex gap-5 px-12 py-5 mt-1.5 bg-purple-50 max-md:flex-wrap max-md:px-5 max-md:max-w-full w-full cursor-pointer"
      onClick={toggleOpen}
    >
      <div className="text-3xl font-bold tracking-wide leading-9 text-zinc-400">
        {index.toString().padStart(2, "0")}
      </div>
      <h2 className="flex-1 text-2xl font-medium leading-8 text-black max-md:max-w-full text-left">
        {question}
      </h2>
      <Plus color="black" size={38} />
    </div>
  );
}

export default FAQList;
