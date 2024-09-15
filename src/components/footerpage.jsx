import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-[#242424] text-white flex justify-between items-center py-4 px-6 border-t border-white relative z-10">
      <div className="flex space-x-4">
        {/* Remove <a> and apply class directly to Link */}
        <Link href="/privacy-policy">
          Privacy Policy
        </Link>
        <Link href="/terms-and-conditions">
          Terms and Conditions
        </Link>
      </div>
      <Link href="/team">
        <p className="text-center text-white">Made with ❤️ by AI Zypher Team</p>
      </Link>
      <div>
        <p>Copyright @SRM 2024</p>
      </div>
    </footer>
  );
};

export default Footer;
