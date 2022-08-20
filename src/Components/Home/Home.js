import React from 'react';
import Header from '../Header/Header';
import ServiceProvide from './ServiceProvide/ServiceProvide';
import WhyChooseUs from './WhyChooseUs/WhyChooseUs';

const Home = () => {
    return (
        <div>
            <Header/>
            <WhyChooseUs/>
            <ServiceProvide/>
        </div>
    );
};

export default Home;