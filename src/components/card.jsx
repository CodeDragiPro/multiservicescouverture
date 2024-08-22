import React, { useState } from "react";
import { FaPlus, FaMinus, FaCheck } from "react-icons/fa";

const Card = ({ imgSrc, title, description, steps }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="max-w-sm bg-custom-gradient border border-cyan-950 rounded-lg shadow">
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

        {/* Toggle button for showing steps */}
        {steps && steps.length > 0 && (
          <div className="flex justify-center">
            <button
              onClick={toggleAccordion}
              className="text-white bg-teal-700 mt-2 hover:bg-cyan-950 focus:outline-none font-medium rounded-full text-sm p-2 text-center inline-flex items-center justify-center"
              style={{ width: "40px", height: "40px" }}
            >
              {isOpen ? <FaMinus /> : <FaPlus />}
            </button>
          </div>
        )}

        {/* Steps section */}
        {isOpen && (
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
        )}
      </div>
    </div>
  );
};

export default Card;
