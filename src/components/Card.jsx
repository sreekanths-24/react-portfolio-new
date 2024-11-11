// Card.js
import React from 'react';

function Card({ title, link, image, description }) {
  // Check if the image URL is a video by looking for ".mp4" extension
  const isVideo = image.endsWith('.mp4');

  return (
       <a href={link} target='blank'>
    <div className="bg-transparent overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl">
      {isVideo ? (
        <video
        src={image}
        alt={title}
        className="w-full h-48 object-cover"
        loop
        muted
        autoPlay
        playsInline
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
