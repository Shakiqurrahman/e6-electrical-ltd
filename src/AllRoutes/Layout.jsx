import React from "react";
import { Outlet, ScrollRestoration } from "react-router-dom";
import Header from "../components/shared/Header";
import Footer from "../components/shared/footer/Footer";
import Navbar from "../components/shared/Navbar";

const Layout = () => {
  return (
    <>
      <Header />
      <Navbar />
      <Outlet />
      <ScrollRestoration />
      <Footer />
    </>
  );
};

export default Layout;
