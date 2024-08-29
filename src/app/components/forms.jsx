import React from 'react';

const RegistrationForm = () => {
  return (
    <div className="max-w-md mx-auto p-8 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-center text-black">Registration Form</h2>
      <form className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black"
            placeholder="Enter your name"
          />
        </div>

        <div>
          <label htmlFor="registerNo" className="block text-sm font-medium text-gray-700">Register No.</label>
          <input
            type="text"
            id="registerNo"
            name="registerNo"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black"
            placeholder="Enter your register no."
          />
        </div>

        <div>
          <label htmlFor="mobileNo" className="block text-sm font-medium text-gray-700">Mobile No.</label>
          <input
            type="tel"
            id="mobileNo"
            name="mobileNo"
            maxLength="10"
            // pattern="[0-9]{10}"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black"
            placeholder="Enter your mobile no."
          />
        </div>

        <div>
          <label htmlFor="yearOfStudy" className="block text-sm font-medium text-gray-700">Year of Study</label>
          <select
            id="yearOfStudy"
            name="yearOfStudy"
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
          <label htmlFor="branch" className="block text-sm font-medium text-gray-700">Branch</label>
          <input
            type="text"
            id="branch"
            name="branch"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black"
            placeholder="Enter your branch"
          />
        </div>

        <div>
          <label htmlFor="specialization" className="block text-sm font-medium text-gray-700">Specialization</label>
          <input
            type="text"
            id="specialization"
            name="specialization"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black"
            placeholder="Enter your specialization"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            id="email"
            name="email"
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

export default RegistrationForm;
