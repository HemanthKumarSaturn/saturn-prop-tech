import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import PrimaryButton from "../common/PrimaryButton";

const TextContent = ({ title, description }) => (
  <>
    <h2 className="text-3xl font-medium leading-5 text-indigo-600 max-md:max-w-full">
      {title}
    </h2>
    <p className="mt-6 mr-6 text-3xl font-bold leading-7 text-black max-md:mr-2.5 max-md:max-w-full">
      {description}
    </p>
    <div className="flex flex-col justify-center items-start mt-5 bg-white rounded-[50px] max-md:pr-5 max-md:max-w-full">
      <div className="shrink-0 max-w-full bg-indigo-600 h-[3px] rounded-[50px] w-[316px]" />
    </div>
  </>
);

const InputField = ({ label, value, onChange }) => (
  <div className="w-11/12 justify-center items-start px-5 py-3 mt-9 text-base bg-white rounded-xl text-black text-opacity-70 max-md:pr-5 max-md:max-w-full">
    <label
      htmlFor={`${label.toLowerCase().replace(/\s/g, "")}Input`}
      className="sr-only"
    >
      {label}
    </label>
    <input
      type="text"
      id={`${label.toLowerCase().replace(/\s/g, "")}Input`}
      placeholder={`${label}:`}
      aria-label={label}
      className="w-full bg-transparent outline-none"
      value={value}
      onChange={onChange}
    />
  </div>
);

const Modal = ({ isOpen, onClose, onSubmit, sectionEnquired }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, email, contactNumber, sectionEnquired });
    onClose();
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"; // Disable scrolling
    } else {
      document.body.style.overflow = "auto"; // Enable scrolling
    }
    return () => {
      document.body.style.overflow = "auto"; // Reset scrolling when component unmounts
    };
  }, [isOpen]);

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 ">
          <div className="fixed inset-0 bg-black opacity-50"></div>
          <div className="bg-white rounded-lg p-8 z-50 relative">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
            <TextContent
              title="Get In Touch"
              description="Our sales specialist will call you shortly."
            />
            <form onSubmit={handleSubmit}>
              <InputField
                label="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <InputField
                label="Email ID"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <InputField
                label="Contact Number"
                value={contactNumber}
                onChange={(e) => setContactNumber(e.target.value)}
              />
              <div className="flex justify-center mt-6">
                <button
                  type="submit"
                  className="text-3xl font-medium leading-5 text-indigo-600 whitespace-nowrap rounded-xl border-4 border-indigo-600 border-solid self-center"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

function ContactUsModal({ text, sectionEnquired }) {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const submitEnquiry = async (data) => {
    // Submit logic here
    console.log("Form submitted with:", data);
    // Handle submission logic, e.g., axios post
    try {
      const response = await axios.post(
        "http://localhost:5000/api/addEnquiry",
        data
      );
      setTimeout(function () {
        Swal.fire({
          title: "Wow!",
          text: "Message!",
          type: "success",
        }).then(() => {
          window.location = "redirectURL";
        });
      }, 1000);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <PrimaryButton text={text} openModal={openModal} />
      <Modal
        isOpen={isOpen}
        onClose={closeModal}
        onSubmit={submitEnquiry}
        sectionEnquired={sectionEnquired}
      />
    </>
  );
}

export default ContactUsModal;
