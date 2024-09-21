"use client";

import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Custom marker icon
const customIcon = new L.Icon({
  iconUrl: "https://cdn.jsdelivr.net/gh/MohamedArafath205/cdn.aizypher@main/map_marker4.png",
  iconSize: [50, 60],
  iconAnchor: [17, 46],
  popupAnchor: [0, -46],
});

const centerCoordinates = [13.032203, 80.183097];

const Maps = () => {
  return (
    <div className="relative" style={{ backgroundColor: '#18492D', minHeight: '100vh' }}>
      {/* Leaf Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://cdn.jsdelivr.net/gh/MohamedArafath205/cdn.aizypher@main/leaf.png" 
          alt="Leaf Background" 
          className="absolute opacity-30" 
          style={{ width: '100%', height: 'auto', zIndex: 0 }}
        />
        {/* Additional leaf images can be added here with different styles */}
      </div>

      {/* Centered Content */}
      <div className="flex flex-col items-center justify-center min-h-screen px-4 z-10 relative">
        {/* Heading Section */}
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            AI Zypher's Eco Initiative
          </h1>
        </div>

        {/* Content Section */}
        <div className="max-w-2xl text-center">
          <p className="text-lg md:text-xl text-white leading-relaxed">
          The team of AI Zypher  believes in the importance of sustainability and environmental stewardship. 
          To contribute to a greener planet, we are happy to announce our initiative to plant 250 saplings with the help of NGO.
          This effort not only enhances our local ecosystem but also sets an example for our community and industry.
          </p>
        </div>
      </div>

      {/* Map Section */}
      <div style={{ height: '800px', width: '80%', margin: '0 auto', padding: '20px', backgroundColor: '#f0f0f0', zIndex: 10 }}>
        <MapContainer center={centerCoordinates} zoom={50} style={{ height: '100%', width: '100%' ,zIndex: 10}}>
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
      </div>
    </div>
  );
};

export default Maps;
