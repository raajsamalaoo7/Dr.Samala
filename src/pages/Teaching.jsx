import React from 'react';
import { motion } from 'framer-motion';
import PageWrapper from '../components/PageWrapper';

const Teaching = () => {
    return (
        <PageWrapper>
            <section className="section bg-white">
                <div className="container" style={{ maxWidth: '1000px', margin: '0 auto' }}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center mb-12"
                        style={{ marginBottom: '4rem', textAlign: 'center' }}
                    >
                        <h1 style={{ fontSize: '3.5rem', fontWeight: '800', letterSpacing: '-0.03em', marginBottom: '1rem', color: 'var(--text-main)', fontFamily: 'var(--font-sans)' }}>
                            Empowering Minds
                        </h1>
                        <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto' }}>
                            Dedicated to fostering academic excellence, innovation, and leadership among the next generation of students.
                        </p>
                    </motion.div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '3rem', marginTop: '2rem' }}>
                        <div className="card" style={{ padding: '0', borderRadius: '30px', overflow: 'hidden', backgroundColor: '#fff', border: '1px solid var(--border-color)', boxShadow: 'var(--shadow-lg)' }}>
                            <div style={{ position: 'relative', height: '400px', overflow: 'hidden' }}>
                                {/* Using one of the uploaded images */}
                                <img src="/images/DSC00355.JPG" alt="Teaching" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '2rem', background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)' }}>
                                    <h2 style={{ color: '#fff', fontSize: '2rem', margin: 0 }}>Interactive Learning</h2>
                                </div>
                            </div>
                            <div style={{ padding: '3rem 2rem' }}>
                                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--primary)' }}>Academic Focus</h3>
                                <p style={{ color: 'var(--text-main)', fontSize: '1.1rem', lineHeight: '1.8' }}>
                                    My teaching philosophy bridges the gap between theoretical knowledge and practical application. I specialize in teaching advanced courses in Leadership, Innovation Management, and Strategy. Through interactive case studies, real-world projects, and engaging seminar discussions, I empower students to think critically and lead courageously in complex business environments.
                                </p>
                            </div>
                        </div>

                        <div className="card" style={{ padding: '3rem', borderRadius: '30px', backgroundColor: 'var(--bg-color)' }}>
                            <h3 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: 'var(--text-main)' }}>Key Teaching Experience</h3>
                            <ul style={{ listStyleType: 'none', margin: 0, padding: 0 }}>
                                {['Professor of Business Management', 'Corporate Strategy Seminars', 'Innovation & Change Leadership', 'Executive Education Sessions'].map((item, idx) => (
                                    <li key={idx} style={{
                                        padding: '1.5rem',
                                        backgroundColor: '#fff',
                                        borderRadius: '16px',
                                        marginBottom: '1rem',
                                        fontSize: '1.2rem',
                                        fontWeight: '500',
                                        boxShadow: 'var(--shadow-sm)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '1rem'
                                    }}>
                                        <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: 'var(--primary)' }}></div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </PageWrapper>
    );
};

export default Teaching;
