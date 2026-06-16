import React, { useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ComparisonSection from './components/ComparisonSection';
import WorksSection from './components/WorksSection'; 
import ShowcaseSection from './components/ShowcaseSection';
import Footer from './components/Footer';

function App() {
  const videoRef = useRef(null);

  useEffect(() => {
    // Force the video to play programmatically to bypass mobile restrictions
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.log("Video autoplay was prevented by the browser:", error);
      });
    }
  }, []);

  return (
    <div className="relative min-h-screen w-full bg-[#F2F2F2] font-sans antialiased overflow-x-hidden select-none">
      
      {/* ULTRA-LIGHT PREMIUM SOFT BACKGROUND TRACK */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-[#F2F2F2]">
        <div className="absolute inset-0 opacity-[0.20] mix-blend-normal">
          <video 
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            controls={false} /* Explicitly hides mobile native overlays */
            disablePictureInPicture /* Prevents random floating video boxes on mobile */
            webkit-playsinline="true"
            preload="auto"
            key="bg-video-asset"
            className="w-full h-full object-cover object-center pointer-events-none" 
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
        <ShowcaseSection />
        <WorksSection />
        <ComparisonSection />
        <Footer /> {/* Added Footer back since you imported it! */}
      </div>
      
    </div>
  );
}

export default App;