import React from 'react';
import Header from '../Header/Header';
import CopyrightFooter from '../SharedComponents/Footer/CopyrightFooter';
import Footer from '../SharedComponents/Footer/Footer';
import ContactUs from './ContactUs/ContactUs';
import DeliveryCalculator from './DeliveryCalculator/DeliveryCalculator';
import LogisticBrand from './LogisticBrand/LogisticBrand';
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
            <ContactUs/>
            <LogisticBrand/>
            <Footer/>
            <CopyrightFooter/>
        </div>
    );
};

export default Home;