import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaFacebook, FaGoogle } from 'react-icons/fa';
import { MdAdminPanelSettings } from 'react-icons/md';
import Button from '../components/Button';

const Footer = () => {
  const location = useLocation();

  const shouldDisplayFooter = !location.pathname.startsWith('/dashboard');

  if (!shouldDisplayFooter) {
    return null;
  }

  return (
    <footer className="bg-gray-900 text-gray-100 py-8">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between md:items-start space-y-8 md:space-y-0">
        
        {/* Menu Section */}
        <div className="flex flex-col  md:items-start space-y-4 md:space-y-6">
          <h2 className="text-sm font-semibold text-gray-400 uppercase">Menu</h2>
          <ul className="flex flex-col space-y-3">
            <li>
              <a href="#about" className="hover:underline">A Propos</a>
            </li>
            <li>
              <a href="#cequenousproposons" className="hover:underline">Ce Que Nous Proposons</a>
            </li>
            <li>
              <a href="#commentcamarche" className="hover:underline">Comment Ça Marche</a>
            </li>
            <li>
              <a href="#gallery" className="hover:underline">Gallerie</a>
            </li>
            <li>
              <a href="#temoignages" className="hover:underline">Temoignages</a>
            </li>
            <li>
              <a href="#contact" className="hover:underline">Contact</a>
            </li>
          </ul>
        </div>

        {/* Info Section */}
        <div className="flex flex-col  md:items-start space-y-4 md:space-y-6">
          <h2 className="text-sm font-semibold text-gray-400 uppercase">Infos</h2>
          <ul className="space-y-3">
            <li>
              <span className="text-gray-200">276 Rue du Mesnil Adde 76760 Lindebeuf</span>
            </li>
            <li className='items-center md:justify-start pt-2 flex'>
              <a href="tel:+33698653095" className="hover:underline">
                <Button name="06.98.65.30.95" animation="animate-bounce" />
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div className="flex flex-col items-center md:items-start space-y-4 md:space-y-6">
          <h2 className="text-sm font-semibold text-gray-400 uppercase">Suivez-nous</h2>
          <div className="flex space-x-4">
            <a href="https://www.facebook.com/profile.php?id=61551836638976" className="text-gray-400 hover:text-gray-100">
              <FaFacebook className="w-6 h-6" aria-hidden="true" />
              <span className="sr-only">Facebook</span>
            </a>
            <a href="https://www.google.com/search?client=safari&rls=en&q=mutltiservices+couverture+Yvetot+76&ie=UTF-8&oe=UTF-8" className="text-gray-400 hover:text-gray-100">
              <FaGoogle className="w-6 h-6" aria-hidden="true" />
              <span className="sr-only">Google</span>
            </a>
            <a href="/dashboard" className="text-gray-400 hover:text-gray-100">
              <MdAdminPanelSettings className="w-7 h-7 text-orange-400" aria-hidden="true" />
              <span className="sr-only">Admin</span>
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom: Copyright */}
      <div className="mt-8 border-t border-gray-800 pt-6 text-center">
        <span className="text-sm text-orange-400">
          © 2024 <a href="https://www.codedragi.fr/" className="hover:underline">Codedragi™</a>. Tous droits réservés.
        </span>
      </div>
    </footer>
  );
};

export default Footer;