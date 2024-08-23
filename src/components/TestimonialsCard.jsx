import React from 'react';
import { FaStar, FaRegStar } from 'react-icons/fa';
import { motion } from 'framer-motion';

const TestimonialsCard = ({ image, comment, rating, name, currentIndex, handleDotClick, totalTestimonials }) => {
  return (
    <div className="relative flex items-center justify-center mx-4 md:mx-auto py-6">
      <motion.div 
        className="bg-custom-gradient p-4 rounded-lg flex items-center justify-start w-full" 
        style={{ maxWidth: '450px', minWidth: '300px' }}
        key={currentIndex}  // Utilisation de currentIndex pour déclencher l'animation lors du changement
        initial={{ opacity: 0, x: 800 }}  // Point de départ hors de l'écran à droite
        animate={{ opacity: 1, x: 0 }}    // Animation vers le centre
        exit={{ opacity: 0, x: -300 }}     // Sortie vers la gauche
        transition={{ duration: 0.6 }}     // Durée de l'animation
      >
        <img 
          src={image} 
          alt={name} 
          className="w-32 h-48 object-cover rounded-lg -mt-24 mr-4 border border-white"
        />
        <div className="ml-4 flex flex-col justify-center py-6">
          <h2 className="text-white text-lg font-bold">{name}</h2>
          <p className="text-sm mb-2 text-gray-400">"{comment}"</p>
          <div className="flex text-orange-400 text-xl">
            {Array(rating).fill('').map((_, i) => (
              <FaStar key={i} />
            ))}
            {Array(5 - rating).fill('').map((_, i) => (
              <FaRegStar key={i} />
            ))}
          </div>
        </div>
      </motion.div>

      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex justify-center">
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
