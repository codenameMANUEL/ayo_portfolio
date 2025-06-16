import React, { useState } from "react";
import logo from './assets/davidayologo.png';
import { Menu, X } from 'lucide-react'; // If you don't have lucide-react: npm install lucide-react

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full md:pt-10 xl:pt-10">
      {/* Mobile Navbar */}
      <nav className="flex sm:hidden bg-white/10 backdrop-blur-md backdrop-saturate-150 border border-white/20 px-6 py-4 rounded-xl shadow-xl mx-4 mt-6 justify-between items-center">
        <a href="#">
          <img src={logo} alt="Logo" className="h-10 w-auto" />
        </a>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white focus:outline-none transition-transform duration-300"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="sm:hidden bg-white/10 backdrop-blur-md backdrop-saturate-150 border border-white/20 mx-4 py-4 flex flex-col items-center space-y-7">
          <a href="#" className=" hover:text-gray-400 transition-colors duration-300">About</a>
          <a href="#" className=" hover:text-gray-400 transition-colors duration-300">Resume</a>
          <a href="#" className=" hover:text-gray-400 transition-colors duration-300">Services</a>
          <a href="#" className=" hover:text-gray-400 transition-colors duration-300">Contact</a>
        </div>
      )}

      {/* Desktop Navbar */}
      <nav className="hidden sm:flex bg-gray-300 backdrop-blur-md backdrop-saturate-150 border border-white/20 px-8 py-4 rounded-xl gap-14 items-center shadow-xl w-fit md:w-[600px] lg:w-[700px] xl:w-[800px] mx-auto justify-center transition-all duration-500 hover:shadow-2xl hover:scale-105">
        <a href="#">
          <img src={logo} alt="Logo" className="h-12 w-auto transition-transform duration-300 hover:scale-110" />
        </a>
        <a href="#" className="hover:text-gray-400 transition-colors duration-300">About</a>
        <a href="#" className="hover:text-gray-400 transition-colors duration-300">Resume</a>
        <a href="#" className="hover:text-gray-400 transition-colors duration-300">Services</a>
        <a href="#" className="hover:text-gray-400 transition-colors duration-300">Contact</a>
      </nav>
    </div>
  );
};

export default Navbar;


