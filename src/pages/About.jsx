import React from "react";
import AboutUs from "../components/AboutUs";
import Banner from "../components/shared/Banner";
import Vision from "../components/Vision";
import Heading from "../components/Heading";
import OurProducts from "../components/OurProducts";

const About = () => {
    const pageName = "About";
    return (
        <>
            {/* ==== Banner Section ==== */}
            <Banner pageName={pageName} />

            {/* ==== About Us Section ==== */}
            <AboutUs />

            {/* ==== vision Section ==== */}
            <Vision />

            {/* ==== Our Products Section ==== */}
            <section className="max-width py-6">
                <Heading>We Use Those Products</Heading>
                <OurProducts />
            </section>
        </>
    );
};

export default About;
