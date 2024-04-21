import "./styles.css";
import "leaflet/dist/leaflet.css";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  LayersControl,
} from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import placeHolderIcon from "../../../assets/icons/placeholder.png";
import { Icon, divIcon, point } from "leaflet";
import IconWithLinkContainer from "../IconWithLinkContainer";
import React, { useEffect, useState, useRef } from "react";
import L from "leaflet";
import RoutingControl from "./RoutingControl";

// Import the JS and CSS:
import "leaflet-routing-machine";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";

// Base map tile:
const maps = {
  base: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
};

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
let markers = [
  {
    geocode: [13.5221981, 77.6790109],
    popUp: "Hello, I am pop up 1",
  },
  {
    geocode: [13.1976048, 77.7074856],
    popUp: "Hello, I am pop up 2",
  },
  {
    geocode: [13.3073721, 77.6923379],
    popUp: "Hello, I am pop up 3",
  },
  {
    geocode: [13.303695, 77.54428],
    popUp: "Hello, I am pop up 3",
  },
  {
    geocode: [17.49305, 78.36613],
    popUp: "Hello, I am pop up 3",
  },
  {
    geocode: [13.33512, 77.09811],
    popUp: "Hello, I am pop up 3",
  },
  {
    geocode: [13.03719, 77.66373],
    popUp: "Hello, I am pop up 3",
  },
  {
    geocode: [17.49309, 78.36673],
    popUp: "Hello, I am pop up 3",
  },
  {
    geocode: [13.33212, 77.09011],
    popUp: "Hello, I am pop up 3",
  },
];

export default function Map({ proximities, cta }) {
  // Set up a useState hook for our map instance:
  const [map, setMap] = useState(null);
  markers = markers.map((marker, index) => {
    const updatedMarker = { ...marker, popUp: proximities[index] };
    return updatedMarker;
  });
  // State vars for our routing machine instance:
  const [routingMachine, setRoutingMachine] = useState(null);

  // Start-End points for the routing machine:
  const [start, setStart] = useState([13.1155, 77.607]);
  const [end, setEnd] = useState([13.025, 77.534]);

  // Ref for our routing machine instace:
  const RoutingMachineRef = useRef(null);

  // Create the routing-machine instance:
  useEffect(() => {
    // Check For the map instance:
    if (!map) return;
    if (map) {
      // Assign Control to React Ref:

      RoutingMachineRef.current = L.Routing.control({
        position: "topleft", // Where to position control on map
        lineOptions: {
          // Options for the routing line
          styles: [
            {
              color: "#757de8",
            },
          ],
        },
        waypoints: [start, end], // Point A - Point B
      });
      // Save instance to state:
      setRoutingMachine(RoutingMachineRef.current);
    }
  }, [map]);

  // Once routing machine instance is ready, add to map:
  useEffect(() => {
    if (!routingMachine) return;
    if (routingMachine) {
      routingMachine.addTo(map);
      routingMachine.setWaypoints([start, end]);
    }
  }, [routingMachine, start, end]);

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        gap: "1rem",
      }}
    >
      <MapContainer
        center={[13.2483502, 77.7134377]}
        zoom={13}
        zoomControl={false}
        style={{ width: "70%", height: "34rem" }}
        // Set the map instance to state when ready:
        whenCreated={(map) => setMap(map)}
      >
        <RoutingControl start={start} end={end} />
        <LayersControl position="topright">
          <LayersControl.BaseLayer checked name="Map">
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url={maps.base}
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
          </LayersControl.BaseLayer>
        </LayersControl>
      </MapContainer>
      <IconWithLinkContainer
        proximities={proximities}
        cta={cta}
        setEnd={setEnd}
        end={end}
      />
    </div>
  );
}
