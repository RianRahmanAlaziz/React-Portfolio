import { createBrowserRouter } from "react-router-dom";
import Maincontent from "../Content/Maincontent";
import Project from "../Content/Project/Index";
import About from "../Content/About/Index"
import { ProjectsLoader, HomeLoader, AboutLoader } from "../../Api/Loading";
import Notfound from "../Components/Notfound";
import Archive from "../Content/Project/Archive";
import Page from "../Content/Project/page";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Maincontent />,
        errorElement: <Notfound />,
        loader: HomeLoader
    },
    {
        path: "/projects",
        children: [
            {
                index: true, // = /projects
                element: <Project />,
                loader: ProjectsLoader
            },
            {
                path: "archive", // = /projects/archive
                element: <Archive />,
                loader: ProjectsLoader
            },
            // Tambahkan ini:
            {
                path: ":slug", // = /projects/:slug
                element: <Page />,
                loader: ProjectsLoader
            }
        ]
    },
    {
        path: "/about",
        element: <About />,
        loader: AboutLoader,
    },
]);