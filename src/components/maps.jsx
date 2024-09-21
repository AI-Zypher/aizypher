'use client';

import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import Link from 'next/link';

// Sample images (replace these with your own image URLs)
const images = [
    "https://cdn.jsdelivr.net/gh/MohamedArafath205/cdn.aizypher@main/eri1.jpg",
    "https://cdn.jsdelivr.net/gh/MohamedArafath205/cdn.aizypher@main/eri2.jpeg",
    "https://cdn.jsdelivr.net/gh/MohamedArafath205/cdn.aizypher@main/eri3.jpeg",
];

const maps = () => {
  // Create items array with alternating tilt styles
  const items = images.map((image, index) => (
    <div
      className="item"
      key={index}
      style={{ ...cardStyle, transform: index % 2 === 0 ? 'rotate(-5deg)' : 'rotate(5deg)' }} // Alternate tilting
    >
      <img src={image} alt={`Carousel Item ${index + 1}`} style={imageStyle} />
    </div>
  ));

  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      {/* Heading */}
      <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold">AI ZYPHER&apos;S ECO INITIATIVE</h1>
      
      {/* Carousel Section */}
      <div style={{ margin: '50px 0' }}>
        <AliceCarousel
          mouseTracking
          items={items}
          autoPlay
          autoPlayInterval={1500}  // Speed of movement (adjust if needed)
          infinite
          disableButtonsControls
          responsive={{
            0: { items: 1 },        // Show 1 image at a time on small screens
            600: { items: 2 },      // Show 2 images at a time on medium screens
            1024: { items: 3 },     // Show 3 images at a time on large screens
          }}
        />
      </div>

      {/* Button below the carousel */}
      <Link href="/eco-awareness" passHref>
      <button style={buttonStyle} className="cursor-pointer">
        Know More
      </button>
    </Link>
    </div>
  );
};

// Style for each card containing an image
const cardStyle = {
  backgroundColor: '#f4f4f4',
  padding: '20px',
  borderRadius: '8px',
  margin: '10px',
  textAlign: 'center',
  boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
  transition: 'transform 0.3s ease', // Smooth animation when rotating
};

// Style for the image inside the card
const imageStyle = {
  width: '100%',
  height: '200px',
  objectFit: 'cover',
};

// Button style
const buttonStyle = {
  padding: '10px 20px',
  backgroundColor: '#007bff',
  color: 'white',
  border: 'none',
  borderRadius: '5px',
  fontSize: '16px',
  cursor: 'pointer',
};

export default maps;
