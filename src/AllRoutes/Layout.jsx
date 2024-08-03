import React from "react";
import { Outlet, ScrollRestoration } from "react-router-dom";
import Footer from "../components/shared/Footer";
import Header from "../components/shared/Header";

const Layout = () => {
    return (
        <>
            <Header />
            <Outlet />
            <ScrollRestoration />
            <Footer />
        </>
    );
};

export default Layout;
