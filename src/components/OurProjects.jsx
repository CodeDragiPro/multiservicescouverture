import React, { useState, useEffect } from 'react';
import { ref, listAll, getDownloadURL } from 'firebase/storage';
import { storage } from '../firebaseConfig'; // Assurez-vous que ce chemin est correct

const OurProjects = () => {
  const [images, setImages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const imagesPerPage = 12; // Nombre d'images à afficher par page

  useEffect(() => {
    const fetchImages = async () => {
      const photosRef = ref(storage, 'gallery/'); // Le chemin où vos images sont stockées dans Firebase Storage
      try {
        const res = await listAll(photosRef);
        const urls = await Promise.all(res.items.map(async (itemRef) => {
          const url = await getDownloadURL(itemRef);
          return url;
        }));
        setImages(urls);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchImages();
  }, []);

  // Calculer les images pour la page actuelle
  const indexOfLastImage = currentPage * imagesPerPage;
  const indexOfFirstImage = indexOfLastImage - imagesPerPage;
  const currentImages = images.slice(indexOfFirstImage, indexOfLastImage);

  // Fonction pour passer à la page suivante
  const nextPage = () => {
    if (currentPage < Math.ceil(images.length / imagesPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Fonction pour revenir à la page précédente
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className='flex flex-col items-center justify-center bg-teal-700 py-4' id='gallery'>
      <h1 className="font-bold uppercase text-2xl text-white mb-8">Nos Projets</h1>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 p-4">
        {currentImages.map((src, index) => (
          <div
            key={index}
            className="aspect-square overflow-hidden rounded-lg shadow-lg bg-white"
          >
            <img 
              className="w-full h-full object-cover"
              src={src} 
              alt={`Projet ${index + 1}`} 
            />
          </div>
        ))}
      </div>

      {/* Afficher la pagination uniquement si le nombre total d'images est supérieur à 12 */}
      {images.length > imagesPerPage && (
        <div className="flex justify-between items-center w-full max-w-md mt-4">
          <button 
            onClick={prevPage} 
            disabled={currentPage === 1} 
            className={`px-4 py-2 bg-white text-teal-700 rounded ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-teal-600'}`}
          >
            Précédent
          </button>
          {/* <span className="text-gray-700">Page {currentPage} sur {Math.ceil(images.length / imagesPerPage)}</span> */}
          <button 
            onClick={nextPage} 
            disabled={currentPage === Math.ceil(images.length / imagesPerPage)} 
            className={`px-4 py-2 bg-white text-teal-700 rounded ${currentPage === Math.ceil(images.length / imagesPerPage) ? 'opacity-50 cursor-not-allowed' : 'hover:bg-teal-600 '}`}
          >
            Suivant
          </button>
        </div>
      )}
    </div>
  );
};

export default OurProjects;