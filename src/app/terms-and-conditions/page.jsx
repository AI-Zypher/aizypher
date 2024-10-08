"use client";
import React from 'react';

const TermsAndConditions = () => {
  return (
    <div className="relative min-h-screen flex flex-col ">
      {/* Background image */}
      <div className="absolute inset-0 z-10 overflow-hidden">
        <img
          src="https://cdn.jsdelivr.net/gh/MohamedArafath205/cdn.aizypher@main/white-bg.png"
          alt="Mirrored Background"
          style={{
            objectFit: "cover",
            width: "100%",
            height: "100%",
          }}
        />
      </div>

      {/* Foreground content */}
      <header className="relative z-10 text-white py-6 text-center">
        <h1 className="text-4xl font-bold">Terms and Conditions</h1>
      </header>
      
      <main className="relative z-10 flex-grow p-8 ">
      <div className="max-w-3xl mx-auto bg-[rgba(0,0,0,0.5)] p-6 shadow-lg rounded-md">
          <section className="mb-6">
            <h2 className="text-2xl font-semibold">Introduction</h2>
            <p className="mt-4 text-white">
              Welcome to our Terms and Conditions page. Please read these terms carefully before using our website.
            </p>
          </section>
          <section className="mb-6">
            <h2 className="text-2xl font-semibold">User Responsibilities</h2>
            <p className="mt-4 text-white">
              As a user, you agree to use our website responsibly and in accordance with these terms. You are responsible for any content you post and for complying with all applicable laws.
            </p>
          </section>
          <section className="mb-6">
            <h2 className="text-2xl font-semibold">Intellectual Property</h2>
            <p className="mt-4 text-white">
              All content on our website is owned by us or our licensors and is protected by intellectual property laws. You may not use, reproduce, or distribute any content without our express permission.
            </p>
          </section>
          <section className="mb-6">
            <h2 className="text-2xl font-semibold">Limitation of Liability</h2>
            <p className="mt-4 text-white">
              We are not liable for any damages resulting from the use of our website or the inability to access it. Your use of our website is at your own risk.
            </p>
          </section>
          <section className="mb-6">
            <h2 className="text-2xl font-semibold">Changes to Terms</h2>
            <p className="mt-4 text-white">
              We may update these terms from time to time. We will notify you of any changes by posting the new terms on this page.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold">Contact Us</h2>
            <p className="mt-4 text-white">
              If you have any questions about these terms, please contact us at support@yourbrand.com.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
};

export default TermsAndConditions;
