"use client";

import React from "react";

const borderGradientStyle = {
  borderRadius: "0.5rem",
  background: "rgba(0, 0, 0, 0.6)", // Slightly dark transparent background
  backgroundClip: "padding-box",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)", // Subtle shadow, adjust as needed
  transition: "box-shadow 0.3s ease",
};

const SecondComp = () => {
  return (
    <div id="about"
    className="w-full p-4 min-h-screen flex items-center justify-center bg-gradient-to-b from-[#555] to-black"
    >
      <div className="w-full p-4 sm:p-6 md:p-8 lg:p-10 mx-auto flex flex-col gap-8">
        {/* Section 1: SRM Institute of Science and Technology */}
        <section
  className="w-full md:w-2/3 ml-0 md:ml-0 relative rounded-lg transition-shadow duration-300 ease-in-out"
  style={borderGradientStyle}
>
  <div className="relative flex items-start p-4 sm:p-6">
    <div className="relative flex items-center w-full">
      <div className="flex-1 flex items-center justify-center">
        {/* Left Image */}
        <img
          src="https://cdn.jsdelivr.net/gh/MohamedArafath205/cdn.aizypher/srmlogo.png" // Replace with your image URL
          alt="Left Decoration"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Middle Gradient / Blur */}
      <div className="flex-none w-16 bg-gradient-to-r from-blue-500 via-blue-300 to-transparent blur-md"></div> {/* Adjust width here */}

      <div className="flex-1 flex items-center justify-center">
        {/* Right Image */}
        <img
          src="https://cdn.jsdelivr.net/gh/MohamedArafath205/cdn.aizypher/blue.png" // Replace with your image URL
          alt="Right Decoration"
          className="w-full h-full object-cover"
        />
      </div>

      <img
        src="https://cdn.jsdelivr.net/gh/MohamedArafath205/cdn.aizypher/hand.png"
        width={400} // Increased size for overlap effect
        height={400}
        alt="Side Decoration"
        className="absolute -left-20 top-12" // Adjust image position
      />
    </div>
    <div className="ml-28"> {/* Create space for the image */}
      <h1 className="text-3xl sm:text-4xl font-bold mb-2">SRM IST</h1>
      <p className="text-base sm:text-lg">
        SRM Institute of Science and Technology (SRMIST) Ramapuram in Chennai is
        a leading campus known for its engineering, technology, and management
        programs. It boasts modern classrooms, advanced labs, and extensive
        libraries. With strong industry ties, it provides valuable internships
        and placements. The vibrant campus life includes cultural events,
        technical fests, and sports, fostering both academic and personal
        growth.
      </p>
    </div>
  </div>
</section>


        {/* Section 2: AIML Department */}
        <section
          className="w-full md:w-2/3 ml-auto relative rounded-lg transition-shadow duration-300 ease-in-out"
          style={borderGradientStyle}
        >
          <div className="flex flex-row-reverse items-start p-4 sm:p-6">
            <img
              src="https://cdn.jsdelivr.net/gh/MohamedArafath205/cdn.aizypher/robo.png"
              width={75}
              height={100}
              alt="Side Decoration"
              className="ml-4"
            />
            <div>
              <h2 className="text-2xl sm:text-3xl font-semibold mb-4">AIML Department</h2>
              <p className="text-base sm:text-lg">
                The AIML Department at SRMIST advances AI and ML education with
                a comprehensive curriculum in areas like deep learning and data
                science. It offers hands-on experience through state-of-the-art
                labs and industry collaboration. With a focus on research,
                internships, and a vibrant learning community, it prepares
                students for careers in data science, AI engineering, and
                innovation.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Zypher */}
        <section
          className="w-full md:w-2/3 ml-0 md:ml-0 relative rounded-lg transition-shadow duration-300 ease-in-out"
          style={borderGradientStyle}
        >
          <div className="flex items-start p-4 sm:p-6">
            <img
              src="https://cdn.jsdelivr.net/gh/MohamedArafath205/cdn.aizypher/gradbg.png"
              width={75}
              height={100}
              alt="Side Decoration"
              className="mr-4"
            />
            <div>
              <h2 className="text-2xl sm:text-3xl font-semibold mb-4">Zypher</h2>
              <p className="text-base sm:text-lg">
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
