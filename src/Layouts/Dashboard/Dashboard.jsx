import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
    return (
        <div className="flex max-w-screen-xl mx-auto px-6">
            <div className="w-64 pt-10 h-screen bg-teal-600 text-white ">
                <ul className="menu">
                    <li><NavLink to='Statistic'>Statistic</NavLink></li>
                    <li><NavLink to='allUsers'>All Users</NavLink></li>
                    <li><NavLink to='adminAllArticles'>All Articles</NavLink></li>
                    <li><NavLink to='addPublisher'>Add Publisher</NavLink></li>
                    
                    <li><NavLink to='/'> Home</NavLink></li>
                </ul>

            </div>
            <div className="flex-1">
                <Outlet/>
            </div>
        </div>
    );
};

export default Dashboard;