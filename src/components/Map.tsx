import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import pinIcon from "../img/map_pin.svg";

import L from "leaflet";

const customIcon = L.icon({
  iconUrl: pinIcon,
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

export const Map = () => {
  return (
    <div className="w-full">
      <div className="rounded-md bg-linear-to-r from-cyan-600 to-cyan-950 p-0.5 mx-4 sm:mx-10 md:mx-20 lg:mx-32 mt-5">
        <div className="p-0.5 rounded-md h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
          <MapContainer
            center={[49.826132123112686, 19.635675587063858]}
            zoom={15}
            scrollWheelZoom={false}
            style={{ height: "100%", width: "100%" }}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker
              position={[49.826132123112686, 19.635675587063858]}
              icon={customIcon}
            >
              <Popup>Tutaj nas znajdziesz :)</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </div>
  );
};
