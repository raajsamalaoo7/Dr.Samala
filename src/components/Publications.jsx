import React from 'react';
import { motion } from 'framer-motion';
import { Book, FileText, TrendingUp, Presentation } from 'lucide-react';

const Publications = () => {
    const metrics = [
        { label: "Scopus H-Index", value: "9", icon: <TrendingUp size={24} /> },
        { label: "Citations", value: "1600+", icon: <Book size={24} /> },
        { label: "Research Articles", value: "40+", icon: <FileText size={24} /> },
        { label: "Edited Books", value: "2", icon: <Presentation size={24} /> }
    ];

    const topPapers = [
        {
            title: "Consumer trust in sustainable seafood certification agencies: A comparative study across twelve markets.",
            journal: "Sustainable Futures",
            year: "2026",
            indexed: "ABDC-C, Scopus, Q1"
        },
        {
            title: "Role of consumer health consciousness, food safety & attitude on organic food purchase in emerging market",
            journal: "Journal of Retailing and Consumer Services",
            year: "2021",
            indexed: "SSCI, ABDC-A, Scopus, Q1"
        },
        {
            title: "Fashion Brands are engaging the Millennials: A moderated-mediation model",
            journal: "Young Consumers",
            year: "2019",
            indexed: "ABDC – B, Scopus, Q1"
        }
    ];

    return (
        <section id="achievements" className="section" style={{ backgroundColor: 'var(--bg-color)' }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title">Achievements & Publications</h2>

                    {/* Metrics Grid */}
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                        gap: '1.5rem',
                        marginBottom: '4rem'
                    }}>
                        {metrics.map((m, idx) => (
                            <motion.div
                                key={idx}
                                whileHover={{ y: -5 }}
                                className="glass"
                                style={{
                                    padding: '2rem',
                                    borderRadius: '1rem',
                                    textAlign: 'center',
                                    backgroundColor: '#fff',
                                    boxShadow: 'var(--shadow-sm)'
                                }}
                            >
                                <div style={{ color: 'var(--primary)', marginBottom: '1rem', display: 'flex', justifyContent: 'center' }}>
                                    {m.icon}
                                </div>
                                <div style={{ fontSize: '2.5rem', fontWeight: '700', color: 'var(--secondary)', lineHeight: '1' }}>
                                    {m.value}
                                </div>
                                <div style={{ color: 'var(--text-muted)', marginTop: '0.5rem', fontWeight: '500' }}>
                                    {m.label}
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <h3 style={{ fontSize: '1.8rem', textAlign: 'center', marginBottom: '2rem' }}>Key Publications</h3>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr',
                        gap: '1.5rem',
                        maxWidth: '900px',
                        margin: '0 auto'
                    }}>
                        {topPapers.map((paper, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                style={{
                                    padding: '1.5rem',
                                    backgroundColor: '#fff',
                                    borderRadius: '0.75rem',
                                    borderLeft: '4px solid var(--accent)',
                                    boxShadow: 'var(--shadow-sm)'
                                }}
                            >
                                <h4 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: 'var(--secondary)' }}>
                                    {paper.title}
                                </h4>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                                    <span><strong style={{ color: 'var(--primary)' }}>Journal:</strong> {paper.journal} ({paper.year})</span>
                                    <span><strong style={{ color: 'var(--primary)' }}>Indexed:</strong> {paper.indexed}</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div style={{ textAlign: 'center', marginTop: '3rem' }}>
                        <a
                            href="https://scholar.google.com/citations?user=SWcXqogAAAAJ&hl=en&oi=ao"
                            target="_blank"
                            rel="noreferrer"
                            className="btn btn-outline"
                        >
                            View Full Google Scholar Profile
                        </a>
                    </div>

                </motion.div>
            </div>
        </section>
    );
};

export default Publications;
