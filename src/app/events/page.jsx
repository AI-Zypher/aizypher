import React from "react";
import Navbar from '@/components/navbar';

const StreamingPage = () => {
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

  // const pageStyle = {
  //   marginTop: "5vh",
  //   display: "grid",
  //   gridTemplateColumns: "repeat(4, 1fr)",
  //   gap: "20px",
  //   padding: "20px",
  //   backgroundColor: "rgba(0, 0, 0, 1)",
  //   '@media (max-width: 1200px)': { // Adjust grid for tablets and smaller screens
  //     gridTemplateColumns: "repeat(3, 1fr)",
  //   },
  //   '@media (max-width: 900px)': { // Adjust grid for mobile screens
  //     gridTemplateColumns: "repeat(2, 1fr)",
  //   },
  //   '@media (max-width: 600px)': { // Stack items on very small screens
  //     gridTemplateColumns: "1fr",
  //   }
  // };


  return (
    <div>
      <Navbar />
      <div class="grid grid-cols-1 gap-10 p-4 bg-black mt-[5vh]
                sm:grid-cols-1
                md:grid-cols-1
                lg:grid-cols-2
                xl:grid-cols-3
                2xl:grid-cols-4
        "
                >
      {sections.map((section, index) => (
        <article id="cardevent" class="card relative w-[350px] h-[350px] mx-auto mt-8 rounded-lg shadow-lg overflow-hidden">
        <div class="thumb w-full h-[311px] bg-cover bg-center rounded-t-lg" ></div>
          <div class="h-[40px] pt-2 px-4 rounded-t-lg infos bg-white bg-opacity-20 backdrop-blur-md transition-transform duration-700 ease-in-out">
            <h2 class=" title text-[#152536] text-lg font-bold uppercase tracking-widest mb-2 relative z-10">
              {section.title}
            </h2>
            </div>
            <div class="h-[310px] pt-2 px-4 rounded-b-lg infos bg-white bg-opacity-20 backdrop-blur-md transition-transform duration-700 ease-in-out">
            <h3 class="seats text-xs text-[#152536]/70 uppercase mb-6 opacity-0 transition-opacity duration-500 delay-250"></h3>
            <p class="txt text-sm text-[#152536]/70 opacity-0 transition-opacity duration-500 delay-250">Join us for our Live Infinity Session in beautiful New York City. This is a 3 day intensive workshop where you'll learn how to become a better version of...</p>
          </div>
          <div class="overlay absolute inset-0 bg-white bg-opacity-0"></div>
      </article>
      ))}
    </div>
    </div>  
  );
};

export default StreamingPage;
