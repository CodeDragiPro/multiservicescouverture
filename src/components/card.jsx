import React, { useState, useRef } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const Card = ({ imgSrc, title, description }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  const getPreviewText = (text) => {
    const words = text.split(" ");
    if (words.length <= 10) {
      return { preview: text, hasMore: false };
    } else {
      return { preview: words.slice(0, 10).join(" ") + "...", hasMore: true };
    }
  };

  const { preview, hasMore } = getPreviewText(description);

  return (
    <div className="max-w-sm bg-custom-gradient border border-cyan-950 rounded-lg shadow">
      <a href="#">
        <img className="rounded-t-lg" src={imgSrc} alt={title} />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-light text-white">
            {title}
          </h5>
        </a>

        <p className="text-white">{isOpen ? description : preview}</p>

        {hasMore && (
          <div className="flex justify-center animate-pulse">
            <button
              onClick={toggleAccordion}
              className="text-white bg-teal-700 mt-2 hover:bg-cyan-950 focus:outline-none font-medium rounded-full text-sm p-2 text-center inline-flex items-center justify-center"
              style={{ width: "40px", height: "40px" }}
            >
              {isOpen ? <FaMinus /> : <FaPlus />}
            </button>
          </div>
        )}

        <div
          ref={contentRef}
          style={{
            maxHeight: isOpen ? `${contentRef.current.scrollHeight}px` : "0px",
            overflow: "hidden",
            transition: "max-height 0.5s ease-in-out",
          }}
          className="mt-4 text-white"
        >
          {isOpen && <p>{description}</p>}
        </div>
      </div>
    </div>
  );
};

export default Card;
