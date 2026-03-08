import React from 'react';
import { motion } from 'framer-motion';
import PageWrapper from '../components/PageWrapper';

const Gallery = () => {
    // We mix previously uploaded pictures to create a rich gallery.
    // Replace these or add more real URLs naturally
    const images = [
        { src: "/images/1B.jpeg", caption: "Keynote Session" },
        { src: "/images/DSC00355.JPG", caption: "Administration Meeting" },
        { src: "/images/DSC00688.JPG", caption: "Faculty Presentation" },
        { src: "/images/121A7584_Copy.jpg", caption: "Campus Event" },
        { src: "/images/WhatsApp Image 2025-12-31 at 18.28.09.jpeg", caption: "Conference Highlight" },
        { src: "/images/WhatsApp Image 2025-12-31 at 18.28.11.jpeg", caption: "Award Ceremony" }
    ];

    return (
        <PageWrapper>
            <section className="section bg-white">
                <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        style={{ marginBottom: '4rem', textAlign: 'center' }}
                    >
                        <h1 style={{ fontSize: '3.5rem', fontWeight: '800', letterSpacing: '-0.03em', marginBottom: '1rem', color: 'var(--text-main)', fontFamily: 'var(--font-sans)' }}>
                            Gallery
                        </h1>
                        <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto' }}>
                            A visual collection of important moments, posters, and documents.
                        </p>
                    </motion.div>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                        gap: '2rem'
                    }}>
                        {images.map((img, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: idx * 0.1 }}
                                whileHover={{ y: -8, boxShadow: 'var(--shadow-lg)' }}
                                style={{
                                    borderRadius: '20px',
                                    overflow: 'hidden',
                                    boxShadow: 'var(--shadow-md)',
                                    backgroundColor: '#fff',
                                    border: '1px solid var(--border-color)',
                                    display: 'flex',
                                    flexDirection: 'column'
                                }}
                            >
                                <div style={{ height: '300px', width: '100%', overflow: 'hidden' }}>
                                    <img
                                        src={img.src}
                                        alt={img.caption}
                                        style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                                        onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                                        onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                                    />
                                </div>
                                <div style={{ padding: '1.5rem', textAlign: 'center' }}>
                                    <h3 style={{ fontSize: '1.1rem', color: 'var(--text-main)', margin: 0, fontWeight: 500 }}>
                                        {img.caption}
                                    </h3>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </PageWrapper>
    );
};

export default Gallery;
