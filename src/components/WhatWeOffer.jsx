import React from 'react';
import Card from '../components/card'
import goute from '../assets/goutedeau.svg'
import toit from '../assets/toit.svg'
import gouttiere from '../assets/gouttiere.svg'
import velux from '../assets/velux.svg'
import resine from '../assets/resine.svg'
import Button from './Button';

// Définir un tableau de données pour les cartes
const cardData = [
  
  { id: 1, imgSrc: goute, alt: 'Service 1' , title: 'Démoussage de toit', description: 'karcher haute pression ou application de produits selon le support '  },
  { id: 2, imgSrc: toit, alt: 'Service 2', title: 'Couverture complète', description: ' Couverture complète ( ardoises , tuiles et tôles ) ' },
  { id: 3, imgSrc: gouttiere, alt: 'Service 3' , title: 'Pose et dépose de gouttières', description: 'Pose et dépose de gouttières ( Zinc , pvc et Alu ) ' },
  { id: 4, imgSrc: velux, alt: 'Service 4' , title: 'Changement ou création de velux', description: 'Changement ou création de velux avec ou sans stores manuel ou roulants' },
  { id: 5, imgSrc: resine, alt: 'Service 4' , title: 'Pose de résine de toit', description: ' Pose de résine de toit est un copolymère 100% acrylique et pigments sélectionnés' },
  { id: 6, imgSrc: resine, alt: 'Service 4' , title: 'Pose de bardage', description: ' Pose de bardage extérieur ( Bois et PVC )' },
];

const WhatWeOffer = () => {
  return (
    <div className='flex flex-col items-center justify-center py-4'>
      <h1 className='text-2xl font-bold uppercase mb-8 text-secondary'>Ce que nous proposons</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8'>
        {cardData.map(card => (
          <Card key={card.id} imgSrc={card.imgSrc} alt={card.alt} title={card.title} description={card.description}/>
        ))}
      </div>
      <div className='mt-8'>
      <Button name='en savoir plus sur les services'/>
      </div>
     
    </div>
  );
};

export default WhatWeOffer;