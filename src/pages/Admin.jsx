import React from 'react';
import { motion } from 'framer-motion';
import PageWrapper from '../components/PageWrapper';

const Admin = () => {
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
                            Institutional Leadership
                        </h1>
                        <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto' }}>
                            Guiding organizations towards excellence through strategic vision and empathetic leadership.
                        </p>
                    </motion.div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr)', gap: '3rem', marginTop: '2rem' }}>
                        <div className="card" style={{ padding: '0', borderRadius: '30px', overflow: 'hidden', backgroundColor: '#fff', border: '1px solid var(--border-color)', boxShadow: 'var(--shadow-lg)' }}>
                            <div style={{ position: 'relative', height: '400px', overflow: 'hidden' }}>
                                {/* Using one of the uploaded images */}
                                <img src="/images/1B.jpeg" alt="Administration" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '2rem', background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)' }}>
                                    <h2 style={{ color: '#fff', fontSize: '2rem', margin: 0 }}>Dean, SoIM</h2>
                                </div>
                            </div>
                            <div style={{ padding: '3rem 2rem' }}>
                                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--primary)' }}>School of Innovation & Management</h3>
                                <p style={{ color: 'var(--text-main)', fontSize: '1.1rem', lineHeight: '1.8' }}>
                                    As the Dean at SoIM, Hyderabad, my focus is on building an ecosystem that nurtures critical thinkers and future-ready leaders. Our curriculum is constantly evolving to integrate the latest advancements in technology and business strategy. My administration philosophy centers around transparency, continuous improvement, and student-first policies.
                                </p>
                            </div>
                        </div>

                        <div className="card glass" style={{ padding: '3rem', borderRadius: '30px', background: 'linear-gradient(135deg, var(--surface) 0%, var(--bg-color) 100%)' }}>
                            <h3 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: 'var(--text-main)' }}>Leadership Highlights</h3>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
                                {[
                                    { title: 'Curriculum Overhaul', desc: 'Introduced AI/ML and digital transformation courses into core curriculum.' },
                                    { title: 'Industry Partnerships', desc: 'Forged 10+ active partnerships with top tech and consulting firms for student placements.' },
                                    { title: 'Faculty Development', desc: 'Spearheaded continuous learning programs for faculty excellence.' },
                                    { title: 'Research Incubation', desc: 'Established funding for student-led innovation and management research.' }
                                ].map((item, idx) => (
                                    <div key={idx} style={{
                                        padding: '1.5rem',
                                        backgroundColor: '#fff',
                                        borderRadius: '20px',
                                        boxShadow: 'var(--shadow-sm)'
                                    }}>
                                        <h4 style={{ color: 'var(--primary)', fontSize: '1.2rem', marginBottom: '0.5rem' }}>{item.title}</h4>
                                        <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', margin: 0 }}>{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </PageWrapper>
    );
};

export default Admin;
