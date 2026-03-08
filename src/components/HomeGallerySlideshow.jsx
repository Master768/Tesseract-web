import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Image as ImageIcon } from 'lucide-react';
import galleryData from '../assets/galleryData';

const HomeGallerySlideshow = () => {
    // Duplicate the images to create a seamless infinite scroll effect
    const slideshowImages = [...galleryData, ...galleryData, ...galleryData];

    return (
        <section id="gallery-preview" className="py-12 relative z-10 bg-transparent overflow-hidden">
            {/* Ambient Background Glows */}
            <div className="absolute top-1/2 left-0 w-96 h-96 bg-neon/10 blur-[120px] rounded-full pointer-events-none"></div>

            <div className="container mx-auto max-w-7xl px-6 mb-8 flex flex-col md:flex-row items-end justify-between gap-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">
                        LATEST <span className="text-transparent bg-clip-text bg-gradient-to-r from-primaryLight to-neon drop-shadow-[0_0_20px_relative(0,229,255,0.4)]">CAPTURES</span>
                    </h2>
                    <p className="text-sm md:text-base text-gray-300 font-mono border-l-2 border-primary pl-4 max-w-xl">
                        A glimpse into the energy, people, and moments that make Tesseract unforgettable.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                >
                    <Link to="/gallery" className="group flex items-center gap-3 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-white font-bold transition-all backdrop-blur-md shadow-[0_0_20px_rgba(255,255,255,0.05)] hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:border-white/30 truncate">
                        <ImageIcon className="w-5 h-5 text-neon group-hover:scale-110 transition-transform" />
                        View Full Gallery
                    </Link>
                </motion.div>
            </div>

            {/* Infinite Marquee Container */}
            <div className="relative w-full overflow-hidden flex flex-col gap-6 py-4">

                {/* Overlay gradients to fade edges */}
                <div className="absolute top-0 bottom-0 left-0 w-24 md:w-64 bg-gradient-to-r from-background to-transparent z-20 pointer-events-none"></div>
                <div className="absolute top-0 bottom-0 right-0 w-24 md:w-64 bg-gradient-to-l from-background to-transparent z-20 pointer-events-none"></div>

                <Link to="/gallery" className="block w-full">
                    <motion.div
                        initial={{ x: 0 }}
                        animate={{ x: "-33.33%" }}
                        transition={{ ease: "linear", duration: 40, repeat: Infinity }}
                        className="flex gap-6 w-[300%] px-6 cursor-pointer"
                        whileHover={{ animationPlayState: "paused" }}
                    >
                        {slideshowImages.map((media, index) => (
                            <div
                                key={index}
                                className="w-64 md:w-80 flex-shrink-0 aspect-[4/3] rounded-2xl overflow-hidden relative group shadow-lg bg-black/40 border border-white/5 hover:border-primary/50 transition-all"
                            >
                                <img
                                    src={media.src}
                                    alt={`Gallery preview ${index + 1}`}
                                    className="w-full h-full object-cover filter brightness-75 group-hover:brightness-110 transition-all duration-500 scale-100 group-hover:scale-105"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-6">
                                    <span className="text-white font-bold tracking-widest text-sm drop-shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">OPEN GALLERY</span>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </Link>
            </div>
        </section>
    );
};

export default HomeGallerySlideshow;
