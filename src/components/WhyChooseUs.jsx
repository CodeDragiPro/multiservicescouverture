import React from 'react';
import CardChooseUs from './CardChooseUs';
import bricks from '../assets/bricks.svg';
import hammer from '../assets/marteau.svg';
import star from '../assets/star.svg';

const whyChooseUsData = [
  {
    id: 1,
    icon: hammer,
    title: "Expertise",
    description: "Years of experience and deep industry knowledge."
  },
  {
    id: 2,
    icon: bricks,
    title: "Quality",
    description: "Commitment to using the best materials and practices."
  },
  {
    id: 3,
    icon: star,
    title: "Integrity",
    description: "Honesty and transparency in every project we undertake."
  },
];

const WhyChooseUs = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4 text-teal-700 text-center">Pourquoi nous choisir ?</h1>
      <div className="space-y-4 md:flex items-center justify-center">
        {whyChooseUsData.map((item) => (
          <CardChooseUs 
            key={item.id}
            icon={item.icon} 
            title={item.title} 
            description={item.description} 
          />
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;
