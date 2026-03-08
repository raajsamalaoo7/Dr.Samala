import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navigation from './components/Navigation';

// Page Views
import Home from './pages/Home';
import Research from './pages/Research';
import Teaching from './pages/Teaching';
import Admin from './pages/Admin';
import BlogPage from './pages/BlogPage';
import Social from './pages/Social';
import ContactPage from './pages/ContactPage';

function ScrollToTop() {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return null;
}

function App() {
    const location = useLocation();

    return (
        <div className="app" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: 'var(--bg-color)' }}>
            <ScrollToTop />
            <Navigation />

            <main style={{ flex: 1, position: 'relative' }}>
                <AnimatePresence mode="wait">
                    <Routes location={location} key={location.pathname}>
                        <Route path="/" element={<Home />} />
                        <Route path="/research" element={<Research />} />
                        <Route path="/teaching" element={<Teaching />} />
                        <Route path="/administration" element={<Admin />} />
                        <Route path="/blogs" element={<BlogPage />} />
                        <Route path="/social" element={<Social />} />
                        <Route path="/contact" element={<ContactPage />} />
                    </Routes>
                </AnimatePresence>
            </main>

            {/* Footer */}
            <footer style={{
                backgroundColor: 'var(--secondary)',
                color: '#f5f5f7',
                padding: '4rem 1rem',
                textAlign: 'center',
                marginTop: 'auto'
            }}>
                <div className="container">
                    <h2 style={{ color: '#fff', fontSize: '1.5rem', marginBottom: '1rem', fontWeight: 600 }}>Dr. Samala Nagaraj</h2>
                    <p style={{ color: '#a1a1a6', marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem auto', fontSize: '0.95rem' }}>
                        Dean & Professor at School of Innovation & Management (SoIM), Hyderabad. Dedicated to transforming education and leadership.
                    </p>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginBottom: '2.5rem' }}>
                        <a href="https://scholar.google.com/citations?user=SWcXqogAAAAJ&hl=en&oi=ao" target="_blank" rel="noreferrer" style={{ color: 'var(--primary-light)', fontWeight: 500 }}>Google Scholar</a>
                        <a href="https://www.linkedin.com/in/raajsamala/" target="_blank" rel="noreferrer" style={{ color: 'var(--primary-light)', fontWeight: 500 }}>LinkedIn</a>
                        <a href="https://www.youtube.com/@raajsamala/playlists" target="_blank" rel="noreferrer" style={{ color: 'var(--primary-light)', fontWeight: 500 }}>YouTube</a>
                    </div>
                    <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '2rem', color: '#86868b', fontSize: '0.85rem' }}>
                        © {new Date().getFullYear()} Dr. Samala Nagaraj. All rights reserved.
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default App;
