import { Route, Router, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
// import Home from "../home/leftnavigation";
import About from "../components/about/about";
import {Home} from "../components/home/home";
import RootLayout from "../layout/RootLayout";
import ErrorPage from "../error-page/error-page";

const route = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        errorElement: <ErrorPage />,
        children:[
            {
                path:"/",
                element:<Home />
            },
            {
                path:"about",
                element:<About />
            }
        ]
    }
]);

export default route;