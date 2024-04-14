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

function Home() {
  const overview = useRef(null);
  const amenities = useRef(null);
  const location = useRef(null);
  const specification = useRef(null);

  return (
    <>
      <HeadingBar
        overview={overview}
        amenities={amenities}
        location={location}
        specification={specification}
      />
      <div className="grid gap-8">
        <Banner />
        {/* <Filter /> */}
        <Vision overview={overview} />
        <Highlights />
        {/* <Pricing /> */}
        <Location location={location} />
        <ValueAdded />
        <Gallery />
        <Ameneties amenities={amenities} />
        <MasterPlan />
        <Specifications specification={specification} />
        <ExpertOpinion />
        <FAQS />
        <AboutBuilder />
        <ProjectDetails />
        <OtherProjects />
        <Footer />
      </div>
    </>
  );
}

export default Home;
