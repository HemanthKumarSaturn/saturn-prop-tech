import React from "react";
import BgVideo from "../../assets/gallery/videos/sampleVideo.mp4";
import "./Bannervid.css";
import FilterUpdated from "../common/FilterUpdated";
import BannerHead from "./BannerHead";
import Head from "../common/Head";

function Bannervid() {
  const headText = "Total Environment's Signature Retreat";

  return (
    <div className="landingpage">
      <video src={BgVideo} autoPlay muted loop className="video-bg" />
      <div className="bg-overlay"></div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "baseline",
          gap: "1rem",
        }}
      >
        <div style={{ color: "white" }}>
          <Head text={headText} />
        </div>
        <FilterUpdated />
      </div>
    </div>
  );
}

export default Bannervid;
