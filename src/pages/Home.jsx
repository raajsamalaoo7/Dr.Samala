import PageWrapper from '../components/PageWrapper';
import Hero from '../components/Hero';
import About from '../components/About';
import JourneyTimeline from '../components/JourneyTimeline';

const Home = () => {
    return (
        <PageWrapper>
            <div style={{ paddingBottom: '4rem' }}>
                <Hero />
                <About />
                <JourneyTimeline />
            </div>
        </PageWrapper>
    );
};

export default Home;
