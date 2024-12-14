import { createBrowserRouter } from "react-router";
import Layout from "./components/layout";

import { Home } from "./pages/home";
import { Projects } from "./pages/projects";
import { About } from "./pages/about";
import { Contact } from "./pages/contact";





const router = createBrowserRouter([{
    element: <Layout/>,
    children: [
        {
            path: "/",
            element: <Home />
        },
        {
            path: "/about",
            element: <About />
        },
        {
            path: "/projects",
            element: <Projects />
        },

        {
            path: "/contacts",
            element: <Contact />
        },
    ]
}])


export default router;