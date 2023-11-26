import { useContext } from "react";
import { authContext } from "../Providers/AuthProvider";

const useAuthContext = () => {
    const context = useContext(authContext)
    return ( context
    );
};

export default useAuthContext;