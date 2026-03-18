import React from 'react';
import { motion } from 'framer-motion';
import { Instagram } from 'lucide-react';
import event1 from '../assets/events/data treasue hunt.jpeg';
import event2 from '../assets/events/query of death.jpeg';
import event3 from '../assets/events/ideathon.jpeg';
import event4 from '../assets/events/foot ball transfer window.jpeg';
import event5 from '../assets/events/volarant.jpeg';
import workshopImage from '../assets/events/workshop(cloud computing).jpeg';

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
        title: "Ideathon",
        type: "Technical Event",
        theme: "Innovate. Build. Transform.",
        poster: event3,
        link: "https://docs.google.com/forms/d/e/1FAIpQLSeYTtaDs967BUotBgqDXUdUNcpr7FeI9BclscxvFeT8Y6WfsA/viewform",
        points: [
            "Brainstorm innovative ideas.",
            "Build prototypes within the deadline.",
            "Pitch your solutions to experts.",
            "Collaborate to create impact.",
            "Code your way to the top."
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
        link: "https://docs.google.com/forms/d/e/1FAIpQLScvCvKkfU5EXiWkjPvhM7RKvPAeML8dshalhUa-tK5oo97EVw/viewform",
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
        <section id="events" className="py-4 px-6 relative z-10 bg-transparent">
            {/* Ambient Background Glows */}
            <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/10 blur-[120px] rounded-full pointer-events-none"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-neonPink/10 blur-[120px] rounded-full pointer-events-none"></div>

            <div className="container mx-auto max-w-7xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-12"
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
                                    className="w-full h-full object-contain bg-[#080d1a]/30 filter drop-shadow-2xl"
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
                                whileHover={{ scale: 1.05 }}
                                className="w-full max-w-[260px] aspect-[4/5] rounded-2xl border border-[#FFD700]/40 shadow-[0_0_30px_rgba(255,215,0,0.3)] group-hover:shadow-[0_0_50px_rgba(255,215,0,0.5)] transition-all duration-500 overflow-hidden mb-8 mx-auto bg-black/50"
                            >
                                <img src={workshopImage} alt="Quantum Computing Workshop" className="w-full h-full object-contain bg-[#080d1a]/30" />
                            </motion.div>
                            <h3 className="text-sm font-bold text-gray-400 mb-3 uppercase tracking-widest">Special Session</h3>
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">WORKSHOP</h2>
                            <div className="bg-black/40 backdrop-blur-sm border border-[#FFD700]/20 rounded-xl p-4 w-full">
                                <p className="text-[#FFD700] text-lg md:text-xl font-mono tracking-wider drop-shadow-[0_0_10px_rgba(255,215,0,0.5)]">
                                    QUANTUM COMPUTING
                                </p>
                            </div>
                            <p className="text-sm text-gray-400 mt-8 mb-6 leading-relaxed">
                                Join this exclusive workshop to dive into the future of computation, algorithms, and cryptography.
                            </p>
                            <motion.a
                                whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(255,215,0,0.6)" }}
                                whileTap={{ scale: 0.95 }}
                                href="https://eventhubcc.vit.ac.in/EventHub/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-8 py-2.5 bg-[#FFD700] hover:bg-[#FFEA00] text-black rounded-xl text-sm font-bold transition-all shadow-[0_0_15px_rgba(255,215,0,0.4)]"
                            >
                                Register
                            </motion.a>
                        </div>
                    </motion.div>

                </motion.div>

                {/* Socials Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    className="mt-12 pt-8 border-t border-white/10 flex flex-col items-center justify-center gap-8 text-center"
                >
                    <h3 className="text-2xl font-bold text-white tracking-widest drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">
                        STAY <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045]">CONNECTED</span>
                    </h3>
                    <motion.a
                        whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(253,29,29,0.4)" }}
                        whileTap={{ scale: 0.95 }}
                        href="https://www.instagram.com/teserractvit"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 px-8 py-4 bg-black/40 backdrop-blur-md rounded-2xl text-white font-bold tracking-wider border border-white/10 hover:border-transparent relative overflow-hidden group"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>
                        <Instagram className="w-6 h-6 relative z-10 text-pink-500 group-hover:text-white transition-colors duration-500" />
                        <span className="relative z-10 group-hover:text-white transition-colors duration-500">@teserractvit</span>
                    </motion.a>
                    <p className="text-gray-400 text-sm font-mono max-w-md">Follow our official Instagram page for the latest updates, event schedules, and behind-the-scenes moments.</p>
                </motion.div>
            </div>
        </section>
    );
};

export default EventGallery;
