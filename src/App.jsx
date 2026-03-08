import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import TesseractCore from './components/TesseractCore';
import HomePage from './pages/HomePage';
import GalleryPage from './pages/GalleryPage';

// Scroll to top helper
const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-background text-gray-200 font-sans selection:bg-primary/30 selection:text-neon overflow-x-hidden relative">
        {/* Dynamic 3D Tesseract Background Layer */}
        <TesseractCore />

        {/* Grid Pattern overlay for depth */}
        <div className="fixed inset-0 bg-grid-pattern opacity-[0.15] pointer-events-none z-0"></div>

        {/* Main Content with glassmorphic backing */}
        <div className="relative z-10 bg-black/10 backdrop-blur-[2px]">
          <Navbar />

          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/gallery" element={<GalleryPage />} />
          </Routes>

          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
