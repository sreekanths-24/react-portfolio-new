import React from 'react';
import Bgimg from '../../assets/bgimg.jpg';
import Socials from '../../components/Socials';

function Contact() {
  return (
    <section
      className="relative bg-cover bg-center min-h-screen flex items-center justify-center px-4 py-16  lg:py-24"
      style={{ backgroundImage: `url(${Bgimg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-70"></div>

      {/* Contact Content */}
      <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 bg-opacity-80 rounded-lg w-full max-w-7xl text-gray-800">
        {/* Text Content */}
        <div className="py-6 flex flex-col  ">
          {/* Contact Heading */}
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-300 mb-6">
            Let's <br />
            <span className="text-indigo-400">Collaborate!</span>
          </h2>
          <h3 className="text-2xl lg:text-3xl font-semibold mb-4 text-gray-300">
            I'd Love to Hear From You!
          </h3>
          <p className="text-base lg:text-lg text-gray-200 mb-6">
            Whether you want to work with me or have a question about a project
            you're working on, or just want to say hi, feel free to send me a
            message through the form below, and I will get back to you ASAP.
          </p>
          <Socials />
        </div>

        {/* Contact Form */}
        <div className=" rounded-lg shadow-lg">
          <form className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-lg font-medium text-gray-300 mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-3 border border-gray-700 bg-gray-800 text-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
                placeholder="Enter your name"
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <label
                  htmlFor="phone"
                  className="block text-lg font-medium text-gray-300 mb-2"
                >
                  Phone <span className="text-sm">(Optional)</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-3 border border-gray-700 bg-gray-800 text-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Enter your phone number"
                />
              </div>
              <div className="flex-1">
                <label
                  htmlFor="email"
                  className="block text-lg font-medium text-gray-300 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 border border-gray-700 bg-gray-800 text-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  required
                  placeholder="Enter your email"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-lg font-medium text-gray-300 mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                rows="6"
                className="w-full px-4 py-3 border border-gray-700 bg-gray-800 text-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
                required
                placeholder="Enter your message"
              ></textarea>
            </div>

            <button
              type="submit"
              className=" py-3 px-4 font-semibold text-white bg-indigo-600 rounded-md hover:bg-indigo-500 transition-all duration-200"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
