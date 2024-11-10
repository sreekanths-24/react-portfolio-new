import React from 'react';
import Bgimg from '../../assets/bgimg.jpg';
import HeroLottie from '../../assets/hero-animation-3.json';

function Home() {
  return (
    <section
      className="relative bg-cover bg-center h-screen flex items-center justify-center"
      style={{ backgroundImage: `url(${Bgimg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-70"></div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center  text-center lg:text-left text-white w-full px-4 lg:px-12 max-w-7xl">
        
        {/* Text Content */}
        <div className="lg:w-1/2 lg:pr-8 ">
          <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
            Hi there, I'm Sreekanth S
          </h1>
          {/* Lottie Animation */}
        
          <p className="mt-6 text-xl lg:text-2xl text-gray-200">
            Showcasing my projects, blogs, and the services I offer
          </p>
          <div className="mt-10">
            <a
              href="#services"
              className="px-10 py-4 font-semibold text-white bg-indigo-600 rounded-md shadow-lg hover:bg-indigo-500 transition-colors"
            >
              Explore My Work
            </a>
          </div>
        </div>

        
      </div>
    </section>
  );
}

export default Home;
