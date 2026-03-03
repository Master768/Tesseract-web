import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import vitLogo from '../assets/logos/vit-logo-transparent.png';
import tesseractLogo from '../assets/logos/Logo2.png';

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
        <nav
            className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-surface/60 backdrop-blur-2xl border-b border-white/10 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.5)]' : 'bg-transparent py-6'}`}
        >
            <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-3 cursor-pointer"
                >
                    <img src={tesseractLogo} alt="Tesseract Logo" className="h-10 md:h-12 object-contain filter drop-shadow-[0_0_15px_rgba(0,229,255,0.6)] mix-blend-screen" />
                    <span className="text-xl md:text-2xl font-bold tracking-widest text-white drop-shadow-md">
                        TESSERACT
                    </span>
                </motion.div>

                <div className="hidden md:flex items-center gap-10">
                    <motion.a whileHover={{ y: -2 }} href="#about" className="text-gray-300 hover:text-white transition-colors text-sm font-semibold tracking-widest relative group">
                        ABOUT
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-neon transition-all duration-300 group-hover:w-full"></span>
                    </motion.a>
                    <motion.a whileHover={{ y: -2 }} href="#events" className="text-gray-300 hover:text-white transition-colors text-sm font-semibold tracking-widest relative group">
                        EVENTS
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primaryLight transition-all duration-300 group-hover:w-full"></span>
                    </motion.a>

                    {/* VIT Chennai Logo placed inline with the navigation */}
                    <div className="h-10 border-l border-white/20 mx-2"></div>
                    <motion.img
                        whileHover={{ scale: 1.1, filter: "drop-shadow(0 0 10px rgba(255,255,255,0.5))" }}
                        src={vitLogo}
                        alt="VIT Chennai"
                        className="h-12 object-contain mix-blend-screen opacity-90 transition-all duration-300 cursor-pointer"
                    />
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden text-gray-300 hover:text-white hover:bg-white/10 p-2 rounded-xl transition-all"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden absolute top-full left-0 w-full bg-surface/95 backdrop-blur-3xl border-b border-white/10 py-6 px-6 flex flex-col items-center gap-6 shadow-2xl overflow-hidden"
                    >
                        <a href="#about" onClick={() => setMobileMenuOpen(false)} className="text-gray-300 hover:text-white font-medium text-base tracking-wide border-b border-white/5 pb-3 w-full text-center hover:bg-white/5 rounded-lg transition-colors">ABOUT</a>
                        <a href="#events" onClick={() => setMobileMenuOpen(false)} className="text-gray-300 hover:text-white font-medium text-base tracking-wide border-b border-white/5 pb-3 w-full text-center hover:bg-white/5 rounded-lg transition-colors">EVENTS</a>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
