import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';
import tesseractLogo from '../assets/logos/tesseract-cube.png';

const Footer = () => {
    return (
        <footer className="bg-surface border-t border-white/10 pt-16 pb-8 px-6 mt-20">
            <div className="container mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

                {/* Brand */}
                <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-3 mb-2">
                        <img src={tesseractLogo} alt="Tesseract Cube" className="w-12 h-12 object-contain filter drop-shadow-[0_0_15px_rgba(0,229,255,0.6)] animate-pulse-slow" />
                        <span className="text-2xl font-bold tracking-wider text-white">
                            TESSERACT<span className="text-primaryLight">.</span>
                        </span>
                    </div>
                    <p className="text-gray-400 max-w-sm">
                        Crystal Tech Sustainability. Shaping the future with data.
                        Join us for an electrifying showcase of logic, strategy, and skill.
                    </p>
                </div>

                {/* Faculty & HOD */}
                <div className="flex flex-col gap-6">
                    <div>
                        <h4 className="text-white font-bold text-sm tracking-widest mb-3 text-neon">HEAD OF THE DEPARTMENT</h4>
                        <div className="flex items-center justify-between max-w-[260px] text-gray-300">
                            <span className="font-semibold">Dr. Manivannan A</span>
                            <span className="font-mono text-sm text-gray-400">98940 91336</span>
                        </div>
                    </div>
                    <div>
                        <h4 className="text-white font-bold text-sm tracking-widest mb-3 text-neonPink">FACULTY COORDINATORS</h4>
                        <div className="flex flex-col gap-2 text-gray-300">
                            <div className="flex justify-between items-center max-w-[260px]">
                                <span className="font-semibold">Dr. Umamaheswari S</span>
                                <span className="font-mono text-sm text-gray-400">90947 79115</span>
                            </div>
                            <div className="flex justify-between items-center max-w-[260px]">
                                <span className="font-semibold">Dr. G Hannah Grace</span>
                                <span className="font-mono text-sm text-gray-400">98846 23802</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Student Coordinators & Venue */}
                <div className="flex flex-col gap-6">
                    <div>
                        <h4 className="text-white font-bold text-sm tracking-widest mb-3 text-primaryLight">STUDENT COORDINATORS</h4>
                        <div className="flex flex-col gap-2 text-gray-300">
                            <div className="flex justify-between items-center max-w-[260px]">
                                <span className="font-semibold">Nitesh Pradhan</span>
                                <span className="font-mono text-sm text-gray-400">90641 28702</span>
                            </div>
                            <div className="flex justify-between items-center max-w-[260px]">
                                <span className="font-semibold">Chandana N V</span>
                                <span className="font-mono text-sm text-gray-400">77362 82447</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h4 className="text-white font-bold text-sm tracking-widest mb-3">VENUE & DATE</h4>
                        <div className="flex items-center gap-3 text-gray-400 mb-2">
                            <MapPin className="w-5 h-5 text-neon" />
                            <span>VIT Chennai Campus</span>
                        </div>
                        <div className="text-sm font-mono border-l-2 border-primaryLight pl-3 text-gray-400 flex flex-col">
                            <span>March 25, 2026</span>
                            <span>Wednesday</span>
                        </div>
                    </div>
                </div>

            </div>

            <div className="container mx-auto max-w-7xl pt-8 border-t border-white/10 text-center text-gray-500 text-sm flex flex-col items-center gap-2">
                <p>&copy; 2026 Tesseract - VIT Chennai. All rights reserved.</p>
                <p className="opacity-50">Designed for the Future.</p>
            </div>
        </footer>
    );
};

export default Footer;
