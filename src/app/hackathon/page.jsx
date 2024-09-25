"use client"
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../app/firebaseConfig";
import { Alert, AlertTitle } from "../../components/ui/alert";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";

export const runtime = "edge";

const Hackathon = () => {
  const eventId = "AIH01";
  const [eventData, setEventData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEventData = async () => {
      try {
        console.log("Fetching event with ID:", eventId);
        const eventDocRef = doc(db, "events", eventId);
        const eventDoc = await getDoc(eventDocRef);

        if (!eventDoc.exists()) {
          console.log("No such document!");
          setError("Event not found");
          return;
        }

        console.log("Document data:", eventDoc.data());
        setEventData(eventDoc.data());
      } catch (error) {
        console.error("Error fetching event data:", error);
        setError(error.message || "An error occurred while fetching event data");
      } finally {
        setLoading(false);
      }
    };

    fetchEventData();
  }, [eventId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error || !eventData) {
    return <div>Error: {error || "Event not found"}</div>;
  }

  return (
    <div className="relative min-h-screen flex flex-col items-start justify-center p-4">
      <a
        href="/"
        className="relative flex items-center justify-center w-10 h-10 border-2 border-green-500 bg-transparent rounded-full text-white font-semibold hover:bg-purple-700 hover:border-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 mt-4 ml-4"
        style={{ zIndex: 100 }}
      >
        <HomeRoundedIcon fontSize="medium" className="text-white" />
      </a>
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="https://cdn.jsdelivr.net/gh/MohamedArafath205/cdn.aizypher@main/white-bg.png"
          alt="Mirrored Background"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="container-fix pb-4 md:py-4 w-5/6 mx-auto text-center">
        <Alert className="bg-yellow-800/25 text-yellow-500 animate-pulse">
          <AlertTitle>
            Participants from AIML dept of SRMIST Ramapuram and Arts, Science,
            Humanities (Non B.E/B.Tech) Students of other colleges are not
            allowed.
            <br />
            <br />
            For team events, a single registration is to be done. The other team
            members can give their names to the event coordinators of the
            particular event.
            <br />
            <br />
            For more details, reach out to us at contact@aizypher.in
          </AlertTitle>
        </Alert>
      </div>

      {/* Poster Image */}
      <div className="relative z-10 mb-8 self-center mx-auto flex justify-center">
          <img
            src={eventData.poster}
            alt="Event Poster"
            className="max-w-[80%] max-h-[80%] object-contain rounded-lg shadow-lg"
          />
        </div>

      {/* Event Content */}
      <div className="relative z-10 text-white text-left w-full px-4 sm:px-6 md:px-8 lg:px-10">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-4xl font-bold text-[#eab308]">{eventData.name}</h1>
          <Link href={`/AIH01/register`} className="mt-5 text-blue-300">
            <button
              className="px-6 py-2 border-2 border-green-500 bg-transparent rounded-full text-white font-semibold hover:bg-purple-700 hover:border-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 flex items-center space-x-2"
              onClick={() => {
                localStorage.setItem("amount", eventData.event_fee);
              }}
            >
              Register &nbsp;
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
                strokeWidth="1.1"
                stroke="currentColor"
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                />
              </svg>
            </button>
          </Link>
        </div>

        <p className="text-2xl mb-2">{eventData.event_fee} per person</p>
        <p className="text-xl mb-8">Venue: {eventData.venue}</p>
        <p className="text-xl mb-8">SLOTS LEFT: {eventData.slots}</p>

        <h2 className="text-2xl font-bold mb-4">EVENT DESCRIPTION</h2>
        <p className="text-lg mb-8">{eventData.description}</p>

        <h2 className="text-2xl font-bold mb-4">EVENT RULES</h2>
        <ul className="text-lg mb-8 list-disc pl-5">
          {eventData.rules &&
            eventData.rules.map((rule, index) => (
              <li key={index}>{rule}</li>
            ))}
        </ul>

        <h2 className="text-2xl font-bold mb-4">STAFF COORDINATORS</h2>
        <p className="text-lg mb-8">
          {eventData.coordinator1}
          <br />
          {eventData.coordinator2}
          <br />
          {eventData.coordinator3}
        </p>

        <h2 className="text-2xl font-bold mb-4">STUDENT COORDINATORS</h2>
        <p className="text-lg mb-8">
          {eventData.student_coordinator1}
          <br />
          {eventData.student_coordinator2}
          <br />
          {eventData.student_coordinator3}
        </p>
      </div>

      {/* Download button at the bottom */}
      <div className="flex justify-center mt-8 mb-4 z-50 mx-auto">
        <a
          href="https://cdn.jsdelivr.net/gh/MohamedArafath205/cdn.aizypher@main/zypherx.pdf"
          download
          className="px-6 py-2 border-2 border-green-500 bg-transparent rounded-full text-white font-semibold hover:bg-purple-700 hover:border-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
        >
          Download File
        </a>
      </div>
    </div>
  );
};

export default Hackathon;