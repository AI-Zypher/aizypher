"use client";
import React, { useEffect, useState } from "react";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../app/firebaseConfig";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");
  const [navbarBg, setNavbarBg] = useState("bg-opacity-0");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleLinkClick = (link) => {
    setActiveLink(link);
    closeMenu();
    if (link !== "/team") {
      document.querySelector(link)?.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = link;
    }
  };

  const handleSignIn = async () => {
    try {
      await signInWithPopup(auth, provider);
      window.location.href = "/dashboard";
    } catch (error) {
      console.error("Error during sign-in:", error.message);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 600) {
        setNavbarBg("backdrop-blur-sm bg-opacity-50");
      } else {
        setNavbarBg("bg-opacity-0");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative z-50 flex flex-col w-full">
      <nav
        className={`fixed top-0 w-full rounded-b-lg z-50 transition-all duration-300 ease-in-out px-4 flex items-center justify-between ${navbarBg}`}
      >
        <div className="flex-shrink-0">
          <img
            src="https://cdn.jsdelivr.net/gh/MohamedArafath205/cdn.aizypher@main/nav-logo.png"
            alt="logo"
            className="h-20 md:h-24"
          />
        </div>

        <ul className="hidden md:flex space-x-4 text-base md:text-lg">
          {["#home", "#about", "#events", "#sponsors", "/team"].map((link) => (
            <li key={link}>
              <a
                href={link}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link);
                }}
                className={`font-medium px-4 ${
                  activeLink === link ? "text-white" : "text-gray-300"
                }`}
              >
                {link.startsWith("#")
                  ? link.replace("#", "").charAt(0).toUpperCase() +
                    link.slice(2)
                  : link.slice(1).charAt(0).toUpperCase() + link.slice(2)}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <button
            onClick={handleSignIn}
            className="text-purple-900 border-2 border-white px-8 py-2 rounded-full tracking-wide font-medium text-sm bg-white hover:bg-white hover:text-[#31771F] hover:border-[#31771F] transition duration-200"
          >
            Login
          </button>
        </div>

        <button
          className="md:hidden flex items-center text-white"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>

        <div
          className={`fixed top-0 left-0 h-full w-64 bg-black text-white transform ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out md:hidden z-20`}
        >
          <ul className="space-y-4 text-base md:text-lg p-4">
            {["#home", "#about", "#events", "#sponsors", "/team"].map(
              (link) => (
                <li key={link}>
                  <a
                    href={link}
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick(link);
                    }}
                    className={`block font-medium px-4 py-2 ${
                      activeLink === link ? "text-white" : "text-gray-300"
                    }`}
                  >
                    {link.startsWith("#")
                      ? link.replace("#", "").charAt(0).toUpperCase() +
                        link.slice(2)
                      : link.slice(1).charAt(0).toUpperCase() + link.slice(2)}
                  </a>
                </li>
              )
            )}
            <li>
              <button
                onClick={handleSignIn}
                className="w-full text-purple-900 border-2 border-white px-8 py-2 rounded-full tracking-wide font-medium text-sm bg-white hover:bg-white hover:text-[#31771F] hover:border-[#31771F] transition duration-200"
              >
                Login
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
