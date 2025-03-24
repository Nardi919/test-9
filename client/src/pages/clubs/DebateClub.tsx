
import { motion } from "framer-motion";

export default function DebateClub() {
  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold mb-8">Klubi i Debatit</h1>
        <div className="prose max-w-none">
          <p className="text-lg mb-6">
            Klubi i Debatit ofron një platformë për nxënësit të zhvillojnë aftësitë e tyre
            të të folurit publik, argumentimit dhe mendimit kritik.
          </p>
          <h2 className="text-2xl font-semibold mt-8 mb-4">Aktivitetet</h2>
          <ul className="list-disc pl-6 mb-6">
            <li>Debate të Strukturuara</li>
            <li>Konkurse Oratorie</li>
            <li>Workshope të Argumentimit</li>
            <li>Gara Ndërshkollore</li>
          </ul>
        </div>
      </motion.div>
    </div>
  );
}
