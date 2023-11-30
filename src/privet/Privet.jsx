import {Navigate, useLocation } from "react-router-dom";
import useAuthContext from "../Hooks/useAuthContext";

const Privet = ({children}) => {
    const {user,isLoading} = useAuthContext()
    const location = useLocation()
    if (isLoading){
        return  (<div className="flex justify-center items-center h-[100vh]"><span className="loading loading-spinner text-teal-700  w-12"></span></div>)
    } else if (user){
        return children
    }
    return <Navigate state={location.pathname} to='/login'></Navigate>
};

export default Privet;