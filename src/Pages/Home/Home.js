import React from 'react';
import DisplayReview from '../Dashboard/DisplayReview';
import Banner from './Banner';
import Tools from './Tools';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Tools></Tools>
            <DisplayReview></DisplayReview>
        </div>
    );
};

export default Home;