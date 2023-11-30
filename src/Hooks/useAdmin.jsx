import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../AxiosInterfaces/useAxiosSecure";
import useAuth from "./useAuth";


const useAdmin = () => {

    const axiosSecure = useAxiosSecure();
    const {user, loading} = useAuth();

    const {data:isAdmin, isPending:isAdminLoading} = useQuery({
        queryKey:['isAdmin'],
        enabled:!loading,
        queryFn: async()=>{
        const res = await axiosSecure.get(`/user/admin/${user.email}`)
        return res.data.admin
        }
    })
    return [isAdmin, isAdminLoading]
};

export default useAdmin;