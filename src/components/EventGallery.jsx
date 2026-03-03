import React from 'react';
import { motion } from 'framer-motion';
import event1 from '../assets/events/Event 2.jpeg';
import event2 from '../assets/events/event 5.jpeg';
import event3 from '../assets/events/Event 3.jpeg';
import event4 from '../assets/events/event 4.jpeg';
import event5 from '../assets/events/WhatsApp Image 2026-03-02 at 20.39.44.jpeg';

const eventsList = [
    {
        id: 1,
        title: "Data Treasure Hunt",
        type: "Technical Event",
        theme: "The Analytics Challenge",
        poster: event1,
        link: "https://docs.google.com/forms/d/e/1FAIpQLSchSvFaGPe7TLKyXdQnHtQvZKxDgAw8heU0qSbAgCMwr3NSzw/viewform",
        points: [
            "Crack data. Unlock clues. Win the hunt.",
            "Analyze smart. Think fast. Advance rounds.",
            "Turn data into decisions under pressure."
        ],
        coordinators: [
            "Mithuna Malini. V - 7550213130",
            "Yugadarrshini. S - 9940300514"
        ],
    },
    {
        id: 4,
        title: "Query of Death",
        type: "Technical Event",
        theme: "Debugging a Murder",
        poster: event2,
        link: "https://docs.google.com/forms/d/e/1FAIpQLSdSmH5uIgPPI9d0IpJdd8NdbdHOBRFrGPWykM4Ij8rvwNtV8w/viewform",
        points: [
            "Debug the crime. Decode the killer.",
            "Every clue is in the code—find it.",
            "Analyze data. Unmask the murderer."
        ],
        coordinators: [
            "Catherine Shiny - 999420536",
            "Melvin Immanuel - 9043916443"
        ],
    },
    {
        id: 2,
        title: "Decode or Conscience?",
        type: "Technical Event",
        theme: "AI vs Human Code Detection",
        poster: event3,
        link: "https://docs.google.com/forms/d/e/1FAIpQLSeYTtaDs967BUotBgqDXUdUNcpr7FeI9BclscxvFeT8Y6WfsA/viewform",
        points: [
            "Spot the code. Human or AI?",
            "Perfect code lies. Find why.",
            "Think deeper. Detect smarter.",
            "Not all code is human.",
            "Catch the machine logic."
        ],
        coordinators: [
            "Priyanga B - 8304917545",
            "Shaurya Malhotra - 8218717845"
        ],
    },
    {
        id: 3,
        title: "Football Transfer Window",
        type: "Non-Technical",
        theme: "Build your squad. Win the market.",
        poster: event4,
        link: "https://docs.google.com/forms/d/e/1FAIpQLSe0hIcfLeqoIcGPIkiZO6V5cfU85g8nNAgFjAdWMBBeDRLHMw/viewform",
        points: [
            "Bid smart. Manage better. Dominate.",
            "From quiz to transfers—rule the game.",
            "Think like a manager. Act like a champion.",
            "Strategy. Budget. Victory."
        ],
        coordinators: [
            "Raghunandhan M - 6383237038",
            "Kishore R - 8939555961"
        ],
    },
    {
        id: 5,
        title: "The Final Spike",
        type: "Non-Technical",
        theme: "A Valorant Tournament",
        poster: event5,
        link: "https://siva-py.github.io/The-final-spike-event-website/",
        points: [
            "Aim sharp. Play smart. Win big.",
            "Clutch the spike. Dominate the game.",
            "Precision wins. Strategy conquers.",
            "One team. One spike. One champion.",
            "Lock in. Execute. Victory."
        ],
        coordinators: [
            "Siva DM - 9092220192",
            "Bhagavadh B - 7200861538"
        ],
    }
];

