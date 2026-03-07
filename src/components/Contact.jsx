import React from 'react';
import { motion } from 'framer-motion';
import { User, Mail, Phone, Building, Send } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = React.useState({
        name: '',
        email: '',
        mobile: '',
        affiliation: '',
        purpose: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const subject = `Portfolio Query from ${formData.name}`;
        const body = `
      Name: ${formData.name}
      Email: ${formData.email}
      Mobile: ${formData.mobile}
      Institution/Affiliation: ${formData.affiliation}
      
      Purpose:
      ${formData.purpose}
    `;
        window.location.href = `mailto:raajsamala.phd@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    };

    return (
        <section id="contact" className="section" style={{ backgroundColor: '#fff' }}>
            <div className="container" style={{ maxWidth: '800px' }}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        <h2 className="section-title">Contact & Connect</h2>
                        <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>
                            Interested in collaboration, mentoring, or speaking engagements? Feel free to drop a message.
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr',
                        gap: '1.5rem',
                        backgroundColor: 'var(--bg-color)',
                        padding: '2.5rem',
                        borderRadius: '1rem',
                        boxShadow: 'var(--shadow-md)'
                    }}>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
                            <div className="input-group">
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500, color: 'var(--secondary)' }}>Full Name</label>
                                <div style={{ position: 'relative' }}>
                                    <User size={18} style={{ position: 'absolute', top: '50%', left: '1rem', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                                    <input type="text" name="name" required onChange={handleChange} style={{ width: '100%', padding: '0.75rem 1rem 0.75rem 2.5rem', borderRadius: '0.5rem', border: '1px solid var(--border-color)', outline: 'none' }} placeholder="Dr. John Doe" />
                                </div>
                            </div>
                            <div className="input-group">
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500, color: 'var(--secondary)' }}>Email Address</label>
                                <div style={{ position: 'relative' }}>
                                    <Mail size={18} style={{ position: 'absolute', top: '50%', left: '1rem', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                                    <input type="email" name="email" required onChange={handleChange} style={{ width: '100%', padding: '0.75rem 1rem 0.75rem 2.5rem', borderRadius: '0.5rem', border: '1px solid var(--border-color)', outline: 'none' }} placeholder="john@example.com" />
                                </div>
                            </div>
                            <div className="input-group">
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500, color: 'var(--secondary)' }}>Mobile Number</label>
                                <div style={{ position: 'relative' }}>
                                    <Phone size={18} style={{ position: 'absolute', top: '50%', left: '1rem', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                                    <input type="tel" name="mobile" required onChange={handleChange} style={{ width: '100%', padding: '0.75rem 1rem 0.75rem 2.5rem', borderRadius: '0.5rem', border: '1px solid var(--border-color)', outline: 'none' }} placeholder="+91 9876543210" />
                                </div>
                            </div>
                            <div className="input-group">
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500, color: 'var(--secondary)' }}>Institution/Affiliation</label>
                                <div style={{ position: 'relative' }}>
                                    <Building size={18} style={{ position: 'absolute', top: '50%', left: '1rem', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                                    <input type="text" name="affiliation" required onChange={handleChange} style={{ width: '100%', padding: '0.75rem 1rem 0.75rem 2.5rem', borderRadius: '0.5rem', border: '1px solid var(--border-color)', outline: 'none' }} placeholder="University/Company Name" />
                                </div>
                            </div>
                        </div>

                        <div className="input-group">
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500, color: 'var(--secondary)' }}>Purpose of Connection</label>
                            <textarea name="purpose" required onChange={handleChange} rows="4" style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '0.5rem', border: '1px solid var(--border-color)', outline: 'none', resize: 'vertical' }} placeholder="Please describe how I can help you..."></textarea>
                        </div>

                        <button type="submit" className="btn btn-primary" style={{ width: '100%', display: 'flex', gap: '0.5rem', justifyContent: 'center' }}>
                            <Send size={18} /> Send Message
                        </button>
                    </form>

                    <div style={{ textAlign: 'center', marginTop: '2rem', display: 'flex', justifyContent: 'center', gap: '2rem' }}>
                        <a href="https://www.linkedin.com/in/raajsamala/" target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--primary)', fontWeight: 500 }}>
                            LinkedIn Profile
                        </a>
                        <a href="https://www.youtube.com/@raajsamala/playlists" target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'red', fontWeight: 500 }}>
                            YouTube Channel
                        </a>
                    </div>
                </motion.div>
            </div>
            <style>{`
        input:focus, textarea:focus { border-color: var(--primary) !important; box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.2); }
      `}</style>
        </section>
    );
};

export default Contact;
