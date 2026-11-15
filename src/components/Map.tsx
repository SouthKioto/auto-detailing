import { MapContainer, TileLayer, Popup, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import pinIcon from "../img/map_pin.svg";

import L from "leaflet";

const POSITION: [number, number] = [49.826132123112686, 19.635675587063858];
const MAPS_URL = "https://maps.app.goo.gl/9DZGFR5u6A3zMkY87";

const customIcon = L.icon({
  iconUrl: pinIcon,
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

export const Map = () => {
  return (
    <div className="w-full">
      <div className="rounded-md bg-gradient-primary p-0.5 mx-4 sm:mx-10 md:mx-20 lg:mx-32 mt-5">
        <div className="p-0.5 rounded-md h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
          <MapContainer
            center={POSITION}
            zoom={15}
            scrollWheelZoom={false}
            style={{ height: "100%", width: "100%", zIndex: 0 }}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker
              position={POSITION}
              icon={customIcon}
              alt="Auto Detailing Jarosz – Stryszów 142"
              eventHandlers={{
                add: (e) => {
                  e.target.openPopup();
                },
              }}
            >
              <Popup autoClose={false} closeOnClick={false}>
                <p>Tutaj nas znajdziesz :)</p>
                <a href={MAPS_URL} target="_blank" rel="noopener noreferrer">
                  <p className="font-bold underline">Stryszów 142, 34-146</p>
                </a>
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </div>
  );
};
