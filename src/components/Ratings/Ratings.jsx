import * as React from "react";

function RatingBar({ rating, label }) {
  return (
    <div className="flex gap-1.5 mt-1.5 text-sm font-medium leading-5 text-black whitespace-nowrap">
      <div className="justify-center items-center bg-white bg-opacity-0 h-[18px] w-[18px]">
        {rating}
      </div>
      <div className="shrink-0 my-auto h-1 bg-gray-200 rounded w-[135px]">
        {rating >= 2 && (
          <div
            className="shrink-0 bg-indigo-600 rounded h-[3px]"
            style={{ width: `${(rating - 2) * 25}%` }}
          />
        )}
      </div>
    </div>
  );
}

function RatingItem({ imageSrc, imageAlt, title, rating }) {
  return (
    <>
      <div className="shrink-0 w-px bg-zinc-300 h-[120px]" />
      <div
        className="flex justify-between items-center"
        style={{ width: "max-content", gap: "1rem" }}
      >
        <img
          loading="lazy"
          src={imageSrc}
          alt={imageAlt}
          className="shrink-0 my-auto w-14 aspect-square"
        />
        <div className="flex flex-col justify-center items-baseline">
          <div className="text-base font-bold text-indigo-600">{title}</div>
          <div className="text-2xl font-bold text-black text-opacity-80">
            {rating}
          </div>
        </div>
      </div>
    </>
  );
}

function Ratings() {
  const ratingData = [
    {
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/4e20c7bf3eb43c79dd620abc18ae7b4ce4941bed7a6577935ef76ef36375b6b7?apiKey=6d29d163b59344eda42474c42f65e83e&",
      imageAlt: "Location icon",
      title: "Location",
      rating: 4.7,
    },
    {
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/403514e70aeac284ae074bdafd7fb3271fcc4e907c11a8d2a419f087539ca9fc?apiKey=6d29d163b59344eda42474c42f65e83e&",
      imageAlt: "Greenery icon",
      title: "Greenery",
      rating: 4.7,
    },
    {
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/1398be7fa2a6d1269ef70c00150b9dbcefedf4be50e035db97e6eb48d7c25378?apiKey=6d29d163b59344eda42474c42f65e83e&",
      imageAlt: "Open space icon",
      title: "Open Space",
      rating: 4.5,
    },
    {
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/e4a18d14520b7746c6dee59a67c54ced8f526788ed8e2384e4bba228dfe44ed5?apiKey=6d29d163b59344eda42474c42f65e83e&",
      imageAlt: "Amenities icon",
      title: "Amenities",
      rating: 4.5,
    },
  ];

  return (
    <div className="flex flex-col justify-center items-start bg-white max-md:px-5 mx-auto">
      <div className="flex gap-5 justify-between items-center max-md:flex-wrap">
        <div className="flex flex-col self-stretch py-0.5">
          <div className="text-sm font-semibold leading-5 text-black">
            Overall rating
          </div>
          <RatingBar rating={5} />
          <RatingBar rating={4} />
          <RatingBar rating={3} />
          <RatingBar rating={2} />
          <RatingBar rating={1} />
        </div>
        {ratingData.map((item, index) => (
          <RatingItem
            key={index}
            imageSrc={item.imageSrc}
            imageAlt={item.imageAlt}
            title={item.title}
            rating={item.rating}
          />
        ))}
      </div>
    </div>
  );
}

export default Ratings;
