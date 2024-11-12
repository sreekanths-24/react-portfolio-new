// SkillCard.js
import React from 'react';

function Skillcard({ logo, name }) {
  return (
    <div className="skill-card flex flex-col items-center justify-center p-4 bg-gray-800 rounded-lg shadow-md transition-transform transform hover:scale-105">
      <img src={logo} alt={name} className="w-16 h-16 mb-4" />
      <h4 className="text-white text-lg">{name}</h4>
    </div>
  );
}

export default Skillcard;
