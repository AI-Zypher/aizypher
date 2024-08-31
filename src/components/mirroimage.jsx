import React from "react";

const SecondComp = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/white-bg.png"
          alt="Mirrored Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Centered Image */}
      <div className="absolute inset-0 z-10 flex items-center justify-center">
        <img
          src="/zypherimg.png" // Replace with the path to your limited size image
          alt="Centered"
          className="w-full max-w-xs md:max-w-md h-auto object-cover rounded-lg" // Adjust size as needed
        />
      </div>

      {/* Left Section */}
      <section className="absolute left-1/2 md:left-[20%] top-[85%] md:top-[68%] transform -translate-x-1/2 md:translate-x-0 -translate-y-1/2 bg-transparent p-6 rounded-lg text-white w-11/12 md:w-80 h-auto md:h-64 border border-transparent transition-all duration-300 ease-in-out z-20 flex flex-col justify-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 text-left">Join Our Exciting HACKATHON!</h1>
        <p className="text-sm md:text-base leading-relaxed text-justify text-center">
          Join us for Zypher Hackathon, a 24-hour innovation challenge where creativity meets technology! Collaborate with brilliant minds, solve real-world problems, and showcase your coding skills. Whether you're a beginner or a pro, this is your chance to innovate, learn, and win exciting prizes. Let’s code the future together!<br />
          <a href="/register" className="underline text-blue-300">Register now</a>
        </p>
      </section>

      {/* Right Section */}
      <section className="absolute right-1/2 md:right-1/4 top-[32%] md:top-[30%] transform translate-x-1/2 md:translate-x-0 -translate-y-1/2 bg-transparent p-6 md:p-8 rounded-lg text-white w-11/12 md:w-64 h-auto border border-transparent transition-all duration-300 ease-in-out z-20 flex flex-col items-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6">Get Involved!</h1>
        <p className="text-lg md:text-xl leading-relaxed text-center mb-4">
          {/* Add content here */}
        </p>
      </section>
    </div>
  );
};

export default SecondComp;
