import React, { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-transparent backdrop-blur-md">
      <div className="container mx-auto flex items-center justify-between py-4 px-6 lg:px-8">
        {/* Logo */}
        <a href="/" className="text-2xl font-bold text-white">
          Sreekanth S
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8 text-white">
          <a href="/" className="hover:text-gray-300 transition-colors">
            Home
          </a>
          <a href="/blogs" className="hover:text-gray-300 transition-colors">
            Blogs
          </a>
          <a href="/services" className="hover:text-gray-300 transition-colors">
            Services
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
        className={`md:hidden bg-black text-white absolute top-0 left-0 w-full h-screen flex flex-col  ps-5 justify-center space-y-8 transition-all duration-300 ease-in-out transform ${
          isOpen ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
        }`}
      >
        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-white text-6xl"
        >
          &times;
        </button>

        {/* Links */}
        <a
          href="/"
          onClick={() => setIsOpen(false)}
          className="text-5xl md:text-7xl font-bold hover:text-gray-300 transition-colors"
        >
          Home
        </a>
        <a
          href="/"
          onClick={() => setIsOpen(false)}
          className="text-5xl md:text-7xl font-bold hover:text-gray-300 transition-colors"
        >
          About Me
        </a>
        <a
          href="/"
          onClick={() => setIsOpen(false)}
          className="text-5xl md:text-7xl font-bold hover:text-gray-300 transition-colors"
        >
          Portfolio
        </a>
        
        <a
          href="/services"
          onClick={() => setIsOpen(false)}
          className="text-5xl md:text-7xl font-bold hover:text-gray-300 transition-colors"
        >
          Services
        </a>
        <a
          href="/blogs"
          onClick={() => setIsOpen(false)}
          className="text-5xl md:text-7xl font-bold hover:text-gray-300 transition-colors"
        >
          Blogs
        </a>
        <a
          href="/services"
          onClick={() => setIsOpen(false)}
          className="text-5xl md:text-7xl font-bold hover:text-gray-300 transition-colors"
        >
          Contact Me
        </a>
        <span className="text-2xl md:text-7xl font-bold hover:text-gray-300 transition-colors">
  {/* YouTube Icon */}
  <a
    href="https://www.youtube.com/"
    target="_blank"
    rel="noopener noreferrer"
    className="mx-4 text-red-500 transition-colors"
  >
    <i className="fab fa-youtube"></i>
  </a>

  {/* LinkedIn Icon */}
  <a
    href="https://www.linkedin.com/"
    target="_blank"
    rel="noopener noreferrer"
    className="mx-4 text-blue-700 transition-colors"
  >
    <i className="fab fa-linkedin"></i>
  </a>

  {/* Blogger Icon */}
  <a
    href="https://www.blogger.com/"
    target="_blank"
    rel="noopener noreferrer"
    className="mx-4 text-orange-500 transition-colors"
  >
    <i className="fab fa-blogger"></i>
  </a>

  {/* GitHub Icon */}
  <a
    href="https://github.com/"
    target="_blank"
    rel="noopener noreferrer"
    className="mx-4 text-white  transition-colors"
  >
    <i className="fab fa-github"></i>
  </a>

  {/* Twitter Icon */}
  <a
    href="https://twitter.com/"
    target="_blank"
    rel="noopener noreferrer"
    className="mx-4 text-blue-400 transition-colors"
  >
    <i className="fab fa-twitter"></i>
  </a>
</span>

      </div>
    </nav>
  );
}

export default Navbar;
