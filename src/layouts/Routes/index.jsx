import { createBrowserRouter } from "react-router-dom";
import Maincontent from "../Content/Maincontent";
import Project from "../Content/Project/Index";
import About from "../Content/About/Index"
import { Categories } from "../../Api/Loading";
import Notfound from "../Components/Notfound";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Maincontent />,
        errorElement: <Notfound />
    },
    {
        path: "/projects",
        element: <Project />,
        loader: Categories
    },
    {
        path: "/about",
        element: <About />,
    },
]);