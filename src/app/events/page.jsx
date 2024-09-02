<<<<<<< HEAD
import React from "react";
import Navbar from '@/components/navbar';

const StreamingPage = () => {
  const sections = [
    { title: "Red Dead Redemption II" },
    { title: "PUBG Mobile" },
    { title: "Fortnite" },
    { title: "Call of Duty: Black Ops III" },
    { title: "Grand Theft Auto V" },
    { title: "AI Escape Room" },
    { title: "The Witcher 3: Wild Hunt" },
    { title: "Overwatch 2" },
  ];

  // const pageStyle = {
  //   marginTop: "5vh",
  //   display: "grid",
  //   gridTemplateColumns: "repeat(4, 1fr)",
  //   gap: "20px",
  //   padding: "20px",
  //   backgroundColor: "rgba(0, 0, 0, 1)",
  //   '@media (max-width: 1200px)': { // Adjust grid for tablets and smaller screens
  //     gridTemplateColumns: "repeat(3, 1fr)",
  //   },
  //   '@media (max-width: 900px)': { // Adjust grid for mobile screens
  //     gridTemplateColumns: "repeat(2, 1fr)",
  //   },
  //   '@media (max-width: 600px)': { // Stack items on very small screens
  //     gridTemplateColumns: "1fr",
  //   }
  // };


  return (
    <div>
      <Navbar />
      <div class="grid grid-cols-1 gap-10 p-4 bg-black mt-[5vh]
                sm:grid-cols-1
                md:grid-cols-1
                lg:grid-cols-2
                xl:grid-cols-3
                2xl:grid-cols-4
        "
                >
      {sections.map((section, index) => (
        <article id="cardevent" class="card relative w-[350px] h-[350px] mx-auto mt-8 rounded-lg shadow-lg overflow-hidden">
        <div class="thumb w-full h-[311px] bg-cover bg-center rounded-t-lg" ></div>
          <div class="h-[40px] pt-2 px-4 rounded-t-lg infos bg-white bg-opacity-20 backdrop-blur-md transition-transform duration-700 ease-in-out">
            <h2 class=" title text-[#152536] text-lg font-bold uppercase tracking-widest mb-2 relative z-10">
              {section.title}
            </h2>
            </div>
            <div class="h-[310px] pt-2 px-4 rounded-b-lg infos bg-white bg-opacity-20 backdrop-blur-md transition-transform duration-700 ease-in-out">
            <h3 class="seats text-xs text-[#152536]/70 uppercase mb-6 opacity-0 transition-opacity duration-500 delay-250"></h3>
            <p class="txt text-sm text-[#152536]/70 opacity-0 transition-opacity duration-500 delay-250">Join us for our Live Infinity Session in beautiful New York City. This is a 3 day intensive workshop where you'll learn how to become a better version of...</p>
          </div>
          <div class="overlay absolute inset-0 bg-white bg-opacity-0"></div>
      </article>
      ))}
=======
"use client";
import React, { createContext, useRef } from "react";
import { motion } from "framer-motion";
import { cn } from "../../../lib/utils";

const SingleCard = ({
  item,
  animationDirection,
  animationDuration,
  className,
  start = true,
  pauseOnHover = true,
}) => {
  const containerRef = useRef(null);
  const scrollerRef = useRef(null);

  return (
    <div
      ref={containerRef}
      className={cn("scroller relative z-20 max-w-7xl", className)}
      style={{
        "--animation-direction": animationDirection,
        "--animation-duration": animationDuration,
      }}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        <motion.button
          layoutId={item.layout ? `card-${item.title}` : undefined}
          onClick={() => console.log("Card clicked")} // Replace with actual open logic
          className="group rounded-3xl bg-gray-100 dark:bg-neutral-900 h-80 w-56 md:h-[40rem] md:w-96 overflow-hidden flex flex-col items-start justify-start relative z-10"
        >
          <img
            src={item.src}
            alt={item.title}
            className="object-cover absolute inset-0 w-full h-full"
          />
          <div className="absolute h-full top-0 inset-x-0 bg-gradient-to-b from-black/50 via-transparent to-transparent z-30 pointer-events-none transition-all duration-500 ease-in-out group-hover:bg-gradient-to-t group-hover:from-transparent group-hover:via-transparent group-hover:to-black/50" />
          <div className="relative z-40 p-8">
            <motion.p
              layoutId={item.layout ? `category-${item.category}` : undefined}
              className="text-white text-sm md:text-base font-medium font-sans text-left"
            >
              {item.category}
            </motion.p>
            <motion.p
              layoutId={item.layout ? `title-${item.title}` : undefined}
              className="text-white text-xl md:text-3xl font-semibold max-w-xs text-left [text-wrap:balance] font-sans mt-2"
            >
              {item.title}
            </motion.p>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/50 to-transparent backdrop-blur-md flex justify-end items-center pr-4 z-50 transition-all duration-500 ease-in-out group-hover:bottom-auto group-hover:bottom-0 group-hover:h-3/4" />
        </motion.button>
      </ul>
>>>>>>> 03beddd61d1425937a26f76654818016ac36ca93
    </div>
    </div>  
  );
};


const EventsPage = () => {
  const item = {
    src: "https://cdn.jsdelivr.net/gh/MohamedArafath205/cdn.aizypher@main/card.png",
    title: "Sample Card Title",
    category: "Sample Category",
    layout: true,
  };
  return(
    

<SingleCard
  item={item}
  animationDirection="left" 
  animationDuration="3s" 
  className="your-custom-class" 
/>
  )
}

export default EventsPage;
