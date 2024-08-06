import { createBrowserRouter } from "react-router-dom";
import Layout from "../AllRoutes/Layout";
import Home from "../pages/Home";
import About from "../pages/About";
import PricingPage from "../pages/PricingPage";
import ErrorPage from "../pages/ErrorPage";

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
          path: "/pricing",
          element: <PricingPage />,
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
  
]);
