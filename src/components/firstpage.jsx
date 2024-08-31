"use client";
import { auth, provider, signInWithPopup } from "../app/firebaseConfig";
import React, { useEffect, useRef, useState } from "react";
import { gsap, Expo } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AnimationPage = () => {
  const triggerzone = useRef(null);
  const headingRef = useRef(null);
  const clockRef = useRef(null);
  const buttonref = useRef(null);
  const imgref1 = useRef(null);
  const imgrefbg = useRef(null);
  const days = useRef(null);
  const [background, setBackground] = useState(20);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");

  useEffect(() => {

    let ctx = gsap.context(() => {
      gsap.to(imgref1.current, { rotate: 360,scale: 400, duration: 3, ease: Expo.easeIn });
      gsap.to(imgref1.current, { opacity:0,delay: 2, duration: 1, ease: Expo.easeIn });
      gsap.to(imgrefbg.current, { opacity:0,delay: 2, duration: 0, ease: Expo.easeIn });
      gsap.registerPlugin(ScrollTrigger);
      var tl = gsap.timeline({
        defaults: { duration: 1 },
        scrollTrigger: {
          trigger: triggerzone.current,
          start: "top top",
          end: "3000 bottom",
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
          y: "-=250",
        },
        0
      );
      tl.to(
        clockRef.current,
        {
          y: "-=250",
        },
        0
      );
    });

    return () => {
      ctx.revert();
    };
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

  const handleLinkClick = (link) => {
    setActiveLink(link);
    closeMenu();
  };

  return (
    
    <div ref={triggerzone} className="relative w-full h-screen overflow-hidden">
      <div ref={imgrefbg} className="absolute z-40">
        <img src="/ewastebg.jpg" className="w-screen h-screen bg-cover bg-center" alt="recycle" />
      </div>
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover opacity-50"
      >
        <source src="/bgvideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div ref={imgref1} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
        <img src="/bin.png" className="h-28" alt="recycle" />
      </div>
      <div className="relative z-10 flex flex-col w-full h-full">
        <nav className="z-20 bg-opacity-0 bg-black text-white px-4 flex items-center justify-between">
          <div className="flex-shrink-0">
            <img src="/nav-logo.png" alt="logo" className="h-28" />
          </div>

          {/* Navbar Links - Visible in Desktop */}
          <ul className="hidden md:flex justify-center md:text-lg text-2xl space-x-6">
            <li>
              <a
                href="#home"
                onClick={() => handleLinkClick("#home")}
                className={`font-bold px-6 ${
                  activeLink === "#home" ? "text-white" : "text-gray-400"
                }`}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                onClick={() => handleLinkClick("#about")}
                className={`font-bold px-6 ${
                  activeLink === "#about" ? "text-white" : "text-gray-400"
                }`}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#events"
                onClick={() => handleLinkClick("#events")}
                className={`font-bold px-6 ${
                  activeLink === "#events" ? "text-white" : "text-gray-400"
                }`}
              >
                Events
              </a>
            </li>
            <li>
              <a
                href="#sponsors"
                onClick={() => handleLinkClick("#sponsors")}
                className={`font-bold px-6 ${
                  activeLink === "#sponsors" ? "text-white" : "text-gray-400"
                }`}
              >
                Sponsors
              </a>
            </li>
            <li>
              <a
                href="#team"
                onClick={() => handleLinkClick("#team")}
                className={`font-bold px-6 ${
                  activeLink === "#team" ? "text-white" : "text-gray-400"
                }`}
              >
                Team
              </a>
            </li>
          </ul>

          <div className="hidden md:block flex-shrink-0 pr-8">
            <button className="text-[#31771F] border-2 border-white px-12 py-4 rounded-full tracking-widest uppercase font-bold text-sm bg-white hover:bg-white hover:text-[#31771F] hover:border-[#31771F] transition duration-200">
              Login
            </button>
          </div>

          <div
            className={`fixed top-0 left-0 h-full w-64 bg-black text-white transform ${
              isMenuOpen ? "translate-x-0" : "-translate-x-full"
            } transition-transform duration-300 ease-in-out md:hidden z-20`}
          >
            <ul className="flex flex-col space-y-6 p-8">
              <li>
                <a
                  href="#home"
                  onClick={() => handleLinkClick("#home")}
                  className={`font-bold text-xl ${
                    activeLink === "#home" ? "text-white" : "text-gray-400"
                  }`}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  onClick={() => handleLinkClick("#about")}
                  className={`font-bold text-xl ${
                    activeLink === "#about" ? "text-white" : "text-gray-400"
                  }`}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#events"
                  onClick={() => handleLinkClick("#events")}
                  className={`font-bold text-xl ${
                    activeLink === "#events" ? "text-white" : "text-gray-400"
                  }`}
                >
                  Events
                </a>
              </li>
              <li>
                <a
                  href="#sponsors"
                  onClick={() => handleLinkClick("#sponsors")}
                  className={`font-bold text-xl ${
                    activeLink === "#sponsors" ? "text-white" : "text-gray-400"
                  }`}
                >
                  Sponsors
                </a>
              </li>
              <li>
                <a
                  href="#team"
                  onClick={() => handleLinkClick("#team")}
                  className={`font-bold text-xl ${
                    activeLink === "#team" ? "text-white" : "text-gray-400"
                  }`}
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
            <img src="./zypher-main.png" className="h-96" />
          </h1>
          <div
            ref={clockRef}
            className="w-full h-96 rounded-2xl flex gap-9 flex-col items-center justify-center bg-cover bg-center translate-y-44"
          >
            <div className="flex items-start justify-center w-full gap-1.5 count-down-main">
              <div className="timer">
                <div className="rounded-xl bg-white/25 backdrop-blur-sm py-3 min-w-[96px] flex items-center justify-center flex-col gap-1 px-3">
                  <h3 className="countdown-element days font-manrope font-semibold text-2xl text-white text-center">00</h3>
                  <p className="text-lg  font-normal text-white mt-1 text-center w-full">
                    Days
                  </p>
                </div>
              </div>

              <div className="timer">
                <div className="rounded-xl bg-white/25 backdrop-blur-sm py-3 min-w-[96px] flex items-center justify-center flex-col gap-1 px-3">
                  <h3 className="countdown-element hours font-manrope font-semibold text-2xl text-white text-center">00</h3>
                  <p className="text-lg font-normal text-white mt-1 text-center w-full">
                    Hour
                  </p>
                </div>
              </div>

              <div className="timer">
                <div className="rounded-xl bg-white/25 backdrop-blur-sm py-3 min-w-[96px] flex items-center justify-center flex-col gap-1 px-3">
                  <h3 className="countdown-element minutes font-manrope font-semibold text-2xl text-white text-center">00</h3>
                  <p className="text-lg fo uppercasent-normal text-white mt-1 text-center w-full">
                    Minutes
                  </p>
                </div>
              </div>

              <div className="timer">
                <div className="rounded-xl bg-white/25 backdrop-blur-sm py-3 min-w-[96px] flex items-center justify-center flex-col gap-1 px-3">
                  <h3 className="countdown-element seconds font-manrope font-semibold text-2xl text-white text-center">00</h3>
                  <p className="text-lg fo uppercasent-normal text-white mt-1 text-center w-full">
                    Seconds
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-28">
            <button
              ref={buttonref}
              onClick={handleSignIn}
              className="opacity-0 px-8 py-3 border-2 border-green-500 bg-green-500 rounded-full text-white font-semibold hover:bg-purple-700 hover:border-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 flex items-center"
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
                  d="M17.25 6.75L21 12m0 0l-3.75 5.25M21 12H3"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimationPage;
