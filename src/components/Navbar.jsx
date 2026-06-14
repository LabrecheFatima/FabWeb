import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);

  // Fonction pour un défilement fluide et propre vers la section Projets
  const handleProjectsScroll = (e) => {
    e.preventDefault();
    // Utilise l'ID ou la classe de ta section de projets (WorksSection)
    const projectsSection = document.getElementById('projets') || document.querySelector('section');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <motion.nav 
      initial={{ opacity: 0, y: -15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="w-full max-w-[1200px] mx-auto px-6 md:px-12 py-5 flex items-center justify-between relative z-50"
    >
      {/* GROUPE LOGO */}
      <div className="flex items-center gap-2.5 cursor-pointer group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        <div className="relative w-9 h-9 bg-black rounded-full flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-105 group-hover:bg-[#FF5F25]">
          <svg 
            viewBox="0 0 100 100" 
            className="w-[18px] h-[18px] fill-white"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M50 15 C38 15 32 24 32 35 L32 85 L52 85 L52 52 C52 42 58 36 66 38 C62 25 62 15 50 15 Z" />
            <circle cx="70" cy="80" r="9" />
          </svg>
        </div>
        <span className="text-2xl font-bold tracking-tight text-[#111111]">FabWeb</span>
      </div>

      {/* RESTE DE LA NAVIGATION (LIENS ÉPURÉS) */}
      <div className="flex items-center gap-8 text-[15px] font-semibold text-[#555555]/90">
        
        {/* LIEN PROJETS AVEC SMOOTH SCROLL */}
        <a 
          href="#projets" 
          onClick={handleProjectsScroll}
          className="hover:text-black transition-colors duration-200 no-underline"
        >
          Projets
        </a>

        {/* MENU DÉROULANT INTERACTIF POUR CONTACT */}
        <div 
          className="relative"
          onMouseEnter={() => setIsContactOpen(true)}
          onMouseLeave={() => setIsContactOpen(false)}
        >
          <button 
            onClick={() => setIsContactOpen(!isContactOpen)}
            className="flex items-center gap-1 hover:text-black transition-colors duration-200 bg-transparent border-none cursor-pointer text-[15px] font-semibold text-[#555555]/90 outline-none p-0"
          >
            Contact
            <motion.div
              animate={{ rotate: isContactOpen ? 180 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <ChevronDown className="w-4 h-4 stroke-[2.5px]" />
            </motion.div>
          </button>

          {/* BULLE DES LIENS DE CONTACT */}
          <AnimatePresence>
            {isContactOpen && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="absolute right-0 mt-2 w-48 bg-white/80 backdrop-blur-md border border-black/5 rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.08)] p-2 flex flex-col gap-1 z-50"
              >
                {/* WHATSAPP */}
                <a 
                  href="https://wa.me/213780334395" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center px-4 py-2.5 text-[14px] text-black/70 hover:text-[#FF5F25] hover:bg-black/[0.03] rounded-xl transition-all no-underline font-medium"
                >
                  WhatsApp
                </a>

                {/* FACEBOOK */}
                <a 
                  href="https://www.facebook.com/share/1HKJdtUQ7a/?mibextid=wwXIfr" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center px-4 py-2.5 text-[14px] text-black/70 hover:text-[#FF5F25] hover:bg-black/[0.03] rounded-xl transition-all no-underline font-medium"
                >
                  Facebook
                </a>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </motion.nav>
  );
};

export default Navbar;