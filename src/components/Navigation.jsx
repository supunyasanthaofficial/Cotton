import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);

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

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
    setSearchQuery("");
  };

  return (
    <nav className="bg-[#ffddc6] shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center gap-2">
            <Link to="/" onClick={scrollToTop}>
              <img src={logo} alt="Cotton Clouds Logo" className="h-10 w-10" />
            </Link>
          </div>

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

          <div className="hidden md:flex items-center gap-4">
            <form
              onSubmit={handleSearch}
              className={`relative transition-all duration-300 ${
                isSearchExpanded ? "w-60" : "w-10"
              }`}
              onMouseEnter={() => setIsSearchExpanded(true)}
              onMouseLeave={() => {
                if (!searchQuery) setIsSearchExpanded(false);
              }}
            >
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={isSearchExpanded ? "Search products..." : ""}
                className={`w-full pl-10 pr-4 py-2 bg-white/70 backdrop-blur-sm border border-gray-300 rounded-full text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#a70011] focus:bg-white transition-all duration-300 ${
                  !isSearchExpanded ? "opacity-0 cursor-pointer" : "opacity-100"
                }`}
                onFocus={() => setIsSearchExpanded(true)}
              />
              <button
                type="submit"
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-[#a70011]"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>

              {!isSearchExpanded && (
                <div className="absolute inset-0 bg-white/70 backdrop-blur-sm border border-gray-300 rounded-full flex items-center justify-center cursor-pointer">
                  <svg
                    className="w-5 h-5 text-gray-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
              )}
            </form>

            <Link
              to="/contact"
              onClick={scrollToTop}
              className="bg-linear-to-r from-[#a70011] to-[#d40015] text-white px-6 py-2 rounded-full font-bold hover:from-[#8a000e] hover:to-[#b30012] transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
            >
              Contact Us
            </Link>
          </div>

          <div className="md:hidden flex items-center space-x-3">
            <div className="relative">
              <button
                onClick={() => setIsSearchExpanded(!isSearchExpanded)}
                className="text-gray-700 p-2"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>

              {isSearchExpanded && (
                <div className="absolute top-full right-0 mt-2 bg-white rounded-lg shadow-xl p-2 z-50 min-w-64">
                  <form onSubmit={handleSearch} className="flex">
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search products..."
                      className="grow px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-[#a70011]"
                      autoFocus
                    />
                    <button
                      type="submit"
                      className="bg-[#a70011] text-white px-4 py-2 rounded-r-lg hover:bg-[#8a000e] transition-colors"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                      </svg>
                    </button>
                  </form>
                </div>
              )}
            </div>

            <Link
              to="/contact"
              onClick={scrollToTop}
              className="bg-linear-to-r from-[#a70011] to-[#d40015] text-white px-4 py-2 rounded-full font-bold text-sm hover:from-[#8a000e] hover:to-[#b30012] transition-all duration-300"
            >
              Contact
            </Link>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 focus:outline-none p-2"
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

        {isMenuOpen && (
          <div className="md:hidden py-6 border-t border-gray-300">
            <div className="flex flex-col space-y-4">
              <form onSubmit={handleSearch} className="px-4">
                <div className="relative">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search products..."
                    className="w-full pl-10 pr-4 py-3 bg-white border border-gray-300 rounded-full text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#a70011]"
                  />
                  <button
                    type="submit"
                    className="absolute left-7 top-1/2 transform -translate-y-1/2 text-gray-500"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </button>
                </div>
              </form>

              {menuItems.map((item, index) => (
                <Link
                  key={index}
                  to={item.path}
                  onClick={scrollToTop}
                  className="text-gray-700 hover:text-[#a70011] font-medium transition duration-300 py-2 px-4 hover:underline"
                >
                  {item.name}
                </Link>
              ))}

              <Link
                to="/contact"
                onClick={scrollToTop}
                className="bg-linear-to-r from-[#a70011] to-[#d40015] text-white px-6 py-3 rounded-full font-bold text-center hover:from-[#8a000e] hover:to-[#b30012] transition-all duration-300 mt-4 mx-4"
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
