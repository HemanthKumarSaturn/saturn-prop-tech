import L from "leaflet";
import { createControlComponent } from "@react-leaflet/core";
import "leaflet-routing-machine";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";

const createRoutineMachineLayer = ({ position, start, end, color }) => {
  const instance = L.Routing.control({
    position,
    waypoints: [start, end],
    lineOptions: {
      styles: [
        {
          color,
        },
      ],
    },
    routeWhileDragging: false,
    show: false,
  });

  return instance;
};

const RoutingMachine = createControlComponent(createRoutineMachineLayer);

export default RoutingMachine;
