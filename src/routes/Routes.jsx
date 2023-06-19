import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/Home/Home";
import Category from "../pages/home/Category/Category";
import NewsLayout from "../layout/NewsLayout";
import News from "../pages/news/News/News";
import LoginLayout from "../layout/LoginLayout";
import Login from "../pages/loginRegister/Login";
import Register from "../pages/loginRegister/Register";
import PrivateRoute from "./PrivateRoute";
import Terms from "../pages/shared/Terms/Terms";


const router = createBrowserRouter([
    {
        path: '/',
        element: <LoginLayout></LoginLayout>, 
        children: [
            {
                path: '/',
                element: <Navigate to='/category/0'></Navigate>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            },
            {
                path: 'terms',
                element: <Terms></Terms>
            }
        ]
    },
    {
        path: 'category',
        element: <Main></Main>,
        children: [
            {
                path: ':id',
                element: <Category></Category>,
                loader: ({params}) => fetch(`https://the-news-dragon-server-ni-shat.vercel.app/categories/${params.id}`)
            }
        ]
    }, 
    {
        path: 'news',
        element: <NewsLayout></NewsLayout>,
        children: [
            {
                path: ':id',
                element: <PrivateRoute><News></News></PrivateRoute>,
                loader: ({params}) => fetch(`https://the-news-dragon-server-ni-shat.vercel.app/news/${params.id}`)
            }
        ]
    }
])

export default router;



 // {
            //     path: '/',
            //     element: <Category></Category>,
            //     loader: () => fetch('https://the-news-dragon-server-ni-shat.vercel.app/news')
            // }, 