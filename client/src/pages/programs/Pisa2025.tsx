
import { motion } from "framer-motion";

export default function Pisa2025() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl font-bold mb-8 text-gray-900">PISA 2025</h1>
          
          <div className="prose max-w-none">
            <p className="text-lg mb-6 text-gray-700">
              PISA 2025 është një vlerësim ndërkombëtar që mat aftësitë e nxënësve
              15-vjeçarë në matematikë, shkencë dhe lexim. Gjimnazi "Abdulla Keta" është krenar 
              që është pjesë e këtij programi prestigjioz ndërkombëtar.
            </p>

            <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">Objektivat e PISA 2025</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Vlerësimi i aftësive analitike në matematikë</li>
                <li>Matja e kompetencave shkencore dhe metodologjike</li>
                <li>Vlerësimi i aftësive të të kuptuarit në lexim</li>
                <li>Krahasimi me standardet ndërkombëtare të arsimit</li>
                <li>Identifikimi i fushave për përmirësim në sistemin arsimor</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">Fushat e Vlerësimit</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="p-4 border rounded-lg">
                  <h3 className="text-xl font-medium mb-2 text-teal-600">Matematikë</h3>
                  <p className="text-gray-600">Zgjidhja e problemeve, arsyetimi logjik dhe aftësitë analitike</p>
                </div>
                <div className="p-4 border rounded-lg">
                  <h3 className="text-xl font-medium mb-2 text-teal-600">Shkencë</h3>
                  <p className="text-gray-600">Të kuptuarit shkencor, metodologjia kërkimore dhe analiza e të dhënave</p>
                </div>
                <div className="p-4 border rounded-lg">
                  <h3 className="text-xl font-medium mb-2 text-teal-600">Lexim</h3>
                  <p className="text-gray-600">Të kuptuarit e tekstit, interpretimi dhe reflektimi kritik</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">Përgatitja për PISA 2025</h2>
              <p className="mb-4 text-gray-700">
                Shkolla jonë ofron mbështetje të plotë për nxënësit që do të marrin pjesë në testin PISA 2025:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Seanca të dedikuara përgatitore</li>
                <li>Materiale studimi dhe ushtrime praktike</li>
                <li>Mbështetje individuale nga mësuesit</li>
                <li>Simulime të testit PISA</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
