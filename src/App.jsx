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
      
      {/* ULTRA-LIGHT PREMIUM SOFT BACKGROUND TRACK */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-[#F2F2F2]">
        <div className="absolute inset-0 opacity-[0.20] mix-blend-normal">
          <video 
            autoPlay
            loop
            muted
            playsInline
            webkit-playsinline="true"
            preload="auto"
            key="bg-video-asset"
            className="w-full h-full object-cover object-center" 
          >
            <source 
              src="https://framerusercontent.com/assets/uPAhBrvT4TotZDInIkbkptDcuqI.mp4" 
              type="video/mp4" 
            />
          </video>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#F2F2F2] via-transparent to-[#F2F2F2]" />
      </div>

      {/* CORE FRAMEWORK INTERFACE LAYER */}
      <div className="relative z-10 flex flex-col w-full">
        <Navbar />
        <HeroSection />
        {/* Reçoit le fondu transparent progressif vers le blanc pur */}
        <ShowcaseSection />
        <WorksSection />
        <ComparisonSection />
        
        
      </div>
      
    </div>
  );
}

export default App;