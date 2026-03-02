import React from 'react';

const eventsList = [
    {
        id: 1,
        title: "Data Treasure Hunt",
        type: "Technical Event",
        theme: "The Analytics Challenge",
        poster: "/events/Event 2.jpeg",
        link: "https://docs.google.com/forms/d/e/1FAIpQLSchSvFaGPe7TLKyXdQnHtQvZKxDgAw8heU0qSbAgCMwr3NSzw/viewform",
        points: [
            "Crack data. Unlock clues. Win the hunt.",
            "Analyze smart. Think fast. Advance rounds.",
            "Turn data into decisions under pressure."
        ],
        coordinators: "Mithuna Malini, Yugadarrshini",
    },
    {
        id: 4,
        title: "Query of Death",
        type: "Technical Event",
        theme: "Debugging a Murder",
        poster: "/events/event 5.jpeg",
        link: "https://docs.google.com/forms/d/e/1FAIpQLSdSmH5uIgPPI9d0IpJdd8NdbdHOBRFrGPWykM4Ij8rvwNtV8w/viewform",
        points: [
            "Debug the crime. Decode the killer.",
            "Every clue is in the code—find it.",
            "Analyze data. Unmask the murderer."
        ],
        coordinators: "Catherine, Melvin",
    },
    {
        id: 2,
        title: "Decode or Conscience?",
        type: "Technical Event",
        theme: "AI vs Human Code Detection",
        poster: "/events/Event 3.jpeg",
        link: "https://docs.google.com/forms/d/e/1FAIpQLSeYTtaDs967BUotBgqDXUdUNcpr7FeI9BclscxvFeT8Y6WfsA/viewform",
        points: [
            "Spot the code. Human or AI?",
            "Perfect code lies. Find why.",
            "Think deeper. Detect smarter.",
            "Not all code is human.",
            "Catch the machine logic."
        ],
        coordinators: "Priyanga, Shaurya",
    },
    {
        id: 3,
        title: "Football Transfer Window",
        type: "Non-Technical",
        theme: "Build your squad. Win the market.",
        poster: "/events/event 4.jpeg",
        link: "https://docs.google.com/forms/d/e/1FAIpQLSe0hIcfLeqoIcGPIkiZO6V5cfU85g8nNAgFjAdWMBBeDRLHMw/viewform",
        points: [
            "Bid smart. Manage better. Dominate.",
            "From quiz to transfers—rule the game.",
            "Think like a manager. Act like a champion.",
            "Strategy. Budget. Victory."
        ],
        coordinators: "Raghunandan, Kishore",
    },
    {
        id: 5,
        title: "The Final Spike",
        type: "Non-Technical",
        theme: "A Valorant Tournament",
        poster: "/events/WhatsApp Image 2026-03-02 at 20.39.44.jpeg",
        link: "https://siva-py.github.io/The-final-spike-event-website/",
        points: [
            "Aim sharp. Play smart. Win big.",
            "Clutch the spike. Dominate the game.",
            "Precision wins. Strategy conquers.",
            "One team. One spike. One champion.",
            "Lock in. Execute. Victory."
        ],
        coordinators: "Siva, Bhagawadh",
    }
];

const EventGallery = () => {
    return (
        <section id="events" className="py-24 px-6 relative z-10 bg-surfaceLight/30 border-t border-white/5">
            <div className="container mx-auto max-w-7xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                        FEATURED <span className="text-neon">EVENTS</span>
                    </h2>
                    <p className="text-gray-400 font-mono border-l-2 border-primary pl-4 inline-block mx-auto max-w-2xl text-left">
                        SCAN the QR Code on the respective event posters to register. Dive into the competition.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {eventsList.map((event) => (
                        <div key={event.id} className="glass-card rounded-2xl overflow-hidden group flex flex-col h-full bg-[#080d1a]">

                            {/* Image Container - Fixed height to ensure consistency, but contains entire poster */}
                            <div className="relative w-full h-[400px] bg-black p-2 flex items-center justify-center border-b border-white/10 group-hover:border-primary/50 transition-colors">
                                <img
                                    src={event.poster}
                                    alt={event.title}
                                    className="max-w-full max-h-full object-contain transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md border border-white/10 text-xs font-bold px-3 py-1 rounded-full text-white">
                                    {event.type}
                                </div>
                            </div>

                            {/* Event Info */}
                            <div className="p-6 flex flex-col flex-1 relative z-20">
                                <p className="text-xs font-mono text-neon mb-2 tracking-widest uppercase">{event.theme}</p>
                                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-primaryLight transition-colors">{event.title}</h3>

                                <ul className="text-sm text-gray-400 mb-6 flex-1 space-y-2">
                                    {event.points.map((point, i) => (
                                        <li key={i} className="flex items-start gap-2">
                                            <span className="text-primary mt-1 text-lg leading-none">•</span>
                                            <span>{point}</span>
                                        </li>
                                    ))}
                                </ul>

                                <div className="mt-auto border-t border-white/10 pt-4 flex items-center justify-between">
                                    <div className="flex flex-col gap-1 text-xs text-gray-500">
                                        <span className="font-semibold text-gray-400 uppercase tracking-widest text-[10px]">Coordinators</span>
                                        <span className="font-mono text-gray-300">{event.coordinators}</span>
                                    </div>
                                    <a href={event.link} target="_blank" rel="noopener noreferrer" className="px-5 py-2 bg-primary hover:bg-primaryLight text-white rounded-lg text-sm font-bold transition-all shadow-[0_0_15px_rgba(26,95,255,0.3)] hover:shadow-[0_0_25px_rgba(0,229,255,0.5)] transform hover:-translate-y-0.5">
                                        Register
                                    </a>
                                </div>                            </div>

                        </div>
                    ))}

                    {/* Workshop Box */}
                    <div className="glass-card rounded-2xl overflow-hidden group flex flex-col h-full bg-gradient-to-br from-[#1a1608] to-[#2a240d] border-[#FFD700]/20 hover:border-[#FFD700]/50">
                        <div className="p-8 flex flex-col flex-1 justify-center items-center text-center h-full">
                            <div className="w-16 h-16 rounded-full bg-[#FFD700]/20 text-[#FFD700] flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(255,215,0,0.3)]">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
                            </div>
                            <h3 className="text-sm font-bold text-gray-400 mb-2 uppercase tracking-widest">Special Session</h3>
                            <h2 className="text-3xl font-bold text-white mb-4">WORKSHOP</h2>
                            <p className="text-[#FFD700] text-xl font-mono border-t border-[#FFD700]/30 pt-4 mt-2">
                                QUANTUM COMPUTING
                            </p>
                            <p className="text-sm text-gray-400 mt-6">
                                Join this exclusive workshop to dive into the future of computation.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default EventGallery;
