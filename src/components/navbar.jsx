import React from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [activeLink, setActiveLink] = React.useState("#home");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleLinkClick = (link) => {
    setActiveLink(link);
    closeMenu();
  };

  const handleSignIn = async () => {
    try {
      await signInWithPopup(auth, provider);
      window.location.href = "/register";
    } catch (error) {
      console.error("Error during sign-in:", error.message);
    }
  };
  return (
    <div className="relative z-10 flex flex-col w-full h-full">
      <nav className="relative z-50 bg-opacity-0 bg-black text-white px-4 flex items-center justify-between">
        <div className="flex-shrink-0">
          <img
            src="https://cdn.jsdelivr.net/gh/MohamedArafath205/cdn.aizypher@main/nav-logo.png"
            alt="logo"
            className="h-28"
          />
        </div>

        <ul className="hidden md:flex justify-center md:text-lg text-2xl space-x-6">
          {["#home", "#about", "#events", "#sponsors", "#team"].map((link) => (
            <li key={link}>
              <a
                href={link}
                onClick={() => handleLinkClick(link)}
                className={`font-bold px-6 ${
                  activeLink === link ? "text-white" : "text-gray-400"
                }`}
              >
                {link.replace("#", "").charAt(0).toUpperCase() + link.slice(2)}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block flex-shrink-0 pr-8">
          <button
            onClick={handleSignIn}
            className="text-[#31771F] border-2 border-white px-12 py-4 rounded-full tracking-widest font-bold text-sm bg-white hover:bg-white hover:text-[#31771F] hover:border-[#31771F] transition duration-200"
          >
            Login
          </button>
        </div>

        <button
          className="md:hidden flex items-center text-white"
          onClick={toggleMenu}
        >
          <svg
            className="w-8 h-8"
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
          <ul className="flex flex-col space-y-6 p-8">
            {["#home", "#about", "#events", "#sponsors", "#team"].map(
              (link) => (
                <li key={link}>
                  <a
                    href={link}
                    onClick={() => handleLinkClick(link)}
                    className={`font-bold text-xl ${
                      activeLink === link ? "text-white" : "text-gray-400"
                    }`}
                  >
                    {link.replace("#", "").charAt(0).toUpperCase() +
                      link.slice(2)}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
