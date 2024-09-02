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
  const foregroundImageRRef = useRef(null); // New ref for foreground image
  const foregroundImageLRef = useRef(null); // New ref for foreground image
  const [background, setBackground] = useState(20);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");

  // useEffect(() => {

  //   let ctx = gsap.context(() => {
  //     gsap.to(imgref1.current, { rotate: 360, scale: 400, duration: 3, ease: Expo.easeIn });
  //     gsap.to(imgref1.current, { opacity: 0, delay: 2, duration: 1, ease: Expo.easeIn });
  //     gsap.to(imgrefbg.current, { opacity: 0, delay: 2, duration: 0, ease: Expo.easeIn });
  //     // gsap.to(foregroundImageRef.current, { opacity: 1, delay: 3, duration: 2, ease: Expo.easeOut }); // Animate the foreground image

  //     gsap.registerPlugin(ScrollTrigger);
  //     var tl = gsap.timeline({
  //       defaults: { duration: 1 },
  //       scrollTrigger: {
  //         trigger: triggerzone.current,
  //         start: "top top",
  //         end: "3000 bottom",
  //         scrub: true,
  //         pin: true,
  //         onUpdate: (self) => {
  //           setBackground(Math.ceil(self.progress * 100 + 20));
  //         },
  //       },
  //     });
  //     tl.to(
  //       headingRef.current,
  //       {
  //         y: "-=350",
  //         opacity:1,
  //       },
  //       0
  //     );
  //     tl.to(
  //       foregroundImageRRef.current,
  //       {
  //         x: "-=550",
  //         opacity:0,
          
  //       },
  //       0
  //     );
  //     tl.to(
  //       foregroundImageLRef.current,
  //       {
  //         opacity:0,
  //         x: "+=550",
  //       },
  //       0
  //     );
  //     tl.to(
  //       clockRef.current,
  //       {
  //         y: "-=350",
  //         opacity:1,
  //       },
  //       0
  //     );
  //   });

  //   return () => {
  //     ctx.revert();
  //   };
  // }, []);

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
        <source
          src="https://cdn.jsdelivr.net/gh/MohamedArafath205/cdn.aizypher@main/bgvideo.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      <div className="relative z-10 flex flex-col w-full h-full">
        <div className="flex flex-col items-center justify-center h-full">
          <h1
            id="zypherheading"
            className="tracking-wide drop-shadow-lg z-50 pt-30"
          >
            <img
              src="https://cdn.jsdelivr.net/gh/MohamedArafath205/cdn.aizypher@main/zypher-main.png"
              className="h-24 sm:h-40 md:h-64 lg:h-96"
            />
          </h1>
          <div className="w-full h-auto max-w-4xl mx-auto rounded-2xl flex flex-col items-center justify-center bg-cover bg-center">
            <div className="flex flex-wrap items-start justify-center w-full gap-4 md:gap-9">
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
        </div>
      </div>
    </div>
  );
};

export default AnimationPage;