import React from "react";

function Skillcard({ logo, name }) {
  return (
    <div
      data-aos="fade-up"
      className="skill-card relative group flex flex-col items-center justify-center p-5 lg:p-9 bg-gray-800 rounded-2xl shadow-md transition-transform transform hover:bg-indigo-900"
    >
      <img src={logo} alt={name} className="w-full h-auto" />
      {/* Tooltip */}
      <div className="absolute bottom-14 hidden group-hover:block bg-black text-white text-sm  rounded shadow-lg">
        {name}
      </div>
    </div>
  );
}

export default Skillcard;
