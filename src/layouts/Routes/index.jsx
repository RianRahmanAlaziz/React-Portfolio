import { createBrowserRouter } from "react-router-dom";
import Maincontent from "../Content/Maincontent";
import Index from "../Content/Project/Index";
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
        element: <Index />,
        loader: Categories
    },
]);