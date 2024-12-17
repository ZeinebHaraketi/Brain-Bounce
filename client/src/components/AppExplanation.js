import { FaRegUser, FaRegPlayCircle, FaChartLine } from 'react-icons/fa';

export default function AppExplanation() {
  return (
    <section className="bg-gradient-to-r from-teal-500 to-blue-500 py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-white mb-6 relative group">
          <span className="absolute inset-x-0 bottom-0 h-1 bg-yellow-400 transform scale-x-0 group-hover:scale-x-100 transition-all duration-500"></span>
          Comment ça marche ?
        </h2>
        <p className="text-lg mb-12 max-w-3xl mx-auto text-white leading-relaxed">
          Notre application permet aux utilisateurs d'apprendre de nouvelles compétences de manière ludique, grâce à des mini-jeux interactifs. Voici comment ça fonctionne :
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Inscription facile */}
          <div className="transform hover:scale-105 transition-all duration-500 bg-white p-8 rounded-lg shadow-lg hover:shadow-xl text-center relative">
            <div className="mb-4">
              <FaRegUser className="text-4xl text-teal-500 mx-auto" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-teal-700 group-hover:text-yellow-400 transition-all duration-300">Inscription facile</h3>
            <p className="text-gray-600">
              Créez un compte en quelques étapes simples et accédez immédiatement à nos jeux éducatifs pour apprendre à votre rythme.
            </p>
          </div>
          {/* Jeux personnalisés */}
          <div className="transform hover:scale-105 transition-all duration-500 bg-white p-8 rounded-lg shadow-lg hover:shadow-xl text-center relative">
            <div className="mb-4">
              <FaRegPlayCircle className="text-4xl text-purple-500 mx-auto" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-purple-700 group-hover:text-yellow-400 transition-all duration-300">Jeux personnalisés</h3>
            <p className="text-gray-600">
              Choisissez parmi une variété de mini-jeux adaptés à vos objectifs d'apprentissage, que ce soit pour les langues, les mathématiques ou la programmation.
            </p>
          </div>
          {/* Suivi des progrès */}
          <div className="transform hover:scale-105 transition-all duration-500 bg-white p-8 rounded-lg shadow-lg hover:shadow-xl text-center relative">
            <div className="mb-4">
              <FaChartLine className="text-4xl text-yellow-500 mx-auto" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-yellow-700 group-hover:text-teal-400 transition-all duration-300">Suivi des progrès</h3>
            <p className="text-gray-600">
              Suivez vos progrès à travers des statistiques détaillées, afin de voir vos améliorations et de rester motivé.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
