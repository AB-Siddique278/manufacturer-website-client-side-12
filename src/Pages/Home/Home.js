import React from 'react';
import DisplayReview from '../Dashboard/DisplayReview';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import Footer from './Footer';
import Tools from './Tools';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Tools></Tools>
            <BusinessSummary></BusinessSummary>
            <DisplayReview></DisplayReview>
            <Footer></Footer>
        </div>
    );
};

export default Home;