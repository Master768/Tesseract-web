import { Shield, MapPin, Calendar, Clock, Lock } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import EventGallery from './components/EventGallery';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-background text-gray-200 font-sans selection:bg-primary/30 selection:text-neon overflow-x-hidden">
      {/* Dynamic Background Effects */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] opacity-20 bg-primaryDark blur-[120px] rounded-full"></div>
        <div className="absolute top-[40%] text-center -left-48 w-[500px] h-[500px] opacity-10 bg-neonPink blur-[150px] rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] opacity-10 bg-neon blur-[150px] rounded-full"></div>
      </div>

      {/* Grid Pattern */}
      <div className="fixed inset-0 bg-grid-pattern opacity-30 pointer-events-none z-0"></div>

      {/* Main Content */}
      <div className="relative z-10">
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
