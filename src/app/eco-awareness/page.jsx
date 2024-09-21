"use client";

import React from 'react';
import dynamic from 'next/dynamic';

const MapComponent = dynamic(() => import('./MapComponent'), {
  ssr: false,
  loading: () => <p>Loading map...</p>
});

const EcoAwarenessPage = () => {
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
            The team of AI Zypher believes in the importance of sustainability and environmental stewardship. 
            To contribute to a greener planet, we are happy to announce our initiative to plant 250 saplings with the help of an NGO.
            This effort not only enhances our local ecosystem but also sets an example for our community and industry.
          </p>
        </div>
      </div>

      {/* Map Section with QR Code */}
      <div style={{ height: '80%', width: '80%', margin: '0 auto', padding: '5px', backgroundColor: '#f0f0f0', zIndex: 10, position: 'relative' }}>
        {/* Expanded QR image to cover the white box */}
        <img 
          src="https://cdn.jsdelivr.net/gh/MohamedArafath205/cdn.aizypher@main/qr.jpg" 
          alt="QR Code" 
          style={{ width: '100%', height: '100%', objectFit: 'contain', zIndex: 1 }} 
        />
        {/* <MapComponent /> */}
      </div>
    </div>
  );
};

export default EcoAwarenessPage;
