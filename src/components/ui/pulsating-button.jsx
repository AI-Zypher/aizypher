import React from "react";
import { gsap } from "gsap";

const PulsatingButton = ({ children }) => {
  const buttonRef = React.useRef(null);

  // Pulsating animation using GSAP
  React.useEffect(() => {
    gsap.to(buttonRef.current, {
      scale: 1.1,
      duration: 1,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });
  }, []);

  return (
    <button
      ref={buttonRef}
      className="px-8 py-3 font-bold text-white-400 bg-green-800 rounded-full shadow-lg hover:bg-white-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 transition-all duration-500"
    >
      {children}
    </button>
  );
};

export default PulsatingButton;
