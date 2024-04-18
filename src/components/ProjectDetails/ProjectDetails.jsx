import * as React from "react";

function ProjectDetails() {
  return (
    <div
      className="py-7 rounded-2xl bg-neutral-100 max-md:px-5"
      style={{ width: "40rem", margin: "0px auto" }}
    >
      <div className="text-xl font-bold text-black ">Projects Details:</div>

      <div className="flex gap-3 max-md:flex-col max-md:gap-0">
        <div className="flex flex-col">
          <div className="flex flex-col grow font-medium text-black leading-[140%] max-md:mt-10">
            <div
              className="justify-center px-8 py-7 mt-5 text-md rounded-lg shadow bg-indigo-300 bg-opacity-10 max-md:px-5 border"
              style={{
                textAlign: "center",
                padding: "8px 8px",
                width: "fit-content",
              }}
            >
              Ongoing Projects - 11
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-col grow font-medium text-black leading-[140%] max-md:mt-10">
            <div
              className="justify-center px-8 py-7 mt-5 text-md rounded-lg shadow bg-indigo-300 bg-opacity-10 max-md:px-5 border"
              style={{
                textAlign: "center",
                padding: "8px 8px",
                width: "fit-content",
              }}
            >
              Upcoming Projects - 1
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex flex-col grow font-medium text-black leading-[140%] max-md:mt-10">
            <div
              className="justify-center px-7 py-7 mt-5 text-md rounded-lg shadow bg-indigo-300 bg-opacity-10 max-md:px-5 border"
              style={{
                textAlign: "center",
                padding: "8px 8px",
                width: "fit-content",
              }}
            >
              Completed Projects - 26
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetails;
