import React from 'react'

function Socials() {
  return (
<span className="text-3xl md:text-5xl font-bold hover:text-gray-300 transition-colors">
  {/* YouTube Icon */}
  <a
    href="https://www.youtube.com/"
    target="_blank"
    rel="noopener noreferrer"
    className="mr-3 text-red-500 transition-colors"
  >
    <i className="fab fa-youtube"></i>
  </a>

  {/* LinkedIn Icon */}
  <a
    href="https://www.linkedin.com/"
    target="_blank"
    rel="noopener noreferrer"
    className="mx-3 text-blue-700 transition-colors"
  >
    <i className="fab fa-linkedin"></i>
  </a>

  {/* Blogger Icon */}
  <a
    href="https://www.blogger.com/"
    target="_blank"
    rel="noopener noreferrer"
    className="mx-3 text-orange-500 transition-colors"
  >
    <i className="fab fa-blogger"></i>
  </a>

  {/* GitHub Icon */}
  <a
    href="https://github.com/"
    target="_blank"
    rel="noopener noreferrer"
    className="mx-3 text-gray-300  transition-colors"
  >
    <i className="fab fa-github"></i>
  </a>

  {/* Twitter Icon */}
  <a
    href="https://twitter.com/"
    target="_blank"
    rel="noopener noreferrer"
    className="mx-3 text-blue-400 transition-colors"
  >
    <i className="fab fa-twitter"></i>
  </a>
</span>
  )
}

export default Socials