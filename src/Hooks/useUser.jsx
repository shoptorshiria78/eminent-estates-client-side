import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../AxiosInterfaces/useAxiosSecure";


const useUser = () => {

  const  axiosSecure = useAxiosSecure()

    const {data:users=[], refetch} = useQuery({
        queryKey:['users'],
        
        queryFn:async()=>{
            const res = await axiosSecure.get('/users')
            return res.data
        }
    })
    return [users, refetch]
};

export default useUser;