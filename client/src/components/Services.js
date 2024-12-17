import { FaUsers, FaGamepad, FaTachometerAlt } from "react-icons/fa";

export default function Services() {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6 text-gray-800 relative">
          <span className="absolute inset-x-0 bottom-0 h-1 bg-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-all duration-300"></span>
          Nos Services
        </h2>
        <p className="text-lg mb-12 max-w-3xl mx-auto text-gray-600 leading-relaxed">
          Découvrez comment notre application peut vous aider à atteindre vos
          objectifs d'apprentissage grâce à une variété de services adaptés à
          tous les besoins. Chaque service est conçu pour rendre votre
          apprentissage interactif et efficace.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Service 1 */}
          <div className="group relative bg-white p-8 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 text-center">
            <div className="mb-6">
              <FaUsers className="text-5xl text-blue-500 group-hover:text-blue-700 transition-all duration-300 mx-auto" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4 group-hover:text-blue-700 transition-all duration-300">
              Suivi personnalisé
            </h3>
            <p className="text-lg text-gray-700 group-hover:text-blue-600 transition-all duration-300">
              Un suivi complet des progrès de chaque utilisateur avec des
              rapports réguliers sur leurs performances dans les jeux éducatifs.
            </p>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-200 to-transparent opacity-30 rounded-lg group-hover:opacity-60 transition-all duration-300"></div>
          </div>

          {/* Service 2 */}
          <div className="group relative bg-white p-8 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 text-center">
            <div className="mb-6">
              <FaGamepad className="text-5xl text-purple-500 group-hover:text-purple-700 transition-all duration-300 mx-auto" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4 group-hover:text-purple-700 transition-all duration-300">
              Mini-jeux interactifs
            </h3>
            <p className="text-lg text-gray-700 group-hover:text-purple-600 transition-all duration-300">
              Des jeux amusants et interactifs qui rendent l'apprentissage des
              compétences plus engageant et efficace.
            </p>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-200 to-transparent opacity-30 rounded-lg group-hover:opacity-60 transition-all duration-300"></div>
          </div>

          {/* Service 3 */}
          <div className="group relative bg-white p-8 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 text-center">
            <div className="mb-6">
              <FaTachometerAlt className="text-5xl text-yellow-500 group-hover:text-yellow-600 transition-all duration-300 mx-auto" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4 group-hover:text-yellow-600 transition-all duration-300">
              Apprentissage adaptatif
            </h3>
            <p className="text-lg text-gray-700 group-hover:text-yellow-500 transition-all duration-300">
              Notre application ajuste automatiquement les jeux et les défis en
              fonction du niveau et des progrès de l'utilisateur.
            </p>
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-200 to-transparent opacity-30 rounded-lg group-hover:opacity-60 transition-all duration-300"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
