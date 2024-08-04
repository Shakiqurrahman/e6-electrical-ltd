import React from "react";
import { Outlet, ScrollRestoration } from "react-router-dom";
import Header from "../components/shared/Header";
import Footer from "../components/shared/footer/Footer";

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
