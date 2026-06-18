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
      
      {/* ISOLATED ENVIRONMENT FOR NAVBAR & HERO
        This holds the exact curtain window shadow look from your reference images
      */}
      <div 
        className="relative w-full overflow-hidden"
        style={{
          backgroundColor: '#F2F2F2',
          backgroundImage: `
            linear-gradient(135deg, 
              rgba(0, 0, 0, 0.08) 0%, 
              rgba(0, 0, 0, 0) 18%, 
              rgba(0, 0, 0, 0.06) 32%, 
              rgba(0, 0, 0, 0) 48%, 
              rgba(0, 0, 0, 0.09) 58%, 
              rgba(0, 0, 0, 0) 72%,
              rgba(0, 0, 0, 0.06) 85%,
              rgba(0, 0, 0, 0) 100%
            ),
            radial-gradient(circle at 50% -10%, rgba(255, 95, 37, 0.06) 0%, transparent 65%)
          `,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <Navbar />
        <HeroSection />
      </div>

      {/* REST OF THE SITE COMPONENTS */}
      <div className="relative z-10 flex flex-col w-full bg-[#F2F2F2]">
        <ShowcaseSection />
        <WorksSection />
        <ComparisonSection />
        <Footer />
      </div>
      
    </div>
  );
}

export default App;