import React from "react";

export default function Hero() {
  return (
    <section className="bg-white text-gray-800">
      <div className="container mx-auto px-6 py-20 flex flex-col-reverse md:flex-row items-center justify-between">
        {/* Texte principal */}
        <div className="md:w-1/2 text-center md:text-left space-y-6">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tighter transition-all duration-300 hover:text-blue-600">
            Développez vos compétences <br /> tout en vous amusant !
          </h1>
          <p className="text-lg md:text-xl font-medium leading-relaxed transition-all duration-300 hover:text-gray-700">
            Découvrez des mini-jeux interactifs pour apprendre et perfectionner vos
            connaissances. Commencez l'aventure dès maintenant !
          </p>
          <button
            className="bg-blue-600 text-white font-bold py-3 px-6 rounded-full shadow-lg 
              hover:bg-blue-500 hover:text-yellow-400 hover:scale-110 transform transition-all duration-300 
              focus:outline-none focus:ring-4 focus:ring-blue-300"
            aria-label="Commencer à apprendre"
          >
            Commencer à apprendre
          </button>
        </div>

        {/* Image agrandie et arrondie avec effet de parallaxe */}
        <div className="md:w-1/2 flex justify-center mb-10 md:mb-0">
          <img
            src="/hero.jpg" // Remplace par ton image
            alt="Illustration de développement des compétences"
            className="w-80 h-[350px] md:w-[500px] md:h-[400px] object-cover rounded-lg drop-shadow-lg 
              transform hover:scale-110 transition-transform duration-300"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
