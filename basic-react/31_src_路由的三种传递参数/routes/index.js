
import { Navigate } from "react-router-dom";
import Detail from "../pages/Home/Message/Detail";
import About from "../pages/About/About";
import Home from "../pages/Home/Home";
import Message from "../pages/Home/Message";
import News from "../pages/Home/News";


export default [
    {
        path: '/about',
        element: <About />
    },
    {
        path: '/home',
        element: <Home />,
        children: [
            {
                path: 'news',
                element: <News />
            },
            {
                path: 'message',
                element: <Message />,
                children: [
                    {
                        /* 传递params参数占位符 */
                        /* path: 'detail/:id/:title/:content', */

                        //search/state参数占位符
                        path: 'detail',
                        element:<Detail/>
                        
                   } 
                ]
            }
        ]
    },
    {
        path: '/',
        element: <Navigate to="/about" />
    }

]