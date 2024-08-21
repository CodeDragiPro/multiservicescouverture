import React, { useState } from "react";
import { FaAlignRight } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import Button from "./Button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed w-full top-0 left-0 z-40 text-white uppercase text-m font-light bg-custom-gradient">
      <div className="flex justify-between items-center px-4 py-2 max-w-screen-xl mx-auto">
        <div className="font-bold">Multiservices Couverture</div>
        <ul className="hidden md:flex space-x-6 text-m">
          <li>
            <a href="#" className="hover:text-secondary">
              accueil
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-secondary">
              a propos
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-secondary">
              services
            </a>
          </li>
          <li>
            <a href="#">
              <Button name="Contact" />
            </a>
          </li>
        </ul>
        <div className="md:hidden">
          <FaAlignRight
            onClick={toggleMenu}
            className="text-xl cursor-pointer"
          />
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
            <li>
              <a href="#" className="text-lg">
                accueil
              </a>
            </li>
            <li>
              <a href="#" className="text-lg">
                a propos
              </a>
            </li>
            <li>
              <a href="#" className="text-lg">
                services
              </a>
            </li>
            <li>
              <a href="#">
                <Button name="Contact" />
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;