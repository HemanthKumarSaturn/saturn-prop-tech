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

export default function Map({ proximities, cta }) {
  // Set up a useState hook for our map instance:
  const [map, setMap] = useState(null);

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
  }, [map, end]);

  // Once routing machine instance is ready, add to map:
  useEffect(() => {
    if (!routingMachine) return;
    if (routingMachine) {
      routingMachine.addTo(map);
      routingMachine.setWaypoints([start, end]);
    }
  }, [routingMachine, start, end]);

  useEffect(() => {
    console.log("location changed");
    console.log({ end });
  }, [end]);

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
        center={[12.988, 77.6895]}
        zoom={13}
        zoomControl={false}
        style={{ width: "70%", height: "100%" }}
        // Set the map instance to state when ready:
        whenCreated={(map) => setMap(map)}
      >
        <RoutingControl
          position={"topleft"}
          start={start}
          end={end}
          color={"#757de8"}
        />
        <LayersControl position="topright">
          <LayersControl.BaseLayer checked name="Map">
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url={maps.base}
            />
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
