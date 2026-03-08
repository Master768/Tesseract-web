import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import tesseractLogo from '../assets/logos/Logo2.png';

const Footer = () => {
    return (
        <motion.footer
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="bg-black/40 backdrop-blur-xl border-t border-white/10 pt-12 pb-8 px-6 mt-12 relative z-10"
        >
            <div className="container mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-16 mb-8">

                {/* Brand */}
                <div className="flex flex-col gap-6">
                    <div className="flex items-center gap-4 mb-2">
                        <img src={tesseractLogo} alt="Tesseract Logo" className="h-16 object-contain filter drop-shadow-[0_0_20px_rgba(0,229,255,0.6)] mix-blend-screen" />
                        <span className="text-2xl md:text-3xl font-bold tracking-widest text-white drop-shadow-md">
                            TESSERACT
                        </span>
                    </div>
                    <p className="text-xs md:text-sm text-gray-400 max-w-sm leading-relaxed border-l-2 border-white/20 pl-4 bg-white/5 py-2 rounded-r-lg">
                        Crystal Tech Sustainability. Shaping the future with data.
                        Join us for an electrifying showcase of logic, strategy, and skill.
                    </p>

                    {/* Google Maps Location - VIT Chennai (Small Version) */}
                    <div className="w-full mt-4 h-48 rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_15px_rgba(26,95,255,0.15)] bg-black/50 backdrop-blur-md relative group">
                        <div className="absolute inset-0 bg-primary/20 mix-blend-overlay pointer-events-none group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                        <iframe
                            src="https://maps.google.com/maps?q=Vellore+Institute+of+Technology+-+Chennai&t=&z=15&ie=UTF8&iwloc=&output=embed"
                            title="VIT Chennai Location"
                            className="w-full h-full border-0 filter grayscale invert contrast-125 group-hover:filter-none transition-all duration-700"
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>

                {/* Faculty & HOD */}
                <div className="flex flex-col gap-8 bg-white/5 p-6 rounded-2xl border border-white/5">
                    <div>
                        <h4 className="flex items-center gap-2 text-white font-bold text-xs md:text-sm tracking-widest mb-4 text-neon drop-shadow-[0_0_8px_rgba(0,229,255,0.8)]">
                            <span className="w-2 h-2 rounded-full bg-neon animate-ping"></span>
                            HEAD OF THE DEPARTMENT
                        </h4>
                        <div className="flex items-center justify-between w-full bg-black/20 p-3 rounded-xl border border-white/5 gap-2">
                            <span className="font-semibold text-sm md:text-base leading-tight">Dr. Manivannan A</span>
                            <span className="font-mono text-xs md:text-sm text-neon/80 bg-neon/10 px-2 py-1 rounded whitespace-nowrap shrink-0">98940 91336</span>
                        </div>
                    </div>
                    <div>
                        <h4 className="flex items-center gap-2 text-white font-bold text-xs md:text-sm tracking-widest mb-4 text-neonPink drop-shadow-[0_0_8px_rgba(255,0,127,0.8)]">
                            <span className="w-2 h-2 rounded-full bg-neonPink animate-ping"></span>
                            FACULTY COORDINATORS
                        </h4>
                        <div className="flex flex-col gap-3 text-gray-300">
                            <div className="flex justify-between items-center w-full bg-black/20 p-3 rounded-xl border border-white/5 group hover:bg-black/40 transition-colors gap-2">
                                <span className="font-semibold text-sm md:text-base leading-tight">Dr. Umamaheswari S</span>
                                <span className="font-mono text-xs md:text-sm text-neonPink/80 bg-neonPink/10 px-2 py-1 rounded whitespace-nowrap shrink-0">90947 79115</span>
                            </div>
                            <div className="flex justify-between items-center w-full bg-black/20 p-3 rounded-xl border border-white/5 group hover:bg-black/40 transition-colors gap-2">
                                <span className="font-semibold text-sm md:text-base leading-tight">Dr. G Hannah Grace</span>
                                <span className="font-mono text-xs md:text-sm text-neonPink/80 bg-neonPink/10 px-2 py-1 rounded whitespace-nowrap shrink-0">98846 23802</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Student Coordinators & Venue */}
                <div className="flex flex-col gap-8 bg-white/5 p-6 rounded-2xl border border-white/5">
                    <div>
                        <h4 className="flex items-center gap-2 text-white font-bold text-xs md:text-sm tracking-widest mb-4 text-primaryLight drop-shadow-[0_0_8px_rgba(77,132,255,0.8)]">
                            <span className="w-2 h-2 rounded-full bg-primaryLight animate-ping"></span>
                            STUDENT COORDINATORS
                        </h4>
                        <div className="flex flex-col gap-3 text-gray-300">
                            <div className="flex justify-between items-center w-full bg-black/20 p-3 rounded-xl border border-white/5 group hover:bg-black/40 transition-colors gap-2">
                                <span className="font-semibold text-sm md:text-base leading-tight">Nitesh Pradhan</span>
                                <span className="font-mono text-xs md:text-sm text-primaryLight/80 bg-primaryLight/10 px-2 py-1 rounded whitespace-nowrap shrink-0">90641 28702</span>
                            </div>
                            <div className="flex justify-between items-center w-full bg-black/20 p-3 rounded-xl border border-white/5 group hover:bg-black/40 transition-colors gap-2">
                                <span className="font-semibold text-sm md:text-base leading-tight">Chandana N V</span>
                                <span className="font-mono text-xs md:text-sm text-primaryLight/80 bg-primaryLight/10 px-2 py-1 rounded whitespace-nowrap shrink-0">77362 82447</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h4 className="text-white font-bold text-sm tracking-widest mb-4">VENUE & DATE</h4>
                        <div className="flex items-center gap-3 text-gray-300 mb-3 bg-white/5 p-3 rounded-xl border border-white/5">
                            <div className="p-2 bg-neon/10 rounded-lg text-neon">
                                <MapPin className="w-5 h-5" />
                            </div>
                            <span className="font-semibold">VIT Chennai Campus</span>
                        </div>
                        <div className="text-sm font-mono border-l-2 border-primaryLight pl-4 ml-4 text-gray-400 flex flex-col gap-1 py-1">
                            <span className="text-white font-semibold">March 25, 2026</span>
                            <span className="text-primaryLight/70">Wednesday</span>
                        </div>
                    </div>
                </div>

            </div>

            <div className="container mx-auto max-w-7xl pt-8 border-t border-white/10 text-center text-gray-500 text-sm flex flex-col items-center gap-3">
                <p>&copy; 2026 Tesseract - VIT Chennai. All rights reserved.</p>
                <div className="flex items-center gap-2 opacity-60">
                    <span className="w-8 h-[1px] bg-gray-600"></span>
                    <p className="tracking-[0.2em] font-mono text-[10px]">DESIGNED FOR THE FUTURE</p>
                    <span className="w-8 h-[1px] bg-gray-600"></span>
                </div>
            </div>
        </motion.footer >
    );
};

export default Footer;
