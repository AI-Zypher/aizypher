"use client";

import React from "react";
import Image from "next/image";

const borderGradientStyle = {
  borderRadius: "0.5rem",
  background: "rgba(0, 0, 0, 0.6)", // Slightly dark transparent background
  backgroundClip: "padding-box",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)", // Subtle shadow, adjust as needed
  transition: "box-shadow 0.3s ease",
};

const SecondComp = () => {
  return (
    <div className="min-h-screen flex items-center bg-gradient-to-b from-[#016E2D] to-black p-4">
      <div className="flex flex-col gap-8 max-w-6xl mx-auto">
        {/* Section 1: SRM Institute of Science and Technology */}

        <section
          className="md:left-[-20%] relative p-8 rounded-lg transition-shadow duration-300 ease-in-out"
          style={borderGradientStyle}
        >
          <div className="flex items-start">
            <img
              src="https://cdn.jsdelivr.net/gh/MohamedArafath205/cdn.aizypher@main/sideimg.png"
              width={75}
              height={100}
              alt="Side Decoration"
              className="mr-4"
            />
            <div>
              <h1 className="text-4xl font-bold mb-2">SRM IST</h1>
              <p className="text-lg">
                SRM Institute of Science and Technology (SRMIST) Ramapuram in
                Chennai is a leading campus known for its engineering,
                technology, and management programs. It boasts modern
                classrooms, advanced labs, and extensive libraries. With strong
                industry ties, it provides valuable internships and placements.
                The vibrant campus life includes cultural events, technical
                fests, and sports, fostering both academic and personal growth.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: AIML Department */}
        <section
          className="md:right-[-25%] relative p-16 rounded-lg text-right transition-shadow duration-300 ease-in-out"
          style={borderGradientStyle}
        >
          <div className="flex items-start justify-end">
            <div className="text-left mr-4">
              <h2 className="text-3xl font-semibold mb-4">AIML Department</h2>
              <p>
                The AIML Department at SRMIST advances AI and ML education with
                a comprehensive curriculum in areas like deep learning and data
                science. It offers hands-on experience through state-of-the-art
                labs and industry collaboration. With a focus on research,
                internships, and a vibrant learning community, it prepares
                students for careers in data science, AI engineering, and
                innovation.
              </p>
            </div>
            <img
              src="https://cdn.jsdelivr.net/gh/MohamedArafath205/cdn.aizypher@main/sideimg.png"
              width={75}
              height={100}
              alt="Side Decoration"
              className="ml-4"
            />
          </div>
        </section>

        {/* Section 3: Zypher */}
        <section
          className="md:left-[-20%] relative p-8 rounded-lg transition-shadow duration-300 ease-in-out"
          style={borderGradientStyle}
        >
          <div className="flex items-start">
            <img
              src="https://cdn.jsdelivr.net/gh/MohamedArafath205/cdn.aizypher@main/sideimg.png"
              width={75}
              height={100}
              alt="Side Decoration"
              className="mr-4"
            />
            <div>
              <h2 className="text-3xl font-semibold mb-4 text-left">Zypher</h2>
              <p>
                AI Zypher, hosted by SRMIST&apos;s AIML Department, is a premier
                event uniting students, researchers, and industry experts to
                explore AI and ML advancements. It features workshops,
                hackathons, keynote sessions, and networking opportunities,
                fostering innovation and collaborative problem-solving. The
                event highlights cutting-edge research and provides a platform
                for emerging AI leaders to connect and learn.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SecondComp;
