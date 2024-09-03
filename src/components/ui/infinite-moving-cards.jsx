"use client";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "../../../lib/utils";
import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}) => {
  const containerRef = useRef(null);
  const scrollerRef = useRef(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        scrollerRef.current.appendChild(duplicatedItem);
      });

      setStart(true);
    }
  }, []);

  const animationDirection = direction === "left" ? "forwards" : "reverse";
  const animationDuration =
    speed === "fast" ? "20s" : speed === "normal" ? "40s" : "80s";

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
        {items.map((item, index) =>
          item.link ? (
            <Link href={item.link} key={index}>
              <motion.button
                key={index}
                layoutId={item.layout ? `card-${item.title}` : undefined}
                onClick={() => console.log("Card clicked")} // Replace with actual open logic
                className="rounded-3xl bg-gray-100 dark:bg-neutral-900 h-80 w-56 md:h-96 md:w-72 overflow-hidden flex flex-col items-start justify-start relative z-10"
              >
                <img
                  src={item.src}
                  alt={item.title}
                  className="object-cover absolute inset-0 w-full h-full rounded-3xl"
                />
                <div className="absolute h-full top-0 inset-x-0 bg-gradient-to-b from-black/50 via-transparent to-transparent z-30 pointer-events-none rounded-3xl" />
                <div className="absolute bottom-0 left-0 right-0 h-[5rem] bg-gradient-to-t from-black/50 to-transparent backdrop-blur-md rounded-b-3xl flex flex-col justify-center items-center pr-4 z-50">
                  <div className="absolute bottom-0 left-0 right-0 flex justify-center items-center h-full">
                    <p className="text-cfb04d text-lg font-semibold">Your Text Here</p>
                    <div className="absolute bottom-4 right-4 h-3 w-3 bg-green-500 rounded-full flex items-center justify-center"></div>
                  </div>
                </div>
              </motion.button>
            </Link>
          ) : null
        )}
      </ul>
    </div>
  );
};
