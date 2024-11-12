import React from 'react';
import Bgimg from "../../assets/bgimg.jpg";
import Me from "../../assets/me2.jpg";
import Me2 from "../../assets/me2.jpg";
import Me3 from "../../assets/me3.jpg";
import Me4 from "../../assets/me4.jpg";
import Skills from "../../components/Skills";

function About() {
  return (
    <>
    <section 
      className="relative bg-cover bg-center min-h-screen flex items-center justify-center pb-16 pt-28 px-4 lg:px-36"
      style={{ backgroundImage: `url(${Bgimg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-70"></div>
      
      {/* Content Wrapper */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center   space-y-8 lg:space-y-0 lg:space-x-10">
        {/* Text Section */}
        <div className="lg:w-1/2 space-y-6 animate-fadeInLeft">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Here’s <span className="text-indigo-400">My Story</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-200">
            I'm a passionate developer with a love for creating unique digital experiences. Over the years, I've honed my skills in various programming languages, frameworks, and tools to bring ideas to life. Every project I undertake is a step forward in my journey to innovate and inspire.
          </p>
          <p className="text-lg md:text-xl text-gray-200">
            Beyond coding, I’m an avid learner, constantly exploring new technologies and methodologies to stay ahead in the ever-evolving tech landscape. I believe that through continuous learning and sharing knowledge, we can all make a positive impact in the tech community.
          </p>
        </div>

        {/* Image Section */}
        <div className="lg:w-1/3 flex justify-center animate-fadeInRight">
          <img
            src={Me}
            alt="Me"
            className="   transform transition duration-500  hover:border-indigo-500"
          />
        </div>
      </div>
    </section>
    <Skills />
    </>
  );
}

export default About;
