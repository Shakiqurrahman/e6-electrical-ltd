import React from 'react';
import Banner from '../components/shared/Banner';
import AboutUs from '../components/AboutUs';
import Vision from '../components/Vision';

const About = () => {
    const pageName = 'About';
    return (
        <>
            <Banner pageName={pageName}/>
            <AboutUs />
            <Vision />
        </>
    );
};

export default About;