import React, { useState } from 'react';
import car1 from '../assets/car1.jpg';
import car2 from '../assets/car2.jpg';
import car3 from '../assets/car3.jpg';


const cardData = [
  { id: 1, imgSrc: car1, alt: 'Card 1' },
  { id: 2, imgSrc: car2, alt: 'Card 2' },
  { id: 3, imgSrc: car3, alt: 'Card 3' },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsToShow = 3;
  const totalSlides = cardData.length;


  const goToSlide = (index) => {
    setCurrentIndex(index * itemsToShow);
  };

  const offset = -currentIndex * (100 / itemsToShow);

  const dots = [];
  for (let i = 0; i < Math.ceil(totalSlides / itemsToShow); i++) {
    dots.push(
      <button
        key={i}
        onClick={() => goToSlide(i)}
        className={`w-3 h-3 mx-1 rounded-full ${
          i === Math.floor(currentIndex / itemsToShow) ? 'bg-white' : 'bg-black'
        }`}
      />
    );
  }

  return (
    <div className='relative py-8 px-4'>
      <div className='relative overflow-hidden'>
        <div
          className='flex transition-transform duration-500 ease-in-out'
          style={{ transform: `translateX(${offset}%)` }}
        >
          {cardData.map((card) => (
            <div key={card.id} className='flex-shrink-0 w-1/3 p-4'>
              <div className='bg-white shadow-lg rounded-lg overflow-hidden'>
                <img
                  src={card.imgSrc}
                  alt={card.alt}
                  className='w-full  object-cover'
                />
              </div>
            </div>
          ))}
        </div>
        <div className='flex justify-center mt-4'>
          {dots}
        </div>
      </div>
    </div>
  );
};

export default Carousel;