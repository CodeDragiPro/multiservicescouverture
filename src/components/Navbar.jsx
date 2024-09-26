import React, { useState } from "react";
import { FaAlignRight } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { Link, useLocation, useNavigate } from "react-router-dom"; // Import de useNavigate
import Button from "./Button";
import logo from "../assets/logoweb.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate(); // Initialisation de navigate

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  // Fonction pour gérer la déconnexion
  const handleLogout = () => {
    sessionStorage.removeItem("authToken");
    navigate("/login"); // Redirection vers la page de login après déconnexion
  };

  const isDashboardRoute = location.pathname.startsWith("/dashboard");

  return (
    <nav className="w-full top-0 left-0 z-40 text-white font-medium bg-gray-900">
      <div className="flex justify-between items-center px-4 py-4 max-w-screen-full mx-auto">
        <Link to="/">
          <div className="flex items-center">
            <img src={logo} className="md:w-15 w-12" alt="logo" />
            <h1 className="text-white px-4 font-medium uppercase">
              multiservicescouverture
            </h1>
          </div>
        </Link>

        <ul className="hidden md:flex space-x-6 text-m">
          {isDashboardRoute ? (
            <>
              {/* Wrapper pour aligner les boutons "Accueil" et "Déconnexion" */}
              <div className="flex space-x-6 items-center">
                <li>
                  <Link to="/" className="hover:text-secondary">
                    Accueil
                  </Link>
                </li>
                <li>
                  <button
                    className="bg-orange-400 hover:bg-white font-medium text-teal-700 py-2 px-4 rounded-lg"
                    onClick={handleLogout}
                  >
                    Déconnexion
                  </button>
                </li>
              </div>
            </>
          ) : (
            <>
              <li className="pt-2">
                <Link to="/" className="hover:text-secondary">
                  Accueil
                </Link>
              </li>
              <li className="pt-2">
                <Link
                  to="/"
                  onClick={(e) => handleScroll(e, "about")}
                  className="hover:text-secondary"
                >
                  À propos
                </Link>
              </li>
              <li className="pt-2">
                <Link
                  to="/"
                  onClick={(e) => handleScroll(e, "cequenousproposons")}
                  className="hover:text-secondary"
                >
                  Services
                </Link>
              </li>
              <li className="pt-2">
                <Link
                  to="/"
                  onClick={(e) => handleScroll(e, "gallery")}
                  className="hover:text-secondary"
                >
                  Galerie
                </Link>
              </li>
              <li>
                <Link to="/" onClick={(e) => handleScroll(e, "contact")}>
                  <Button name="Contact" animation="animate-pulse" />
                </Link>
              </li>
            </>
          )}
        </ul>

        <div className="md:hidden">
          <FaAlignRight onClick={toggleMenu} className="text-xl cursor-pointer" />
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="fixed inset-0 bg-black flex flex-col justify-center items-center z-40">
          <IoMdClose
            onClick={toggleMenu}
            className="absolute top-3 right-3 text-2xl text-white cursor-pointer"
          />
          <ul className="text-center space-y-8 text-white">
            {isDashboardRoute ? (
              <>
                <li>
                  <Link to="/" onClick={closeMenu} className="text-lg">
                    Accueil
                  </Link>
                </li>
                <li>
                <button
                    className="bg-orange-400 hover:bg-white font-medium text-teal-700 py-2 px-4 rounded-lg"
                    onClick={handleLogout}
                  >
                    Déconnexion
                  </button>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/" onClick={closeMenu} className="text-lg">
                    Accueil
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    onClick={(e) => {
                      handleScroll(e, "about");
                      closeMenu();
                    }}
                    className="text-lg"
                  >
                    À propos
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    onClick={(e) => {
                      handleScroll(e, "cequenousproposons");
                      closeMenu();
                    }}
                    className="text-lg"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    onClick={(e) => {
                      handleScroll(e, "gallery");
                      closeMenu();
                    }}
                    className="text-lg"
                  >
                    Galerie
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    onClick={(e) => {
                      handleScroll(e, "contact");
                      closeMenu();
                    }}
                  >
                    <Button name="Contact" animation="animate-pulse" />
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      )}
    </nav>
  );
};

const handleScroll = (e, targetId) => {
  e.preventDefault();
  const targetElement = document.getElementById(targetId);
  if (targetElement) {
    targetElement.scrollIntoView({ behavior: "smooth" });
  }
};

export default Navbar;
