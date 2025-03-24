
import { motion } from "framer-motion";

export default function ArtClub() {
  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold mb-8">Klubi i Artit</h1>
        <div className="prose max-w-none">
          <p className="text-lg mb-6">
            Klubi i Artit është një hapësirë krijuese për nxënësit të shprehin talentin e tyre artistik
            dhe të zhvillojnë aftësitë e tyre në arte të ndryshme.
          </p>
          <h2 className="text-2xl font-semibold mt-8 mb-4">Aktivitetet</h2>
          <ul className="list-disc pl-6 mb-6">
            <li>Vizatim dhe Pikturë</li>
            <li>Skulpturë</li>
            <li>Fotografi</li>
            <li>Ekspozita të Artit</li>
          </ul>
        </div>
      </motion.div>
    </div>
  );
}
