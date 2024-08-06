import React from 'react';
import Banner from '../components/shared/Banner'
import Certification from '../components/Certification';
import ServicesPricing from '../components/ServicesPricing';

const PricingPage = () => {
    const pageName = "Our Pricing";
    return (
        <>
            {/* ==== Banner Section ==== */}
            <Banner pageName={pageName} />
            {/* ==== Pricing Section ==== */}
            <div className="flex lg:flex-row flex-col my-28 gap-16 lg:gap-6 max-width">
            <Certification />
            <ServicesPricing />
            </div>

        </>
    );
};

export default PricingPage;