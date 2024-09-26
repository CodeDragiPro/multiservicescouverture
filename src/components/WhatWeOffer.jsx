import React from 'react';
import Card from '../components/card';
import cardData from '../utils/cardDara.json'; 

import demoussage from '../assets/demoussagedetoit.jpg';
import couverturecomplete from '../assets/couverturecomplete.jpg';
import posedeposedegouttieres from '../assets/posedeposegouttiere.jpg';
import resinedetoit from '../assets/resinedetoit.jpg';
import bardage from '../assets/bardage.jpg';
import velux from '../assets/velux.jpg';
import gouttieres from '../assets/gouttieres.jpg';

const images = {
  demoussagedetoit: demoussage,
  couverturecomplete: couverturecomplete,
  posedeposegouttiere: posedeposedegouttieres,
  resinedetoit: resinedetoit,
  bardage: bardage,
  velux: velux,
  gouttieres: gouttieres
};

const WhatWeOffer = () => {
  return (
    <div className='flex flex-col items-center justify-center py-4' id='cequenousproposons'>
      <h1 className='text-2xl font-bold uppercase mb-8 text-teal-700'>Ce que nous proposons</h1>
      <div className='flex flex-wrap justify-center gap-8 p-4'>
        {cardData.map((card) => (
          <Card
            key={card.id}
            imgSrc={images[card.imgSrc.replace('.jpg', '')] || card.imgSrc}
            title={card.title}
            description={card.description}
            steps={card.steps}
          />
        ))}
      </div>
      <div className='mt-8'>
      </div>
    </div>
  );
};

export default WhatWeOffer;
