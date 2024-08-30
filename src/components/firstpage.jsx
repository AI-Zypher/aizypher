"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AnimationPage = () => {
  const headingRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      headingRef.current,
      { y: '150%' }, // Start from below the viewport
      {
        y: '-50%', // End up slightly above the viewport
        scrollTrigger: {
          trigger: headingRef.current,
          start: 'top bottom', // Start the animation when the top of the heading reaches the bottom of the viewport
          end: 'bottom top', // End the animation when the bottom of the heading reaches the top of the viewport
          scrub: true, // Make the animation linked to the scroll position
        },
        duration: 2,
        ease: 'power2.out',
      }
    );
  }, []);

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/bgvideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="relative z-10 flex flex-col w-full h-full">
        <nav className="bg-opacity-0 bg-black text-white p-4 flex items-center justify-between">
          <div className="flex-shrink-0">
            <img src="/logo.png" alt="logo" className="h-16" />
          </div>
          <ul className="flex justify-center md:text-xl text-2xl space-x-6">
            <li>
              <a href="#home" className="font-bold px-6">Home</a>
            </li>
            <li>
              <a href="#about" className="font-bold px-6">About</a>
            </li>
            <li>
              <a href="#events" className="font-bold px-6">Events</a>
            </li>
            <li>
              <a href="#sponsors" className="font-bold px-6">Sponsors</a>
            </li>
            <li>
              <a href="#team" className="font-bold px-6">Team</a>
            </li>
          </ul>
          <div className="flex-shrink-0 pr-8">
            <button className="text-[#31771F] border-2 border-white px-12 py-4 rounded-full tracking-widest uppercase font-bold text-xl bg-white hover:bg-white hover:text-[#31771F] hover:border-[#31771F] transition duration-200">
              Login
            </button>
          </div>
        </nav>

        <div id="zypherhead" className="flex flex-grow items-center justify-center">
          <h1 ref={headingRef} id="zypherheading" className="text-white text-6xl md:text-8xl font-extrabold tracking-wide drop-shadow-lg">
            Welcome to AI-ZYPHER 2024
          </h1>
        </div>
      </div>
      <div className="h-screen w-screen bg-black">hello</div>
    </div>
  );
};

export default AnimationPage;
