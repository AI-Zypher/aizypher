"use client";
import React, { useState } from "react";
import { db } from "../firebaseConfig";
import { collection, addDoc } from "firebase/firestore";

export default function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: "",
    registerNo: "",
    mobileNo: "",
    yearOfStudy: "",
    branch: "",
    specialization: "",
    email: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const docRef = await addDoc(collection(db, "registrations"), formData);
      alert("Registration successful! Document ID: " + docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
      alert("Error registering. Please try again.");
    }
  };

  return (
    <div className="max-w-md mx-auto p-8 bg-white shadow-md rounded-lg">
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
  );
};
