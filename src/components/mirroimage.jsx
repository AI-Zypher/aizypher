import React from "react";

const SecondComp = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center">
      <div className="absolute inset-0 z-10 overflow-hidden">
        <img
          src="https://cdn.jsdelivr.net/gh/MohamedArafath205/cdn.aizypher@main/white-bg.png"
          alt="Mirrored Background"
          className="w-full h-full"
        />
      </div>
      <div className="absolute inset-0 z-5 overflow-hidden">
        <video
          src="https://cdn.jsdelivr.net/gh/MohamedArafath205/cdn.aizypher@main/hackathonreal.mp4" // Replace with your video URL
          autoPlay
          loop
          muted
          className="w-full h-full transform scale-[1.4]"
        ></video>
      </div>
      {/* Centered Image */}
      <div className="absolute inset-0 z-20 flex items-center justify-center">
        <img
          src="https://cdn.jsdelivr.net/gh/MohamedArafath205/cdn.aizypher@main/zypherimg.png"
          alt="Centered"
          className="w-98 md:w-114 h-auto object-cover rounded-lg" // Specific width classes
        />
      </div>

      {/* Left Section */}
      <section className="absolute left-1/2 md:left-[16%] top-[90%] md:top-[75%] transform -translate-x-1/2 md:translate-x-0 -translate-y-1/2 bg-transparent p-6 rounded-lg text-white w-11/12 md:w-80 h-auto md:h-64 border border-transparent transition-all duration-300 ease-in-out z-20 flex flex-col justify-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 text-left">
          Join Our Exciting HACKATHON!
        </h1>
        <p className="text-sm md:text-base leading-relaxed text-justify text-center w-full md:w-[120%]">
          Join us for Zypher Hackathon, a 24-hour innovation challenge where
          creativity meets technology! Collaborate with brilliant minds, solve
          real-world problems, and showcase your coding skills. Whether
          you&apos;re a beginner or a pro, this is your chance to innovate,
          learn, and win exciting prizes. Let&apos;s code the future together!
          <br />
        </p>
        <a href="/hackathon" className="mt-5 text-blue-300">
          <button class="px-6 py-2 border-2 border-green-500 bg-transparent rounded-full text-white font-semibold hover:bg-purple-700 hover:border-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 flex items-center space-x-2">
            View &nbsp;{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
              stroke-width="1.1"
              stroke="currentColor"
              class="h-4 w-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
              ></path>
            </svg>
          </button>
        </a>
      </section>

      {/* Right Section */}
      <section className="absolute right-[43%] md:right-[23%] top-[23%] md:top-[17%] transform translate-x-1/2 md:translate-x-0 -translate-y-1/2 bg-transparent p-6 md:p-8 rounded-lg text-white w-11/12 md:w-64 h-auto border border-transparent transition-all duration-300 ease-in-out z-20 flex flex-col items-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6">
          Get Involved!
        </h1>
        <p className="text-lg md:text-xl leading-relaxed text-center mb-4">
          {/* Add content here */}
        </p>
      </section>
    </div>
  );
};

export default SecondComp;
