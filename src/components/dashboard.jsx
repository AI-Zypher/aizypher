import React from 'react';
import NavBar from "../components/navbar";
import Card from "../app/eventsT/page"; // Ensure this path is correct

const DashboardPage = () => {
  return (
    <div style={{ position: 'relative', minHeight: '100vh', overflowY: 'auto' }}>
      <NavBar />
      <div style={{ position: 'absolute', inset: 0, zIndex: 0, overflow: 'hidden' }}>
        <img
          src="https://cdn.jsdelivr.net/gh/MohamedArafath205/cdn.aizypher@main/white-bg.png"
          alt="Mirrored Background"
          style={{
            objectFit: 'cover',
            width: '100%',
            height: '100%',
            position: 'absolute',
            zIndex: '-1',
          }}
        />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', paddingTop: '100px', zIndex: 1, position: 'relative' }}>
        <h1 style={{ fontSize: '48px', fontWeight: 'bold', marginBottom: '10px', color: '#fff' }}>AI ZYPHER</h1>
        <h2 style={{ fontSize: '32px', color: '#fff', marginBottom: '40px' }}>Your Dashboard</h2>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', width: '80%' }}>
          <div style={{ marginBottom: '30px' }}>
            <h3 style={{ fontSize: '36px', color: '#fff' }}>Technical Events</h3>
            <Card title="Technical Card" description="Description for technical event." />
          </div>
          <div style={{ marginBottom: '30px' }}>
            <h3 style={{ fontSize: '36px', color: '#fff' }}>Non-technical Events</h3>
            <Card title="Non-technical Card" description="Description for non-technical event." />
          </div>
        </div>
        {/* Centered Button */}
        <div style={{ display: 'flex', justifyContent: 'center', width: '100%', marginTop: '40px' }}>
          <a href="/Event.jsx" className="mt-5 text-blue-300">
            <button className="px-6 py-2 border-2 border-white bg-transparent rounded-full text-white font-semibold hover:bg-white hover:border-white hover:text-black focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 flex items-center space-x-2">
              Registered Events &nbsp;
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
          </a>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
