import React from 'react';
import Header from '../Header/Header';
import CopyrightFooter from '../SharedComponents/Footer/CopyrightFooter';
import Footer from '../SharedComponents/Footer/Footer';
import DeliveryCalculator from './DeliveryCalculator/DeliveryCalculator';
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
            <DeliveryCalculator/>
            <Footer/>
            <CopyrightFooter/>
        </div>
    );
};

export default Home;