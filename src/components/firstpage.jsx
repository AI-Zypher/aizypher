"use client";
import { auth, provider, signInWithPopup } from "../app/firebaseConfig";
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AnimationPage = () => {
  const triggerzone = useRef(null);
  const headingRef = useRef(null);
  const [background, setBackground] = useState(20);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);
      var tl = gsap.timeline({
        defaults: { duration: 1 },
        scrollTrigger: {
          trigger: triggerzone.current,
          start: "top top",
          end: "5000 bottom",
          scrub: true,
          pin: true,
          onUpdate: (self) => {
            setBackground(Math.ceil(self.progress * 100 + 20));
          },
        },
      });
      tl.to(
        headingRef.current,
        {
          y: "-=540",
        },
        0
      );
    });
    return () => ctx.revert();
  }, []);

  const handleSignIn = async () => {
    try {
      await signInWithPopup(auth, provider);
      window.location.href = "/register";
    } catch (error) {
      console.error("Error during sign-in:", error.message);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div ref={triggerzone} className="relative w-full h-screen overflow-hidden">
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
        <nav className="z-20 bg-opacity-0 bg-black text-white p-4 flex items-center justify-between">
          <div className="flex-shrink-0">
            <img src="/logo.png" alt="logo" className="h-16" />
          </div>

          {/* Hamburger Menu Icon for Mobile */}
          <div className="block md:hidden z-30">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Navbar Links - Visible in Desktop */}
          <ul className="hidden md:flex justify-center md:text-xl text-2xl space-x-6">
            <li>
              <a href="#home" className="font-bold px-6">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="font-bold px-6">
                About
              </a>
            </li>
            <li>
              <a href="#events" className="font-bold px-6">
                Events
              </a>
            </li>
            <li>
              <a href="#sponsors" className="font-bold px-6">
                Sponsors
              </a>
            </li>
            <li>
              <a href="#team" className="font-bold px-6">
                Team
              </a>
            </li>
          </ul>

          {/* Login Button */}
          <div className="hidden md:block flex-shrink-0 pr-8">
            <button className="text-[#31771F] border-2 border-white px-12 py-4 rounded-full tracking-widest uppercase font-bold text-xl bg-white hover:bg-white hover:text-[#31771F] hover:border-[#31771F] transition duration-200">
              Login
            </button>
          </div>

          {/* Sliding Menu for Mobile */}
          <div
            className={`fixed top-0 left-0 h-full w-64 bg-black text-white transform ${
              isMenuOpen ? "translate-x-0" : "-translate-x-full"
            } transition-transform duration-300 ease-in-out md:hidden z-20`}
          >
            <ul className="flex flex-col space-y-6 p-8">
              <li>
                <a
                  href="#home"
                  onClick={closeMenu}
                  className="font-bold text-xl"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  onClick={closeMenu}
                  className="font-bold text-xl"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#events"
                  onClick={closeMenu}
                  className="font-bold text-xl"
                >
                  Events
                </a>
              </li>
              <li>
                <a
                  href="#sponsors"
                  onClick={closeMenu}
                  className="font-bold text-xl"
                >
                  Sponsors
                </a>
              </li>
              <li>
                <a
                  href="#team"
                  onClick={closeMenu}
                  className="font-bold text-xl"
                >
                  Team
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <div className="flex flex-col items-center justify-center flex-grow">
          <h1
            ref={headingRef}
            id="zypherheading"
            className="translate-y-96 text-white text-6xl md:text-8xl font-extrabold tracking-wide drop-shadow-lg text-center"
          >
            Welcome to AI-ZYPHER 2024
          </h1>
          <div className="mt-28">
            <button
              onClick={handleSignIn}
              className="px-8 py-3 border-2 border-green-500 bg-green-500 rounded-full text-white font-semibold hover:bg-purple-700 hover:border-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 flex items-center"
            >
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
      <div className="h-screen w-screen bg-black">
        <p className="text-white">hello</p>
      </div>
    </div>
  );
};

export default AnimationPage;
