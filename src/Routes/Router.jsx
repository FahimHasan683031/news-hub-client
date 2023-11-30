import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main/Main";
import AddArticles from "../Pages/addArticles/AddArticles";
import AllArticles from "../Pages/allArticles/AllArticles";
import Subscription from "../Pages/subscription/Subscription";
import MyArticles from "../Pages/myArticles/MyArticles";
import PremiumArticles from "../Pages/premiumArticles/PremiumArticles";
import Login from "../Pages/login/Login";
import Register from "../Pages/register/Register";
import Dashboard from "../Layouts/Dashboard/Dashboard";
import Home from "../Pages/home/Home";
import AllUsers from "../Pages/allUsers/AllUsers";
import AdminAllArticles from "../Pages/adminAllArticles/AdminAllArticles";
import AddPublisher from "../Pages/addPUblisher/AddPublisher";
import ArticleSingle from "../Pages/allArticles/ArticleSingle";
import UpdateArticles from "../Pages/updateArticles/UpdateArticles";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Privet from "../privet/Privet";
import AdminPrivate from "../privet/AdminPrivate";
import AdminPichart from "../Pages/AdminPIChart/AdminPichart";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main/>,
        errorElement:<ErrorPage/>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'/addArticles',
                element:<Privet><AddArticles/></Privet>
            },
            {
                path:"/allArticles",
                element:<Privet><AllArticles/></Privet>
            },
            {
                path:"/subscription",
                element:<Privet><Subscription/></Privet>
            },
            {
                path:"/myArticles",
                element:<Privet><MyArticles/></Privet>
            },
            {
                path:"/premiumArticles",
                element:<Privet><PremiumArticles/></Privet>
            },
            {
                path:'/articleSingle/:id',
                element:<Privet><ArticleSingle/></Privet>
            },
            {
                path:'/updateArticles/:id',
                element:<Privet><UpdateArticles/></Privet>
            },
            {
                path:'register',
                element:<Register/>
            },
            {
                path:'login',
                element:<Login/>
            },
        ]
    },
    
    {
        path:'dashboard',
        element:<AdminPrivate><Dashboard/></AdminPrivate>,
        children:[
            {
                path:'Statistic',
                element:<AdminPichart/>
            },
            {
                path:'allUsers',
                element:<AdminPrivate><AllUsers/></AdminPrivate>
            },
            {
                path:'adminAllArticles',
                element:<AdminPrivate><AdminAllArticles/></AdminPrivate>
            },
            {
                path:'addPublisher',
                element:<AdminPrivate><AddPublisher/></AdminPrivate>
            }
        ]
    }
])

