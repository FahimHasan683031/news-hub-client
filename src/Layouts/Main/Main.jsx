import { Outlet } from "react-router-dom";

const Main = () => {
    return (
        <div>
            this is main layout 
            <Outlet/>
            
        </div>
    );
};

export default Main;