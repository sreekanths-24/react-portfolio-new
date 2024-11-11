// Contact.js
import React from 'react';
import Bgimg from '../../assets/bgimg.jpg';
import Socials from '../../components/Socials';
function Contact() {
  return (
    <section
      className="relative bg-cover bg-center  min-h-screen  justify-center px-4 py-16 lg:px-6 lg:py-36"
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
          <h2 className="text-2xl font-semibold mb-4 text-gray-400">I'd Love to Hear From You!</h2>
          <p className=" mb-6 text-gray-300">
            Whether you want to work with me or have a question about a project you are working on or just want to say hi, feel free to send me a message through the form below and I will get to you ASAP.
          </p>
          <p className=" mb-6 text-gray-300">
            You can also reach out through Email <span className="font-semibold text-indigo-500">sreekanthsanthosh17@gmail.com</span>.
          </p>
          <p className=" mb-6 text-gray-300">
            Click <a href="" className='font-semibold text-indigo-500'>here</a> to learn more about my personal interests, hobbies and my journey in the world of tech.You can also connect with me on social media.
                  </p>
                  <Socials />
        </div>

        {/* Contact Form */}
        <div className=" lg:p-6">
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-xl mb-2 font-medium text-gray-300">Name</label>
              <input
                type="text"
                id="name"
                className="w-full px-5 py-4 border border-gray-900 bg-gray-900 focus:outline-none focus:border-indigo-500 text-gray-300"
                required
                placeholder='Enter your name'
              />
            </div>
            <div className='flex gap-3'>
            <div className='w-1/2'>
              <label htmlFor="phone" className="block text-xl mb-2 font-medium text-gray-300">Phone</label>
              <input
                type="tel"
                id="phone"
                className="w-full px-5 py-4 border border-gray-900 bg-gray-900 focus:outline-none focus:border-indigo-500  text-gray-300"
                             placeholder='Enter your phone number  (Optional)'
                />
            </div>
            <div className='w-1/2'>
              <label htmlFor="email" className="block text-xl mb-2 font-medium text-gray-300">Email</label>
              <input
                type="email"
                id="email"
                className="w-full px-5 py-4 border border-gray-900 bg-gray-900 focus:outline-none focus:border-indigo-500 text-gray-300"
                required
                placeholder='Enter your email address'
              />
            </div>
            </div>
            <div>
              <label htmlFor="message" className="block text-xl mb-2 font-medium text-gray-300">Message</label>
              <textarea
                id="message"
                rows="7"
                className="w-full px-5 py-4 border border-gray-900 bg-gray-900 focus:outline-none focus:border-indigo-500 text-gray-300"
                              required
                placeholder='Enter your message'
              ></textarea>
            </div>
            <button
              type="submit"
              className=" py-2 px-4 font-semibold text-white bg-indigo-600 rounded-md hover:bg-indigo-500 transition-colors"
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
