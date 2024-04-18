import React from "react";

const FeaturesList = ({ qualities, isReadMore, toggleReadMore, isFirst }) => {
  return (
    <div className="text-xl">
      <ul>
        {qualities?.map((quality, index) => (
          <li className="pt-3">
            <strong>{quality.quality}:</strong> {quality.desc}{" "}
            {qualities?.length - 1 === index && (
              <span
                onClick={toggleReadMore}
                className="text-indigo-600 cursor-pointer"
              >
                {isFirst
                  ? isReadMore
                    ? "...read more"
                    : ""
                  : isFirst != null
                  ? isReadMore
                    ? ""
                    : " Show less"
                  : ""}
              </span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FeaturesList;
