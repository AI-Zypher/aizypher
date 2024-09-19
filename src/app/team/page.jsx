"use client";
import React from "react";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import Image from "next/image";
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';

export default function TeamPage() {
  const sections = [
    { title: "SRAVANI NASIKA" ,role:"President",img:"https://cdn.jsdelivr.net/gh/MohamedArafath205/cdn.aizypher@main/sravani.jpg"},
    { title: "MALLAPRAGADA NIKHIL" ,role:"President",img:"https://cdn.jsdelivr.net/gh/MohamedArafath205/cdn.aizypher@main/nikhil.png"},
    { title: "PRAISY DAFFODIL" ,role:"Vice-President",img:"https://cdn.jsdelivr.net/gh/MohamedArafath205/cdn.aizypher@main/praisy.png"},
    { title: "VIDYUT SURESH" ,role:"Vice-President",img:"https://cdn.jsdelivr.net/gh/MohamedArafath205/cdn.aizypher@main/vidyut.png"},
    { title: "G.V MADHAV RAM SAMANVAY" ,role:"Vice-President",img:"https://cdn.jsdelivr.net/gh/MohamedArafath205/cdn.aizypher@main/madhav.png"},
    { title: "ISHA K.G" ,role:"Vice-President",img:"https://cdn.jsdelivr.net/gh/MohamedArafath205/cdn.aizypher@main/isha.png"},
    { title: "JANAKI NAGESHWARAN" ,role:"Media Head",img:"https://cdn.jsdelivr.net/gh/MohamedArafath205/cdn.aizypher@main/janaki.png"},
    { title: "SACHEEN SUBANIDHI" ,role:"Media Head",img:"https://cdn.jsdelivr.net/gh/MohamedArafath205/cdn.aizypher@main/sacheen.png"},
    { title: "ARSHAD KUMAR" ,role:"PR Marketing",img:"https://cdn.jsdelivr.net/gh/MohamedArafath205/cdn.aizypher@main/arshad.png"},
    { title: "ANISH KRISHNA G" ,role:"PR Marketing",img:"https://cdn.jsdelivr.net/gh/MohamedArafath205/cdn.aizypher@main/img1.png"},
    { title: "MUTHU KRISHNA PERUMAL" ,role:"Sponsership Head",img:"https://cdn.jsdelivr.net/gh/MohamedArafath205/cdn.aizypher@main/harshitha.png"},
    { title: "SARATH RAM.B" ,role:"Promotion Head",img:"https://cdn.jsdelivr.net/gh/MohamedArafath205/cdn.aizypher@main/sarath.png"},
    { title: "ADITHYA VENKATESH VD" ,role:"Promotion Head",img:"https://cdn.jsdelivr.net/gh/MohamedArafath205/cdn.aizypher@main/img1.png"},
    { title: "HARSHITHA G" ,role:"Admin",img:"https://cdn.jsdelivr.net/gh/MohamedArafath205/cdn.aizypher@main/harshitha.png"},
    { title: "SRISAKTHIESWAR GS" ,role:"Design Head",img:"https://cdn.jsdelivr.net/gh/MohamedArafath205/cdn.aizypher@main/shakti.png"},
    { title: "RAVINDRA J" ,role:"Design Head",img:"https://cdn.jsdelivr.net/gh/MohamedArafath205/cdn.aizypher@main/ravindra.png"},
    { title: "MOHAMED ARAFATH" ,role:"Website Head",img:"https://cdn.jsdelivr.net/gh/MohamedArafath205/cdn.aizypher@main/img1.png"},
    { title: "L B UPPILI" ,role:"Website Head",img:"https://cdn.jsdelivr.net/gh/MohamedArafath205/cdn.aizypher@main/uppili2.png"},
    { title: "NAVEEN SAMPATH" ,role:"Non-Technical Head",img:"https://cdn.jsdelivr.net/gh/MohamedArafath205/cdn.aizypher@main/naveen.png"},
    { title: "SANJEEVAN A" ,role:"Technical Head",img:"https://cdn.jsdelivr.net/gh/MohamedArafath205/cdn.aizypher@main/sanjeevan.png"},
    { title: "SHRIYA SANTHOSH" ,role:"Cultural Head",img:"https://cdn.jsdelivr.net/gh/MohamedArafath205/cdn.aizypher@main/shriya.png"},
    { title: "YUVAN ADITH" ,role:"Cultural Head",img:"https://cdn.jsdelivr.net/gh/MohamedArafath205/cdn.aizypher@main/yuvan.jpg"},
    { title: "LEANDER MORAIS" ,role:"Cultural Head",img:"https://cdn.jsdelivr.net/gh/MohamedArafath205/cdn.aizypher@main/leander.png"},

  ];

  return (
    <div>
      <a 
        href="/" 
        className="relative flex items-center justify-center w-16 h-16 border-2 border-green-500 bg-transparent rounded-full text-white font-semibold hover:bg-purple-700 hover:border-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 mt-4 ml-4"
      >
        <HomeRoundedIcon 
          fontSize="large" 
          className="text-white" 
        />
      </a>

      <h1 className="mx-auto mt-[8vh] text-center text-[50px] px-[1vh] font-bold">MEET OUR CORE TEAM</h1>

      <div className="grid grid-cols-1 gap-5 p-5 bg-black mt-[4vh]
                sm:grid-cols-1
                md:grid-cols-1
                lg:grid-cols-2
                xl:grid-cols-3
                2xl:grid-cols-4">
        {sections.map((section, index) => (
          <div className="relative mx-auto w-full max-w-sm mb-[5vh]" key={index}>
            <BackgroundGradient className="rounded-[22px] p-4 sm:p-10 bg-white dark:bg-zinc-900">
              <Image
                src={section.img}
                alt="jordans"
                height="400"
                width="400"
                className="object-contain"
              />
              <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                {section.title}
              </p>

              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                {section.role}
              </p>
            </BackgroundGradient>
          </div>
        ))}
      </div>
    </div>
  );
}
