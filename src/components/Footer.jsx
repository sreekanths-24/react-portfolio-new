// Footer.js
import React, { useEffect } from 'react';
import Logo from '../assets/logo-light.png';
import { Link, useLocation } from "react-router-dom";

function Footer() {

  const location = useLocation();

  // Scroll to top when the location (URL path) changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const linkClassesFooter = (path) =>
    `hover:text-bold hover:underline transition ${
      location.pathname === path ? "text-indigo-400 font-bold" : ""
    }`;

  return (
    <footer className="bg-black text-gray-300 pb-12">
      <div className="container mx-auto pt-20 px-4 lg:pt-32 lg:px-32 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className='grid grid-cols-2'>
          {/* Quick Links */}
          <div>
            <h3 className="text-2xl font-semibold text-indigo-500 mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className={linkClassesFooter("/")}>Home</Link>
              </li>
              <li>
                <Link to="/about" className={linkClassesFooter("/about")}>About Me</Link>
              </li>
              <li>
                <Link to="/work" className={linkClassesFooter("/work")}>Portfolio</Link>
              </li>
              <li>
                <Link to="/services" className={linkClassesFooter("/services")}>Services</Link>
              </li>
              <li>
                <Link to="/blogs" className={linkClassesFooter("/blogs")}>Blogs</Link>
              </li>
              <li>
              <Link to="/contact" className={linkClassesFooter("/contact")}>Contact Me</Link>

              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-2xl font-semibold text-indigo-500 mb-4">Social Links</h3>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-indigo-400 transition">Twitter</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition">LinkedIn</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition">Github</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition">Blogger</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition">YouTube</a></li>
            </ul>
          </div>

        </div>

        {/* Regards Content */}
        <div>
          <h3 className="text-2xl font-semibold text-indigo-500 mb-4">My Regards</h3>
          <div className=' block lg:flex'>
          <div className=' lg:w-1/4'>
              <img src={Logo} alt="" />
            </div>  
            <div className='lg:w-3/4 pt-4 lg:pt-0 lg:pl-4'>
            <p className="text-gray-300">
          I appreciate your visit to my personal website. Your presence means a lot to me, and I hope you find valuable content and information here. Feel free to explore and reach out if you have any questions or feedback, you can do that by filling the contact me form. Thank you for your time and interest.
          </p>
          <p className="text-gray-300 mt-4">Email: <a href="mailto:sreekanthsanthosh17@gmail.com" className="hover:text-indigo-400 transition">sreekanthsanthosh17@gmail.com</a></p>
            </div>
           
          </div>
          
        </div>

      </div>
      
      {/* Footer Bottom */}
      <div className="mt-10 text-center text-gray-500 text-sm border-t border-gray-700 pt-6">
        &copy; {new Date().getFullYear()} Made with ❤️ by Sreekanth S
      </div>
    </footer>
  );
}

export default Footer;
