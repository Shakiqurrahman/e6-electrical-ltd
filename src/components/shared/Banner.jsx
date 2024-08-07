import React from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Banner = ({ pageName, text }) => {
  return (
    <section className="hero-bg py-24">
      <div className="max-width flex flex-col items-center">
        <h1 className="text-4xl font-bold text-white">{pageName}</h1>
        {text && (
          <h4 className="mt-2 text-2xl font-bold text-secondary">{text}</h4>
        )}
        <p className="text-[#c7c7c7] mt-4 flex items-center gap-0.5">
          <Link className="hover:text-secondary" to="/">
            Home
          </Link>
          <FaAngleDoubleRight size={14} />
          <span className="text-secondary">{pageName}</span>
        </p>
      </div>
    </section>
  );
};

export default Banner;
