import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        handleScroll();
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Research', path: '/research' },
        { name: 'Teaching', path: '/teaching' },
        { name: 'Admin', path: '/administration' },
        { name: 'Blogs', path: '/blogs' },
        { name: 'Social', path: '/social' },
        { name: 'Gallery', path: '/gallery' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-500`}
            style={{
                backgroundColor: isScrolled ? 'var(--surface-glass)' : 'transparent',
                backdropFilter: isScrolled ? 'blur(20px) saturate(180%)' : 'none',
                WebkitBackdropFilter: isScrolled ? 'blur(20px) saturate(180%)' : 'none',
                borderBottom: isScrolled ? '1px solid rgba(0,0,0,0.05)' : '1px solid transparent',
                padding: isScrolled ? '1rem 0' : '1.5rem 0'
            }}
        >
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Link to="/" style={{ fontSize: '1.4rem', fontWeight: '700', fontFamily: 'var(--font-serif)', color: 'var(--text-main)', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <img src="/logo.png" alt="Logo" style={{ width: '36px', height: '36px', borderRadius: '8px', objectFit: 'contain' }} />
                    <span style={{ letterSpacing: '-0.5px' }}>Dr. Samala</span>
                </Link>

                {/* Desktop Nav */}
                <ul className="desktop-nav" style={{ display: 'none', gap: '2rem', listStyle: 'none', margin: 0, padding: 0 }}>
                    {navLinks.map((link) => {
                        const isActive = location.pathname === link.path;
                        return (
                            <li key={link.name}>
                                <Link
                                    to={link.path}
                                    style={{
                                        fontWeight: isActive ? '600' : '500',
                                        fontSize: '0.95rem',
                                        color: isActive ? 'var(--primary)' : 'var(--text-main)',
                                        transition: 'color 0.2s ease',
                                        position: 'relative'
                                    }}
                                    className="nav-link"
                                >
                                    {link.name}
                                    {isActive && (
                                        <motion.div
                                            layoutId="nav-indicator"
                                            style={{
                                                position: 'absolute',
                                                bottom: '-4px',
                                                left: 0,
                                                right: 0,
                                                height: '2px',
                                                backgroundColor: 'var(--primary)',
                                                borderRadius: '2px'
                                            }}
                                        />
                                    )}
                                </Link>
                            </li>
                        );
                    })}
                </ul>

                {/* Mobile Toggle */}
                <button
                    className="mobile-toggle"
                    style={{ display: 'block', background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-main)' }}
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
                        style={{ backgroundColor: 'var(--surface)', padding: '1rem', borderBottom: '1px solid var(--border-color)', overflow: 'hidden' }}
                    >
                        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1.5rem', alignItems: 'center', margin: 0, padding: '1rem 0' }}>
                            {navLinks.map((link) => {
                                const isActive = location.pathname === link.path;
                                return (
                                    <li key={link.name}>
                                        <Link
                                            to={link.path}
                                            style={{
                                                fontWeight: isActive ? '600' : '400',
                                                fontSize: '1.2rem',
                                                color: isActive ? 'var(--primary)' : 'var(--text-main)'
                                            }}
                                            onClick={() => setIsMobileMenuOpen(false)}
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
            <style>{`
        @media (min-width: 768px) {
          .desktop-nav { display: flex !important; align-items: center; }
          .mobile-toggle { display: none !important; }
        }
        .nav-link:hover { color: var(--primary) !important; }
      `}</style>
        </nav>
    );
};

export default Navigation;
