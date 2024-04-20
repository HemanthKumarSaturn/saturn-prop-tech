import Highlights from "../components/Highlights/Highlights";
import Pricing from "../components/Pricing/Pricing";
import Vision from "../components/Vision/Vision";
import Ameneties from "../components/Amenities/Amenities";
import MasterPlan from "../components/MasterPlan/MasterPlan";
import Specifications from "../components/Specification/Specification";
import FAQS from "../components/FAQs/FAQS";
import AboutBuilder from "../components/AboutBuilder/AboutBuilder";
import ProjectDetails from "../components/ProjectDetails/ProjectDetails";
import Filter from "../components/common/Filter";
import ValueAdded from "../components/ValueAdded/ValueAdded";
import Gallery from "../components/Gallery/Gallery";
import OtherProjects from "../components/OtherProjects/OtherProjects";
import Footer from "../components/Footer/Footer";
import ExpertOpinion from "../components/ExperOpinions/ExperOpinion";
import Location from "../components/Location/Location";
import BannerImage from "../components/Banner/BannerImage";
import Banner from "../components/Banner/Banner";
import HeadingBar from "../components/HeadingBar/HeadingBar";
import { useRef } from "react";
import BannerVid from "../components/Banner/Bannervid";
import jsonData from "../assets/data.json";
import NewFAQ from "../components/FAQs/NewFAQ";
import Ratings from "../components/Ratings/Ratings";
import ContactUsModal from "../components/ContactUs/ContactUsModal";
import UpdatedSpecs from "../components/Specification/UpdatedSpecific";

function Home() {
  const overview = useRef(null);
  const amenities = useRef(null);
  const location = useRef(null);
  const specification = useRef(null);

  return (
    <div style={{ width: "100%", margin: "0px auto", maxWidth: "100vw" }}>
      <HeadingBar
        overview={overview}
        amenities={amenities}
        location={location}
        specification={specification}
        jsonData={jsonData}
      />
      <div
        className="grid gap-16 pt-25"
        style={{ width: "100%", maxWidth: "100vw" }}
      >
        <BannerVid jsonData={jsonData} style={{ maxWidth: "100vw" }} />
        <Vision
          overview={overview}
          jsonData={jsonData}
          style={{ maxWidth: "100vw" }}
        />
        {/* <ContactUsModal /> */}
        <Highlights jsonData={jsonData} style={{ maxWidth: "100vw" }} />
        <Pricing style={{ maxWidth: "100vw" }} />
        <Location
          location={location}
          jsonData={jsonData}
          style={{ maxWidth: "100vw" }}
        />
        <ValueAdded jsonData={jsonData} style={{ maxWidth: "100vw" }} />
        <Gallery jsonData={jsonData} style={{ maxWidth: "100vw" }} />
        <Ameneties
          amenities={amenities}
          jsonData={jsonData}
          style={{ maxWidth: "100vw" }}
        />
        <MasterPlan jsonData={jsonData} style={{ maxWidth: "100vw" }} />
        {/* <Specifications specification={specification} jsonData={jsonData} /> */}
        <UpdatedSpecs
          specification={specification}
          jsonData={jsonData}
          style={{ maxWidth: "100vw" }}
        />
        <ExpertOpinion jsonData={jsonData} style={{ maxWidth: "100vw" }} />
        <FAQS jsonData={jsonData} style={{ maxWidth: "100vw" }} />
        {/* <NewFAQ /> */}
        <AboutBuilder jsonData={jsonData} style={{ maxWidth: "100vw" }} />
        <Ratings style={{ maxWidth: "100vw" }} />
        {/* <ProjectDetails jsonData={jsonData} /> */}
        <OtherProjects jsonData={jsonData} style={{ maxWidth: "100vw" }} />
        <Footer jsonData={jsonData} style={{ maxWidth: "100vw" }} />
      </div>
    </div>
  );
}

export default Home;
