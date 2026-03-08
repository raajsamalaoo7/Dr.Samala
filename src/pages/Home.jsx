import React from 'react';
import PageWrapper from '../components/PageWrapper';
import Hero from '../components/Hero';
import About from '../components/About';

const Home = () => {
    return (
        <PageWrapper>
            <div style={{ paddingBottom: '4rem' }}>
                <Hero />
                <About />
            </div>
        </PageWrapper>
    );
};

export default Home;
