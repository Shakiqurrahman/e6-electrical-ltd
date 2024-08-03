import Layout from "../AllRoutes/Layout";
import Home from "../pages/Home";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            // {
            //     path: "/contact",
            //     element: <ContactUsPage />,
            // },
        ],
    },
    // {
    //     path: "*",
    //     element: <ErrorPage />,
    //   },
]);
