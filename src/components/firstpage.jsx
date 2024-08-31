"use client";
import { auth, provider, signInWithPopup } from "../app/firebaseConfig";
import React, { useEffect, useRef, useState } from "react";
import { gsap, Expo } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import NavBar from "./navbar";

gsap.registerPlugin(ScrollTrigger);

const AnimationPage = () => {
  const triggerzone = useRef(null);
  const headingRef = useRef(null);
  const clockRef = useRef(null);
  const buttonref = useRef(null);
  const imgref1 = useRef(null);
  const imgrefbg = useRef(null);
  const days = useRef(null);
  const foregroundImageRRef = useRef(null); // New ref for foreground image
  const foregroundImageLRef = useRef(null); // New ref for foreground image
  const [background, setBackground] = useState(20);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");

  useEffect(() => {

    let ctx = gsap.context(() => {
      gsap.to(imgref1.current, { rotate: 360, scale: 400, duration: 3, ease: Expo.easeIn });
      gsap.to(imgref1.current, { opacity: 0, delay: 2, duration: 1, ease: Expo.easeIn });
      gsap.to(imgrefbg.current, { opacity: 0, delay: 2, duration: 0, ease: Expo.easeIn });
      // gsap.to(foregroundImageRef.current, { opacity: 1, delay: 3, duration: 2, ease: Expo.easeOut }); // Animate the foreground image

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
          y: "-=350",
          opacity:1,
        },
        0
      );
      tl.to(
        foregroundImageRRef.current,
        {
          x: "-=550",
          opacity:0,
          
        },
        0
      );
      tl.to(
        foregroundImageLRef.current,
        {
          opacity:0,
          x: "+=550",
        },
        0
      );
      tl.to(
        clockRef.current,
        {
          y: "-=350",
          opacity:1,
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

  const targetDate = new Date("2024-10-01");

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(targetDate));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  function calculateTimeLeft(targetDate) {
    const now = new Date();
    const target = new Date(targetDate);
    const difference = target - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  }

  return (
    <div
      id="home"
      ref={triggerzone}
      className="relative w-full h-screen overflow-hidden"
    >
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover opacity-50 z-10"
      >
        <source src="/bgvideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="relative z-10 flex flex-col w-full h-full">
        <NavBar activeLink={activeLink} handleLinkClick={handleLinkClick} />
        {/* <nav className="relative z-50 bg-opacity-0 bg-black text-white px-4 flex items-center justify-between">
          <div className="flex-shrink-0">
            <img src="/nav-logo.png" alt="logo" className="h-28" />
          </div>

          <ul className="hidden md:flex justify-center md:text-lg text-2xl space-x-6">
            {["#home", "#about", "#events", "#sponsors", "#team"].map(
              (link) => (
                <li key={link}>
                  <a
                    href={link}
                    onClick={() => handleLinkClick(link)}
                    className={`font-bold px-6 ${
                      activeLink === link ? "text-white" : "text-gray-400"
                    }`}
                  >
                    {link.replace("#", "").charAt(0).toUpperCase() +
                      link.slice(2)}
                  </a>
                </li>
              )
            )}
          </ul>

          <div className="hidden md:block flex-shrink-0 pr-8">
            <button
              onClick={handleSignIn}
              className="text-[#31771F] border-2 border-white px-12 py-4 rounded-full tracking-widest font-bold text-sm bg-white hover:bg-white hover:text-[#31771F] hover:border-[#31771F] transition duration-200"
            >
              Login
            </button>
          </div>

          <button
            className="md:hidden flex items-center text-white"
            onClick={toggleMenu}
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>

          <div
            className={`fixed top-0 left-0 h-full w-64 bg-black text-white transform ${
              isMenuOpen ? "translate-x-0" : "-translate-x-full"
            } transition-transform duration-300 ease-in-out md:hidden z-20`}
          >
            <ul className="flex flex-col space-y-6 p-8">
              {["#home", "#about", "#events", "#sponsors", "#team"].map(
                (link) => (
                  <li key={link}>
                    <a
                      href={link}
                      onClick={() => handleLinkClick(link)}
                      className={`font-bold text-xl ${
                        activeLink === link ? "text-white" : "text-gray-400"
                      }`}
                    >
                      {link.replace("#", "").charAt(0).toUpperCase() +
                        link.slice(2)}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>
        </nav> */}

        <div className="flex flex-col items-center justify-center flex-grow">
          <h1
            ref={headingRef}
            id="zypherheading"
            className="translate-y-96 tracking-wide drop-shadow-lg opacity-0"
          >
            <img src="./zypher-main.png" className="lg:h-96 sm:h-40" />
          </h1>
          <div
            ref={clockRef}
            className="opacity-0 w-full h-auto max-w-4xl mx-auto rounded-2xl flex flex-col items-center justify-center bg-cover bg-center translate-y-44 p-4"
          >
            <div className="flex flex-wrap items-start justify-center w-full gap-4 mt-32 md:gap-9">
              <div className="timer flex flex-col items-center justify-center">
                <div className="rounded-xl bg-white/15 backdrop-blur-sm py-2 md:py-3 min-w-[80px] md:min-w-[96px] flex items-center border border-white justify-center flex-col px-2 md:px-3">
                  <h3 className="countdown-element days font-manrope font-semibold text-4xl md:text-6xl text-white text-center">
                    {timeLeft.days}
                  </h3>
                  <p className="text-xs md:text-sm font-normal text-white text-center w-full">
                    Days
                  </p>
                </div>
              </div>

              <div className="timer flex flex-col items-center justify-center">
                <div className="rounded-xl bg-white/15 backdrop-blur-sm py-2 md:py-3 min-w-[80px] md:min-w-[96px] flex items-center border border-white justify-center flex-col px-2 md:px-3">
                  <h3 className="countdown-element days font-manrope font-semibold text-4xl md:text-6xl text-white text-center">
                    {timeLeft.hours}
                  </h3>
                  <p className="text-xs md:text-sm font-normal text-white text-center w-full">
                    Hours
                  </p>
                </div>
              </div>

              <div className="timer flex flex-col items-center justify-center">
                <div className="rounded-xl bg-white/15 backdrop-blur-sm py-2 md:py-3 min-w-[80px] md:min-w-[96px] flex items-center border border-white justify-center flex-col px-2 md:px-3">
                  <h3 className="countdown-element days font-manrope font-semibold text-4xl md:text-6xl text-white text-center">
                    {timeLeft.minutes}
                  </h3>
                  <p className="text-xs md:text-sm font-normal text-white text-center w-full">
                    Minutes
                  </p>
                </div>
              </div>

              <div className="timer flex flex-col items-center justify-center">
                <div className="rounded-xl bg-white/15 backdrop-blur-sm py-2 md:py-3 min-w-[80px] md:min-w-[96px] flex items-center border border-white justify-center flex-col px-2 md:px-3">
                  <h3 className="countdown-element days font-manrope font-semibold text-4xl md:text-6xl text-white text-center">
                    {timeLeft.seconds}
                  </h3>
                  <p className="text-xs md:text-sm font-normal text-white text-center w-full">
                    Seconds
                  </p>
                </div>
              </div>
            </div>
          </div>
          <img
            ref={foregroundImageRRef}
            src="bushL.png"
            alt="Foreground Image"
            className="absolute bottom-0 left-0 w-full h-auto filter brightness-50"
          />
          <img
            ref={foregroundImageLRef}
            src="bushR.png"
            alt="Foreground Image"
            className="absolute bottom-0 right-0 w-full h-auto filter brightness-50"
          />
        </div>
      </div>
    </div>
  );
};

export default AnimationPage;