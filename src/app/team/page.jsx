"use client";
import React from "react";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import Image from "next/image";
import Navbar from '@/components/navbar';
export default function TeamPage() {

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

  return (
    <div>
      <Navbar />
      <h1 className="mx-full mt-[8vh] text-center text-[50px] px-[1vh] font-bold">MEET OUR CORE TEAM</h1>
    <div class="grid grid-cols-1 gap-5 p-5 bg-black mt-[4vh]
                sm:grid-cols-1
                md:grid-cols-1
                lg:grid-cols-2
                xl:grid-cols-3
                2xl:grid-cols-4">
      {sections.map((section) => (
      <div className="relative mx-auto w-full max-w-sm mb-[5vh]">
        <BackgroundGradient className="rounded-[22px] p-4 sm:p-10 bg-white dark:bg-zinc-900">
          <Image
            height="400"
            width="400"
            className="object-contain"
          />
          <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
            {section.title}
          </p>

          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            The Air Jordan 4 Retro Reimagined Bred will release on Saturday,
            February 17, 2024. Your best opportunity to get these right now is
            by entering raffles and waiting for the official releases.
          </p>
        </BackgroundGradient>
      </div>
      ))}
    </div>
    </div>
  );
}
