import "./styles.css";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import placeHolderIcon from "../../../assets/icons/placeholder.png";
import { Icon, divIcon, point } from "leaflet";
import IconWithLinkContainer from "../IconWithLinkContainer";

// create custom icon
const customIcon = new Icon({
  // iconUrl: "https://cdn-icons-png.flaticon.com/512/447/447031.png",
  iconUrl: placeHolderIcon,
  iconSize: [38, 38], // size of the icon
});

// custom cluster icon
const createClusterCustomIcon = function (cluster) {
  return new divIcon({
    html: `<span class="cluster-icon">${cluster.getChildCount()}</span>`,
    className: "custom-marker-cluster",
    iconSize: point(33, 33, true),
  });
};

// markers
const markers = [
  {
    geocode: [13.1155, 77.607],
    popUp: <IconWithLinkContainer />,
  },
  {
    geocode: [13.025, 77.534],
    popUp: <IconWithLinkContainer />,
  },
  {
    geocode: [12.988, 77.6895],
    popUp: <IconWithLinkContainer />,
  },
];

export default function Map() {
  return (
    <MapContainer center={[12.988, 77.6895]} zoom={13}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=vkfT9AgfVPIWxV4pkc0I"
      />
      <MarkerClusterGroup
        chunkedLoading
        iconCreateFunction={createClusterCustomIcon}
      >
        {markers.map((marker) => (
          <Marker position={marker.geocode} icon={customIcon}>
            <Popup>{marker.popUp}</Popup>
          </Marker>
        ))}
      </MarkerClusterGroup>
    </MapContainer>
  );
}
