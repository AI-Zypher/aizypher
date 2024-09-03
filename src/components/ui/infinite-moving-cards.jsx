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
                className="rounded-3xl bg-gray-100 dark:bg-neutral-900 h-80 w-56 md:h-[40rem] md:w-96 overflow-hidden flex flex-col items-start justify-start relative z-10"
              >
                <img
                  src={item.src}
                  alt={item.title}
                  className="object-cover absolute inset-0 w-full h-full"
                />
                <div className="absolute h-full top-0 inset-x-0 bg-gradient-to-b from-black/50 via-transparent to-transparent z-30 pointer-events-none" />
                {/* <div className="relative z-40 p-8">
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
            </div> */}
                <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/50 to-transparent backdrop-blur-md flex justify-end items-center pr-4 z-50">
                  <div className="h-5 w-5 bg-green-500 rounded-full flex items-center justify-center"></div>
                </div>
              </motion.button>
            </Link>
          ) : null
        )}
      </ul>
    </div>
  );
};
