import { motion } from 'framer-motion';
import showcaseImage from '../assets/image1.avif'; // Importation propre sous Vite

const ShowcaseSection = () => {
  // Ta stack technique
  const techStack = [
    { name: 'React', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/react.svg' },
    { name: 'Next.js', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/nextdotjs.svg' },
    { name: 'TypeScript', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/typescript.svg' },
    { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/javascript.svg' },
    { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/nodedotjs.svg' },
    { name: 'HTML5', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/html5.svg' },
    { name: 'CSS3', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/css3.svg' },
    { name: 'VS Code', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/visualstudiocode.svg' },
  ];

  const duplicatedStack = [...techStack, ...techStack, ...techStack];

  return (
    /* CORRECTION ICI : Le dégradé se fond désormais entièrement vers le gris uniforme #F2F2F2 */
    <div className="w-full bg-gradient-to-b from-transparent via-[#F2F2F2]/90 to-[#F2F2F2] pt-20 pb-12">
      
      {/* BLOC INTERNE CENTRÉ CONTENANT L'IMAGE ET LE MARQUEE */}
      <div className="w-full max-w-[1400px] mx-auto px-4 md:px-8 flex flex-col items-center gap-10 overflow-hidden">
        
        {/* 1. IMAGE AVEC EFFET DE PERSPECTIVE */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{ 
            rotateX: 1.5, 
            rotateY: -1.5, 
            scale: 1.005,
            transition: { duration: 0.4, ease: "easeOut" }
          }}
          className="w-full aspect-video md:aspect-[16/7] rounded-[24px] md:rounded-[40px] overflow-hidden shadow-[0_25px_50px_-12px_rgba(0,0,0,0.15)] border border-black/5 bg-[#111111] cursor-pointer origin-center"
          style={{ perspective: 1200 }}
        >
          <img 
            src={showcaseImage}
            alt="Showcase Work Grid" 
            className="w-full h-full object-cover object-center pointer-events-none select-none"
          />
        </motion.div>

        {/* 2. INFINITE MARQUEE PUR SUR FOND HARMONISÉ */}
        <div className="w-full relative py-2 flex items-center overflow-hidden">
          {/* CORRECTION ICI : Remplacement de from-white par from-[#F2F2F2] pour éviter les halos blancs sur les côtés */}
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#F2F2F2] to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#F2F2F2] to-transparent z-10 pointer-events-none" />

          <motion.div 
            className="flex items-center gap-12 md:gap-20 whitespace-nowrap will-change-transform"
            animate={{ x: [0, -1200] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 22,
                ease: "linear",
              },
            }}
          >
            {duplicatedStack.map((tech, idx) => (
              <div 
                key={idx} 
                className="flex items-center gap-3.5 text-[#111111]/40 hover:text-black transition-colors duration-300 select-none cursor-default"
              >
                <img 
                  src={tech.logo} 
                  alt={tech.name} 
                  className="w-5 h-5 md:w-6 md:h-6 opacity-45 grayscale contrast-200 transition-all duration-300 hover:opacity-100 hover:grayscale-0"
                />
                <span className="text-lg md:text-xl font-bold tracking-[0.07em] uppercase font-['Plus_Jakarta_Sans']">
                  {tech.name}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

      </div>
    </div>
  );
};

export default ShowcaseSection;