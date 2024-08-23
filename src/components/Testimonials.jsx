import React, { useState, useEffect } from 'react';
import TestimonialsCard from './TestimonialsCard';

const testimonialsData = [
  {
    id: 1,
    image: 'https://img.freepik.com/photos-gratuite/avatar-androgyne-personne-queer-non-binaire_23-2151100226.jpg?t=st=1724398146~exp=1724401746~hmac=01c68d3f3d1891665ff093101cc41b1cd8fe273fa5dab8f5a39afcdea7d5f009&w=1380',
    comment: 'Excelent service , je recommande !',
    rating: 5,
    name: 'John Doe'
  },
  {
    id: 2,
    image: 'https://img.freepik.com/photos-gratuite/avatar-androgyne-personne-queer-non-binaire_23-2151100221.jpg?t=st=1724398170~exp=1724401770~hmac=c18ad8d0ab1cfcf666e08169930011b0a3aebbcd428faddcac476c5303df3d9d&w=1380',
    comment: 'Excelent service , je recommande !',
    rating: 4,
    name: 'Jane Smith'
  },
  {
    id: 3,
    image: 'https://img.freepik.com/photos-gratuite/avatar-androgyne-personne-queer-non-binaire_23-2151100205.jpg?t=st=1724398975~exp=1724402575~hmac=b2343a4400d55078695220648788367fa63a321ef8be2a8fde84db7c195230bc&w=1380',
    comment: 'Excelent service , je recommande !',
    rating: 3,
    name: 'Michael Brown'
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="py-4 flex-col">
      <h1 className="font-bold uppercase text-2xl text-teal-700 text-center mb-8">Témoignages</h1>
      <div className='flex items-center justify-center pt-20'>
      <TestimonialsCard
        image={testimonialsData[currentIndex].image}
        comment={testimonialsData[currentIndex].comment}
        rating={testimonialsData[currentIndex].rating}
        name={testimonialsData[currentIndex].name}
        currentIndex={currentIndex}
        handleDotClick={handleDotClick}
        totalTestimonials={testimonialsData.length}
      />
      </div>
    </div>
  );
};

export default Testimonials;
