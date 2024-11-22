'use client'
import React, { useEffect } from "react";
import Image from "next/image";

const Tree1 = () => {
//   useEffect(() => {
//     const initMap = () => {
//       const map = new google.maps.Map(document.getElementById("map"), {
//         center: { lat: 13.032469940776112, lng: 80.17918739139735 },
//         zoom: 21,
//         mapTypeId: google.maps.MapTypeId.SATELLITE,
//       });

//       // Creating a custom marker (pointer) on the map
//       const marker = new google.maps.Marker({
//         position: { lat: 13.032469940776112, lng: 80.17918739139735 },
//         map: map,
//         title: "Click here for more info!",
//       });

//       // When the marker is clicked, redirect to a page inside your website
//       marker.addListener("click", () => {
//         window.location.href = "/your-target-page"; // Replace with your desired page URL
//       });
//     };

//     if (window.google) {
//       initMap();
//     } else {
//       const script = document.createElement("script");
//       script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&callback=initMap`;
//       script.async = true;
//       document.head.appendChild(script);
//       window.initMap = initMap;
//     }
//   }, []);

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

      <div className="py-10 sm:text-xl md:text-3xl lg:text-6xl text-[#003000] font-extrabold text-center">
      &quot; A tree is a symbol of life, of growth, and of <br /> hope. When you plant a tree, you&apos;re not just <br /> growing a plant — you&apos;re growing a better future. &quot;
      </div>

      <img
        src="https://cdn.jsdelivr.net/gh/MohamedArafath205/cdn.aizypher@main/leaves1.png"
        alt=""
        className="absolute right-0 top-[63%] lg:top-[100%] transform translate-y-[-50%] translate-x-1/3 rotate-[-90deg] sm:w-[250px] md:w-[500px] lg:w-auto z-0"
      />

      {/* Main tree image */}
      <div className="flex flex-row justify-center">
        <img
          src="https://cdn.jsdelivr.net/gh/MohamedArafath205/cdn.aizypher@main/deepak.png"
          alt=""
          className="rounded-lg w-1/2 lg:w-1/3 h-auto"
        />
      </div>

      {/* Text about the person */}
      <h1 className="text-[#1d2818] font-extrabold text-xl md:text-5xl text-center pt-10">
        Shri. DEEPAK SRIVATSAVA
      </h1>

      <h1 className="text-[#253921] font-bold text-md md:text-3xl text-center py-4">
      IFS <br />
    Additional Principal Chief Conservator <br />
    of Forests and Member Secretary, <br />
    Tamil Nadu State Wetland Authority <br />
      </h1>

      {/* Map section */}
      <div className="flex flex-row lg:flex-row flex-col justify-evenly lg:space-x-10 space-y-10 lg:space-y-0 items-center py-10 px-10">
        <div className="w-full lg:w-1/3">
            <Image
            src="https://cdn.jsdelivr.net/gh/MohamedArafath205/cdn.aizypher@main/deepak1.jpg"
            alt="image1"
            width={500}
            height={300}
            className="w-full rounded-xl"
            />
        </div>
        <div className="w-full lg:w-1/3">
            <Image
            src="https://cdn.jsdelivr.net/gh/MohamedArafath205/cdn.aizypher@main/deepak2.jpg"
            alt="image2"
            width={500}
            height={300}
            className="w-full rounded-xl"
            />
        </div>
        </div>
        <div className="flex flex-row lg:flex-row flex-col justify-evenly lg:space-x-10 space-y-10 lg:space-y-0 items-center pt-0 pb-10 lg:py-10 px-10 ">
        <div className="w-full lg:w-1/3">
            <Image
            src="https://cdn.jsdelivr.net/gh/MohamedArafath205/cdn.aizypher@main/deepak3.jpg"
            alt="image3"
            width={500}
            height={300}
            className="w-full rounded-xl"
            />
        </div>
        <div className="w-full lg:w-1/3">
            <Image
            src="https://cdn.jsdelivr.net/gh/MohamedArafath205/cdn.aizypher@main/deepak4.jpg"
            alt="image4"
            width={500}
            height={300}
            className="w-full rounded-xl"
            />
        </div>
        </div>

    </div>
  );
};

export default Tree1;
