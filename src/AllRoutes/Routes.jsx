import { createBrowserRouter } from "react-router-dom";
import Layout from "../AllRoutes/Layout";
import About from "../pages/About";
import ContactPage from "../pages/ContactPage";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import PricingPage from "../pages/PricingPage";
import PrivaryPolicy from "../pages/PrivaryPolicy";
import ServicePage from "../pages/ServicePage";
import TermsAndConditions from "../pages/TermsAndConditions";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/services",
        element: <ServicePage />,
      },
      {
        path: "/pricing",
        element: <PricingPage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
      {
        path: "/terms-and-conditions",
        element: <TermsAndConditions />,
      },
      {
        path: "/privacy-policy",
        element: <PrivaryPolicy />,
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
]);
