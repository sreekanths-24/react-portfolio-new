import React from 'react';
import Bgimg from '../../assets/bgimg.jpg';
import Profile from '../../assets/profile.png';

function Home() {
  return (
    <section
      className="relative bg-cover bg-center h-dvh flex items-center justify-center"
      style={{ backgroundImage: `url(${Bgimg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-70"></div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center text-gray-300 w-full px-4 lg:px-12 max-w-7xl">
{/* Profile Image */}
<div className="block lg:hidden lg:w-1/2 lg:pl-8 mb-8 lg:mb-0">
          <img 
            src={Profile} 
            alt="Profile" 
            className="mx-auto" 
            style={{ borderRadius: '27% 73% 42% 58% / 67% 31% 69% 33%' }}
             data-aos="fade-down"
          />
        </div>
        
        {/* Text Content */}
        <div className="lg:w-1/2 lg:pr-8" data-aos="fade-down">
          <h1 className="text-4xl lg:text-7xl font-bold leading-tight">
            Hi there, <br  /> I'm Sreekanth S
          </h1>
          <p className="mt-6 text-xl lg:text-2xl text-gray-200">
            Showcasing my projects, blogs, and the services I offer
          </p>
          <div className="mt-10">
            <a
              href="#services"
              className="px-10 py-4 font-semibold text-gray-300 bg-indigo-600 rounded-md shadow-lg hover:bg-indigo-500 transition-colors"
            >
              Explore My Work
            </a>
          </div>
        </div>
        {/* Profile Image */}
        <div className="hidden lg:block lg:w-1/2 lg:pl-8 mb-8 lg:mb-0">
          <img 
            src={Profile} 
            alt="Profile" 
            className="mx-auto" 
            style={{ borderRadius: '27% 73% 42% 58% / 67% 31% 69% 33%' }} 
             data-aos="fade-down"
          />
        </div>
      </div>
    </section>
  );
}

export default Home;
