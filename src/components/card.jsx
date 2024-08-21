import React from 'react';

const Card = ({ imgSrc, title, description }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden border-2 border-secondary max-w-xs  text-secondary hover:bg-custom-gradient hover:text-white w-[13rem]">
      <div className="flex justify-start items-start p-4 w-full">
        <img src={imgSrc} alt={title} className="w-12 h-12" />
      </div>
      <div className="p-4 text-left">
        <h2 className="text-lg uppercase font-bold mb-2 ">
          {title}
        </h2>
        <p className="font-medium">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Card;