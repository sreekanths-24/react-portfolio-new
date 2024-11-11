// Card.js
import React, { useState } from 'react';

function Card({ title,link, image, description }) {
  const [isLoading, setIsLoading] = useState(true);

  // Check if the image URL is a video by looking for ".mp4" extension
  const isVideo = image.endsWith('.mp4');

  // Handle video load event
  const handleVideoLoaded = () => {
    setIsLoading(false); // Hide loading icon when video is fully loaded
  };

  return (
    <a href={link} target='blank'>
      
    <div className="bg-transparent overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl">
      {isLoading && (
        <div className="flex items-center justify-center w-full h-48 bg-gray-800">
          {/* Lordicon loading animation */}
          <lord-icon
            src="https://cdn.lordicon.com/jectmwqf.json"
            trigger="loop"
            colors="primary:#ffffff,secondary:#08a88a"
            style={{ width: 50, height: 50 }}
          ></lord-icon>
        </div>
      )}
    <script src="https://cdn.lordicon.com/lordicon.js"></script>

      {isVideo ? (
        <video
          src={image}
          alt={title}
          className={`w-full h-48 object-cover ${isLoading ? 'hidden' : 'block'}`}
          loop
          muted
          autoPlay
          playsInline
          onLoadedData={handleVideoLoaded}
        />
      ) : (
        <img src={image} alt={title} className="w-full h-48 object-cover" />
      )}
      
      <div className="pt-6">
        <h3 className="text-2xl font-semibold text-gray-400 mb-4">{title}</h3>
        <p className="text-gray-300 text-lg">{description}</p>
      </div>
      </div>
      
    </a>
  );
}

export default Card;
