import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main/Main";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main/>,
        children:[
            {
                path:'/',
                element:<h1>this ishome</h1>
            }
        ]
    },
    {
        path:'login',
        element:<h1>this is login</h1>
    }
])

