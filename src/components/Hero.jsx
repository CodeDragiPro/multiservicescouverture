import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import car1 from "../assets/car1.jpg";
import car2 from "../assets/car2.jpg";
import car3 from "../assets/car3.jpg";

const Hero = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <section className="relative text-white py-16">
      <div className="relative">
        <Slider {...settings}>
          <div className="relative">
            <img
              src={car1}
              alt="Image 1"
              className="w-full h-96 object-cover"
            />
            <div className="absolute inset-0 bg-black opacity-60"></div>
          </div>
          <div className="relative">
            <img
              src={car2}
              alt="Image 2"
              className="w-full h-96 object-cover"
            />
            <div className="absolute inset-0 bg-black opacity-60"></div>
          </div>
          <div className="relative">
            <img
              src={car3}
              alt="Image 3"
              className="w-full h-96 object-cover"
            />
            <div className="absolute inset-0 bg-black opacity-60"></div>
          </div>
        </Slider>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="md:text-4xl text-2xl font-bold z-10 text-center px-4 uppercase">
            Construisons Ensemble la Toiture de vos Rèves
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;
