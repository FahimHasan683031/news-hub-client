import { Navigate } from "react-router-dom";
import useAuthContext from "../Hooks/useAuthContext";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const AdminPrivate = ({children}) => {
    const { user, isLoading } = useAuthContext()
    const axiosSecure = useAxiosSecure()
    const { data: adminUser = [],isPending } = useQuery({
        queryKey: ['adminUser'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/${user?.email}`)
            return res.data;
        }
    })
    console.log(isPending,isLoading)
    if (isLoading||isPending) {
        return (<div className="flex justify-center items-center h-[100vh]"><span className="loading loading-spinner text-teal-700  w-12"></span></div>)
    } 
     if (user&& adminUser?.rol==='admin') {
        return children
    }
    return <Navigate  to='/'></Navigate>
};

export default AdminPrivate;