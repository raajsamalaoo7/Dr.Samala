import React from 'react';
import PageWrapper from '../components/PageWrapper';
import Contact from '../components/Contact';

const ContactPage = () => {
    return (
        <PageWrapper>
            <div style={{ paddingTop: '2rem' }}>
                <Contact />
            </div>
        </PageWrapper>
    );
};

export default ContactPage;
