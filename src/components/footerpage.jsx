import React from 'react';
import Link from 'next/link';  // Import Link from next/link

const Footer = () => {
  return (
    <footer className="bg-green-600 text-white flex justify-between items-center py-4 px-6 border-t border-white relative z-10">
      <div className="flex space-x-4">
        {/* Remove <a> and apply class directly to Link */}
        <Link href="/privacy-policy" className="hover:text-green-500">
          Privacy Policy
        </Link>
        <Link href="/terms-and-conditions" className="hover:text-green-500">
          Terms and Conditions
        </Link>
      </div>
      <div>
        <p>Copyright SRM 2024</p>
      </div>
    </footer>
  );
};

export default Footer;
