import "./App.css";
import Highlights from "./components/Highlights/Highlights";
import Pricing from "./components/Pricing/Pricing";
import Vision from "./components/Vision/Vision";
import Ameneties from "./components/Amenities/Amenities";
import MasterPlan from "./components/MasterPlan/MasterPlan";
import Specifications from "./components/Specification/Specification";
import FAQS from "./components/FAQs/FAQS";
import AboutBuilder from "./components/AboutBuilder/AboutBuilder";
import ProjectDetails from "./components/ProjectDetails/ProjectDetails";
import Filter from "./components/common/Filter";
import ValueAdded from "./components/ValueAdded/ValueAdded";
import Gallery from "./components/Gallery/Gallery";
import OtherProjects from "./components/OtherProjects/OtherProjects";
import Footer from "./components/Footer/Footer";
import ExpertOpinion from "./components/ExperOpinions/ExperOpinion";
import Location from "./components/Location/Location";
import BannerImage from "./components/Banner/BannerImage";
import Banner from "./components/Banner/Banner";
import HeadingBar from "./components/HeadingBar/HeadingBar";

function App() {
  return (
    <>
      <HeadingBar />
      <div className="grid gap-8">
        <Banner />
        {/* <Filter /> */}
        <Vision />
        <Highlights />
        {/* <Pricing /> */}
        <Location />
        <ValueAdded />
        <Gallery />
        <Ameneties />
        <MasterPlan />
        <Specifications />
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

export default App;
