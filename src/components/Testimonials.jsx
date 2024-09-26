import React, { useState, useEffect } from "react";
import TestimonialsCard from "./TestimonialsCard";
import { db } from "../firebaseConfig"; // Import Firebase
import { collection, addDoc, getDocs } from "firebase/firestore";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [testimonials, setTestimonials] = useState([]);
  const [newTestimonial, setNewTestimonial] = useState({
    name: "",
    comment: "",
    rating: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials]);

  // Load testimonials from Firebase
  useEffect(() => {
    const fetchTestimonials = async () => {
      const querySnapshot = await getDocs(collection(db, "testimonials"));
      const testimonialsList = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setTestimonials(testimonialsList);
    };

    fetchTestimonials();
  }, []);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (newTestimonial.rating < 3) {
      // Toast pour une note inférieure à 3 (soumis mais pas publié)
      toast.success("Commentaire soumis");
  
      // Réinitialiser le formulaire et fermer le modal
      setShowModal(false);
      setNewTestimonial({ name: "", comment: "", rating: 0 });
    } else {
      try {
        // Si la note est >= 3, envoyer à Firebase
        await addDoc(collection(db, "testimonials"), newTestimonial);
  
        // Ajouter le témoignage à la liste locale
        setTestimonials([...testimonials, newTestimonial]);
  
        // Toast pour une note de 3 ou plus (soumis et publié)
        toast.success("Témoignage soumis et publié avec succès!");
  
        // Réinitialiser le formulaire et fermer le modal
        setShowModal(false);
        setNewTestimonial({ name: "", comment: "", rating: 0 });
      } catch (error) {
        console.error("Erreur lors de l'ajout du témoignage: ", error);
        toast.error("Erreur lors de l'ajout du témoignage.");
      }
    }
  };
  
  

  return (
    <div className="py-4 flex-col" id="temoignages">
      <h1 className="font-bold uppercase text-2xl text-teal-700 text-center mb-8">
        Témoignages
      </h1>
      <div className="flex items-center justify-center">
        {testimonials.length > 0 && (
          <TestimonialsCard
            image={testimonials[currentIndex].image}
            comment={testimonials[currentIndex].comment}
            rating={testimonials[currentIndex].rating}
            name={testimonials[currentIndex].name}
            currentIndex={currentIndex}
            handleDotClick={handleDotClick}
            totalTestimonials={testimonials.length}
          />
        )}
      </div>
      <div className="flex items-center justify-center">
        <button
          className="mt-8 bg-teal-700 text-white py-2 px-4 rounded"
          onClick={() => setShowModal(true)}
        >
          Ajouter un témoignage
        </button>
      </div>

      {showModal && (
        <div className="fixed inset-0 z-40 bg-gray-900 bg-opacity-80 flex justify-center items-center">
          <div className="bg-white p-6 rounded shadow-lg">
            <h2 className="text-xl font-bold mb-4">Ajouter un témoignage</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Nom
                </label>
                <input
                  type="text"
                  className="mt-1 p-2 border w-full"
                  value={newTestimonial.name}
                  onChange={(e) =>
                    setNewTestimonial({
                      ...newTestimonial,
                      name: e.target.value,
                    })
                  }
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Commentaire
                </label>
                <textarea
                  className="mt-1 p-2 border w-full"
                  value={newTestimonial.comment}
                  onChange={(e) =>
                    setNewTestimonial({
                      ...newTestimonial,
                      comment: e.target.value,
                    })
                  }
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Note
                </label>
                <input
                  type="number"
                  className="mt-1 p-2 border w-full"
                  value={newTestimonial.rating}
                  onChange={(e) =>
                    setNewTestimonial({
                      ...newTestimonial,
                      rating: Number(e.target.value),
                    })
                  }
                  min="1"
                  max="5"
                  required
                />
              </div>

              <div className="flex justify-end">
                <button
                  type="button"
                  className="mr-4 bg-gray-500 text-white py-2 px-4 rounded"
                  onClick={() => setShowModal(false)}
                >
                  Annuler
                </button>
                <button
                  type="submit"
                  className="bg-teal-700 text-white py-2 px-4 rounded"
                >
                  Soumettre
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Testimonials;
