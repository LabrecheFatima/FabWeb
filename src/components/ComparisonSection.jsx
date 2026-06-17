import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Footer from './Footer';
// 1. IMPORTATION DE VOTRE PHOTO
import photo2 from '../assets/photo2.jpg'; 

// 2. SOUS-COMPOSANT DE RÉVÉLATION DE CARACTÈRE (Vitesse ultra-rapide)
const ScrollChar = ({ char, index, totalLength, progress, isKeyword, rangeStart, rangeEnd }) => {
  const factor = totalLength > 1 ? index / (totalLength - 1) : 0;
  const charProgressStart = rangeStart + factor * (rangeEnd - rangeStart - 0.015);
  const charProgressEnd = charProgressStart + 0.015; 

  const opacity = useTransform(
    progress, 
    [charProgressStart, charProgressEnd], 
    [0.15, 1] 
  );

  return (
    <motion.span 
      style={{ opacity }}
      className={`${isKeyword ? 'text-[#FF5F25]' : 'text-[#111111]'} inline-block whitespace-pre`}
    >
      {char}
    </motion.span>
  );
};

// 3. MAIN INTERACTIVE COMPARISON SECTION
const ComparisonSection = () => {
  const containerRef = useRef(null);
  const avatarRef = useRef(null);
  const [isToggled, setIsToggled] = useState(true);

  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  const springRotateX = useSpring(rotateX, { stiffness: 150, damping: 15 });
  const springRotateY = useSpring(rotateY, { stiffness: 150, damping: 15 });

  const handleMouseMove = (e) => {
    if (!avatarRef.current) return;
    const rect = avatarRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    const mouseX = e.clientX - rect.left - width / 2;
    const mouseY = e.clientY - rect.top - height / 2;

    const rX = -(mouseY / (height / 2)) * 20;
    const rY = (mouseX / (width / 2)) * 20;

    rotateX.set(rX);
    rotateY.set(rY);
  };

  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const paragraph1 = "Je m'appelle Fatima, je suis ingénieur full-stack et je conçois des applications web robustes.";
  const paragraph2 = "Mon objectif est de simplifier vos idées complexes pour créer des applications sur mesure.";
  
  const arrowFlipVariants = {
    animate: {
      rotateY: [0, 360, 360], 
      transition: {
        duration: 5, 
        ease: [0.16, 1, 0.3, 1], 
        times: [0, 0.4, 1], 
        repeat: Infinity,
        repeatDelay: 1.5 
      }
    }
  };
  const p2OrangeKeywords = ["applications", "sur", "mesure."];

  return (
    <div ref={containerRef} className="w-full min-h-screen bg-gradient-to-b from-[#EAEAEA] via-[#F2F2F2] to-[#F2F2F2] relative z-30">  
      {/* LOCKED VIEWPORT WRAPPER */}
      <div className="sticky top-0 left-0 w-full h-screen flex flex-col items-center justify-center overflow-hidden select-none font-['Plus_Jakarta_Sans'] bg-[#e8e6e6] pt-20 pb-6 z-30">  
        {/* CENTERED LAYOUT WRAPPER */}
        <div className="max-w-[840px] w-full px-6 md:px-12 flex flex-col items-center justify-center gap-8 md:gap-10 text-center">
          
          {/* BLOC EN-TÊTE : HELLO + AVATAR */}
          <div className="flex flex-col items-center gap-4 select-none perspective-[1000px]">
            <span 
              className="text-[34px] md:text-[40px] text-[#FF5F25] tracking-normal leading-none"
              style={{ fontFamily: "'Caveat', 'Playfair Display', 'Georgia', serif", fontStyle: 'italic' }}
            >
              (hello)
            </span>
            
            <motion.div 
              ref={avatarRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              whileHover={{ scale: 1.06 }}
              style={{ 
                rotateX: springRotateX, 
                rotateY: springRotateY,
                transformStyle: "preserve-3d"
              }}
              className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-2 border-black/10 shadow-lg bg-[#111111] cursor-pointer transition-shadow duration-300 hover:shadow-[0_20px_40px_rgba(0,0,0,0.15)] relative"
            >
              <img 
                src={photo2} 
                alt="Fatima Zohra" 
                className="w-full h-full object-cover object-center pointer-events-none select-none"
                style={{ transform: "translateZ(20px)" }}
              />
            </motion.div>
          </div>
          
          {/* PARAGRAPHE 1 (CORRIGÉ : Pas de cassure sur full-stack) */}
          <p className="text-[26px] sm:text-[32px] md:text-[42px] font-extrabold text-[#111111] leading-[1.25] tracking-tighter flex flex-wrap justify-center">
            {paragraph1.split(" ").map((word, wordIdx) => {
              // Calculer la position absolue des caractères pour l'effet de scroll
              const wordsArray = paragraph1.split(" ");
              const precedingCharsCount = wordsArray.slice(0, wordIdx).join(" ").length + (wordIdx > 0 ? 1 : 0);

              return (
                <span 
                  key={`p1-word-${wordIdx}`} 
                  className={`inline-block ${word.includes("full-stack") ? "whitespace-nowrap" : ""}`}
                >
                  {word.split("").map((char, charIdx) => {
                    const absoluteCharIndex = precedingCharsCount + charIdx;
                    const keywordTarget = "ingénieur full-stack";
                    const p1Idx = paragraph1.indexOf(keywordTarget);
                    const isKeyword = absoluteCharIndex >= p1Idx && absoluteCharIndex < p1Idx + keywordTarget.length;

                    return (
                      <ScrollChar 
                        key={`p1-char-${absoluteCharIndex}`}
                        char={char}
                        index={absoluteCharIndex}
                        totalLength={paragraph1.length}
                        progress={scrollYProgress}
                        isKeyword={isKeyword}
                        rangeStart={0.0}
                        rangeEnd={0.35}
                      />
                    );
                  })}
                  {/* Ajouter un espace après chaque mot */}
                  <span className="inline-block">&nbsp;</span>
                </span>
              );
            })}
          </p>

          {/* PARAGRAPHE 2 */}
          <p className="text-[26px] sm:text-[32px] md:text-[42px] font-extrabold text-[#111111] leading-[1.25] tracking-tighter flex flex-wrap items-center justify-center">
            {paragraph2.split(" ").map((word, wordIdx) => {
              const cleanWord = word.toLowerCase().replace(/[^a-zâàéèêôûç.]/g, "");
              const isWordOrange = p2OrangeKeywords.includes(cleanWord);

              const wordsArray = paragraph2.split(" ");
              const precedingCharsCount = wordsArray.slice(0, wordIdx).join(" ").length + (wordIdx > 0 ? 1 : 0);

              return (
                <span key={`word-block-${wordIdx}`} className="inline-flex items-center justify-center flex-wrap">
                  
                  {word.split("").map((char, charIdx) => {
                    const absoluteCharIndex = precedingCharsCount + charIdx;
                    return (
                      <ScrollChar 
                        key={`p2-char-${absoluteCharIndex}`}
                        char={char}
                        index={absoluteCharIndex}
                        totalLength={paragraph2.length}
                        progress={scrollYProgress}
                        isKeyword={isWordOrange}
                        rangeStart={0.40}
                        rangeEnd={0.75}
                      />
                    );
                  })}

                  {/* BOUTON TOGGLE BASCULE */}
                  {cleanWord === "complexes" && (
                    <span className="inline-flex items-center mx-2 md:mx-3 transform translate-y-1">
                      <button
                        onClick={() => setIsToggled(!isToggled)}
                        className={`w-[54px] h-[30px] rounded-full p-1 relative flex items-center cursor-pointer transition-colors duration-300 border border-black/5 shadow-md ${
                          isToggled ? 'bg-[#FF5F25]' : 'bg-[#D1D1D6]'
                        }`}
                      >
                        <motion.div 
                          className="w-[22px] h-[22px] bg-white rounded-full shadow-sm"
                          layout
                          transition={{ type: "spring", stiffness: 500, damping: 30 }}
                          animate={{ x: isToggled ? 24 : 0 }}
                        />
                      </button>
                    </span>
                  )}
                  
                  <span className="inline-block">&nbsp;</span>
                </span>
              );
            })}
          </p>

          {/* CORRECTION DU BLOC BOUTONS */}
          <motion.a 
            href="https://wa.me/213780334395"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.01, y: -1 }}
            whileTap={{ scale: 0.99 }}
            className="group flex items-center justify-between w-[60%] md:w-[175px] h-[42px] pl-4 pr-1 bg-black text-white font-semibold text-[14px] rounded-full shadow-[0_15px_35px_-10px_rgba(0,0,0,0.35)] transition-shadow duration-300 hover:shadow-[0_20px_40px_-8px_rgba(0,0,0,0.45)] no-underline"
          >
            <span>Contactez-nous</span>
            <div className="w-[30px] h-[30px] bg-[#FF5F25] rounded-full flex items-center justify-center overflow-hidden" style={{ perspective: 1000 }}>
              <motion.div 
                className="flex items-center justify-center w-full h-full"
                variants={arrowFlipVariants}
                animate="animate"
              >
                <ArrowUpRight className="w-3.5 h-3.5 text-white stroke-[2.5]" />
              </motion.div>
            </div>
          </motion.a>
        </div>
      </div>
    </div>
  );
};

export default ComparisonSection;