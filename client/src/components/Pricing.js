export default function Pricing() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-extrabold mb-6 relative group">
          <span className="absolute inset-x-0 bottom-0 h-1 bg-yellow-400 transform scale-x-0 group-hover:scale-x-100 transition-all duration-500"></span>
          Nos Plans d'Abonnement
        </h2>
        <p className="text-lg mb-12 max-w-3xl mx-auto leading-relaxed">
          Choisissez l'abonnement qui convient le mieux à vos besoins. Nous offrons des plans adaptés à toute la famille.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Plan Gratuit */}
          <div className="transform hover:scale-105 hover:shadow-2xl transition-all duration-500 bg-white p-8 rounded-lg shadow-xl hover:border-l-4 hover:border-teal-500 relative">
            <h3 className="text-2xl font-bold mb-4 text-teal-600">Plan Gratuit</h3>
            <p className="text-gray-700 mb-6">Accédez à un nombre limité de jeux et de fonctionnalités.</p>
            <p className="text-2xl font-bold mb-4 text-teal-600">gratuit</p>
            <button className="bg-gradient-to-r from-teal-500 to-blue-500 text-white py-3 px-6 rounded-full mt-4 transition-all w-full hover:bg-teal-600">
              S'inscrire gratuitement
            </button>
          </div>
          {/* Plan Mensuel */}
          <div className="transform hover:scale-105 hover:shadow-2xl transition-all duration-500 bg-white p-8 rounded-lg shadow-xl hover:border-l-4 hover:border-teal-500 relative">
            <h3 className="text-2xl font-bold mb-4 text-teal-600">Plan Mensuel</h3>
            <p className="text-gray-700 mb-6">Accédez à tous les jeux et fonctionnalités pour un abonnement mensuel.</p>
            <p className="text-2xl font-bold mb-4 text-teal-600">15 Dt/mois</p>
            <button className="bg-gradient-to-r from-teal-500 to-blue-500 text-white py-3 px-6 rounded-full mt-4 transition-all w-full hover:bg-teal-600">
              Souscrire
            </button>
            {/* Badge Popularité */}
            <span className="absolute top-4 right-4 bg-yellow-400 text-gray-800 px-3 py-1 rounded-full text-sm font-bold">
              Populaire
            </span>
          </div>
          {/* Plan Annuel */}
          <div className="transform hover:scale-105 hover:shadow-2xl transition-all duration-500 bg-white p-8 rounded-lg shadow-xl hover:border-l-4 hover:border-teal-500 relative">
            <h3 className="text-2xl font-bold mb-4 text-teal-600">Plan Annuel</h3>
            <p className="text-gray-700 mb-6">Profitez d'une réduction en souscrivant à un abonnement annuel.</p>
            <p className="text-2xl font-bold mb-4 text-teal-600">150 Dt/an</p>
            <button className="bg-gradient-to-r from-teal-500 to-blue-500 text-white py-3 px-6 rounded-full mt-4 transition-all w-full hover:bg-teal-600">
              Souscrire
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
