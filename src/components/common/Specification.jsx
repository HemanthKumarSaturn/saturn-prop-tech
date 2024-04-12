import * as React from "react";

function Icon({ src, alt }) {
  return (
    <div
      className="flex justify-center items-center px-4 rounded-full shadow-sm h-[69px] min-h-[69px] w-[69px]"
      style={{ background: "linear-gradient(#3742FA, #D4D6D7)" }}
    >
      <img src={src} alt={alt} className="aspect-square w-[37px]" />
    </div>
  );
}

function Content({ title, description }) {
  return (
    <div className="flex flex-col">
      <h2 className="text-xl font-bold leading-7 text-black">{title}</h2>
      <p className="mt-2 text-xs leading-4 text-black text-opacity-80">
        {description}
      </p>
    </div>
  );
}

function Card({ icon, title, description }) {
  return (
    <div className="flex gap-3.5 items-center, justify-center p-5 bg-white">
      <Icon src={icon.src} alt={icon.alt} />
      <Content title={title} description={description} />
    </div>
  );
}

function MyComponent({ card }) {
  return (
    <div>
      <Card
        key={card.title}
        icon={card.icon}
        title={card.title}
        description={card.description}
      />
    </div>
  );
}

export default MyComponent;
