import React from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Banner = ({ pageName }) => {
    return (
        <section className="hero-bg py-24">
            <div className="max-width flex flex-col items-center">
                <h1 className="text-4xl font-bold text-white mb-4">
                    {pageName}
                </h1>
                <p className="text-[#c7c7c7] flex items-center gap-0.5">
                    <Link className="hover:text-secondary" to='/'>Home</Link>
                    <FaAngleDoubleRight size={14}/>
                    <span className="text-secondary">{pageName}</span>
                </p>
            </div>
        </section>
    );
};

export default Banner;
