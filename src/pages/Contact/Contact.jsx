// Contact.js
import React from 'react';
import Bgimg from '../../assets/bgimg.jpg';

function Contact() {
  return (
    <section
      className="relative bg-cover bg-center min-h-screen  justify-center px-3 py-48 lg:p-6"
      style={{ backgroundImage: `url(${Bgimg})` }}
    >
      {/* Overlay */}
          <div className="absolute inset-0 bg-black opacity-70"></div>
 
      {/* Contact Content */}
      <div className="relative  grid grid-cols-1 lg:grid-cols-2 gap-8  bg-opacity-80 lg:p-8 rounded-lg w-full  text-gray-800">
        

        {/* Text Content */}
              <div className=" py-6 lg:p-6 flex flex-col ">
                         {/* Contact Heading */}
        <h2 className="relative text-5xl leading-none lg:text-7xl font-bold text-gray-300 mb-10">Let's <br /><span className='text-indigo-500'>Work Together!</span></h2>
          <h2 className="text-3xl font-semibold mb-4 text-indigo-700">I'd Love to Hear From You!</h2>
          <p className="text-lg mb-6 text-gray-300">
            Whether you have a question about our services, pricing, or anything else, our team is ready to answer all your questions.
          </p>
          <p className="text-lg">
            Contact us through this form, or reach out directly via email at <span className="font-semibold text-indigo-700">contact@company.com</span>.
          </p>
        </div>

        {/* Contact Form */}
        <div className=" lg:p-6">
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-3xl mb-2 font-medium text-gray-300">Name</label>
              <input
                type="text"
                id="name"
                className="w-full px-5 py-6 border border-gray-900 bg-black focus:outline-none focus:border-indigo-500 text-gray-300"
                required
                placeholder='Enter your name'
              />
            </div>
            <div className='flex gap-3'>
            <div className='w-1/2'>
              <label htmlFor="phone" className="block text-3xl mb-2 font-medium text-gray-300">Phone</label>
              <input
                type="tel"
                id="phone"
                className="w-full px-5 py-6 border border-gray-900 bg-black focus:outline-none focus:border-indigo-500  text-gray-300"
                             placeholder='Enter your phone number  (Optional)'
                />
            </div>
            <div className='w-1/2'>
              <label htmlFor="email" className="block text-3xl mb-2 font-medium text-gray-300">Email</label>
              <input
                type="email"
                id="email"
                className="w-full px-5 py-6 border border-gray-900 bg-black focus:outline-none focus:border-indigo-500 text-gray-300"
                required
                placeholder='Enter your email address'
              />
            </div>
            </div>
            <div>
              <label htmlFor="message" className="block text-3xl mb-2 font-medium text-gray-300">Message</label>
              <textarea
                id="message"
                rows="7"
                className="w-full px-5 py-6 border border-gray-900 bg-black focus:outline-none focus:border-indigo-500 text-gray-300"
                              required
                placeholder='Enter your message'
              ></textarea>
            </div>
            <button
              type="submit"
              className=" py-3 px-6 font-semibold text-white bg-indigo-600 rounded-md hover:bg-indigo-500 transition-colors"
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