const EventGallery = () => {
    return (
        <section id="events" className="py-24 px-6 relative z-10 bg-transparent">
            {/* Ambient Background Glows */}
            <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/10 blur-[120px] rounded-full pointer-events-none"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-neonPink/10 blur-[120px] rounded-full pointer-events-none"></div>

            <div className="container mx-auto max-w-7xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">
                        FEATURED <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon to-primaryLight drop-shadow-[0_0_20px_relative(0,229,255,0.4)]">EVENTS</span>
                    </h2>
                    <p className="text-sm md:text-base text-gray-300 font-mono border-l-2 border-primary pl-4 md:pl-6 inline-block mx-auto max-w-2xl text-left bg-black/30 backdrop-blur-sm p-4 rounded-r-xl border-y border-r border-white/5">
                        Click the Register button below to participate in the respective events. Dive into the competition.
                    </p>
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={{
                        hidden: {},
                        visible: {
                            transition: {
                                staggerChildren: 0.2
                            }
                        }
                    }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
                >
                    {eventsList.map((event, index) => (
                        <motion.div
                            key={event.id}
                            variants={{
                                hidden: { opacity: 0, scale: 0.8, y: 80, rotateX: -15 },
                                visible: {
                                    opacity: 1,
                                    scale: 1,
                                    y: 0,
                                    rotateX: 0,
                                    transition: { type: "spring", stiffness: 100, damping: 12, mass: 1 }
                                }
                            }}
                            whileHover={{ y: -20, scale: 1.02 }}
                            className="glass-card rounded-3xl overflow-hidden group flex flex-col h-full bg-[#080d1a]/80 backdrop-blur-2xl border border-white/10 hover:border-primary/50 shadow-2xl transition-all duration-500 hover:shadow-[0_0_40px_rgba(26,95,255,0.2)]"
                        >

                            {/* Image Container */}
                            <div className="relative w-full aspect-[3/4] bg-black/60 flex items-center justify-center border-b border-white/10 group-hover:border-primary/50 transition-colors overflow-hidden p-0">
                                <img
                                    src={event.poster}
                                    alt={event.title}
                                    className="w-full h-full object-cover filter drop-shadow-2xl"
                                />
                                <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md border border-white/20 text-xs font-bold px-4 py-1.5 rounded-full text-white shadow-lg">
                                    {event.type}
                                </div>
                            </div>

                            {/* Event Info */}
                            <div className="p-6 md:p-8 flex flex-col flex-1 relative z-20">
                                <p className="text-xs font-mono text-neon mb-3 tracking-widest uppercase">{event.theme}</p>
                                <h3 className="text-xl md:text-2xl font-bold text-white mb-5 group-hover:text-primaryLight transition-colors">{event.title}</h3>

                                <ul className="text-xs sm:text-sm text-gray-400 mb-8 flex-1 space-y-3">
                                    {event.points.map((point, i) => (
                                        <li key={i} className="flex items-start gap-3 group/item">
                                            <span className="text-primary mt-0.5 text-xl leading-none group-hover/item:text-neon transition-colors">•</span>
                                            <span className="group-hover/item:text-gray-300 transition-colors">{point}</span>
                                        </li>
                                    ))}
                                </ul>

                                <div className="mt-auto border-t border-white/10 pt-6 flex items-center justify-between">
                                    <div className="flex flex-col gap-1.5 text-xs">
                                        <span className="font-semibold text-gray-500 uppercase tracking-widest text-[10px]">Coordinators</span>
                                        <div className="font-mono text-gray-300 flex flex-col text-[11px] sm:text-xs">
                                            {event.coordinators.map((c, i) => (
                                                <span key={i}>{c}</span>
                                            ))}
                                        </div>
                                    </div>
                                    <motion.a
                                        whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(0,229,255,0.6)" }}
                                        whileTap={{ scale: 0.95 }}
                                        href={event.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-6 py-2.5 bg-primary hover:bg-primaryLight text-white rounded-xl text-sm font-bold transition-all shadow-[0_0_15px_rgba(26,95,255,0.4)] border border-primaryLight/50"
                                    >
                                        Register
                                    </motion.a>
                                </div>
                            </div>
                        </motion.div>
                    ))}

                    {/* Workshop Box */}
                    <motion.div
                        variants={{
                            hidden: { opacity: 0, scale: 0.8, y: 80, rotateX: -15 },
                            visible: {
                                opacity: 1,
                                scale: 1,
                                y: 0,
                                rotateX: 0,
                                transition: { type: "spring", stiffness: 100, damping: 12, mass: 1 }
                            }
                        }}
                        whileHover={{ y: -20, scale: 1.02 }}
                        className="glass-card rounded-3xl overflow-hidden group flex flex-col h-full bg-gradient-to-br from-[#1a1608]/90 to-[#0A0803]/90 backdrop-blur-2xl border border-[#FFD700]/30 hover:border-[#FFD700]/60 shadow-2xl hover:shadow-[0_0_40px_rgba(255,215,0,0.15)] transition-all duration-500 relative"
                    >
                        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#FFD700]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                        <div className="p-10 flex flex-col flex-1 justify-center items-center text-center h-full relative z-10">
                            <motion.div
                                animate={{ rotate: [0, 5, -5, 0] }}
                                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                                className="w-20 h-20 rounded-2xl bg-[#FFD700]/10 border border-[#FFD700]/30 text-[#FFD700] flex items-center justify-center mb-8 shadow-[0_0_30px_rgba(255,215,0,0.2)] group-hover:shadow-[0_0_40px_rgba(255,215,0,0.4)] transition-shadow"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
                            </motion.div>
                            <h3 className="text-sm font-bold text-gray-400 mb-3 uppercase tracking-widest">Special Session</h3>
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">WORKSHOP</h2>
                            <div className="bg-black/40 backdrop-blur-sm border border-[#FFD700]/20 rounded-xl p-4 w-full">
                                <p className="text-[#FFD700] text-lg md:text-xl font-mono tracking-wider drop-shadow-[0_0_10px_rgba(255,215,0,0.5)]">
                                    QUANTUM COMPUTING
                                </p>
                            </div>
                            <p className="text-sm text-gray-400 mt-8 leading-relaxed">
                                Join this exclusive workshop to dive into the future of computation, algorithms, and cryptography.
                            </p>
                        </div>
                    </motion.div>

                </motion.div>
            </div>
        </section>
    );
};

export default EventGallery;
