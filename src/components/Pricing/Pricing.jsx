import * as React from "react";

function Pricing() {
  const sqft7200 = [
    "46,728,000",
    "6,840,000",
    "225,000",
    "1,271,700",
    "55,064,700",
  ];
  return (
    <div className="flex flex-col items-center">
      <div
        className="text-3xl font-medium leading-10 text-indigo-600 uppercase"
        style={{
          borderRadius: "4px",
          background: "rgba(165, 166, 246, 0.10)",
          boxShadow: "0px 3.388px 3.388px 0px rgba(0, 0, 0, 0.25)",
        }}
      >
        Plot Spec & Pricing{" "}
      </div>
      <div className="mt-8 text-4xl font-bold text-black leading-[51.8px] max-md:max-w-full">
        Tangled Up in Green, Devanahalli Land Price
      </div>
      <div className="flex gap-2 self-stretch mt-8 w-full max-md:flex-wrap max-md:max-w-full">
        <div className="flex flex-col self-start text-base font-semibold leading-6 text-black">
          <div className="justify-center px-5 py-4 text-base font-semibold leading-6 text-black rounded shadow-sm bg-indigo-300 bg-opacity-10">
            Plot Size (sq. Ft.)
          </div>
          <div className="justify-center px-16 py-5 mt-2.5 whitespace-nowrap rounded shadow-sm bg-indigo-300 bg-opacity-10 max-md:pr-7 max-md:pl-7">
            BSP
          </div>
          <div className="justify-center px-7 py-1.5 mt-2.5 leading-6 text-center rounded shadow-sm bg-indigo-300 bg-opacity-10 max-md:px-5">
            Development <br />
            Charges
          </div>
          <div className="justify-center px-7 py-4 mt-2.5 rounded shadow-sm bg-indigo-300 bg-opacity-10 max-md:px-5">
            Club Charges
          </div>
          <div className="justify-center px-8 py-2 mt-2.5 leading-6 text-center rounded-lg shadow-sm bg-indigo-300 bg-opacity-10 max-md:px-5">
            GST on DC &<br /> Club
          </div>
          <div className="shrink-0 mt-2.5 rounded shadow-sm bg-indigo-300 bg-opacity-10 h-[47px]" />
        </div>
        <div className="flex flex-col grow shrink-0 items-center px-5 basis-0 w-fit max-md:max-w-full">
          <div className="flex gap-5 self-stretch max-md:flex-wrap max-md:max-w-full">
            <div className="flex flex-col">
              <div className="flex flex-col justify-center rounded-md border border-solid shadow-sm border-zinc-300 border-opacity-50">
                <div className="shrink-0 h-[47px]">1800 sq.ft.</div>
              </div>
              {sqft7200.map((data) => (
                <div className="shrink-0 mt-2.5 border border-black border-dashed h-[51px]">
                  {data}
                </div>
              ))}
            </div>
            <div className="flex flex-col">
              <div className="shrink-0 rounded-md border border-solid border-zinc-300 border-opacity-50 h-[51px]" />
              {sqft7200.map((data) => (
                <div className="shrink-0 mt-1.5 border border-black border-dashed h-[51px]">
                  {data}
                </div>
              ))}
            </div>
            <div className="flex flex-col">
              <div className="shrink-0 rounded-md border border-solid shadow-sm border-zinc-300 border-opacity-50 h-[51px]" />
              {sqft7200.map((data) => (
                <div className="shrink-0 mt-1.5 border border-black border-dashed h-[51px]">
                  {data}
                </div>
              ))}
            </div>
            <div className="flex flex-col">
              <div className="shrink-0 rounded-md border border-solid shadow-sm border-zinc-300 border-opacity-50 h-[51px]" />
              {sqft7200.map((data) => (
                <div className="shrink-0 mt-1.5 border border-black border-dashed h-[51px]">
                  {data}
                </div>
              ))}
            </div>
            <div className="flex flex-col">
              <div className="shrink-0 rounded-md border border-solid shadow-sm border-zinc-300 border-opacity-50 h-[51px]" />
              {sqft7200.map((data) => (
                <div className="shrink-0 mt-1.5 border border-black border-dashed h-[51px]">
                  {data}
                </div>
              ))}
            </div>
            <div className="flex flex-col">
              <div className="shrink-0 rounded-md border border-solid shadow-sm border-zinc-300 border-opacity-50 h-[51px]" />
              {sqft7200.map((data) => (
                <div className="shrink-0 mt-1.5 border border-black border-dashed h-[51px]">
                  {data}
                </div>
              ))}
            </div>
            <div className="flex flex-col">
              <div className="shrink-0 rounded-md border border-solid shadow-sm border-zinc-300 border-opacity-50 h-[51px]" />
              {sqft7200.map((data) => (
                <div className="shrink-0 mt-1.5 border border-black border-dashed h-[51px]">
                  {data}
                </div>
              ))}
            </div>
            <div className="flex flex-col">
              <div className="flex flex-col justify-center bg-neutral-100">
                <div className="shrink-0 rounded-md border border-solid shadow-sm border-zinc-300 border-opacity-50 h-[51px]" />
              </div>
              {sqft7200.map((data) => (
                <div className="flex flex-col justify-center mt-1.5 bg-neutral-100">
                  <div className="shrink-0 border border-black border-dashed h-[51px]">
                    {data}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-9 text-base font-bold leading-5 text-black">
            ***PLC & Registration Charges Extra
          </div>
          <div className="justify-center px-4 py-2.5 mt-8 text-2xl font-medium leading-8 text-white bg-indigo-600 rounded-2xl shadow-sm">
            Enquire Now
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
