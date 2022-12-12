import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Faq from '../Faq/Faq';
import Items from '../Items/Items';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Items></Items>
            <About></About>
            <Faq></Faq>
        </div>
    );
};

export default Home;