import React from 'react'

function ContactForm() {
  return (
<form className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="hidden lg:block text-lg font-medium text-gray-300 mb-2"
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
                  className="hidden lg:block text-lg font-medium text-gray-300 mb-2"
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
                  className="hidden lg:block text-lg font-medium text-gray-300 mb-2"
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
                className="hidden lg:block text-lg font-medium text-gray-300 mb-2"
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
  )
}

export default ContactForm