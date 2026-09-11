import React from 'react';
import logo from '../assets/logo-text.png';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          
          {/* Brand Block */}
          <div className="lg:col-span-2">
            <a href="#home" className="flex items-center mb-4" aria-label="DevStack Home Logo">
              <img src={logo} alt="DevStack Logo" className="h-10 w-auto object-contain" />
            </a>
            
            <p className="text-gray-500 text-sm leading-relaxed max-w-sm">
              Curated tools, technologies, and resources for developers building modern software.
            </p>

            <div className="flex items-center gap-5 mt-6">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-sm font-semibold text-gray-700 hover:text-pink-600 transition-colors"
              >
                GitHub
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-sm font-semibold text-gray-700 hover:text-pink-600 transition-colors"
              >
                Twitter
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-sm font-semibold text-gray-700 hover:text-pink-600 transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* PRODUCT Links */}
          <div className="lg:col-span-1">
            <h4 className="text-sm font-bold text-gray-900 tracking-wider uppercase mb-5">Product</h4>
            <ul className="space-y-3.5">
              <li><a href="#home" className="text-sm text-gray-500 hover:text-pink-600 transition-colors">Home</a></li>
              <li><a href="#technologies" className="text-sm text-gray-500 hover:text-pink-600 transition-colors">Technologies</a></li>
              <li><a href="#projects" className="text-sm text-gray-500 hover:text-pink-600 transition-colors">Projects</a></li>
            </ul>
          </div>

          {/* COMPANY Links */}
          <div className="lg:col-span-1">
            <h4 className="text-sm font-bold text-gray-900 tracking-wider uppercase mb-5">Company</h4>
            <ul className="space-y-3.5">
              <li><a href="#about" className="text-sm text-gray-500 hover:text-pink-600 transition-colors">About</a></li>
              <li><a href="#contact" className="text-sm text-gray-500 hover:text-pink-600 transition-colors">Contact</a></li>
              <li><a href="#" className="text-sm text-gray-500 hover:text-pink-600 transition-colors">Careers</a></li>
            </ul>
          </div>

          {/* LEGAL Links */}
          <div className="lg:col-span-1">
            <h4 className="text-sm font-bold text-gray-900 tracking-wider uppercase mb-5">Legal</h4>
            <ul className="space-y-3.5">
              <li><a href="#" className="text-sm text-gray-500 hover:text-pink-600 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-sm text-gray-500 hover:text-pink-600 transition-colors">Terms of Service</a></li>
            </ul>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 mt-12 mb-6"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <p>© {new Date().getFullYear()} Dev Stack. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gray-600 transition-colors">Privacy</a>
            <a href="#" className="hover:text-gray-600 transition-colors">Terms</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;