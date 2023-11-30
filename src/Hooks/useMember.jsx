import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../AxiosInterfaces/useAxiosSecure";
import useAuth from "./useAuth";


const useMember = () => {

    const axiosSecure = useAxiosSecure();
    const {user, loading} = useAuth();

   const {data:isMember, isPending:isMemberLoading} = useQuery({
        queryKey:['isMember'],
        enabled:!loading,
        queryFn: async()=>{
        const res = await axiosSecure.get(`/user/member/${user.email}`)
        return res.data.member
        }
    })
    return [isMember, isMemberLoading]
};

export default useMember;