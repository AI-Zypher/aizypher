import React from "react";
import Image from "next/image";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";



// Dummy content for the cards
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
          src="/card.png"
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

// Testimonials data for the InfiniteMovingCards component
const testimonials = [
  {
    quote:
      "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
    name: "Charles Dickens",
    title: "A Tale of Two Cities",
  },
  {
    quote:
      "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
    name: "William Shakespeare",
    title: "Hamlet",
  },
  {
    quote: "All that we see or seem is but a dream within a dream.",
    name: "Edgar Allan Poe",
    title: "A Dream Within a Dream",
  },
  {
    quote:
      "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
    name: "Jane Austen",
    title: "Pride and Prejudice",
  },
  {
    quote:
      "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
    name: "Herman Melville",
    title: "Moby-Dick",
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
      <InfiniteMovingCards
        items={data}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const Events = () => {
  return (
    <div className="relative items-center justify-center bg-black w-full h-full">
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
      <div className="relative flex items-center justify-center py-10 z-10 mt-20">
        <h1 className="text-white text-4xl sm:text-6xl md:text-7xl lg:text-8xl uppercase font-bold text-center">
          Unleash Your Talents
        </h1>
      </div>
      <div className="relative items-center justify-center bg-black w-full h-full">
      
      
    </div>
    
    <div className="relative flex items-center justify-center py-10 z-10 mt-10">
    <a href="" className="mt-5 ">
        <h1 className="text-white text-4xl sm:text-3xl md:text-4xl lg:text-5xl text-center">
          Technical Events
        </h1>
      </a>  
      </div>
      {/* cards */}
      <div className="h-[40rem] rounded-md flex flex-col antialiased dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards items={data} direction="right" speed="slow" />
      </div>
      <div className="relative flex items-center justify-center py-10 z-10 mt-10">
      <button class="px-8 py-3   rounded-full bg-purple-700 text-white font-semibold  focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 flex items-center space-x-2">View All &nbsp; <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" stroke-width="1.1" stroke="currentColor" class="h-4 w-4"><path stroke-linecap="round" stroke-linejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"></path></svg></button>
      </div>
      <a href="" className="mt-5 ">
      <div className="relative flex items-center justify-center py-10 z-10 mt-20">
        <h1 className="text-white text-4xl sm:text-3xl md:text-4xl lg:text-5xl text-center">
          Non Technical Events
        </h1>
      </div>
      </a>
      
      <div className="h-[40rem] rounded-md flex flex-col antialiased dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards items={data} direction="left" speed="slow" />
      </div>
      <div className="relative flex items-center justify-center py-10 z-10 mt-10">
      <button class="px-8 py-3   rounded-full bg-purple-700 text-white font-semibold  focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 flex items-center space-x-2">View All &nbsp; <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" stroke-width="1.1" stroke="currentColor" class="h-4 w-4"><path stroke-linecap="round" stroke-linejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"></path></svg></button>
      </div>
      
    </div>
  );
};

export default Events;
