import React, { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logodamienv2.png';  

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const auth = getAuth();

    try {
      await signInWithEmailAndPassword(auth, email, password);
      sessionStorage.setItem('authToken', 'true');
      navigate('/dashboard');
    } catch (error) {
      setError('Connexion échouée. Veuillez vérifier vos identifiants.');
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100 ">
      <form className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md border-2 border-teal-700">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <img src={logo} alt="Logo" className="" />
        </div>
        
        {/* Titre du formulaire */}
        <h2 className="text-2xl font-bold text-teal-700 text-center mb-6">
          Connexion Admin
        </h2>

        {/* Message d'erreur */}
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        {/* Champ Email */}
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
          <input
            type="email"
            id="email"
            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-700"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        {/* Champ Mot de passe */}
        <div className="mb-6">
          <label htmlFor="password" className="block text-gray-700 font-medium mb-2">Mot de passe</label>
          <input
            type="password"
            id="password"
            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-700"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        {/* Bouton Se connecter */}
        <button
          type="submit"
          className="bg-teal-700 text-white font-bold py-3 px-4 rounded-lg w-full hover:bg-teal-800 transition-colors"
          onClick={handleLogin}
        >
          Se connecter
        </button>
      </form>
    </div>
  );
};

export default Login;