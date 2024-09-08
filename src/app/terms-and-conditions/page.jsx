"use client";
import React from 'react';

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <header className="bg-green-600 text-white py-6 text-center">
        <h1 className="text-4xl font-bold">Terms and Conditions</h1>
      </header>
      <main className="flex-grow p-8">
        <div className="max-w-3xl mx-auto bg-white p-6 shadow-lg rounded-md">
          <section className="mb-6">
            <h2 className="text-2xl font-semibold">Introduction</h2>
            <p className="mt-4 text-gray-600">
              Welcome to our Terms and Conditions page. Please read these terms carefully before using our website.
            </p>
          </section>
          <section className="mb-6">
            <h2 className="text-2xl font-semibold">User Responsibilities</h2>
            <p className="mt-4 text-gray-600">
              As a user, you agree to use our website responsibly and in accordance with these terms. You are responsible for any content you post and for complying with all applicable laws.
            </p>
          </section>
          <section className="mb-6">
            <h2 className="text-2xl font-semibold">Intellectual Property</h2>
            <p className="mt-4 text-gray-600">
              All content on our website is owned by us or our licensors and is protected by intellectual property laws. You may not use, reproduce, or distribute any content without our express permission.
            </p>
          </section>
          <section className="mb-6">
            <h2 className="text-2xl font-semibold">Limitation of Liability</h2>
            <p className="mt-4 text-gray-600">
              We are not liable for any damages resulting from the use of our website or the inability to access it. Your use of our website is at your own risk.
            </p>
          </section>
          <section className="mb-6">
            <h2 className="text-2xl font-semibold">Changes to Terms</h2>
            <p className="mt-4 text-gray-600">
              We may update these terms from time to time. We will notify you of any changes by posting the new terms on this page.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold">Contact Us</h2>
            <p className="mt-4 text-gray-600">
              If you have any questions about these terms, please contact us at support@yourbrand.com.
            </p>
          </section>
        </div>
      </main>
      <footer className="bg-green-600 text-white text-center py-4">
        <p>&copy; {new Date().getFullYear()} Your Brand Name. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default TermsAndConditions;
