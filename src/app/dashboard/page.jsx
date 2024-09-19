"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  collection,
  query,
  where,
  getDocs,
  doc,
  getDoc,
} from "firebase/firestore";
import { db, auth } from "../firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import Image from "next/image";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

// EventCard component to display event information
const EventsCard = ({ poster, name, description }) => (
  <div
    className="bg-white shadow-md rounded-lg overflow-hidden w-96 mb-10 relative"
    style={{
      backgroundColor: "#f9f9f9",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "20px",
    }}
  >
    <div className="relative w-full h-56 mb-5">
      <Image
        src={poster}
        alt={name}
        layout="fill"
        objectFit="cover"
        className="rounded-md"
      />
    </div>
    <h2 className="text-xl font-bold text-gray-800 mb-2">{name}</h2>
    <p className="text-gray-600 text-center mb-4">{description}</p>
  </div>
);

const DashboardPage = () => {
  const [userData, setUserData] = useState(null);
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const data = [
    {
      category: "AI Escape Room",
      title: "AI Escape Room",
      src: "https://cdn.jsdelivr.net/gh/MohamedArafath205/cdn.aizypher@main/escaperoom.png",
      link: "/AIT01",
    },
    {
      category: "Battle Of Bugs",
      title: "Battle Of Bugs",
      src: "https://cdn.jsdelivr.net/gh/MohamedArafath205/cdn.aizypher@main/battleofbugs.png",
      link: "/AIT02",
    },
    {
      category: "Code Premier League",
      title: "Code Premier League ",
      src: "https://cdn.jsdelivr.net/gh/MohamedArafath205/cdn.aizypher@main/Codeauction.png",
      link: "/AIT03",
    },
    {
      category: "Shark Tank",
      title: "Shark Tank",
      src: "https://cdn.jsdelivr.net/gh/MohamedArafath205/cdn.aizypher@main/sharktank.png",
      link: "/AIT04",
    },
    {
      category: "Codecrafters: The Murder Mystery ",
      title: "Codecrafters: The Murder Mystery",
      src: "https://cdn.jsdelivr.net/gh/MohamedArafath205/cdn.aizypher@main/murdermystery2.png",
      link: "/AIT05",
    },
    {
      category: "Spin a Web",
      title: "Spin a Web",
      src: "https://cdn.jsdelivr.net/gh/MohamedArafath205/cdn.aizypher@main/spinaweb.png",
      link: "/AIT06",
    },
    {
      category: "Poster Presentation - Canvart ",
      title: "Poster Presentation - Canvart",
      src: "https://cdn.jsdelivr.net/gh/MohamedArafath205/cdn.aizypher@main/canvart.png",
      link: "/AIT07",
    },
    {
      category: "Mini MUN",
      title: "Mini MUN",
      src: "https://cdn.jsdelivr.net/gh/MohamedArafath205/cdn.aizypher@main/MiniMUN.png",
      link: "/AIT08",
    },
    {
      category: "Fast & Curious",
      title: "Fast & Curious",
      src: "https://cdn.jsdelivr.net/gh/MohamedArafath205/cdn.aizypher@main/fastandcurious.png",
      link: "/AIT09",
    },
  ];

  const data2 = [
    {
      category: "Mr. / Ms. Zypher",
      title: "Mr. / Ms. Zypher",
      src: "https://cdn.jsdelivr.net/gh/MohamedArafath205/cdn.aizypher@main/MrMsZypher.png",
      link: "/AIN01",
    },
    {
      category: "2 Minutes to Talent",
      title: "2 Minutes to Talent",
      src: "https://cdn.jsdelivr.net/gh/MohamedArafath205/cdn.aizypher@main/2minutesoftalent.png",
      link: "/AIN02",
    },
    {
      category: "FIFA",
      title: "FIFA",
      src: "https://cdn.jsdelivr.net/gh/MohamedArafath205/cdn.aizypher@main/FIFA.png",
      link: "/AIN03",
    },
    {
      category: "Adzap",
      title: "Adzap",
      src: "https://cdn.jsdelivr.net/gh/MohamedArafath205/cdn.aizypher@main/Adzap.png",
      link: "/AIN04",
    },
    {
      category: "PUBG",
      title: "PUBG",
      src: "https://cdn.jsdelivr.net/gh/MohamedArafath205/cdn.aizypher@main/pubg.png",
      link: "/AIN05",
    },
    {
      category: "VALORANT",
      title: "VALORANT",
      src: "https://cdn.jsdelivr.net/gh/MohamedArafath205/cdn.aizypher@main/Valorant.png",
      link: "/AIN06",
    },
  ];

  useEffect(() => {
    const fetchData = async (userId) => {
      try {
        // Fetch user registration data
        const userRef = collection(db, "registrations");
        const q = query(userRef, where("userId", "==", userId));
        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
          const data = querySnapshot.docs.map((doc) => doc.data())[0];
          setUserData(data);

          // Fetch event data based on event_id
          const eventDocRef = doc(db, "events", data.event_id);
          const eventDoc = await getDoc(eventDocRef);

          if (eventDoc.exists()) {
            setEvents([eventDoc.data()]);
          } else {
            setError("No event data found.");
          }
        } else {
          setError("No event registered");
        }
      } catch (error) {
        setError("Error fetching data: " + error.message);
      }
      setLoading(false);
    };

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        fetchData(user.uid);
      } else {
        setError("No user is signed in.");
        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen">
      <div className="relative">
        <Link href="/" passHref>
          <div className="relative flex items-center justify-center w-10 h-10 border-2 border-green-500 bg-transparent rounded-full text-white font-semibold hover:bg-purple-700 hover:border-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 mt-4 ml-4 z-50">
            <HomeRoundedIcon fontSize="medium" className="text-white" />
          </div>
        </Link>

        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src="https://cdn.jsdelivr.net/gh/MohamedArafath205/cdn.aizypher@main/white-bg.png"
            alt="Mirrored Background"
            className="w-full h-full object-cover"
          />
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-start",
            paddingTop: "100px",
            zIndex: 1,
            position: "relative",
          }}
        >
          <h1
            style={{
              fontSize: "48px",
              fontWeight: "bold",
              marginBottom: "10px",
              color: "#fff",
            }}
          >
            AI ZYPHER
          </h1>
          <h2 style={{ fontSize: "32px", color: "#fff", marginBottom: "40px" }}>
            Your Dashboard
          </h2>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              width: "100%",
              maxWidth: "1200px",
              padding: "15px",
            }}
          >
            <h2
              style={{ fontSize: "32px", color: "#fff", marginBottom: "20px" }}
            >
              Registered Event
            </h2>
          </div>

          {events.length > 0 ? (
            events.map((event, index) => (
              <EventsCard
                key={index}
                poster={event.poster}
                name={event.name}
                description={event.description}
              />
            ))
          ) : (
            <p
              style={{
                color: "#fff",
                fontSize: "24px",
                fontWeight: "bold",
                padding: "20px",
              }}
            >
              Not Registered
            </p>
          )}
        </div>
        <div className="relative flex items-center justify-center py-10 z-10 mt-10">
          <h1 className="text-white text-4xl sm:text-3xl md:text-4xl lg:text-5xl text-center">
            Technical Events
          </h1>
        </div>
        <div className="h-[40rem] rounded-md flex flex-col antialiased dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
          <InfiniteMovingCards items={data} direction="right" speed="slow" />
        </div>
        <Link href="/tech">
          <div className="relative flex items-center justify-center z-10">
            <button class="px-8 py-3   rounded-full bg-white text-black font-semibold  focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 flex items-center space-x-2">
              View All &nbsp;{" "}
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
          </div>
        </Link>
        <div className="relative flex items-center justify-center py-10 z-10 mt-20">
          <h1 className="text-white text-4xl sm:text-3xl md:text-4xl lg:text-5xl text-center">
            Non Technical Events
          </h1>
        </div>

        <div className="h-[40rem] rounded-md flex flex-col antialiased dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
          <InfiniteMovingCards items={data2} direction="left" speed="slow" />
        </div>
        <Link href="/non-tech">
          <div className="relative flex items-center justify-center z-10">
            <button class="px-8 py-3   rounded-full bg-white text-black font-semibold  focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 flex items-center space-x-2">
              View All &nbsp;{" "}
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
          </div>
        </Link>
      </div>
    </div>
  );
};

export default DashboardPage;
