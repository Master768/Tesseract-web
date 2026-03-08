import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, X, ChevronLeft, ChevronRight } from 'lucide-react';
import galleryData from '../assets/galleryData';

const GalleryPage = () => {
    const [selectedMedia, setSelectedMedia] = useState(null);

    const openLightbox = (index) => {
        setSelectedMedia(index);
        document.body.style.overflow = 'hidden';
    };

    const closeLightbox = () => {
        setSelectedMedia(null);
        document.body.style.overflow = 'auto';
    };

    const nextMedia = (e) => {
        e.stopPropagation();
        setSelectedMedia((prev) => (prev === galleryData.length - 1 ? 0 : prev + 1));
    };

    const prevMedia = (e) => {
        e.stopPropagation();
        setSelectedMedia((prev) => (prev === 0 ? galleryData.length - 1 : prev - 1));
    };

    return (
        <div className="min-h-screen pt-24 pb-12 px-6 relative z-10">
            {/* Header */}
            <div className="relative z-50 container mx-auto max-w-7xl mb-12 flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">
                        MEDIA <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon to-primaryLight">GALLERY</span>
                    </h1>
                    <p className="text-gray-400 font-mono text-sm">A collection of moments from Tesseract.</p>
                </div>
                <Link to="/" className="flex items-center gap-2 px-5 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-white font-medium transition-all group backdrop-blur-md">
                    <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                    Back to Home
                </Link>
            </div>

            {/* Masonry Grid */}
            <div className="container mx-auto max-w-7xl">
                <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
                    {galleryData.map((media, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.05 }}
                            whileHover={{ scale: 1.02, y: -5 }}
                            className="relative rounded-2xl overflow-hidden cursor-pointer group break-inside-avoid shadow-lg bg-black/40 border border-white/5 hover:border-primary/50 transition-all"
                            onClick={() => openLightbox(index)}
                        >
                            <img
                                src={media.src}
                                alt={`Gallery item ${index + 1}`}
                                className="w-full h-auto object-cover flex-1 opacity-100 group-hover:scale-105 transition-all duration-500"
                                loading="lazy"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                <span className="text-white font-mono text-xs opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                                    Click to view
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Lightbox Modal rendered via Portal to escape stacking context */}
            {typeof document !== 'undefined' && createPortal(
                <AnimatePresence>
                    {selectedMedia !== null && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-[9999] bg-black/95 backdrop-blur-3xl flex items-center justify-center p-4 md:p-8"
                            onClick={closeLightbox}
                        >
                            {/* Close Button */}
                            <button className="absolute top-6 right-6 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white backdrop-blur-md transition-colors z-[10000]">
                                <X className="w-6 h-6" />
                            </button>

                            <div className="relative w-full h-full max-w-6xl flex items-center justify-center" onClick={(e) => e.stopPropagation()}>

                                {/* Prev Button */}
                                <button
                                    onClick={prevMedia}
                                    className="absolute left-0 md:-left-12 p-3 bg-white/5 hover:bg-white/20 rounded-full text-white backdrop-blur-md transition-colors z-[10000] transform -translate-y-1/2 top-1/2"
                                >
                                    <ChevronLeft className="w-8 h-8 md:w-10 md:h-10" />
                                </button>

                                {/* Image */}
                                <motion.img
                                    key={selectedMedia}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                                    src={galleryData[selectedMedia].src}
                                    alt={`Gallery item ${selectedMedia + 1}`}
                                    className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/5"
                                />

                                {/* Next Button */}
                                <button
                                    onClick={nextMedia}
                                    className="absolute right-0 md:-right-12 p-3 bg-white/5 hover:bg-white/20 rounded-full text-white backdrop-blur-md transition-colors z-[10000] transform -translate-y-1/2 top-1/2"
                                >
                                    <ChevronRight className="w-8 h-8 md:w-10 md:h-10" />
                                </button>
                            </div>

                            {/* Counter */}
                            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 px-4 py-2 bg-black/50 backdrop-blur-md rounded-full border border-white/10 text-white font-mono text-sm z-[10000]">
                                {selectedMedia + 1} / {galleryData.length}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>,
                document.body
            )}
        </div>
    );
};

export default GalleryPage;
