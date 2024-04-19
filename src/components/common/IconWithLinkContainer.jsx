import * as React from "react";
import IconWithLink from "./IconWithLink";
import PrimaryButton from "./PrimaryButton";
import ContactUsModal from "../ContactUs/ContactUsModal";

async function getGeoLocation(searchQuery) {
  const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
    searchQuery
  )}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.length > 0) {
      const location = {
        latitude: parseFloat(data[0].lat),
        longitude: parseFloat(data[0].lon),
      };
      return location;
    } else {
      throw new Error("Location not found");
    }
  } catch (error) {
    console.error("Error getting location:", error);
    throw error;
  }
}

function IconWithLinkContainer({ proximities, cta, setEnd, end }) {
  const getExactLocation = async (searchQuery) => {
    try {
      const location = await getGeoLocation(searchQuery);
      return location;
    } catch (error) {
      console.error("Error:", error.message);
    }
  };
  const location = [
    [13.5221981, 77.6790109],
    [13.1976048, 77.7074856],
    [13.3073721, 77.6923379],
    [13.303695, 77.54428],
    [13.03717, 77.66372],
    [17.49305, 78.36613],
    [13.33512, 77.09811],
    [13.03719, 77.66373],
    [17.49309, 78.36673],
    [13.33212, 77.09011],
  ];
  const icons = [
    "https://cdn.builder.io/api/v1/image/assets/TEMP/f79ba27965f26c9cdcba380f2a8eb63c93973673eed1a88b279f083eb468f350?apiKey=6d29d163b59344eda42474c42f65e83e&",
    "https://cdn.builder.io/api/v1/image/assets/TEMP/ad13a0dd632ec946d9d74fe7f92d9d82b4f5c8aadd7d081dfd64aecf3856e0c8?apiKey=6d29d163b59344eda42474c42f65e83e&",
    "https://cdn.builder.io/api/v1/image/assets/TEMP/08f3f833c7c8508952305eee8f6201e2aac4027f1f71d6245258c8e566d4cf08?apiKey=6d29d163b59344eda42474c42f65e83e&",
    "https://cdn.builder.io/api/v1/image/assets/TEMP/c68014854a92174e5418785c0c096a843ab4ef5fa59da53e3e08d9b28ef1e2aa?apiKey=6d29d163b59344eda42474c42f65e83e&",
    "https://cdn.builder.io/api/v1/image/assets/TEMP/97b32e30143fb051534ba9fea6f5c52502ea4e3cf41db363630f540db3a7cefd?apiKey=6d29d163b59344eda42474c42f65e83e&",
    "https://cdn.builder.io/api/v1/image/assets/TEMP/97b32e30143fb051534ba9fea6f5c52502ea4e3cf41db363630f540db3a7cefd?apiKey=6d29d163b59344eda42474c42f65e83e&",
    "https://cdn.builder.io/api/v1/image/assets/TEMP/97b32e30143fb051534ba9fea6f5c52502ea4e3cf41db363630f540db3a7cefd?apiKey=6d29d163b59344eda42474c42f65e83e&",
    "https://cdn.builder.io/api/v1/image/assets/TEMP/0d12f0b39b23e9f9c0da50c2e35af355eebd257a9eedca9e308f3307166d51dd?apiKey=6d29d163b59344eda42474c42f65e83e&",
    "https://cdn.builder.io/api/v1/image/assets/TEMP/97b32e30143fb051534ba9fea6f5c52502ea4e3cf41db363630f540db3a7cefd?apiKey=6d29d163b59344eda42474c42f65e83e&",
    "https://cdn.builder.io/api/v1/image/assets/TEMP/97b32e30143fb051534ba9fea6f5c52502ea4e3cf41db363630f540db3a7cefd?apiKey=6d29d163b59344eda42474c42f65e83e&",
  ];
  proximities = proximities.map((prox, index) => {
    const proxy = {
      title: prox,
      location: location[index],
      icon: icons[index],
    };
    return proxy;
  });
  return (
    <div
      style={{
        height: "100%",
        width: "25%",
      }}
      className="bg-violet-100 rounded-3xl flex flex-col gap-4 items-center"
    >
      <div className="text-2xl font-bold leading-8 text-black self-center">
        Key Directions
      </div>
      <div className="flex flex-col gap-2">
        {proximities.map((proximity) => (
          <IconWithLink
            proximity={proximity}
            getExactLocation={getExactLocation}
            setEnd={setEnd}
            end={end}
          />
        ))}
      </div>
      {/* <PrimaryButton sectionEnquired="Location" text={cta} /> */}
      {/* <ContactUsModal sectionEnquired="Location" text={cta} /> */}
    </div>
  );
}

export default IconWithLinkContainer;
