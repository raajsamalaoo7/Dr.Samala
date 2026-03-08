import React from 'react';
import { motion } from 'framer-motion';
import PageWrapper from '../components/PageWrapper';
import { GraduationCap, Linkedin, Youtube } from 'lucide-react';

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

    return (
        <PageWrapper>
            <section className="section bg-bg-color min-h-screen flex items-center justify-center">
                <div className="container" style={{ maxWidth: '1000px', margin: '0 auto' }}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center mb-16"
                        style={{ marginBottom: '5rem', textAlign: 'center' }}
                    >
                        <h1 style={{ fontSize: '3.5rem', fontWeight: '800', letterSpacing: '-0.03em', marginBottom: '1rem', color: 'var(--text-main)', fontFamily: 'var(--font-sans)' }}>
                            Connect With Me
                        </h1>
                        <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto' }}>
                            Join my expanding network across the digital landscape for insights, research, and collaborative opportunities.
                        </p>
                    </motion.div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
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
                </div>
            </section>
        </PageWrapper>
    );
};

export default Social;
