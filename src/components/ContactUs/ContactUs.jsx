import * as React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

const TextContent = ({ title, description }) => (
  <>
    <h2 className="text-3xl leading-5 text-indigo-600 max-md:max-w-full">
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

function ContactUs() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [contactNumber, setContactNumber] = React.useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const submitEnquiry = async (
    companyName,
    userName,
    userEmail,
    userMobile,
    sectionEnquired
  ) => {
    const payload = {
      companyName,
      userName,
      userEmail,
      userMobile,
      sectionEnquired,
    };
    try {
      const response = await axios.post(
        "http://localhost:5000/api/addEnquiry",
        payload
      );
      console.log({ response });
    } catch (err) {
      console.error(err);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    const sectionEnquired = location?.state?.sectionEnquired;
    console.log({ sectionEnquired });
    console.log("Form submitted with:", { name, email, contactNumber });
    submitEnquiry(
      "Total Environment",
      name,
      email,
      contactNumber,
      sectionEnquired
    );
    navigate("/");
  };

  return (
    <div
      className=""
      style={{
        display: "flex",
        justifyContent: "center",
        // alignItems: "center",
        margin: 0,
        padding: 0,
      }}
    >
      <div style={{ width: "50%" }}>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/7c7f5d5b2c8bc8544aa807087448adb8aca990e97df9394a69830fd480996fb8?apiKey=6d29d163b59344eda42474c42f65e83e&"
          alt=""
          className="aspect-[1.11]   rounded-2xl"
          style={{ width: "100%", height: "100%" }}
        />
      </div>
      <div
        style={{
          width: "50%",
          paddingLeft: "2rem",
          paddingleft: "2rem",
          height: "36rem",
          background:
            "linear-gradient(180deg, #FFF 0%, rgba(55, 66, 250, 0.27) 100%)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
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
          <div
            style={{
              display: "flex",
              width: "100%",
              height: "7rem",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
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
  );
}

export default ContactUs;
