export default function FAQ() {
    return (
      <section className="bg-white py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-6">Questions Fréquentes</h2>
          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Comment mon enfant peut-il commencer à apprendre ?</h3>
              <p className="text-gray-600">Il suffit de s'inscrire, puis de choisir les jeux éducatifs adaptés à son niveau et à ses intérêts.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">L'application est-elle sécurisée ?</h3>
              <p className="text-gray-600">Oui, toutes les données personnelles sont protégées et nous respectons les normes de confidentialité des enfants.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Puis-je suivre les progrès de mon enfant ?</h3>
              <p className="text-gray-600">Oui, l'application vous permet de suivre les progrès de votre enfant via des rapports détaillés et des statistiques.</p>
            </div>
          </div>
        </div>
      </section>
    );
  }
  