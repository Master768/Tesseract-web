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
                    <img src={vitLogo} alt="VIT Chennai" className="h-10 object-contain rounded-md" />

                    <a href="#events" className="px-6 py-2 bg-primary/20 hover:bg-primary/40 border border-primary/50 text-white rounded-full font-medium transition-all shadow-[0_0_15px_rgba(26,95,255,0.3)] hover:shadow-[0_0_25px_rgba(0,229,255,0.5)]">
                        Explore Events
                    </a>
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
                <div className="md:hidden absolute top-full left-0 w-full bg-surface/95 backdrop-blur-lg border-b border-white/10 py-4 px-6 flex flex-col gap-4 shadow-2xl">
                    <a href="#about" onClick={() => setMobileMenuOpen(false)} className="text-gray-300 hover:text-white py-2 font-medium">ABOUT</a>
                    <a href="#events" onClick={() => setMobileMenuOpen(false)} className="text-gray-300 hover:text-white py-2 font-medium">EVENTS</a>
                    <a href="#events" onClick={() => setMobileMenuOpen(false)} className="w-full text-center py-3 bg-primary/20 border border-primary/50 text-white rounded-lg font-medium mt-2">
                        Explore Events
                    </a>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
