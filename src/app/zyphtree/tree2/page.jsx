'use client'
import React, { useEffect } from "react";

const Tree1 = () => {
  useEffect(() => {
    const initMap = () => {
      const map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 13.032469940776112, lng: 80.17918739139735 },
        zoom: 21,
        mapTypeId: google.maps.MapTypeId.SATELLITE,
      });

      // Creating a custom marker (pointer) on the map
      const marker = new google.maps.Marker({
        position: { lat: 13.032469940776112, lng: 80.17918739139735 },
        map: map,
        title: "Click here for more info!",
      });

      // When the marker is clicked, redirect to a page inside your website
      marker.addListener("click", () => {
        window.location.href = "/your-target-page"; // Replace with your desired page URL
      });
    };

    if (window.google) {
      initMap();
    } else {
      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&callback=initMap`;
      script.async = true;
      document.head.appendChild(script);
      window.initMap = initMap;
    }
  }, []);

  return (
    <div className="relative h-screen bg-custom-gradient-2 overflow-x-hidden">
      {/* Top section with logos */}
      <div className="flex flex-row justify-between items-center pt-10 px-10 z-10 relative">
        <img
          src="https://cdn.jsdelivr.net/gh/MohamedArafath205/cdn.aizypher@main/srmlogo.png"
          alt="SRM Logo"
          className="w-auto h-1/2"
        />
        <img
          src="https://cdn.jsdelivr.net/gh/MohamedArafath205/cdn.aizypher@main/zyplogo.png"
          alt="Zyph Logo"
          className="w-auto h-[150px]"
        />
      </div>

      {/* Leaves images */}
      <img
        src="https://cdn.jsdelivr.net/gh/MohamedArafath205/cdn.aizypher@main/leaves1.png"
        alt=""
        className="absolute left-0 top-[50%] lg:top-[70%] transform -translate-y-1/2 -translate-x-1/3 rotate-90 sm:w-[250px] md:w-[500px] lg:w-auto z-0"
      />

      <div className="py-10 sm:text-xl md:text-3xl lg:text-6xl font-extrabold text-center">
      Growing a tree is planting the roots of a <br /> healthier planet, a thriving ecosystem, and <br />a brighter future for all."
      </div>

      <img
        src="https://cdn.jsdelivr.net/gh/MohamedArafath205/cdn.aizypher@main/leaves1.png"
        alt=""
        className="absolute right-0 top-[63%] lg:top-[100%] transform translate-y-[-50%] translate-x-1/3 rotate-[-90deg] sm:w-[250px] md:w-[500px] lg:w-auto z-0"
      />

      {/* Main tree image */}
      <div className="flex flex-row justify-center">
        <img
          src="https://cdn.jsdelivr.net/gh/MohamedArafath205/cdn.aizypher@main/bali.png"
          alt=""
          className="rounded-lg w-1/2 lg:w-1/3 h-auto"
        />
      </div>

      {/* Text about the person */}
      <h1 className="text-black font-extrabold text-xl md:text-5xl text-center pt-10">
      Dr. BALIKA J. CHELLIAH
      </h1>

      <h1 className="text-black font-bold text-md md:text-3xl text-center py-4">
      VP-Admin | Dy.HoD/AIML<br/>
    SRMIST, Ramapuram Campus,<br />
        Chennai.
      </h1>

      {/* Map section */}
      <div className="flex flex-row justify-center py-10">
        <div id="map" className="w-1/2 lg:w-1/3 h-[300px] md:h-[450px]"></div>
      </div>
    </div>
  );
};

export default Tree1;
