import React from 'react';
import { motion } from 'framer-motion';
import PageWrapper from '../components/PageWrapper';
import { GraduationCap, Linkedin, Youtube, PlayCircle } from 'lucide-react';

const Social = () => {
    const socials = [
        {
            name: 'LinkedIn',
            url: 'https://www.linkedin.com/in/raajsamala/',
            icon: <Linkedin size={40} className="mb-4" />,
            color: '#0a66c2',
            desc: 'Connect with my professional network and stay updated deeply on my career journey.'
        },
        {
            name: 'Google Scholar',
            url: 'https://scholar.google.com/citations?user=SWcXqogAAAAJ&hl=en&oi=ao',
            icon: <GraduationCap size={40} className="mb-4" />,
            color: '#4285F4',
            desc: 'View my complete academic publications, citations, and research metrics.'
        },
        {
            name: 'YouTube',
            url: 'https://www.youtube.com/@raajsamala/playlists',
            icon: <Youtube size={40} className="mb-4" />,
            color: '#FF0000',
            desc: 'Watch my lectures, seminars, and thought-leadership videos.'
        }
    ];

    const youtubeLinks = [
        { id: 'pRREkFTj-Kg', title: 'Session 1' },
        { id: 'FEg04fi5H_w', title: 'Session 2' },
        { id: 'KawkgoH0A6U', title: 'Session 3' },
        { id: 'x1fe5POBa8A', title: 'Session 4' }
    ];

    return (
        <PageWrapper>
            <section className="section bg-bg-color min-h-screen py-16">
                <div className="container" style={{ maxWidth: '1000px', margin: '0 auto' }}>

                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        style={{ marginBottom: '4rem', textAlign: 'center' }}
                    >
                        <h1 style={{ fontSize: '3.5rem', fontWeight: '800', letterSpacing: '-0.03em', marginBottom: '1rem', color: 'var(--text-main)', fontFamily: 'var(--font-sans)' }}>
                            Connect With Me
                        </h1>
                        <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto' }}>
                            Explore my lectures, join my network, and dive into my research.
                        </p>
                    </motion.div>

                    {/* Autoplay Video Section */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.1 }}
                        style={{ marginBottom: '4rem', borderRadius: '24px', overflow: 'hidden', boxShadow: 'var(--shadow-lg)' }}
                    >
                        <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
                            <iframe
                                src="https://www.youtube.com/embed/sdIX32tfwmU?autoplay=1&mute=1&loop=1&playlist=sdIX32tfwmU"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                            ></iframe>
                        </div>
                    </motion.div>

                    {/* Social Links Grid */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', marginBottom: '5rem' }}>
                        {socials.map((social, index) => (
                            <motion.a
                                href={social.url}
                                target="_blank"
                                rel="noreferrer"
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 + 0.2 }}
                                className="card"
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    padding: '3rem 2rem',
                                    textAlign: 'center',
                                    textDecoration: 'none',
                                    borderRadius: '32px',
                                    backgroundColor: '#fff',
                                    border: '1px solid var(--border-color)',
                                    transition: 'transform 0.3s cubic-bezier(0.25, 0.8, 0.25, 1), box-shadow 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-10px)';
                                    e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
                                }}
                            >
                                <div style={{ color: social.color, marginBottom: '1.5rem' }}>
                                    {social.icon}
                                </div>
                                <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: 'var(--text-main)' }}>{social.name}</h2>
                                <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: '1.6' }}>{social.desc}</p>

                                <div style={{
                                    marginTop: '2rem',
                                    padding: '0.75rem 2rem',
                                    borderRadius: '99px',
                                    backgroundColor: `${social.color}15`,
                                    color: social.color,
                                    fontWeight: '600',
                                    fontSize: '0.9rem'
                                }}>
                                    Visit Profile
                                </div>
                            </motion.a>
                        ))}
                    </div>

                    {/* Related Videos Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h3 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '2rem', color: 'var(--text-main)', textAlign: 'center' }}>
                            More from the Channel
                        </h3>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem' }}>
                            {youtubeLinks.map((video, idx) => (
                                <motion.a
                                    key={idx}
                                    href={`https://www.youtube.com/watch?v=${video.id}`}
                                    target="_blank"
                                    rel="noreferrer"
                                    whileHover={{ y: -5, boxShadow: 'var(--shadow-md)' }}
                                    style={{
                                        display: 'block',
                                        borderRadius: '16px',
                                        overflow: 'hidden',
                                        textDecoration: 'none',
                                        backgroundColor: '#fff',
                                        border: '1px solid var(--border-color)',
                                        position: 'relative'
                                    }}
                                >
                                    <div style={{ position: 'relative', paddingBottom: '56.25%' }}>
                                        <img
                                            src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                                            alt={video.title}
                                            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }}
                                        />
                                        <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'background-color 0.2s' }}
                                            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.4)'}
                                            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.2)'}
                                        >
                                            <PlayCircle size={48} color="#fff" strokeWidth={1.5} />
                                        </div>
                                    </div>
                                    <div style={{ padding: '1rem' }}>
                                        <h4 style={{ margin: 0, color: 'var(--text-main)', fontSize: '0.95rem', fontWeight: 600 }}>Watch Lecture</h4>
                                        <p style={{ margin: '0.25rem 0 0', color: 'var(--primary)', fontSize: '0.85rem', fontWeight: 500 }}>on YouTube</p>
                                    </div>
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>

                </div>
            </section>
        </PageWrapper>
    );
};

export default Social;
