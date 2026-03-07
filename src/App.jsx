import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Publications from './components/Publications';
import Blog from './components/Blog';
import Contact from './components/Contact';

function App() {
    return (
        <div className="app">
            <Navigation />
            <main>
                <Hero />
                <About />
                <Publications />
                <Blog />
                <Contact />
            </main>

            {/* Footer */}
            <footer style={{
                backgroundColor: 'var(--secondary)',
                color: '#fff',
                padding: '3rem 1rem',
                textAlign: 'center'
            }}>
                <div className="container">
                    <h2 style={{ color: '#fff', fontSize: '1.5rem', marginBottom: '1rem' }}>Dr. Samala Nagaraj</h2>
                    <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem auto' }}>
                        Dean & Professor at School of Innovation & Management (SoIM), Hyderabad. Dedicated to transforming education and leadership.
                    </p>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', marginBottom: '2rem' }}>
                        <a href="https://scholar.google.com/citations?user=SWcXqogAAAAJ&hl=en&oi=ao" target="_blank" rel="noreferrer" style={{ color: 'var(--border-color)' }}>Google Scholar</a>
                        <a href="https://www.linkedin.com/in/raajsamala/" target="_blank" rel="noreferrer" style={{ color: 'var(--border-color)' }}>LinkedIn</a>
                        <a href="https://www.youtube.com/@raajsamala/playlists" target="_blank" rel="noreferrer" style={{ color: 'var(--border-color)' }}>YouTube</a>
                    </div>
                    <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '2rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                        © {new Date().getFullYear()} Dr. Samala Nagaraj. All rights reserved.
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default App;
