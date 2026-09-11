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
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* DESKTOP NAVBAR */}
        <div className="hidden md:flex justify-between items-center h-20">
          <a href="#home" className="flex items-center" aria-label="DevStack Home Logo">
            <img src={logo} alt="DevStack Logo" className="h-10 w-auto object-contain" />
          </a>

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

          <div className="flex items-center gap-6">
            <button className="text-gray-600 font-medium hover:text-gray-900 transition-colors" aria-label="Sign In">
              Sign In
            </button>
            <button className="brand-gradient-bg hover:opacity-90 text-white px-6 py-2.5 rounded-full font-medium transition-all shadow-sm hover:shadow-md" aria-label="Sign Up">
              Sign Up
            </button>
          </div>
        </div>

        {/* MOBILE NAVBAR */}
        <div className="flex md:hidden justify-between items-center h-16">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
            aria-label="Toggle navigation menu"
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

          <a href="#home" className="flex items-center" aria-label="DevStack Home Logo">
            <img src={logo} alt="DevStack Logo" className="h-8 w-auto object-contain" />
          </a>

          <div className="flex items-center gap-2">
            <button className="text-gray-600 text-sm font-medium hover:text-gray-900 transition-colors px-2" aria-label="Sign In">
              Sign In
            </button>
            <button className="brand-gradient-bg hover:opacity-90 text-white text-sm px-4 py-1.5 rounded-full font-medium transition-all shadow-sm" aria-label="Sign Up">
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
    </header>
  );
};

export default Navbar;