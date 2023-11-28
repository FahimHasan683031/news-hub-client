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

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main/>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'/addArticles',
                element:<AddArticles/>
            },
            {
                path:"/allArticles",
                element:<AllArticles/>
            },
            {
                path:"/subscription",
                element:<Subscription/>
            },
            {
                path:"/myArticles",
                element:<MyArticles/>
            },
            {
                path:"/premiumArticles",
                element:<PremiumArticles/>
            },
            {
                path:'/articleSingle/:id',
                element:<ArticleSingle/>
            },
            {
                path:'/updateArticles/:id',
                element:<UpdateArticles/>
            }
        ]
    },
    {
        path:'register',
        element:<Register/>
    },
    {
        path:'login',
        element:<Login/>
    },
    {
        path:'dashboard',
        element:<Dashboard/>,
        children:[
            {
                path:'allUsers',
                element:<AllUsers/>
            },
            {
                path:'adminAllArticles',
                element:<AdminAllArticles/>
            },
            {
                path:'addPublisher',
                element:<AddPublisher/>
            }
        ]
    }
])

