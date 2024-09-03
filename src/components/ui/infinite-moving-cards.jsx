  "use client";
  import { AnimatePresence, motion } from "framer-motion";
  import { cn } from "../../../lib/utils";
  import React, { useEffect, useState, useRef } from "react";
  import Link from "next/link";

  export const InfiniteMovingCards = ({
    items,
    direction = "left",
    speed = "fast",
    pauseOnHover = false,
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
      speed === "fast" ? "1s" : speed === "normal" ? "40s" : "80s";

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
            "flex min-w-full shrink-0 gap-10 py-4 w-max flex-nowrap",
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
                  <div className="relative w-full h-full">
                    <img
                      src={item.src}
                      alt={item.title}
                      className="object-cover w-full h-full rounded-3xl"
                    />
                    <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/50 to-transparent backdrop-blur-md rounded-b-3xl flex items-center justify-center pr-4 z-50">
                      <div className="flex flex-grow justify-center">
                        <h3 className="text-white text-sm">{item.title}</h3>
                      </div>
                      {/* Uncomment and adjust the following line if you need the green dot */}
                      {/* <div className="h-5 w-5 bg-green-500 rounded-full flex items-center justify-center absolute right-4"></div> */}
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
