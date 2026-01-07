"use client";

import { useState } from "react";
import { NavLink } from "react-router-dom";
import image from "../../image/freepik__upload.png";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Scroll to section with offset
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const offset = 50;
      const sectionPosition =
        section.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = sectionPosition - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  // Handle navigation link click
  const handleNavClick = (id) => {
    setActiveLink(id);
    scrollToSection(id);
    setIsMenuOpen(false);
  };

  return (
    <div className="text-white fixed top-0 left-0 w-full z-50 flex justify-center mt-3 md:mt-5 px-3 md:px-0">
      <div
        className="bg-black/20 backdrop-blur-xl container mx-auto px-4 md:px-6 py-3 flex justify-between items-center rounded-full border border-gray-700 shadow-2xl"
        style={{ backdropFilter: "blur(10px)" }}
      >
        {/* Logo */}
        <NavLink to="/">
          <div>
            <img
              src={image || "/placeholder.svg"}
              className="h-9 md:h-12 w-auto"
              alt="Logo"
            />
          </div>
        </NavLink>

        {/* Desktop Navigation Links - Hidden on Mobile */}
        <div className="hidden lg:flex items-center space-x-10 text-gray-300 text-[16px]">
          <NavLink
            to="/vision"
            className={({ isActive }) =>
              `relative font-medium transition-all duration-300 hover:text-white pb-2 ${
                isActive ? "text-white" : ""
              }`
            }
          >
            {({ isActive }) => (
              <>
                Vision
                <span
                  className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#00953B] to-[#0068F0] rounded-full transition-all duration-500 ease-out ${
                    isActive
                      ? "scale-x-100 opacity-100"
                      : "scale-x-0 opacity-0 hover:scale-x-100 hover:opacity-100"
                  }`}
                />
              </>
            )}
          </NavLink>
          <NavLink
            to="/why_choose_Cadensa"
            className={({ isActive }) =>
              `relative font-medium transition-all duration-300 hover:text-white pb-2 ${
                isActive ? "text-white" : ""
              }`
            }
          >
            {({ isActive }) => (
              <>
                Why choose Cadensa
                <span
                  className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#00953B] to-[#0068F0] rounded-full transition-all duration-500 ease-out ${
                    isActive
                      ? "scale-x-100 opacity-100"
                      : "scale-x-0 opacity-0 hover:scale-x-100 hover:opacity-100"
                  }`}
                />
              </>
            )}
          </NavLink>

          <NavLink
            to="/about_us"
            className={({ isActive }) =>
              `relative font-medium transition-all duration-300 hover:text-white pb-2 ${
                isActive ? "text-white" : ""
              }`
            }
          >
            {({ isActive }) => (
              <>
                About us
                <span
                  className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#00953B] to-[#0068F0] rounded-full transition-all duration-500 ease-out ${
                    isActive
                      ? "scale-x-100 opacity-100"
                      : "scale-x-0 opacity-0 hover:scale-x-100 hover:opacity-100"
                  }`}
                />
              </>
            )}
          </NavLink>
          <NavLink
            to="/our_approach"
            className={({ isActive }) =>
              `relative font-medium transition-all duration-300 hover:text-white pb-2 ${
                isActive ? "text-white" : ""
              }`
            }
          >
            {({ isActive }) => (
              <>
                Our approach
                <span
                  className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#00953B] to-[#0068F0] rounded-full transition-all duration-500 ease-out ${
                    isActive
                      ? "scale-x-100 opacity-100"
                      : "scale-x-0 opacity-0 hover:scale-x-100 hover:opacity-100"
                  }`}
                />
              </>
            )}
          </NavLink>
        </div>

        {/* CTA Button - Hidden on Mobile */}
        <button
          onClick={() => scrollToSection("pricing")}
          className="bg-gradient-to-r from-[#00953B] to-[#0068F0] rounded-full px-6 py-3 border border-white/20 shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 cursor-pointer hidden md:block font-bold text-white text-[16px]"
        >
          Join the Waitlist
        </button>

        {/* Mobile Hamburger Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden text-white p-2 rounded-full hover:bg-white/10 transition-colors"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-20 left-3 right-3 bg-black/95 backdrop-blur-xl rounded-3xl border border-gray-700 shadow-2xl overflow-hidden">
          <div className="flex flex-col p-6 space-y-4">
            <NavLink
              to="/vision"
              onClick={() => setMobileMenuOpen(false)}
              className={({ isActive }) =>
                `text-gray-300 font-medium text-lg py-3 px-4 rounded-xl transition-all duration-300 ${
                  isActive
                    ? "bg-gradient-to-r from-[#00953B] to-[#0068F0] text-white"
                    : "hover:bg-white/10"
                }`
              }
            >
              Vision
            </NavLink>
            <NavLink
              to="/why_choose_Cadensa"
              onClick={() => setMobileMenuOpen(false)}
              className={({ isActive }) =>
                `text-gray-300 font-medium text-lg py-3 px-4 rounded-xl transition-all duration-300 ${
                  isActive
                    ? "bg-gradient-to-r from-[#00953B] to-[#0068F0] text-white"
                    : "hover:bg-white/10"
                }`
              }
            >
              Why choose Cadensa
            </NavLink>
            <NavLink
              to="/about_us"
              onClick={() => setMobileMenuOpen(false)}
              className={({ isActive }) =>
                `text-gray-300 font-medium text-lg py-3 px-4 rounded-xl transition-all duration-300 ${
                  isActive
                    ? "bg-gradient-to-r from-[#00953B] to-[#0068F0] text-white"
                    : "hover:bg-white/10"
                }`
              }
            >
              About us
            </NavLink>
            <NavLink
              to="/our_approach"
              onClick={() => setMobileMenuOpen(false)}
              className={({ isActive }) =>
                `text-gray-300 font-medium text-lg py-3 px-4 rounded-xl transition-all duration-300 ${
                  isActive
                    ? "bg-gradient-to-r from-[#00953B] to-[#0068F0] text-white"
                    : "hover:bg-white/10"
                }`
              }
            >
              Our approach
            </NavLink>

            {/* Mobile CTA Button */}
            <div className="pt-2">
              <button
                onClick={() => {
                  scrollToSection("pricing");
                  setMobileMenuOpen(false);
                }}
                className="w-full bg-gradient-to-r from-[#00953B] to-[#0068F0] rounded-full px-6 py-3 font-bold text-white text-[16px]"
              >
                Join the Waitlist
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
