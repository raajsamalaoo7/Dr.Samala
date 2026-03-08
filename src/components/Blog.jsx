import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Linkedin } from 'lucide-react';

const Blog = () => {
    const posts = [
        {
            title: "Critical Thinking Through Education",
            excerpt: "Exploring how we can foster critical thinking in the AI era and why it remains our most essential human skill.",
            url: "https://www.linkedin.com/posts/raajsamala_ai-critical-thinking-through-education-activity-7418132469268529152-L1Xi",
            category: "Education & AI"
        },
        {
            title: "Universities & Learners in the AI Era",
            excerpt: "Reflecting on the evolving relationship between higher education institutions and modern learners.",
            url: "https://www.linkedin.com/posts/raajsamala_universities-learners-activity-7416525148977025024-7ef-",
            category: "Higher Ed Insights"
        },
        {
            title: "Taxonomy in the AI Era",
            excerpt: "How traditional educational taxonomies are being challenged and redefined by artificial intelligence.",
            url: "https://www.linkedin.com/posts/raajsamala_taxonomy-in-ai-era-activity-7414871149140140032-irju",
            category: "Pedagogy"
        },
        {
            title: "MBA 2.0 For Industry Partners",
            excerpt: "Why the MBA curriculum needs a major overhaul to meet the rapidly shifting demands of industry partners.",
            url: "https://www.linkedin.com/posts/raajsamala_mba-20-for-industry-partners-activity-7411301119194267648-4lGe",
            category: "Curriculum Design"
        },
        {
            title: "Universities & GII 2025",
            excerpt: "Analyzing the role universities play in the Global Innovation Index 2025 and fostering national growth.",
            url: "https://www.linkedin.com/posts/raajsamala_universities-gii-2025-activity-7411247102552412160-Fs0n",
            category: "Innovation"
        },
        {
            title: "MBA 2.0 For Regulators",
            excerpt: "Navigating the regulatory landscape while transforming management education for the future.",
            url: "https://www.linkedin.com/posts/raajsamala_mba-20-for-regulators-activity-7407623288161546240-C-B_",
            category: "Higher Ed Policy"
        },
        {
            title: "Meta-Management for Institutions",
            excerpt: "How universities and institutions can apply meta-management principles to thrive in complex environments.",
            url: "https://www.linkedin.com/posts/raajsamala_meta-managementfor-institutionsuniversities-activity-7403999396000153600-awSW",
            category: "Leadership"
        },
        {
            title: "Meta-Management for Students",
            excerpt: "Empowering students with meta-management skills to take control of their own learning journeys.",
            url: "https://www.linkedin.com/posts/raajsamala_meta-management-for-students-activity-7402546008607629312-RAb_",
            category: "Student Success"
        },
        {
            title: "From Management to Meta-Management",
            excerpt: "Tracing the evolution of management theory towards higher-order organizational thinking.",
            url: "https://www.linkedin.com/posts/raajsamala_from-management-to-meta-management-ugcPost-7401619666408009728-77iY",
            category: "Strategy"
        },
        {
            title: "The Shift to Meta-Management",
            excerpt: "A continuation of the discussion on why meta-management is the next frontier for global organizations.",
            url: "https://www.linkedin.com/posts/raajsamala_from-management-to-meta-management-activity-7401619667787968512-sNhc",
            category: "Strategy"
        }
    ];

    return (
        <section id="blog" className="section" style={{ backgroundColor: 'var(--bg-color)' }}>
            <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <h2 className="section-title" style={{ display: 'inline-block' }}>Latest Thoughts on LinkedIn</h2>
                        <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', marginTop: '1rem' }}>
                            A curation of my recent reflections on education, AI, and management.
                        </p>
                    </div>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
                        gap: '2rem'
                    }}>
                        {posts.map((post, idx) => (
                            <motion.a
                                href={post.url}
                                target="_blank"
                                rel="noreferrer"
                                key={idx}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: idx * 0.05 }}
                                whileHover={{ y: -8, boxShadow: 'var(--shadow-lg)' }}
                                style={{
                                    backgroundColor: '#fff',
                                    borderRadius: '20px',
                                    padding: '2rem',
                                    boxShadow: 'var(--shadow-md)',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    textDecoration: 'none',
                                    border: '1px solid var(--border-color)',
                                    position: 'relative',
                                    overflow: 'hidden'
                                }}
                            >
                                <div style={{ position: 'absolute', top: '-10px', right: '-10px', opacity: 0.05, color: 'var(--primary)' }}>
                                    <Linkedin size={120} />
                                </div>

                                <span style={{
                                    color: 'var(--primary)',
                                    fontSize: '0.85rem',
                                    fontWeight: 700,
                                    letterSpacing: '1px',
                                    textTransform: 'uppercase',
                                    marginBottom: '1rem',
                                    display: 'inline-block'
                                }}>
                                    {post.category}
                                </span>

                                <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem', color: 'var(--secondary)', lineHeight: 1.4 }}>
                                    {post.title}
                                </h3>

                                <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', flexGrow: 1, fontSize: '0.95rem', lineHeight: 1.6 }}>
                                    {post.excerpt}
                                </p>

                                <div style={{ color: 'var(--primary)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: 'auto' }}>
                                    Read on LinkedIn <ArrowRight size={18} />
                                </div>
                            </motion.a>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Blog;
