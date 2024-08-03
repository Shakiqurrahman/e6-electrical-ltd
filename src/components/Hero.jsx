import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import img1 from "../assets/images/hero-photo-01.jpg";
import img2 from "../assets/images/hero-photo-02.jpg";

const Hero = () => {
    return (
        <section className="h-[350vh] hero-bg">
            <div className="text-white max-width gap-8 flex justify-center items-center h-full">
                <div className="flex-1 flex flex-col items-start">
                    <h1 className="text-[55px] font-bold leading-none mb-4">
                        Electrical Installation Service in London
                    </h1>
                    <p className="text-lg mb-10">
                        We have 15 years experience in electrical installation,
                        we guaranteed our job for 10 years
                    </p>
                    <Link
                        className="group py-2 sm:py-3.5 px-3 lg:px-6 rounded-lg bg-primary hover:bg-white duration-300 text-white hover:text-primary font-bold text-[12px] sm:text-[15px] flex items-center gap-2.5"
                        to="/"
                    >
                        BOOK NOW
                        <FaArrowRight className="group-hover:ml-1 duration-300 text-[18px]" />
                    </Link>
                </div>
                <div className="flex flex-1 gap-8 justify-center">
                    <img className="w-60 rounded-xl -translate-y-6" src={img2} alt="" />
                    <img className="w-60 rounded-xl translate-y-6" src={img1} alt="" />
                </div>
            </div>
        </section>
    );
};

export default Hero;
