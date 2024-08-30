"use client";
import React from 'react';
import { auth, provider, signInWithPopup } from "../app/firebaseConfig";

const VideoBackground = () => {
  const handleSignIn = async () => {
    try {
      await signInWithPopup(auth, provider);
      window.location.href = "/register";
    } catch (error) {
      console.error("Error during sign-in:", error.message);
    }
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover "
      >
        <source src="/bgvideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="relative z-10 flex flex-col w-full h-full">
        <nav className="bg-opacity-0 bg-black text-white p-4">
          <ul className="flex justify-center text-2xl space-x-6 mt-8">
            <li><a href="#home" className="font-bold px-6">Home</a></li>
            <li><a href="#about" className="font-bold px-6">About</a></li>
            <li><a href="#events" className="font-bold px-6">Events</a></li>
            <li><a href="#sponsors" className="font-bold px-6">Sponsors</a></li>
            <li><a href="#team" className="font-bold px-6">Team</a></li>
          </ul>
        </nav>

        <div className="flex flex-col items-center justify-center flex-grow">
          <h1 className="text-white text-6xl md:text-8xl font-extrabold tracking-wide drop-shadow-lg text-center">
            Welcome to AI-ZYPHER 2024
          </h1>
          <div className="mt-28">
              <button onClick={handleSignIn} className="px-8 py-3 border-2 border-green-500 bg-green-500 rounded-full text-white font-semibold hover:bg-purple-700 hover:border-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 flex items-center">
                Register  
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-3.5 w-3.5 ml-2" 
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>
              </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoBackground;
