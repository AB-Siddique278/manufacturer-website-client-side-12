import React from 'react';

import DisplayReview from '../Dashboard/DisplayReview';
import Banner from './Banner';
import Brands from './Brands';
import BusinessSummary from './BusinessSummary';
import Contact from './Contact';
import Footer from './Footer';
import Tools from './Tools';
import Wholesaler from './Wholesaler';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Tools></Tools>
            <BusinessSummary></BusinessSummary>
            <DisplayReview></DisplayReview>

            
            <Wholesaler></Wholesaler>
            <Contact></Contact>
           
            <Footer></Footer>
        </div>
    );
};

export default Home;