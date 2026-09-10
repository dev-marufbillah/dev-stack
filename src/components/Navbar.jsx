import React, { useState } from 'react';
import logo from '../assets/logo-text.png';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Technologies', href: '#technologies' },
    { name: 'Projects', href: '#projects' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ========== DESKTOP NAVBAR ========== */}
        <div className="hidden md:flex justify-between items-center h-20">
          {/* Left: Brand Logo (Only Image) */}
          <div className="flex items-center cursor-pointer">
            <img src={logo} alt="DevStack Logo" className="h-10 w-auto object-contain" />
          </div>

          {/* Center: Nav Links */}
          <div className="flex space-x-8">
            {navLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                className={`font-medium transition-colors ${
                  index === 0
                    ? 'text-pink-600 font-semibold'
                    : 'text-gray-500 hover:text-pink-600'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Right: Buttons */}
          <div className="flex items-center gap-6">
            <button className="text-gray-600 font-medium hover:text-gray-900 transition-colors">
              Sign In
            </button>
            <button className="brand-gradient-bg hover:opacity-90 text-white px-6 py-2.5 rounded-full font-medium transition-all shadow-sm hover:shadow-md">
              Sign Up
            </button>
          </div>
        </div>

        {/* ========== MOBILE NAVBAR ========== */}
        <div className="flex md:hidden justify-between items-center h-16">
          {/* Left: Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>

          {/* Center: Brand Logo (Only Image) */}
          <div className="flex items-center cursor-pointer">
            <img src={logo} alt="DevStack Logo" className="h-8 w-auto object-contain" />
          </div>

          {/* Right: Buttons */}
          <div className="flex items-center gap-2">
            <button className="text-gray-600 text-sm font-medium hover:text-gray-900 transition-colors px-2">
              Sign In
            </button>
            <button className="brand-gradient-bg hover:opacity-90 text-white text-sm px-4 py-1.5 rounded-full font-medium transition-all shadow-sm">
              Sign Up
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE DROPDOWN MENU */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-white border-b border-gray-100 ${
          isOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 py-3 space-y-1">
          {navLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`block px-4 py-3 rounded-xl font-medium transition-colors ${
                index === 0
                  ? 'bg-pink-50 text-pink-600'
                  : 'text-gray-600 hover:bg-gray-50 hover:text-pink-600'
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;