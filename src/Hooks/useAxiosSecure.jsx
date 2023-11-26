import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAuthContext from "./useAuthContext";

const axiosSecure = axios.create({
    // baseURL:'https://homerepair-servier.vercel.app',
    baseURL:'http://localhost:5000',
    withCredentials:true
})

const useAxiosSecure = () => {
    const {signout}=useAuthContext()
    const navigate=useNavigate()
    useEffect(()=>{
        axiosSecure.interceptors.response.use(res=>{
            return res
        },error=>{
            console.log("axios error",error.response)
            if(error.response.status===401||error.response.status===403){
                signout()
                .then(res=>{
                    navigate('/')
                })
                .catch(err=>console.log(err.massage))

            }
        })
    },[])

    return axiosSecure
};

export default useAxiosSecure;