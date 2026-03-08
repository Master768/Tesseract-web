import React from 'react';
import { Zap, BookOpen, Building2, Microchip } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section id="about" className="relative min-h-screen flex flex-col items-center justify-start pt-32 px-6 overflow-hidden">
            <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="container mx-auto max-w-5xl text-center z-10 flex flex-col items-center mb-24 relative"
            >
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-black/40 backdrop-blur-xl border border-white/20 text-xs sm:text-sm font-medium text-neon mb-8 shadow-[0_0_20px_rgba(0,229,255,0.2)]"
                >
                    <Zap className="w-4 h-4 animate-pulse" />
                    <span className="tracking-wide">VIT Chennai • March 25, 2026</span>
                </motion.div>

                <motion.h1
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: {},
                        visible: {
                            transition: {
                                staggerChildren: 0.1,
                                delayChildren: 0.2
                            }
                        }
                    }}
                    className="text-4xl md:text-6xl lg:text-8xl font-bold tracking-tight mb-6"
                >
                    <span className="block text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]">
                        {Array.from("CRYSTAL TECH").map((char, index) => (
                            <motion.span
                                key={`char1-${index}`}
                                variants={{
                                    hidden: { display: "none" },
                                    visible: { display: "inline-block" }
                                }}
                            >
                                {char === " " ? "\u00A0" : char}
                            </motion.span>
                        ))}
                    </span>
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-neon via-primaryLight to-neonPink mt-2 font-mono drop-shadow-[0_0_30px_rgba(26,95,255,0.6)] animate-pulse-slow">
                        {Array.from("TESSERACT'26").map((char, index) => (
                            <motion.span
                                key={`char2-${index}`}
                                variants={{
                                    hidden: { display: "none" },
                                    visible: { display: "inline-block" }
                                }}
                            >
                                {char}
                            </motion.span>
                        ))}
                        <motion.span
                            variants={{
                                hidden: { opacity: 0 },
                                visible: { opacity: 1, transition: { repeat: Infinity, duration: 0.6, repeatType: "reverse" } }
                            }}
                            className="inline-block w-1 h-[0.9em] bg-neonPink ml-2 align-middle"
                        />
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="text-base md:text-lg lg:text-xl text-gray-300 max-w-2xl mx-auto mb-12 font-medium bg-black/30 backdrop-blur-md p-6 rounded-2xl border border-white/10 shadow-2xl"
                >
                    Organised by the Department of Mathematics, School of Advanced Sciences.
                    A flagship data science fest aimed at fostering innovation, collaboration, and practical learning.
                </motion.p>

                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    className="flex flex-col sm:flex-row gap-6 justify-center w-full"
                >
                    <motion.a
                        whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(26,95,255,0.8)" }}
                        whileTap={{ scale: 0.95 }}
                        href="#events"
                        className="px-6 py-3 md:px-8 md:py-4 bg-primary/90 backdrop-blur-lg text-white font-bold rounded-xl border border-primaryLight/50 shadow-[0_0_20px_rgba(26,95,255,0.5)] transition-all duration-300 text-sm md:text-base"
                    >
                        View Challenges
                    </motion.a>
                    <motion.a
                        whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)", boxShadow: "0 0 20px rgba(255,255,255,0.2)" }}
                        whileTap={{ scale: 0.95 }}
                        href="#about-sections"
                        className="px-6 py-3 md:px-8 md:py-4 bg-black/40 backdrop-blur-lg border border-white/20 text-white font-bold rounded-xl transition-all duration-300 text-sm md:text-base"
                    >
                        About Us
                    </motion.a>
                </motion.div>
            </motion.div>

            {/* About Section Below Hero */}
            <div id="about-sections" className="container mx-auto max-w-7xl z-10 grid grid-cols-1 md:grid-cols-3 gap-8 pb-12">
                {[
                    {
                        icon: <Building2 className="w-7 h-7" />,
                        title: "About VIT Chennai",
                        color: "primary",
                        delay: 0.2,
                        desc: "Established in 2010, VIT Chennai is a premier institution known for academic excellence, innovation, and strong industry collaborations. The campus fosters research-driven learning and prepares students to excel in emerging technologies."
                    },
                    {
                        icon: <BookOpen className="w-7 h-7" />,
                        title: "About SAS",
                        color: "neonPink",
                        delay: 0.4,
                        desc: "The School of Advanced Sciences at VIT Chennai offers a specialized program in Data Science, focusing on statistics, machine learning, artificial intelligence, and real-world problem-solving to prepare students for the data-driven world."
                    },
                    {
                        icon: <Microchip className="w-7 h-7" />,
                        title: "About Tesseract",
                        color: "neon",
                        delay: 0.6,
                        desc: "The event serves as a dynamic platform that bridges the gap between academic knowledge and real-world applications in data science, artificial intelligence, and analytics through a blend of workshops, competitions, and expert interactions."
                    }
                ].map((card, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: card.delay }}
                        whileHover={{ y: -10 }}
                        className="glass-card p-8 rounded-3xl flex flex-col items-start text-left bg-[#0A1220]/70 backdrop-blur-2xl border border-white/10 hover:border-white/30 shadow-2xl relative overflow-hidden group"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className={`w-14 h-14 rounded-2xl bg-black/50 border border-white/10 text-${card.color} flex items-center justify-center mb-6 shadow-[0_0_25px_rgba(255,255,255,0.05)] group-hover:shadow-[0_0_25px_currentColor] transition-all duration-500`}>
                            {card.icon}
                        </div>
                        <h3 className="text-xl md:text-2xl font-bold text-white mb-4 z-10">{card.title}</h3>
                        <p className="text-gray-400 text-sm leading-relaxed z-10 group-hover:text-gray-300 transition-colors">
                            {card.desc}
                        </p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Hero;
