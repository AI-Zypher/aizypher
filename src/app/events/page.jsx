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
