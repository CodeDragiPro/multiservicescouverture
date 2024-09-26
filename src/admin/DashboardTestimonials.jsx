import React, { useEffect, useState } from 'react';
import { collection, getDocs, doc, deleteDoc } from 'firebase/firestore';
import { db } from '../firebaseConfig'; // Assurez-vous que le chemin est correct
import { FaTrashAlt, FaStar, FaRegStar } from 'react-icons/fa';

const DashboardTestimonials = () => {
  const [comments, setComments] = useState([]);
  const [selectedComments, setSelectedComments] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const commentsPerPage = 5;

  useEffect(() => {
    const fetchComments = async () => {
      const commentsCollection = collection(db, 'testimonials');
      const commentsSnapshot = await getDocs(commentsCollection);
      const commentsList = commentsSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setComments(commentsList);
    };

    fetchComments();
  }, []);

  const handleCheckboxChange = (id) => {
    setSelectedComments(prevSelected => {
      if (prevSelected.includes(id)) {
        return prevSelected.filter(commentId => commentId !== id);
      } else {
        return [...prevSelected, id];
      }
    });
  };

  const handleDeleteSelected = async () => {
    const promises = selectedComments.map(async (id) => {
      const commentDoc = doc(db, 'testimonials', id);
      await deleteDoc(commentDoc);
    });

    await Promise.all(promises);
    setComments(comments.filter(comment => !selectedComments.includes(comment.id)));
    setSelectedComments([]);
  };

  const renderStars = (rating) => {
    return (
      <div className="flex text-yellow-500">
        {Array(rating).fill('').map((_, i) => (
          <FaStar key={i} />
        ))}
        {Array(5 - rating).fill('').map((_, i) => (
          <FaRegStar key={i} />
        ))}
      </div>
    );
  };

  const indexOfLastComment = currentPage * commentsPerPage;
  const indexOfFirstComment = indexOfLastComment - commentsPerPage;
  const currentComments = comments.slice(indexOfFirstComment, indexOfLastComment);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const totalPages = Math.ceil(comments.length / commentsPerPage);

  return (
    <div className='container mx-auto'>
      <h2 className="text-xl font-bold mb-6 text-start text-teal-700">Commentaires</h2>
      
      {selectedComments.length > 0 && (
        <div className="flex justify-end mb-4">
          <button 
            onClick={handleDeleteSelected} 
            className="bg-red-600 text-white px-4 py-2 rounded-lg flex items-center hover:bg-red-700"
          >
            <FaTrashAlt className="mr-2" /> Supprimer
          </button>
        </div>
      )}

      {/* Container avec défilement horizontal */}
      <div className="overflow-x-auto w-full">
        <table className="min-w-full">
          <thead>
            <tr className="text-gray-500 font-thin">
              <th className="py-3 text-left"></th>
              <th className="py-3 text-left">Commentaire</th>
              <th className="py-3 text-left">Nom</th>
              <th className="py-3 text-left">Note</th>
            </tr>
          </thead>
          <tbody>
            {currentComments.map((comment, index) => (
              <tr key={comment.id} className={`border-b hover:bg-gray-50 ${index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}`}>
                <td className="py-2 px-4">
                  <input
                    type="checkbox"
                    checked={selectedComments.includes(comment.id)}
                    onChange={() => handleCheckboxChange(comment.id)}
                    className="form-checkbox h-5 w-5 text-teal-600"
                  />
                </td>
                <td className="py-2 px-4">{comment.comment}</td>
                <td className="py-2 px-4">{comment.name}</td>
                <td className="py-2 px-4">{renderStars(comment.rating)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-between mt-4">
        <div className="text-gray-500">
           {comments.length} commentaires
        </div>
        <div className="flex space-x-2">
          {Array.from({ length: totalPages }, (_, index) => index + 1).map(pageNumber => (
            <button
              key={pageNumber}
              onClick={() => handlePageChange(pageNumber)}
              className={`px-4 py-2 border rounded-lg ${currentPage === pageNumber ? 'bg-teal-700 text-white' : 'bg-white text-teal-700'}`}
            >
              {pageNumber}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardTestimonials;
