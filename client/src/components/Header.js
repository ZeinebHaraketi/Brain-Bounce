import React from "react";

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-600 via-blue-400 to-yellow-400 text-white shadow-lg">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <div className="flex items-center space-x-3 group cursor-pointer">
          <img
            src="/brainbounce.png"
            alt="Logo"
            className="h-16 w-16 transform group-hover:scale-110 transition-transform duration-300"
            />
          <h1 className="text-3xl font-extrabold tracking-tighter text-white group-hover:text-yellow-400 transition-all duration-300 drop-shadow-lg">
            Brain Bounce
          </h1>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-6">
          {["Accueil", "Compétences", "Mini-jeux", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="relative text-lg font-semibold tracking-wide text-white hover:text-yellow-500 transition-colors duration-300"
            >
              {item}
              {/* Dynamic underline */}
              <span className="absolute bottom-0 left-0 w-0 h-1 bg-yellow-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center space-x-4">
          <button
            className="bg-blue-600 text-white hover:text-yellow-500 font-semibold px-4 py-2 rounded-lg shadow-md 
    hover:bg-blue-700 transition-transform transform hover:scale-105 duration-300"
          >
            Se connecter
          </button>

          {/* Burger Menu */}
          <button className="md:hidden block text-white hover:text-yellow-500 transition-all duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      
    </header>
  );
}
