import React from "react";
import { FaCheck } from "react-icons/fa";

const Card = ({ imgSrc, title, description, steps }) => {
  return (
    <div className="max-w-xs bg-custom-gradient border border-cyan-950 rounded-lg shadow">
      <a href="#">
        <img className="rounded-t-lg" src={imgSrc} alt={title} />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-xl font-bold tracking-light text-white uppercase">
            {title}
          </h5>
        </a>

        {/* Display full description */}
        <p className="text-white">{description}</p>
        <div className="mt-4 text-white">
            <ul className="list-none">
              {steps.map((step, index) => (
                <li key={index} className="flex items-center mb-2">
                  <FaCheck className="text-teal-500 mr-2" />
                  <span>{step}</span>
                </li>
              ))}
            </ul>
          </div>
      </div>
    </div>
  );
};

export default Card;
