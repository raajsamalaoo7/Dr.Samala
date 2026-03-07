import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar } from 'lucide-react';

const Blog = () => {
    const posts = [
        {
            title: "The Future of AI in Marketing Execution",
            date: "Oct 12, 2023",
            excerpt: "Exploring how Artificial Intelligence is moving beyond predictive analytics into generative marketing strategies...",
            category: "Analytics"
        },
        {
            title: "Building Resilient Business Ecosystems",
            date: "Aug 05, 2023",
            excerpt: "Keynote insights on how organizations can adapt and thrive in the 'Next Normal' by fostering resilient cultures.",
            category: "Leadership"
        },
        {
            title: "Demystifying Over-the-Top (OTT) Video Services in India",
            date: "Apr 22, 2023",
            excerpt: "A deep dive into the shifting consumer viewing habits and the factors driving subscription willingness in the Indian market.",
            category: "Research"
        }
    ];

    return (
        <section id="blog" className="section" style={{ backgroundColor: 'var(--bg-color)' }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem' }}>
                        <h2 className="section-title" style={{ marginBottom: 0 }}>Latest Thoughts & Articles</h2>
                        <a href="#" style={{ color: 'var(--primary)', display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 500 }}>
                            View All <ArrowRight size={18} />
                        </a>
                    </div>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                        gap: '2rem'
                    }}>
                        {posts.map((post, idx) => (
                            <motion.div
                                key={idx}
                                whileHover={{ y: -10 }}
                                style={{
                                    backgroundColor: '#fff',
                                    borderRadius: '1rem',
                                    overflow: 'hidden',
                                    boxShadow: 'var(--shadow-md)',
                                    display: 'flex',
                                    flexDirection: 'column'
                                }}
                            >
                                <div style={{ height: '200px', backgroundColor: 'var(--border-color)', position: 'relative' }}>
                                    {/* Placeholder for feature image */}
                                    <div style={{ position: 'absolute', top: '1rem', left: '1rem', backgroundColor: 'rgba(255,255,255,0.9)', padding: '0.25rem 0.75rem', borderRadius: '2rem', fontSize: '0.8rem', fontWeight: 600, color: 'var(--primary)' }}>
                                        {post.category}
                                    </div>
                                    <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-muted)' }}>
                                        [Image Placeholder]
                                    </div>
                                </div>
                                <div style={{ padding: '2rem', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1rem' }}>
                                        <Calendar size={16} /> {post.date}
                                    </div>
                                    <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--secondary)' }}>
                                        {post.title}
                                    </h3>
                                    <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', flexGrow: 1 }}>
                                        {post.excerpt}
                                    </p>
                                    <a href="#" style={{ color: 'var(--primary)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                                        Read Article <ArrowRight size={16} />
                                    </a>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Blog;
