"use client";
import React, { useState, useEffect } from "react";
import { collection, addDoc, getDoc, updateDoc, doc, increment } from "firebase/firestore";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { db, auth } from "../../firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";


export const runtime = 'edge';

export default function RegistrationForm({ params }) {
  const event_id = params.eventdesc;
  const [user, setUser] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    registerNo: "",
    mobileNo: "",
    yearOfStudy: "",
    branch: "",
    specialization: "",
    email: "",
    event_id: "",
    collegeName: "",
  });

  useEffect(() => {
    if (event_id) {
      setFormData((prevState) => ({
        ...prevState,
        event_id: event_id,
      }));
    }
  }, [event_id]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [eventData, setEventData] = useState(null);

  useEffect(() => {
    const fetchEventData = async () => {
      try {
        console.log("Fetching event with ID:", event_id);
        const eventDocRef = doc(db, "events", event_id);
        const eventDoc = await getDoc(eventDocRef);

        if (!eventDoc.exists()) {
          console.log("No such document!"); 
          setEventData(null);
          return;
        }

        console.log("Document data:", eventDoc.data()); 
        setEventData(eventDoc.data());
      } catch (error) {
        console.error("Error fetching event data:", error);
        setError(error);
      }
    };

    fetchEventData();
  }, [event_id]);

  const validateForm = () => {
    const {
      name,
      registerNo,
      mobileNo,
      yearOfStudy,
      branch,
      email,
      collegeName,
    } = formData;

    if (!name.trim()) {
      toast.error("Name is required");
      return false;
    }
    if (!registerNo.trim()) {
      toast.error("Register No. is required");
      return false;
    }
    if (!mobileNo.trim() || mobileNo.length !== 10) {
      toast.error("Mobile No. must be 10 digits");
      return false;
    }
    if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) {
      toast.error("Valid email is required");
      return false;
    }
    if (!yearOfStudy) {
      toast.error("Year of Study is required");
      return false;
    }
    if (!branch.trim()) {
      toast.error("Branch is required");
      return false;
    }
    if (!collegeName.trim()) {
      toast.error("College Name is required");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSubmitting) return;

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      if (!user) {
        toast.error("You must be logged in to register.");
        return;
      }

      localStorage.setItem("userId", user.uid);
      
      const registrationData = {
        ...formData,
        userId: user.uid,
      };

      await addDoc(collection(db, "registrations"), registrationData);

      const eventDocRef = doc(db, "events", event_id);
      const eventDocSnap = await getDoc(eventDocRef);

      if (eventDocSnap.exists()) {
        const eventData = eventDocSnap.data();

        if (eventData.slots > 0) {
          localStorage.setItem("event_id", event_id);
          localStorage.setItem("firstname", formData.name);
          localStorage.setItem("email", formData.email);
          localStorage.setItem("phone", formData.mobileNo);
          localStorage.setItem("pay", eventData.pay);
          window.location.href = "/payment";
        } else {
          toast.error("Registration failed. No slots available.");
        }
      } else {
        toast.error("Event not found.");
      }
    } catch (e) {
      console.error("Error during registration: ", e);
      toast.error("Error registering. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };


  return (
    <div className="h-screen w-screen flex items-center justify-center bg-clack-100">
      <ToastContainer />
      <div className="w-full max-w-lg lg:max-w-2xl mx-auto p-8 bg-white shadow-md rounded-lg z-40">
        <h2 className="text-2xl font-bold mb-6 text-center text-black">
          Registration Form
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label
              htmlFor="registerNo"
              className="block text-sm font-medium text-gray-700"
            >
              Register No.
            </label>
            <input
              type="text"
              id="registerNo"
              name="registerNo"
              value={formData.registerNo}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black"
              placeholder="Enter your register no."
            />
          </div>

          <div>
            <label
              htmlFor="mobileNo"
              className="block text-sm font-medium text-gray-700"
            >
              Mobile No.
            </label>
            <input
              type="tel"
              id="mobileNo"
              name="mobileNo"
              maxLength="10"
              value={formData.mobileNo}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black"
              placeholder="Enter your mobile no."
            />
          </div>
          <div>
            <label
              htmlFor="College Name"
              className="block text-sm font-medium text-gray-700"
            >
              College Name
            </label>
            <input
              type="text"
              id="collegeName"
              name="collegeName"
              value={formData.collegeName}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black"
              placeholder="Enter your College name"
            />
          </div>
          <div>
            <label
              htmlFor="yearOfStudy"
              className="block text-sm font-medium text-gray-700"
            >
              Year of Study
            </label>
            <select
              id="yearOfStudy"
              name="yearOfStudy"
              value={formData.yearOfStudy}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black"
            >
              <option value="">Select your year</option>
              <option value="1st">1st Year</option>
              <option value="2nd">2nd Year</option>
              <option value="3rd">3rd Year</option>
              <option value="4th">4th Year</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="branch"
              className="block text-sm font-medium text-gray-700"
            >
              Branch
            </label>
            <input
              type="text"
              id="branch"
              name="branch"
              value={formData.branch}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black"
              placeholder="Enter your branch"
            />
          </div>

          <div>
            <label
              htmlFor="specialization"
              className="block text-sm font-medium text-gray-700"
            >
              Specialization
            </label>
            <input
              type="text"
              id="specialization"
              name="specialization"
              value={formData.specialization}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black"
              placeholder="Enter your specialization"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black"
              placeholder="Enter your email"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-400 text-white font-medium py-2 px-4 rounded-md shadow hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
          >
            Register
          </button>
        </form>
      </div>

      <div className="waveWrapper waveAnimation z-30">
        <div className="waveWrapperInner bgTop">
          <div
            className="wave waveTop"
            style={{
              backgroundImage:
                "url('https://cdn.jsdelivr.net/gh/MohamedArafath205/cdn.aizypher@main/wave2.png')",
            }}
          ></div>
        </div>
        <div className="waveWrapperInner bgMiddle">
          <div
            className="wave_inv waveMiddle"
            style={{
              backgroundImage:
                "url('https://cdn.jsdelivr.net/gh/MohamedArafath205/cdn.aizypher@main/wave2.png')",
            }}
          ></div>
        </div>
        <div className="waveWrapperInner bgBottom">
          <div
            className="wave waveBottom"
            style={{
              backgroundImage:
                "url('https://cdn.jsdelivr.net/gh/MohamedArafath205/cdn.aizypher@main/wave2.png')",
            }}
          ></div>
        </div>
      </div>
    </div>
    
  );
}
