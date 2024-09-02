// components/Footer.js

import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-green-600 text-white flex justify-between items-center py-4 px-6 border-t border-white relative z-10">
      <div className="flex space-x-4">
        <a href="#" className="hover:text-green-500">
          Privacy Policy
        </a>
        <a href="#" className="hover:text-green-500">
          Terms and Conditions
        </a>
      </div>
      <div>
        <p>Copyright SRM 2024</p>
      </div>
    </footer>
  );
};

export default Footer;
