import React from 'react';

import projet1 from '../assets/gallery/projet1.jpg';
import projet2 from '../assets/gallery/projet2.jpg';
import projet3 from '../assets/gallery/projet3.jpg';
import projet4 from '../assets/gallery/projet4.jpg';
import projet5 from '../assets/gallery/projet5.jpg';
import projet6 from '../assets/gallery/projet6.jpg';
import projet7 from '../assets/gallery/projet7.jpg';
import projet8 from '../assets/gallery/projet8.jpg';
import projet9 from '../assets/gallery/projet9.jpg';
import projet10 from '../assets/gallery/projet10.jpg';
import projet11 from '../assets/gallery/projet11.jpg';
import projet12 from '../assets/gallery/projet12.jpg';

const OurProjects = () => {
  return (
    <div className='flex flex-col items-center justify-center bg-custom-gradient py-4'>
      <h1 className="font-bold uppercase text-2xl text-white mb-8">Nos Projets</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
        
        <div className="grid gap-4">
          <div>
            <img className="h-auto max-w-full rounded-lg" src={projet1} alt="Projet 1" />
          </div>
          <div>
            <img className="h-auto max-w-full rounded-lg" src={projet2} alt="Projet 2" />
          </div>
          <div>
            <img className="h-auto max-w-full rounded-lg" src={projet3} alt="Projet 3" />
          </div>
        </div>
        
        <div className="grid gap-4">
          <div>
            <img className="h-auto max-w-full rounded-lg" src={projet4} alt="Projet 4" />
          </div>
          <div>
            <img className="h-auto max-w-full rounded-lg" src={projet5} alt="Projet 5" />
          </div>
          <div>
            <img className="h-auto max-w-full rounded-lg" src={projet6} alt="Projet 6" />
          </div>
        </div>
        
        <div className="grid gap-4">
          <div>
            <img className="h-auto max-w-full rounded-lg" src={projet7} alt="Projet 7" />
          </div>
          <div>
            <img className="h-auto max-w-full rounded-lg" src={projet8} alt="Projet 8" />
          </div>
          <div>
            <img className="h-auto max-w-full rounded-lg" src={projet9} alt="Projet 9" />
          </div>
        </div>
        
        <div className="grid gap-4">
          <div>
            <img className="h-auto max-w-full rounded-lg" src={projet10} alt="Projet 10" />
          </div>
          <div>
            <img className="h-auto max-w-full rounded-lg" src={projet11} alt="Projet 11" />
          </div>
          <div>
            <img className="h-auto max-w-full rounded-lg" src={projet12} alt="Projet 12" />
          </div>
        </div>

      </div>
    </div>
  );
};

export default OurProjects;