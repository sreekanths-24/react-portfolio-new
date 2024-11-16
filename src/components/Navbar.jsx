import React, { useState, useEffect } from 'react';
import Socials from './Socials';
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const location = useLocation();
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);

  // Scroll to top when the location (URL path) changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Handle navbar visibility based on scroll direction
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      if (currentScrollPos > prevScrollPos && currentScrollPos > 50) {
        setIsVisible(false); // Hide navbar when scrolling down
      } else {
        setIsVisible(true); // Show navbar when scrolling up
      }

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  const linkClasses = (path) =>
    `hover:text-indigo-400 hover:font-bold transition-colors ${
      location.pathname === path ? "text-indigo-400 font-bold" : ""
    }`;

  const linkClassesMobile = (path) =>
    `text-5xl md:text-7xl font-bold transition-colors ${
      location.pathname === path ? "text-indigo-500" : "text-white hover:text-gray-300"
    }`;

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 bg-transparent backdrop-blur-md transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-4 px-6 lg:px-24">
        {/* Logo */}
        <a href="/" className="text-2xl font-bold text-white">
          Sreekanth S
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8 text-white">
          <Link to="/" className={linkClasses("/")}>Home</Link>
          <Link to="/about" className={linkClasses("/about")}>About Me</Link>
          <Link to="/work" className={linkClasses("/work")}>Portfolio</Link>
          <Link to="/services" className={linkClasses("/services")}>Services</Link>
          <Link to="/blogs" className={linkClasses("/blogs")}>Blogs</Link>
          <Link to="/contact" className={linkClasses("/contact")}>Contact Me</Link>
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
        className={`md:hidden bg-black text-gray-300 absolute top-0 left-0 w-full h-dvh flex flex-col ps-5 justify-center space-y-8 transition-all duration-300 ease-in-out transform ${
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
        <Link to="/" onClick={() => setIsOpen(false)} className={linkClassesMobile("/")}>Home</Link>
        <Link to="/about" onClick={() => setIsOpen(false)} className={linkClassesMobile("/about")}>About Me</Link>
        <Link to="/work" onClick={() => setIsOpen(false)} className={linkClassesMobile("/work")}>Portfolio</Link>
        <Link to="/services" onClick={() => setIsOpen(false)} className={linkClassesMobile("/services")}>Services</Link>
        <Link to="/blogs" onClick={() => setIsOpen(false)} className={linkClassesMobile("/blogs")}>Blogs</Link>
        <Link to="/contact" onClick={() => setIsOpen(false)} className={linkClassesMobile("/contact")}>Contact Me</Link>
        
        <Socials />
      </div>
    </nav>
  );
}

export default Navbar;
