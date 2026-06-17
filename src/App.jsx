import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ComparisonSection from './components/ComparisonSection';
import WorksSection from './components/WorksSection'; 
import ShowcaseSection from './components/ShowcaseSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative min-h-screen w-full bg-[#F2F2F2] font-sans antialiased overflow-x-hidden select-none">
      
      {/* ULTRA-LIGHT PREMIUM AMBIENT LIGHT BACKGROUND (Replaced heavy video) */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-[#F2F2F2]">
        
        {/* Top Left Soft Glow */}
        <div className="absolute top-[-20%] left-[-10%] w-[70vw] h-[70vw] rounded-full bg-gradient-to-br from-[#FF5F25]/10 to-transparent blur-[120px] opacity-70" />
        
        {/* Center/Right Subtle Ambient Light */}
        <div className="absolute top-[30%] right-[-20%] w-[80vw] h-[80vw] rounded-full bg-gradient-to-tl from-[#111111]/5 via-[#FF5F25]/4 to-transparent blur-[150px] opacity-60" />
        
        {/* Bottom Left Soft Balance Glow */}
        <div className="absolute bottom-[-10%] left-[-20%] w-[60vw] h-[60vw] rounded-full bg-gradient-to-tr from-[#111111]/5 to-transparent blur-[100px] opacity-50" />

        {/* Clean Vignette Layer overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#F2F2F2] via-transparent to-[#F2F2F2]" />
      </div>

      {/* CORE FRAMEWORK INTERFACE LAYER */}
      <div className="relative z-10 flex flex-col w-full">
        <Navbar />
        <HeroSection />
        <ShowcaseSection />
        <WorksSection />
        <ComparisonSection />
        <Footer />
      </div>
      
    </div>
  );
}

export default App;