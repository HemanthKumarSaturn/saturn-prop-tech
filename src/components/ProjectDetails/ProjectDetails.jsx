import * as React from "react";

function ProjectDetails() {
  return (
    <div className="py-7 pr-20 pl-7 rounded-2xl bg-neutral-100 max-md:px-5">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow font-bold text-black leading-[140%] max-md:mt-10">
            <div className="text-2xl">Projects Details:</div>
            <div className="justify-center px-8 py-7 mt-5 text-xl rounded-lg shadow-sm bg-indigo-300 bg-opacity-10 max-md:px-5">
              Ongoing Projects: 11
            </div>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
          <div className="grow justify-center p-7 mt-10 w-full text-xl font-bold leading-7 text-black rounded-lg shadow-sm bg-indigo-300 bg-opacity-10 max-md:px-5 max-md:mt-10">
            Upcoming Projcets: 1
          </div>
        </div>
        <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
          <div className="grow justify-center px-3.5 py-7 mt-10 w-full text-xl font-bold leading-7 text-black rounded-lg shadow-sm bg-indigo-300 bg-opacity-10 max-md:mt-10">
            Completed Projects: 26
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetails;
