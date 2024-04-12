import * as React from "react";

function Gallery() {
  return (
    <div className="flex flex-col items-center gap-y-7">
      <div className="text-4xl font-bold text-black">
        Tangled Up in Green - Gallery
      </div>
      <div className="flex gap-x-5 text-3xl font-semibold text-center capitalize">
        <div className="justify-center px-14 py-4 whitespace-nowrap bg-white border-indigo-600 border-solid border-b-[5px] text-neutral-600">
          Gallery
        </div>
        <div className="grow justify-center px-3.5 py-4 bg-white border-solid border-b-[5px] border-indigo-600 border-opacity-50 text-neutral-600 text-opacity-50 w-fit">
          Project Walkthrough
        </div>
      </div>
      <img
        loading="lazy"
        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/f406abe3349c4bc9a1e8a58cced49a6a4a518a4a18a92493c06076612770c602?apiKey=6d29d163b59344eda42474c42f65e83e&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/f406abe3349c4bc9a1e8a58cced49a6a4a518a4a18a92493c06076612770c602?apiKey=6d29d163b59344eda42474c42f65e83e&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f406abe3349c4bc9a1e8a58cced49a6a4a518a4a18a92493c06076612770c602?apiKey=6d29d163b59344eda42474c42f65e83e&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/f406abe3349c4bc9a1e8a58cced49a6a4a518a4a18a92493c06076612770c602?apiKey=6d29d163b59344eda42474c42f65e83e&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/f406abe3349c4bc9a1e8a58cced49a6a4a518a4a18a92493c06076612770c602?apiKey=6d29d163b59344eda42474c42f65e83e&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f406abe3349c4bc9a1e8a58cced49a6a4a518a4a18a92493c06076612770c602?apiKey=6d29d163b59344eda42474c42f65e83e&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/f406abe3349c4bc9a1e8a58cced49a6a4a518a4a18a92493c06076612770c602?apiKey=6d29d163b59344eda42474c42f65e83e&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/f406abe3349c4bc9a1e8a58cced49a6a4a518a4a18a92493c06076612770c602?apiKey=6d29d163b59344eda42474c42f65e83e&"
        className="aspect-[2.27]"
        style={{ width: "70%" }}
      />
    </div>
  );
}

export default Gallery;
