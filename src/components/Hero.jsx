import React, { useState, useEffect } from "react";
import car1 from "../assets/car1.jpg";
import car2 from "../assets/car2.jpg";
import car3 from "../assets/car3.jpg";

const images = [car1, car2, car3]; 

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);

  
  useEffect(() => {
    if (!isAutoplay) return;
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoplay]);

 
  const offset = -currentIndex * 100;

  return (
    <section className="relative text-white w-full overflow-hidden">
      <div className="relative w-full overflow-hidden">
        <div
          className="flex transition-transform duration-1000 ease-in-out"
          style={{ transform: `translateX(${offset}%)` }}
        >
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Image ${index + 1}`}
              className="w-full h-96 object-cover flex-shrink-0"
            />
          ))}
        </div>
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="md:text-4xl text-2xl font-bold z-20 text-center px-4 uppercase">
            Construisons Ensemble la Toiture de vos Rêves
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;