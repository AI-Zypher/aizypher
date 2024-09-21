import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

const MapComponent = () => {
  const centerCoordinates = [13.032203, 80.183097];

  const customIcon = new L.Icon({
    iconUrl: "https://cdn.jsdelivr.net/gh/MohamedArafath205/cdn.aizypher@main/map_marker4.png",
    iconSize: [50, 60],
    iconAnchor: [17, 46],
    popupAnchor: [0, -46],
  });

  return (
    <MapContainer center={centerCoordinates} zoom={13} style={{ height: '100%', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={centerCoordinates} icon={customIcon}>
        <Popup>
          This is where our Eco Awareness initiative has been initiated!!!
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;