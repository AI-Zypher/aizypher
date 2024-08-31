import React from "react";
import Image from "next/image";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

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

const DummyContent = () => {
  return (
    <>
      {[...new Array(3).fill(1)].map((_, index) => {
        return (
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
              Langotiya jeetu ka mara hua yaar is ready to capture every
              thought.
            </p>
            <Image
              src="/card.png"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
          </div>
        );
      })}
    </>
  );
};

const data = [
  {
    category: "Artificial Intelligence",
    title: "You can do more with AI.",
    src: "/card.png",
    content: <DummyContent />,
  },
  {
    category: "Productivity",
    title: "Enhance your productivity.",
    src: "/card.png",
    content: <DummyContent />,
  },
  {
    category: "Product",
    title: "Launching the new Apple Vision Pro.",
    src: "/card.png",
    content: <DummyContent />,
  },
  {
    category: "Product",
    title: "Maps for your iPhone 15 Pro Max.",
    src: "/card.png",
    content: <DummyContent />,
  },
  {
    category: "iOS",
    title: "Photography just got better.",
    src: "/card.png",
    content: <DummyContent />,
  },
  {
    category: "Hiring",
    title: "Hiring for a Staff Software Engineer",
    src: "/card.png",
    content: <DummyContent />,
  },
];

{
  /* <div className="relative w-full h-full">
  <img
    src="/white-bg.png"
    alt="Mirrored Background"
    style={{
      objectFit: "cover",
      transform: "scaleX(-1)",
    }}
    className="w-full h-full"
  />
</div> */
}

const Events = () => {
  return (
    <div className="relative items-center justify-center bg-black w-full h-full">
      <div className="relative flex items-center justify-center py-10 z-10 mt-20">
        <h1 className="text-white text-4xl sm:text-6xl md:text-7xl lg:text-8xl uppercase font-bold text-center">
          Unleash Your Talents
        </h1>
      </div>
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="/white-bg.png"
          alt="Mirrored Background"
          style={{
            transform: "scaleX(-1)",
          }}
          className="w-full h-full"
        />
      </div>
      <AppleCardsCarouselDemo type="Technical Events" />
      <AppleCardsCarouselDemo type="Non Technical Events" />
    </div>
  );
};

export default Events;
