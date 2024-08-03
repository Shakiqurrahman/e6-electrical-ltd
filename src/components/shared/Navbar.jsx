import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={`bg-navy w-full  sticky top-0`} >
            <div className="flex items-center justify-between max-width py-3">
                <ul className="flex gap-2 text-white">
                    <li>
                        <NavLink
                            to="/"
                            className="text-[15px] font-semibold uppercase px-5 py-2.5 bg-transparent hover:text-navy hover:bg-white rounded-lg duration-300"
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className="text-[15px] font-semibold uppercase px-5 py-2.5 bg-transparent hover:text-navy hover:bg-white rounded-lg duration-300"
                            to="/about"
                        >
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className="text-[15px] font-semibold uppercase px-5 py-2.5 bg-transparent hover:text-navy hover:bg-white rounded-lg duration-300"
                            to="/about"
                        >
                            Services
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className="text-[15px] font-semibold uppercase px-5 py-2.5 bg-transparent hover:text-navy hover:bg-white rounded-lg duration-300"
                            to="/about"
                        >
                            Pricing
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className="text-[15px] font-semibold uppercase px-5 py-2.5 bg-transparent hover:text-navy hover:bg-white rounded-lg duration-300"
                            to="/contact"
                        >
                            Contact
                        </NavLink>
                    </li>
                </ul>
                <Link
                    className="py-2.5 px-5 rounded-lg bg-secondary text-navy font-bold text-[15px]"
                    to="/"
                >
                    GET A QUOTE
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;