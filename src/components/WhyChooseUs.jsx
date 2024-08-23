import React from 'react';
import CardChooseUs from './CardChooseUs';
import bricks from '../assets/bricks.svg';
import hammer from '../assets/marteau.svg';
import star from '../assets/star.svg';

const whyChooseUsData = [
  {
    id: 1,
    icon: hammer,
    title: "Expertise & Expérience",
    description: "Avec plusieurs années d’expérience, nous maîtrisons toutes les techniques de couverture, garantissant des travaux réalisés avec précision et expertise."
  },
  {
    id: 2,
    icon: bricks,
    title: "Qualité des Matériaux",
    description: "Nous utilisons uniquement des matériaux de haute qualité, assurant la durabilité et la résistance de votre toiture, quelles que soient les conditions climatiques."
  },
  {
    id: 3,
    icon: star,
    title: "Satisfaction Client",
    description: "La satisfaction de nos clients est notre priorité absolue. Nous nous engageons à fournir un service personnalisé, adapté à vos besoins, avec des résultats qui dépassent vos attentes."
  },
];

const WhyChooseUs = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4 text-teal-700 text-center uppercase">Pourquoi nous choisir ?</h1>
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
