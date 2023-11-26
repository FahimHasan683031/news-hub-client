import { Outlet } from "react-router-dom";

const Dashboard = () => {
    return (
        <div>
            this is admin dashboard
            <Outlet/>
        </div>
    );
};

export default Dashboard;