import React from 'react';
import Card from '../components/card'
import demoussage from '../assets/demoussagedetoit.jpg'
import couverturecomplete from '../assets/couverturecomplete.jpg'
import posedeposedegouttieres from '../assets/posedeposegouttiere.jpg'
import resinedetoit from '../assets/resinedetoit.jpg'
import bardage from'../assets/bardage.jpg'

const cardData = [
  { id: 1, imgSrc: demoussage, alt: 'demoussage' , title: 'Démoussage de toit', description: 'karcher haute pression ou application de produits selon le support'  },
  { id: 2, imgSrc: couverturecomplete, alt: 'couverture complete' , title: 'couverture complete', description: 'Couverture complète ( ardoises , tuiles et tôles )'  },
  { id: 3, imgSrc: posedeposedegouttieres, alt: 'pose et depose de gouttières' , title: 'pose et depose de gouttières', description: 'Pose et dépose de gouttières ( Zinc , pvc et Alu )'  },
  { id: 4, imgSrc: 'https://via.placeholder.com/1440x960?text=a venir', alt: 'changement ou création de vélux' , title: 'changement ou création de vélux', description: 'Changement ou création de velux avec ou sans stores manuel ou roulants électrique ou solaire ( aluminium ou pvc )'  },
  { id: 5, imgSrc: resinedetoit , alt: 'pose de résine de toit' , title: 'pose de resine de toit', description: 'Pose de résine de toit est un copolymère 100% acrylique et pigments sélectionnés présentant une finition veloutée de haute qualité asssurant un haut niveau de couvrant avec une grande facilité dapplication Elle résiste aux intempéries et à la lumière solaire.Propriété anti flash rusting pas de remontée de rouille à travers le film des crochets dattache) Finition sur tuile, ardoise fibrociment de toiture en état neuf ou en entretien.'  },
  { id: 6, imgSrc: bardage, alt: 'pose de bardage' , title: 'pose de bardage', description: 'Pose de bardage extérieur ( Bois et PVC ) '  },
  { id: 7, imgSrc: 'https://via.placeholder.com/1440x960?text=a venir', alt: 'nettoyage de gouttières' , title: 'nettoyage de gouttières', description: 'Changement ou création de velux avec ou sans stores manuel ou roulants électrique ou solaire ( aluminium ou pvc )'  },
];

const WhatWeOffer = () => {
  return (
    <div className='flex flex-col items-center justify-center py-4'>
      <h1 className='text-2xl font-bold uppercase mb-8 text-teal-700'>Ce que nous proposons</h1>
      <div className='flex flex-wrap justify-center gap-8 p-4'>
      {cardData.map((card, index) => (
        <Card
          key={index}
          {...card} 
        />
      ))}
      </div>
      <div className='mt-8'>
      </div>
    </div>
  );
};

export default WhatWeOffer;