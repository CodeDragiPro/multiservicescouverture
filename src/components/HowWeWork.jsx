import React from "react";
import telephone from "../assets/telephone.svg";
import marteau from "../assets/marteau.svg";
import devis from "../assets/devis.svg";
import grue from "../assets/grue.svg";

const HowWeWork = () => {
  const steps = [
    { id: 1, icon: telephone, title: "Contactez nous" },
    { id: 2, icon: marteau, title: "Visite & Evaluation" },
    { id: 3, icon: devis, title: "Devis Personnalisé" },
    { id: 4, icon: grue, title: "Réalisation des Travaux" },
  ];
  

  return (
    <div className="bg-custom-gradient p-4" id="commentcamarche">
      <h1 className='text-2xl font-bold uppercase mb-8 text-white text-center'>Comment ça marche ?</h1>
      <div className="flex items-center justify-center">
      <ol className="relative text-gray-500 border-s border-gray-200 m-4">
        <li className="mb-10 ms-8">
          <span className="absolute flex items-center justify-center w-12 h-12 bg-teal-700 rounded-full -start-6 ring-2 ring-white">
            <img src={telephone} className="w-5" />
          </span>
          <h3 className="font-medium leading-tight text-white">Contactez-nous</h3>
          <p className="text-sm text-gray-400">Le début d'une belle aventure.</p>
        </li>

        <li className="mb-10 ms-8">
          <span className="absolute flex items-center justify-center w-12 h-12 bg-teal-700 rounded-full -start-6 ring-2 ring-white">
            <img src={marteau} className="w-5" />
          </span>
          <h3 className="font-medium leading-tight text-white">Visite & Evaluation</h3>
          <p className="text-sm text-gray-400">Les fondations de votre projet.</p>
        </li>

        <li className="mb-10 ms-8">
          <span className="absolute flex items-center justify-center w-12 h-12 bg-teal-700 rounded-full -start-6 ring-2 ring-white">
            <img src={devis} className="w-4" />
          </span>
          <h3 className="font-medium leading-tight text-white">Devis Personnalisé</h3>
          <p className="text-sm text-gray-400">Votre projet, votre budget.</p>
        </li>

        <li className="ms-8 mb-2">
          <span className="absolute flex items-center justify-center w-12 h-12 bg-teal-700 rounded-full -start-6 bottom-0 ring-2 ring-white">
            <img src={grue} className="w-5" />
          </span>
          <h3 className="font-medium leading-tight text-white">Réalisation des Travaux</h3>
          <p className="text-sm text-gray-400">Vos idées prennent vie.
          </p>
        </li>
      </ol>
      </div>
    </div>
  );
};

export default HowWeWork;
