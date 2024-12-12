"use client";
import { useState } from "react";
import Link from "next/link";
import SearchBar from "../components/searchBar";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header className="flex items-center justify-between px-8 py-4 bg-gradient-to-r from-p-olivine-500 via-p-olivine-700 to-p-olivine-950 text-white shadow-md">
     
      <div className="flex items-center space-x-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          className="h-10 w-10 text-p-olivine-50 hover:text-p-harvest-gold-200 transition-colors duration-300"
        >
          <g stroke="currentColor" strokeWidth="4">
            <path d="M 40,10 L 40,90 L 60,90 L 60,10 Z" fill="none" />
            <path d="M 10,40 L 90,40 L 90,60 L 10,60 Z" fill="none" />
          </g>
        </svg>

        <div className="text-2xl font-extrabold tracking-wide hover:text-p-harvest-gold-200 transition duration-300">
          <Link href="/">MEDFINDER</Link>
        </div>
      </div>

     
      <nav className="hidden md:flex items-center space-x-8">
        <ul className="flex space-x-6 text-lg">
          <li className="relative group right-7">
            <Link
              href="IA"
              className="transition duration-300 hover:text-p-harvest-gold-200"
            >
              FinderIA
            </Link>
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-p-harvest-gold-200 transition-all duration-300 group-hover:w-full"></span>
          </li>

          <li className="relative group right-7">
            <Link
              href="turn"
              className="transition duration-300 hover:text-p-harvest-gold-200"
            >
              Turnos
            </Link>
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-p-harvest-gold-200 transition-all duration-300 group-hover:w-full"></span>
          </li>
        </ul>
      </nav>

   
      <div className="md:hidden">
        <button
          className="text-white focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-8 h-8 hover:text-p-harvest-gold-500 transition-colors duration-300"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

     
      {isMenuOpen && (
        <nav className="absolute top-16 left-0 w-full  text-p-olivine-950 shadow-md flex flex-col items-start px-8 py-4 md:hidden">
          <ul className="space-y-4 text-lg w-full">
            <li>
              <Link
                href="IA"
                className="block transition duration-300 hover:text-p-harvest-gold-200"
                onClick={() => setIsMenuOpen(false)}
              >
                FinderIA
              </Link>
              <Link
                href="turn"
                className="block transition duration-300 hover:text-p-harvest-gold-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Turno
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
