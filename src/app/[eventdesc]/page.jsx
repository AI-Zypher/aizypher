"use client";
import React, { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../app/firebaseConfig";

export const runtime = 'edge';

const EventPage = ({ params }) => {
  const { eventdesc } = params;
  const [eventData, setEventData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  localStorage.setItem("event_id", eventdesc);

  useEffect(() => {
    const fetchEventData = async () => {
      try {
        console.log("Fetching event with ID:", eventdesc); 
        const eventDocRef = doc(db, "events", eventdesc);
        const eventDoc = await getDoc(eventDocRef);
  
        if (!eventDoc.exists()) {
          console.log("No such document!"); // Debug log
          setEventData(null);
          return;
        }
  
        console.log("Document data:", eventDoc.data()); // Debug log
        setEventData(eventDoc.data());
      } catch (error) {
        console.error("Error fetching event data:", error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };
  
    fetchEventData();
  }, [eventdesc]);
  
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error || !eventData) {
    return <div>Event not found or an error occurred.</div>;
  }

  return (
    <div>
      <div className="relative min-h-screen flex flex-col items-start justify-center p-4">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src="https://cdn.jsdelivr.net/gh/MohamedArafath205/cdn.aizypher@main/white-bg.png"
            alt="Mirrored Background"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Poster Image */}
        <div className="relative z-10 mb-8 self-center">
          <img
            src={eventData.poster}
            alt="Event Poster"
            className="max-w-full max-h-[80%] object-contain rounded-lg shadow-lg"
          />
        </div>

        {/* Event Content */}
        <div className="relative z-10 text-white text-left w-full px-4 sm:px-6 md:px-8 lg:px-10">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-4xl font-bold text-[#eab308]">
              {eventData.name}
            </h1>
            <a href={eventData.registrationLink} className="mt-5 text-blue-300">
              <button className="px-6 py-2 border-2 border-green-500 bg-transparent rounded-full text-white font-semibold hover:bg-purple-700 hover:border-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 flex items-center space-x-2">
                Register &nbsp;{" "}
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
                  ></path>
                </svg>
              </button>
            </a>
          </div>

          <p className="text-2xl mb-2">{eventData.event_fee} per team</p>
          <p className="text-xl mb-8">Venue: {eventData.venue}</p>

          <p className="text-xl mb-8">SLOTS LEFT: {eventData.slots}</p>

          <h2 className="text-2xl font-bold mb-4">EVENT DESCRIPTION</h2>
          <p className="text-lg mb-8">{eventData.description}</p>

          <h2 className="text-2xl font-bold mb-4">EVENT RULES</h2>
          <p className="text-lg mb-8">{eventData.rules}</p>

          <h2 className="text-2xl font-bold mb-4">STAFF COORDINATORS</h2>
          <p className="text-lg mb-8">
            {eventData.coordinator1}
            <br />
            {eventData.coordinator2}
          </p>

          <h2 className="text-2xl font-bold mb-4">STUDENT COORDINATORS</h2>
          <p className="text-lg mb-8">
            {eventData.student_coordinator1}
            <br />
            {eventData.student_coordinator2}
            <br />
            {eventData.student_coordinator3}
          </p>

          <h2 className="text-2xl font-bold mb-4">CONTACT:</h2>
          <p className="text-lg mb-8">{eventData.contact}</p>
        </div>
      </div>
    </div>
  );
};

export default EventPage;
