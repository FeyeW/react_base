import About from "../component/About/About";
import Home from "../component/Home/Home";
import { Navigate } from "react-router-dom";
export default [
    {
        path: '/about',
        element: <About />
    },
    {
        path: '/home',
        element: <Home />
    },
    {
        path: '/',
        element: <Navigate to="/about" />
    }
]