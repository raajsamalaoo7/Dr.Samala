import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Achievements', href: '#achievements' },
        { name: 'Blog', href: '#blog' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'glass py-4 shadow-sm' : 'bg-transparent py-6'
                }`}
            style={{
                backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.9)' : 'transparent',
                borderBottom: isScrolled ? '1px solid var(--border-color)' : 'none'
            }}
        >
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <a href="#home" style={{ fontSize: '1.5rem', fontWeight: '700', fontFamily: 'var(--font-serif)', color: 'var(--primary)' }}>
                    Dr. Samala Nagaraj
                </a>

                {/* Desktop Nav */}
                <ul className="desktop-nav" style={{ display: 'none', gap: '2rem', listStyle: 'none' }}>
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <a href={link.href} style={{ fontWeight: '500', fontSize: '1rem' }} className="nav-link">
                                {link.name}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Mobile Toggle */}
                <button
                    className="mobile-toggle"
                    style={{ display: 'block', background: 'none', border: 'none', cursor: 'pointer', color: 'var(--secondary)' }}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        style={{ backgroundColor: 'var(--surface)', padding: '1rem', borderBottom: '1px solid var(--border-color)' }}
                    >
                        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1.5rem', alignItems: 'center' }}>
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        style={{ fontWeight: '500', fontSize: '1.1rem' }}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
            <style>{`
        @media (min-width: 768px) {
          .desktop-nav { display: flex !important; }
          .mobile-toggle { display: none !important; }
        }
        .nav-link:hover { color: var(--primary); }
      `}</style>
        </nav>
    );
};

export default Navigation;
