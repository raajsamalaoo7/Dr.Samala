import React from 'react';
import PageWrapper from '../components/PageWrapper';
import Blog from '../components/Blog';

const BlogPage = () => {
    return (
        <PageWrapper>
            <div style={{ paddingTop: '2rem' }}>
                <Blog />
            </div>
        </PageWrapper>
    );
};

export default BlogPage;
