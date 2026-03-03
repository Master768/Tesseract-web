import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import EventGallery from './components/EventGallery';
import Footer from './components/Footer';
import TesseractCore from './components/TesseractCore';

function App() {
  return (
    <div className="min-h-screen bg-background text-gray-200 font-sans selection:bg-primary/30 selection:text-neon overflow-x-hidden relative">
      {/* Dynamic 3D Tesseract Background Layer */}
      <TesseractCore />

      {/* Grid Pattern overlay for depth */}
      <div className="fixed inset-0 bg-grid-pattern opacity-[0.15] pointer-events-none z-0"></div>

      {/* Main Content with glassmorphic backing */}
      <div className="relative z-10 bg-black/10 backdrop-blur-[2px]">
        <Navbar />
        <main>
          <Hero />
          <EventGallery />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
