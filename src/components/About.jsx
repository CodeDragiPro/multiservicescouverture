import React from "react";
import aboutpic from "../assets/about.jpg";
import Carousel from "./carousel";


const About = () => {
  return (
    <div className="bg-white py-10 md:px-12 px-4 font-sans text-white text-center" id="about">
      <div className="bg-custom-gradient w-full md:flex justify-between relative">
        <div className="md:w-1/2 relative">
          <img src={aboutpic} className="h-[27em] w-full object-cover" alt="About" />
        </div>
        <div className="md:w-1/2 p-4">
          <h1 className="font-bold uppercase text-2xl">À propos de nous</h1>
          <p className="pt-2">
            L’entreprise Multiservices située à Lindebeuf vous propose ses
            services avec devis gratuit (hors devis assurance, tarifs selon la
            distance).
          </p>
          <Carousel />
          <div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;