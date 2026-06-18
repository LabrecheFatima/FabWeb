import { motion } from 'framer-motion';
import { ArrowUpRight, Star, Shield, Search, Zap } from 'lucide-react';

const HeroSection = () => {
  const structuralContainerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.4 } }
  };

  const handleProjectsScroll = (e) => {
    e.preventDefault();
    const projectsSection = document.getElementById('projets') || document.querySelector('section');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const structuralItemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 22 } }
  };

  const titleContainerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.06, delayChildren: 0.1 } }
  };

  const wordVariants = {
    hidden: { y: "115%", opacity: 0, rotateX: 15 },
    visible: { y: "0%", opacity: 1, rotateX: 0, transition: { duration: 1.3, ease: [0.16, 1, 0.3, 1] } }
  };

  const arrowFlipVariants = {
    animate: {
      rotateY: [0, 360, 360], 
      transition: { duration: 5, ease: [0.16, 1, 0.3, 1], times: [0, 0.4, 1], repeat: Infinity, repeatDelay: 1.5 }
    }
  };

  return (
    <div className="relative flex flex-col items-center justify-center text-center px-6 md:px-12 max-w-[1200px] mx-auto w-full mt-6 pb-20 font-['Plus_Jakarta_Sans'] selection:bg-[#FF5F25] selection:text-white bg-transparent">
      <div className="relative z-10 flex flex-col items-center w-full">
        
        {/* SOCIAL PROOF BADGE */}
        <motion.div variants={structuralContainerVariants} initial="hidden" animate="visible" className="flex flex-col items-center gap-2 mb-6 md:mb-8">
          <motion.div variants={structuralItemVariants} className="flex items-center -space-x-3">
            {["https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80", "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80", "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&auto=format&fit=crop&q=80"].map((avatar, index) => (
              <img key={index} src={avatar} alt="Client Avatar" className="w-9 h-9 rounded-full border-2 border-[#F2F2F2] object-cover pointer-events-none" />
            ))}
          </motion.div>
          <motion.div variants={structuralItemVariants} className="flex flex-col items-center gap-0.5">
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, idx) => <Star key={idx} className="w-3.5 h-3.5 fill-[#FF5F25] text-[#FF5F25]" />)}
              <span className="ml-1.5 text-[11px] font-bold px-1.5 py-0.5 bg-black text-white rounded-full">4.9/5</span>
            </div>
            <p className="text-xs font-medium text-[#555555]">Rejoignez 20+ clients satisfaits</p>
          </motion.div>
        </motion.div>

        {/* HEADLINE */}
        <motion.h1 variants={titleContainerVariants} initial="hidden" animate="visible" className="text-[34px] md:text-[64px] font-semibold tracking-tight text-[#111111] leading-[1.12] mb-6 max-w-[95%] md:max-w-[900px] flex flex-wrap justify-center gap-x-[0.24em] gap-y-1 select-none origin-center" style={{ perspective: 800 }}>
          {["Développez", "Votre", "Activité"].map((word, idx) => (
            <span key={idx} className="relative inline-block overflow-hidden py-1 -my-1">
              <motion.span variants={wordVariants} className="inline-block origin-bottom">{word}</motion.span>
            </span>
          ))}
          {["Avec", "Un", "Site", "Web", "Idéal"].map((word, idx) => (
            <span key={idx} className="relative inline-block overflow-hidden py-1 -my-1">
              <motion.span variants={wordVariants} className="inline-block text-black/35 origin-bottom">{word}</motion.span>
            </span>
          ))}
        </motion.h1>

        {/* SUBTITLE & CTAs */}
        <motion.div variants={structuralContainerVariants} initial="hidden" animate="visible" className="flex flex-col items-center w-full">
          <motion.p variants={structuralItemVariants} className="text-[14px] md:text-[18px] font-medium text-[#555555] leading-relaxed max-w-[90%] md:max-w-[600px] mb-10 select-none">
            FabWeb conçoit et développe des sites web sur mesure, ultra-rapides et optimisés pour le référencement — pour transformer vos visiteurs en clients fidèles.
          </motion.p>

          <motion.div variants={structuralItemVariants} className="w-full max-w-[280px] md:max-w-none flex flex-col md:flex-row items-center justify-center gap-3.5 mb-10">
            <motion.a href="https://wa.me/213780334395" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.01, y: -1 }} whileTap={{ scale: 0.99 }} className="group flex items-center justify-between w-[85%] md:w-[175px] h-[42px] pl-4 pr-1 bg-black text-white font-semibold text-[14px] rounded-full shadow-[0_15px_35px_-10px_rgba(0,0,0,0.35)] no-underline">
              <span>Contactez-nous</span>
              <div className="w-[30px] h-[30px] bg-[#FF5F25] rounded-full flex items-center justify-center overflow-hidden">
                <motion.div className="flex items-center justify-center w-full h-full" variants={arrowFlipVariants} animate="animate">
                  <ArrowUpRight className="w-3.5 h-3.5 text-white stroke-[2.5]" />
                </motion.div>
              </div>
            </motion.a>

            <motion.button whileHover={{ scale: 1.01, y: -1 }} whileTap={{ scale: 0.99 }} onClick={handleProjectsScroll} className="group flex items-center justify-between w-[85%] md:w-[175px] h-[42px] pl-4 pr-1 bg-white text-[#111111] font-semibold text-[14px] rounded-full border border-black/5 shadow-[0_10px_30px_-12px_rgba(0,0,0,0.1)]">
              <span>Voir nos projets</span>
              <div className="w-[30px] h-[30px] bg-[#FF5F25] rounded-full flex items-center justify-center overflow-hidden">
                <motion.div className="flex items-center justify-center w-full h-full" variants={arrowFlipVariants} animate="animate">
                  <ArrowUpRight className="w-3.5 h-3.5 text-white stroke-[2.5]" />
                </motion.div>
              </div>
            </motion.button>
          </motion.div>

          <motion.div variants={structuralItemVariants} className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs font-semibold text-[#555555]/80 tracking-wide select-none">
            <div className="flex items-center gap-1.5"><Shield className="w-3.5 h-3.5 text-[#555555]/50 stroke-[2.5]" /><span>Design Unique & Moderne</span></div>
            <div className="flex items-center gap-1.5"><Search className="w-3.5 h-3.5 text-[#555555]/50 stroke-[2.5]" /><span>Optimisé Pour Le SEO</span></div>
            <div className="flex items-center gap-1.5"><Zap className="w-3.5 h-3.5 text-[#555555]/50 stroke-[2.5]" /><span>Interface Rapide</span></div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;