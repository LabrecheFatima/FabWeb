import React from 'react';
import { motion } from 'framer-motion';

// 1. IMPORTATION DES IMAGES
import image2 from '../assets/image2.jpg'; 
import image3 from '../assets/image3.jpg'; 
import image4 from '../assets/image4.jpg'; 
import image54 from '../assets/image54.jpg'; 

const worksData = [
  {
    id: "01",
    total: "04",
    title: "ChooseYourShoes",
    description: "Une plateforme e-commerce immersive conçue pour les passionnés de sneakers, offrant une navigation fluide et un tunnel d'achat optimisé.",
    img: image2, 
    link: "https://chooseyourshoes.store"
  },
  {
    id: "02",
    total: "04",
    title: "CM Hydra",
    description: "Une interface numérique moderne conçue pour un centre médical premium, simplifiant la prise de rendez-vous et la présentation des soins.",
    img: image3, 
    link: "https://cmhydra.com"
  },
  {
    id: "03",
    total: "04",
    title: "Claris Dental",
    description: "Une présence web épurée et professionnelle pour une clinique dentaire spécialisée, pensée pour renforcer la confiance et optimiser les réservations.",
    img: image4, 
    link: "https://clarisdentalclinic.com/"
  },
  {
    id: "04",
    total: "04",
    title: "MZAB Tours",
    description: "Une plateforme complète de réservation pour agence de voyage, développée pour automatiser la gestion des circuits, des plannings et des destinations.",
    img: image54, 
    link: "https://mzabtours.net/"
  }
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const WorksSection = () => {
  return (
    /* RE-STYLE TOTAL EN FOND BLANC/GRIS SOLIDE ET NET (Z-10 SANS DÉGRADÉ EXTÉRIEUR) */
    <section className="w-full bg-[#F2F2F2] pt-6 pb-20 md:pb-36 px-4 md:px-6 flex flex-col items-center justify-center font-['Plus_Jakarta_Sans'] selection:bg-[#FF5F25] selection:text-white overflow-hidden relative gap-6 md:gap-10 z-10">
      
      {/* 1. HEADER SYSTEM */}
      <div className="relative w-full max-w-[1280px] h-auto flex flex-col items-center justify-center z-20 -mb-10 md:-mb-24 select-none">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
          className="flex flex-col items-center justify-center text-center w-full"
        >
          <motion.p 
            variants={fadeInUp}
            className="text-sm md:text-base font-extrabold text-[#111111] tracking-widest uppercase mb-0"
          >
            SITES CONÇUS POUR MES CLIENTS
          </motion.p>

          <motion.h2
            variants={fadeInUp}
            className="text-[76px] sm:text-[120px] md:text-[220px] font-extrabold tracking-tighter uppercase leading-[0.8] text-transparent bg-clip-text bg-gradient-to-b from-[#111111] via-[#111111]/30 to-transparent opacity-90 translate-y-[10px] md:translate-y-[20px]"
          >
            WORK
          </motion.h2>
        </motion.div>
      </div>

      {/* 2. ENSEMBLE DES CARTES DE PROJETS */}
      {worksData.map((project) => (
        <motion.div
          key={project.id}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-[1280px] mx-auto px-6 md:px-12 py-12 md:py-16 bg-gradient-to-br from-[#080808] to-[#121212] rounded-[32px] md:rounded-[48px] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.6),0_0_60px_rgba(255,255,255,0.12)] flex flex-col lg:flex-row items-center lg:items-stretch justify-between gap-8 z-10"
        >
          
          {/* COLONNE GAUCHE : INFOS DU PROJET */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="flex-1 flex flex-col justify-between items-start self-stretch w-full order-1 lg:order-none py-2"
          >
            <motion.p 
              variants={fadeInUp}
              className="text-[14px] md:text-[16px] font-medium text-white/60 leading-relaxed max-w-[340px] mb-12 lg:mb-0"
            >
              {project.description}
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-col items-start w-full mt-auto">
              <p className="text-[12px] md:text-[13px] font-bold tracking-wider text-white/40 mb-1 select-none">
                <span className="text-white font-extrabold">{project.id}</span> / {project.total}
              </p>
              
              <h3 className="text-[38px] sm:text-[54px] md:text-[72px] font-bold tracking-tighter text-white leading-none relative group select-none break-words w-full">
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="hover:text-[#FF5F25] transition-colors duration-300 block">
                  {project.title}
                </a>
                <div className="absolute inset-0 bg-white/10 blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-full" />
              </h3>
            </motion.div>
          </motion.div>

          {/* COLONNE DROITE (IMAGE) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="flex-[1.6] flex items-center justify-center relative w-full h-auto min-h-[350px] sm:min-h-[480px] md:min-h-[580px] lg:h-[640px] order-2 lg:order-none my-0"
          >
            <div className="relative w-full h-full aspect-[3/4] lg:aspect-auto max-w-[1000px] overflow-hidden flex items-center justify-center">
              
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-full h-full block group cursor-pointer"
              >
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="relative w-full h-full rounded-[24px] md:rounded-[36px] overflow-hidden border border-white/10 shadow-[0_30px_70px_rgba(0,0,0,0.5)] bg-[#111111]"
                >
                  <img 
                    src={project.img} 
                    alt={project.title}
                    className="w-full h-full object-cover object-center pointer-events-none select-none transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </motion.div>
              </a>

            </div>
          </motion.div>

        </motion.div>
      ))}

    </section>
  );
};

export default WorksSection;