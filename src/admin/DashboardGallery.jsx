import React, { useState, useEffect } from 'react';
import { ref, listAll, deleteObject, getDownloadURL } from 'firebase/storage';
import { storage } from '../firebaseConfig';
import { FaTrashAlt } from 'react-icons/fa';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ITEMS_PER_PAGE = 10;

const DashboardGallery = ({ refreshGallery }) => {
  const [photos, setPhotos] = useState([]);
  const [selectedPhotos, setSelectedPhotos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetchPhotos();
  }, [refreshGallery]);

  const fetchPhotos = async () => {
    const photosRef = ref(storage, 'gallery/');
    const res = await listAll(photosRef);
    const urls = await Promise.all(
      res.items.map(async (itemRef) => {
        const url = await getDownloadURL(itemRef);
        return { url, fullPath: itemRef.fullPath };
      })
    );
    setPhotos(urls);
  };

  const handleCheckboxChange = (e, photoUrl) => {
    if (e.target.checked) {
      setSelectedPhotos((prev) => [...prev, photoUrl]);
    } else {
      setSelectedPhotos((prev) => prev.filter((photo) => photo !== photoUrl));
    }
  };

  const handleDelete = async () => {
    try {
      for (const photoUrl of selectedPhotos) {
        const photoRef = ref(storage, photoUrl);
        await deleteObject(photoRef);
      }

      await fetchPhotos();
      toast.success('Photos supprimées avec succès !');
      setSelectedPhotos([]);
    } catch (error) {
      console.error('Erreur lors de la suppression:', error);
      toast.error('Erreur lors de la suppression des photos.');
    }
  };

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const paginatedPhotos = photos.slice(startIndex, endIndex);

  const totalPages = Math.ceil(photos.length / ITEMS_PER_PAGE);

  return (
    <div className="container mx-auto">
      <h2 className="text-xl font-bold mb-6 text-start text-teal-700">Gallerie</h2>

      {/* Afficher la section de suppression seulement si des photos sont sélectionnées */}
      {selectedPhotos.length > 0 && (
        <div className="flex justify-between items-center mb-6">
          <button
            onClick={handleDelete}
            className="flex items-center bg-red-600 text-white py-2 px-4 rounded-lg shadow-md hover:bg-red-700 transition duration-300"
          >
            <FaTrashAlt className="mr-2" />
            Supprimer Sélectionnés
          </button>
          <span className="text-gray-600">{selectedPhotos.length} photo(s) sélectionnée(s)</span>
        </div>
      )}

      {/* Affichage des photos */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mb-6">
        {paginatedPhotos.map(({ url, fullPath }) => (
          <div key={fullPath} className="relative group">
            <img
              className={`w-full h-[200px] object-cover rounded-lg border ${
                selectedPhotos.includes(fullPath)
                  ? 'border-teal-600 shadow-lg'
                  : 'border-gray-200 shadow-md'
              } transition-transform duration-300 group-hover:scale-105`}
              src={url}
              alt={`Projet ${fullPath}`}
            />
            <input
              type="checkbox"
              onChange={(e) => handleCheckboxChange(e, fullPath)}
              checked={selectedPhotos.includes(fullPath)}
              className="absolute top-2 right-2 w-6 h-6 bg-white border border-gray-300 rounded-full checked:bg-teal-600 transition duration-300"
            />
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center space-x-2 mb-6">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="bg-gray-300 text-gray-700 py-2 px-4 rounded-lg shadow-md hover:bg-gray-400 transition duration-300 disabled:opacity-50"
        >
          Précédent
        </button>
        <span className="flex items-center text-gray-800">{currentPage} / {totalPages}</span>
        <button
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="bg-teal-700 text-white py-2 px-4 rounded-lg shadow-md hover:bg-gray-400 transition duration-300 disabled:opacity-50"
        >
          Suivant
        </button>
      </div>
    </div>
  );
};

export default DashboardGallery;
