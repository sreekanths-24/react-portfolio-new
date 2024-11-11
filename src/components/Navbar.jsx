import React, { useState } from 'react';
import Socials from './Socials';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-transparent backdrop-blur-md">
      <div className="container mx-auto flex items-center justify-between py-4 px-6 lg:px-24">
        {/* Logo */}
        <a href="/" className="text-2xl font-bold text-white">
          Sreekanth S
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8 text-white">
          <a href="/" className="hover:text-gray-300 transition-colors">
            Home
          </a>
          <a href="/about" className="hover:text-gray-300 transition-colors">
            About Me
          </a>
          <a href="/work" className="hover:text-gray-300 transition-colors">
            Portfolio
          </a>
          <a href="/services" className="hover:text-gray-300 transition-colors">
            Services
          </a>
          <a href="/blogs" className="hover:text-gray-300 transition-colors">
            Blogs
          </a>
          <a href="/contact" className="hover:text-gray-300 transition-colors">
            Contact Me
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
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
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`md:hidden bg-black text-gray-300 absolute top-0 left-0 w-full h-dvh flex flex-col  ps-5 justify-center space-y-8 transition-all duration-300 ease-in-out transform ${
          isOpen ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
        }`}
      >
        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-gray-300 text-6xl"
        >
          &times;
        </button>

        {/* Links */}
        <a
          href="/"
          onClick={() => setIsOpen(false)}
          className="text-5xl md:text-7xl font-bold hover:text-gray-300 transition-colors"
          data-aos="fade-right"
        >
          Home
        </a>
        <a
          href="/about"
          onClick={() => setIsOpen(false)}
          className="text-5xl md:text-7xl font-bold hover:text-gray-300 transition-colors"
          data-aos="fade-right"
        >
          About Me
        </a>
        <a
          href="/work"
          onClick={() => setIsOpen(false)}
          className="text-5xl md:text-7xl font-bold hover:text-gray-300 transition-colors"
          data-aos="fade-right"
        >
          Portfolio
        </a>
        
        <a
          href="/services"
          onClick={() => setIsOpen(false)}
          className="text-5xl md:text-7xl font-bold hover:text-gray-300 transition-colors"
          data-aos="fade-right"
        >
          Services
        </a>
        <a
          href="/blogs"
          onClick={() => setIsOpen(false)}
          className="text-5xl md:text-7xl font-bold hover:text-gray-300 transition-colors"
          data-aos="fade-right"
        >
          Blogs
        </a>
        <a
          href="/contact"
          onClick={() => setIsOpen(false)}
          className="text-5xl md:text-7xl font-bold hover:text-gray-300 transition-colors"
          data-aos="fade-right"
        >
          Contact Me
        </a>
        <Socials />

      </div>
    </nav>
  );
}

export default Navbar;
