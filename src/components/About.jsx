import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Award, Link as LinkIcon, Briefcase } from 'lucide-react';

const About = () => {
    const experiences = [
        {
            title: "Dean & Professor",
            organization: "School of Innovation & Management (SoIM)",
            period: "Sep 2022 - Present",
            description: "Spearheading a New B-School for Women. Onboarding advisory members, complying with AICTE regulations, and driving 14+ international MoUs."
        },
        {
            title: "Associate Dean (MBA)",
            organization: "Woxsen University",
            period: "Dec 2019 - Aug 2022",
            description: "Chair of University R&D. Directed the Executive MBA program. Procured consultancy projects and streamlined research centers."
        },
        {
            title: "Ph.D. Scholar (Marketing)",
            organization: "University of Hyderabad",
            period: "Jul 2014 - Jan 2020",
            description: "Thesis: 'Customer-Brand Engagement with Fashion Brands through Online Brand Communities in India'. UGC-NET & JRF qualified."
        }
    ];

    return (
        <section id="about" className="section" style={{ backgroundColor: '#fff' }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title">About Me</h2>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                        gap: '3rem',
                        marginTop: '3rem'
                    }}>
                        {/* Professional Summary */}
                        <div className="card glass" style={{ padding: '2rem', borderRadius: '1rem', background: '#f8fafc' }}>
                            <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem', fontSize: '1.5rem' }}>
                                <Briefcase color="var(--primary)" /> Professional Journey
                            </h3>
                            <p style={{ color: 'var(--text-muted)', marginBottom: '1rem' }}>
                                With a robust 23 years spanning administration, research, and teaching, I have dedicated my career to advancing Marketing & Analytics education.
                            </p>
                            <ul style={{ listStyle: 'none', paddingLeft: 0, display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                                <li style={{ display: 'flex', alignItems: 'start', gap: '0.5rem' }}>
                                    <span style={{ color: 'var(--accent)' }}>•</span>
                                    <span>Successfully spearheading a New B-School for Women as founding Dean.</span>
                                </li>
                                <li style={{ display: 'flex', alignItems: 'start', gap: '0.5rem' }}>
                                    <span style={{ color: 'var(--accent)' }}>•</span>
                                    <span>Pursuing Graduate Certificate in Marketing & Digital Strategy from HARVARD UNIVERSITY.</span>
                                </li>
                                <li style={{ display: 'flex', alignItems: 'start', gap: '0.5rem' }}>
                                    <span style={{ color: 'var(--accent)' }}>•</span>
                                    <span>Secretary – Telangana Chapter of Association of Indian Management Schools (AIMS)-2025-26</span>
                                </li>
                                <li style={{ display: 'flex', alignItems: 'start', gap: '0.5rem' }}>
                                    <span style={{ color: 'var(--accent)' }}>•</span>
                                    <span>18 years of experience in teaching Marketing & Analytics.</span>
                                </li>
                            </ul>
                        </div>

                        {/* Experience Timeline */}
                        <div>
                            <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '2rem', fontSize: '1.5rem' }}>
                                <Award color="var(--primary)" /> Key Roles
                            </h3>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                                {experiences.map((exp, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: idx * 0.2 }}
                                        style={{
                                            position: 'relative',
                                            paddingLeft: '1.5rem',
                                            borderLeft: '2px solid var(--primary-light)'
                                        }}
                                    >
                                        <div style={{
                                            position: 'absolute',
                                            left: '-0.35rem',
                                            top: '0.2rem',
                                            width: '0.6rem',
                                            height: '0.6rem',
                                            borderRadius: '50%',
                                            backgroundColor: 'var(--primary)'
                                        }} />
                                        <h4 style={{ fontSize: '1.1rem', marginBottom: '0.2rem', color: 'var(--text-main)' }}>{exp.title}</h4>
                                        <span style={{ fontSize: '0.9rem', color: 'var(--accent)', fontWeight: '500', display: 'block', marginBottom: '0.5rem' }}>
                                            {exp.organization} | {exp.period}
                                        </span>
                                        <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)' }}>{exp.description}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
