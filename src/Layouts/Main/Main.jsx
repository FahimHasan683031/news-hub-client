import { Outlet } from "react-router-dom";
import Header from "../../Shared/Header/Header";
import useAuthContext from "../../Hooks/useAuthContext";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useEffect, useState } from "react";
import Footer from "../../Shared/Footer";

const Main = () => {
    // user subscription expire check
    const { user } = useAuthContext()
    const axiosSecure = useAxiosSecure()
    const [author, setAuthor] = useState({})
    useEffect(() => {
        axiosSecure.get(`/users/${user?.email}`)
            .then(res => setAuthor(res.data))
            .catch(err => console.log(err.message))
    }, [axiosSecure, user])
    if (author.rol === 'premium') {
        const today = new Date()
        const takDate = new Date(author?.premiumInfo.tekDate)
        const defiance = (today - takDate) / (1000 * 60)
        if (author?.premiumInfo.duration < defiance) {
            axiosSecure.patch(`/premiumUser/${user?.email}`, { rol: 'subscriber', premiumInfo:'' })
                .then()
                .catch(err => console.log(err.message))
        }
    }
    return (
        <div>
            <Header />
            <Outlet />
            <Footer/>
        </div>
    );
};

export default Main;