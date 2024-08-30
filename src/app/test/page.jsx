"use client";
import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AnimationPage = () => {
  useEffect(() => {
    gsap.to("#page2 h1", {
      transform: "translateX(-180%)",
      scrollTrigger: {
        trigger: "#page2",
        scroller: "body",
        markers: true,
        start: "top 0%",
        end: "top -150%",
        scrub: 2,
        pin: true
      }
    });

    gsap.fromTo(
      "#page1 h1",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, stagger: 0.2, duration: 1 }
    );

    ScrollTrigger.create({
      trigger: "#page3",
      start: "top center",
      end: "bottom center",
      onEnter: () => console.log("Page 3 is in view"),
    });

  }, []);

  return (
    <div>
      <div id="page1" className="h-screen w-screen bg-red-600 text-white font-bold pt-36 pb-36 pl-9 text-9xl italic">
        <h1>WANNA</h1>
        <h1>SEE A COOL</h1>
        <h1>ANIMATION?</h1>
      </div>
      <div id="page2" className="h-screen w-screen bg-black text-orange-500 text-9xl pt-32 pl-9 font-sans overflow-x-hidden">
        <h1>OSAMABINLADEN</h1>
      </div>
      <div id="page3" className="h-screen w-screen bg-[#252021]"></div>
    </div>
  );
};

export default AnimationPage;
