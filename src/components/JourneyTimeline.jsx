import React from 'react';
import { motion } from 'framer-motion';

const JourneyTimeline = () => {
    const journeyData = [
        {
            years: "1986 to 1996",
            title: "Schooling",
            color: "#5C76E5", // Blue
            align: "top"
        },
        {
            years: "1996 to 2004",
            title: "Graduation",
            color: "#18E1BE", // Cyan
            align: "bottom"
        },
        {
            years: "2004 to 2014",
            title: "Teaching",
            color: "#30C5DF", // Light blue
            align: "top"
        },
        {
            years: "2014 to 2019",
            title: "Ph.D.",
            color: "#E200D9", // Magenta
            align: "bottom"
        },
        {
            years: "2019 to Present",
            title: "Teaching, Research, Administration",
            color: "#F61E7F", // Pink
            align: "top"
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 100 } }
    };

    return (
        <section className="section" style={{ backgroundColor: 'var(--bg-color)', overflow: 'hidden' }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    style={{ textAlign: 'center', marginBottom: '4rem' }}
                >
                    <h2 className="section-title" style={{ display: 'inline-block' }}>My Journey</h2>
                    <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', marginTop: '1rem' }}>
                        A timeline of academic progression and professional evolution.
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="timeline-container"
                    style={{ position: 'relative', maxWidth: '1000px', margin: '0 auto', padding: '2rem 0' }}
                >
                    {/* The connecting central line for desktop */}
                    <div className="timeline-line hidden-mobile" style={{
                        position: 'absolute',
                        top: '50%',
                        left: 0,
                        right: 0,
                        height: '4px',
                        background: 'linear-gradient(90deg, #5C76E5 0%, #18E1BE 25%, #30C5DF 50%, #E200D9 75%, #F61E7F 100%)',
                        transform: 'translateY(-50%)',
                        borderRadius: '4px',
                        zIndex: 1
                    }}></div>

                    {/* The connecting vertical line for mobile */}
                    <div className="timeline-line hidden-desktop" style={{
                        position: 'absolute',
                        top: 0,
                        bottom: 0,
                        left: '20px',
                        width: '4px',
                        background: 'linear-gradient(180deg, #5C76E5 0%, #18E1BE 25%, #30C5DF 50%, #E200D9 75%, #F61E7F 100%)',
                        borderRadius: '4px',
                        zIndex: 1
                    }}></div>

                    <div className="timeline-grid" style={{ position: 'relative', zIndex: 2 }}>
                        {journeyData.map((item, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className={`timeline-item align-${item.align}`}
                            >
                                <div className="timeline-content" style={{
                                    backgroundColor: '#fff',
                                    padding: '1.5rem',
                                    borderRadius: '16px',
                                    boxShadow: 'var(--shadow-md)',
                                    borderTop: `4px solid ${item.color}`,
                                    position: 'relative'
                                }}>
                                    {/* The node dot */}
                                    <div className="timeline-dot" style={{
                                        position: 'absolute',
                                        width: '20px',
                                        height: '20px',
                                        borderRadius: '50%',
                                        backgroundColor: '#fff',
                                        border: `4px solid ${item.color}`,
                                        boxShadow: '0 0 0 4px rgba(255,255,255,0.8)'
                                    }}></div>

                                    <h4 style={{
                                        color: item.color,
                                        fontWeight: 800,
                                        fontSize: '1.2rem',
                                        marginBottom: '0.5rem',
                                        fontFamily: 'var(--font-sans)'
                                    }}>
                                        {item.years}
                                    </h4>
                                    <p style={{
                                        color: 'var(--secondary)',
                                        fontWeight: 600,
                                        fontSize: '1.1rem',
                                        margin: 0
                                    }}>
                                        {item.title}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>

            <style>{`
                /* Base mobile-first layout (vertical) */
                .timeline-grid {
                    display: flex;
                    flex-direction: column;
                    gap: 2rem;
                    padding-left: 50px;
                }
                
                .timeline-dot {
                    left: -42px;
                    top: 50%;
                    transform: translateY(-50%);
                }
                
                .hidden-desktop { display: block; }
                .hidden-mobile { display: none; }

                /* Desktop layout (horizontal) */
                @media (min-width: 768px) {
                    .timeline-grid {
                        flex-direction: row;
                        justify-content: space-between;
                        gap: 1rem;
                        padding-left: 0;
                    }
                    
                    .timeline-item {
                        flex: 1;
                        display: flex;
                        flex-direction: column;
                    }

                    .timeline-item.align-top {
                        justify-content: flex-end;
                        padding-bottom: 3rem;
                    }

                    .timeline-item.align-bottom {
                        justify-content: flex-start;
                        padding-top: 3rem;
                    }
                    
                    .timeline-dot {
                        left: 50%;
                        transform: translateX(-50%);
                    }

                    .timeline-item.align-top .timeline-dot {
                        bottom: -43px;
                        top: auto;
                    }

                    .timeline-item.align-bottom .timeline-dot {
                        top: -43px;
                        bottom: auto;
                    }

                    .hidden-desktop { display: none; }
                    .hidden-mobile { display: block; }
                }

                .timeline-content {
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                }

                .timeline-item:hover .timeline-content {
                    transform: translateY(-5px);
                    box-shadow: var(--shadow-lg) !important;
                }
            `}</style>
        </section>
    );
};

export default JourneyTimeline;
