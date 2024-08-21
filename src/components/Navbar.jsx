import React, { useState } from "react";
import { FaAlignRight } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import Button from "./Button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed w-full top-0 left-0 z-10 text-white uppercase text-m font-thin">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <div className="font-bold">Multiservices Couverture</div>
        <ul className="hidden md:flex space-x-6 text-m">
          <li>
            <a href="#" className="hover:text-secondary">
              accueil
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-secondary">
              a propos{" "}
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-secondary">
              services
            </a>
          </li>
          <li>
            <a href="#" className="">
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
        <div className="fixed inset-0 bg-black flex justify-center items-center z-20">
          <IoMdClose
            onClick={toggleMenu}
            className="absolute top-3 right-3 text-2xl cursor-pointer"
          />
          <ul className="text-center space-y-8">
            <li>
              <a href="#" className="">
                accueil
              </a>
            </li>
            <li>
              <a href="#" className="">
                a propos
              </a>
            </li>
            <li>
              <a href="#" className="">
                services
              </a>
            </li>
            <li>
              <a href="#" className="">
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
