import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useLocation } from "wouter";
import { motion, useAnimation } from "framer-motion";

// Highlights of the school
const schoolHighlights = [
  {
    id: 1,
    title: "Laboratorët modernë",
    description: "Shkolla jonë ka laboratorë shkencorë të pajisur me teknologji bashkëkohore",
    icon: "fa-flask",
    color: "#26a69a"
  },
  {
    id: 2,
    title: "Biblioteka e pasur",
    description: "Mbi 10,000 libra në bibliotekën tonë dixhitale dhe fizike",
    icon: "fa-book",
    color: "#7e57c2"
  },
  {
    id: 3,
    title: "Aktivitete sportive",
    description: "Fusha sportive dhe palestër moderne për aktivitete të ndryshme",
    icon: "fa-basketball-ball",
    color: "#4CAF50"
  },
  {
    id: 4,
    title: "Projekte ndërkombëtare",
    description: "Bashkëpunim me shkolla në Evropë dhe programe shkëmbimi",
    icon: "fa-globe-europe",
    color: "#FF9800"
  }
];

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function HighlightsSection() {
  const [_, setLocation] = useLocation();
  const highlightsControls = useAnimation();
  
  // Setup Intersection Observer hook
  const [highlightsRef, highlightsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  
  useEffect(() => {
    // Animate highlights when they come into view
    if (highlightsInView) {
      highlightsControls.start("visible");
    }
  }, [highlightsControls, highlightsInView]);
  
  return (
    <section 
      ref={highlightsRef}
      className="py-16 bg-[#121212]"
    >
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Pse të zgjedhësh gjimnazin tonë?</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Gjimnazi "Abdulla Keta" ofron një mjedis stimulues për zhvillimin akademik dhe personal të çdo nxënësi</p>
        </motion.div>
        
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          animate={highlightsControls}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {schoolHighlights.map((item) => (
            <motion.div
              key={item.id}
              variants={fadeIn}
              whileHover={{ y: -10 }}
              className="bg-[#1a1a1a] rounded-xl p-6 shadow-lg border-t-4"
              style={{ borderColor: item.color }}
            >
              <div className="w-14 h-14 rounded-full flex items-center justify-center mb-4 mx-auto" style={{ backgroundColor: `${item.color}20` }}>
                <i className={`fas ${item.icon} text-2xl`} style={{ color: item.color }}></i>
              </div>
              <h3 className="text-xl font-bold text-white mb-3 text-center">{item.title}</h3>
              <p className="text-gray-400 text-center">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="text-center mt-12">
          <button 
            onClick={() => setLocation("/about")}
            className="bg-transparent hover:bg-[#26a69a] text-[#26a69a] hover:text-white border border-[#26a69a] px-6 py-3 rounded-md transition-all duration-300"
          >
            Mëso më shumë për shkollën
          </button>
        </div>
      </div>
    </section>
  );
}