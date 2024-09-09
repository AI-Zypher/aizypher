import React from "react";
import Image from "next/image";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import Link from "next/link";

export const runtime = 'edge';


const DummyContent = () => (
  <>
    {[...new Array(3).fill(1)].map((_, index) => (
      <div
        key={"dummy-content" + index}
        className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
      >
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
          <span className="font-bold text-neutral-700 dark:text-neutral-200">
            The first rule of Apple club is that you boast about Apple club.
          </span>{" "}
          Keep a journal, quickly jot down a grocery list, and take amazing
          class notes. Want to convert those notes to text? No problem.
          Langotiya jeetu ka mara hua yaar is ready to capture every thought.
        </p>
        <Image
          src="https://cdn.jsdelivr.net/gh/MohamedArafath205/cdn.aizypher@main/card.png"
          alt="Macbook mockup from Aceternity UI"
          height="500"
          width="500"
          className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
        />
      </div>
    ))}
  </>
);

const data = [
  {
    category: "AI Escape Room",
    title: "AI Escape Room",
    src: "https://cdn.jsdelivr.net/gh/MohamedArafath205/cdn.aizypher@main/escaperoom.png",
    content: <DummyContent />,
    link: "/AIT01",  
  },
  {
    category: "Battle Of Bugs",
    title: "Battle Of Bugs",
    src: "https://cdn.jsdelivr.net/gh/MohamedArafath205/cdn.aizypher@main/battleofbugs.png",
    content: <DummyContent />,
    link: "/AIT02",
  },
  {
    category: "Code Premier League",
    title: "Code Premier League ",
    src: "https://cdn.jsdelivr.net/gh/MohamedArafath205/cdn.aizypher@main/Codeauction.png",
    content: <DummyContent />,
    link: "/AIT03",
  },
  {
    category: "Shark Tank",
    title: "Shark Tank",
    src: "https://cdn.jsdelivr.net/gh/MohamedArafath205/cdn.aizypher@main/sharktank.png",
    content: <DummyContent />,
    link: "/AIT04",
  },
  {
    category: "Codecrafters: The Murder Mystery ",
    title: "Codecrafters: The Murder Mystery",
    src: "https://cdn.jsdelivr.net/gh/MohamedArafath205/cdn.aizypher@main/murdermystery.png",
    content: <DummyContent />,
    link: "/AIT05",
  },
  {
    category: "Spin a Web",
    title: "Spin a Web",
    src: "https://cdn.jsdelivr.net/gh/MohamedArafath205/cdn.aizypher@main/spinaweb.png",
    content: <DummyContent />,
    link: "/AIT06",
  },
  {
    category: "Poster Presentation - Canvart ",
    title: "Poster Presentation - Canvart",
    src: "https://cdn.jsdelivr.net/gh/MohamedArafath205/cdn.aizypher@main/canvart.png",
    content: <DummyContent />,
    link: "/AIT07",
  },
  {
    category: "Mini MUN",
    title: "Mini MUN",
    src: "https://cdn.jsdelivr.net/gh/MohamedArafath205/cdn.aizypher@main/MiniMUN.png",
    content: <DummyContent />,
    link: "/AIT08",
  },
];

const data2 = [
  {
    category: "Mr. & Ms. Zypher",
    title: "Mr. & Ms. Zypher",
    src: "https://cdn.jsdelivr.net/gh/MohamedArafath205/cdn.aizypher@main/MrMsZypher.png",
    content: <DummyContent />,
    link: "/AIN01",  
  },
  {
    category: "2 Minutes to Talent",
    title: "2 Minutes to Talent",
    src: "https://cdn.jsdelivr.net/gh/MohamedArafath205/cdn.aizypher@main/2minutesoftalent.png",
    content: <DummyContent />,
    link: "/AIN02",
  },
  {
    category: "Esports Royal Battle",
    title: "Esports Royal Battle",
    src: "https://cdn.jsdelivr.net/gh/MohamedArafath205/cdn.aizypher@main/FIFA.png",
    content: <DummyContent />,
    link: "/AIN03",
  },
  {
    category: "Adzap",
    title: "Adzap",
    src: "https://cdn.jsdelivr.net/gh/MohamedArafath205/cdn.aizypher@main/Adzap.png",
    content: <DummyContent />,
    link: "/AIN04",
  },
  {
    category: "Fast & Curious",
    title: "Fast & Curious",
    src: "https://cdn.jsdelivr.net/gh/MohamedArafath205/cdn.aizypher@main/MuderMystery.png",
    content: <DummyContent />,
    link: "/AIN05",
  },
];

export function AppleCardsCarouselDemo({ type }) {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full relative">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl text-center mt-10 md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans z-10 relative">
        {type}
      </h2>
      <Carousel items={cards} className="relative z-10" />
    </div>
  );
}

export function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards items={data} direction="right" speed="slow" />
    </div>
  );
}

const Events = () => {
  return (
    <div
      id="events"
      className="relative items-center justify-center bg-black w-full h-full"
    >
      <div className="relative flex items-center justify-center py-10 z-10 mt-20">
        <h1 className="text-white text-4xl sm:text-6xl md:text-7xl lg:text-8xl uppercase font-bold text-center">
          All Events
        </h1>
      </div>
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="https://cdn.jsdelivr.net/gh/MohamedArafath205/cdn.aizypher@main/white-bg.png"
          alt="Mirrored Background"
          style={{
            transform: "scaleX(-1)",
          }}
          className="w-full h-full"
        />
      </div>

      <div className="relative flex items-center justify-center py-10 z-10 mt-10">
          <h1 className="text-white text-4xl sm:text-3xl md:text-4xl lg:text-5xl text-center">
            Technical Events
          </h1>
      </div>
      <div className="h-[40rem] rounded-md flex flex-col antialiased dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards items={data} direction="right" speed="slow" />
      </div>
      <Link href="/events">
        
      </Link>
      <Link href="/events" className="mt-5 ">
        <div className="relative flex items-center justify-center py-10 z-10 mt-20">
          <h1 className="text-white text-4xl sm:text-3xl md:text-4xl lg:text-5xl text-center">
            Non Technical Events
          </h1>
        </div>
      </Link>

      <div className="h-[40rem] rounded-md flex flex-col antialiased dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <Link href="/AI01"><InfiniteMovingCards items={data2} direction="left" speed="slow" /></Link>
      </div>
      
    </div>
  );
};

export default Events;
