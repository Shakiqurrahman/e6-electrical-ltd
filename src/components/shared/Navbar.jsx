import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const handleClose = () => {
        setIsOpen(false);
    };
    return (
        <nav className={`bg-navy w-full  sticky top-0 z-50`}>
            <div className="flex flex-row-reverse md:flex-row items-center justify-between max-width py-3">
                <ul className={
              isOpen ? "side-nav" : "nav-links  md:flex gap-2 text-white"
            }>
                    <li>
                        <NavLink
                            to="/"
                            className="block text-[15px] font-semibold uppercase px-5 py-3.5 md:py-2.5 bg-transparent hover:text-navy hover:bg-white md:rounded-lg duration-300"
                            onClick={handleClose}
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className="block text-[15px] font-semibold uppercase px-5 py-3.5 md:py-2.5 bg-transparent hover:text-navy hover:bg-white md:rounded-lg duration-300"
                            to="/about"
                            onClick={handleClose}
                        >
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className="block text-[15px] font-semibold uppercase px-5 py-3.5 md:py-2.5 bg-transparent hover:text-navy hover:bg-white md:rounded-lg duration-300"
                            to="/services"
                            onClick={handleClose}
                        >
                            Services
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className="block text-[15px] font-semibold uppercase px-5 py-3.5 md:py-2.5 bg-transparent hover:text-navy hover:bg-white md:rounded-lg duration-300"
                            to="/pricing"
                            onClick={handleClose}
                        >
                            Pricing
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className="block text-[15px] font-semibold uppercase px-5 py-3.5 md:py-2.5 bg-transparent hover:text-navy hover:bg-white md:rounded-lg duration-300"
                            to="/contact"
                            onClick={handleClose}
                        >
                            Contact
                        </NavLink>
                    </li>
                </ul>
                <Link
                    className="py-2 sm:py-2.5 px-3 lg:px-5 rounded-lg bg-secondary hover:bg-white duration-300 text-navy font-bold text-[12px] sm:text-[15px]"
                    to="/"
                >
                    GET A QUOTE
                </Link>
                <div
                    className="md:hidden w-10 h-[35px] p-2  rounded-[4px] cursor-pointer flex justify-center items-center z-10"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <div
                        className={isOpen ? "active-hamburger" : "hamburger"}
                    ></div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
