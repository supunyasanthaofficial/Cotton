import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about-us" },
    { name: "Fashions", path: "/fashions" },
    { name: "New Arrivals", path: "/new-arrivals" },
    { name: "Sales", path: "/sales" },
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-[#ffddc6] shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo Section */}
          <div className="flex items-center gap-2">
            <Link to="/" onClick={scrollToTop}>
              <img src={logo} alt="Cotton Clouds Logo" className="h-10 w-10" />
            </Link>
          </div>

          {/* Desktop Navigation - Menu Items (Centered) */}
          <div className="hidden md:flex items-center space-x-8 absolute left-1/2 transform -translate-x-1/2">
            {menuItems.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                onClick={scrollToTop}
                className="text-gray-700 hover:text-[#a70011] font-bold transition duration-300 hover:underline"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Desktop - Contact Button (Right Side) */}
          <div className="hidden md:flex items-center">
            <Link
              to="/contact"
              onClick={scrollToTop}
              className="bg-linear-to-r from-[#a70011] to-[#d40015] text-white px-6 py-2 rounded-full font-bold hover:from-[#8a000e] hover:to-[#b30012] transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <Link
              to="/contact"
              onClick={scrollToTop}
              className="bg-linear-to-r from-[#a70011] to-[#d40015] text-white px-4 py-2 rounded-full font-bold text-sm hover:from-[#8a000e] hover:to-[#b30012] transition-all duration-300"
            >
              Contact
            </Link>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              {menuItems.map((item, index) => (
                <Link
                  key={index}
                  to={item.path}
                  onClick={scrollToTop}
                  className="text-gray-700 hover:text-[#a70011] font-medium transition duration-300 py-2 hover:underline"
                >
                  {item.name}
                </Link>
              ))}

              <Link
                to="/contact"
                onClick={scrollToTop}
                className="bg-linear-to-r from-[#a70011] to-[#d40015] text-white px-6 py-3 rounded-full font-bold text-center hover:from-[#8a000e] hover:to-[#b30012] transition-all duration-300 mt-4"
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
