import React from 'react';
import { FaStar, FaRegStar } from 'react-icons/fa';
import { motion } from 'framer-motion';

const TestimonialsCard = ({ comment, rating, name, currentIndex, handleDotClick, totalTestimonials }) => {
  return (
    <div className="relative flex items-center justify-center mx-4 md:mx-auto py-6" style={{ overflow: 'hidden', height: 'auto', width: '100%' }}>
    <motion.div 
      className="bg-custom-gradient p-4 rounded-lg flex flex-col items-start justify-center w-full shadow-lg" 
      style={{ maxWidth: '350px', minWidth: '250px', height: '100%' }}
      key={currentIndex}  
      initial={{ opacity: 0, x: 800 }}  
      animate={{ opacity: 1, x: 0 }}    
      exit={{ opacity: 0, x: -300 }}    
      transition={{ duration: 0.6 }}     
    >
        <div className="flex flex-col justify-center text-center w-full">
          <h2 className="text-white text-lg font-bold">{name}</h2>
          <p className="text-sm mb-2 text-gray-400 italic">" {comment} "</p>
          <div className="flex text-orange-400 text-xl justify-center">
            {/* Affichage des étoiles */}
            {Array(rating).fill('').map((_, i) => (
              <FaStar key={i} />
            ))}
            {Array(5 - rating).fill('').map((_, i) => (
              <FaRegStar key={i} />
            ))}
          </div>
        </div>
      </motion.div>

      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex justify-center">
        {Array(totalTestimonials).fill('').map((_, i) => (
          <span 
            key={i} 
            onClick={() => handleDotClick(i)}
            className={`w-2 h-2 rounded-full mx-1 cursor-pointer ${i === currentIndex ? 'bg-gray-300' : 'bg-cyan-950'}`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default TestimonialsCard;