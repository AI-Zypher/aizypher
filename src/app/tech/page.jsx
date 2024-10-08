"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-cards";
import { BackgroundBeams } from "@/components/ui/background-beams";

export default function EventsPage() {
  const items = [
    {
      src: "https://cdn.jsdelivr.net/gh/MohamedArafath205/cdn.aizypher@main/espaceroomp2.png",
      title: "AI ESCAPE ROOM",
      description: "Hover over this card to unleash the power of CSS perspective",
      link: "/AIT01",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/MohamedArafath205/cdn.aizypher@main/battleofbugsp.png",
      title: "BATTLE OF BUGS",
      description: "Hover over this card to unleash the power of CSS perspective",
      link: "/AIT02",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/MohamedArafath205/cdn.aizypher@main/codeauctionp.png",
      title: "CODE AUCTION",
      description: "Hover over this card to unleash the power of CSS perspective",
      link: "/AIT03",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/MohamedArafath205/cdn.aizypher@main/sharktankp.png",
      title: "SHARK TANK",
      description: "Hover over this card to unleash the power of CSS perspective",
      link: "/AIT04",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/MohamedArafath205/cdn.aizypher@main/codecraftersp.png",
      title: "CODECRAFTERS",
      description: "Hover over this card to unleash the power of CSS perspective",
      link: "/AIT05",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/MohamedArafath205/cdn.aizypher@main/spinawebp.png",
      title: "SPIN A WEB",
      description: "Hover over this card to unleash the power of CSS perspective",
      link: "/AIT06",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/MohamedArafath205/cdn.aizypher@main/cavnartp.png",
      title: "CANVART",
      description: "Hover over this card to unleash the power of CSS perspective",
      link: "/AIT07",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/MohamedArafath205/cdn.aizypher@main/minimunp.png",
      title: "MINI MUN",
      description: "Hover over this card to unleash the power of CSS perspective",
      link: "/AIT08",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/MohamedArafath205/cdn.aizypher@main/fastandcuriousp2.png",
      title: "FAST AND CURIOUS",
      description: "Hover over this card to unleash the power of CSS perspective",
      link: "/AIT09",
    },
    // Add more items...
  ];

  return (
    <div className="min-h-screen w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      {/* Background */}
      <BackgroundBeams className="absolute inset-0 z-0" />
      
      {/* Main Content Container */}
      <div className="container mx-auto py-10 px-4">
        {/* Responsive Grid: Single Column on Mobile, Two Columns on Larger Screens */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {items.map((item, index) => (
            <CardContainer
              key={index}
              className="flex items-center justify-center"
              containerClassName="group"
            >
              <CardBody className="bg-gray-50 relative dark:bg-black border rounded-xl p-6 border dark:border-white/[0.2] border-black/[0.1]">
                <CardItem
                  translateZ="50"
                  className="text-xl font-bold text-neutral-600 dark:text-white"
                >
                  {item.title}
                </CardItem>
                
                <CardItem translateZ="100" className="w-full mt-4">
                  <Image
                    src={item.src}
                    height={400}
                    width={400}
                    className="h-40 w-full sm:h-60 object-cover rounded-xl"
                    alt="thumbnail"
                  />
                </CardItem>
                <div className="flex justify-between items-center mt-10">
                  <Link href={item.link} passHref>
                    <CardItem
                      translateZ={20}
                      as="a"
                      className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold cursor-pointer"
                    >
                      View
                    </CardItem>
                  </Link>
                </div>
              </CardBody>
            </CardContainer>
          ))}
        </div>
      </div>
    </div>
  );
}
