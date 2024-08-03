import React from "react";
import { Outlet, ScrollRestoration } from "react-router-dom";
import Footer from "../components/shared/Footer";
import Header from "../components/shared/Header";
import Navbar from "../components/shared/Navbar";

const Layout = () => {
    return (
        <>
            <Header />
            <Navbar />
            <Outlet />
            <ScrollRestoration />
            {/* <Footer /> */}
        </>
    );
};

export default Layout;
