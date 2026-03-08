import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PageWrapper from '../components/PageWrapper';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const Gallery = () => {
    // List of uploaded images found in public/images
    const images = [
        "/images/121A7584_Copy.jpg",
        "/images/1647336215452.jpeg",
        "/images/1719313183941.jpeg",
        "/images/1760081559429.jpeg",
        "/images/1764585950745.jpeg",
        "/images/1765347190133.jpeg",
        "/images/1B.jpeg",
        "/images/8L0A7545 - Copy.jpg",
        "/images/DSC00355.JPG",
        "/images/DSC00672.jpg",
        "/images/DSC00674.jpg",
        "/images/DSC00688.JPG",
        "/images/P2.jpeg",
        "/images/WhatsApp Image 2025-12-31 at 18.28.09.jpeg",
        "/images/WhatsApp Image 2025-12-31 at 18.28.10.jpeg",
        "/images/WhatsApp Image 2025-12-31 at 18.28.11.jpeg",
        "/images/WhatsApp Image 2025-12-31 at 18.28.14 (1).jpeg",
        "/images/WhatsApp Image 2025-12-31 at 18.28.14 (2).jpeg",
        "/images/WhatsApp Image 2025-12-31 at 18.28.15.jpeg",
        "/images/WhatsApp Image 2025-12-31 at 18.28.16.jpeg",
        "/images/WhatsApp Image 2025-12-31 at 18.28.18 (1).jpeg",
        "/images/WhatsApp Image 2025-12-31 at 18.28.18 (2).jpeg",
        "/images/WhatsApp Image 2025-12-31 at 18.28.19 (1).jpeg",
        "/images/WhatsApp Image 2025-12-31 at 18.40.20 (2).jpeg",
        "/images/WhatsApp Image 2026-03-03 at 20.21.25.jpeg",
        "/images/WhatsApp Image 2026-03-06 at 15.35.53.jpeg",
        "/images/outstanding_paper_award_linkedin.jpg"
    ];

    const [selectedIndex, setSelectedIndex] = useState(null);

    // Handle Keyboard navigation for Lightbox
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (selectedIndex === null) return;
            if (e.key === 'Escape') setSelectedIndex(null);
            if (e.key === 'ArrowRight') nextSlide();
            if (e.key === 'ArrowLeft') prevSlide();
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [selectedIndex]);

    const nextSlide = () => {
        setSelectedIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    const prevSlide = () => {
        setSelectedIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    return (
        <PageWrapper>
            <section className="section bg-white">
                <div className="container" style={{ maxWidth: '1400px', margin: '0 auto' }}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        style={{ marginBottom: '4rem', textAlign: 'center' }}
                    >
                        <h1 style={{ fontSize: '3.5rem', fontWeight: '800', letterSpacing: '-0.03em', marginBottom: '1rem', color: 'var(--text-main)', fontFamily: 'var(--font-sans)' }}>
                            Gallery
                        </h1>
                        <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto' }}>
                            A visual collection of important moments, events, and milestones.
                        </p>
                    </motion.div>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                        gridAutoRows: '280px',
                        gap: '1.5rem',
                        padding: '1rem'
                    }}>
                        {images.map((src, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: (idx % 10) * 0.05 }}
                                whileHover={{ y: -8 }}
                                onClick={() => setSelectedIndex(idx)}
                                style={{
                                    borderRadius: '16px',
                                    overflow: 'hidden',
                                    // LinkedIn blue shadow base: #0a66c2
                                    boxShadow: '0 10px 30px -10px rgba(10, 102, 194, 0.4), 0 4px 10px -4px rgba(10, 102, 194, 0.2)',
                                    cursor: 'pointer',
                                    position: 'relative',
                                    backgroundColor: '#000'
                                }}
                            >
                                <img
                                    src={src}
                                    alt={`Gallery image ${idx + 1}`}
                                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease', opacity: 0.95 }}
                                    onMouseOver={(e) => {
                                        e.currentTarget.style.transform = 'scale(1.1)';
                                        e.currentTarget.style.opacity = '1';
                                    }}
                                    onMouseOut={(e) => {
                                        e.currentTarget.style.transform = 'scale(1)';
                                        e.currentTarget.style.opacity = '0.95';
                                    }}
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Lightbox / Slider Overlay */}
            <AnimatePresence>
                {selectedIndex !== null && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        style={{
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            backgroundColor: 'rgba(0,0,0,0.92)',
                            zIndex: 9999,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                    >
                        {/* Close Button */}
                        <button
                            onClick={() => setSelectedIndex(null)}
                            style={{ position: 'absolute', top: '20px', right: '30px', background: 'none', border: 'none', color: '#fff', cursor: 'pointer', zIndex: 10000 }}
                        >
                            <X size={36} />
                        </button>

                        {/* Navigation Buttons for Desktop (Left) */}
                        <button
                            className="hidden-mobile-btn"
                            onClick={(e) => { e.stopPropagation(); prevSlide(); }}
                            style={{ position: 'absolute', left: '20px', background: 'rgba(255,255,255,0.1)', border: 'none', borderRadius: '50%', color: '#fff', padding: '10px', cursor: 'pointer', zIndex: 10000, transition: 'background 0.2s' }}
                            onMouseOver={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.3)'}
                            onMouseOut={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
                        >
                            <ChevronLeft size={36} />
                        </button>

                        {/* Navigation Buttons for Desktop (Right) */}
                        <button
                            className="hidden-mobile-btn"
                            onClick={(e) => { e.stopPropagation(); nextSlide(); }}
                            style={{ position: 'absolute', right: '20px', background: 'rgba(255,255,255,0.1)', border: 'none', borderRadius: '50%', color: '#fff', padding: '10px', cursor: 'pointer', zIndex: 10000, transition: 'background 0.2s' }}
                            onMouseOver={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.3)'}
                            onMouseOut={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
                        >
                            <ChevronRight size={36} />
                        </button>

                        {/* Image Container */}
                        <motion.div
                            key={selectedIndex}
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -50 }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            style={{
                                width: '100%',
                                height: '100%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                position: 'relative'
                            }}
                            onClick={() => setSelectedIndex(null)}
                        >
                            {/* Adding a click area on left and right side of image for easy mobile jumping without arrows */}
                            <div
                                style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '30%', zIndex: 20 }}
                                onClick={(e) => { e.stopPropagation(); prevSlide(); }}
                            />

                            <img
                                src={images[selectedIndex]}
                                alt="Full screen preview"
                                style={{
                                    maxWidth: '90%',
                                    maxHeight: '90%',
                                    objectFit: 'contain',
                                    borderRadius: '8px',
                                    boxShadow: '0 25px 50px -12px rgba(10, 102, 194, 0.5)', // LinkedIn blue shadow
                                    pointerEvents: 'none' // allow clicks to pass to the areas underneath
                                }}
                            />

                            <div
                                style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '30%', zIndex: 20 }}
                                onClick={(e) => { e.stopPropagation(); nextSlide(); }}
                            />
                        </motion.div>

                        {/* Mobile counter indicator */}
                        <div style={{ position: 'absolute', bottom: '20px', color: '#fff', opacity: 0.7, fontSize: '0.9rem', letterSpacing: '2px' }}>
                            {selectedIndex + 1} / {images.length}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <style>{`
                @media (max-width: 768px) {
                    .hidden-mobile-btn { display: none !important; }
                }
            `}</style>
        </PageWrapper>
    );
};

export default Gallery;
