import React from "react";
import BgVideo from "../../assets/gallery/videos/banner-video.mp4";
import "./Bannervid.css";
import FilterUpdated from "../common/FilterUpdated";
// import BannerHead from "./BannerHead";
import Head from "../common/Head";
import BannerCaption from "./BannerCaption";
import BannerCaption2 from "./BannerCaption2";
import BannerHead from "./BannerHead";
import PrimaryButton from "../common/PrimaryButton";

function Bannervid({ jsonData }) {
  const headText = "Total Environment's Signature Retreat";
  const { fold1 } = jsonData;
  const { title, subTitle, cta } = fold1;
  return (
    <div className="landingpage pb-3">
      <video src={BgVideo} autoPlay muted loop className="video-bg" />
      {/* <div className="bg-overlay"></div> */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "baseline",
          gap: "4rem",
        }}
      >
        <div className="flex flex-col gap-6 items-center ">
          {/* <BannerCaption text={title.slice(0, 17)} />
          <BannerCaption2 text={title.slice(20)} />
          <BannerHead text={subTitle} /> */}
          {/* <PrimaryButton sectionEnquired="Banner" /> */}
        </div>
        {/* <div style={{ color: "white" }}>
          <Head text={headText} />
        </div> */}
        <FilterUpdated />
      </div>
    </div>
  );
}

export default Bannervid;
