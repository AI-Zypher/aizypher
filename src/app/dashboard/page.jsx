"use client";
import React, { useState, useEffect } from "react";
import NavBar from "../../components/navbar";
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
          setError("No user data found.");
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

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div
      style={{ position: "relative", minHeight: "100vh", overflowY: "auto" }}
    >
      <NavBar />
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          overflow: "hidden",
        }}
      >
        <img
          src="https://cdn.jsdelivr.net/gh/MohamedArafath205/cdn.aizypher@main/white-bg.png"
          alt="Mirrored Background"
          style={{
            objectFit: "cover",
            width: "100%",
            height: "100%",
            position: "absolute",
            zIndex: "-1",
          }}
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
            padding: "20px",
          }}
        >
          <h2 style={{ fontSize: "32px", color: "#fff", marginBottom: "20px" }}>
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
          <p style={{ color: "#fff" }}>No events available.</p>
        )}
      </div>
    </div>
  );
};

export default DashboardPage;
