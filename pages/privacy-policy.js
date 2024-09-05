// pages/privacy-policy.js
import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="relative min-h-screen bg-black">
      {/* Gradient Strip */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: 0,
          width: '100%',
          height: '200px', // Adjust height as needed
          background: 'linear-gradient(to right, white, transparent, white)',
          transform: 'translateY(-50%)',
          zIndex: -1, // Ensure it's behind the content
        }}
      ></div>
      <header className="bg-green-600 text-white py-6 text-center">
        <h1 className="text-4xl font-bold">Privacy Policy</h1>
      </header>
      <main className="flex-grow p-8">
        <div className="max-w-3xl mx-auto p-6 shadow-lg rounded-md">
          <section className="mb-6">
            <h2 className="text-2xl font-semibold">Introduction</h2>
            <p className="mt-4 text-gray-600">
              This Privacy Policy explains how we collect, use, and share your personal information when you visit or make a purchase from our website.
            </p>
          </section>
          {/* Add other sections here */}
        </div>
      </main>
      <footer className="bg-green-600 text-white text-center py-4">
        <p>&copy; {new Date().getFullYear()} Your Brand Name. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default PrivacyPolicy;
