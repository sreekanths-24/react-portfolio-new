// Footer.js
import React from 'react';
import Logo from '../assets/logo-light.png';
function Footer() {
  return (
    <footer className="bg-black text-gray-300 pb-10 pt-20">
      <div className="container mx-auto px-4 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className='grid grid-cols-2'>
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-indigo-500 mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="/" className="hover:text-indigo-400 transition">Home</a></li>
              <li><a href="/" className="hover:text-indigo-400 transition">About Me</a></li>
              <li><a href="/services" className="hover:text-indigo-400 transition">Services</a></li>
              <li><a href="/work" className="hover:text-indigo-400 transition">Portfolio</a></li>
              <li><a href="/blogs" className="hover:text-indigo-400 transition">Blogs</a></li>
              <li><a href="/contact" className="hover:text-indigo-400 transition">Contact Me</a></li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold text-indigo-500 mb-4">Follow Us</h3>
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
          <h3 className="text-lg font-semibold text-indigo-500 mb-4">My Regards</h3>
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
