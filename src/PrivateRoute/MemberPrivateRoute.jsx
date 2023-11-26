import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import useMember from "../Hooks/useMember";


const MemberPrivateRoute = ({children}) => {
    const location = useLocation()
    const {user, loading} = useAuth();
    const [isMember, isMemberLoading] = useMember()
    if(loading || isMemberLoading){
        return <span className="loading loading-ring loading-lg"></span>
    }

    if(user && isMember){
      return children
    }

    return <Navigate to='/login' state={{from:location}} replace></Navigate>
};

export default MemberPrivateRoute;