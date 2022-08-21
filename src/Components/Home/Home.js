import React from 'react';
import Header from '../Header/Header';
import PricingAndPlan from './PricingAndPlan/PricingAndPlan';
import ServiceProvide from './ServiceProvide/ServiceProvide';
import WhyChooseUs from './WhyChooseUs/WhyChooseUs';

const Home = () => {
    return (
        <div>
            <Header/>
            <WhyChooseUs/>
            <ServiceProvide/>
            <PricingAndPlan/>
        </div>
    );
};

export default Home;