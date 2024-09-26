import React, { useState, useEffect } from 'react';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'; // Firebase functions
import { storage } from '../firebaseConfig'; // Firebase config
import DashboardTestimonials from './DashboardTestimonials';
import DashboardGallery from './DashboardGallery';
import { toast } from 'react-toastify'; // Import Toastify
import 'react-toastify/dist/ReactToastify.css'; // Toastify styles

const Dashboard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // State to manage modal visibility
  const [file, setFile] = useState(null); // State to manage selected file
  const [uploading, setUploading] = useState(false); // State to manage upload status
  const [error, setError] = useState(null); // State to manage error
  const [refreshGallery, setRefreshGallery] = useState(false); // State to trigger gallery refresh

  const [currentDate, setCurrentDate] = useState('');
  const [currentTime, setCurrentTime] = useState('');

  // Function to get current date
  const getCurrentDate = () => {
    const date = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('fr-FR', options);
  };

  // Function to get current time
  const getCurrentTime = () => {
    const date = new Date();
    return date.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' });
  };

  useEffect(() => {
    setCurrentDate(getCurrentDate());
    const timeInterval = setInterval(() => {
      setCurrentTime(getCurrentTime());
    }, 1000); // Update time every second

    return () => clearInterval(timeInterval); // Cleanup on unmount
  }, []);

  // Handle file change event
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) {
      setError('Veuillez sélectionner un fichier avant de télécharger.');
      return;
    }

    setUploading(true);
    setError(null);

    const storageRef = ref(storage, `gallery/${file.name}`);
    try {
      await uploadBytes(storageRef, file);
      const downloadURL = await getDownloadURL(storageRef);
      toast.success("L'image a été téléchargée avec succès!", { autoClose: 3000 });

      // Rafraîchir la galerie et fermer la modale après succès
      setRefreshGallery((prev) => !prev);
      setFile(null); // Réinitialiser l'état du fichier
      setIsModalOpen(false); // Fermer la modale
    } catch (error) {
      setError("Erreur lors du téléchargement de l'image.");
      toast.error("Erreur lors du téléchargement de l'image.", { autoClose: 3000 });
      console.error("Error during upload:", error); // Afficher l'erreur dans la console
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">

      <h1 className="text-4xl font-bold text-orange-400 text-center py-4">Administration</h1>

      {/* Dashboard Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Date Block */}
        <div className="bg-white p-6 rounded-lg shadow-xl border-2 border-gray-200">
          <p className="text-teal-700 font-bold text-4xl text-center">{currentDate}</p>
          <p className="text-teal-700 font-bold text-4xl text-center">{currentTime}</p>
        </div>

        {/* Button to Add Photo */}
        <div className="bg-white p-6 rounded-lg shadow-xl border-2 border-gray-200 flex items-center justify-center">
          <button
            className="bg-orange-400 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded-lg"
            onClick={() => setIsModalOpen(true)} // Ouvre la modale au clic
          >
            Ajouter une photo
          </button>
        </div>
      </div>

            {/* Testimonials and Gallery */}
            <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-xl border-2 border-gray-200">
          <DashboardTestimonials />
        </div>

        <div className="bg-white p-6 rounded-lg shadow-xl border-2 border-gray-200">
          <DashboardGallery refreshGallery={refreshGallery} />
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
            <h3 className="text-lg font-semibold mb-4">Ajouter une Photo</h3>

            <input
              type="file"
              onChange={handleFileChange}
              className="mb-4 w-full p-2 border border-gray-300 rounded-lg"
            />

            {error && <p className="text-red-500 mb-4">{error}</p>}

            <div className="flex justify-end space-x-2">
              <button
                onClick={handleUpload}
                className={`bg-teal-700 text-white py-2 px-4 rounded-lg shadow-md transition duration-300 ${
                  uploading ? 'opacity-50 cursor-not-allowed' : ''
                }`}
                disabled={uploading}
              >
                {uploading ? 'Téléchargement...' : 'Télécharger'}
              </button>
              <button
                onClick={() => setIsModalOpen(false)}
                className="bg-gray-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-gray-600 transition duration-300"
              >
                Annuler
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;