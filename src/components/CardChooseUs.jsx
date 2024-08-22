import React from 'react';

const CardChooseUs = ({ icon, title, description }) => {
  return (
    <div className="flex items-start p-4">
      {/* Icon Section */}
      <div className="flex-shrink-0 rounded-full bg-teal-700 w-14 h-14 mr-4 flex items-center justify-center">
        <img src={icon} alt={title} className="w-7 h-7 object-contain" />
      </div>

      {/* Text Section */}
      <div>
        <div className="text-xl font-semibold text-gray-800">{title}</div>
        <div className="text-gray-600 mt-1">{description}</div>
      </div>
    </div>
  );
};

export default CardChooseUs;