import * as React from "react";

function IconWithLink({ proximity }) {
  return (
    <div className="flex gap-5 text-base font-bold leading-5 text-indigo-600 border border-lime-500 border-dashed bg-white bg-opacity-0">
      <img
        loading="lazy"
        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/eb26e412a2fd80fdf4f8f675f0777ae3003cd9ccabbab20de98119490846eb63?apiKey=6d29d163b59344eda42474c42f65e83e&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/eb26e412a2fd80fdf4f8f675f0777ae3003cd9ccabbab20de98119490846eb63?apiKey=6d29d163b59344eda42474c42f65e83e&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/eb26e412a2fd80fdf4f8f675f0777ae3003cd9ccabbab20de98119490846eb63?apiKey=6d29d163b59344eda42474c42f65e83e&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/eb26e412a2fd80fdf4f8f675f0777ae3003cd9ccabbab20de98119490846eb63?apiKey=6d29d163b59344eda42474c42f65e83e&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/eb26e412a2fd80fdf4f8f675f0777ae3003cd9ccabbab20de98119490846eb63?apiKey=6d29d163b59344eda42474c42f65e83e&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/eb26e412a2fd80fdf4f8f675f0777ae3003cd9ccabbab20de98119490846eb63?apiKey=6d29d163b59344eda42474c42f65e83e&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/eb26e412a2fd80fdf4f8f675f0777ae3003cd9ccabbab20de98119490846eb63?apiKey=6d29d163b59344eda42474c42f65e83e&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/eb26e412a2fd80fdf4f8f675f0777ae3003cd9ccabbab20de98119490846eb63?apiKey=6d29d163b59344eda42474c42f65e83e&"
        className="shrink-0 mt-1.5 w-7 aspect-square"
      />
      <div className="flex-auto my-auto">{proximity}</div>
    </div>
  );
}

export default IconWithLink;
