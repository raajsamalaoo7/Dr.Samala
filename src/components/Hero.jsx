import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section id="home" className="hero-section" style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            position: 'relative',
            overflow: 'hidden',
            paddingTop: 'var(--nav-height)'
        }}>
            <div className="container" style={{
                display: 'grid',
                gridTemplateColumns: '1fr',
                gap: '3rem',
                alignItems: 'center',
                zIndex: 10
            }}>
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    style={{ maxWidth: '600px' }}
                >
                    <span style={{ color: 'var(--accent)', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '1rem', display: 'block' }}>
                        Academician • Administrator • Author • Mentor
                    </span>
                    <h1 style={{ fontSize: 'clamp(3rem, 5vw, 4.5rem)', marginBottom: '1.5rem', lineHeight: '1.1' }}>
                        Dr. Samala Nagaraj
                    </h1>
                    <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', marginBottom: '2rem', lineHeight: '1.8' }}>
                        "If we are teaching today's learners like yesterday, we are spoiling their future."
                        <br /><br />
                        Dean & Professor at School of Innovation & Management (SoIM), Hyderabad with over 23 years of experience shaping the future of education.
                    </p>
                    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                        <a href="#about" className="btn btn-primary">Discover My Journey</a>
                        <a href="#contact" className="btn btn-outline">Collab & Connect</a>
                    </div>
                </motion.div>

                {/* Abstract Background Elements */}
                <div style={{ position: 'absolute', top: '10%', right: '-5%', zIndex: -1 }}>
                    <motion.div
                        animate={{
                            y: [0, -20, 0],
                            rotate: [0, 5, 0]
                        }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                        style={{
                            width: '500px',
                            height: '500px',
                            background: 'radial-gradient(circle, var(--primary-light) 0%, transparent 70%)',
                            opacity: 0.1,
                            borderRadius: '50%'
                        }}
                    />
                </div>
                <div style={{ position: 'absolute', bottom: '-10%', left: '10%', zIndex: -1 }}>
                    <motion.div
                        animate={{
                            y: [0, 20, 0],
                            scale: [1, 1.05, 1]
                        }}
                        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                        style={{
                            width: '400px',
                            height: '400px',
                            background: 'radial-gradient(circle, var(--accent) 0%, transparent 70%)',
                            opacity: 0.08,
                            borderRadius: '50%'
                        }}
                    />
                </div>
            </div>

            <style>{`
        @media (min-width: 768px) {
          .hero-section .container {
            grid-template-columns: 1fr 1fr;
          }
        }
      `}</style>
        </section>
    );
};

export default Hero;
