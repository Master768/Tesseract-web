import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import vitLogo from '../assets/logos/vit-chennai.jpg';
import tesseractLogo from '../assets/logos/tesseract-cube.png';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-surface/80 backdrop-blur-md border-b border-white/10 py-4 shadow-xl' : 'bg-transparent py-6'}`}>
            <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <img src={tesseractLogo} alt="Tesseract Cube" className="w-12 h-12 object-contain filter drop-shadow-[0_0_15px_rgba(0,229,255,0.6)] animate-pulse-slow" />
                    <span className="text-2xl font-bold tracking-wider text-white hidden sm:block">
                        TESSERACT<span className="text-primaryLight">.</span>
                    </span>
                </div>

                <div className="hidden md:flex items-center gap-8">
                    <a href="#about" className="text-gray-300 hover:text-white hover:text-shadow-sm transition-colors text-sm font-medium tracking-wide">ABOUT</a>
                    <a href="#events" className="text-gray-300 hover:text-white hover:text-shadow-sm transition-colors text-sm font-medium tracking-wide">EVENTS</a>

                    {/* VIT Chennai Logo placed inline with the navigation */}
                    <div className="h-10 border-l border-white/20 mx-2"></div>
                    <img src={vitLogo} alt="VIT Chennai" className="h-12 object-contain mix-blend-screen opacity-90 hover:opacity-100 transition-opacity drop-shadow-md" />
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden text-gray-300 hover:text-white"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-surface/95 backdrop-blur-lg border-b border-white/10 py-6 px-6 flex flex-col items-center gap-6 shadow-2xl">
                    <a href="#about" onClick={() => setMobileMenuOpen(false)} className="text-gray-300 hover:text-white font-medium text-lg tracking-wide border-b border-white/10 pb-2 w-full text-center">ABOUT</a>
                    <a href="#events" onClick={() => setMobileMenuOpen(false)} className="text-gray-300 hover:text-white font-medium text-lg tracking-wide border-b border-white/10 pb-2 w-full text-center">EVENTS</a>
                    <img src={vitLogo} alt="VIT Chennai" className="h-16 mt-2 object-contain mix-blend-screen opacity-90" />
                </div>
            )}
        </nav>
    );
};

export default Navbar;
