import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export const Map = () => {
  return (
    <div className="w-full">
      <div className="rounded-md bg-linear-to-r from-cyan-600 to-cyan-950 p-0.5 mx-32 mt-5">
        <div className="p-1" style={{ height: 600 }}>
          <MapContainer
            center={[51.505, -0.09]}
            zoom={13}
            scrollWheelZoom={false}
            style={{ height: "100%", width: "100%" }}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[51.505, -0.09]}>
              <Popup>Tutaj nas znajdziesz :)</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </div>
  );
};
