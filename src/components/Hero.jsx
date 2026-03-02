import React from 'react';
import { ChevronDown, Zap, BookOpen, Building2, Microchip } from 'lucide-react';

const Hero = () => {
    return (
        <section id="about" className="relative min-h-screen flex flex-col items-center justify-start pt-32 px-6">
            <div className="container mx-auto max-w-5xl text-center z-10 flex flex-col items-center mb-24">

                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-neon mb-8">
                    <Zap className="w-4 h-4" />
                    <span>VIT Chennai • March 25, 2026</span>
                </div>

                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6">
                    <span className="block text-white">CRYSTAL TECH</span>
                    <span className="block text-gradient mt-2 font-mono">TESSERACT'26</span>
                </h1>

                <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12 font-medium">
                    Organised by the Department of Mathematics, School of Advanced Sciences.
                    A flagship data science fest aimed at fostering innovation, collaboration, and practical learning.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center w-full">
                    <a href="#events" className="px-8 py-4 bg-primary text-white font-bold rounded-lg hover:bg-primaryLight hover:shadow-[0_0_30px_rgba(26,95,255,0.6)] transition-all duration-300 transform hover:-translate-y-1">
                        View Challenges
                    </a>
                    <a href="#about-sections" className="px-8 py-4 bg-transparent border border-white/20 text-white font-bold rounded-lg hover:bg-white/5 transition-all duration-300">
                        About Us
                    </a>
                </div>
            </div>

            {/* About Section Below Hero */}
            <div id="about-sections" className="container mx-auto max-w-7xl z-10 grid grid-cols-1 md:grid-cols-3 gap-8 pb-32">

                {/* About VIT */}
                <div className="glass-card p-8 rounded-2xl flex flex-col items-start text-left">
                    <div className="w-12 h-12 rounded-xl bg-primary/20 text-neon flex items-center justify-center mb-6">
                        <Building2 className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4">About VIT Chennai</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                        Established in 2010, VIT Chennai is a premier institution known for academic excellence, innovation, and strong industry collaborations. The campus fosters research-driven learning and prepares students to excel in emerging technologies and global careers. "A place to learn, A Chance to grow."
                    </p>
                </div>

                {/* About SAS */}
                <div className="glass-card p-8 rounded-2xl flex flex-col items-start text-left">
                    <div className="w-12 h-12 rounded-xl bg-neonPink/20 text-neonPink flex items-center justify-center mb-6">
                        <BookOpen className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4">About SAS</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                        The School of Advanced Sciences at VIT Chennai offers a specialized program in Data Science, focusing on statistics, machine learning, artificial intelligence, and real-world problem-solving. The department emphasizes analytical thinking and research to prepare students for the data-driven world.
                    </p>
                </div>

                {/* About Tesseract */}
                <div className="glass-card p-8 rounded-2xl flex flex-col items-start text-left border-neon/30 hover:border-neon shadow-[0_0_15px_rgba(0,229,255,0.1)] hover:shadow-[0_0_30px_rgba(0,229,255,0.2)]">
                    <div className="w-12 h-12 rounded-xl bg-neon/20 text-neon flex items-center justify-center mb-6">
                        <Microchip className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4">About Tesseract</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                        The event serves as a dynamic platform that bridges the gap between academic knowledge and real-world applications in data science, artificial intelligence, and analytics through a blend of workshops, competitions, and expert interactions.
                    </p>
                </div>

            </div>

        </section>
    );
};

export default Hero;
