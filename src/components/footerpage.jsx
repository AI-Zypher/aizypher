import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-[#242424] text-white py-6 px-8 border-t border-gray-600 relative z-10">
      <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        {/* Links Section */}
        <div className="flex space-x-6 items-center justify-center">
          <Link href="/privacy-policy" className="hover:underline">
            Privacy Policy
          </Link>
          <Link href="/terms-and-conditions" className="hover:underline">
            Terms and Conditions
          </Link>
          <Link href="mailto:contact@aizypher.in" className="hover:underline">
            contact@aizypher.in
          </Link>
        </div>

        {/* Team Section */}
        <Link href="/team" className="text-center flex justify-center w-full">
          <p className="text-white text-sm md:text-base">Made with ❤️ by AI Zypher Team</p>
        </Link>

        {/* Copyright Section */}
        <div className="text-sm flex items-center">
          <p>Copyright &copy; AIZYPHER 2024</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
